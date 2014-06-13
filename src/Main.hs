{-# LANGUAGE NoMonomorphismRestriction, ExistentialQuantification, FlexibleInstances, MultiParamTypeClasses, GeneralizedNewtypeDeriving, RankNTypes, FlexibleContexts, TypeFamilies, ConstraintKinds #-}
module Main where
import Data.List hiding (span)
import Data.Maybe (catMaybes)
import Data.Monoid hiding ((<>))
import Data.String (IsString, fromString)
import qualified Data.Traversable as T
import Control.Applicative
import Control.Concurrent.MVar
import Control.Monad.Cont
import Haste hiding (toString, fromString, onEvent)
import Shade.Core.Internal.Core
import qualified Shade.Core.Internal.Events as E
import Shade.Haste.Internal.React (React)
import Shade.Haste.Internal.Core
import qualified Shade.Core.Internal.Attributes as S
import Haste.Foreign
import Haste.JSON
import Haste.Prim
import Prelude hiding (div, span)
import System.IO.Unsafe
import Unsafe.Coerce

class ListEdit e a where
  insertAt :: Int -> a -> e ([a] -> [a])
  setAt    :: Int -> a -> e ([a] -> [a])
  deleteAt :: Int -> e ([a] -> [a])

data ListEditUnit a = ListEditUnit
instance ListEdit ListEditUnit a where
  insertAt n i = ListEditUnit
  setAt n i = ListEditUnit
  deleteAt n = ListEditUnit

newtype ListEditImpl a = ListEditImpl {unListEditImpl :: a}
instance ListEdit ListEditImpl i where
  insertAt n item = ListEditImpl $ \xs -> let (ys, zs) = splitAt n xs in ys ++ [item] ++ zs
  setAt n item = ListEditImpl $ \xs -> let (ys, zs) = splitAt n xs in ys ++ [item] ++ (tail zs)
  deleteAt n = ListEditImpl $ \xs -> let (ys, zs) = splitAt n xs in ys ++ (tail zs)

newtype ListEditShow a = ListEditShow {unListEditShow :: String}
instance (Show i) => ListEdit ListEditShow i where
  insertAt n item = ListEditShow $ "insertAt(" ++ show n ++ "," ++ show item ++ ")"
  setAt n item = ListEditShow $ "setAt(" ++ show n ++ "," ++ show item ++ ")"
  deleteAt n = ListEditShow $ "deleteAt(" ++ show n ++ ")"

newtype ListEditDup r1 r2 a = ListEditDup {unListEditDup :: (r1 a, r2 a)}
instance (ListEdit r1 a, ListEdit r2 a) => ListEdit (ListEditDup r1 r2) a where
  insertAt n i = ListEditDup (insertAt n i, insertAt n i)
  setAt n i = ListEditDup (setAt n i, setAt n i)
  deleteAt n = ListEditDup (deleteAt n, deleteAt n)
  
enterKey = 13 :: Int
escapeKey = 27 :: Int

data TodoItemStructure r = 
  TodoItemStructure { editTodoItem :: Async r (Maybe (TodoItem r))
                    }

todoItem :: (Shade r) => (TodoItem r) -> r (TodoItemStructure r)
todoItem ti = 
  do (toggleAsync, toggle) <- letElt (input [S.className ["toggle"]
                                            ,S.typeInfo "checkbox"
                                            ,S.checked (completed ti)])
     (nameLabelAsync, nameLabel) <- letElt (label [] (text (taskName ti)))
     (destroyAsync, destroy) <- letElt (button [S.className ["destroy"]] (return ()))
     (editFieldAsync, editField) <- letElt (input [S.className ["edit"],S.value (editName ti)])
     let rnd = (li [S.className (catMaybes [(if (completed ti) then Just "completed " else Nothing)
                                           ,(if (editing ti) then Just "editing" else Nothing)])]
                        (do (div [S.className ["view"]]
                             (do toggle
                                 nameLabel
                                 destroy))
                            editField))
     let startEdit = (fmap (const (Just (ti {editing = True
                                            ,editName = (fromString (taskName ti))}))) (onDoubleClick nameLabelAsync))
     let doEdit = (fmap (\s -> (Just (ti {editName = (E.changeEventValue s)}))) (onChange editFieldAsync))
     let doneEdit = fireFirst [(fmap (const True) (onBlur editFieldAsync))
                              ,(fmap (\ke -> (E.which ke) == enterKey) (onKeyDown editFieldAsync))]
     -- FIXME this 2nd fmap makes us quite slow.
     let cancelEdit = (fmap (\ke -> if (((E.which ke) == escapeKey) && ((editing ti) == True))
                                    then Just (ti {editing = False
                                                  ,editName = fromString ""})
                                    else Just ti)
                       (onKeyDown editFieldAsync))
     let submitTask = fmap (\de -> if (de && ((editing ti) == True))
                                   then (if ((length (toString (editName ti))) > 0)
                                         then (Just (ti {editing = False
                                                        ,editName = fromString ""
                                                        ,taskName = (toString (editName ti))}))
                                         else Nothing)
                                   else (Just ti)) doneEdit
     let destroyTask = (fmap (const Nothing) (onClick destroyAsync))
     let toggleDone = (fmap (\e -> (Just (ti {completed = not (completed ti)}))) (onChange toggleAsync))
     rnd
     return (TodoItemStructure (fireFirst [startEdit, doEdit, submitTask, destroyTask, toggleDone]))

taskNames tvm = map taskName (todoItems tvm)

defaultTask :: (Shade r) => String -> (TodoItem r)
defaultTask n = TodoItem n (fromString "") False False
defaultTaskViewModel :: (Shade r) => [String] -> (TaskViewModel r)
defaultTaskViewModel tNames = TaskViewModel (map defaultTask tNames) (fromString "") AllTodos

data FooterStructure r =
  FooterStructure { nextFilter :: Async r TodoFilter
                  , clearCompleted :: Async r ()
                  }

todoFooter :: (Shade r) => Int -> Int -> TodoFilter -> r (FooterStructure r)
todoFooter totalCount activeCount todoFilter =
  do let completedCount = (totalCount - activeCount)
     (clearButtonAsync, clearButton) <- letElt (button [S.idName "clear-completed"]
                                                  (text ("Clear completed (" ++ show completedCount ++")")))
     let maybeClear = if (completedCount > 0)
                      then (clearButton >> return ())
                      else (return ())
     (allAsync, all) <- letElt (filterItem "All" AllTodos todoFilter)
     (activeAsync, active) <- letElt (filterItem "Active" Active todoFilter)
     (completedAsync, completed) <- letElt (filterItem "Completed" Completed todoFilter)
     (footer [S.idName "footer"]
        (do (span [S.idName "todo-count"]
                   (do (strong [] (text (show activeCount)))
                       (text (" " ++ (if (activeCount == 1)
                                          then "item"
                                          else "items") ++" left"))))
            (ul [S.idName "filters"] (all >> active >> completed))
            maybeClear))
     return FooterStructure {nextFilter = (fireFirst [(fmap (const AllTodos) (onClick allAsync))
                                                     ,(fmap (const Active) (onClick activeAsync))
                                                     ,(fmap (const Completed) (onClick completedAsync))])
                            ,clearCompleted = (fmap (const ()) (onClick clearButtonAsync))}
  where
    filterItem name filter curFilter = li [] (a [S.href ("#/" ++ name)
                                                ,S.className (if filter == curFilter
                                                              then ["selected"]
                                                              else [])]
                                                (text name))

data TodoAppStructure r e a =
  TodoAppStructure { editCommand :: Async r (Maybe (e ([a] -> [a])))
                   , newTaskInputChange :: Async r (NativeString r)
                   , todoNextFilter :: Async r TodoFilter
                   , todoClearCompleted :: Async r ()
                   }





data TodoFilter = Active | Completed | AllTodos deriving (Show, Eq)
data TodoItem r = TodoItem { taskName :: !String
                           , editName :: !(NativeString r)
                           , completed :: !Bool
                           , editing :: !Bool
                           } -- deriving (Show)
data TaskViewModel r = TaskViewModel { todoItems :: ![(TodoItem r)]
                                     , _newTaskInput :: !(NativeString r)
                                     , todoFilter :: !TodoFilter
                                     } -- deriving (Show)


todoApp :: (ListEdit e (TodoItem r), Shade r) => (TaskViewModel r) -> r (TodoAppStructure r e (TodoItem r))
todoApp tvm =
  do let shown = filter (tFilt (todoFilter tvm)) (todoItems tvm)
     let totalCount = (length (todoItems tvm))
     let activeCount = length (filter (== False) (map completed (todoItems tvm)))
     let completedCount = totalCount - activeCount
     (theFooterAsync, theFooter) <- letElt (todoFooter totalCount activeCount (todoFilter tvm))
     let tfooter = if (totalCount > 0)
                   then (theFooter >> return ())
                   else (return ())
     (toggleAllAsync, toggleAll) <- letElt (input [S.idName "toggle-all"
                                                  ,S.typeInfo "checkbox"
                                                  ,S.checked (activeCount == 0)])
     todos <- (mapM (letElt . todoItem) (filter (tFilt (todoFilter tvm)) (todoItems tvm)))
     let main = section [S.idName "main"]
                     (do toggleAll
                         (ul [S.idName "todo-list"] (mapM snd todos)))
     (inpAsync, inp) <- letElt (input [S.idName "new-todo"
                                      ,S.placeholder "What needs to be done?"
                                      ,S.value (_newTaskInput tvm)
                                      ,S.autoFocus True])
     div [] (header [S.idName "header"]
               (do (h1 [] (text "todos"))
                   inp
                   main
                   tfooter))
     let newTask = (fmap (insertCmd (toString (_newTaskInput tvm))) (onKeyDown inpAsync))
     let edits0 = map (\(idx, as) -> (fmap (\e -> (idx,e)) as)) (zip [0..] (map (editTodoItem . fst) todos))
     let edits = map (fmap (\(idx,e) -> case e of
                                Just item -> Just (setAt idx item)
                                Nothing -> Just (deleteAt idx))) edits0
     return (TodoAppStructure 
             (fireFirst (newTask : edits)) --(fireFirst [newTask, edits])
             (fmap E.changeEventValue (onChange inpAsync))
             (nextFilter theFooterAsync)
             (clearCompleted theFooterAsync))
  where
    tFilt AllTodos td = True 
    tFilt Completed td = (completed td)
    tFilt Active td = not (completed td)
    insertCmd taskVal evt
      | (E.which evt) == enterKey = Just (insertAt 0 (defaultTask taskVal))
      | otherwise = Nothing

todoAppInstall e =
  do mv <- newMVar (defaultTaskViewModel ["firstthing", "secondthing"])
     doRender mv
  where
    doRender mv =
      do tvm <- readMVar mv
         (struct, tda) <- runClient (todoApp tvm)
         listen (editCommand struct) (doEditCommand mv)
         listen (newTaskInputChange struct) (newTaskEdit mv)
         listen (todoNextFilter struct) (switchFilter mv)
         listen (todoClearCompleted struct) (clearCompleted mv)
         renderClient e tda
    doEditCommand mv Nothing = return ()
    doEditCommand mv (Just ec) =
      do old <- readMVar mv
         swapMVar mv (old {todoItems = ((unListEditImpl ec) (todoItems old))
                          ,_newTaskInput = toJSStr ""})
         doRender mv
    newTaskEdit mv val = 
      do old <- readMVar mv
         swapMVar mv (old {_newTaskInput = val})
         doRender mv
    switchFilter mv val =
      do old <- readMVar mv
         swapMVar mv (old {todoFilter = val})
         doRender mv
    clearCompleted mv _ = 
      do old <- readMVar mv
         let items = filter (not . completed) (todoItems old)
         swapMVar mv (old {todoItems = items})
         doRender mv

main :: IO ()
main = do
  Just e <- elemById "todoapp"
  todoAppInstall e
  putStrLn "done."
