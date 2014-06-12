// EventProperties
function js_bubbles(obj) {return obj.bubbles;}
function js_cancelable(obj) {return obj.cancelable;}
function js_currentTarget(obj) {return obj.currentTarget;}
function js_defaultPrevented(obj) {return obj.defaultPrevented;}
function js_eventPhase(obj) {return obj.eventPhase;}
function js_isTrusted(obj) {return obj.isTrusted;}
//                  -- ,  nativeEvent :: DOMEvent
//                  -- , preventDefault :: IO ()
//                  -- ,  stopPropagation :: IO ()
function js_evtTarget(obj) {return obj.evtTarget;}
//                  --, timeStamp :: DateTime

//ModifierKeys
function js_type(obj) {return obj.type;}
function js_altKey(obj) {return obj.altKey;}
function js_ctrlKey(obj) {return obj.ctrlKey;}
function js_metaKey(obj) {return obj.metaKey;}
function js_shiftKey(obj) {return obj.shiftKey;}

//MouseEvent
function js_button(obj) {return obj.button;}
function js_buttons(obj) {return obj.buttons;}
function js_clientX(obj) {return obj.clientX;}
function js_clientY(obj) {return obj.clientY;}
function js_pageX(obj) {return obj.pageX;}
function js_pageY(obj) {return obj.pageY;}
//--                             , relatedTarget :: Unpacked
function js_screenX(obj) {return obj.screenX;}
function js_screenY(obj) {return obj.screenY;}

// KeyboardEvent
function js_charCode(obj) {return obj.charCode;}
function js_key(obj) {return obj.key;}
function js_keyCode(obj) {return obj.keyCode;}
function js_locale(obj) {return obj.locale;}
function js_location(obj) {return obj.location;}
function js_repeat(obj) {return obj.repeat;}
function js_which(obj) {return obj.which;}

//ChangeEvent 
function js_targetValue(obj) {return obj.target.value;}

//FocusEvent
function js_focusEventProperties(obj) {return obj.focusEventProperties;}
function js_domEventTarget(obj) {return obj.domEventTarget;}
function js_relatedTarget(obj) {return obj.relatedTarget;}

function js_empty_object() {return {};}
function js_set_field(obj, field, value) {obj[field] = value;}
function js_set_field_True(obj, field, value) {obj[field] = true;}
function js_set_field_False(obj, field, value) {obj[field] = false;}

function js_set_onClick(cb, attrs) {attrs.onClick = function(e) {A(cb,[[0,e],0]);};}
function js_set_onDoubleClick(cb, attrs) {attrs.onDoubleClick = function(e) {A(cb,[[0,e],0]);};}
function js_set_onChange(cb, attrs) {attrs.onChange = function(e) {A(cb,[[0,e],0]);};}
function js_set_onKeyUp(cb, attrs) {attrs.onKeyUp = function(e) {A(cb,[[0,e],0]);};}
function js_set_onKeyPress(cb, attrs) {attrs.onKeyPress = function(e) {A(cb,[[0,e],0]);};}
function js_set_onKeyDown(cb, attrs) {attrs.onKeyDown = function(e) {A(cb,[[0,e],0]);};}
function js_set_onBlur(cb, attrs) {attrs.onBlur = function(e) {A(cb,[[0,e],0]);};}

function js_React_DOM(tagName, attrs) {return React.DOM[tagName](attrs);}

function js_empty() {return [];}
function js_push(a,v) {a.push(v);}

// Normal elements
function js_React_DOM_a(a,c) {return React.DOM.a(a,c);}
function js_React_DOM_abbr(a,c) {return React.DOM.abbr(a,c);}
function js_React_DOM_address(a,c) {return React.DOM.address(a,c);}
function js_React_DOM_article(a,c) {return React.DOM.article(a,c);}
function js_React_DOM_aside(a,c) {return React.DOM.aside(a,c);}
function js_React_DOM_audio(a,c) {return React.DOM.audio(a,c);}
function js_React_DOM_b(a,c) {return React.DOM.b(a,c);}
function js_React_DOM_bdi(a,c) {return React.DOM.bdi(a,c);}
function js_React_DOM_bdo(a,c) {return React.DOM.bdo(a,c);}
function js_React_DOM_big(a,c) {return React.DOM.big(a,c);}
function js_React_DOM_blockquote(a,c) {return React.DOM.blockquote(a,c);}
function js_React_DOM_body(a,c) {return React.DOM.body(a,c);}
function js_React_DOM_button(a,c) {return React.DOM.button(a,c);}
function js_React_DOM_canvas(a,c) {return React.DOM.canvas(a,c);}
function js_React_DOM_caption(a,c) {return React.DOM.caption(a,c);}
function js_React_DOM_cite(a,c) {return React.DOM.cite(a,c);}
function js_React_DOM_code(a,c) {return React.DOM.code(a,c);}
function js_React_DOM_colgroup(a,c) {return React.DOM.colgroup(a,c);}
function js_React_DOM_data(a,c) {return React.DOM.data(a,c);}
function js_React_DOM_datalist(a,c) {return React.DOM.datalist(a,c);}
function js_React_DOM_dd(a,c) {return React.DOM.dd(a,c);}
function js_React_DOM_del(a,c) {return React.DOM.del(a,c);}
function js_React_DOM_details(a,c) {return React.DOM.details(a,c);}
function js_React_DOM_dfn(a,c) {return React.DOM.dfn(a,c);}
function js_React_DOM_div(a,c) {return React.DOM.div(a,c);}
function js_React_DOM_dl(a,c) {return React.DOM.dl(a,c);}
function js_React_DOM_dt(a,c) {return React.DOM.dt(a,c);}
function js_React_DOM_em(a,c) {return React.DOM.em(a,c);}
function js_React_DOM_fieldset(a,c) {return React.DOM.fieldset(a,c);}
function js_React_DOM_figcaption(a,c) {return React.DOM.figcaption(a,c);}
function js_React_DOM_figure(a,c) {return React.DOM.figure(a,c);}
function js_React_DOM_footer(a,c) {return React.DOM.footer(a,c);}
function js_React_DOM_form(a,c) {return React.DOM.form(a,c);}
function js_React_DOM_h1(a,c) {return React.DOM.h1(a,c);}
function js_React_DOM_h2(a,c) {return React.DOM.h2(a,c);}
function js_React_DOM_h3(a,c) {return React.DOM.h3(a,c);}
function js_React_DOM_h4(a,c) {return React.DOM.h4(a,c);}
function js_React_DOM_h5(a,c) {return React.DOM.h5(a,c);}
function js_React_DOM_h6(a,c) {return React.DOM.h6(a,c);}
function js_React_DOM_head(a,c) {return React.DOM.head(a,c);}
function js_React_DOM_header(a,c) {return React.DOM.header(a,c);}
function js_React_DOM_html(a,c) {return React.DOM.html(a,c);}
function js_React_DOM_i(a,c) {return React.DOM.i(a,c);}
function js_React_DOM_iframe(a,c) {return React.DOM.iframe(a,c);}
function js_React_DOM_ins(a,c) {return React.DOM.ins(a,c);}
function js_React_DOM_kbd(a,c) {return React.DOM.kbd(a,c);}
function js_React_DOM_label(a,c) {return React.DOM.label(a,c);}
function js_React_DOM_legend(a,c) {return React.DOM.legend(a,c);}
function js_React_DOM_li(a,c) {return React.DOM.li(a,c);}
function js_React_DOM_main(a,c) {return React.DOM.main(a,c);}
function js_React_DOM_map(a,c) {return React.DOM.map(a,c);}
function js_React_DOM_mark(a,c) {return React.DOM.mark(a,c);}
function js_React_DOM_menu(a,c) {return React.DOM.menu(a,c);}
function js_React_DOM_menuitem(a,c) {return React.DOM.menuitem(a,c);}
function js_React_DOM_meter(a,c) {return React.DOM.meter(a,c);}
function js_React_DOM_nav(a,c) {return React.DOM.nav(a,c);}
function js_React_DOM_noscript(a,c) {return React.DOM.noscript(a,c);}
function js_React_DOM_object(a,c) {return React.DOM.object(a,c);}
function js_React_DOM_ol(a,c) {return React.DOM.ol(a,c);}
function js_React_DOM_optgroup(a,c) {return React.DOM.optgroup(a,c);}
function js_React_DOM_option(a,c) {return React.DOM.option(a,c);}
function js_React_DOM_output(a,c) {return React.DOM.output(a,c);}
function js_React_DOM_p(a,c) {return React.DOM.p(a,c);}
function js_React_DOM_pre(a,c) {return React.DOM.pre(a,c);}
function js_React_DOM_progress(a,c) {return React.DOM.progress(a,c);}
function js_React_DOM_q(a,c) {return React.DOM.q(a,c);}
function js_React_DOM_rp(a,c) {return React.DOM.rp(a,c);}
function js_React_DOM_rt(a,c) {return React.DOM.rt(a,c);}
function js_React_DOM_ruby(a,c) {return React.DOM.ruby(a,c);}
function js_React_DOM_s(a,c) {return React.DOM.s(a,c);}
function js_React_DOM_samp(a,c) {return React.DOM.samp(a,c);}
function js_React_DOM_section(a,c) {return React.DOM.section(a,c);}
function js_React_DOM_select(a,c) {return React.DOM.select(a,c);}
function js_React_DOM_small(a,c) {return React.DOM.small(a,c);}
function js_React_DOM_span(a,c) {return React.DOM.span(a,c);}
function js_React_DOM_strong(a,c) {return React.DOM.strong(a,c);}
function js_React_DOM_sub(a,c) {return React.DOM.sub(a,c);}
function js_React_DOM_summary(a,c) {return React.DOM.summary(a,c);}
function js_React_DOM_sup(a,c) {return React.DOM.sup(a,c);}
function js_React_DOM_table(a,c) {return React.DOM.table(a,c);}
function js_React_DOM_tbody(a,c) {return React.DOM.tbody(a,c);}
function js_React_DOM_td(a,c) {return React.DOM.td(a,c);}
function js_React_DOM_tfoot(a,c) {return React.DOM.tfoot(a,c);}
function js_React_DOM_th(a,c) {return React.DOM.th(a,c);}
function js_React_DOM_thead(a,c) {return React.DOM.thead(a,c);}
function js_React_DOM_time(a,c) {return React.DOM.time(a,c);}
function js_React_DOM_tr(a,c) {return React.DOM.tr(a,c);}
function js_React_DOM_u(a,c) {return React.DOM.u(a,c);}
function js_React_DOM_ul(a,c) {return React.DOM.ul(a,c);}
function js_React_DOM_var(a,c) {return React.DOM.var(a,c);}
function js_React_DOM_video(a,c) {return React.DOM.video(a,c);}

// No-child
function js_React_DOM_area(a) {return React.DOM.area(a);}
function js_React_DOM_base(a) {return React.DOM.base(a);}
function js_React_DOM_br(a) {return React.DOM.br(a);}
function js_React_DOM_col(a) {return React.DOM.col(a);}
function js_React_DOM_embed(a) {return React.DOM.embed(a);}
function js_React_DOM_hr(a) {return React.DOM.hr(a);}
function js_React_DOM_img(a) {return React.DOM.img(a);}
function js_React_DOM_input(a) {return React.DOM.input(a);}
function js_React_DOM_keygen(a) {return React.DOM.keygen(a);}
function js_React_DOM_link(a) {return React.DOM.link(a);}
function js_React_DOM_meta(a) {return React.DOM.meta(a);}
function js_React_DOM_param(a) {return React.DOM.param(a);}
function js_React_DOM_source(a) {return React.DOM.source(a);}
function js_React_DOM_track(a) {return React.DOM.track(a);}
function js_React_DOM_wbr(a) {return React.DOM.wbr(a);}

// text-only
function js_React_DOM_script(a,t) {return React.DOM.script(a,t);}
function js_React_DOM_style(a,t) {return React.DOM.style(a,t);}
function js_React_DOM_textarea(a,t) {return React.DOM.textarea(a,t);}
function js_React_DOM_title(a,t) {return React.DOM.title(a,t);}
function js_id(a) {return a;}

// This object will hold all exports.
var Haste = {};

/* Thunk
   Creates a thunk representing the given closure.
   Since we want automatic memoization of as many expressions as possible, we
   use a JS object as a sort of tagged pointer, where the member x denotes the
   object actually pointed to. If a "pointer" points to a thunk, it has a
   member 't' which is set to true; if it points to a value, be it a function,
   a value of an algebraic type of a primitive value, it has no member 't'.
*/

function T(f) {
    this.f = new F(f);
}

function F(f) {
    this.f = f;
}

/* Apply
   Applies the function f to the arguments args. If the application is under-
   saturated, a closure is returned, awaiting further arguments. If it is over-
   saturated, the function is fully applied, and the result (assumed to be a
   function) is then applied to the remaining arguments.
*/
function A(f, args) {
    if(f instanceof T) {
        f = E(f);
    }
    // Closure does some funny stuff with functions that occasionally
    // results in non-functions getting applied, so we have to deal with
    // it.
    if(!(f instanceof Function)) {
        return f;
    }

    if(f.arity === undefined) {
        f.arity = f.length;
    }
    if(args.length === f.arity) {
        switch(f.arity) {
            case 0:  return f();
            case 1:  return f(args[0]);
            default: return f.apply(null, args);
        }
    } else if(args.length > f.arity) {
        switch(f.arity) {
            case 0:  return f();
            case 1:  return A(f(args.shift()), args);
            default: return A(f.apply(null, args.splice(0, f.arity)), args);
        }
    } else {
        var g = function() {
            return A(f, args.concat(Array.prototype.slice.call(arguments)));
        };
        g.arity = f.arity - args.length;
        return g;
    }
}

/* Eval
   Evaluate the given thunk t into head normal form.
   If the "thunk" we get isn't actually a thunk, just return it.
*/
function E(t) {
    if(t instanceof T) {
        if(t.f instanceof F) {
            return t.f = t.f.f();
        } else {
            return t.f;
        }
    } else {
        return t;
    }
}

// Export Haste, A and E. Haste because we need to preserve exports, A and E
// because they're handy for Haste.Foreign.
if(!window) {
    var window = {};
}
window['Haste'] = Haste;
window['A'] = A;
window['E'] = E;


/* Throw an error.
   We need to be able to use throw as an exception so we wrap it in a function.
*/
function die(err) {
    throw err;
}

function quot(a, b) {
    return (a-a%b)/b;
}

function quotRemI(a, b) {
    return [0, (a-a%b)/b, a%b];
}

// 32 bit integer multiplication, with correct overflow behavior
// note that |0 or >>>0 needs to be applied to the result, for int and word
// respectively.
function imul(a, b) {
  // ignore high a * high a as the result will always be truncated
  var lows = (a & 0xffff) * (b & 0xffff); // low a * low b
  var aB = (a & 0xffff) * (b & 0xffff0000); // low a * high b
  var bA = (a & 0xffff0000) * (b & 0xffff); // low b * high a
  return lows + aB + bA; // sum will not exceed 52 bits, so it's safe
}

function addC(a, b) {
    var x = a+b;
    return [0, x & 0xffffffff, x > 0x7fffffff];
}

function subC(a, b) {
    var x = a-b;
    return [0, x & 0xffffffff, x < -2147483648];
}

function sinh (arg) {
    return (Math.exp(arg) - Math.exp(-arg)) / 2;
}

function tanh (arg) {
    return (Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg));
}

function cosh (arg) {
    return (Math.exp(arg) + Math.exp(-arg)) / 2;
}

// Scratch space for byte arrays.
var rts_scratchBuf = new ArrayBuffer(8);
var rts_scratchW32 = new Uint32Array(rts_scratchBuf);
var rts_scratchFloat = new Float32Array(rts_scratchBuf);
var rts_scratchDouble = new Float64Array(rts_scratchBuf);

function decodeFloat(x) {
    rts_scratchFloat[0] = x;
    var sign = x < 0 ? -1 : 1;
    var exp = ((rts_scratchW32[0] >> 23) & 0xff) - 150;
    var man = rts_scratchW32[0] & 0x7fffff;
    if(exp === 0) {
        ++exp;
    } else {
        man |= (1 << 23);
    }
    return [0, sign*man, exp];
}

function decodeDouble(x) {
    rts_scratchDouble[0] = x;
    var sign = x < 0 ? -1 : 1;
    var manHigh = rts_scratchW32[1] & 0xfffff;
    var manLow = rts_scratchW32[0];
    var exp = ((rts_scratchW32[1] >> 20) & 0x7ff) - 1075;
    if(exp === 0) {
        ++exp;
    } else {
        manHigh |= (1 << 20);
    }
    return [0, sign, manHigh, manLow, exp];
}

function isFloatFinite(x) {
    return isFinite(x);
}

function isDoubleFinite(x) {
    return isFinite(x);
}

function err(str) {
    die(toJSStr(str));
}

/* unpackCString#
   NOTE: update constructor tags if the code generator starts munging them.
*/
function unCStr(str) {return unAppCStr(str, [0]);}

function unFoldrCStr(str, f, z) {
    var acc = z;
    for(var i = str.length-1; i >= 0; --i) {
        acc = A(f, [[0, str.charCodeAt(i)], acc]);
    }
    return acc;
}

function unAppCStr(str, chrs) {
    var i = arguments[2] ? arguments[2] : 0;
    if(i >= str.length) {
        return E(chrs);
    } else {
        return [1,[0,str.charCodeAt(i)],new T(function() {
            return unAppCStr(str,chrs,i+1);
        })];
    }
}

function charCodeAt(str, i) {return str.charCodeAt(i);}

function fromJSStr(str) {
    return unCStr(E(str));
}

function toJSStr(hsstr) {
    var s = '';
    for(var str = E(hsstr); str[0] == 1; str = E(str[2])) {
        s += String.fromCharCode(E(str[1])[1]);
    }
    return s;
}

// newMutVar
function nMV(val) {
    return ({x: val});
}

// readMutVar
function rMV(mv) {
    return mv.x;
}

// writeMutVar
function wMV(mv, val) {
    mv.x = val;
}

// atomicModifyMutVar
function mMV(mv, f) {
    var x = A(f, [mv.x]);
    mv.x = x[1];
    return x[2];
}

function localeEncoding() {
    var le = newByteArr(5);
    le['b']['i8'] = 'U'.charCodeAt(0);
    le['b']['i8'] = 'T'.charCodeAt(0);
    le['b']['i8'] = 'F'.charCodeAt(0);
    le['b']['i8'] = '-'.charCodeAt(0);
    le['b']['i8'] = '8'.charCodeAt(0);
    return le;
}

var isDoubleNaN = isNaN;
var isFloatNaN = isNaN;

function isDoubleInfinite(d) {
    return (d === Infinity);
}
var isFloatInfinite = isDoubleInfinite;

function isDoubleNegativeZero(x) {
    return (x===0 && (1/x)===-Infinity);
}
var isFloatNegativeZero = isDoubleNegativeZero;

function strEq(a, b) {
    return a == b;
}

function strOrd(a, b) {
    if(a < b) {
        return [0];
    } else if(a == b) {
        return [1];
    }
    return [2];
}

function jsCatch(act, handler) {
    try {
        return A(act,[0]);
    } catch(e) {
        return A(handler,[e, 0]);
    }
}

var coercionToken = undefined;

/* Haste represents constructors internally using 1 for the first constructor,
   2 for the second, etc.
   However, dataToTag should use 0, 1, 2, etc. Also, booleans might be unboxed.
 */
function dataToTag(x) {
    if(x instanceof Array) {
        return x[0];
    } else {
        return x;
    }
}

function __word_encodeDouble(d, e) {
    return d * Math.pow(2,e);
}

var __word_encodeFloat = __word_encodeDouble;
var jsRound = Math.round; // Stupid GHC doesn't like periods in FFI IDs...
var realWorld = undefined;
if(typeof _ == 'undefined') {
    var _ = undefined;
}

function popCnt(i) {
    i = i - ((i >> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >> 2) & 0x33333333);
    return (((i + (i >> 4)) & 0x0F0F0F0F) * 0x01010101) >> 24;
}

function jsAlert(val) {
    if(typeof alert != 'undefined') {
        alert(val);
    } else {
        print(val);
    }
}

function jsLog(val) {
    console.log(val);
}

function jsPrompt(str) {
    var val;
    if(typeof prompt != 'undefined') {
        val = prompt(str);
    } else {
        print(str);
        val = readline();
    }
    return val == undefined ? '' : val.toString();
}

function jsEval(str) {
    var x = eval(str);
    return x == undefined ? '' : x.toString();
}

function isNull(obj) {
    return obj === null;
}

function jsRead(str) {
    return Number(str);
}

function jsShowI(val) {return val.toString();}
function jsShow(val) {
    var ret = val.toString();
    return val == Math.round(val) ? ret + '.0' : ret;
}

function jsGetMouseCoords(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) 	{
	posx = e.pageX;
	posy = e.pageY;
    }
    else if (e.clientX || e.clientY) 	{
	posx = e.clientX + document.body.scrollLeft
	    + document.documentElement.scrollLeft;
	posy = e.clientY + document.body.scrollTop
	    + document.documentElement.scrollTop;
    }
    return [posx - (e.target.offsetLeft || 0),
	    posy - (e.target.offsetTop || 0)];
}

function jsSetCB(elem, evt, cb) {
    // Count return press in single line text box as a change event.
    if(evt == 'change' && elem.type.toLowerCase() == 'text') {
        setCB(elem, 'keyup', function(k) {
            if(k == '\n'.charCodeAt(0)) {
                A(cb,[[0,k.keyCode],0]);
            }
        });
    }

    var fun;
    switch(evt) {
    case 'click':
    case 'dblclick':
    case 'mouseup':
    case 'mousedown':
        fun = function(x) {
            var mpos = jsGetMouseCoords(x);
            var mx = [0,mpos[0]];
            var my = [0,mpos[1]];
            A(cb,[[0,x.button],[0,mx,my],0]);
        };
        break;
    case 'mousemove':
    case 'mouseover':
        fun = function(x) {
            var mpos = jsGetMouseCoords(x);
            var mx = [0,mpos[0]];
            var my = [0,mpos[1]];
            A(cb,[[0,mx,my],0]);
        };
        break;
    case 'keypress':
    case 'keyup':
    case 'keydown':
        fun = function(x) {A(cb,[[0,x.keyCode],0]);};
        break;        
    default:
        fun = function() {A(cb,[0]);};
        break;
    }
    return setCB(elem, evt, fun);
}

function setCB(elem, evt, cb) {
    if(elem.addEventListener) {
        elem.addEventListener(evt, cb, false);
        return true;
    } else if(elem.attachEvent) {
        elem.attachEvent('on'+evt, cb);
        return true;
    }
    return false;
}

function jsSetTimeout(msecs, cb) {
    window.setTimeout(function() {A(cb,[0]);}, msecs);
}

function jsGet(elem, prop) {
    return elem[prop].toString();
}

function jsSet(elem, prop, val) {
    elem[prop] = val;
}

function jsGetAttr(elem, prop) {
    if(elem.hasAttribute(prop)) {
        return elem.getAttribute(prop).toString();
    } else {
        return "";
    }
}

function jsSetAttr(elem, prop, val) {
    elem.setAttribute(prop, val);
}

function jsGetStyle(elem, prop) {
    return elem.style[prop].toString();
}

function jsSetStyle(elem, prop, val) {
    elem.style[prop] = val;
}

function jsKillChild(child, parent) {
    parent.removeChild(child);
}

function jsClearChildren(elem) {
    while(elem.hasChildNodes()){
        elem.removeChild(elem.lastChild);
    }
}

function jsFind(elem) {
    var e = document.getElementById(elem)
    if(e) {
        return [1,[0,e]];
    }
    return [0];
}

function jsCreateElem(tag) {
    return document.createElement(tag);
}

function jsCreateTextNode(str) {
    return document.createTextNode(str);
}

function jsGetChildBefore(elem) {
    elem = elem.previousSibling;
    while(elem) {
        if(typeof elem.tagName != 'undefined') {
            return [1,[0,elem]];
        }
        elem = elem.previousSibling;
    }
    return [0];
}

function jsGetLastChild(elem) {
    var len = elem.childNodes.length;
    for(var i = len-1; i >= 0; --i) {
        if(typeof elem.childNodes[i].tagName != 'undefined') {
            return [1,[0,elem.childNodes[i]]];
        }
    }
    return [0];
}


function jsGetFirstChild(elem) {
    var len = elem.childNodes.length;
    for(var i = 0; i < len; i++) {
        if(typeof elem.childNodes[i].tagName != 'undefined') {
            return [1,[0,elem.childNodes[i]]];
        }
    }
    return [0];
}


function jsGetChildren(elem) {
    var children = [0];
    var len = elem.childNodes.length;
    for(var i = len-1; i >= 0; --i) {
        if(typeof elem.childNodes[i].tagName != 'undefined') {
            children = [1, [0,elem.childNodes[i]], children];
        }
    }
    return children;
}

function jsSetChildren(elem, children) {
    children = E(children);
    jsClearChildren(elem, 0);
    while(children[0] === 1) {
        elem.appendChild(E(E(children[1])[1]));
        children = E(children[2]);
    }
}

function jsAppendChild(child, container) {
    container.appendChild(child);
}

function jsAddChildBefore(child, container, after) {
    container.insertBefore(child, after);
}

var jsRand = Math.random;

// Concatenate a Haskell list of JS strings
function jsCat(strs, sep) {
    var arr = [];
    strs = E(strs);
    while(strs[0]) {
        strs = E(strs);
        arr.push(E(strs[1])[1]);
        strs = E(strs[2]);
    }
    return arr.join(sep);
}

var jsJSONParse = JSON.parse;

// JSON stringify a string
function jsStringify(str) {
    return JSON.stringify(str);
}

// Parse a JSON message into a Haste.JSON.JSON value.
// As this pokes around inside Haskell values, it'll need to be updated if:
// * Haste.JSON.JSON changes;
// * E() starts to choke on non-thunks;
// * data constructor code generation changes; or
// * Just and Nothing change tags.
function jsParseJSON(str) {
    try {
        var js = JSON.parse(str);
        var hs = toHS(js);
    } catch(_) {
        return [0];
    }
    return [1,hs];
}

function toHS(obj) {
    switch(typeof obj) {
    case 'number':
        return [0, [0, jsRead(obj)]];
    case 'string':
        return [1, [0, obj]];
        break;
    case 'boolean':
        return [2, obj]; // Booleans are special wrt constructor tags!
        break;
    case 'object':
        if(obj instanceof Array) {
            return [3, arr2lst_json(obj, 0)];
        } else {
            // Object type but not array - it's a dictionary.
            // The RFC doesn't say anything about the ordering of keys, but
            // considering that lots of people rely on keys being "in order" as
            // defined by "the same way someone put them in at the other end,"
            // it's probably a good idea to put some cycles into meeting their
            // misguided expectations.
            var ks = [];
            for(var k in obj) {
                ks.unshift(k);
            }
            var xs = [0];
            for(var i = 0; i < ks.length; i++) {
                xs = [1, [0, [0,ks[i]], toHS(obj[ks[i]])], xs];
            }
            return [4, xs];
        }
    }
}

function arr2lst_json(arr, elem) {
    if(elem >= arr.length) {
        return [0];
    }
    return [1, toHS(arr[elem]), new T(function() {return arr2lst_json(arr,elem+1);})]
}

function arr2lst(arr, elem) {
    if(elem >= arr.length) {
        return [0];
    }
    return [1, arr[elem], new T(function() {return arr2lst(arr,elem+1);})]
}

function lst2arr(xs) {
    var arr = [];
    for(; xs[0]; xs = E(xs[2])) {
        arr.push(E(xs[1]));
    }
    return arr;
}

function ajaxReq(method, url, async, postdata, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.setRequestHeader('Cache-control', 'no-cache');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                A(cb,[[1,[0,xhr.responseText]],0]);
            } else {
                A(cb,[[0],0]); // Nothing
            }
        }
    }
    xhr.send(postdata);
}

// Create a little endian ArrayBuffer representation of something.
function toABHost(v, n, x) {
    var a = new ArrayBuffer(n);
    new window[v](a)[0] = x;
    return a;
}

function toABSwap(v, n, x) {
    var a = new ArrayBuffer(n);
    new window[v](a)[0] = x;
    var bs = new Uint8Array(a);
    for(var i = 0, j = n-1; i < j; ++i, --j) {
        var tmp = bs[i];
        bs[i] = bs[j];
        bs[j] = tmp;
    }
    return a;
}

window['toABle'] = toABHost;
window['toABbe'] = toABSwap;

// Swap byte order if host is not little endian.
var buffer = new ArrayBuffer(2);
new DataView(buffer).setInt16(0, 256, true);
if(new Int16Array(buffer)[0] !== 256) {
    window['toABle'] = toABSwap;
    window['toABbe'] = toABHost;
}

// MVar implementation.
// Since Haste isn't concurrent, takeMVar and putMVar don't block on empty
// and full MVars respectively, but terminate the program since they would
// otherwise be blocking forever.

function newMVar() {
    return ({empty: true});
}

function tryTakeMVar(mv) {
    if(mv.empty) {
        return [0, 0, undefined];
    } else {
        var val = mv.x;
        mv.empty = true;
        mv.x = null;
        return [0, 1, val];
    }
}

function takeMVar(mv) {
    if(mv.empty) {
        // TODO: real BlockedOnDeadMVar exception, perhaps?
        err("Attempted to take empty MVar!");
    }
    var val = mv.x;
    mv.empty = true;
    mv.x = null;
    return val;
}

function putMVar(mv, val) {
    if(!mv.empty) {
        // TODO: real BlockedOnDeadMVar exception, perhaps?
        err("Attempted to put full MVar!");
    }
    mv.empty = false;
    mv.x = val;
}

function tryPutMVar(mv, val) {
    if(!mv.empty) {
        return 0;
    } else {
        mv.empty = false;
        mv.x = val;
        return 1;
    }
}

function sameMVar(a, b) {
    return (a == b);
}

function isEmptyMVar(mv) {
    return mv.empty ? 1 : 0;
}

// Implementation of stable names.
// Unlike native GHC, the garbage collector isn't going to move data around
// in a way that we can detect, so each object could serve as its own stable
// name if it weren't for the fact we can't turn a JS reference into an
// integer.
// So instead, each object has a unique integer attached to it, which serves
// as its stable name.

var __next_stable_name = 1;

function makeStableName(x) {
    if(!x.stableName) {
        x.stableName = __next_stable_name;
        __next_stable_name += 1;
    }
    return x.stableName;
}

function eqStableName(x, y) {
    return (x == y) ? 1 : 0;
}

var Integer = function(bits, sign) {
  this.bits_ = [];
  this.sign_ = sign;

  var top = true;
  for (var i = bits.length - 1; i >= 0; i--) {
    var val = bits[i] | 0;
    if (!top || val != sign) {
      this.bits_[i] = val;
      top = false;
    }
  }
};

Integer.IntCache_ = {};

var I_fromInt = function(value) {
  if (-128 <= value && value < 128) {
    var cachedObj = Integer.IntCache_[value];
    if (cachedObj) {
      return cachedObj;
    }
  }

  var obj = new Integer([value | 0], value < 0 ? -1 : 0);
  if (-128 <= value && value < 128) {
    Integer.IntCache_[value] = obj;
  }
  return obj;
};

var I_fromNumber = function(value) {
  if (isNaN(value) || !isFinite(value)) {
    return Integer.ZERO;
  } else if (value < 0) {
    return I_negate(I_fromNumber(-value));
  } else {
    var bits = [];
    var pow = 1;
    for (var i = 0; value >= pow; i++) {
      bits[i] = (value / pow) | 0;
      pow *= Integer.TWO_PWR_32_DBL_;
    }
    return new Integer(bits, 0);
  }
};

var I_fromBits = function(bits) {
  var high = bits[bits.length - 1];
  return new Integer(bits, high & (1 << 31) ? -1 : 0);
};

var I_fromString = function(str, opt_radix) {
  if (str.length == 0) {
    throw Error('number format error: empty string');
  }

  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw Error('radix out of range: ' + radix);
  }

  if (str.charAt(0) == '-') {
    return I_negate(I_fromString(str.substring(1), radix));
  } else if (str.indexOf('-') >= 0) {
    throw Error('number format error: interior "-" character');
  }

  var radixToPower = I_fromNumber(Math.pow(radix, 8));

  var result = Integer.ZERO;
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i);
    var value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = I_fromNumber(Math.pow(radix, size));
      result = I_add(I_mul(result, power), I_fromNumber(value));
    } else {
      result = I_mul(result, radixToPower);
      result = I_add(result, I_fromNumber(value));
    }
  }
  return result;
};


Integer.TWO_PWR_32_DBL_ = (1 << 16) * (1 << 16);
Integer.ZERO = I_fromInt(0);
Integer.ONE = I_fromInt(1);
Integer.TWO_PWR_24_ = I_fromInt(1 << 24);

var I_toInt = function(self) {
  return self.bits_.length > 0 ? self.bits_[0] : self.sign_;
};

var I_toWord = function(self) {
  return I_toInt(self) >>> 0;
};

var I_toNumber = function(self) {
  if (isNegative(self)) {
    return -I_toNumber(I_negate(self));
  } else {
    var val = 0;
    var pow = 1;
    for (var i = 0; i < self.bits_.length; i++) {
      val += I_getBitsUnsigned(self, i) * pow;
      pow *= Integer.TWO_PWR_32_DBL_;
    }
    return val;
  }
};

var I_getBits = function(self, index) {
  if (index < 0) {
    return 0;
  } else if (index < self.bits_.length) {
    return self.bits_[index];
  } else {
    return self.sign_;
  }
};

var I_getBitsUnsigned = function(self, index) {
  var val = I_getBits(self, index);
  return val >= 0 ? val : Integer.TWO_PWR_32_DBL_ + val;
};

var getSign = function(self) {
  return self.sign_;
};

var isZero = function(self) {
  if (self.sign_ != 0) {
    return false;
  }
  for (var i = 0; i < self.bits_.length; i++) {
    if (self.bits_[i] != 0) {
      return false;
    }
  }
  return true;
};

var isNegative = function(self) {
  return self.sign_ == -1;
};

var isOdd = function(self) {
  return (self.bits_.length == 0) && (self.sign_ == -1) ||
         (self.bits_.length > 0) && ((self.bits_[0] & 1) != 0);
};

var I_equals = function(self, other) {
  if (self.sign_ != other.sign_) {
    return false;
  }
  var len = Math.max(self.bits_.length, other.bits_.length);
  for (var i = 0; i < len; i++) {
    if (I_getBits(self, i) != I_getBits(other, i)) {
      return false;
    }
  }
  return true;
};

var I_notEquals = function(self, other) {
  return !I_equals(self, other);
};

var I_greaterThan = function(self, other) {
  return I_compare(self, other) > 0;
};

var I_greaterThanOrEqual = function(self, other) {
  return I_compare(self, other) >= 0;
};

var I_lessThan = function(self, other) {
  return I_compare(self, other) < 0;
};

var I_lessThanOrEqual = function(self, other) {
  return I_compare(self, other) <= 0;
};

var I_compare = function(self, other) {
  var diff = I_sub(self, other);
  if (isNegative(diff)) {
    return -1;
  } else if (isZero(diff)) {
    return 0;
  } else {
    return +1;
  }
};

var I_compareInt = function(self, other) {
  return I_compare(self, I_fromInt(other));
}

var shorten = function(self, numBits) {
  var arr_index = (numBits - 1) >> 5;
  var bit_index = (numBits - 1) % 32;
  var bits = [];
  for (var i = 0; i < arr_index; i++) {
    bits[i] = I_getBits(self, i);
  }
  var sigBits = bit_index == 31 ? 0xFFFFFFFF : (1 << (bit_index + 1)) - 1;
  var val = I_getBits(self, arr_index) & sigBits;
  if (val & (1 << bit_index)) {
    val |= 0xFFFFFFFF - sigBits;
    bits[arr_index] = val;
    return new Integer(bits, -1);
  } else {
    bits[arr_index] = val;
    return new Integer(bits, 0);
  }
};

var I_negate = function(self) {
  return I_add(not(self), Integer.ONE);
};

var I_add = function(self, other) {
  var len = Math.max(self.bits_.length, other.bits_.length);
  var arr = [];
  var carry = 0;

  for (var i = 0; i <= len; i++) {
    var a1 = I_getBits(self, i) >>> 16;
    var a0 = I_getBits(self, i) & 0xFFFF;

    var b1 = I_getBits(other, i) >>> 16;
    var b0 = I_getBits(other, i) & 0xFFFF;

    var c0 = carry + a0 + b0;
    var c1 = (c0 >>> 16) + a1 + b1;
    carry = c1 >>> 16;
    c0 &= 0xFFFF;
    c1 &= 0xFFFF;
    arr[i] = (c1 << 16) | c0;
  }
  return I_fromBits(arr);
};

var I_sub = function(self, other) {
  return I_add(self, I_negate(other));
};

var I_mul = function(self, other) {
  if (isZero(self)) {
    return Integer.ZERO;
  } else if (isZero(other)) {
    return Integer.ZERO;
  }

  if (isNegative(self)) {
    if (isNegative(other)) {
      return I_mul(I_negate(self), I_negate(other));
    } else {
      return I_negate(I_mul(I_negate(self), other));
    }
  } else if (isNegative(other)) {
    return I_negate(I_mul(self, I_negate(other)));
  }

  if (I_lessThan(self, Integer.TWO_PWR_24_) &&
      I_lessThan(other, Integer.TWO_PWR_24_)) {
    return I_fromNumber(I_toNumber(self) * I_toNumber(other));
  }

  var len = self.bits_.length + other.bits_.length;
  var arr = [];
  for (var i = 0; i < 2 * len; i++) {
    arr[i] = 0;
  }
  for (var i = 0; i < self.bits_.length; i++) {
    for (var j = 0; j < other.bits_.length; j++) {
      var a1 = I_getBits(self, i) >>> 16;
      var a0 = I_getBits(self, i) & 0xFFFF;

      var b1 = I_getBits(other, j) >>> 16;
      var b0 = I_getBits(other, j) & 0xFFFF;

      arr[2 * i + 2 * j] += a0 * b0;
      Integer.carry16_(arr, 2 * i + 2 * j);
      arr[2 * i + 2 * j + 1] += a1 * b0;
      Integer.carry16_(arr, 2 * i + 2 * j + 1);
      arr[2 * i + 2 * j + 1] += a0 * b1;
      Integer.carry16_(arr, 2 * i + 2 * j + 1);
      arr[2 * i + 2 * j + 2] += a1 * b1;
      Integer.carry16_(arr, 2 * i + 2 * j + 2);
    }
  }

  for (var i = 0; i < len; i++) {
    arr[i] = (arr[2 * i + 1] << 16) | arr[2 * i];
  }
  for (var i = len; i < 2 * len; i++) {
    arr[i] = 0;
  }
  return new Integer(arr, 0);
};

Integer.carry16_ = function(bits, index) {
  while ((bits[index] & 0xFFFF) != bits[index]) {
    bits[index + 1] += bits[index] >>> 16;
    bits[index] &= 0xFFFF;
  }
};

var I_mod = function(self, other) {
  return I_rem(I_add(other, I_rem(self, other)), other);
}

var I_div = function(self, other) {
  if(I_greaterThan(self, Integer.ZERO) != I_greaterThan(other, Integer.ZERO)) {
    if(I_rem(self, other) != Integer.ZERO) {
      return I_sub(I_quot(self, other), Integer.ONE);
    }
  }
  return I_quot(self, other);
}

var I_quotRem = function(self, other) {
  return [0, I_quot(self, other), I_rem(self, other)];
}

var I_divMod = function(self, other) {
  return [0, I_div(self, other), I_mod(self, other)];
}

var I_quot = function(self, other) {
  if (isZero(other)) {
    throw Error('division by zero');
  } else if (isZero(self)) {
    return Integer.ZERO;
  }

  if (isNegative(self)) {
    if (isNegative(other)) {
      return I_quot(I_negate(self), I_negate(other));
    } else {
      return I_negate(I_quot(I_negate(self), other));
    }
  } else if (isNegative(other)) {
    return I_negate(I_quot(self, I_negate(other)));
  }

  var res = Integer.ZERO;
  var rem = self;
  while (I_greaterThanOrEqual(rem, other)) {
    var approx = Math.max(1, Math.floor(I_toNumber(rem) / I_toNumber(other)));
    var log2 = Math.ceil(Math.log(approx) / Math.LN2);
    var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
    var approxRes = I_fromNumber(approx);
    var approxRem = I_mul(approxRes, other);
    while (isNegative(approxRem) || I_greaterThan(approxRem, rem)) {
      approx -= delta;
      approxRes = I_fromNumber(approx);
      approxRem = I_mul(approxRes, other);
    }

    if (isZero(approxRes)) {
      approxRes = Integer.ONE;
    }

    res = I_add(res, approxRes);
    rem = I_sub(rem, approxRem);
  }
  return res;
};

var I_rem = function(self, other) {
  return I_sub(self, I_mul(I_quot(self, other), other));
};

var not = function(self) {
  var len = self.bits_.length;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = ~self.bits_[i];
  }
  return new Integer(arr, ~self.sign_);
};

var I_and = function(self, other) {
  var len = Math.max(self.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = I_getBits(self, i) & I_getBits(other, i);
  }
  return new Integer(arr, self.sign_ & other.sign_);
};

var I_or = function(self, other) {
  var len = Math.max(self.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = I_getBits(self, i) | I_getBits(other, i);
  }
  return new Integer(arr, self.sign_ | other.sign_);
};

var I_xor = function(self, other) {
  var len = Math.max(self.bits_.length, other.bits_.length);
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = I_getBits(self, i) ^ I_getBits(other, i);
  }
  return new Integer(arr, self.sign_ ^ other.sign_);
};

var I_shiftLeft = function(self, numBits) {
  var arr_delta = numBits >> 5;
  var bit_delta = numBits % 32;
  var len = self.bits_.length + arr_delta + (bit_delta > 0 ? 1 : 0);
  var arr = [];
  for (var i = 0; i < len; i++) {
    if (bit_delta > 0) {
      arr[i] = (I_getBits(self, i - arr_delta) << bit_delta) |
               (I_getBits(self, i - arr_delta - 1) >>> (32 - bit_delta));
    } else {
      arr[i] = I_getBits(self, i - arr_delta);
    }
  }
  return new Integer(arr, self.sign_);
};

var I_shiftRight = function(self, numBits) {
  var arr_delta = numBits >> 5;
  var bit_delta = numBits % 32;
  var len = self.bits_.length - arr_delta;
  var arr = [];
  for (var i = 0; i < len; i++) {
    if (bit_delta > 0) {
      arr[i] = (I_getBits(self, i + arr_delta) >>> bit_delta) |
               (I_getBits(self, i + arr_delta + 1) << (32 - bit_delta));
    } else {
      arr[i] = I_getBits(self, i + arr_delta);
    }
  }
  return new Integer(arr, self.sign_);
};

var I_signum = function(self) {
  var cmp = I_compare(self, Integer.ZERO);
  if(cmp > 0) {
    return Integer.ONE
  }
  if(cmp < 0) {
    return I_sub(Integer.ZERO, Integer.ONE);
  }
  return Integer.ZERO;
};

var I_abs = function(self) {
  if(I_compare(self, Integer.ZERO) < 0) {
    return I_sub(Integer.ZERO, self);
  }
  return self;
};

var I_decodeDouble = function(x) {
  var dec = decodeDouble(x);
  var mantissa = I_fromBits([dec[3], dec[2]]);
  if(dec[1] < 0) {
    mantissa = I_negate(mantissa);
  }
  return [0, dec[4], mantissa];
}

var I_toString = function(self) {
  var radix = 10;

  if (isZero(self)) {
    return '0';
  } else if (isNegative(self)) {
    return '-' + I_toString(I_negate(self));
  }

  var radixToPower = I_fromNumber(Math.pow(radix, 6));

  var rem = self;
  var result = '';
  while (true) {
    var remDiv = I_div(rem, radixToPower);
    var intval = I_toInt(I_sub(rem, I_mul(remDiv, radixToPower)));
    var digits = intval.toString();

    rem = remDiv;
    if (isZero(rem)) {
      return digits + result;
    } else {
      while (digits.length < 6) {
        digits = '0' + digits;
      }
      result = '' + digits + result;
    }
  }
};

var I_fromRat = function(a, b) {
    return I_toNumber(a) / I_toNumber(b);
}

function I_fromInt64(x) {
    return I_fromBits([x.getLowBits(), x.getHighBits()]);
}

function I_toInt64(x) {
    return Long.fromBits(I_getBits(x, 0), I_getBits(x, 1));
}

function I_fromWord64(x) {
    return x;
}

function I_toWord64(x) {
    return I_rem(I_add(__w64_max, x), __w64_max);
}

// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Long = function(low, high) {
  this.low_ = low | 0;
  this.high_ = high | 0;
};

Long.IntCache_ = {};

Long.fromInt = function(value) {
  if (-128 <= value && value < 128) {
    var cachedObj = Long.IntCache_[value];
    if (cachedObj) {
      return cachedObj;
    }
  }

  var obj = new Long(value | 0, value < 0 ? -1 : 0);
  if (-128 <= value && value < 128) {
    Long.IntCache_[value] = obj;
  }
  return obj;
};

Long.fromNumber = function(value) {
  if (isNaN(value) || !isFinite(value)) {
    return Long.ZERO;
  } else if (value <= -Long.TWO_PWR_63_DBL_) {
    return Long.MIN_VALUE;
  } else if (value + 1 >= Long.TWO_PWR_63_DBL_) {
    return Long.MAX_VALUE;
  } else if (value < 0) {
    return Long.fromNumber(-value).negate();
  } else {
    return new Long(
        (value % Long.TWO_PWR_32_DBL_) | 0,
        (value / Long.TWO_PWR_32_DBL_) | 0);
  }
};

Long.fromBits = function(lowBits, highBits) {
  return new Long(lowBits, highBits);
};

Long.TWO_PWR_16_DBL_ = 1 << 16;
Long.TWO_PWR_24_DBL_ = 1 << 24;
Long.TWO_PWR_32_DBL_ =
    Long.TWO_PWR_16_DBL_ * Long.TWO_PWR_16_DBL_;
Long.TWO_PWR_31_DBL_ =
    Long.TWO_PWR_32_DBL_ / 2;
Long.TWO_PWR_48_DBL_ =
    Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_16_DBL_;
Long.TWO_PWR_64_DBL_ =
    Long.TWO_PWR_32_DBL_ * Long.TWO_PWR_32_DBL_;
Long.TWO_PWR_63_DBL_ =
    Long.TWO_PWR_64_DBL_ / 2;
Long.ZERO = Long.fromInt(0);
Long.ONE = Long.fromInt(1);
Long.NEG_ONE = Long.fromInt(-1);
Long.MAX_VALUE =
    Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
Long.MIN_VALUE = Long.fromBits(0, 0x80000000 | 0);
Long.TWO_PWR_24_ = Long.fromInt(1 << 24);

Long.prototype.toInt = function() {
  return this.low_;
};

Long.prototype.toNumber = function() {
  return this.high_ * Long.TWO_PWR_32_DBL_ +
         this.getLowBitsUnsigned();
};

Long.prototype.getHighBits = function() {
  return this.high_;
};

Long.prototype.getLowBits = function() {
  return this.low_;
};

Long.prototype.getLowBitsUnsigned = function() {
  return (this.low_ >= 0) ?
      this.low_ : Long.TWO_PWR_32_DBL_ + this.low_;
};

Long.prototype.isZero = function() {
  return this.high_ == 0 && this.low_ == 0;
};

Long.prototype.isNegative = function() {
  return this.high_ < 0;
};

Long.prototype.isOdd = function() {
  return (this.low_ & 1) == 1;
};

Long.prototype.equals = function(other) {
  return (this.high_ == other.high_) && (this.low_ == other.low_);
};

Long.prototype.notEquals = function(other) {
  return (this.high_ != other.high_) || (this.low_ != other.low_);
};

Long.prototype.lessThan = function(other) {
  return this.compare(other) < 0;
};

Long.prototype.lessThanOrEqual = function(other) {
  return this.compare(other) <= 0;
};

Long.prototype.greaterThan = function(other) {
  return this.compare(other) > 0;
};

Long.prototype.greaterThanOrEqual = function(other) {
  return this.compare(other) >= 0;
};

Long.prototype.compare = function(other) {
  if (this.equals(other)) {
    return 0;
  }

  var thisNeg = this.isNegative();
  var otherNeg = other.isNegative();
  if (thisNeg && !otherNeg) {
    return -1;
  }
  if (!thisNeg && otherNeg) {
    return 1;
  }

  if (this.subtract(other).isNegative()) {
    return -1;
  } else {
    return 1;
  }
};

Long.prototype.negate = function() {
  if (this.equals(Long.MIN_VALUE)) {
    return Long.MIN_VALUE;
  } else {
    return this.not().add(Long.ONE);
  }
};

Long.prototype.add = function(other) {
  var a48 = this.high_ >>> 16;
  var a32 = this.high_ & 0xFFFF;
  var a16 = this.low_ >>> 16;
  var a00 = this.low_ & 0xFFFF;

  var b48 = other.high_ >>> 16;
  var b32 = other.high_ & 0xFFFF;
  var b16 = other.low_ >>> 16;
  var b00 = other.low_ & 0xFFFF;

  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 + b48;
  c48 &= 0xFFFF;
  return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
};

Long.prototype.subtract = function(other) {
  return this.add(other.negate());
};

Long.prototype.multiply = function(other) {
  if (this.isZero()) {
    return Long.ZERO;
  } else if (other.isZero()) {
    return Long.ZERO;
  }

  if (this.equals(Long.MIN_VALUE)) {
    return other.isOdd() ? Long.MIN_VALUE : Long.ZERO;
  } else if (other.equals(Long.MIN_VALUE)) {
    return this.isOdd() ? Long.MIN_VALUE : Long.ZERO;
  }

  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().multiply(other.negate());
    } else {
      return this.negate().multiply(other).negate();
    }
  } else if (other.isNegative()) {
    return this.multiply(other.negate()).negate();
  }

  if (this.lessThan(Long.TWO_PWR_24_) &&
      other.lessThan(Long.TWO_PWR_24_)) {
    return Long.fromNumber(this.toNumber() * other.toNumber());
  }

  var a48 = this.high_ >>> 16;
  var a32 = this.high_ & 0xFFFF;
  var a16 = this.low_ >>> 16;
  var a00 = this.low_ & 0xFFFF;

  var b48 = other.high_ >>> 16;
  var b32 = other.high_ & 0xFFFF;
  var b16 = other.low_ >>> 16;
  var b00 = other.low_ & 0xFFFF;

  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 0xFFFF;
  return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
};

Long.prototype.div = function(other) {
  if (other.isZero()) {
    throw Error('division by zero');
  } else if (this.isZero()) {
    return Long.ZERO;
  }

  if (this.equals(Long.MIN_VALUE)) {
    if (other.equals(Long.ONE) ||
        other.equals(Long.NEG_ONE)) {
      return Long.MIN_VALUE;
    } else if (other.equals(Long.MIN_VALUE)) {
      return Long.ONE;
    } else {
      var halfThis = this.shiftRight(1);
      var approx = halfThis.div(other).shiftLeft(1);
      if (approx.equals(Long.ZERO)) {
        return other.isNegative() ? Long.ONE : Long.NEG_ONE;
      } else {
        var rem = this.subtract(other.multiply(approx));
        var result = approx.add(rem.div(other));
        return result;
      }
    }
  } else if (other.equals(Long.MIN_VALUE)) {
    return Long.ZERO;
  }

  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().div(other.negate());
    } else {
      return this.negate().div(other).negate();
    }
  } else if (other.isNegative()) {
    return this.div(other.negate()).negate();
  }

  var res = Long.ZERO;
  var rem = this;
  while (rem.greaterThanOrEqual(other)) {
    var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));

    var log2 = Math.ceil(Math.log(approx) / Math.LN2);
    var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);

    var approxRes = Long.fromNumber(approx);
    var approxRem = approxRes.multiply(other);
    while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
      approx -= delta;
      approxRes = Long.fromNumber(approx);
      approxRem = approxRes.multiply(other);
    }

    if (approxRes.isZero()) {
      approxRes = Long.ONE;
    }

    res = res.add(approxRes);
    rem = rem.subtract(approxRem);
  }
  return res;
};

Long.prototype.modulo = function(other) {
  return this.subtract(this.div(other).multiply(other));
};

Long.prototype.not = function() {
  return Long.fromBits(~this.low_, ~this.high_);
};

Long.prototype.and = function(other) {
  return Long.fromBits(this.low_ & other.low_,
                                 this.high_ & other.high_);
};

Long.prototype.or = function(other) {
  return Long.fromBits(this.low_ | other.low_,
                                 this.high_ | other.high_);
};

Long.prototype.xor = function(other) {
  return Long.fromBits(this.low_ ^ other.low_,
                                 this.high_ ^ other.high_);
};

Long.prototype.shiftLeft = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var low = this.low_;
    if (numBits < 32) {
      var high = this.high_;
      return Long.fromBits(
          low << numBits,
          (high << numBits) | (low >>> (32 - numBits)));
    } else {
      return Long.fromBits(0, low << (numBits - 32));
    }
  }
};

Long.prototype.shiftRight = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return Long.fromBits(
          (low >>> numBits) | (high << (32 - numBits)),
          high >> numBits);
    } else {
      return Long.fromBits(
          high >> (numBits - 32),
          high >= 0 ? 0 : -1);
    }
  }
};

Long.prototype.shiftRightUnsigned = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return Long.fromBits(
          (low >>> numBits) | (high << (32 - numBits)),
          high >>> numBits);
    } else if (numBits == 32) {
      return Long.fromBits(high, 0);
    } else {
      return Long.fromBits(high >>> (numBits - 32), 0);
    }
  }
};



// Int64
function hs_eqInt64(x, y) {return x.equals(y);}
function hs_neInt64(x, y) {return !x.equals(y);}
function hs_ltInt64(x, y) {return x.compare(y) < 0;}
function hs_leInt64(x, y) {return x.compare(y) <= 0;}
function hs_gtInt64(x, y) {return x.compare(y) > 0;}
function hs_geInt64(x, y) {return x.compare(y) >= 0;}
function hs_quotInt64(x, y) {return x.div(y);}
function hs_remInt64(x, y) {return x.modulo(y);}
function hs_plusInt64(x, y) {return x.add(y);}
function hs_minusInt64(x, y) {return x.subtract(y);}
function hs_timesInt64(x, y) {return x.multiply(y);}
function hs_negateInt64(x) {return x.negate();}
function hs_uncheckedIShiftL64(x, bits) {x.shiftLeft(bits);}
function hs_uncheckedIShiftRA64(x, bits) {x.shiftRight(bits);}
function hs_uncheckedIShiftRL64(x, bits) {x.shiftRightUnsigned(bits);}
function hs_intToInt64(x) {return new Long(x, 0);}
function hs_int64ToInt(x) {return x.toInt();}



// Word64
function hs_wordToWord64(x) {
    return I_fromInt(x);
}
function hs_word64ToWord(x) {
    return I_toInt(x);
}
function hs_mkWord64(low, high) {
    return I_fromBits([low, high]);
}

var hs_and64 = I_and;
var hs_or64 = I_or;
var hs_xor64 = I_xor;
var __i64_all_ones = I_fromBits([0xffffffff, 0xffffffff]);
function hs_not64(x) {
    return I_xor(x, __i64_all_ones);
}
var hs_eqWord64 = I_equals;
var hs_neWord64 = I_notEquals;
var hs_ltWord64 = I_lessThan;
var hs_leWord64 = I_lessThanOrEqual;
var hs_gtWord64 = I_greaterThan;
var hs_geWord64 = I_greaterThanOrEqual;
var hs_quotWord64 = I_quot;
var hs_remWord64 = I_rem;
var __w64_max = I_fromBits([0,0,1]);
function hs_uncheckedShiftL64(x, bits) {
    return I_rem(I_shiftLeft(x, bits), __w64_max);
}
var hs_uncheckedShiftRL64 = I_shiftRight;
function hs_int64ToWord64(x) {
    var tmp = I_add(__w64_max, I_fromBits([x.getLowBits(), x.getHighBits()]));
    return I_rem(tmp, __w64_max);
}
function hs_word64ToInt64(x) {
    return Long.fromBits(I_getBits(x, 0), I_getBits(x, 1));
}

// Joseph Myers' MD5 implementation; used under the BSD license.

function md5cycle(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];

a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);

a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);

a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);

a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);

x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
}

function md5blk(s) {
var md5blks = [], i;
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
}

function hex(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
}

function md5(s) {
return hex(md51(s));
}

function add32(a, b) {
return (a + b) & 0xFFFFFFFF;
}

// Functions for dealing with arrays.

function newArr(n, x) {
    var arr = [];
    for(; n >= 0; --n) {
        arr.push(x);
    }
    return arr;
}

// Create all views at once; perhaps it's wasteful, but it's better than having
// to check for the right view at each read or write.
function newByteArr(n) {
    // Pad the thing to multiples of 8.
    var padding = 8 - n % 8;
    if(padding < 8) {
        n += padding;
    }
    var arr = {};
    var buffer = new ArrayBuffer(n);
    var views = {};
    views['i8']  = new Int8Array(buffer);
    views['i16'] = new Int16Array(buffer);
    views['i32'] = new Int32Array(buffer);
    views['w8']  = new Uint8Array(buffer);
    views['w16'] = new Uint16Array(buffer);
    views['w32'] = new Uint32Array(buffer);
    views['f32'] = new Float32Array(buffer);
    views['f64'] = new Float64Array(buffer);
    arr['b'] = buffer;
    arr['v'] = views;
    // ByteArray and Addr are the same thing, so keep an offset if we get
    // casted.
    arr['off'] = 0;
    return arr;
}

// An attempt at emulating pointers enough for ByteString and Text to be
// usable without patching the hell out of them.
// The general idea is that Addr# is a byte array with an associated offset.

function plusAddr(addr, off) {
    var newaddr = {};
    newaddr['off'] = addr['off'] + off;
    newaddr['b']   = addr['b'];
    newaddr['v']   = addr['v'];
    return newaddr;
}

function writeOffAddr(type, elemsize, addr, off, x) {
    addr['v'][type][addr.off/elemsize + off] = x;
}

function readOffAddr(type, elemsize, addr, off) {
    return addr['v'][type][addr.off/elemsize + off];
}

// Two addresses are equal if they point to the same buffer and have the same
// offset. For other comparisons, just use the offsets - nobody in their right
// mind would check if one pointer is less than another, completely unrelated,
// pointer and then act on that information anyway.
function addrEq(a, b) {
    if(a == b) {
        return true;
    }
    return a && b && a['b'] == b['b'] && a['off'] == b['off'];
}

function addrLT(a, b) {
    if(a) {
        return b && a['off'] < b['off'];
    } else {
        return (b != 0); 
    }
}

function addrGT(a, b) {
    if(b) {
        return a && a['off'] > b['off'];
    } else {
        return (a != 0);
    }
}

function withChar(f, charCode) {
    return f(String.fromCharCode(charCode)).charCodeAt(0);
}

function u_towlower(charCode) {
    return withChar(function(c) {return c.toLowerCase()}, charCode);
}

function u_towupper(charCode) {
    return withChar(function(c) {return c.toUpperCase()}, charCode);
}

var u_towtitle = u_towupper;

function u_iswupper(charCode) {
    var c = String.fromCharCode(charCode);
    return c == c.toUpperCase() && c != c.toLowerCase();
}

function u_iswlower(charCode) {
    var c = String.fromCharCode(charCode);
    return  c == c.toLowerCase() && c != c.toUpperCase();
}

function u_iswdigit(charCode) {
    return charCode >= 48 && charCode <= 57;
}

function u_iswcntrl(charCode) {
    return charCode <= 0x1f || charCode == 0x7f;
}

function u_iswspace(charCode) {
    var c = String.fromCharCode(charCode);
    return c.replace(/\s/g,'') != c;
}

function u_iswalpha(charCode) {
    var c = String.fromCharCode(charCode);
    return c.replace(__hs_alphare, '') != c;
}

function u_iswalnum(charCode) {
    return u_iswdigit(charCode) || u_iswalpha(charCode);
}

function u_iswprint(charCode) {
    return !u_iswcntrl(charCode);
}

function u_gencat(c) {
    throw 'u_gencat is only supported with --full-unicode.';
}

// Regex that matches any alphabetic character in any language. Horrible thing.
var __hs_alphare = /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g;

// 2D Canvas drawing primitives.
function jsHasCtx2D(elem) {return !!elem.getContext;}
function jsGetCtx2D(elem) {return elem.getContext('2d');}
function jsBeginPath(ctx) {ctx.beginPath();}
function jsMoveTo(ctx, x, y) {ctx.moveTo(x, y);}
function jsLineTo(ctx, x, y) {ctx.lineTo(x, y);}
function jsStroke(ctx) {ctx.stroke();}
function jsFill(ctx) {ctx.fill();}
function jsRotate(ctx, radians) {ctx.rotate(radians);}
function jsTranslate(ctx, x, y) {ctx.translate(x, y);}
function jsScale(ctx, x, y) {ctx.scale(x, y);}
function jsPushState(ctx) {ctx.save();}
function jsPopState(ctx) {ctx.restore();}
function jsResetCanvas(el) {el.width = el.width;}
function jsDrawImage(ctx, img, x, y) {ctx.drawImage(img, x, y);}
function jsDrawImageClipped(ctx, img, x, y, cx, cy, cw, ch) {
    ctx.drawImage(img, cx, cy, cw, ch, x, y, cw, ch);
}
function jsDrawText(ctx, str, x, y) {ctx.fillText(str, x, y);}
function jsClip(ctx) {ctx.clip();}
function jsArc(ctx, x, y, radius, fromAngle, toAngle) {
    ctx.arc(x, y, radius, fromAngle, toAngle);
}
function jsCanvasToDataURL(el) {return el.toDataURL('image/png');}

// Simulate handles.
// When implementing new handles, remember that passed strings may be thunks,
// and so need to be evaluated before use.

function jsNewHandle(init, read, write, flush, close, seek, tell) {
    var h = {
        read: read || function() {},
        write: write || function() {},
        seek: seek || function() {},
        tell: tell || function() {},
        close: close || function() {},
        flush: flush || function() {}
    };
    init.call(h);
    return h;
}

function jsReadHandle(h, len) {return h.read(len);}
function jsWriteHandle(h, str) {return h.write(str);}
function jsFlushHandle(h) {return h.flush();}
function jsCloseHandle(h) {return h.close();}

function jsMkConWriter(op) {
    return function(str) {
        str = E(str);
        var lines = (this.buf + str).split('\n');
        for(var i = 0; i < lines.length-1; ++i) {
            op.call(console, lines[i]);
        }
        this.buf = lines[lines.length-1];
    }
}

function jsMkStdout() {
    return jsNewHandle(
        function() {this.buf = '';},
        function(_) {return '';},
        jsMkConWriter(console.log),
        function() {console.log(this.buf); this.buf = '';}
    );
}

function jsMkStderr() {
    return jsNewHandle(
        function() {this.buf = '';},
        function(_) {return '';},
        jsMkConWriter(console.warn),
        function() {console.warn(this.buf); this.buf = '';}
    );
}

function jsMkStdin() {
    return jsNewHandle(
        function() {this.buf = '';},
        function(len) {
            while(this.buf.length < len) {
                this.buf += prompt('[stdin]') + '\n';
            }
            var ret = this.buf.substr(0, len);
            this.buf = this.buf.substr(len);
            return ret;
        }
    );
}

var _0=0,_1=function(_2,_3,_){var _4=jsWriteHandle(E(_2)[1],toJSStr(E(_3)));return _0;},_5=[0],_6=[0,10],_7=[1,_6,_5],_8=function(_9,_a,_){var _b=E(_9),_c=jsWriteHandle(_b[1],toJSStr(E(_a)));return _1(_b,_7,_);},_d=unCStr("GHC.IO.Exception"),_e=unCStr("base"),_f=unCStr("IOException"),_g=new T(function(){var _h=hs_wordToWord64(4053623282),_i=hs_wordToWord64(3693590983);return [0,_h,_i,[0,_h,_i,_e,_d,_f],_5];}),_j=function(_k){return E(_g);},_l=function(_m){return E(E(_m)[1]);},_n=unCStr("Maybe.fromJust: Nothing"),_o=new T(function(){return err(_n);}),_p=function(_q,_r,_s){var _t=new T(function(){var _u=A(_q,[_s]),_v=A(_r,[new T(function(){var _w=E(_t);return _w[0]==0?E(_o):E(_w[1]);})]),_x=hs_eqWord64(_u[1],_v[1]);if(!E(_x)){return [0];}else{var _y=hs_eqWord64(_u[2],_v[2]);return E(_y)==0?[0]:[1,_s];}});return E(_t);},_z=function(_A){var _B=E(_A);return _p(_l(_B[1]),_j,_B[2]);},_C=unCStr(": "),_D=[0,41],_E=unCStr(" ("),_F=function(_G,_H){var _I=E(_G);return _I[0]==0?E(_H):[1,_I[1],new T(function(){return _F(_I[2],_H);})];},_J=unCStr("already exists"),_K=unCStr("does not exist"),_L=unCStr("protocol error"),_M=unCStr("failed"),_N=unCStr("invalid argument"),_O=unCStr("inappropriate type"),_P=unCStr("hardware fault"),_Q=unCStr("unsupported operation"),_R=unCStr("timeout"),_S=unCStr("resource vanished"),_T=unCStr("interrupted"),_U=unCStr("resource busy"),_V=unCStr("resource exhausted"),_W=unCStr("end of file"),_X=unCStr("illegal operation"),_Y=unCStr("permission denied"),_Z=unCStr("user error"),_10=unCStr("unsatisified constraints"),_11=unCStr("system error"),_12=function(_13,_14){switch(E(_13)){case 0:return _F(_J,_14);case 1:return _F(_K,_14);case 2:return _F(_U,_14);case 3:return _F(_V,_14);case 4:return _F(_W,_14);case 5:return _F(_X,_14);case 6:return _F(_Y,_14);case 7:return _F(_Z,_14);case 8:return _F(_10,_14);case 9:return _F(_11,_14);case 10:return _F(_L,_14);case 11:return _F(_M,_14);case 12:return _F(_N,_14);case 13:return _F(_O,_14);case 14:return _F(_P,_14);case 15:return _F(_Q,_14);case 16:return _F(_R,_14);case 17:return _F(_S,_14);default:return _F(_T,_14);}},_15=[0,125],_16=unCStr("{handle: "),_17=function(_18,_19,_1a,_1b,_1c,_1d){var _1e=new T(function(){var _1f=new T(function(){return _12(_19,new T(function(){var _1g=E(_1b);return _1g[0]==0?E(_1d):_F(_E,new T(function(){return _F(_1g,[1,_D,_1d]);}));}));}),_1h=E(_1a);return _1h[0]==0?E(_1f):_F(_1h,new T(function(){return _F(_C,_1f);}));}),_1i=E(_1c);if(!_1i[0]){var _1j=E(_18);if(!_1j[0]){return E(_1e);}else{var _1k=E(_1j[1]);return _1k[0]==0?_F(_16,new T(function(){return _F(_1k[1],[1,_15,new T(function(){return _F(_C,_1e);})]);})):_F(_16,new T(function(){return _F(_1k[1],[1,_15,new T(function(){return _F(_C,_1e);})]);}));}}else{return _F(_1i[1],new T(function(){return _F(_C,_1e);}));}},_1l=function(_1m){var _1n=E(_1m);return _17(_1n[1],_1n[2],_1n[3],_1n[4],_1n[6],_5);},_1o=function(_1p,_1q){var _1r=E(_1p);return _17(_1r[1],_1r[2],_1r[3],_1r[4],_1r[6],_1q);},_1s=[0,44],_1t=[0,93],_1u=[0,91],_1v=function(_1w,_1x,_1y){var _1z=E(_1x);return _1z[0]==0?unAppCStr("[]",_1y):[1,_1u,new T(function(){return A(_1w,[_1z[1],new T(function(){var _1A=function(_1B){var _1C=E(_1B);return _1C[0]==0?E([1,_1t,_1y]):[1,_1s,new T(function(){return A(_1w,[_1C[1],new T(function(){return _1A(_1C[2]);})]);})];};return _1A(_1z[2]);})]);})];},_1D=function(_1E,_1F){return _1v(_1o,_1E,_1F);},_1G=function(_1H,_1I,_1J){var _1K=E(_1I);return _17(_1K[1],_1K[2],_1K[3],_1K[4],_1K[6],_1J);},_1L=[0,_1G,_1l,_1D],_1M=new T(function(){return [0,_j,_1L,_1N,_z];}),_1N=function(_1O){return [0,_1M,_1O];},_1P=[0],_1Q=7,_1R=function(_1S){return [0,_1P,_1Q,_5,_1S,_1P,_1P];},_1T=function(_1U,_){return die(new T(function(){return _1N(new T(function(){return _1R(_1U);}));}));},_1V=function(_1W,_){return _1T(_1W,_);},_1X=unCStr("done."),_1Y=function(_1Z,_20,_){var _21=A(_1Z,[_]);return die(_20);},_22=function(_23,_24,_25,_){return _1Y(function(_){var _=putMVar(_24,_23);return _0;},_25,_);},_26=function(_27,_28,_){return (function(_29,_){while(1){var _2a=(function(_2b,_){var _2c=E(_2b);if(!_2c[0]){return _0;}else{var _2d=_2c[2],_2e=E(E(_2c[1])[1]),_2f=_2e[1],_2g=_2e[2],_2h=0;if(!E(_2h)){var _2i=(function(_){var _2j=E(_2g)[1],_2k=takeMVar(_2j),_2l=jsCatch(function(_){return (function(_){return [1,function(_2m){return A(_28,[new T(function(){return A(_2f,[_2m]);})]);},_2k];})();},function(_2n,_){return _22(_2k,_2j,_2n,_);}),_=putMVar(_2j,_2l);return _0;})();_29=_2d;return null;}else{var _2o=E(_2g)[1],_2p=takeMVar(_2o),_2q=jsCatch(function(_){return [1,function(_2r){return A(_28,[new T(function(){return A(_2f,[_2r]);})]);},_2p];},function(_2n,_){return _22(_2p,_2o,_2n,_);}),_=putMVar(_2o,_2q);_29=_2d;return null;}}})(_29,_);if(_2a!=null){return _2a;}}})(_27,_);},_2s=new T(function(){return [0,toJSStr(_5)];}),_2t=function(_2u,_2v){while(1){var _2w=(function(_2x,_2y){var _2z=E(_2y);if(!_2z[0]){return [0];}else{var _2A=_2z[1],_2B=_2z[2];if(!A(_2x,[_2A])){var _2C=_2x;_2v=_2B;_2u=_2C;return null;}else{return [1,_2A,new T(function(){return _2t(_2x,_2B);})];}}})(_2u,_2v);if(_2w!=null){return _2w;}}},_2D=function(_2E){return !E(E(_2E)[3])?true:false;},_2F=2,_2G=false,_2H=function(_2I){return [0,E(E(_2I)),E(E(_2s)),E(_2G),E(_2G)];},_2J=unCStr("firstthing"),_2K=unCStr("secondthing"),_2L=[1,_2K,_5],_2M=[1,_2J,_2L],_2N=function(_2O,_2P){var _2Q=E(_2P);return _2Q[0]==0?[0]:[1,new T(function(){return A(_2O,[_2Q[1]]);}),new T(function(){return _2N(_2O,_2Q[2]);})];},_2R=new T(function(){return [0,E(_2N(_2H,_2M)),E(E(_2s)),E(_2F)];}),_2S=function(_2T,_){var _2U=E(_2T);if(!_2U[0]){return _5;}else{var _2V=A(_2U[1],[_]),_2W=_2S(_2U[2],_);return [1,_2V,_2W];}},_2X=unCStr("Rendering."),_2Y=new T(function(){return [0,"(function(e,r){React.renderComponent(r,e);})"];}),_2Z=function(_30){var _31=A(_30,[_]);return E(_31);},_32=function(_33){return _2Z(function(_){var _=0;return eval(E(_33)[1]);});},_34=new T(function(){return _32(_2Y);}),_35=function(_){var _=0,_36=jsMkStdout();return [0,_36];},_37=new T(function(){return _2Z(_35);}),_38=function(_39,_3a,_){var _3b=_8(_37,_2X,_),_3c=_2S(_3a,_),_3d=E(_3c);if(!_3d[0]){return _0;}else{var _3e=A(_34,[E(E(_39)[1]),E(E(_3d[1])[1]),_]);return _0;}},_3f=new T(function(){return [0,"checked"];}),_3g=function(_3h){return E(E(_3h)[1]);},_3i=function(_3j){return E(E(_3j)[2]);},_3k=unCStr(";})"),_3l=function(_3m,_3n,_3o){var _3p=new T(function(){return _32(new T(function(){return [0,toJSStr(unAppCStr("(function(u){return u.",new T(function(){return _F(_3o,_3k);})))];}));}),_3q=new T(function(){return _3g(_3n);}),_3r=new T(function(){return _3i(_3m);});return function(_3s){return _2Z(function(_){var _=0,_3t=A(_3p,[A(_3r,[_3s]),_]);return new T(function(){return A(_3q,[_3t]);});});};},_3u=unCStr("relatedTarget"),_3v=function(_3w,_3x){return [0,_3w,_3x];},_3y=function(_3x){return [0,_3x];},_3z=function(_3A){return E(E(_3A)[1]);},_3B=new T(function(){return _3v(_3y,_3z);}),_3C=new T(function(){return _3v(_3y,_3z);}),_3D=new T(function(){return _3l(_3C,_3B,_3u);}),_3E=unCStr("eventPhase"),_3F=function(_3G){var _3H=jsRound(_3G);return [0,_3H];},_3I=new T(function(){return _3v(_3F,_3z);}),_3J=new T(function(){return _3l(_3C,_3I,_3E);}),_3K=unCStr("defaultPrevented"),_3L=function(_3M){return _3M>0;},_3N=new T(function(){return [0,"false"];}),_3O=function(_){var _=0;return A(_32,[_3N,_]);},_3P=new T(function(){return _2Z(_3O);}),_3Q=new T(function(){return [0,"true"];}),_3R=function(_){var _=0;return A(_32,[_3Q,_]);},_3S=new T(function(){return _2Z(_3R);}),_3T=function(_3U){return !E(_3U)?E(_3P):E(_3S);},_3V=new T(function(){return _3v(_3L,_3T);}),_3W=new T(function(){return _3l(_3C,_3V,_3K);}),_3X=unCStr("currentTarget"),_3Y=new T(function(){return _3l(_3C,_3B,_3X);}),_3Z=unCStr("cancelable"),_40=new T(function(){return _3l(_3C,_3V,_3Z);}),_41=unCStr("bubbles"),_42=new T(function(){return _3l(_3C,_3V,_41);}),_43=unCStr("DOMEventTarget"),_44=new T(function(){return _3l(_3C,_3B,_43);}),_45=unCStr("eventType"),_46=function(_47){var _48=String(_47);return fromJSStr(_48);},_49=function(_4a){return E(toJSStr(E(_4a)));},_4b=new T(function(){return _3v(_46,_49);}),_4c=new T(function(){return _3l(_3C,_4b,_45);}),_4d=unCStr("target"),_4e=new T(function(){return _3l(_3C,_3B,_4d);}),_4f=unCStr("isTrusted"),_4g=new T(function(){return _3l(_3C,_3V,_4f);}),_4h=function(_4i){return [0,[0,E(A(_42,[_4i])),E(A(_40,[_4i])),E(A(_3Y,[_4i])),E(A(_3W,[_4i])),E(A(_3J,[_4i])),E(A(_4g,[_4i])),E(A(_4e,[_4i])),E(A(_4c,[_4i]))],A(_44,[_4i]),A(_3D,[_4i])];},_4j=unCStr("which"),_4k=new T(function(){return _3v(_3y,_3z);}),_4l=new T(function(){return _3l(_4k,_3I,_4j);}),_4m=unCStr("key"),_4n=new T(function(){return _3l(_4k,_4b,_4m);}),_4o=unCStr("charCode"),_4p=new T(function(){return _3l(_4k,_3I,_4o);}),_4q=unCStr("shiftKey"),_4r=new T(function(){return _3l(_4k,_3V,_4q);}),_4s=unCStr("metaKey"),_4t=new T(function(){return _3l(_4k,_3V,_4s);}),_4u=unCStr("ctrlKey"),_4v=new T(function(){return _3l(_4k,_3V,_4u);}),_4w=unCStr("altKey"),_4x=new T(function(){return _3l(_4k,_3V,_4w);}),_4y=new T(function(){return _3l(_4k,_4b,_45);}),_4z=new T(function(){return _3l(_4k,_3B,_4d);}),_4A=new T(function(){return _3l(_4k,_3V,_4f);}),_4B=new T(function(){return _3l(_4k,_3I,_3E);}),_4C=new T(function(){return _3l(_4k,_3V,_3K);}),_4D=new T(function(){return _3l(_4k,_3B,_3X);}),_4E=new T(function(){return _3l(_4k,_3V,_3Z);}),_4F=new T(function(){return _3l(_4k,_3V,_41);}),_4G=unCStr("repeat"),_4H=new T(function(){return _3l(_4k,_3V,_4G);}),_4I=unCStr("location"),_4J=new T(function(){return _3l(_4k,_3I,_4I);}),_4K=unCStr("locale"),_4L=new T(function(){return _3l(_4k,_4b,_4K);}),_4M=unCStr("keyCode"),_4N=new T(function(){return _3l(_4k,_3I,_4M);}),_4O=function(_4P){return [0,[0,E(A(_4F,[_4P])),E(A(_4E,[_4P])),E(A(_4D,[_4P])),E(A(_4C,[_4P])),E(A(_4B,[_4P])),E(A(_4A,[_4P])),E(A(_4z,[_4P])),E(A(_4y,[_4P]))],[0,E(A(_4x,[_4P])),E(A(_4v,[_4P])),E(A(_4t,[_4P])),E(A(_4r,[_4P]))],A(_4p,[_4P]),A(_4n,[_4P]),A(_4N,[_4P]),A(_4L,[_4P]),A(_4J,[_4P]),A(_4H,[_4P]),A(_4l,[_4P])];},_4Q=unCStr("screenY"),_4R=new T(function(){return _3v(_3y,_3z);}),_4S=new T(function(){return _3v(_3y,_3z);}),_4T=new T(function(){return _3l(_4S,_4R,_4Q);}),_4U=unCStr("clientX"),_4V=new T(function(){return _3l(_4S,_4R,_4U);}),_4W=unCStr("button"),_4X=new T(function(){return _3l(_4S,_3I,_4W);}),_4Y=new T(function(){return _3l(_4S,_3V,_4q);}),_4Z=new T(function(){return _3l(_4S,_3V,_4s);}),_50=new T(function(){return _3l(_4S,_3V,_4u);}),_51=new T(function(){return _3l(_4S,_3V,_4w);}),_52=new T(function(){return _3l(_4S,_4b,_45);}),_53=new T(function(){return _3l(_4S,_3B,_4d);}),_54=new T(function(){return _3l(_4S,_3V,_4f);}),_55=new T(function(){return _3l(_4S,_3I,_3E);}),_56=new T(function(){return _3l(_4S,_3V,_3K);}),_57=new T(function(){return _3l(_4S,_3B,_3X);}),_58=new T(function(){return _3l(_4S,_3V,_3Z);}),_59=unCStr("screenX"),_5a=new T(function(){return _3l(_4S,_4R,_59);}),_5b=new T(function(){return _3l(_4S,_3V,_41);}),_5c=unCStr("pageY"),_5d=new T(function(){return _3l(_4S,_4R,_5c);}),_5e=unCStr("pageX"),_5f=new T(function(){return _3l(_4S,_4R,_5e);}),_5g=unCStr("clientY"),_5h=new T(function(){return _3l(_4S,_4R,_5g);}),_5i=function(_5j){return [0,[0,E(A(_5b,[_5j])),E(A(_58,[_5j])),E(A(_57,[_5j])),E(A(_56,[_5j])),E(A(_55,[_5j])),E(A(_54,[_5j])),E(A(_53,[_5j])),E(A(_52,[_5j]))],[0,E(A(_51,[_5j])),E(A(_50,[_5j])),E(A(_4Z,[_5j])),E(A(_4Y,[_5j]))],A(_4X,[_5j]),A(_4V,[_5j]),A(_5h,[_5j]),A(_5f,[_5j]),A(_5d,[_5j]),A(_5a,[_5j]),A(_4T,[_5j])];},_5k=function(_5l,_5m,_){var _5n=0,_5o=function(_,_5p){return (function(_5q,_){while(1){var _5r=E(_5q);if(!_5r[0]){return _0;}else{var _5s=A(_5r[1],[E(_5m),_]);_5q=_5r[2];continue;}}})(_5p,_);};if(!E(_5n)){var _5t=(function(_){var _5u=E(_5l)[1],_5v=takeMVar(_5u),_=putMVar(_5u,_5v);return _5v;})();return _5o(_,_5t);}else{var _5w=E(_5l)[1],_5x=takeMVar(_5w),_=putMVar(_5w,_5x);return _5o(_,_5x);}},_5y=function(_5z){return E(_5z);},_5A=function(_){var _5B=newMVar(),_=putMVar(_5B,_5),_5C=newMVar(),_=putMVar(_5C,_5),_5D=newMVar(),_=putMVar(_5D,_5),_5E=newMVar(),_=putMVar(_5E,_5),_5F=newMVar(),_=putMVar(_5F,_5),_5G=newMVar(),_=putMVar(_5G,_5),_5H=newMVar(),_=putMVar(_5H,_5),_5I=[0,_5H],_5J=[0,_5G],_5K=[0,_5F],_5L=[0,_5E],_5M=[0,_5D],_5N=[0,_5C],_5O=[0,_5B];return [0,[1,function(_5P,_){var _5Q=js_set_onClick(E([0,function(_5R,_){return _5k(_5O,new T(function(){var _5S=_5i(_5R);return [0,E(_5S[1]),E(_5S[2]),E(_5S[3]),E(_5S[4]),E(_5S[5]),E(_5S[6]),E(_5S[7]),E(_5S[8]),E(_5S[9])];}),_);}])[1],E(_5P)[1]);return _0;},[1,function(_5T,_){var _5U=js_set_onDoubleClick(E([0,function(_5V,_){return _5k(_5N,new T(function(){var _5W=_5i(_5V);return [0,E(_5W[1]),E(_5W[2]),E(_5W[3]),E(_5W[4]),E(_5W[5]),E(_5W[6]),E(_5W[7]),E(_5W[8]),E(_5W[9])];}),_);}])[1],E(_5T)[1]);return _0;},[1,function(_5X,_){var _5Y=js_set_onChange(E([0,function(_5Z,_){return _5k(_5M,new T(function(){var _60=js_targetValue(E(_5Z)[1]);return [0,_60];}),_);}])[1],E(_5X)[1]);return _0;},[1,function(_61,_){var _62=js_set_onKeyUp(E([0,function(_63,_){return _5k(_5L,new T(function(){var _64=_4O(_63);return [0,E(_64[1]),E(_64[2]),E(_64[3]),E(_64[4]),E(_64[5]),E(_64[6]),E(_64[7]),E(_64[8]),E(_64[9])];}),_);}])[1],E(_61)[1]);return _0;},[1,function(_65,_){var _66=js_set_onKeyPress(E([0,function(_67,_){return _5k(_5K,new T(function(){var _68=_4O(_67);return [0,E(_68[1]),E(_68[2]),E(_68[3]),E(_68[4]),E(_68[5]),E(_68[6]),E(_68[7]),E(_68[8]),E(_68[9])];}),_);}])[1],E(_65)[1]);return _0;},[1,function(_69,_){var _6a=js_set_onKeyDown(E([0,function(_6b,_){return _5k(_5J,new T(function(){var _6c=_4O(_6b);return [0,E(_6c[1]),E(_6c[2]),E(_6c[3]),E(_6c[4]),E(_6c[5]),E(_6c[6]),E(_6c[7]),E(_6c[8]),E(_6c[9])];}),_);}])[1],E(_69)[1]);return _0;},[1,function(_6d,_){var _6e=js_set_onBlur(E([0,function(_6f,_){return _5k(_5I,new T(function(){var _6g=_4h(_6f);return [0,E(_6g[1]),E(_6g[2]),E(_6g[3])];}),_);}])[1],E(_6d)[1]);return _0;},_5]]]]]]],[0,[0,[1,[0,[0,_5y,_5O]],_5]],[0,[1,[0,[0,_5y,_5N]],_5]],[0,[1,[0,[0,_5y,_5M]],_5]],[0,[1,[0,[0,_5y,_5L]],_5]],[0,[1,[0,[0,_5y,_5K]],_5]],[0,[1,[0,[0,_5y,_5J]],_5]],[0,[1,[0,[0,_5y,_5I]],_5]]]];},_6h=function(_6i,_){var _6j=E(_6i);if(!_6j[0]){return _5;}else{var _6k=A(_6j[1],[_]),_6l=_6h(_6j[2],_);return [1,_6k,_6l];}},_6m=function(_6n){return E(_6n);},_6o=function(_6p){return E(_6p);},_6q=[0,_6m,_6o],_6r=function(_6s){return E(E(_6s)[2]);},_6t=function(_6u,_6v,_6w,_6x,_6y,_){var _6z=js_empty_object(),_6A=new T(function(){return _6r(_6u);}),_6B=function(_6C,_){var _6D=E(_6C);if(!_6D[0]){return _5;}else{var _6E=_6D[2],_6F=A(_6A,[_6D[1]]),_6G=_6F[1],_6H=E(_6F[2]);switch(_6H[0]){case 0:var _6I=js_set_field(_6z,E(_6G)[1],E(_6H[1])[1]),_6J=_6B(_6E,_);return [1,_0,_6J];case 1:if(!E(_6H[1])){var _6K=js_set_field_False(_6z,E(_6G)[1]),_6L=_6B(_6E,_);return [1,_0,_6L];}else{var _6M=js_set_field_True(_6z,E(_6G)[1]),_6N=_6B(_6E,_);return [1,_0,_6N];}break;case 2:var _6O=js_set_field(_6z,E(_6G)[1],E(_6H[1])[1]),_6P=_6B(_6E,_);return [1,_0,_6P];case 3:var _6Q=js_set_field(_6z,E(_6G)[1],E(_6H[1])[1]),_6R=_6B(_6E,_);return [1,_0,_6R];default:var _6S=_6B(_6E,_);return [1,_0,_6S];}}},_6T=_6B(_6w,_),_6U=[0,_6z],_6V=(function(_6W,_){while(1){var _6X=E(_6W);if(!_6X[0]){return _0;}else{var _6Y=A(_6X[1],[_6U,_]);_6W=_6X[2];continue;}}})(_6x,_),_6Z=js_empty(),_70=function(_71,_){var _72=E(_71);if(!_72[0]){return _5;}else{var _73=js_push(_6Z,E(_72[1])[1]),_74=_70(_72[2],_);return [1,_0,_74];}},_75=_70(_6y,_);return A(_6v,[_6U,[0,_6Z],_]);},_76=function(_77,_78,_){var _79=js_React_DOM_ul(E(_77)[1],E(_78)[1]);return [0,_79];},_7a=function(_7b,_7c,_){return _76(_7b,_7c,_);},_7d=function(_7e,_7f,_){var _7g=A(_7f,[_]),_7h=_5A(_),_7i=E(_7h);return [0,_7i[2],function(_7j){return [1,function(_){var _7k=_6h(A(E(_7g)[2],[_5]),_);return _6t(_6q,_7a,_7e,_7i[1],_7k,_);},_7j];}];},_7l=function(_7m){return E(_7m);},_7n=[0,_6m,_7l],_7o=function(_7p,_7q,_){var _7r=js_React_DOM_section(E(_7p)[1],E(_7q)[1]);return [0,_7r];},_7s=function(_7b,_7c,_){return _7o(_7b,_7c,_);},_7t=function(_7u,_7v,_){var _7w=A(_7v,[_]),_7x=_5A(_),_7y=E(_7x);return [0,_7y[2],function(_7z){return [1,function(_){var _7A=_6h(A(E(_7w)[2],[_5]),_);return _6t(_7n,_7s,_7u,_7y[1],_7A,_);},_7z];}];},_7B=function(_7C){return E(_7C);},_7D=[0,_6m,_7B],_7E=function(_7F,_7G,_){var _7H=js_React_DOM_h1(E(_7F)[1],E(_7G)[1]);return [0,_7H];},_7I=function(_7b,_7c,_){return _7E(_7b,_7c,_);},_7J=function(_7K,_7L,_){var _7M=A(_7L,[_]),_7N=_5A(_),_7O=E(_7N);return [0,_7O[2],function(_7P){return [1,function(_){var _7Q=_6h(A(E(_7M)[2],[_5]),_);return _6t(_7D,_7I,_7K,_7O[1],_7Q,_);},_7P];}];},_7R=function(_7S){return E(_7S);},_7T=[0,_6m,_7R],_7U=function(_7V,_7W,_){var _7X=js_React_DOM_header(E(_7V)[1],E(_7W)[1]);return [0,_7X];},_7Y=function(_7b,_7c,_){return _7U(_7b,_7c,_);},_7Z=function(_80,_81,_){var _82=A(_81,[_]),_83=_5A(_),_84=E(_83);return [0,_84[2],function(_85){return [1,function(_){var _86=_6h(A(E(_82)[2],[_5]),_);return _6t(_7T,_7Y,_80,_84[1],_86,_);},_85];}];},_87=function(_88){return E(_88);},_89=[0,_6m,_87],_8a=function(_8b,_8c,_){var _8d=js_React_DOM_div(E(_8b)[1],E(_8c)[1]);return [0,_8d];},_8e=function(_7b,_7c,_){return _8a(_7b,_7c,_);},_8f=function(_8g,_8h,_){var _8i=A(_8h,[_]),_8j=_5A(_),_8k=E(_8j);return [0,_8k[2],function(_8l){return [1,function(_){var _8m=_6h(A(E(_8i)[2],[_5]),_);return _6t(_89,_8e,_8g,_8k[1],_8m,_);},_8l];}];},_8n=new T(function(){return [0,"value"];}),_8o=function(_8p){return E(_8p);},_8q=[0,_6m,_8o],_8r=function(_8s,_8t){var _8u=E(_8s);if(!_8u){return [0,_5,_8t];}else{var _8v=E(_8t);if(!_8v[0]){return [0,_5,_5];}else{var _8w=new T(function(){var _8x=_8r(_8u-1|0,_8v[2]);return [0,_8x[1],_8x[2]];});return [0,[1,_8v[1],new T(function(){return E(E(_8w)[1]);})],new T(function(){return E(E(_8w)[2]);})];}}},_8y=function(_8z,_8A,_8B){if(_8z>=0){var _8C=_8r(_8z,_8B);return _F(_8C[1],[1,_8A,_8C[2]]);}else{return _F(_5,[1,_8A,_8B]);}},_8D=function(_8E,_8F){while(1){var _8G=E(_8E);if(!_8G[0]){return E(_8F);}else{_8E=_8G[2];var _8H=_8F+1|0;_8F=_8H;continue;}}},_8I=new T(function(){return [0,"toggle-all"];}),_8J=[0,_8I],_8K=new T(function(){return [0,"id"];}),_8L=[0,_8K,_8J],_8M=new T(function(){return [0,"type"];}),_8N=new T(function(){return [0,"checkbox"];}),_8O=[0,_8N],_8P=[0,_8M,_8O],_8Q=new T(function(){return [0,"new-todo"];}),_8R=[0,_8Q],_8S=[0,_8K,_8R],_8T=new T(function(){return [0,"placeholder"];}),_8U=new T(function(){return [0,"What needs to be done?"];}),_8V=[0,_8U],_8W=[0,_8T,_8V],_8X=function(_8Y){return E(_8Y);},_8Z=[0,_6m,_8X],_90=function(_91,_92,_){var _93=js_React_DOM_label(E(_91)[1],E(_92)[1]);return [0,_93];},_94=function(_7b,_7c,_){return _90(_7b,_7c,_);},_95=function(_96,_97,_){var _98=A(_97,[_]),_99=_5A(_),_9a=E(_99);return [0,_9a[2],function(_9b){return [1,function(_){var _9c=_6h(A(E(_98)[2],[_5]),_);return _6t(_8Z,_94,_96,_9a[1],_9c,_);},_9b];}];},_9d=function(_9e){return E(_9e);},_9f=[0,_6m,_9d],_9g=function(_9h,_9i,_){var _9j=js_React_DOM_li(E(_9h)[1],E(_9i)[1]);return [0,_9j];},_9k=function(_7b,_7c,_){return _9g(_7b,_7c,_);},_9l=function(_9m,_9n,_){var _9o=A(_9n,[_]),_9p=_5A(_),_9q=E(_9p);return [0,_9q[2],function(_9r){return [1,function(_){var _9s=_6h(A(E(_9o)[2],[_5]),_);return _6t(_9f,_9k,_9m,_9q[1],_9s,_);},_9r];}];},_9t=function(_9u){return E(_9u);},_9v=[0,_6m,_9t],_9w=function(_9x,_9y,_){var _9z=js_React_DOM_button(E(_9x)[1],E(_9y)[1]);return [0,_9z];},_9A=function(_7b,_7c,_){return _9w(_7b,_7c,_);},_9B=function(_9C,_9D,_){var _9E=A(_9D,[_]),_9F=_5A(_),_9G=E(_9F);return [0,_9G[2],function(_9H){return [1,function(_){var _9I=_6h(A(E(_9E)[2],[_5]),_);return _6t(_9v,_9A,_9C,_9G[1],_9I,_);},_9H];}];},_9J=true,_9K=new T(function(){return [0,"toggle"];}),_9L=[0,_9K],_9M=new T(function(){return [0,"className"];}),_9N=[0,_9M,_9L],_9O=[0,_8N],_9P=[0,_8M,_9O],_9Q=new T(function(){return [0,"edit"];}),_9R=[0,_9Q],_9S=[0,_9M,_9R],_9T=function(_9U){var _9V=E(_9U);return _9V[0]==0?[0]:_F(E(_9V[1])[1],new T(function(){return _9T(_9V[2]);}));},_9W=function(_9X,_9Y,_){var _9Z=js_React_DOM_input(E(_9X)[1]);return [0,_9Z];},_a0=unCStr("completed "),_a1=unCStr("editing"),_a2=new T(function(){return [0,"destroy"];}),_a3=[0,_a2],_a4=[0,_9M,_a3],_a5=[1,_a4,_5],_a6=[0,_0,_5y],_a7=function(_){return _a6;},_a8=new T(function(){return [0,"view"];}),_a9=[0,_a8],_aa=[0,_9M,_a9],_ab=[1,_aa,_5],_ac=function(_ad){return true;},_ae=function(_af){return [0,[0,_ac,E(E(_af)[1])[2]]];},_ag=function(_ah){var _ai=E(E(_ah)[1]);return [0,[0,function(_aj){return E(E(A(_ai[1],[_aj])[9])[1])==13?true:false;},_ai[2]]];},_ak=function(_al){return [0];},_am=function(_an){return [0,[0,_ak,E(E(_an)[1])[2]]];},_ao=new T(function(){return [0,"(function(txt){return txt;})"];}),_ap=function(_aq,_){var _ar=A(_32,[_ao,E(toJSStr(E(_aq))),_]);return [0,_ar];},_as=function(_at,_){var _au=_5A(_),_av=E(_au),_aw=_95(_5,function(_){return [0,_0,function(_ax){return [1,function(_){return _ap(E(_at)[1],_);},_ax];}];},_),_ay=E(_aw),_az=_9B(_a5,_a7,_),_aA=E(_az),_aB=_aA[1],_aC=_5A(_),_aD=E(_aC),_aE=_aD[2],_aF=_9l([1,[0,_9M,[0,new T(function(){var _aG=E(_at),_aH=_aG[4];return !E(_aG[3])?!E(_aH)?[0,toJSStr(_5)]:[0,toJSStr(E(_a1))]:[0,toJSStr(_F(_a0,new T(function(){return !E(_aH)?[0]:E(_a1);})))];})]],_5],function(_){var _aI=_8f(_ab,function(_){return [0,_aB,function(_aJ){return [1,function(_){return _6t(_8q,_9W,[1,_9N,[1,_9P,[1,[0,_3f,[1,new T(function(){return E(E(_at)[3]);})]],_5]]],_av[1],_5,_);},new T(function(){return A(_ay[2],[new T(function(){return A(_aA[2],[_aJ]);})]);})];}];},_);return [0,_aE,function(_aK){return A(E(_aI)[2],[[1,function(_){return _6t(_8q,_9W,[1,_9S,[1,[0,_8n,[0,new T(function(){return E(E(_at)[2]);})]],_5]],_aD[1],_5,_);},_aK]]);}];},_);return [0,[0,[0,new T(function(){return _9T([1,new T(function(){return [0,new T(function(){return _2N(function(_aL){return [0,[0,function(_aM){return E([1,new T(function(){var _aN=E(_at),_aO=_aN[1];return [0,E(_aO),E([0,toJSStr(_aO)]),E(_aN[3]),E(_9J)];})]);},E(E(_aL)[1])[2]]];},E(E(_ay[1])[2])[1]);})];}),[1,new T(function(){return [0,new T(function(){return _2N(function(_aP){var _aQ=E(E(_aP)[1]);return [0,[0,function(_aR){return [1,new T(function(){var _aS=E(_at);return [0,E(_aS[1]),E(A(_aQ[1],[_aR])),E(_aS[3]),E(_aS[4])];})];},_aQ[2]]];},E(E(_aE)[3])[1]);})];}),[1,[0,new T(function(){var _aT=[1,_at],_aU=new T(function(){return _8D(fromJSStr(E(E(_at)[2])[1]),0)>0;});return _2N(function(_aV){var _aW=E(E(_aV)[1]);return [0,[0,function(_aX){return !A(_aW[1],[_aX])?E(_aT):!E(E(_at)[4])?E(_aT):!E(_aU)?[0]:E([1,new T(function(){var _aY=E(_at);return [0,E(fromJSStr(E(_aY[2])[1])),E(E(_2s)),E(_aY[3]),E(_2G)];})]);},_aW[2]]];},_9T([1,new T(function(){return [0,new T(function(){return _2N(_ae,E(E(_aE)[7])[1]);})];}),[1,new T(function(){return [0,new T(function(){return _2N(_ag,E(E(_aE)[6])[1]);})];}),_5]]));})],[1,new T(function(){return [0,new T(function(){return _2N(_am,E(E(_aB)[1])[1]);})];}),[1,new T(function(){return [0,new T(function(){return _2N(function(_aZ){return [0,[0,function(_b0){return E([1,new T(function(){var _b1=E(_at);return [0,E(_b1[1]),E(_b1[2]),E(!E(_b1[3])?true:false),E(_b1[4])];})]);},E(E(_aZ)[1])[2]]];},E(E(_av[2])[3])[1]);})];}),_5]]]]]);})]],function(_b2){return A(E(_aF)[2],[_b2]);}];},_b3=function(_b4,_b5,_){var _b6=_as(_b4,_),_b7=E(_b6),_b8=_b7[1],_b9=A(_b5,[_]),_ba=E(_b9);return [0,[1,[0,_b8,function(_){return [0,_b8,function(_bb){return A(_b7[2],[_bb]);}];}],_ba[1]],function(_bc){return A(_ba[2],[_bc]);}];},_bd=[0,_5,_5y],_be=function(_bf,_){var _bg=E(_bf);if(!_bg[0]){return _bd;}else{var _bh=A(E(_bg[1])[2],[_]),_bi=E(_bh),_bj=_be(_bg[2],_),_bk=E(_bj);return [0,[1,_bi[1],_bk[1]],function(_bl){return A(_bi[2],[new T(function(){return A(_bk[2],[_bl]);})]);}];}},_bm=function(_bn){while(1){var _bo=(function(_bp){var _bq=E(_bp);if(!_bq[0]){return [0];}else{var _br=_bq[2];if(!E(E(_bq[1])[3])){return [1,_2G,new T(function(){return _bm(_br);})];}else{_bn=_br;return null;}}})(_bn);if(_bo!=null){return _bo;}}},_bs=unCStr(": empty list"),_bt=unCStr("Prelude."),_bu=function(_bv){return err(_F(_bt,new T(function(){return _F(_bv,_bs);})));},_bw=unCStr("tail"),_bx=new T(function(){return _bu(_bw);}),_by=function(_bz,_bA){if(_bz>=0){var _bB=_8r(_bz,_bA);return _F(_bB[1],new T(function(){var _bC=E(_bB[2]);return _bC[0]==0?E(_bx):E(_bC[2]);}));}else{return _F(_5,new T(function(){var _bD=E(_bA);return _bD[0]==0?E(_bx):E(_bD[2]);}));}},_bE=function(_bF,_bG){return _by(E(_bF)[1],_bG);},_bH=function(_bI,_bJ,_bK){if(_bI>=0){var _bL=_8r(_bI,_bK);return _F(_bL[1],[1,_bJ,new T(function(){var _bM=E(_bL[2]);return _bM[0]==0?E(_bx):E(_bM[2]);})]);}else{return _F(_5,[1,_bJ,new T(function(){var _bN=E(_bK);return _bN[0]==0?E(_bx):E(_bN[2]);})]);}},_bO=function(_bP,_bQ,_bR){return _bH(E(_bP)[1],_bQ,_bR);},_bS=function(_bT){var _bU=E(E(_bT)[1]);return [0,[0,function(_bV){var _bW=A(_bU[1],[_bV]),_bX=_bW[1],_bY=E(_bW[2]);return _bY[0]==0?[1,function(_bZ){return _bE(_bX,_bZ);}]:[1,function(_bZ){return _bO(_bX,_bY[1],_bZ);}];},_bU[2]]];},_c0=function(_c1,_c2){var _c3=E(_c1);if(!_c3[0]){return [0];}else{var _c4=E(_c2);return _c4[0]==0?[0]:[1,new T(function(){return [0,new T(function(){return _2N(_bS,_2N(function(_c5){var _c6=E(E(_c5)[1]);return [0,[0,function(_c7){return [0,_c4[1],new T(function(){return A(_c6[1],[_c7]);})];},_c6[2]]];},E(E(E(_c3[1])[1])[1])[1]));})];}),new T(function(){return _c0(_c3[2],_c4[2]);})];}},_c8=new T(function(){return [0,"main"];}),_c9=[0,_c8],_ca=[0,_8K,_c9],_cb=[1,_ca,_5],_cc=new T(function(){return [0,"todo-list"];}),_cd=[0,_cc],_ce=[0,_8K,_cd],_cf=[1,_ce,_5],_cg=new T(function(){return [0,"header"];}),_ch=[0,_cg],_ci=[0,_8K,_ch],_cj=[1,_ci,_5],_ck=function(_cl,_cm){if(_cl<=_cm){var _cn=function(_co){return [1,[0,_co],new T(function(){return _co!=_cm?_cn(_co+1|0):[0];})];};return _cn(_cl);}else{return [0];}},_cp=new T(function(){return _ck(0,2147483647);}),_cq=[0,_5,_5y],_cr=new T(function(){return [0,"autoFocus"];}),_cs=[1,_9J],_ct=[0,_cr,_cs],_cu=[1,_ct,_5],_cv=function(_cw){var _cx=E(E(_cw)[1]);return [0,[0,function(_cy){return A(_cx[1],[_cy]);},_cx[2]]];},_cz=unCStr("todos"),_cA=function(_){return _ap(_cz,_);},_cB=function(_cC){return [1,_cA,_cC];},_cD=[0,_0,_cB],_cE=function(_){return _cD;},_cF=function(_cG){return E(_cG);},_cH=[0,_6m,_cF],_cI=function(_cJ,_cK,_){var _cL=js_React_DOM_footer(E(_cJ)[1],E(_cK)[1]);return [0,_cL];},_cM=function(_7b,_7c,_){return _cI(_7b,_7c,_);},_cN=function(_cO,_cP,_){var _cQ=A(_cP,[_]),_cR=_5A(_),_cS=E(_cR);return [0,_cS[2],function(_cT){return [1,function(_){var _cU=_6h(A(E(_cQ)[2],[_5]),_);return _6t(_cH,_cM,_cO,_cS[1],_cU,_);},_cT];}];},_cV=function(_cW){return E(_cW);},_cX=[0,_6m,_cV],_cY=function(_cZ,_d0,_){var _d1=js_React_DOM_strong(E(_cZ)[1],E(_d0)[1]);return [0,_d1];},_d2=function(_7b,_7c,_){return _cY(_7b,_7c,_);},_d3=function(_d4,_d5,_){var _d6=A(_d5,[_]),_d7=_5A(_),_d8=E(_d7);return [0,_d8[2],function(_d9){return [1,function(_){var _da=_6h(A(E(_d6)[2],[_5]),_);return _6t(_cX,_d2,_d4,_d8[1],_da,_);},_d9];}];},_db=function(_dc){return E(_dc);},_dd=[0,_6m,_db],_de=function(_df,_dg,_){var _dh=js_React_DOM_span(E(_df)[1],E(_dg)[1]);return [0,_dh];},_di=function(_7b,_7c,_){return _de(_7b,_7c,_);},_dj=function(_dk,_dl,_){var _dm=A(_dl,[_]),_dn=_5A(_),_do=E(_dn);return [0,_do[2],function(_dp){return [1,function(_){var _dq=_6h(A(E(_dm)[2],[_5]),_);return _6t(_dd,_di,_dk,_do[1],_dq,_);},_dp];}];},_dr=unCStr("Completed"),_ds=unCStr("Active"),_dt=function(_du,_dv){var _dw=jsShowI(_du);return _F(fromJSStr(_dw),_dv);},_dx=[0,41],_dy=[0,40],_dz=function(_dA,_dB,_dC){return _dB>=0?_dt(_dB,_dC):_dA<=6?_dt(_dB,_dC):[1,_dy,new T(function(){var _dD=jsShowI(_dB);return _F(fromJSStr(_dD),[1,_dx,_dC]);})];},_dE=0,_dF=1,_dG=new T(function(){return [0,"href"];}),_dH=function(_dI,_){return [0,_0,function(_dJ){return [1,function(_){return _ap(_dI,_);},_dJ];}];},_dK=function(_dL){return E(_dL);},_dM=[0,_6m,_dK],_dN=function(_dO,_dP,_){var _dQ=js_React_DOM_a(E(_dO)[1],E(_dP)[1]);return [0,_dQ];},_dR=function(_7b,_7c,_){return _dN(_7b,_7c,_);},_dS=function(_dT,_dU,_){var _dV=A(_dU,[_]),_dW=_5A(_),_dX=E(_dW);return [0,_dX[2],function(_dY){return [1,function(_){var _dZ=_6h(A(E(_dV)[2],[_5]),_);return _6t(_dM,_dR,_dT,_dX[1],_dZ,_);},_dY];}];},_e0=unCStr("selected"),_e1=function(_e2,_e3,_e4,_){var _e5=new T(function(){return [0,toJSStr(unAppCStr("#/",_e2))];});return _9l(_5,function(_){return _dS([1,[0,_dG,[0,_e5]],[1,[0,_9M,[0,new T(function(){switch(E(_e3)){case 0:switch(E(_e4)){case 0:return [0,toJSStr(E(_e0))];case 1:return [0,toJSStr(_5)];default:return [0,toJSStr(_5)];}break;case 1:return E(_e4)==1?[0,toJSStr(E(_e0))]:[0,toJSStr(_5)];default:return E(_e4)==2?[0,toJSStr(E(_e0))]:[0,toJSStr(_5)];}})]],_5]],function(_){return _dH(_e2,_);},_);},_);},_e6=new T(function(){return [0,"clear-completed"];}),_e7=[0,_e6],_e8=[0,_8K,_e7],_e9=[1,_e8,_5],_ea=[0,41],_eb=[1,_ea,_5],_ec=unCStr("All"),_ed=new T(function(){return [0,"footer"];}),_ee=[0,_ed],_ef=[0,_8K,_ee],_eg=[1,_ef,_5],_eh=new T(function(){return [0,"todo-count"];}),_ei=[0,_eh],_ej=[0,_8K,_ei],_ek=[1,_ej,_5],_el=[0,32],_em=new T(function(){return [0,"filters"];}),_en=[0,_em],_eo=[0,_8K,_en],_ep=[1,_eo,_5],_eq=function(_er){return 2;},_es=function(_et){return [0,[0,_eq,E(E(_et)[1])[2]]];},_eu=function(_ev){return 0;},_ew=function(_ex){return [0,[0,_eu,E(E(_ex)[1])[2]]];},_ey=function(_ez){return 1;},_eA=function(_eB){return [0,[0,_ey,E(E(_eB)[1])[2]]];},_eC=function(_eD){return 0;},_eE=function(_eF){return [0,[0,_eC,E(E(_eF)[1])[2]]];},_eG=unCStr("items"),_eH=unCStr(" left"),_eI=new T(function(){return _F(_eG,_eH);}),_eJ=unCStr("item"),_eK=new T(function(){return _F(_eJ,_eH);}),_eL=function(_eM,_eN,_eO,_){var _eP=new T(function(){return [0,E(_eM)[1]-E(_eN)[1]|0];}),_eQ=_9B(_e9,function(_){return [0,_0,function(_eR){return [1,function(_){return _ap(unAppCStr("Clear completed (",new T(function(){return _F(_dz(0,E(_eP)[1],_5),_eb);})),_);},_eR];}];},_),_eS=E(_eQ),_eT=_e1(_ec,_2F,_eO,_),_eU=E(_eT),_eV=_e1(_ds,_dE,_eO,_),_eW=E(_eV),_eX=_e1(_dr,_dF,_eO,_),_eY=E(_eX),_eZ=_eY[1],_f0=_cN(_eg,function(_){var _f1=_dj(_ek,function(_){var _f2=_d3(_5,function(_){return [0,_0,function(_f3){return [1,function(_){return _ap(_dz(0,E(_eN)[1],_5),_);},_f3];}];},_);return [0,_0,function(_f4){return A(E(_f2)[2],[[1,function(_){return _ap([1,_el,new T(function(){return E(E(_eN)[1])==1?E(_eK):E(_eI);})],_);},_f4]]);}];},_),_f5=E(_f1)[2],_f6=_7d(_ep,function(_){return [0,_eZ,function(_f7){return A(_eU[2],[new T(function(){return A(_eW[2],[new T(function(){return A(_eY[2],[_f7]);})]);})]);}];},_),_f8=E(_f6)[2];return E(_eP)[1]<=0?[0,_0,function(_f9){return A(_f5,[new T(function(){return A(_f8,[_f9]);})]);}]:[0,_0,function(_fa){return A(_f5,[new T(function(){return A(_f8,[new T(function(){return A(_eS[2],[_fa]);})]);})]);}];},_);return [0,[0,[0,new T(function(){return _9T([1,new T(function(){return [0,new T(function(){return _2N(_es,E(E(_eU[1])[1])[1]);})];}),[1,new T(function(){return [0,new T(function(){return _2N(_ew,E(E(_eW[1])[1])[1]);})];}),[1,new T(function(){return [0,new T(function(){return _2N(_eA,E(E(_eZ)[1])[1]);})];}),_5]]]);})],new T(function(){return [0,new T(function(){return _2N(_eE,E(E(_eS[1])[1])[1]);})];})],function(_fb){return A(E(_f0)[2],[_fb]);}];},_fc=function(_fd,_){var _fe=new T(function(){return [0,_8D(E(_fd)[1],0)];}),_ff=new T(function(){return [0,_8D(_bm(E(_fd)[1]),0)];}),_fg=_eL(_fe,_ff,new T(function(){return E(E(_fd)[3]);}),_),_fh=E(_fg),_fi=_fh[1],_fj=_5A(_),_fk=E(_fd),_fl=_fk[2],_fm=function(_fn,_){while(1){var _fo=(function(_fp,_){var _fq=E(_fp);if(!_fq[0]){return _cq;}else{var _fr=_fq[1],_fs=_fq[2];switch(E(_fk[3])){case 0:var _ft=E(_fr);if(!E(_ft[3])){return _b3(_ft,function(_){return _fm(_fs,_);},_);}else{_fn=_fs;return null;}break;case 1:var _fu=E(_fr);if(!E(_fu[3])){_fn=_fs;return null;}else{return _b3(_fu,function(_){return _fm(_fs,_);},_);}break;default:return _b3(_fr,function(_){return _fm(_fs,_);},_);}}})(_fn,_);if(_fo!=null){return _fo;}}},_fv=_fm(_fk[1],_),_fw=E(_fv),_fx=_fw[1],_fy=_5A(_),_fz=E(_fy),_fA=_fz[2],_fB=function(_){return _6t(_8q,_9W,[1,_8S,[1,_8W,[1,[0,_8n,[0,_fl]],_cu]]],_fz[1],_5,_);},_fC=_8f(_5,function(_){return _7Z(_cj,function(_){var _fD=_7J(_5,_cE,_),_fE=E(_fD)[2],_fF=_7t(_cb,function(_){var _fG=_7d(_cf,function(_){return _be(_fx,_);},_),_fH=E(_fG);return [0,_fH[1],function(_fI){return [1,function(_){return _6t(_8q,_9W,[1,_8L,[1,_8P,[1,[0,_3f,[1,new T(function(){return E(E(_ff)[1])==0?true:false;})]],_5]]],E(_fj)[1],_5,_);},new T(function(){return A(_fH[2],[_fI]);})];}];},_),_fJ=E(_fF)[2];return E(_fe)[1]<=0?[0,_0,function(_fK){return A(_fE,[[1,_fB,new T(function(){return A(_fJ,[_fK]);})]]);}]:[0,_0,function(_fL){return A(_fE,[[1,_fB,new T(function(){return A(_fJ,[new T(function(){return A(_fh[2],[_fL]);})]);})]]);}];},_);},_);return [0,[0,[0,new T(function(){return _9T([1,new T(function(){return [0,new T(function(){var _fM=new T(function(){return [0,E(fromJSStr(E(_fl)[1])),E(E(_2s)),E(_2G),E(_2G)];});return _2N(function(_fN){var _fO=E(E(_fN)[1]);return [0,[0,function(_fP){return E(E(A(_fO[1],[_fP])[9])[1])==13?E([1,function(_fQ){return _8y(0,_fM,_fQ);}]):[0];},_fO[2]]];},E(E(_fA)[6])[1]);})];}),new T(function(){return _c0(_fx,_cp);})]);})],new T(function(){return [0,new T(function(){return _2N(_cv,E(E(_fA)[3])[1]);})];}),new T(function(){return E(E(_fi)[1]);}),new T(function(){return E(E(_fi)[2]);})],function(_fR){return A(_fw[2],[new T(function(){return A(E(_fC)[2],[_fR]);})]);}];},_fS=function(_fT,_){var _fU=newMVar(),_=putMVar(_fU,_2R),_fV=function(_fW,_){var _fX=0,_fY=function(_){var _fZ=E(_fW)[1],_g0=takeMVar(_fZ),_=putMVar(_fZ,_g0);return _g0;},_g1=function(_g2,_g3,_g4,_g5,_g6,_){var _g7=_26(E(_g2)[1],function(_g8,_){var _g9=E(_g8);if(!_g9[0]){return _0;}else{var _ga=_g9[1],_gb=0,_gc=function(_,_gd){var _ge=0;if(!E(_ge)){var _gf=(function(_){var _gg=E(_fW)[1],_gh=takeMVar(_gg),_=putMVar(_gg,new T(function(){var _gi=E(_gd);return [0,E(A(_ga,[_gi[1]])),E(E(_2s)),E(_gi[3])];}));return _gh;})();return _fV(_fW,_);}else{var _gj=E(_fW),_gk=_gj[1],_gl=takeMVar(_gk),_=putMVar(_gk,new T(function(){var _gm=E(_gd);return [0,E(A(_ga,[_gm[1]])),E(E(_2s)),E(_gm[3])];}));return _fV(_gj,_);}};if(!E(_gb)){var _gn=_fY();return _gc(_,_gn);}else{var _go=E(_fW)[1],_gp=takeMVar(_go),_=putMVar(_go,_gp);return _gc(_,_gp);}}},_),_gq=_26(E(_g3)[1],function(_gr,_){var _gs=0,_gt=function(_,_gu){var _gv=0;if(!E(_gv)){var _gw=(function(_){var _gx=E(_fW)[1],_gy=takeMVar(_gx),_=putMVar(_gx,new T(function(){var _gz=E(_gu);return [0,E(_gz[1]),E(E(_gr)),E(_gz[3])];}));return _gy;})();return _fV(_fW,_);}else{var _gA=E(_fW),_gB=_gA[1],_gC=takeMVar(_gB),_=putMVar(_gB,new T(function(){var _gD=E(_gu);return [0,E(_gD[1]),E(E(_gr)),E(_gD[3])];}));return _fV(_gA,_);}};if(!E(_gs)){var _gE=_fY();return _gt(_,_gE);}else{var _gF=E(_fW)[1],_gG=takeMVar(_gF),_=putMVar(_gF,_gG);return _gt(_,_gG);}},_),_gH=_26(E(_g4)[1],function(_gI,_){var _gJ=0,_gK=function(_,_gL){var _gM=0;if(!E(_gM)){var _gN=(function(_){var _gO=E(_fW)[1],_gP=takeMVar(_gO),_=putMVar(_gO,new T(function(){var _gQ=E(_gL);return [0,E(_gQ[1]),E(_gQ[2]),E(E(_gI))];}));return _gP;})();return _fV(_fW,_);}else{var _gR=E(_fW),_gS=_gR[1],_gT=takeMVar(_gS),_=putMVar(_gS,new T(function(){var _gU=E(_gL);return [0,E(_gU[1]),E(_gU[2]),E(E(_gI))];}));return _fV(_gR,_);}};if(!E(_gJ)){var _gV=_fY();return _gK(_,_gV);}else{var _gW=E(_fW)[1],_gX=takeMVar(_gW),_=putMVar(_gW,_gX);return _gK(_,_gX);}},_),_gY=_26(E(_g5)[1],function(_gZ,_){return (function(_){var _h0=0,_h1=function(_,_h2){var _h3=0;if(!E(_h3)){var _h4=(function(_){var _h5=E(_fW)[1],_h6=takeMVar(_h5),_=putMVar(_h5,new T(function(){var _h7=E(_h2);return [0,E(_2t(_2D,_h7[1])),E(_h7[2]),E(_h7[3])];}));return _h6;})();return _fV(_fW,_);}else{var _h8=E(_fW),_h9=_h8[1],_ha=takeMVar(_h9),_=putMVar(_h9,new T(function(){var _hb=E(_h2);return [0,E(_2t(_2D,_hb[1])),E(_hb[2]),E(_hb[3])];}));return _fV(_h8,_);}};if(!E(_h0)){var _hc=_fY();return _h1(_,_hc);}else{var _hd=E(_fW)[1],_he=takeMVar(_hd),_=putMVar(_hd,_he);return _h1(_,_he);}})(_);},_);return _38(_fT,_g6,_);};if(!E(_fX)){var _hf=_fY(),_hg=_fc(_hf,_),_hh=E(_hg),_hi=E(_hh[1]);return _g1(_hi[1],_hi[2],_hi[3],_hi[4],new T(function(){return A(_hh[2],[_5]);}),_);}else{var _hj=E(_fW)[1],_hk=takeMVar(_hj),_=putMVar(_hj,_hk),_hl=_fc(_hk,_),_hm=E(_hl),_hn=E(_hm[1]);return _g1(_hn[1],_hn[2],_hn[3],_hn[4],new T(function(){return A(_hm[2],[_5]);}),_);}};return _fV([0,_fU],_);},_ho=unCStr("Pattern match failure in do expression at src/Main.hs:239:3-8"),_hp=unCStr("todoapp"),_hq=function(_){var _hr=jsFind(toJSStr(E(_hp))),_hs=E(_hr);if(!_hs[0]){return _1V(_ho,_);}else{var _ht=_fS(_hs[1],_);return _8(_37,_1X,_);}},_hu=function(_){return _hq(_);};
var hasteMain = function() {A(_hu, [0]);};window.onload = hasteMain;