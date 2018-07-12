
/* ######## jquery_1_10_2_min ############################################# */

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/* ######## jquery_1_10_2_min End ############################################# */


/* ######## jquery_migrate_1_2_1_min ############################################# */

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/* ######## jquery_migrate_1_2_1_min End ############################################# */


/* ######## jquery_ui_1_10_3_custom_min ############################################# */

/*! jQuery UI - v1.10.3 - 2013-09-25
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.datepicker.js, jquery.ui.slider.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),s===e)return o[i]===e?null:o[i];o[i]=s}else{if(s===e)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),D={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),a=i(D.at,p,g),v.left+=a[0],v.top+=a[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),x=u+f+s(this,"marginRight")+k.width,C=d+_+s(this,"marginBottom")+k.height,M=t.extend({},v),T=i(D.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=d:"center"===e.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],t.support.offsetFractions||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:x,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-M.left,s=i+p-u,n=m.top-M.top,a=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+a)&&(l.vertical="middle"),l.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e,t){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){e.datepicker._isDisabledDatepicker(n.inline?t.parent()[0]:n.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))})}function s(t,i){e.extend(t,i);for(var a in i)null==i[a]&&(t[a]=i[a]);return t}e.extend(e.ui,{datepicker:{version:"1.10.3"}});var n,r="datepicker";e.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return s(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var a,s,n;a=t.nodeName.toLowerCase(),s="div"===a||"span"===a,t.id||(this.uuid+=1,t.id="dp"+this.uuid),n=this._newInst(e(t),s),n.settings=e.extend({},i||{}),"input"===a?this._connectDatepicker(t,n):s&&this._inlineDatepicker(t,n)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var a=e(t);i.append=e([]),i.trigger=e([]),a.hasClass(this.markerClassName)||(this._attachments(a,i),a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,r,i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var a,s,n,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=e("<span class='"+this._appendClass+"'>"+r+"</span>"),t[o?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),a=this._get(i,"showOn"),("focus"===a||"both"===a)&&t.focus(this._showDatepicker),("button"===a||"both"===a)&&(s=this._get(i,"buttonText"),n=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:n,alt:s,title:s}):e("<button type='button'></button>").addClass(this._triggerClass).html(n?e("<img/>").attr({src:n,alt:s,title:s}):s)),t[o?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,a,s,n=new Date(2009,11,20),r=this._get(e,"dateFormat");r.match(/[DM]/)&&(t=function(e){for(i=0,a=0,s=0;e.length>s;s++)e[s].length>i&&(i=e[s].length,a=s);return a},n.setMonth(t(this._get(e,r.match(/MM/)?"monthNames":"monthNamesShort"))),n.setDate(t(this._get(e,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-n.getDay())),e.input.attr("size",this._formatDate(e,n).length)}},_inlineDatepicker:function(t,i){var a=e(t);a.hasClass(this.markerClassName)||(a.addClass(this.markerClassName).append(i.dpDiv),e.data(t,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,a,n,o){var u,c,l,h,d,p=this._dialogInst;return p||(this.uuid+=1,u="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+u+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],r,p)),s(p.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(c=document.documentElement.clientWidth,l=document.documentElement.clientHeight,h=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[c/2-100+h,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=a,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(t){var i,a=e(t),s=e.data(t,r);a.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,r),"input"===i?(s.append.remove(),s.trigger.remove(),a.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&a.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,a,n){var r,o,u,c,l=this._getInst(i);return 2===arguments.length&&"string"==typeof a?"defaults"===a?e.extend({},e.datepicker._defaults):l?"all"===a?e.extend({},l.settings):this._get(l,a):null:(r=a||{},"string"==typeof a&&(r={},r[a]=n),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),u=this._getMinMaxDate(l,"min"),c=this._getMinMaxDate(l,"max"),s(l.settings,r),null!==u&&r.dateFormat!==t&&r.minDate===t&&(l.settings.minDate=this._formatDate(l,u)),null!==c&&r.dateFormat!==t&&r.maxDate===t&&(l.settings.maxDate=this._formatDate(l,c)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(e(i),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),t)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,a,s,n=e.datepicker._getInst(t.target),r=!0,o=n.dpDiv.is(".ui-datepicker-rtl");if(n._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),r=!1;break;case 13:return s=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",n.dpDiv),s[0]&&e.datepicker._selectDay(t.target,n.selectedMonth,n.selectedYear,s[0]),i=e.datepicker._get(n,"onSelect"),i?(a=e.datepicker._formatDate(n),i.apply(n.input?n.input[0]:null,[a,n])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),r=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),r=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?1:-1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),r=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?-1:1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),r=t.ctrlKey||t.metaKey;break;default:r=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(i){var a,s,n=e.datepicker._getInst(i.target);return e.datepicker._get(n,"constrainInput")?(a=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">s||!a||a.indexOf(s)>-1):t},_doKeyUp:function(t){var i,a=e.datepicker._getInst(t.target);if(a.input.val()!==a.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,e.datepicker._getFormatConfig(a)),i&&(e.datepicker._setDateFromField(a),e.datepicker._updateAlternate(a),e.datepicker._updateDatepicker(a))}catch(s){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,a,n,r,o,u,c;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),a=e.datepicker._get(i,"beforeShow"),n=a?a.apply(t,[t,i]):{},n!==!1&&(s(i.settings,n),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),r=!1,e(t).parents().each(function(){return r|="fixed"===e(this).css("position"),!r}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),o=e.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(u=e.datepicker._get(i,"showAnim"),c=e.datepicker._get(i,"duration"),i.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[u]?i.dpDiv.show(u,e.datepicker._get(i,"showOptions"),c):i.dpDiv[u||"show"](u?c:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,n=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,a=this._getNumberOfMonths(t),s=a[1],r=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",r*s+"em"),t.dpDiv[(1!==a[0]||1!==a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,a){var s=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),r=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,u=document.documentElement.clientWidth+(a?0:e(document).scrollLeft()),c=document.documentElement.clientHeight+(a?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?s-r:0,i.left-=a&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=a&&i.top===t.input.offset().top+o?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>u&&u>s?Math.abs(i.left+s-u):0),i.top-=Math.min(i.top,i.top+n>c&&c>n?Math.abs(n+o):0),i},_findPos:function(t){for(var i,a=this._getInst(t),s=this._get(a,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[s?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,a,s,n,o=this._curInst;!o||t&&o!==e.data(t,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),a=this._get(o,"duration"),s=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),a,s):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?a:null,s),i||s(),this._datepickerShowing=!1,n=this._get(o,"onClose"),n&&n.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),a=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==a)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,a){var s=e(t),n=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(n,i+("M"===a?this._get(n,"showCurrentAtPos"):0),a),this._updateDatepicker(n))},_gotoToday:function(t){var i,a=e(t),s=this._getInst(a[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(a)},_selectMonthYear:function(t,i,a){var s=e(t),n=this._getInst(s[0]);n["selected"+("M"===a?"Month":"Year")]=n["draw"+("M"===a?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(n),this._adjustDate(s)},_selectDay:function(t,i,a,s){var n,r=e(t);e(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(n=this._getInst(r[0]),n.selectedDay=n.currentDay=e("a",s).html(),n.selectedMonth=n.currentMonth=i,n.selectedYear=n.currentYear=a,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var a,s=e(t),n=this._getInst(s[0]);i=null!=i?i:this._formatDate(n),n.input&&n.input.val(i),this._updateAlternate(n),a=this._get(n,"onSelect"),a?a.apply(n.input?n.input[0]:null,[i,n]):n.input&&n.input.trigger("change"),n.inline?this._updateDatepicker(n):(this._hideDatepicker(),this._lastInput=n.input[0],"object"!=typeof n.input[0]&&n.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,a,s,n=this._get(t,"altField");n&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),a=this._getDate(t),s=this.formatDate(i,a,this._getFormatConfig(t)),e(n).each(function(){e(this).val(s)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(i,a,s){if(null==i||null==a)throw"Invalid arguments";if(a="object"==typeof a?""+a:a+"",""===a)return null;var n,r,o,u,c=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,h="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,p=(s?s.dayNames:null)||this._defaults.dayNames,g=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,m=(s?s.monthNames:null)||this._defaults.monthNames,f=-1,_=-1,v=-1,k=-1,b=!1,y=function(e){var t=i.length>n+1&&i.charAt(n+1)===e;return t&&n++,t},D=function(e){var t=y(e),i="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,s=RegExp("^\\d{1,"+i+"}"),n=a.substring(c).match(s);if(!n)throw"Missing number at position "+c;return c+=n[0].length,parseInt(n[0],10)},w=function(i,s,n){var r=-1,o=e.map(y(i)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,i){var s=i[1];return a.substr(c,s.length).toLowerCase()===s.toLowerCase()?(r=i[0],c+=s.length,!1):t}),-1!==r)return r+1;throw"Unknown name at position "+c},M=function(){if(a.charAt(c)!==i.charAt(n))throw"Unexpected literal at position "+c;c++};for(n=0;i.length>n;n++)if(b)"'"!==i.charAt(n)||y("'")?M():b=!1;else switch(i.charAt(n)){case"d":v=D("d");break;case"D":w("D",d,p);break;case"o":k=D("o");break;case"m":_=D("m");break;case"M":_=w("M",g,m);break;case"y":f=D("y");break;case"@":u=new Date(D("@")),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"!":u=new Date((D("!")-this._ticksTo1970)/1e4),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"'":y("'")?M():b=!0;break;default:M()}if(a.length>c&&(o=a.substr(c),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===f?f=(new Date).getFullYear():100>f&&(f+=(new Date).getFullYear()-(new Date).getFullYear()%100+(h>=f?0:-100)),k>-1)for(_=1,v=k;;){if(r=this._getDaysInMonth(f,_-1),r>=v)break;_++,v-=r}if(u=this._daylightSavingAdjust(new Date(f,_-1,v)),u.getFullYear()!==f||u.getMonth()+1!==_||u.getDate()!==v)throw"Invalid date";return u},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var a,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,u=function(t){var i=e.length>a+1&&e.charAt(a+1)===t;return i&&a++,i},c=function(e,t,i){var a=""+t;if(u(e))for(;i>a.length;)a="0"+a;return a},l=function(e,t,i,a){return u(e)?a[t]:i[t]},h="",d=!1;if(t)for(a=0;e.length>a;a++)if(d)"'"!==e.charAt(a)||u("'")?h+=e.charAt(a):d=!1;else switch(e.charAt(a)){case"d":h+=c("d",t.getDate(),2);break;case"D":h+=l("D",t.getDay(),s,n);break;case"o":h+=c("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":h+=c("m",t.getMonth()+1,2);break;case"M":h+=l("M",t.getMonth(),r,o);break;case"y":h+=u("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":h+=t.getTime();break;case"!":h+=1e4*t.getTime()+this._ticksTo1970;break;case"'":u("'")?h+="'":d=!0;break;default:h+=e.charAt(a)}return h},_possibleChars:function(e){var t,i="",a=!1,s=function(i){var a=e.length>t+1&&e.charAt(t+1)===i;return a&&t++,a};for(t=0;e.length>t;t++)if(a)"'"!==e.charAt(t)||s("'")?i+=e.charAt(t):a=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":a=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,i){return e.settings[i]!==t?e.settings[i]:this._defaults[i]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),a=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),n=s,r=this._getFormatConfig(e);try{n=this.parseDate(i,a,r)||s}catch(o){a=t?"":a}e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),e.currentDay=a?n.getDate():0,e.currentMonth=a?n.getMonth():0,e.currentYear=a?n.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,a){var s=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},n=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(a){}for(var s=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,n=s.getFullYear(),r=s.getMonth(),o=s.getDate(),u=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,c=u.exec(i);c;){switch(c[2]||"d"){case"d":case"D":o+=parseInt(c[1],10);break;case"w":case"W":o+=7*parseInt(c[1],10);break;case"m":case"M":r+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r));break;case"y":case"Y":n+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r))}c=u.exec(i)}return new Date(n,r,o)},r=null==i||""===i?a:"string"==typeof i?n(i):"number"==typeof i?isNaN(i)?a:s(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?a:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var a=!t,s=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),s===e.selectedMonth&&n===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(a?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),a="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(a,-i,"M")},next:function(){e.datepicker._adjustDate(a,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(a)},selectDay:function(){return e.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(a,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(a,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,a,s,n,r,o,u,c,l,h,d,p,g,m,f,_,v,k,b,y,D,w,M,C,x,I,N,T,A,E,S,Y,F,P,O,j,K,R,H=new Date,W=this._daylightSavingAdjust(new Date(H.getFullYear(),H.getMonth(),H.getDate())),L=this._get(e,"isRTL"),U=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),z=this._get(e,"navigationAsDateFormat"),q=this._getNumberOfMonths(e),G=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),Q=1!==q[0]||1!==q[1],V=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(e,"min"),X=this._getMinMaxDate(e,"max"),Z=e.drawMonth-G,et=e.drawYear;if(0>Z&&(Z+=12,et--),X)for(t=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-q[0]*q[1]+1,X.getDate())),t=$&&$>t?$:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=z?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):i,a=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>",s=this._get(e,"nextText"),s=z?this.formatDate(s,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):s,n=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>",r=this._get(e,"currentText"),o=this._get(e,"gotoCurrent")&&e.currentDay?V:W,r=z?this.formatDate(r,o,this._getFormatConfig(e)):r,u=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",c=U?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(L?u:"")+(this._isInRange(e,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(L?"":u)+"</div>":"",l=parseInt(this._get(e,"firstDay"),10),l=isNaN(l)?0:l,h=this._get(e,"showWeek"),d=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),g=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),f=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),v=this._get(e,"selectOtherMonths"),k=this._getDefaultDate(e),b="",D=0;q[0]>D;D++){for(w="",this.maxRows=4,M=0;q[1]>M;M++){if(C=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),x=" ui-corner-all",I="",Q){if(I+="<div class='ui-datepicker-group",q[1]>1)switch(M){case 0:I+=" ui-datepicker-group-first",x=" ui-corner-"+(L?"right":"left");break;case q[1]-1:I+=" ui-datepicker-group-last",x=" ui-corner-"+(L?"left":"right");break;default:I+=" ui-datepicker-group-middle",x=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+x+"'>"+(/all|left/.test(x)&&0===D?L?n:a:"")+(/all|right/.test(x)&&0===D?L?a:n:"")+this._generateMonthYearHeader(e,Z,et,$,X,D>0||M>0,g,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",N=h?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",y=0;7>y;y++)T=(y+l)%7,N+="<th"+((y+l+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[T]+"'>"+p[T]+"</span></th>";for(I+=N+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),E=(this._getFirstDayOfMonth(et,Z)-l+7)%7,S=Math.ceil((E+A)/7),Y=Q?this.maxRows>S?this.maxRows:S:S,this.maxRows=Y,F=this._daylightSavingAdjust(new Date(et,Z,1-E)),P=0;Y>P;P++){for(I+="<tr>",O=h?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(F)+"</td>":"",y=0;7>y;y++)j=f?f.apply(e.input?e.input[0]:null,[F]):[!0,""],K=F.getMonth()!==Z,R=K&&!v||!j[0]||$&&$>F||X&&F>X,O+="<td class='"+((y+l+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(F.getTime()===C.getTime()&&Z===e.selectedMonth&&e._keyEvent||k.getTime()===F.getTime()&&k.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!_?"":" "+j[1]+(F.getTime()===V.getTime()?" "+this._currentClass:"")+(F.getTime()===W.getTime()?" ui-datepicker-today":""))+"'"+(K&&!_||!j[2]?"":" title='"+j[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+F.getMonth()+"' data-year='"+F.getFullYear()+"'")+">"+(K&&!_?"&#xa0;":R?"<span class='ui-state-default'>"+F.getDate()+"</span>":"<a class='ui-state-default"+(F.getTime()===W.getTime()?" ui-state-highlight":"")+(F.getTime()===V.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+"' href='#'>"+F.getDate()+"</a>")+"</td>",F.setDate(F.getDate()+1),F=this._daylightSavingAdjust(F);I+=O+"</tr>"}Z++,Z>11&&(Z=0,et++),I+="</tbody></table>"+(Q?"</div>"+(q[0]>0&&M===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=I}b+=w}return b+=c,e._keyEvent=!1,b},_generateMonthYearHeader:function(e,t,i,a,s,n,r,o){var u,c,l,h,d,p,g,m,f=this._get(e,"changeMonth"),_=this._get(e,"changeYear"),v=this._get(e,"showMonthAfterYear"),k="<div class='ui-datepicker-title'>",b="";if(n||!f)b+="<span class='ui-datepicker-month'>"+r[t]+"</span>";else{for(u=a&&a.getFullYear()===i,c=s&&s.getFullYear()===i,b+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",l=0;12>l;l++)(!u||l>=a.getMonth())&&(!c||s.getMonth()>=l)&&(b+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+o[l]+"</option>");b+="</select>"}if(v||(k+=b+(!n&&f&&_?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!_)k+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(h=this._get(e,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?d+parseInt(e,10):parseInt(e,10);
return isNaN(t)?d:t},g=p(h[0]),m=Math.max(g,p(h[1]||"")),g=a?Math.max(g,a.getFullYear()):g,m=s?Math.min(m,s.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=g;g++)e.yearshtml+="<option value='"+g+"'"+(g===i?" selected='selected'":"")+">"+g+"</option>";e.yearshtml+="</select>",k+=e.yearshtml,e.yearshtml=null}return k+=this._get(e,"yearSuffix"),v&&(k+=(!n&&f&&_?"":"&#xa0;")+b),k+="</div>"},_adjustInstDate:function(e,t,i){var a=e.drawYear+("Y"===i?t:0),s=e.drawMonth+("M"===i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(a,s))+("D"===i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(a,s,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),s=i&&i>t?i:t;return a&&s>a?a:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,a){var s=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,a+(0>t?t:s[0]*s[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i,a,s=this._getMinMaxDate(e,"min"),n=this._getMinMaxDate(e,"max"),r=null,o=null,u=this._get(e,"yearRange");return u&&(i=u.split(":"),a=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=a),i[1].match(/[+\-].*/)&&(o+=a)),(!s||t.getTime()>=s.getTime())&&(!n||t.getTime()<=n.getTime())&&(!r||t.getFullYear()>=r)&&(!o||o>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,a){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(a,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new i,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.3"})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);
/* ######## jquery_ui_1_10_3_custom_min End ############################################# */


/* ######## jquery_ui_touch_punch_min ############################################# */

/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b){b.support.touch="ontouchend" in document;if(!b.support.touch){return;}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return;}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f);}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return;}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown");};c._touchMove=function(f){if(!a){return;}this._touchMoved=true;d(f,"mousemove");};c._touchEnd=function(f){if(!a){return;}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click");}a=false;};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f);};})(jQuery);
/* ######## jquery_ui_touch_punch_min End ############################################# */


/* ######## jquery_ba_bbq_min ############################################# */

/*
 * jQuery BBQ: Back Button & Query Library - v1.3pre - 8/26/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(e){function t(a){return"string"===typeof a}function q(a){var b=B.call(arguments,1);return function(){return a.apply(this,b.concat(B.call(arguments)))}}function C(a,b,c,d,w){var m;d!==g?(b=c.match(a?u:/^([^#?]*)\??([^#]*)(#?.*)/),c=b[3]||"",2===w&&t(d)?d=d.replace(a?v:D,""):(m=j(b[2]),d=t(d)?j[a?h:r](d):d,d=2===w?d:1===w?e.extend({},d,m):e.extend({},m,d),d=E(d),a&&(d=d.replace(F,x))),a=b[1]+(a?y:d||!b[1]?"?":"")+d+c):a=b(c!==g?c:location.href);return a}function G(a,b,c){b===g||"boolean"===typeof b?(c=b,b=s[a?h:r]()):b=t(b)?b.replace(a?v:D,""):b;return j(b,c)}function H(a,b,c,d){!t(c)&&"object"!==typeof c&&(d=c,c=b,b=g);return this.each(function(){var g=e(this),m=b||I()[(this.nodeName||"").toLowerCase()]||"",f=m&&g.attr(m)||"";g.attr(m,s[a](f,c,d))})}"$:nomunge";var g,B=Array.prototype.slice,x=decodeURIComponent,s=e.param,E,p,j,z,A=e.bbq=e.bbq||{},J,K,I,L=e.event.special,r="querystring",h="fragment",D=/^.*\?|#.*$/g,v,u,F,M,y,N={};s[r]=q(C,0,function(a){return a.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")});s[h]=p=q(C,1,function(a){return a.replace(u,"$2")});s.sorted=E=function(a,b){var c=[],d={};e.each(s(a,b).split("&"),function(a,b){var f=b.replace(/(?:%5B|=).*$/,""),e=d[f];e||(e=d[f]=[],c.push(f));e.push(b)});return e.map(c.sort(),function(a){return d[a]}).join("&")};p.noEscape=function(a){a=e.map((a||"").split(""),encodeURIComponent);F=RegExp(a.join("|"),"g")};p.noEscape(",/");p.ajaxCrawlable=function(a){a!==g&&(a?(v=/^.*(?:#!|#)/,u=/^([^#]*)(?:#!|#)?(.*)$/,y="#!"):(v=/^.*#/,u=/^([^#]*)#?(.*)$/,y="#"),M=!!a);return M};p.ajaxCrawlable(0);e.deparam=j=function(a,b){var c={},d={"true":!0,"false":!1,"null":null};e.each(a.replace(/\+/g," ").split("&"),function(a,m){var f=m.split("="),l=x(f[0]),j=c,h=0,k=l.split("]["),n=k.length-1;/\[/.test(k[0])&&/\]$/.test(k[n])?(k[n]=k[n].replace(/\]$/,""),k=k.shift().split("[").concat(k),n=k.length-1):n=0;if(2===f.length)if(f=x(f[1]),b&&(f=f&&!isNaN(f)?+f:"undefined"===f?g:d[f]!==g?d[f]:f),n)for(;h<=n;h++)l=""===k[h]?j.length:k[h],j=j[l]=h<n?j[l]||(k[h+1]&&isNaN(k[h+1])?{}:[]):f;else e.isArray(c[l])?c[l].push(f):c[l]=c[l]!==g?[c[l],f]:f;else l&&(c[l]=b?g:"")});return c};j[r]=q(G,0);j[h]=z=q(G,1);e.elemUrlAttr||(e.elemUrlAttr=function(a){return e.extend(N,a)})({a:"href",base:"href",iframe:"src",img:"src",input:"src",form:"action",link:"href",script:"src"});I=e.elemUrlAttr;e.fn[r]=q(H,r);e.fn[h]=q(H,h);A.pushState=J=function(a,b){t(a)&&(/^#/.test(a)&&b===g)&&(b=2);var c=a!==g,c=p(location.href,c?a:{},c?b:2);location.href=c};A.getState=K=function(a,b){return a===g||"boolean"===typeof a?z(a):z(b)[a]};A.removeState=function(a){var b={};a!==g&&(b=K(),e.each(e.isArray(a)?a:arguments,function(a,d){delete b[d]}));J(b,2)};L.hashchange=e.extend(L.hashchange,{add:function(a){function b(a){var b=a[h]=p();a.getState=function(a,c){return a===g||"boolean"===typeof a?j(b,a):j(b,c)[a]};c.apply(this,arguments)}var c;if(e.isFunction(a))return c=a,b;c=a.handler;a.handler=b}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(c,q,r){function d(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var j=document,l,b=c.event.special,e=j.documentMode,m="onhashchange"in q&&(e===r||7<e);c.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};c.fn.hashchange.delay=50;b.hashchange=c.extend(b.hashchange,{setup:function(){if(m)return!1;c(l.start)},teardown:function(){if(m)return!1;c(l.stop)}});var p=function(){var a=d(),b=s(k);a!==k?(n(k=a,b),c(q).trigger("hashchange")):b!==k&&(location.href=location.href.replace(/#.*/,"")+b);g=setTimeout(p,c.fn.hashchange.delay)},b={},g,k=d(),n=e=function(a){return a},s=e;b.start=function(){g||p()};b.stop=function(){g&&clearTimeout(g);g=r};var t=navigator.userAgent.toLowerCase();if(/msie/.test(t)&&!/opera/.test(t)&&!m){var f,h;b.start=function(){f||(h=(h=c.fn.hashchange.src)&&h+d(),f=c('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){h||n(d());p()}).attr("src",h||"javascript:0").insertAfter("body")[0].contentWindow,j.onpropertychange=function(){try{"title"===event.propertyName&&(f.document.title=j.title)}catch(a){}})};b.stop=e;s=function(){return d(f.location.href)};n=function(a,b){var d=f.document,e=c.fn.hashchange.domain;a!==b&&(d.title=j.title,d.open(),e&&d.write('<script>document.domain="'+e+'"\x3c/script>'),d.close(),f.location.hash=a)}}l=b})(jQuery,this);

/* ######## jquery_ba_bbq_min End ############################################# */


/* ######## jquery_bxslider_min ############################################# */

/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
/* ######## jquery_bxslider_min End ############################################# */


/* ######## json2 ############################################# */

/*

    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html
*/
var JSON;JSON||(JSON={});
(function(){function k(a){return a<10?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,j){var c,d,h,m,g=e,f,b=j[a];b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));typeof i==="function"&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null";
e+=n;f=[];if(Object.prototype.toString.apply(b)==="[object Array]"){m=b.length;for(c=0;c<m;c+=1)f[c]=l(c,b)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&typeof i==="object"){m=i.length;for(c=0;c<m;c+=1)typeof i[c]==="string"&&(d=i[c],(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h);h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+
"}";e=g;return h}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,j,c){var d;n=e="";if(typeof c==="number")for(d=0;d<c;d+=1)n+=" ";else typeof c==="string"&&(n=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return l("",
{"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),f!==void 0?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),typeof e==="function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}})();

/* ######## json2 End ############################################# */


/* ######## utils ############################################# */

// $LastChangedRevision$
/**
 * JSON Util
 */
var JSONUtil = {};

/**
 * parse JSON
 *
 * @param value
 * @param ignoreUrls boolean Flag if URLs are parsed or not
 */
JSONUtil.parse = function(value, ignoreUrls) {

    return JSON.parse(value);
};

/**
 * polyfill for getPrototypeOf
 */
if (typeof Object.getPrototypeOf != "function")(function(){

    Object.getPrototypeOf =
        (typeof "".__proto__ == "object")
            ? function(object){
            return getPrototypeValue(object, '__proto__');
        }
            : function(object){
            return getPrototypeValue(object, 'constructor').prototype;
        }
    ;

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    function getPrototypeValue(object, propertyName){
        try{
            if (hasOwnProperty.call(object, propertyName)){
                var ownValue = object[propertyName];
                delete object[propertyName];
            }
            return object[propertyName];
        }
        catch(e){throw e}
        finally{
            object[propertyName] = ownValue;
        }
    }

}());

/**
 * Fix indexOf for IE browsers
 */
Array.prototype.indexOf = function(obj, start) {
     for (var i = (start || 0), j = this.length; i < j; i++) {
         if (this[i] === obj) { return i; }
     }
     return -1;
};
/* ######## utils End ############################################# */


/* ######## slickquiz ############################################# */

var test= {};



/*!
 * SlickQuiz jQuery Plugin
 * http://github.com/jewlofthelotus/SlickQuiz
 *
 * @updated October 25, 2014
 * @version 1.5.20
 *
 * @author Julie Cameron - http://www.juliecameron.com
 * @copyright (c) 2013 Quicken Loans - http://www.quickenloans.com
 * @license MIT
 */
var tc;

(function ($) {
  $.slickQuiz = function (element, options) {
    var plugin = this,
      $element = $(element),
      _element = '#' + $element.attr('id'),

      defaults = {
        checkAnswerText: 'Check My Answer!',
        disableCheckAnswerLink: true,
        nextQuestionTimout: 3000,
        nextQuestionText: 'Next question &raquo;',
        showContinue : false,
        surveyMode : false,
        continueText: 'Next',
        backButtonText: '',
        completeQuizText: '',
        tryAgainText: '',
        questionCountText: 'Question %current of %total',
        preventUnansweredText: 'You must select at least one answer.',
        questionTemplateText: '%count. %text',
        scoreTemplateText: '%score / %total',
        resultText: 'Result',
        nameTemplateText: '<span>Quiz: </span>%name',
        headlineCorrect: 'Correct',
        headlineIncorrect: 'Incorrect',
        repositioning: 'always', //never, always, touch
        skipStartButton: false,
        numberOfQuestions: null,
        randomSortQuestions: false,
        randomSortAnswers: false,
        preventUnanswered: false,
        disableScore: false,
        disableRanking: false,
        scoreAsPercentage: false,
        perQuestionResponseMessaging: true,
        perQuestionResponseAnswers: false,
        completionResponseMessaging: false,
        displayQuestionCount: true,   // Deprecate?
        displayQuestionNumber: true,  // Deprecate?
        animationCallbacks: { // only for the methods that have jQuery animations offering callback
          setupQuiz: function () {
          },
          startQuiz: function () {
          },
          resetQuiz: function () {
          },
          checkAnswer: function () {
          },
          nextQuestion: function () {
          },
          backToQuestion: function () {
          },
          completeQuiz: function () {
          }
        },
        events: {
          onStartQuiz: function (options) {
        	  tc=0;
          },
          onCompleteQuiz: function (options) {
        	  for (tc; tc <= 0; tc++){
        		  dcsMultiTrack('DCSext.Area','Content', 'DCSext.SubArea','Quiz', 'DCSext.Event', 'complete');
        	  }

          }  // reserved: options.questionCount, options.score
        }
      },

    // Class Name Strings (Used for building quiz and for selectors)
      questionCountClass = 'quiz-header',
      questionGroupClass = 'questions',
      questionClass = 'quiz-question',
      questionContainerClass = 'question-container',
      questionImageClass = 'question-image',
      answersClass = 'answers',
      responsesClass = 'responses',
      completeClass = 'complete',
      correctClass = 'correctResponse',
      incorrectClass = 'incorrectResponse',
      correctResponseClass = 'correct',
      incorrectResponseClass = 'incorrect',
      checkAnswerClass = 'checkAnswer',
      nextQuestionClass = 'nextQuestion',
      showContinueClass = 'showContinue',
      lastQuestionClass = 'lastQuestion',
      backToQuestionClass = 'backToQuestion',
      tryAgainClass = 'tryAgain',
      questionCoverClass = 'cover',

    // Sub-Quiz / Sub-Question Class Selectors
      _questionCount = '.' + questionCountClass,
      _questions = '.' + questionGroupClass,
      _question = '.' + questionClass,
      _questionContainer = '.' + questionContainerClass,
      _answers = '.' + answersClass,
      _answer = '.' + answersClass + ' li',
      _responses = '.' + responsesClass,
      _response = '.' + responsesClass + ' li',
      _correct = '.' + correctClass,
      _correctResponse = '.' + correctResponseClass,
      _incorrectResponse = '.' + incorrectResponseClass,
      _checkAnswerBtn = '.' + checkAnswerClass,
      _nextQuestionBtn = '.' + nextQuestionClass,
      _showContinueBtn = '.' + showContinueClass,
      _prevQuestionBtn = '.' + backToQuestionClass,
      _tryAgainBtn = '.' + tryAgainClass,
      _questionCover = '.' + questionCoverClass,

    // Top Level Quiz Element Class Selectors
      _quizStarter = _element + ' .startQuiz',
      _quizName = _element + ' .quizName',
      _quizArea = _element + ' .quizArea',
      _quizResults = _element + ' .quizResults',
      _quizResultsCopy = _element + ' .quizResultsCopy',
      _quizHeader = _element + ' .quizHeader',
      _quizScore = _element + ' .quizScore',
      _resultTypes = _element + ' .result-types',

    // Top Level Quiz Element Objects
      $quizStarter = $(_quizStarter),
      $quizName = $(_quizName),
      $quizArea = $(_quizArea),
      $quizResults = $(_quizResults),
      $quizResultsCopy = $(_quizResultsCopy),
      $quizHeader = $(_quizHeader),
      //$quizScore = $(_quizScore),
      $resultTypes = $(_resultTypes)
      ;


    // Reassign user-submitted deprecated options
    var depMsg = '';

    if (options && typeof options.disableNext != 'undefined') {
      if (typeof options.preventUnanswered == 'undefined') {
        options.preventUnanswered = options.disableNext;
      }
      depMsg += 'The \'disableNext\' option has been deprecated, please use \'preventUnanswered\' in it\'s place.\n\n';
    }

    if (options && typeof options.disableResponseMessaging != 'undefined') {
      if (typeof options.preventUnanswered == 'undefined') {
        options.perQuestionResponseMessaging = options.disableResponseMessaging;
      }
      depMsg += 'The \'disableResponseMessaging\' option has been deprecated, please use' +
      ' \'perQuestionResponseMessaging\' and \'completionResponseMessaging\' in it\'s place.\n\n';
    }

    if (options && typeof options.randomSort != 'undefined') {
      if (typeof options.randomSortQuestions == 'undefined') {
        options.randomSortQuestions = options.randomSort;
      }
      if (typeof options.randomSortAnswers == 'undefined') {
        options.randomSortAnswers = options.randomSort;
      }
      depMsg += 'The \'randomSort\' option has been deprecated, please use' +
      ' \'randomSortQuestions\' and \'randomSortAnswers\' in it\'s place.\n\n';
    }

    if (depMsg !== '') {
      if (typeof console != 'undefined') {
        console.warn(depMsg);
      } else {
        alert(depMsg);
      }
    }
    // End of deprecation reassignment


    plugin.config = $.extend(defaults, options);
    // Set via json option or quizJSON variable (see slickQuiz-config.js)
    var quizValues = (plugin.config.json ? plugin.config.json : typeof quizJSON != 'undefined' ? quizJSON : null);

    // Get questions, possibly sorted randomly
    var questions = plugin.config.randomSortQuestions ?
      quizValues.questions.sort(function () {
        return (Math.round(Math.random()) - 0.5);
      }) :
      quizValues.questions;

    // Count the number of questions
    var questionCount = questions.length;

    // Select X number of questions to load if options is set
    if (plugin.config.numberOfQuestions && questionCount >= plugin.config.numberOfQuestions) {
      questions = questions.slice(0, plugin.config.numberOfQuestions);
      questionCount = questions.length;
    }

    // some special private/internal methods
    var internal = {
      method: {
        // get a key whose notches are "resolved jQ deferred" objects; one per notch on the key
        // think of the key as a house key with notches on it
        getKey: function (notches) { // returns [], notches >= 1
          var key = [];
          for (i = 0; i < notches; i++) key[i] = $.Deferred();
          return key;
        },

        // put the key in the door, if all the notches pass then you can turn the key and "go"
        turnKeyAndGo: function (key, go) { // key = [], go = function ()
          // when all the notches of the key are accepted (resolved) then the key turns and the engine (callback/go) starts
          $.when.apply(null, key).then(function () {
            go();
          });
        },

        // get one jQ
        getKeyNotch: function (key, notch) { // notch >= 1, key = []
          // key has several notches, numbered as 1, 2, 3, ... (no zero notch)
          // we resolve and return the "jQ deferred" object at specified notch
          return function () {
            key[notch - 1].resolve(); // it is ASSUMED that you initiated the key with enough notches
          };
        }
      }
    };

    plugin.method = {
      // Sets up the questions and answers based on above array
      setupQuiz: function (options) { // use 'options' object to pass args
        var key, keyNotch, kN;
        key = internal.method.getKey(3); // how many notches == how many jQ animations you will run
        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        $quizName.hide().html(plugin.config.nameTemplateText
          .replace('%name', quizValues.info.name)).fadeIn(1000, kN(key, 1));
        $quizHeader.hide().prepend($('<div class="quizDescription">' + quizValues.info.main + '</div>')).fadeIn(1000, kN(key, 2));
        $quizResultsCopy.append(quizValues.info.results);

        // add retry button to results view, if enabled
        if (plugin.config.tryAgainText && plugin.config.tryAgainText !== '') {
          $quizResultsCopy.append('<p><a class="button ' + tryAgainClass + '" href="#">' + plugin.config.tryAgainText + '</a></p>');
        }

        // Setup questions
        var quiz = $('<ol class="' + questionGroupClass + '"></ol>'),
          count = 1;

        // Loop through questions object
        for (i in questions) {
          if (questions.hasOwnProperty(i)) {
            var question = questions[i];

            //var questionHTML = $('<li class="' + questionClass +'" id="question' + (count - 1) + '"></li>');


            var questionHTML = $('<li class="quiz-question" id="question' + (count - 1) + '"></li>');
            if (plugin.config.displayQuestionCount) {
              if (count == 1) {
                $(_element).find(_questionCount).find('h2').html(plugin.config.questionCountText
                  .replace('%current', '<span class="current">' + count + '</span>')
                  .replace('%total', questionCount));
              }

              //questionHTML.append('<div class="' + questionCountClass + '">' +
              //    plugin.config.questionCountText
              //        .replace('%current', '<span class="current">' + count + '</span>')
              //        .replace('%total', '<span class="total">' +
              //            questionCount + '</span>') + '</div>');
            }

            var formatQuestion = '';
            if (plugin.config.displayQuestionNumber) {
              formatQuestion = plugin.config.questionTemplateText
                .replace('%count', count).replace('%text', question.q);
            } else {
              formatQuestion = question.q;
            }
            if(question.i){
              questionHTML.append('<div class="question-container"></div>');
              questionHTML.find(".question-container").append('<h2>' + formatQuestion + '</h2>');
              questionHTML.find(".question-container").append('<img class="' + questionImageClass +'" src="' + question.i + '">');
            }else{
              questionHTML.append('<div class="question-container no-border no-image"></div>');
              questionHTML.find(".question-container").append('<h2>' + formatQuestion + '</h2>');
            }

            // Count the number of true values
            var truths = 0;
            for (i in question.a) {
              if (question.a.hasOwnProperty(i)) {
                answer = question.a[i];
                if (answer.correct) {
                  truths++;
                }
              }
            }

            // Now let's append the answers with checkboxes or radios depending on truth count
            var answerHTML = $('<ul class="' + answersClass + '"></ul>');

            // Get the answers
            var answers = plugin.config.randomSortAnswers ?
              question.a.sort(function () {
                return (Math.round(Math.random()) - 0.5);
              }) :
              question.a;

            // prepare a name for the answer inputs based on the question
            var selectAny = question.select_any ? question.select_any : false,
              forceCheckbox = question.force_checkbox ? question.force_checkbox : false,
              checkbox = (truths > 1 && !selectAny) || forceCheckbox,
              inputName = $element.attr('id') + '_question' + (count - 1),
              inputType = checkbox ? 'checkbox' : 'radio';

            if (count == quizValues.questions.length) {
              nextQuestionClass = nextQuestionClass + ' ' + lastQuestionClass;
            }

            for (i in answers) {
              if (answers.hasOwnProperty(i)) {
                answer = answers[i];
                  optionId = inputName + '_' + i.toString();

                // If question has >1 true answers and is not a select any, use checkboxes; otherwise, radios
                var input = '<label for="' + optionId + '" class="radio-label"><input id="' + optionId + '" name="' + inputName +
                  '" type="' + inputType + '" /><span></span><span>' + answer.option + '</span></label>';

                //var optionLabel = '<label for="' + optionId + '">' + answer.option + '</label>';

                var answerContent = $('<li></li>')
                  .append(input);
                //.append(optionLabel);
                answerHTML.append(answerContent);
              }
            }
            // Append answers to question
            questionHTML.append(answerHTML);


            // If response messaging is NOT disabled, add it
            if (plugin.config.perQuestionResponseMessaging || plugin.config.completionResponseMessaging) {
              // Now let's append the correct / incorrect response messages
              var responseHTML = $('<ul class="' + responsesClass + '"></ul>');
              var correctResponseHTML   = '<span></span><h2>' + plugin.config.headlineCorrect    + '</h2><div>' + question.correct + '</div>';
              var incorrectResponseHTML = '<span></span><h2>' + plugin.config.headlineIncorrect  + '</h2><div>' + question.incorrect + '</div>';
              responseHTML.append('<li class="' + correctResponseClass +   '">' + correctResponseHTML   + '</li>');
              responseHTML.append('<li class="' + incorrectResponseClass + '">' + incorrectResponseHTML + '</li>');

              // Append responses to question
              questionHTML.append(responseHTML);
            }

            // Appends check answer / back / next question buttons
            if (plugin.config.backButtonText && plugin.config.backButtonText !== '') {
              questionHTML.append('<a href="#" class="button ' + backToQuestionClass + '">' + plugin.config.backButtonText + '</a>');
            }

            var nextText = plugin.config.nextQuestionText;
            if (plugin.config.completeQuizText && count == questionCount) {
              nextText = plugin.config.completeQuizText;
            }

            var showNextQuestion = "hidden";
            if(plugin.config.showContinue){
              questionHTML.append('<a href="#" class="hidden button ' + showContinueClass + '">' + plugin.config.continueText + '</a>');
            }

            // If we're not showing responses per question, show next question button and make it check the answer too
            if (!plugin.config.perQuestionResponseMessaging) {
              questionHTML.append('<a href="#" class="hidden button ' + nextQuestionClass + ' ' + checkAnswerClass + '">' + nextText + '</a>');
            } else {
              questionHTML.append('<a href="#" class="button ' + nextQuestionClass + '">' + nextText + '</a>');
              if (!plugin.config.disableCheckAnswerLink) {
                questionHTML.append('<a href="#" class="button ' + checkAnswerClass + '">' + plugin.config.checkAnswerText + '</a>');
              } else {
                questionHTML.append('<a href="#" class="hidden button ' + checkAnswerClass + '">' + plugin.config.checkAnswerText + '</a>');
              }
            }

            // Append question & answers to quiz
            questionHTML.append('<div class="cover"></div>');
            quiz.append(questionHTML);

            if(plugin.config.surveyMode){
              quiz.find(_question).addClass("surveyMode");
            }

            count++;
          }
        }

        // Add the quiz content to the page
        $quizArea.append(quiz);

        $quizArea.find(".answers").each(function (i, e) {
          var liCount = Math.ceil($(e).find("li").size() / 2);
          $(e).find("li:lt(" + liCount + ")").wrapAll('<div class="wrapBox"></div>');
          $(e).find("li:gt(" + (liCount - 1) + ")").wrapAll('<div class="wrapBox"></div>');

          //var className  = "";
          //if(question.a.length / 2 == Number(i)){
          //  className  = ' class="wrapBox"';
          //}

        });

        // Toggle the start button OR start the quiz if start button is disabled
        if (plugin.config.skipStartButton || $quizStarter.length == 0) {
          $quizStarter.hide();
          plugin.method.startQuiz.apply(this, [{callback: plugin.config.animationCallbacks.startQuiz}]); // TODO: determine why 'this' is being passed as arg to startQuiz method
          kN(key, 3).apply(null, []);
        } else {
          $quizStarter.fadeIn(500, kN(key, 3)); // 3d notch on key must be on both sides of if/else, otherwise key won't turn
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {
        });
      },

      // Starts the quiz (hides start button and displays first question)
      startQuiz: function (options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run
        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        function start(options) {
          var firstQuestion = $(_element + ' ' + _questions + ' li').first();
          if (firstQuestion.length) {
            firstQuestion.fadeIn(500, function () {
              if (options && options.callback) options.callback();
            });
          }
        }

        if (plugin.config.skipStartButton || $quizStarter.length == 0) {
          start({callback: kN(key, 1)});
        } else {
          $quizStarter.fadeOut(300, function () {
            start({callback: kN(key, 1)}); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
          });
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {
        });

        if (plugin.config.events &&
          plugin.config.events.onStartQuiz) {
          plugin.config.events.onStartQuiz.apply(null, []);
        }
      },

      // Resets (restarts) the quiz (hides results, resets inputs, and displays first question)
      resetQuiz: function (startButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run
        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        if(plugin.config.repositioning == "always" ||
          (plugin.config.repositioning == "touch" && Migros.FeatureData.isTouchDevice())) {
          $('html, body').animate({
            scrollTop: $(_element).offset().top - 75
          }, 700);
        }

        $(_element).find(_questionCount).find('h2').html(plugin.config.questionCountText
          .replace('%current', '<span class="current">1</span>')
          .replace('%total', questionCount));

        $quizResults.fadeOut(300, function () {
          $(_element + ' input').prop('checked', false).prop('disabled', false);

          $(_element + ' ' + _question).removeClass(correctClass).removeClass(incorrectClass).remove(completeClass);
          $(_element + ' ' + _answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);

          $(_element + ' ' + _question + ',' +
            _element + ' ' + _responses + ',' +
            _element + ' ' + _response + ',' +
            _element + ' ' + '.result-types > div,' +
            _element + ' ' + _nextQuestionBtn + ',' +
            _element + ' ' + _questionCover + ',' +
            _element + ' ' + _prevQuestionBtn
          ).hide();
          $(_tryAgainBtn).css("visibility", "hidden");

          $(_element + ' ' + _questionCount + ',' +
            _element + ' ' + _answers + ',' +
            _element + ' ' + _questionContainer + ',' +
            _element + ' ' + _checkAnswerBtn
          ).show();

          $(_element + ' ' + _showContinueBtn).addClass("hidden").html(plugin.config.continueText);

          $quizArea.append($(_element + ' ' + _questions)).show();

          kN(key, 1).apply(null, []);

          plugin.method.startQuiz({callback: plugin.config.animationCallbacks.startQuiz}, $quizResults); // TODO: determine why $quizResults is being passed
        });

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {
        });
      },

      // Validates the response selection(s), displays explanations & next question button
      checkAnswer: function (checkButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(2); // how many notches == how many jQ animations you will run
        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var questionLI = $($(checkButton).parents(_question)[0]),
          answerLIs = questionLI.find(_answers + ' li'),
          answerSelects = answerLIs.find('input:checked'),
          questionIndex = parseInt(questionLI.attr('id').replace(/(question)/, ''), 10),
          answers = questions[questionIndex].a,
          selectAny = questions[questionIndex].select_any ? questions[questionIndex].select_any : false;

        answerLIs.addClass(incorrectResponseClass);

        // Collect the true answers needed for a correct response
        var trueAnswers = [];
        for (i in answers) {
          if (answers.hasOwnProperty(i)) {
            var answer = answers[i],
              index = parseInt(i, 10);

            if (answer.correct) {
              trueAnswers.push(index);
              answerLIs.eq(index).removeClass(incorrectResponseClass).addClass(correctResponseClass);
            }
          }
        }

        // TODO: Now that we're marking answer LIs as correct / incorrect, we might be able
        // to do all our answer checking at the same time

        // NOTE: Collecting answer index for comparison aims to ensure that HTML entities
        // and HTML elements that may be modified by the browser / other scrips match up

        // Collect the answers submitted
        var selectedAnswers = [];
        answerSelects.each(function () {
          var id = $(this).attr('id');
          selectedAnswers.push(parseInt(id.replace(/(.*\_question\d{1,}_)/, ''), 10));
        });

        if (plugin.config.preventUnanswered && selectedAnswers.length === 0) {
          alert(plugin.config.preventUnansweredText);
          return false;
        }

        // Verify all/any true answers (and no false ones) were submitted
        var correctResponse = plugin.method.compareAnswers(trueAnswers, selectedAnswers, selectAny);

        if (correctResponse) {
          questionLI.addClass(correctClass);
        } else {
          questionLI.addClass(incorrectClass);
        }

        _questionResponse = function () {
          // Toggle appropriate response (either for display now and / or on completion)
          questionLI.find(correctResponse ? _correctResponse : _incorrectResponse).show();

          // If perQuestionResponseMessaging is enabled, toggle response and navigation now
          if (plugin.config.perQuestionResponseMessaging) {
            $(checkButton).hide();
            if (!plugin.config.perQuestionResponseAnswers) {
              // Make sure answers don't highlight for a split second before they hide
              questionLI.find(_answers).hide({
                duration: 0,
                complete: function () {
                  questionLI.addClass(completeClass);
                }
              });
            } else {
              questionLI.addClass(completeClass);
            }
            questionLI.find('input').prop('disabled', true);
            questionLI.find(_responses).show();
            questionLI.find(_questionContainer).hide();
            if(plugin.config.repositioning == "always" ||
              (plugin.config.repositioning == "touch" && Migros.FeatureData.isTouchDevice())) {
              $('html, body').animate({
                scrollTop: $(_element).offset().top - 75
              }, 700);
            }
            questionLI.find(_nextQuestionBtn).fadeIn(300, kN(key, 1));
            if(!correctResponse){
              questionLI.find(_prevQuestionBtn).fadeIn(300, kN(key, 2));
            }
            if (!questionLI.find(_prevQuestionBtn).length) kN(key, 2).apply(null, []); // 2nd notch on key must be passed even if there's no "back" button
          } else {

            setTimeout(function () {
              //console.log("this", checkButton);
              plugin.method.nextQuestion(checkButton, {callback: plugin.config.animationCallbacks.nextQuestion});
            }, plugin.config.nextQuestionTimout);

            kN(key, 1).apply(null, []); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
            kN(key, 2).apply(null, []); // 2nd notch on key must be on both sides of if/else, otherwise key won't turn
          }
          internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {
          });
        };


        if(plugin.config.showContinue){
          // Bind "next" buttons
          $(_element + ' ' + _showContinueBtn).removeClass("hidden").on('click', function(e){
            e.preventDefault();
            var nextText = plugin.config.continueText;
            if(!plugin.config.perQuestionResponseMessaging && questionIndex+2 >= questionCount) {
              nextText = plugin.config.completeQuizText;
            }
            $(_element + ' ' + _showContinueBtn).addClass("hidden").html(nextText);
            $(_element + ' ' + _showContinueBtn).off();
            _questionResponse();
          });
        }else{
          setTimeout(_questionResponse, plugin.config.nextQuestionTimout);
        }

        return false;

      },

      // Moves to the next question OR completes the quiz if on last question
      nextQuestion: function (nextButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run
        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var currentQuestion = $($(nextButton).parents(_question)[0]),
          nextQuestion = currentQuestion.next(_question),
          answerInputs = currentQuestion.find('input:checked');

        // If response messaging has been disabled or moved to completion,
        // make sure we have an answer if we require it, let checkAnswer handle the alert messaging
        if (plugin.config.preventUnanswered && answerInputs.length === 0) {
          return false;
        }
        if (nextQuestion.length) {
          $(_questionCount).find('.current').html((Number($($(nextButton).parents(_question)[0]).attr("id").replace("question", "")) + 2));
          if(plugin.config.repositioning == "always" ||
            (plugin.config.repositioning == "touch" && Migros.FeatureData.isTouchDevice())) {
            $('html, body').animate({
              scrollTop: $(_element).offset().top - 75
            }, 700);
          }
          currentQuestion.fadeOut(300, function () {
            nextQuestion.find(_prevQuestionBtn).hide().end().fadeIn(500, kN(key, 1));
            if (!nextQuestion.find(_prevQuestionBtn).hide().end().length) kN(key, 1).apply(null, []); // 1st notch on key must be passed even if there's no "back" button
          });
        } else {
          kN(key, 1).apply(null, []); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
          plugin.method.completeQuiz({callback: plugin.config.animationCallbacks.completeQuiz});
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {
        });
      },

      // Go back to the last question
      backToQuestion: function (backButton, options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(2); // how many notches == how many jQ animations you will run
        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var questionLI = $($(backButton).parents(_question)[0]),
          responses = questionLI.find(_responses);

        // Back to question from responses
        if (responses.css('display') === 'block') {
          questionLI.find(_responses).fadeOut(300, function () {
            questionLI.removeClass(correctClass).removeClass(incorrectClass).removeClass(completeClass);
            questionLI.find(_responses + ', ' + _response).hide();
            questionLI.find(_answers).show();
            questionLI.find(_questionContainer).show();
            questionLI.find(_questionCover).hide();
            questionLI.find('input:checked').removeAttr("checked");
            questionLI.find(_answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
            questionLI.find('input').prop('disabled', false);
            questionLI.find(_answers).fadeIn(500, kN(key, 1)); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
            questionLI.find(_checkAnswerBtn).fadeIn(500, kN(key, 2));
            questionLI.find(_nextQuestionBtn).hide();
            questionLI.find(_prevQuestionBtn).hide();
            if(plugin.config.repositioning == "always" ||
              (plugin.config.repositioning == "touch" && Migros.FeatureData.isTouchDevice())) {
              $('html, body').animate({
                scrollTop: $(_element).offset().top - 75
              }, 700);
            }
            // if question is first, don't show back button on question
            //if (questionLI.attr('id') != 'question0') {
            //  questionLI.find(_prevQuestionBtn).show();
            //} else {
            //  questionLI.find(_prevQuestionBtn).hide();
            //}
          });

          // Back to previous question
        } else {
          var prevQuestion = questionLI.prev(_question);

          questionLI.fadeOut(300, function () {
            prevQuestion.removeClass(correctClass).removeClass(incorrectClass).removeClass(completeClass);
            prevQuestion.find(_responses + ', ' + _response).hide();
            prevQuestion.find(_answers).show();
            prevQuestion.find('input:checked').removeAttr("checked");
            prevQuestion.find(_answer).removeClass(correctResponseClass).removeClass(incorrectResponseClass);
            prevQuestion.find('input').prop('disabled', false);
            prevQuestion.find(_nextQuestionBtn).hide();
            prevQuestion.find(_checkAnswerBtn).show();

            if (prevQuestion.attr('id') != 'question0') {
              prevQuestion.find(_prevQuestionBtn).show();
            } else {
              prevQuestion.find(_prevQuestionBtn).hide();
            }

            prevQuestion.fadeIn(500, kN(key, 1));
            kN(key, 2).apply(null, []); // 2nd notch on key must be on both sides of if/else, otherwise key won't turn
          });
        }

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {
        });
      },

      // Hides all questions, displays the final score and some conclusive information
      completeQuiz: function (options) {
        var key, keyNotch, kN;
        key = internal.method.getKey(1); // how many notches == how many jQ animations you will run
        keyNotch = internal.method.getKeyNotch; // a function that returns a jQ animation callback function
        kN = keyNotch; // you specify the notch, you get a callback function for your animation

        var score = $(_element + ' ' + _correct).length,
          displayScore = score;
        if (plugin.config.scoreAsPercentage) {
          displayScore = (score / questionCount).toFixed(2) * 100 + "%";
        }

        if (plugin.config.disableRanking) {
        } else {
          var
            levelRank = plugin.method.calculateLevel(score),
            levelText = $.isNumeric(levelRank) ? quizValues.info.levels[levelRank] : '';
          $quizResults.find("[data-range='" + levelRank + "']").show();

          if (plugin.config.disableScore) {
            $(_quizScore).remove();
            var resultText = plugin.config.resultText;
            $(_quizScore).html(levelText.replace('%result', resultText));
          } else {
            var resultText = plugin.config.scoreTemplateText.replace('%score', displayScore).replace('%total', questionCount);
            $(_quizScore).html(levelText.replace('%result', resultText));
          }
          var resultTextHeader = plugin.config.resultText;
          $(_element).find(_questionCount).find('h2').html(resultTextHeader);
        }

        $quizArea.fadeOut(300, function () {
          // If response messaging is set to show upon quiz completion, show it now
          if (plugin.config.completionResponseMessaging) {
            $(_element + ' .button:not(' + _tryAgainBtn + '), ' + _element + ' ' + _questionCount).hide();
            $(_element + ' ' + _question + ', ' + _element + ' ' + _answers + ', ' + _element + ' ' + _responses).show();
            $quizResults.append($(_element + ' ' + _questions)).fadeIn(500, kN(key, 1));
          } else {
            $(_tryAgainBtn).css("visibility", "visible");
            $quizResults.fadeIn(500, kN(key, 1)); // 1st notch on key must be on both sides of if/else, otherwise key won't turn
          }
          if(plugin.config.repositioning == "always" ||
            (plugin.config.repositioning == "touch" && Migros.FeatureData.isTouchDevice())) {
            $('html, body').animate({
              scrollTop: $(_element).offset().top - 75
            }, 700);
          }
        });

        internal.method.turnKeyAndGo(key, options && options.callback ? options.callback : function () {
        });

        if (plugin.config.events &&
          plugin.config.events.onCompleteQuiz) {
          plugin.config.events.onCompleteQuiz.apply(null, [{
            questionCount: questionCount,
            score: score
          }]);
        }
      },

      // Compares selected responses with true answers, returns true if they match exactly
      compareAnswers: function (trueAnswers, selectedAnswers, selectAny) {
        if (selectAny) {
          return $.inArray(selectedAnswers[0], trueAnswers) > -1;
        } else {
          // crafty array comparison (http://stackoverflow.com/a/7726509)
          return ($(trueAnswers).not(selectedAnswers).length === 0 && $(selectedAnswers).not(trueAnswers).length === 0);
        }
      },

      // Calculates knowledge level based on number of correct answers
      calculateLevel: function (correctAnswers) {
        //var percent = (correctAnswers / questionCount).toFixed(2), level = null;
        level = -1;
        $resultTypes.find("> div").sort(function(a, b){
          if ($(a).data("range") < $(b).data("range")) return 1;
          if ($(a).data("range") > $(b).data("range")) return -1;
          return 0;
        }).each(function (i, e) {
          if(correctAnswers <= $(e).data("range")){
            level = $(e).data("range");
          }
        });
        return level;
      },

      // Determines if percentage of correct values is within a level range
      inRange: function (start, end, value) {
        return (value >= start && value <= end);
      }
    };

    plugin.init = function () {
      // Setup quiz
      plugin.method.setupQuiz.apply(null, [{callback: plugin.config.animationCallbacks.setupQuiz}]);

      // Bind "start" button
      $quizStarter.on('click', function (e) {
        e.preventDefault();

        if (!this.disabled && !$(this).hasClass('disabled')) {
          plugin.method.startQuiz.apply(null, [{callback: plugin.config.animationCallbacks.startQuiz}]);
        }
      });

      // Bind "try again" button
      $(_element + ' ' + _tryAgainBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.resetQuiz(this, {callback: plugin.config.animationCallbacks.resetQuiz});
      });

      // Bind "check answer" buttons
      $(_element + ' ' + _checkAnswerBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.checkAnswer(this, {callback: plugin.config.animationCallbacks.checkAnswer});
      });

      // Bind "back" buttons
      $(_element + ' ' + _prevQuestionBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.backToQuestion(this, {callback: plugin.config.animationCallbacks.backToQuestion});
      });

      // Bind "next" buttons
      $(_element + ' ' + _nextQuestionBtn).on('click', function (e) {
        e.preventDefault();
        plugin.method.nextQuestion(this, {callback: plugin.config.animationCallbacks.nextQuestion});
      });

      // Bind aute check answer to question li && plugin.config.disableCheckAnswerLink
        $('ul.' + answersClass + ' li').on('click', function () {
          var _this = this;
          _this = $(_this).closest('.quiz-question').find(_checkAnswerBtn);
          $(this).closest('.quiz-question').find(_questionCover).show();
            if (plugin.config.perQuestionResponseMessaging) {
              setTimeout(function () {
                plugin.method.checkAnswer(_this, {callback: plugin.config.animationCallbacks.checkAnswer});
              }, 1);
            }else{
              setTimeout(function () {
                plugin.method.checkAnswer(_this, {callback: plugin.config.animationCallbacks.checkAnswer});
              }, 1);
            }
        });

      // Accessibility (WAI-ARIA).
      var _qnid = $element.attr('id') + '-name';
      $quizName.attr('id', _qnid);
      $element.attr({
        'aria-labelledby': _qnid,
        'aria-live': 'polite',
        'aria-relevant': 'additions',
        'role': 'form'
      });
      $(_quizStarter + ', [href = "#"]').attr('role', 'button');
    };

    plugin.init();
  };

  $.fn.slickQuiz = function (options) {
    return this.each(function () {
      if (undefined === $(this).data('slickQuiz')) {
        var plugin = new $.slickQuiz(this, options);
        $(this).data('slickQuiz', plugin);
      }
    });
  };
})(jQuery);

/* ######## slickquiz End ############################################# */


/* ######## jquery_migros_accordeon ############################################# */

// $LastChangedRevision$
;(function($, doc, win) {
    "use strict";

    var accordeon;

    /**
     * Accordeon
     * @param el
     * @param opts
     * @constructor
     */
    function Accordeon(el, opts) {
    	var that = this;

        this.node= $(el);
        this.opts = opts;
        this.itemArray = [];
        that.init();
    }

    /**
     * init
     */
    Accordeon.prototype.init = function() {

        var that = this;
        var activeItemCount = 0;

        if($(this.node).find('.active').length == 0){

//            $($(this.node).find('.accordeon-item')[0]).addClass('active');
        }

        $.each($(this.node.find('.accordeon-item')), function(i, el){

            var item = new AccordeonItem(el);
            that.itemArray.push(item);
        });
        /* removed wegen scroll fehler -> MB-125
        setTimeout(function(){
            var currentHash = self.location.hash.substr(1);
            top.location.hash = '-';
            top.location.hash = currentHash;
        }, 500);*/
        /* removed wegen scroll fehler -> MB-125*/


        /*
        $(this.node).find('.accordeon-item').css({
            'height': 'auto'
        });*/

        // hash change handler
        $(window).bind('hashchange', function(event) {

            var hash = event.getState().id;
            if ($('#'+hash).length > 0){
                var targetId = -1;
                var i = that.itemArray.length;
                while(i--){

                    if(that.itemArray[i].id == hash){
                        targetId = i;
                    }
                    if($.inArray(hash, that.itemArray)>= 0){
                        //that.itemArray[i].isActive=false;
                    }
                }
                if(targetId != -1){
                    //$(that.node).find('.accordeon-item').removeClass('active').find('.item-content').stop(true, true).css({'height':'0px'});
                    that.itemArray[targetId].show();
                }
            }
        });
    };

    /**
     * AccordeonItem
     * @param el
     * @constructor
     */
    function AccordeonItem(el) {

        var that = this;

        this.id = $(el).attr('id');
        this.node = $(el);
        this.banderole = $(this.node).find('.item-banderole');
        this.content = $(el).find('.item-content');
        this.isActive = true;

        var init = function() {

            that.height = $(that.content).height();
            if($(that.node).is('.active')){
                that.isActive = true;
            } else {
            	that.isActive = false;
                if(!$('body').hasClass('edit')){
                    that.hideOnStart();
                }
            }

            $(that.banderole).bind('click', onBanderoleClickHandler);
        };

        var onBanderoleClickHandler = function(e) {

            if(that.isActive){
                that.hide();
            } else {
                that.show();
            }
        };

        $(window).load(function(){
        //$(document).ready(function () {
            setTimeout(function(){
            	init();
            }, 100);
        });
    }

    AccordeonItem.prototype = {

        show: function() {
            var that = this;

        	if(that.height == 0){

                $(this.content).css({
                    'height': 'auto'
                });
                that.height = $(that.content).height();
                $(this.content).css({
                    'height': '0px'
                });

        	}
            $(this.content).stop(true, false).animate({
                'height': that.height +'px'
            }, 400, function(){
                $(that.node).addClass('active');
                that.isActive = true;
            });

        },

        hide: function() {

            var that = this;

            if(that.height != $(that.content).height()){
            	that.height = $(that.content).height();
            }

            $(this.content).stop(true, false).animate({
                'height': '0px'
            }, 400, function() {
                $(that.node).removeClass('active');
                that.isActive = false;
                window.location.hash = 'accordeonClosed';
            });
        },

        hideOnStart: function() {
            var that = this;

            $(this.content).css({
                'height': '0px'
            });
        }
    };

    // plugin code
    $.fn.accordeon = function(opts) {

        return this.each(function() {

            accordeon = new Accordeon(this, opts);
        });
    };


})(jQuery, document, window);
/* ######## jquery_migros_accordeon End ############################################# */


/* ######## jquery_migros_carousel ############################################# */

// $LastChangedRevision$
/**
 *
 * init carousel with all its params
 * get all .top-stage-teaser and create CarouselItem
 * if more than 3 CarouselItems, load all 3 images with low saturation images and then show carousel
 * if less than 3 CarouselItmes (for edit), load images and show carousel
 *
 */

;(function($, doc, win) {
    "use strict";

    var activeTeaserId = 1;
    var targetTeaserId = 0;
    var slideDirection = 1;
    var loadedImages = 0;
    var carousel;
    var minNumberOfTeaser = 3;
    var slideProgress = false;



    /**
     * Carousel
     * @param el
     * @param opts
     * @constructor
     */
    function Carousel(el, opts) {

        var that = this;
        var autoTimeout;

        this.node = $(el);
        this.opts = opts;
        this.autoDelay = 1;
        this.isTouchDevice = Migros.FeatureData.isTouchDevice();
        this.isMobileDevice = Migros.FeatureData.isMobileDevice();
        this.scriptData;
        this.flagLeft;
        this.flagRight;
        this.stageModule;
        this.teaserWidth;
        this.itemArray = [];

        /**
         * add event handler
         */
        this.addEventListener = function() {

            that.flagLeft.bind('mouseover', onFlagLeftOverHandler);
            that.flagLeft.bind('mouseout', onFlagLeftOutHandler);
            that.flagRight.bind('mouseover', onFlagRightOverHandler);
            that.flagRight.bind('mouseout', onFlagRightOutHandler);

            that.flagLeft.bind('click', onFlagLeftClickHandler);
            that.flagRight.bind('click', onFlagRightClickHandler);

            that.contentInput.bind('focus', stopAutoHandler);
            that.contentInput.bind('blur', startAutoHandler);

			that.children.bind('focus', stopAutoHandler);
            that.children.bind('blur', startAutoHandler);
			that.children.bind('mouseover', stopAutoHandler);
            that.children.bind('mouseout', startAutoHandler);

            addSwipeListener();
        };

        function addSwipeListener(){
            var startTouchX,startTouchTime,startTouchY;
            that.node.find('.module-top-stage-slideshow').on('touchstart',function(e){
                startTouchX     = e.originalEvent.touches[0].pageX;
                startTouchTime  = e.originalEvent.timeStamp;
                startTouchY     = e.originalEvent.touches[0].pageY;
            });
            that.node.find('.module-top-stage-slideshow').on('touchmove',function(e){
                var deltaDistY = e.originalEvent.changedTouches[0].pageY - startTouchY;
                if(Math.abs(deltaDistY) <= 4){
                    e.preventDefault();
                }
            });
            that.node.find('.module-top-stage-slideshow').on('touchend',function(e){
                var deltaTime = e.originalEvent.timeStamp - startTouchTime,
                    deltaDist = e.originalEvent.changedTouches[0].pageX - startTouchX,
                    speed     = deltaDist / deltaTime,
                    direction = deltaDist > 0; // true = right, false = left

                if(Math.abs(speed) >= 1){
                    if(direction){
                        onFlagLeftClickHandler(e);
                    }else{
                        onFlagRightClickHandler(e);
                    }
                }
            });
        }

        function onFlagRightOutHandler() {

            if(!that.isTouchDevice){
                var targetLeftPos = '22px';
                $(this).find('span').stop(true, false).animate({
                    'left': targetLeftPos
                }, 160);
            }
        };

        function onFlagRightOverHandler() {

            if(!that.isTouchDevice){
                var targetLeftPos = '26px';
                $(this).find('span').stop(true, false).animate({
                    'left': targetLeftPos
                }, 120);
            }
        };

        function onFlagLeftOverHandler() {

            if(!that.isTouchDevice){
                var targetLeftPos = '18px';

                $(this).find('span').stop(true, false).animate({
                    'left': targetLeftPos
                }, 120);
            }
        };

        function onFlagLeftOutHandler() {

            if(!that.isTouchDevice){
                var targetLeftPos = '22px';
                $(this).find('span').stop(true, false).animate({
                    'left': targetLeftPos
                }, 160);
            }
        };

        function onFlagLeftClickHandler (e) {

            slideDirection = 1;
            targetTeaserId = getTargetTeaser(slideDirection);

            // update teaser
            if(that.itemArray[targetTeaserId]){
                if(!slideProgress){
                    that.updateTeaser();
                }
            }
            // start autotiming
            startAutoHandler(typeof e !== 'undefined');

            if(e){
                Migros.Utils.trackPage(e);
            }
        };

        function onFlagRightClickHandler (e) {

            slideDirection = -1;
            targetTeaserId = getTargetTeaser(slideDirection);
            // update teaser
            if(that.itemArray[targetTeaserId]){

                if(!slideProgress){
                    that.updateTeaser();
                }
            }
            // start autotiming
            startAutoHandler(typeof e !== 'undefined');

            if(e){
                Migros.Utils.trackPage(e);
            }
        };

        /**
         * show start teaser
         */
        this.showStartTeaser = function() {
            that.itemArray[targetTeaserId].hideLowSatImage();
            activateTeaser();
        };

        /**
         * update teaser
         */
        this.updateTeaser = function() {

            slideProgress = true;

            // hide current teaser
            if(!that.isMobileDevice){
                try {
                    that.itemArray[1].hideContent();
                } catch(error) {
                }
            }

            // hide low saturated images
            try{that.itemArray[targetTeaserId].hideLowSatImage();}catch(e){};
            try{that.itemArray[activeTeaserId].showLowSatImage();}catch(e){};

            // reorder divs
            reorderDivs();

            var val = 0;
            if (targetTeaserId == 0 && that.itemArray.length > 3) {
                val = -that.teaserWidth;
            }

            // move stageModule
            var targetX = slideDirection*that.teaserWidth + val;

            $(that.stageModule).animate({
                'left': targetX
            }, 500, 'swing', activateTeaser);
        };

        function reorderDivs () {

            var _rightItemId = targetTeaserId + 1;
            var _leftItemId = that.itemArray.length - 1;

            if(that.itemArray.length > 3){

                if (targetTeaserId == 2) {


                    if(that.itemArray[_rightItemId]){

                        if (!that.itemArray[_rightItemId].imageLoaded) {
                            that.itemArray[_rightItemId].loadImage();
                        }

                        $(that.itemArray[targetTeaserId].node).after(that.itemArray[_rightItemId].node);

                        $(that.itemArray[_rightItemId].node).css({
                            display: 'block'
                        });
                    }

                    reArrangeArray(0, that.itemArray.length-1);

                    $(that.stageModule).css({
                        'left': '0px'
                    });

                } else if (targetTeaserId == 0) {
                    if(!that.itemArray[_leftItemId].imageLoaded) {
                        that.itemArray[_leftItemId].loadImage();
                    }

                    $(that.itemArray[targetTeaserId].node).before(that.itemArray[_leftItemId].node);

                    $(that.itemArray[_leftItemId].node).css({
                        display: 'block'
                    });

                    $(that.stageModule).css({
                        'left': -that.teaserWidth
                    });

                    reArrangeArray(that.itemArray.length-1, 0);
                }
            }

        };

        function activateTeaser () {

            var _rightItemId = that.itemArray.length-1;
            var _leftItemId = 0;

            if(that.itemArray.length < 4){

                // slide to the right teaser
                if(targetTeaserId == 2){

                    $(that.itemArray[_leftItemId].node).css({
                        display: 'none'
                    });

                    $(that.itemArray[_rightItemId].node).after(that.itemArray[_leftItemId].node);
                    $(that.itemArray[_leftItemId].node).stop(true, false).fadeIn(100);

                    reArrangeArray(_leftItemId, _rightItemId);
                } else if (targetTeaserId == 0){

                    if(!that.itemArray[_rightItemId].imageLoaded) {

                        that.itemArray[_rightItemId].loadImage();
                    }

                    $(that.itemArray[_rightItemId].node).css({
                        display: 'none'
                    });

                    $(that.itemArray[_leftItemId].node).before(that.itemArray[_rightItemId].node);
                    $(that.itemArray[_rightItemId].node).stop(true, false).fadeIn(100);

                    reArrangeArray(_rightItemId, _leftItemId);
                }

                $(that.stageModule).css({
                    'left': '0px'
                });
            } else {

                $(that.itemArray[_rightItemId-1].node).after(that.itemArray[_rightItemId].node);
                $(that.stageModule).css({
                    'left': '0px'
                });
            }

            // show target teaser
            that.itemArray[1].showContent();

            var _dataLeft = getTeaserData(0);
            var _dataRight = getTeaserData(2);

            // update flagtext and flagactivity
            updateFlags(_dataLeft, _dataRight);

            activeTeaserId = 1;
            slideProgress = false;
        };

        /**
         * rearrange array
         * @param from
         * @param to
         */
        function reArrangeArray(from, to){

            var item = that.itemArray[from];
            that.itemArray.splice(from, 1);
            that.itemArray.splice(to, 0, item);
        };

        /**
         * update flags
         */
        function updateFlags(dataLeft, dataRight) {

            var _teaserLeftHeadline = $(that.flagLeft).find('.flag-teaser p').first();
            var _teaserRightHeadline = $(that.flagRight).find('.flag-teaser p').first();

            var _teaserLeftCopy = $(that.flagLeft).find('.flag-teaser p').last();
            var _teaserRightCopy = $(that.flagRight).find('.flag-teaser p').last();

			var _teaserLeftLink = $(that.flagLeft).find('a.flag-arrow');
			var _teaserRightLink = $(that.flagRight).find('a.flag-arrow');

            if(dataLeft){
                _teaserLeftHeadline.html('');
                _teaserLeftHeadline.html('<b>'+dataLeft.flagheadline+'</b>');

                _teaserLeftCopy.html('');
                _teaserLeftCopy.html(dataLeft.flagcopy);

				_teaserLeftLink.attr('title', 'Slide: '+dataLeft.flagheadline+' '+dataLeft.flagcopy+'');
            }

            if(dataRight){
                _teaserRightHeadline.html('');
                _teaserRightHeadline.html('<b>'+dataRight.flagheadline+'</b>');

                _teaserRightCopy.html('');
                _teaserRightCopy.html(dataRight.flagcopy);

				_teaserRightLink.attr('title', 'Slide: '+dataRight.flagheadline+' '+dataRight.flagcopy+'');
            }
        };

        /**
         * helper to return script data
         * @param id
         * @returns {*}
         */
        function getTeaserData(id) {

            if(id >= 0 && id < that.itemArray.length) {
                return that.itemArray[id].scriptData;
            } else {
                return undefined;
            }
        };

        /**
         * helper to get id of target teaser
         * @param val
         * @returns {number}
         */
        function getTargetTeaser(val) {

           var val = activeTeaserId + (val)*(-1);

            return val;
        };

        /**
         * fade in carousel
         */
        this.show = function() {

            for(var i = 0; i < minNumberOfTeaser; i++){

                that.itemArray[i].showImage();
            }

            // update teaser
            slideDirection = 0;
            targetTeaserId = 1;

            setTimeout(function() {
                that.showStartTeaser();
            }, 400);

            // start auto slide handler if length of itemarray is bigger than 1
            if(this.itemArray.length > 1){
                startAutoHandler();
            }
        };

        // counter for amount of loaded images
        this.countLoadedImages = function() {

            loadedImages++;

            if(loadedImages == minNumberOfTeaser) {
                this.show();
                this.addEventListener();
            }

            return loadedImages;
        };

        function startAutoHandler(autoUserInteraction){
            if(that.autoDelay === 0 || typeof that.autoDelay === 'undefined' || that.autoDelayAfterAction === 0 || typeof that.autoDelayAfterAction === 'undefined'){


                startAutoHandler = function(){};
                return;
            } else if (!that.autoOff.prop('checked')) {

				var delay = (typeof autoUserInteraction === 'undefined' || autoUserInteraction === false ) ? that.autoDelay : that.autoDelayAfterAction;

				window.clearTimeout(autoTimeout);
				autoTimeout = window.setTimeout(onFlagRightClickHandler, delay);

			}
        };

        function stopAutoHandler() {
            window.clearTimeout(autoTimeout);
        };

        this.init();
    }

    /**
     * init
     */
    Carousel.prototype.init = function() {

        // params
        this.autoDelay = this.node.find('.module-top-stage-slideshow').data('autodelay');
        this.autoDelayAfterAction = this.node.find('.module-top-stage-slideshow').data('autodelayafteraction');
        this.teaserWidth = $('.top-stage-teaser').width();
        this.stageModule = this.node.find('.top-stage-content');
        this.flagLeft = this.node.find('.flag-left');
        this.flagRight = this.node.find('.flag-right');
        this.contentInput = this.node.find('input');
		this.children = this.node.find('*');
		this.autoOff = this.node.find('input.autoplayStop');

        var that = this;

//        if($(this.node.find('.top-stage-teaser')).length < 3){
//            minNumberOfTeaser = $(this.node.find('.top-stage-teaser')).length; //for edit mode
//        }

        // init carousel items
        $.each($(this.node.find('.top-stage-teaser')), function(i, el){
            var item = new CarouselItem(el, that.isTouchDevice, that.isMobileDevice);
            if(i < minNumberOfTeaser) {

                item.loadImage();
            }
            item.id = i;

            that.itemArray.push(item);
        });
    };

    /**
     * CarouselItem
     * @param el
     * @constructor
     */
    function CarouselItem(el, isTouchDevice, isMobileDevice) {

        var that = this;
        var innercount = 0;
        var isTouchDevice = isTouchDevice;
        var isMobileDevice = isMobileDevice;

        this.id;
        this.node = el;
        this.init();
        this.image = null;
        this.imageLowSaturation = null;
        this.imageLoaded = false;
        this.flagheadline = this.scriptData.flagheadline;
        this.flagcopy = this.scriptData.flagcopy;
        this.textcontent = $(this.node).find('.text-container');

        /**
         * load image of teaser item
         */
        this.loadImage = function() {

            if(that.scriptData.imageurl != ""){
                that.image = new Image();
                that.image.onload = onImageLoadedHandler;
                that.image.onerror = onImageLoadedHandler;
                that.image.src = that.scriptData.imageurl;
            } else {
                onImageLoadedHandler(null);
            }

            if(!isTouchDevice){
                if(that.scriptData.imagelowsaturation != ""){
                    that.imageLowSaturation = new Image();
                    that.imageLowSaturation.onload = onImageLoadedHandler;
                    that.imageLowSaturation.onerror = onImageLoadedHandler;
                    that.imageLowSaturation.src = that.scriptData.imagelowsaturation;
                } else {
//                    that.imageLowSaturation  = new Image();
                    onImageLoadedHandler(null);
                }
            } else {
                onImageLoadedHandler(null);
            }
        };

        /**
         * show image on loaded handler
         * @param event
         */
        function onImageLoadedHandler(event) {

            innercount++;

            if(innercount == 2){

                that.imageLoaded = true;

                var count = carousel.countLoadedImages();

                if(count > minNumberOfTeaser) {
                    that.showImage();
                }
            }
        };

        /**
         * show image
         */
        this.showImage = function() {

            $(that.node).removeClass('preload');

            var textNode = $(that.node).find('.text-container');
            $(textNode).before($(that.image));

            if(that.imageLowSaturation){
                $(textNode).before($(that.imageLowSaturation));
            }

            var imgNode = $(that.node).find('img');
            $(imgNode).fadeIn('normal');

            $(imgNode).on('dragstart', function(event) { event.preventDefault(); });
        };

        /**
         * hide image with low saturation
         */
        this.hideLowSatImage = function() {
            if(that.imageLowSaturation){
                $(that.imageLowSaturation).fadeOut('fast');
            }
        };

        /**
         * show image with low saturation
         */
        this.showLowSatImage = function() {
            if(that.imageLowSaturation){
                $(that.imageLowSaturation).fadeIn('fast');
            }
        };

        /**
         * show
         */
        this.showContent = function () {

            //show text content
            if(!isMobileDevice) {
                $(this.textcontent).stop(true, false).fadeIn('slow');
            } else {
                $(this.textcontent).stop(true, false).animate({
                    'opacity': '1'
                }, 'slow');
            }

            // show eyecatcher
            $(this.textcontent).find('.eyecatcher').stop(true, false).animate({
                'margin-top': '0px'
            }, 400);
        };

        /**
         * hide
         */
        this.hideContent = function () {

            if(!isMobileDevice){
                $(this.textcontent).stop(true, false).fadeOut(100, function () {
                    $(this).find('.eyecatcher').css({
                        'margin-top': '-20px'
                    });
                });
            } else {

                $(this.textcontent).stop(true, false).animate({
                    'opacity': 0
                }, 'slow');
            }
        };
    };

    /**
     * init
     */
    CarouselItem.prototype.init = function() {

        this.scriptData  = $(this.node).find('script[type="text/data"]').html();
        if (this.scriptData !== null && this.scriptData.length > 0) {
            this.scriptData = JSONUtil.parse(this.scriptData);
        }
    };

    // plugin code
    $.fn.carousel = function(opts) {

        return this.each(function() {

            carousel = new Carousel(this, opts);
        });
    };


})(jQuery, document, window);
/* ######## jquery_migros_carousel End ############################################# */


/* ######## jquery_migrosFormTooltips ############################################# */

// $LastChangedRevision$
;(function ( $, window, document, undefined ) {
    var pluginName = "migrosFormTooltips",
        defaults = {
            tooltipTemplate : '<div class="tooltip box-shadow">$t</div>',
            dataParameter   : 'tooltip',
            topOffset       : 0,
            leftOffset      : 0
        };

    function Plugin ( element, options ) {
        this.element = element;
        this.$element = $(element);
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var that = this;

            this.$element.on('mouseenter',function(){
                if(typeof that.$tooltipNode ===  'undefined'){
                    that.$tooltipNode = $(that.settings.tooltipTemplate.replace('$t',that.$element.attr('title')));
                    that.$element.attr('title','');
                    that.$tooltipNode.insertAfter(that.$element);
                    that.setTooltipPosition();
                }else{
                    that.$tooltipNode.show();
                }
            });
            this.$element.on('mouseleave',function(){
                that.$tooltipNode.hide();
            });

            this.$element.on('click',function(e){
                if(typeof that.$tooltipNode ===  'undefined' ){
                    that.$tooltipNode = $(that.settings.tooltipTemplate.replace('$t',that.$element.attr('title')));
                    that.$element.attr('title','');
                    that.$tooltipNode.insertAfter(that.$element);
                    that.setTooltipPosition();
                }else if(typeof that.$tooltipNode !==  'undefined' && !that.$tooltipNode.is(':visible')){
                    that.$tooltipNode.show();
                }else if(typeof that.$tooltipNode !==  'undefined' && that.$tooltipNode.is(':visible')){
                    that.$tooltipNode.hide();
                }
                e.preventDefault();
            });


        },
        setTooltipPosition : function(){
            if(typeof this.$tooltipNode !==  'undefined'){
                var elemPosition    = this.$element.position();
                this.$tooltipNode.css({
                    left        : elemPosition.left + this.settings.leftOffset,
                    position    : 'absolute',
                    top         : elemPosition.top + this.settings.topOffset
                })
            }
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );


/* New Version */
;(function ( $, window, document, undefined ) {
    var pluginName = "migrosFormTooltipsV2",
        defaults = {
            tooltipTemplate : '<div class="tooltip box-shadow v2">$t</div>',
            dataParameter   : 'tooltip',
            topOffset       : 0,
            leftOffset      : 0,
            displayDirection : 'bottom'
        };

    function Plugin ( element, options ) {
        this.element = element;
        this.$element = $(element);
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var that = this;
            this.$element.on('mouseenter',function(){
                if($('body').hasClass('desktop')){
	            	// console.log('mouseenter', typeof that.$tooltipNode);
	                if(typeof that.$tooltipNode ===  'undefined'){
		                	that.$tooltipNode = $(that.settings.tooltipTemplate.replace('$t',that.$element.attr('title')));
		                    that.$element.attr('title','');
		                    that.$tooltipNode.insertAfter(that.$element);
		                    that.setTooltipPosition();
	                }else{
	                	if($('body').hasClass('desktop') || $('body').hasClass('all')){
	                		that.$tooltipNode.show();
	                	}
	                }
                }
            });
            this.$element.on('mouseleave',function(){
            	if(($('body').hasClass('desktop') || $('body').hasClass('all')) && that.$tooltipNode != undefined){
            		that.$tooltipNode.hide();
            	}
            });

            this.$element.on('click',function(e){
                if(typeof that.$tooltipNode ===  'undefined' ){
                    that.$tooltipNode = $(that.settings.tooltipTemplate.replace('$t',that.$element.attr('title')));
                    that.$element.attr('title','');
                    that.$tooltipNode.insertAfter(that.$element);
                    that.setTooltipPosition();
	                that.$tooltipNode.on('click',function(e){
	                	if( !$('body').hasClass('desktop') && that.$tooltipNode != undefined ){
	                		that.$tooltipNode.hide();
	                	}
	                });
                }else if(typeof that.$tooltipNode !==  'undefined' && !that.$tooltipNode.is(':visible')){
                    that.$tooltipNode.show();
                }else if(typeof that.$tooltipNode !==  'undefined' && that.$tooltipNode.is(':visible')){
                    that.$tooltipNode.hide();
                }
                e.preventDefault();
            });


        },
        setTooltipPosition : function(){
            if(typeof this.$tooltipNode !==  'undefined'){
                var elemPosition    = this.$element.position();
                if(this.settings.displayDirection == 'top'){
                	var tooltipNodeLeftPos = elemPosition.left + this.settings.leftOffset - 22
                	if(this.$element.closest('.module-calculator').length > 0){
                    	if($('body').hasClass('tablet') && (this.$element.offset().left - this.$element.closest('.module-calculator').offset().left) > 300){
                            this.$tooltipNode.addClass('right');
                            tooltipNodeLeftPos = elemPosition.left + this.settings.leftOffset - 291
                    	}else{
                            this.$tooltipNode.removeClass('right');
                    	}
                	}
                    this.$tooltipNode.removeClass('bottom');
                    this.$tooltipNode.css({
                        left        : tooltipNodeLeftPos,
                        marginTop   : (!$('body').hasClass('smartphone'))?0:elemPosition.top - this.settings.topOffset - this.$tooltipNode.height() - 28,
                        position    : 'absolute',
                        top         : elemPosition.top - this.$tooltipNode.height() - 48
                    })
                }else{
                	var tooltipNodeLeftPos = elemPosition.left + this.settings.leftOffset - 22
                    this.$tooltipNode.addClass('bottom');
                    this.$tooltipNode.css({
                        left        : tooltipNodeLeftPos,
                        position    : 'absolute',
                        top         : elemPosition.top + this.settings.topOffset + 10
                    })

                }
            }
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
/* ######## jquery_migrosFormTooltips End ############################################# */


/* ######## jquery_migrosFormValidate ############################################# */

// $LastChangedRevision$
;(function ( $, window, document, undefined ) {
    var pluginName = "migrosFormValidate",
        defaults = {
        };

    function Plugin ( element, options ) {
        this.element = element;
        this.$element = $(element);
        this.id = this.$element.attr('id');
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.dynamicMandatoryInputs = [];
        this.init();
    }

    Plugin.prototype = {

        init: function () {

            var that = this,
                form;

            this.getFormInputs();

            if(this.element.tagName.toLowerCase() === 'form'){
                form = this.$element;
            } else {
                form = this.$element.find('form:first');
            }

            form.find('input[type="submit"]').removeAttr('disabled');

            // clear file input
            form.find('input[type="file"]').each(function(){
                var $this = $(this),
                    clone = $this.clone(true);

                $this.siblings('.delete-file').on('click',function(e){
                    $this.replaceWith(clone = clone.clone(true));
                    e.preventDefault();
                });
            });

            form.find('.form-reset').bind('click', {context: that}, that.resetInputs);
            form.find('#form-reset').bind('click', {context: that}, that.resetInputs);
            form.on('submit',function(){

                var $this = $(this),
                    $subButton = $this.find('input[type="submit"]'),
                    val;

                $subButton.attr('disabled','disabled');

                that.resetFormValidation();

                if(!(val = that.validateForm())){
                    $subButton.removeAttr('disabled');
                    Migros.Controller.scrollToAnchor(that.id);
                }

                return val;
            });
        },

        /**
         * reset input fields on reset click
         */
        resetInputs : function(e) {

            e.preventDefault();

            var self = e.data.context;
            self.resetValidation();

            // set dynamic mandatory inputs to not mandatory
            $.each(self.inputElements, function(i, el) {

                if($.inArray($(el.element).attr('id'), self.dynamicMandatoryInputs) != -1) {
                    el.mandatory = false;

                    var id = $(el.element).attr('id');

                    var symbol = $("label[for='"+id+"']").attr('data-mandatory-symbol');
                    var txt = $("label[for='"+id+"']").text();
                    txt = txt.replace(symbol, '');
                    $("label[for='"+id+"']").html(txt);
                }
            });

            $(self.$element)[0].reset();
        },

        /**
         * radio change handler
         */
        radioChangeHandler : function(e) {

            var activeRadio = $(this).val();
            var that = e.data.self;
            var arr = [];
            var activeItemIds = activeRadio.split('_');

            // get all ids

            $.each($('#'+$(this).attr('name')).find('input'), function(i, el) {


            	var dmElement =  $(el).closest('fieldset').find(':checked').attr('data-dynamicmandatory').split('==');

            	if(dmElement.length > 1){
                	var dmValue = $("input[name='" + dmElement[0] + "']:checked").val();
                    if(dmValue  !== $(el).attr('value')){
                        arr.push($(el).attr('value'));
                    }
            	}else{
                    arr.push($(el).attr('value'));
            	}
            });
            var l = that.inputElements.length;
            while(l--){

                var id = $(that.inputElements[l].element).attr('id');
                if($.inArray(id, arr) != -1){

                    // remove all *-Symbols
                    var symbol = $("label[for='"+id+"']").attr('data-mandatory-symbol');
                    var txt = $("label[for='"+id+"']").text();
                    txt = txt.replace(symbol, '');
                    $("label[for='"+id+"']").html(txt);

                    // remove mandatory attribute
                    that.inputElements[l].mandatory = false;

                    if($.inArray(id, activeItemIds) != -1) {

                        var txt = $.trim($("label[for='"+id+"']").text()) + $("label[for='"+id+"']").attr('data-mandatory-symbol');
                        $("label[for='"+id+"']").html(txt);

                        that.inputElements[l].mandatory = true;
                    }
                }
            }
        },

        getFormInputs : function(){

            var that = this,
                inputElements = this.$element.find('input,textarea,select');

            this.inputElements = [];

            inputElements.each(function(){
                var $this = $(this),
                    type,mandatory,regexp,fieldset;

                if($this[0].tagName.toLowerCase() === 'input' && ($this[0].type.toLowerCase() === 'text' || $this[0].type.toLowerCase() === 'password' || $this[0].type.toLowerCase() === 'file' || $this[0].type.toLowerCase() === 'number' || $this[0].type.toLowerCase() === 'email')){

                    type = 'text';
                    mandatory = $this.data('mandatory');
                    regexp = new RegExp($this.data('regexp') || '.*');

                }else if($this[0].tagName.toLowerCase() === 'textarea'){

                    type = 'textarea';
                    mandatory = $this.data('mandatory');
                    regexp = new RegExp($this.data('regexp') || '.*');

                }else if($this[0].tagName.toLowerCase() === 'input' && $this[0].type.toLowerCase() === 'radio'){

                    type = 'radio';
                    fieldset = $this.parents('fieldset');

                    if(fieldset.length > 0 && typeof fieldset.data('mandatory') !== 'undefined'){
                        mandatory = fieldset.data('mandatory');
                    }else{
                        mandatory = $this.data('mandatory');
                    }

                    if(fieldset.data('dynamic-mandatory')){

                        that.dynamicMandatoryInputs.push($($this[0]).val());
                        $($this[0]).bind('change', {self: that}, that.radioChangeHandler);
                    }

                }else if($this[0].tagName.toLowerCase() === 'input' && $this[0].type.toLowerCase() === 'checkbox'){

                    type = 'checkbox';
                    fieldset = $this.parents('fieldset');

                    if(fieldset.length > 0 && typeof fieldset.data('mandatory') !== 'undefined'){
                        mandatory = fieldset.data('mandatory');
                    }else{
                        mandatory = $this.data('mandatory');
                    }
                }else if($this[0].tagName.toLowerCase() === 'select'){

                    type = 'select';
                    fieldset = $this.parents('fieldset');

                    if(fieldset.length > 0 && typeof fieldset.data('mandatory') !== 'undefined'){
                        mandatory = fieldset.data('mandatory');
                    }else{
                        mandatory = $this.data('mandatory');
                    }
                }

                that.inputElements.push({
                    element     : $this,
                    mandatory   : mandatory,
                    regexp      : regexp,
                    type        : type,
                    parent      : fieldset
                })
            });
        },
        resetFormValidation : function(){
            for(var i = 0, j = this.inputElements.length; i < j; i++){
                this.inputElements[i].element.parents('.form-row').removeClass('error');
            }
        },
        /**
         * check if all inputs are filled correct (on submit click)
         * @returns {boolean}
         */
        validateForm : function(){
            var oneInvalid = false;

            for(var i = 0, j = this.inputElements.length; i < j; i++){
                var valid = true,
                    valObj = this.inputElements[i],
                    $valElem = valObj.element;
                if (!$valElem.hasClass("hiddenInputArea")) {
	                if(valObj.type === 'text' || valObj.type === 'textarea'){
	                    if(valObj.mandatory && $valElem.val().length <= 0){
                            valid = false;
                        }

	                    if(!valObj.regexp.test($valElem.val())){
                            valid = false;
                        }
	                } else if(valObj.type === 'radio' || valObj.type === 'checkbox'){
	                    if(valObj.mandatory){
	                        if(typeof valObj.parent !== 'undefined' && valObj.parent.find('input[type="'+valObj.type+'"]:checked').length <= 0){
	                            valid = false;
	                        }else if(typeof valObj.parent === 'undefined' && !$valElem[0].checked){
	                            valid = false;
	                        }
	                    }
	                } else if(valObj.type === 'select'){
	                    if(valObj.mandatory){
	                        if(typeof valObj.parent !== 'undefined' && $valElem.find('option:selected').hasClass('placeholder')){
	                            valid = false;
	                        }else if($valElem.find('option:selected').hasClass('placeholder')){
	                            valid = false;
	                        }
	                    }
	                }

	                if(!valid){
	                    $valElem.parents('.form-row').addClass('error');
	                    oneInvalid = true;
                        $valElem.removeClass('no-error');
	                } else {
                        $valElem.addClass('no-error')
                    }
                }
            }

            if(oneInvalid) {

                this.$element.find('.mandatory').addClass('error');
            } else {
                this.$element.find('.mandatory').removeClass('error');
            }

//            return false;
            return !oneInvalid;
        },

        /**
         * if form validated and reset clicked -> hide all error nodes
         */
        resetValidation : function() {
            this.$element.find('.form-row.error').removeClass('error');
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
/* ######## jquery_migrosFormValidate End ############################################# */


/* ######## jquery_ui_datepicker-de ############################################# */

// $LastChangedRevision$
jQuery(function($){
    $.datepicker.regional['de'] = {
        clearText: 'löschen', clearStatus: 'aktuelles Datum löschen',
        closeText: 'schließen', closeStatus: 'ohne Änderungen schließen',
        prevText: '&#x3c;zurück', prevStatus: 'letzten Monat zeigen',
        prevBigText: '&#x3c;&#x3c;', prevBigStatus: '',
        nextText: 'Vor&#x3e;', nextStatus: 'nächsten Monat zeigen',
        nextBigText: '&#x3e;&#x3e;', nextBigStatus: '',
        currentText: 'heute', currentStatus: '',
        monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
        monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
        monthStatus: 'anderen Monat anzeigen', yearStatus: 'anderes Jahr anzeigen',
        weekHeader: 'Wo', weekStatus: 'Woche des Monats',
        dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
        dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
        dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
        dayStatus: 'Setze DD als ersten Wochentag', dateStatus: 'Wähle D, M d',
        dateFormat: 'dd.mm.yy', firstDay: 1,
        initStatus: 'Wähle ein Datum', isRTL: false,
        beforeShowDay: $.datepicker.noWeekends
      };
    $.datepicker.setDefaults($.datepicker.regional['de']);
});
/* ######## jquery_ui_datepicker-de End ############################################# */


/* ######## jquery_ui_datepicker-fr ############################################# */

// $LastChangedRevision$
jQuery(function($){
    $.datepicker.regional['fr'] = {
        clearText: 'Effacer', clearStatus: '',
        closeText: 'Fermer', closeStatus: 'Fermer sans modifier',
        prevText: '&#x3c;Préc', prevStatus: 'Voir le mois précédent',
        prevBigText: '&#x3c;&#x3c;', prevBigStatus: '',
        nextText: 'Suiv&#x3e;', nextStatus: 'Voir le mois suivant',
        nextBigText: '&#x3e;&#x3e;', nextBigStatus: '',
        currentText: 'Courant', currentStatus: 'Voir le mois courant',
        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'],
        monthStatus: 'Voir un autre mois', yearStatus: 'Voir un autre année',
        weekHeader: 'Sm', weekStatus: '',
        dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
        dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
        dayStatus: 'Utiliser DD comme premier jour de la semaine', dateStatus: 'Choisir le DD, MM d',
        dateFormat: 'dd.mm.yy', firstDay: 0,
        initStatus: 'Choisir la date', isRTL: false,
        beforeShowDay: $.datepicker.noWeekends
    };
    $.datepicker.setDefaults($.datepicker.regional['fr']);
});
/* ######## jquery_ui_datepicker-fr End ############################################# */


/* ######## jquery_ui_datepicker-it ############################################# */

// $LastChangedRevision$
jQuery(function($){
    $.datepicker.regional['it'] = {
        clearText: 'Svuota', clearStatus: 'Annulla',
        closeText: 'Chiudi', closeStatus: 'Chiudere senza modificare',
        prevText: '&#x3c;Prec', prevStatus: 'Mese precedente',
        prevBigText: '&#x3c;&#x3c;', prevBigStatus: 'Mostra l\'anno precedente',
        nextText: 'Succ&#x3e;', nextStatus: 'Mese successivo',
        nextBigText: '&#x3e;&#x3e;', nextBigStatus: 'Mostra l\'anno successivo',
        currentText: 'Oggi', currentStatus: 'Mese corrente',
        monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
        monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
        monthStatus: 'Seleziona un altro mese', yearStatus: 'Seleziona un altro anno',
        weekHeader: 'Sm', weekStatus: 'Settimana dell\'anno',
        dayNames: ['Domenica','Luned&#236','Marted&#236','Mercoled&#236','Gioved&#236','Venerd&#236','Sabato'],
        dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
        dayNamesMin: ['Do','Lu','Ma','Me','Gio','Ve','Sa'],
        dayStatus: 'Usa DD come primo giorno della settimana', dateStatus: 'Seleziona D, M d',
        dateFormat: 'dd.mm.yy', firstDay: 1,
        initStatus: 'Scegliere una data', isRTL: false,
        beforeShowDay: $.datepicker.noWeekends
    };
    $.datepicker.setDefaults($.datepicker.regional['it']);
});
/* ######## jquery_ui_datepicker-it End ############################################# */


/* ######## jquery_flot_min ############################################# */

/* Javascript plotting library for jQuery, version 0.8.1.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

*/// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience
/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */(function(e){e.color={},e.color.make=function(t,n,r,i){var s={};return s.r=t||0,s.g=n||0,s.b=r||0,s.a=i!=null?i:1,s.add=function(e,t){for(var n=0;n<e.length;++n)s[e.charAt(n)]+=t;return s.normalize()},s.scale=function(e,t){for(var n=0;n<e.length;++n)s[e.charAt(n)]*=t;return s.normalize()},s.toString=function(){return s.a>=1?"rgb("+[s.r,s.g,s.b].join(",")+")":"rgba("+[s.r,s.g,s.b,s.a].join(",")+")"},s.normalize=function(){function e(e,t,n){return t<e?e:t>n?n:t}return s.r=e(0,parseInt(s.r),255),s.g=e(0,parseInt(s.g),255),s.b=e(0,parseInt(s.b),255),s.a=e(0,s.a,1),s},s.clone=function(){return e.color.make(s.r,s.b,s.g,s.a)},s.normalize()},e.color.extract=function(t,n){var r;do{r=t.css(n).toLowerCase();if(r!=""&&r!="transparent")break;t=t.parent()}while(!e.nodeName(t.get(0),"body"));return r=="rgba(0, 0, 0, 0)"&&(r="transparent"),e.color.parse(r)},e.color.parse=function(n){var r,i=e.color.make;if(r=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n))return i(parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10));if(r=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))return i(parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),parseFloat(r[4]));if(r=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n))return i(parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55);if(r=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))return i(parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55,parseFloat(r[4]));if(r=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n))return i(parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16));if(r=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n))return i(parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16));var s=e.trim(n).toLowerCase();return s=="transparent"?i(255,255,255,0):(r=t[s]||[0,0,0],i(r[0],r[1],r[2]))};var t={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery),function(e){function n(t,n){var r=n.children("."+t)[0];if(r==null){r=document.createElement("canvas"),r.className=t,e(r).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(n);if(!r.getContext){if(!window.G_vmlCanvasManager)throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");r=window.G_vmlCanvasManager.initElement(r)}}this.element=r;var i=this.context=r.getContext("2d"),s=window.devicePixelRatio||1,o=i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1;this.pixelRatio=s/o,this.resize(n.width(),n.height()),this.textContainer=null,this.text={},this._textCache={}}function r(t,r,s,o){function E(e,t){t=[w].concat(t);for(var n=0;n<e.length;++n)e[n].apply(this,t)}function S(){var t={Canvas:n};for(var r=0;r<o.length;++r){var i=o[r];i.init(w,t),i.options&&e.extend(!0,a,i.options)}}function x(n){e.extend(!0,a,n),n&&n.colors&&(a.colors=n.colors),a.xaxis.color==null&&(a.xaxis.color=e.color.parse(a.grid.color).scale("a",.22).toString()),a.yaxis.color==null&&(a.yaxis.color=e.color.parse(a.grid.color).scale("a",.22).toString()),a.xaxis.tickColor==null&&(a.xaxis.tickColor=a.grid.tickColor||a.xaxis.color),a.yaxis.tickColor==null&&(a.yaxis.tickColor=a.grid.tickColor||a.yaxis.color),a.grid.borderColor==null&&(a.grid.borderColor=a.grid.color),a.grid.tickColor==null&&(a.grid.tickColor=e.color.parse(a.grid.color).scale("a",.22).toString());var r,i,s,o={style:t.css("font-style"),size:Math.round(.8*(+t.css("font-size").replace("px","")||13)),variant:t.css("font-variant"),weight:t.css("font-weight"),family:t.css("font-family")};o.lineHeight=o.size*1.15,s=a.xaxes.length||1;for(r=0;r<s;++r)i=a.xaxes[r],i&&!i.tickColor&&(i.tickColor=i.color),i=e.extend(!0,{},a.xaxis,i),a.xaxes[r]=i,i.font&&(i.font=e.extend({},o,i.font),i.font.color||(i.font.color=i.color));s=a.yaxes.length||1;for(r=0;r<s;++r)i=a.yaxes[r],i&&!i.tickColor&&(i.tickColor=i.color),i=e.extend(!0,{},a.yaxis,i),a.yaxes[r]=i,i.font&&(i.font=e.extend({},o,i.font),i.font.color||(i.font.color=i.color));a.xaxis.noTicks&&a.xaxis.ticks==null&&(a.xaxis.ticks=a.xaxis.noTicks),a.yaxis.noTicks&&a.yaxis.ticks==null&&(a.yaxis.ticks=a.yaxis.noTicks),a.x2axis&&(a.xaxes[1]=e.extend(!0,{},a.xaxis,a.x2axis),a.xaxes[1].position="top"),a.y2axis&&(a.yaxes[1]=e.extend(!0,{},a.yaxis,a.y2axis),a.yaxes[1].position="right"),a.grid.coloredAreas&&(a.grid.markings=a.grid.coloredAreas),a.grid.coloredAreasColor&&(a.grid.markingsColor=a.grid.coloredAreasColor),a.lines&&e.extend(!0,a.series.lines,a.lines),a.points&&e.extend(!0,a.series.points,a.points),a.bars&&e.extend(!0,a.series.bars,a.bars),a.shadowSize!=null&&(a.series.shadowSize=a.shadowSize),a.highlightColor!=null&&(a.series.highlightColor=a.highlightColor);for(r=0;r<a.xaxes.length;++r)O(d,r+1).options=a.xaxes[r];for(r=0;r<a.yaxes.length;++r)O(v,r+1).options=a.yaxes[r];for(var u in b)a.hooks[u]&&a.hooks[u].length&&(b[u]=b[u].concat(a.hooks[u]));E(b.processOptions,[a])}function T(e){u=N(e),M(),_()}function N(t){var n=[];for(var r=0;r<t.length;++r){var i=e.extend(!0,{},a.series);t[r].data!=null?(i.data=t[r].data,delete t[r].data,e.extend(!0,i,t[r]),t[r].data=i.data):i.data=t[r],n.push(i)}return n}function C(e,t){var n=e[t+"axis"];return typeof n=="object"&&(n=n.n),typeof n!="number"&&(n=1),n}function k(){return e.grep(d.concat(v),function(e){return e})}function L(e){var t={},n,r;for(n=0;n<d.length;++n)r=d[n],r&&r.used&&(t["x"+r.n]=r.c2p(e.left));for(n=0;n<v.length;++n)r=v[n],r&&r.used&&(t["y"+r.n]=r.c2p(e.top));return t.x1!==undefined&&(t.x=t.x1),t.y1!==undefined&&(t.y=t.y1),t}function A(e){var t={},n,r,i;for(n=0;n<d.length;++n){r=d[n];if(r&&r.used){i="x"+r.n,e[i]==null&&r.n==1&&(i="x");if(e[i]!=null){t.left=r.p2c(e[i]);break}}}for(n=0;n<v.length;++n){r=v[n];if(r&&r.used){i="y"+r.n,e[i]==null&&r.n==1&&(i="y");if(e[i]!=null){t.top=r.p2c(e[i]);break}}}return t}function O(t,n){return t[n-1]||(t[n-1]={n:n,direction:t==d?"x":"y",options:e.extend(!0,{},t==d?a.xaxis:a.yaxis)}),t[n-1]}function M(){var t=u.length,n=-1,r;for(r=0;r<u.length;++r){var i=u[r].color;i!=null&&(t--,typeof i=="number"&&i>n&&(n=i))}t<=n&&(t=n+1);var s,o=[],f=a.colors,l=f.length,c=0;for(r=0;r<t;r++)s=e.color.parse(f[r%l]||"#666"),r%l==0&&r&&(c>=0?c<.5?c=-c-.2:c=0:c=-c),o[r]=s.scale("rgb",1+c);var h=0,p;for(r=0;r<u.length;++r){p=u[r],p.color==null?(p.color=o[h].toString(),++h):typeof p.color=="number"&&(p.color=o[p.color].toString());if(p.lines.show==null){var m,g=!0;for(m in p)if(p[m]&&p[m].show){g=!1;break}g&&(p.lines.show=!0)}p.lines.zero==null&&(p.lines.zero=!!p.lines.fill),p.xaxis=O(d,C(p,"x")),p.yaxis=O(v,C(p,"y"))}}function _(){function x(e,t,n){t<e.datamin&&t!=-r&&(e.datamin=t),n>e.datamax&&n!=r&&(e.datamax=n)}var t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,r=Number.MAX_VALUE,i,s,o,a,f,l,c,h,p,d,v,m,g,y,w,S;e.each(k(),function(e,r){r.datamin=t,r.datamax=n,r.used=!1});for(i=0;i<u.length;++i)l=u[i],l.datapoints={points:[]},E(b.processRawData,[l,l.data,l.datapoints]);for(i=0;i<u.length;++i){l=u[i],w=l.data,S=l.datapoints.format;if(!S){S=[],S.push({x:!0,number:!0,required:!0}),S.push({y:!0,number:!0,required:!0});if(l.bars.show||l.lines.show&&l.lines.fill){var T=!!(l.bars.show&&l.bars.zero||l.lines.show&&l.lines.zero);S.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:T}),l.bars.horizontal&&(delete S[S.length-1].y,S[S.length-1].x=!0)}l.datapoints.format=S}if(l.datapoints.pointsize!=null)continue;l.datapoints.pointsize=S.length,h=l.datapoints.pointsize,c=l.datapoints.points;var N=l.lines.show&&l.lines.steps;l.xaxis.used=l.yaxis.used=!0;for(s=o=0;s<w.length;++s,o+=h){y=w[s];var C=y==null;if(!C)for(a=0;a<h;++a)m=y[a],g=S[a],g&&(g.number&&m!=null&&(m=+m,isNaN(m)?m=null:m==Infinity?m=r:m==-Infinity&&(m=-r)),m==null&&(g.required&&(C=!0),g.defaultValue!=null&&(m=g.defaultValue))),c[o+a]=m;if(C)for(a=0;a<h;++a)m=c[o+a],m!=null&&(g=S[a],g.autoscale&&(g.x&&x(l.xaxis,m,m),g.y&&x(l.yaxis,m,m))),c[o+a]=null;else if(N&&o>0&&c[o-h]!=null&&c[o-h]!=c[o]&&c[o-h+1]!=c[o+1]){for(a=0;a<h;++a)c[o+h+a]=c[o+a];c[o+1]=c[o-h+1],o+=h}}}for(i=0;i<u.length;++i)l=u[i],E(b.processDatapoints,[l,l.datapoints]);for(i=0;i<u.length;++i){l=u[i],c=l.datapoints.points,h=l.datapoints.pointsize,S=l.datapoints.format;var L=t,A=t,O=n,M=n;for(s=0;s<c.length;s+=h){if(c[s]==null)continue;for(a=0;a<h;++a){m=c[s+a],g=S[a];if(!g||g.autoscale===!1||m==r||m==-r)continue;g.x&&(m<L&&(L=m),m>O&&(O=m)),g.y&&(m<A&&(A=m),m>M&&(M=m))}}if(l.bars.show){var _;switch(l.bars.align){case"left":_=0;break;case"right":_=-l.bars.barWidth;break;case"center":_=-l.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+l.bars.align)}l.bars.horizontal?(A+=_,M+=_+l.bars.barWidth):(L+=_,O+=_+l.bars.barWidth)}x(l.xaxis,L,O),x(l.yaxis,A,M)}e.each(k(),function(e,r){r.datamin==t&&(r.datamin=null),r.datamax==n&&(r.datamax=null)})}function D(){t.css("padding",0).children(":not(.flot-base,.flot-overlay)").remove(),t.css("position")=="static"&&t.css("position","relative"),f=new n("flot-base",t),l=new n("flot-overlay",t),h=f.context,p=l.context,c=e(l.element).unbind();var r=t.data("plot");r&&(r.shutdown(),l.clear()),t.data("plot",w)}function P(){a.grid.hoverable&&(c.mousemove(at),c.bind("mouseleave",ft)),a.grid.clickable&&c.click(lt),E(b.bindEvents,[c])}function H(){ot&&clearTimeout(ot),c.unbind("mousemove",at),c.unbind("mouseleave",ft),c.unbind("click",lt),E(b.shutdown,[c])}function B(e){function t(e){return e}var n,r,i=e.options.transform||t,s=e.options.inverseTransform;e.direction=="x"?(n=e.scale=g/Math.abs(i(e.max)-i(e.min)),r=Math.min(i(e.max),i(e.min))):(n=e.scale=y/Math.abs(i(e.max)-i(e.min)),n=-n,r=Math.max(i(e.max),i(e.min))),i==t?e.p2c=function(e){return(e-r)*n}:e.p2c=function(e){return(i(e)-r)*n},s?e.c2p=function(e){return s(r+e/n)}:e.c2p=function(e){return r+e/n}}function j(e){var t=e.options,n=e.ticks||[],r=t.labelWidth||0,i=t.labelHeight||0,s=r||e.direction=="x"?Math.floor(f.width/(n.length||1)):null;legacyStyles=e.direction+"Axis "+e.direction+e.n+"Axis",layer="flot-"+e.direction+"-axis flot-"+e.direction+e.n+"-axis "+legacyStyles,font=t.font||"flot-tick-label tickLabel";for(var o=0;o<n.length;++o){var u=n[o];if(!u.label)continue;var a=f.getTextInfo(layer,u.label,font,null,s);r=Math.max(r,a.width),i=Math.max(i,a.height)}e.labelWidth=t.labelWidth||r,e.labelHeight=t.labelHeight||i}function F(t){var n=t.labelWidth,r=t.labelHeight,i=t.options.position,s=t.options.tickLength,o=a.grid.axisMargin,u=a.grid.labelMargin,l=t.direction=="x"?d:v,c,h,p=e.grep(l,function(e){return e&&e.options.position==i&&e.reserveSpace});e.inArray(t,p)==p.length-1&&(o=0);if(s==null){var g=e.grep(l,function(e){return e&&e.reserveSpace});h=e.inArray(t,g)==0,h?s="full":s=5}isNaN(+s)||(u+=+s),t.direction=="x"?(r+=u,i=="bottom"?(m.bottom+=r+o,t.box={top:f.height-m.bottom,height:r}):(t.box={top:m.top+o,height:r},m.top+=r+o)):(n+=u,i=="left"?(t.box={left:m.left+o,width:n},m.left+=n+o):(m.right+=n+o,t.box={left:f.width-m.right,width:n})),t.position=i,t.tickLength=s,t.box.padding=u,t.innermost=h}function I(e){e.direction=="x"?(e.box.left=m.left-e.labelWidth/2,e.box.width=f.width-m.left-m.right+e.labelWidth):(e.box.top=m.top-e.labelHeight/2,e.box.height=f.height-m.bottom-m.top+e.labelHeight)}function q(){var t=a.grid.minBorderMargin,n={x:0,y:0},r,i;if(t==null){t=0;for(r=0;r<u.length;++r)t=Math.max(t,2*(u[r].points.radius+u[r].points.lineWidth/2))}n.x=n.y=Math.ceil(t),e.each(k(),function(e,t){var r=t.direction;t.reserveSpace&&(n[r]=Math.ceil(Math.max(n[r],(r=="x"?t.labelWidth:t.labelHeight)/2)))}),m.left=Math.max(n.x,m.left),m.right=Math.max(n.x,m.right),m.top=Math.max(n.y,m.top),m.bottom=Math.max(n.y,m.bottom)}function R(){var t,n=k(),r=a.grid.show;for(var i in m){var s=a.grid.margin||0;m[i]=typeof s=="number"?s:s[i]||0}E(b.processOffset,[m]);for(var i in m)typeof a.grid.borderWidth=="object"?m[i]+=r?a.grid.borderWidth[i]:0:m[i]+=r?a.grid.borderWidth:0;e.each(n,function(e,t){t.show=t.options.show,t.show==null&&(t.show=t.used),t.reserveSpace=t.show||t.options.reserveSpace,U(t)});if(r){var o=e.grep(n,function(e){return e.reserveSpace});e.each(o,function(e,t){z(t),W(t),X(t,t.ticks),j(t)});for(t=o.length-1;t>=0;--t)F(o[t]);q(),e.each(o,function(e,t){I(t)})}g=f.width-m.left-m.right,y=f.height-m.bottom-m.top,e.each(n,function(e,t){B(t)}),r&&G(),it()}function U(e){var t=e.options,n=+(t.min!=null?t.min:e.datamin),r=+(t.max!=null?t.max:e.datamax),i=r-n;if(i==0){var s=r==0?1:.01;t.min==null&&(n-=s);if(t.max==null||t.min!=null)r+=s}else{var o=t.autoscaleMargin;o!=null&&(t.min==null&&(n-=i*o,n<0&&e.datamin!=null&&e.datamin>=0&&(n=0)),t.max==null&&(r+=i*o,r>0&&e.datamax!=null&&e.datamax<=0&&(r=0)))}e.min=n,e.max=r}function z(t){var n=t.options,r;typeof n.ticks=="number"&&n.ticks>0?r=n.ticks:r=.3*Math.sqrt(t.direction=="x"?f.width:f.height);var s=(t.max-t.min)/r,o=-Math.floor(Math.log(s)/Math.LN10),u=n.tickDecimals;u!=null&&o>u&&(o=u);var a=Math.pow(10,-o),l=s/a,c;l<1.5?c=1:l<3?(c=2,l>2.25&&(u==null||o+1<=u)&&(c=2.5,++o)):l<7.5?c=5:c=10,c*=a,n.minTickSize!=null&&c<n.minTickSize&&(c=n.minTickSize),t.delta=s,t.tickDecimals=Math.max(0,u!=null?u:o),t.tickSize=n.tickSize||c;if(n.mode=="time"&&!t.tickGenerator)throw new Error("Time mode requires the flot.time plugin.");t.tickGenerator||(t.tickGenerator=function(e){var t=[],n=i(e.min,e.tickSize),r=0,s=Number.NaN,o;do o=s,s=n+r*e.tickSize,t.push(s),++r;while(s<e.max&&s!=o);return t},t.tickFormatter=function(e,t){var n=t.tickDecimals?Math.pow(10,t.tickDecimals):1,r=""+Math.round(e*n)/n;if(t.tickDecimals!=null){var i=r.indexOf("."),s=i==-1?0:r.length-i-1;if(s<t.tickDecimals)return(s?r:r+".")+(""+n).substr(1,t.tickDecimals-s)}return r}),e.isFunction(n.tickFormatter)&&(t.tickFormatter=function(e,t){return""+n.tickFormatter(e,t)});if(n.alignTicksWithAxis!=null){var h=(t.direction=="x"?d:v)[n.alignTicksWithAxis-1];if(h&&h.used&&h!=t){var p=t.tickGenerator(t);p.length>0&&(n.min==null&&(t.min=Math.min(t.min,p[0])),n.max==null&&p.length>1&&(t.max=Math.max(t.max,p[p.length-1]))),t.tickGenerator=function(e){var t=[],n,r;for(r=0;r<h.ticks.length;++r)n=(h.ticks[r].v-h.min)/(h.max-h.min),n=e.min+n*(e.max-e.min),t.push(n);return t};if(!t.mode&&n.tickDecimals==null){var m=Math.max(0,-Math.floor(Math.log(t.delta)/Math.LN10)+1),g=t.tickGenerator(t);g.length>1&&/\..*0$/.test((g[1]-g[0]).toFixed(m))||(t.tickDecimals=m)}}}}function W(t){var n=t.options.ticks,r=[];n==null||typeof n=="number"&&n>0?r=t.tickGenerator(t):n&&(e.isFunction(n)?r=n(t):r=n);var i,s;t.ticks=[];for(i=0;i<r.length;++i){var o=null,u=r[i];typeof u=="object"?(s=+u[0],u.length>1&&(o=u[1])):s=+u,o==null&&(o=t.tickFormatter(s,t)),isNaN(s)||t.ticks.push({v:s,label:o})}}function X(e,t){e.options.autoscaleMargin&&t.length>0&&(e.options.min==null&&(e.min=Math.min(e.min,t[0].v)),e.options.max==null&&t.length>1&&(e.max=Math.max(e.max,t[t.length-1].v)))}function V(){f.clear(),E(b.drawBackground,[h]);var e=a.grid;e.show&&e.backgroundColor&&K(),e.show&&!e.aboveData&&Q();for(var t=0;t<u.length;++t)E(b.drawSeries,[h,u[t]]),Y(u[t]);E(b.draw,[h]),e.show&&e.aboveData&&Q(),f.render(),ht()}function J(e,t){var n,r,i,s,o=k();for(var u=0;u<o.length;++u){n=o[u];if(n.direction==t){s=t+n.n+"axis",!e[s]&&n.n==1&&(s=t+"axis");if(e[s]){r=e[s].from,i=e[s].to;break}}}e[s]||(n=t=="x"?d[0]:v[0],r=e[t+"1"],i=e[t+"2"]);if(r!=null&&i!=null&&r>i){var a=r;r=i,i=a}return{from:r,to:i,axis:n}}function K(){h.save(),h.translate(m.left,m.top),h.fillStyle=bt(a.grid.backgroundColor,y,0,"rgba(255, 255, 255, 0)"),h.fillRect(0,0,g,y),h.restore()}function Q(){var t,n,r,i;h.save(),h.translate(m.left,m.top);var s=a.grid.markings;if(s){e.isFunction(s)&&(n=w.getAxes(),n.xmin=n.xaxis.min,n.xmax=n.xaxis.max,n.ymin=n.yaxis.min,n.ymax=n.yaxis.max,s=s(n));for(t=0;t<s.length;++t){var o=s[t],u=J(o,"x"),f=J(o,"y");u.from==null&&(u.from=u.axis.min),u.to==null&&(u.to=u.axis.max),f.from==null&&(f.from=f.axis.min),f.to==null&&(f.to=f.axis.max);if(u.to<u.axis.min||u.from>u.axis.max||f.to<f.axis.min||f.from>f.axis.max)continue;u.from=Math.max(u.from,u.axis.min),u.to=Math.min(u.to,u.axis.max),f.from=Math.max(f.from,f.axis.min),f.to=Math.min(f.to,f.axis.max);if(u.from==u.to&&f.from==f.to)continue;u.from=u.axis.p2c(u.from),u.to=u.axis.p2c(u.to),f.from=f.axis.p2c(f.from),f.to=f.axis.p2c(f.to),u.from==u.to||f.from==f.to?(h.beginPath(),h.strokeStyle=o.color||a.grid.markingsColor,h.lineWidth=o.lineWidth||a.grid.markingsLineWidth,h.moveTo(u.from,f.from),h.lineTo(u.to,f.to),h.stroke()):(h.fillStyle=o.color||a.grid.markingsColor,h.fillRect(u.from,f.to,u.to-u.from,f.from-f.to))}}n=k(),r=a.grid.borderWidth;for(var l=0;l<n.length;++l){var c=n[l],p=c.box,d=c.tickLength,v,b,E,S;if(!c.show||c.ticks.length==0)continue;h.lineWidth=1,c.direction=="x"?(v=0,d=="full"?b=c.position=="top"?0:y:b=p.top-m.top+(c.position=="top"?p.height:0)):(b=0,d=="full"?v=c.position=="left"?0:g:v=p.left-m.left+(c.position=="left"?p.width:0)),c.innermost||(h.strokeStyle=c.options.color,h.beginPath(),E=S=0,c.direction=="x"?E=g+1:S=y+1,h.lineWidth==1&&(c.direction=="x"?b=Math.floor(b)+.5:v=Math.floor(v)+.5),h.moveTo(v,b),h.lineTo(v+E,b+S),h.stroke()),h.strokeStyle=c.options.tickColor,h.beginPath();for(t=0;t<c.ticks.length;++t){var x=c.ticks[t].v;E=S=0;if(isNaN(x)||x<c.min||x>c.max||d=="full"&&(typeof r=="object"&&r[c.position]>0||r>0)&&(x==c.min||x==c.max))continue;c.direction=="x"?(v=c.p2c(x),S=d=="full"?-y:d,c.position=="top"&&(S=-S)):(b=c.p2c(x),E=d=="full"?-g:d,c.position=="left"&&(E=-E)),h.lineWidth==1&&(c.direction=="x"?v=Math.floor(v)+.5:b=Math.floor(b)+.5),h.moveTo(v,b),h.lineTo(v+E,b+S)}h.stroke()}r&&(i=a.grid.borderColor,typeof r=="object"||typeof i=="object"?(typeof r!="object"&&(r={top:r,right:r,bottom:r,left:r}),typeof i!="object"&&(i={top:i,right:i,bottom:i,left:i}),r.top>0&&(h.strokeStyle=i.top,h.lineWidth=r.top,h.beginPath(),h.moveTo(0-r.left,0-r.top/2),h.lineTo(g,0-r.top/2),h.stroke()),r.right>0&&(h.strokeStyle=i.right,h.lineWidth=r.right,h.beginPath(),h.moveTo(g+r.right/2,0-r.top),h.lineTo(g+r.right/2,y),h.stroke()),r.bottom>0&&(h.strokeStyle=i.bottom,h.lineWidth=r.bottom,h.beginPath(),h.moveTo(g+r.right,y+r.bottom/2),h.lineTo(0,y+r.bottom/2),h.stroke()),r.left>0&&(h.strokeStyle=i.left,h.lineWidth=r.left,h.beginPath(),h.moveTo(0-r.left/2,y+r.bottom),h.lineTo(0-r.left/2,0),h.stroke())):(h.lineWidth=r,h.strokeStyle=a.grid.borderColor,h.strokeRect(-r/2,-r/2,g+r,y+r))),h.restore()}function G(){e.each(k(),function(e,t){if(!t.show||t.ticks.length==0)return;var n=t.box,r=t.direction+"Axis "+t.direction+t.n+"Axis",i="flot-"+t.direction+"-axis flot-"+t.direction+t.n+"-axis "+r,s=t.options.font||"flot-tick-label tickLabel",o,u,a,l,c;f.removeText(i);for(var h=0;h<t.ticks.length;++h){o=t.ticks[h];if(!o.label||o.v<t.min||o.v>t.max)continue;t.direction=="x"?(l="center",u=m.left+t.p2c(o.v),t.position=="bottom"?a=n.top+n.padding:(a=n.top+n.height-n.padding,c="bottom")):(c="middle",a=m.top+t.p2c(o.v),t.position=="left"?(u=n.left+n.width-n.padding,l="right"):u=n.left+n.padding),f.addText(i,u,a,o.label,s,null,null,l,c)}})}function Y(e){e.lines.show&&Z(e),e.bars.show&&nt(e),e.points.show&&et(e)}function Z(e){function t(e,t,n,r,i){var s=e.points,o=e.pointsize,u=null,a=null;h.beginPath();for(var f=o;f<s.length;f+=o){var l=s[f-o],c=s[f-o+1],p=s[f],d=s[f+1];if(l==null||p==null)continue;if(c<=d&&c<i.min){if(d<i.min)continue;l=(i.min-c)/(d-c)*(p-l)+l,c=i.min}else if(d<=c&&d<i.min){if(c<i.min)continue;p=(i.min-c)/(d-c)*(p-l)+l,d=i.min}if(c>=d&&c>i.max){if(d>i.max)continue;l=(i.max-c)/(d-c)*(p-l)+l,c=i.max}else if(d>=c&&d>i.max){if(c>i.max)continue;p=(i.max-c)/(d-c)*(p-l)+l,d=i.max}if(l<=p&&l<r.min){if(p<r.min)continue;c=(r.min-l)/(p-l)*(d-c)+c,l=r.min}else if(p<=l&&p<r.min){if(l<r.min)continue;d=(r.min-l)/(p-l)*(d-c)+c,p=r.min}if(l>=p&&l>r.max){if(p>r.max)continue;c=(r.max-l)/(p-l)*(d-c)+c,l=r.max}else if(p>=l&&p>r.max){if(l>r.max)continue;d=(r.max-l)/(p-l)*(d-c)+c,p=r.max}(l!=u||c!=a)&&h.moveTo(r.p2c(l)+t,i.p2c(c)+n),u=p,a=d,h.lineTo(r.p2c(p)+t,i.p2c(d)+n)}h.stroke()}function n(e,t,n){var r=e.points,i=e.pointsize,s=Math.min(Math.max(0,n.min),n.max),o=0,u,a=!1,f=1,l=0,c=0;for(;;){if(i>0&&o>r.length+i)break;o+=i;var p=r[o-i],d=r[o-i+f],v=r[o],m=r[o+f];if(a){if(i>0&&p!=null&&v==null){c=o,i=-i,f=2;continue}if(i<0&&o==l+i){h.fill(),a=!1,i=-i,f=1,o=l=c+i;continue}}if(p==null||v==null)continue;if(p<=v&&p<t.min){if(v<t.min)continue;d=(t.min-p)/(v-p)*(m-d)+d,p=t.min}else if(v<=p&&v<t.min){if(p<t.min)continue;m=(t.min-p)/(v-p)*(m-d)+d,v=t.min}if(p>=v&&p>t.max){if(v>t.max)continue;d=(t.max-p)/(v-p)*(m-d)+d,p=t.max}else if(v>=p&&v>t.max){if(p>t.max)continue;m=(t.max-p)/(v-p)*(m-d)+d,v=t.max}a||(h.beginPath(),h.moveTo(t.p2c(p),n.p2c(s)),a=!0);if(d>=n.max&&m>=n.max){h.lineTo(t.p2c(p),n.p2c(n.max)),h.lineTo(t.p2c(v),n.p2c(n.max));continue}if(d<=n.min&&m<=n.min){h.lineTo(t.p2c(p),n.p2c(n.min)),h.lineTo(t.p2c(v),n.p2c(n.min));continue}var g=p,y=v;d<=m&&d<n.min&&m>=n.min?(p=(n.min-d)/(m-d)*(v-p)+p,d=n.min):m<=d&&m<n.min&&d>=n.min&&(v=(n.min-d)/(m-d)*(v-p)+p,m=n.min),d>=m&&d>n.max&&m<=n.max?(p=(n.max-d)/(m-d)*(v-p)+p,d=n.max):m>=d&&m>n.max&&d<=n.max&&(v=(n.max-d)/(m-d)*(v-p)+p,m=n.max),p!=g&&h.lineTo(t.p2c(g),n.p2c(d)),h.lineTo(t.p2c(p),n.p2c(d)),h.lineTo(t.p2c(v),n.p2c(m)),v!=y&&(h.lineTo(t.p2c(v),n.p2c(m)),h.lineTo(t.p2c(y),n.p2c(m)))}}h.save(),h.translate(m.left,m.top),h.lineJoin="round";var r=e.lines.lineWidth,i=e.shadowSize;if(r>0&&i>0){h.lineWidth=i,h.strokeStyle="rgba(0,0,0,0.1)";var s=Math.PI/18;t(e.datapoints,Math.sin(s)*(r/2+i/2),Math.cos(s)*(r/2+i/2),e.xaxis,e.yaxis),h.lineWidth=i/2,t(e.datapoints,Math.sin(s)*(r/2+i/4),Math.cos(s)*(r/2+i/4),e.xaxis,e.yaxis)}h.lineWidth=r,h.strokeStyle=e.color;var o=rt(e.lines,e.color,0,y);o&&(h.fillStyle=o,n(e.datapoints,e.xaxis,e.yaxis)),r>0&&t(e.datapoints,0,0,e.xaxis,e.yaxis),h.restore()}function et(e){function t(e,t,n,r,i,s,o,u){var a=e.points,f=e.pointsize;for(var l=0;l<a.length;l+=f){var c=a[l],p=a[l+1];if(c==null||c<s.min||c>s.max||p<o.min||p>o.max)continue;h.beginPath(),c=s.p2c(c),p=o.p2c(p)+r,u=="circle"?h.arc(c,p,t,0,i?Math.PI:Math.PI*2,!1):u(h,c,p,t,i),h.closePath(),n&&(h.fillStyle=n,h.fill()),h.stroke()}}h.save(),h.translate(m.left,m.top);var n=e.points.lineWidth,r=e.shadowSize,i=e.points.radius,s=e.points.symbol;n==0&&(n=1e-4);if(n>0&&r>0){var o=r/2;h.lineWidth=o,h.strokeStyle="rgba(0,0,0,0.1)",t(e.datapoints,i,null,o+o/2,!0,e.xaxis,e.yaxis,s),h.strokeStyle="rgba(0,0,0,0.2)",t(e.datapoints,i,null,o/2,!0,e.xaxis,e.yaxis,s)}h.lineWidth=n,h.strokeStyle=e.color,t(e.datapoints,i,rt(e.points,e.color),0,!1,e.xaxis,e.yaxis,s),h.restore()}function tt(e,t,n,r,i,s,o,u,a,f,l,c){var h,p,d,v,m,g,y,b,w;l?(b=g=y=!0,m=!1,h=n,p=e,v=t+r,d=t+i,p<h&&(w=p,p=h,h=w,m=!0,g=!1)):(m=g=y=!0,b=!1,h=e+r,p=e+i,d=n,v=t,v<d&&(w=v,v=d,d=w,b=!0,y=!1));if(p<u.min||h>u.max||v<a.min||d>a.max)return;h<u.min&&(h=u.min,m=!1),p>u.max&&(p=u.max,g=!1),d<a.min&&(d=a.min,b=!1),v>a.max&&(v=a.max,y=!1),h=u.p2c(h),d=a.p2c(d),p=u.p2c(p),v=a.p2c(v),o&&(f.beginPath(),f.moveTo(h,d),f.lineTo(h,v),f.lineTo(p,v),f.lineTo(p,d),f.fillStyle=o(d,v),f.fill()),c>0&&(m||g||y||b)&&(f.beginPath(),f.moveTo(h,d+s),m?f.lineTo(h,v+s):f.moveTo(h,v+s),y?f.lineTo(p,v+s):f.moveTo(p,v+s),g?f.lineTo(p,d+s):f.moveTo(p,d+s),b?f.lineTo(h,d+s):f.moveTo(h,d+s),f.stroke())}function nt(e){function t(t,n,r,i,s,o,u){var a=t.points,f=t.pointsize;for(var l=0;l<a.length;l+=f){if(a[l]==null)continue;tt(a[l],a[l+1],a[l+2],n,r,i,s,o,u,h,e.bars.horizontal,e.bars.lineWidth)}}h.save(),h.translate(m.left,m.top),h.lineWidth=e.bars.lineWidth,h.strokeStyle=e.color;var n;switch(e.bars.align){case"left":n=0;break;case"right":n=-e.bars.barWidth;break;case"center":n=-e.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+e.bars.align)}var r=e.bars.fill?function(t,n){return rt(e.bars,e.color,t,n)}:null;t(e.datapoints,n,n+e.bars.barWidth,0,r,e.xaxis,e.yaxis),h.restore()}function rt(t,n,r,i){var s=t.fill;if(!s)return null;if(t.fillColor)return bt(t.fillColor,r,i,n);var o=e.color.parse(n);return o.a=typeof s=="number"?s:.4,o.normalize(),o.toString()}function it(){t.find(".legend").remove();if(!a.legend.show)return;var n=[],r=[],i=!1,s=a.legend.labelFormatter,o,f;for(var l=0;l<u.length;++l)o=u[l],o.label&&(f=s?s(o.label,o):o.label,f&&r.push({label:f,color:o.color}));if(a.legend.sorted)if(e.isFunction(a.legend.sorted))r.sort(a.legend.sorted);else if(a.legend.sorted=="reverse")r.reverse();else{var c=a.legend.sorted!="descending";r.sort(function(e,t){return e.label==t.label?0:e.label<t.label!=c?1:-1})}for(var l=0;l<r.length;++l){var h=r[l];l%a.legend.noColumns==0&&(i&&n.push("</tr>"),n.push("<tr>"),i=!0),n.push('<td class="legendColorBox"><div style="border:1px solid '+a.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+h.color+';overflow:hidden"></div></div></td>'+'<td class="legendLabel">'+h.label+"</td>")}i&&n.push("</tr>");if(n.length==0)return;var p='<table style="font-size:smaller;color:'+a.grid.color+'">'+n.join("")+"</table>";if(a.legend.container!=null)e(a.legend.container).html(p);else{var d="",v=a.legend.position,g=a.legend.margin;g[0]==null&&(g=[g,g]),v.charAt(0)=="n"?d+="top:"+(g[1]+m.top)+"px;":v.charAt(0)=="s"&&(d+="bottom:"+(g[1]+m.bottom)+"px;"),v.charAt(1)=="e"?d+="right:"+(g[0]+m.right)+"px;":v.charAt(1)=="w"&&(d+="left:"+(g[0]+m.left)+"px;");var y=e('<div class="legend">'+p.replace('style="','style="position:absolute;'+d+";")+"</div>").appendTo(t);if(a.legend.backgroundOpacity!=0){var b=a.legend.backgroundColor;b==null&&(b=a.grid.backgroundColor,b&&typeof b=="string"?b=e.color.parse(b):b=e.color.extract(y,"background-color"),b.a=1,b=b.toString());var w=y.children();e('<div style="position:absolute;width:'+w.width()+"px;height:"+w.height()+"px;"+d+"background-color:"+b+';"> </div>').prependTo(y).css("opacity",a.legend.backgroundOpacity)}}}function ut(e,t,n){var r=a.grid.mouseActiveRadius,i=r*r+1,s=null,o=!1,f,l,c;for(f=u.length-1;f>=0;--f){if(!n(u[f]))continue;var h=u[f],p=h.xaxis,d=h.yaxis,v=h.datapoints.points,m=p.c2p(e),g=d.c2p(t),y=r/p.scale,b=r/d.scale;c=h.datapoints.pointsize,p.options.inverseTransform&&(y=Number.MAX_VALUE),d.options.inverseTransform&&(b=Number.MAX_VALUE);if(h.lines.show||h.points.show)for(l=0;l<v.length;l+=c){var w=v[l],E=v[l+1];if(w==null)continue;if(w-m>y||w-m<-y||E-g>b||E-g<-b)continue;var S=Math.abs(p.p2c(w)-e),x=Math.abs(d.p2c(E)-t),T=S*S+x*x;T<i&&(i=T,s=[f,l/c])}if(h.bars.show&&!s){var N=h.bars.align=="left"?0:-h.bars.barWidth/2,C=N+h.bars.barWidth;for(l=0;l<v.length;l+=c){var w=v[l],E=v[l+1],k=v[l+2];if(w==null)continue;if(u[f].bars.horizontal?m<=Math.max(k,w)&&m>=Math.min(k,w)&&g>=E+N&&g<=E+C:m>=w+N&&m<=w+C&&g>=Math.min(k,E)&&g<=Math.max(k,E))s=[f,l/c]}}}return s?(f=s[0],l=s[1],c=u[f].datapoints.pointsize,{datapoint:u[f].datapoints.points.slice(l*c,(l+1)*c),dataIndex:l,series:u[f],seriesIndex:f}):null}function at(e){a.grid.hoverable&&ct("plothover",e,function(e){return e["hoverable"]!=0})}function ft(e){a.grid.hoverable&&ct("plothover",e,function(e){return!1})}function lt(e){ct("plotclick",e,function(e){return e["clickable"]!=0})}function ct(e,n,r){var i=c.offset(),s=n.pageX-i.left-m.left,o=n.pageY-i.top-m.top,u=L({left:s,top:o});u.pageX=n.pageX,u.pageY=n.pageY;var f=ut(s,o,r);f&&(f.pageX=parseInt(f.series.xaxis.p2c(f.datapoint[0])+i.left+m.left,10),f.pageY=parseInt(f.series.yaxis.p2c(f.datapoint[1])+i.top+m.top,10));if(a.grid.autoHighlight){for(var l=0;l<st.length;++l){var h=st[l];h.auto==e&&(!f||h.series!=f.series||h.point[0]!=f.datapoint[0]||h.point[1]!=f.datapoint[1])&&vt(h.series,h.point)}f&&dt(f.series,f.datapoint,e)}t.trigger(e,[u,f])}function ht(){var e=a.interaction.redrawOverlayInterval;if(e==-1){pt();return}ot||(ot=setTimeout(pt,e))}function pt(){ot=null,p.save(),l.clear(),p.translate(m.left,m.top);var e,t;for(e=0;e<st.length;++e)t=st[e],t.series.bars.show?yt(t.series,t.point):gt(t.series,t.point);p.restore(),E(b.drawOverlay,[p])}function dt(e,t,n){typeof e=="number"&&(e=u[e]);if(typeof t=="number"){var r=e.datapoints.pointsize;t=e.datapoints.points.slice(r*t,r*(t+1))}var i=mt(e,t);i==-1?(st.push({series:e,point:t,auto:n}),ht()):n||(st[i].auto=!1)}function vt(e,t){if(e==null&&t==null){st=[],ht();return}typeof e=="number"&&(e=u[e]);if(typeof t=="number"){var n=e.datapoints.pointsize;t=e.datapoints.points.slice(n*t,n*(t+1))}var r=mt(e,t);r!=-1&&(st.splice(r,1),ht())}function mt(e,t){for(var n=0;n<st.length;++n){var r=st[n];if(r.series==e&&r.point[0]==t[0]&&r.point[1]==t[1])return n}return-1}function gt(t,n){var r=n[0],i=n[1],s=t.xaxis,o=t.yaxis,u=typeof t.highlightColor=="string"?t.highlightColor:e.color.parse(t.color).scale("a",.5).toString();if(r<s.min||r>s.max||i<o.min||i>o.max)return;var a=t.points.radius+t.points.lineWidth/2;p.lineWidth=a,p.strokeStyle=u;var f=1.5*a;r=s.p2c(r),i=o.p2c(i),p.beginPath(),t.points.symbol=="circle"?p.arc(r,i,f,0,2*Math.PI,!1):t.points.symbol(p,r,i,f,!1),p.closePath(),p.stroke()}function yt(t,n){var r=typeof t.highlightColor=="string"?t.highlightColor:e.color.parse(t.color).scale("a",.5).toString(),i=r,s=t.bars.align=="left"?0:-t.bars.barWidth/2;p.lineWidth=t.bars.lineWidth,p.strokeStyle=r,tt(n[0],n[1],n[2]||0,s,s+t.bars.barWidth,0,function(){return i},t.xaxis,t.yaxis,p,t.bars.horizontal,t.bars.lineWidth)}function bt(t,n,r,i){if(typeof t=="string")return t;var s=h.createLinearGradient(0,r,0,n);for(var o=0,u=t.colors.length;o<u;++o){var a=t.colors[o];if(typeof a!="string"){var f=e.color.parse(i);a.brightness!=null&&(f=f.scale("rgb",a.brightness)),a.opacity!=null&&(f.a*=a.opacity),a=f.toString()}s.addColorStop(o/(u-1),a)}return s}var u=[],a={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,align:"left",horizontal:!1,zero:!0},shadowSize:3,highlightColor:null},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},f=null,l=null,c=null,h=null,p=null,d=[],v=[],m={left:0,right:0,top:0,bottom
:0},g=0,y=0,b={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},w=this;w.setData=T,w.setupGrid=R,w.draw=V,w.getPlaceholder=function(){return t},w.getCanvas=function(){return f.element},w.getPlotOffset=function(){return m},w.width=function(){return g},w.height=function(){return y},w.offset=function(){var e=c.offset();return e.left+=m.left,e.top+=m.top,e},w.getData=function(){return u},w.getAxes=function(){var t={},n;return e.each(d.concat(v),function(e,n){n&&(t[n.direction+(n.n!=1?n.n:"")+"axis"]=n)}),t},w.getXAxes=function(){return d},w.getYAxes=function(){return v},w.c2p=L,w.p2c=A,w.getOptions=function(){return a},w.highlight=dt,w.unhighlight=vt,w.triggerRedrawOverlay=ht,w.pointOffset=function(e){return{left:parseInt(d[C(e,"x")-1].p2c(+e.x)+m.left,10),top:parseInt(v[C(e,"y")-1].p2c(+e.y)+m.top,10)}},w.shutdown=H,w.resize=function(){var e=t.width(),n=t.height();f.resize(e,n),l.resize(e,n)},w.hooks=b,S(w),x(s),D(),T(r),R(),V(),P();var st=[],ot=null}function i(e,t){return t*Math.floor(e/t)}var t=Object.prototype.hasOwnProperty;n.prototype.resize=function(e,t){if(e<=0||t<=0)throw new Error("Invalid dimensions for plot, width = "+e+", height = "+t);var n=this.element,r=this.context,i=this.pixelRatio;this.width!=e&&(n.width=e*i,n.style.width=e+"px",this.width=e),this.height!=t&&(n.height=t*i,n.style.height=t+"px",this.height=t),r.restore(),r.save(),r.scale(i,i)},n.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},n.prototype.render=function(){var e=this._textCache;for(var n in e)if(t.call(e,n)){var r=this.getTextLayer(n),i=e[n];r.hide();for(var s in i)if(t.call(i,s)){var o=i[s];for(var u in o)if(t.call(o,u)){var a=o[u].positions;for(var f=0,l;l=a[f];f++)l.active?l.rendered||(r.append(l.element),l.rendered=!0):(a.splice(f--,1),l.rendered&&l.element.detach());a.length==0&&delete o[u]}}r.show()}},n.prototype.getTextLayer=function(t){var n=this.text[t];return n==null&&(this.textContainer==null&&(this.textContainer=e("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)),n=this.text[t]=e("<div></div>").addClass(t).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)),n},n.prototype.getTextInfo=function(t,n,r,i,s){var o,u,a,f;n=""+n,typeof r=="object"?o=r.style+" "+r.variant+" "+r.weight+" "+r.size+"px/"+r.lineHeight+"px "+r.family:o=r,u=this._textCache[t],u==null&&(u=this._textCache[t]={}),a=u[o],a==null&&(a=u[o]={}),f=a[n];if(f==null){var l=e("<div></div>").html(n).css({position:"absolute","max-width":s,top:-9999}).appendTo(this.getTextLayer(t));typeof r=="object"?l.css({font:o,color:r.color}):typeof r=="string"&&l.addClass(r),f=a[n]={width:l.outerWidth(!0),height:l.outerHeight(!0),element:l,positions:[]},l.detach()}return f},n.prototype.addText=function(e,t,n,r,i,s,o,u,a){var f=this.getTextInfo(e,r,i,s,o),l=f.positions;u=="center"?t-=f.width/2:u=="right"&&(t-=f.width),a=="middle"?n-=f.height/2:a=="bottom"&&(n-=f.height);for(var c=0,h;h=l[c];c++)if(h.x==t&&h.y==n){h.active=!0;return}h={active:!0,rendered:!1,element:l.length?f.element.clone():f.element,x:t,y:n},l.push(h),h.element.css({top:Math.round(n),left:Math.round(t),"text-align":u})},n.prototype.removeText=function(e,n,r,i,s,o){if(i==null){var u=this._textCache[e];if(u!=null)for(var a in u)if(t.call(u,a)){var f=u[a];for(var l in f)if(t.call(f,l)){var c=f[l].positions;for(var h=0,p;p=c[h];h++)p.active=!1}}}else{var c=this.getTextInfo(e,i,s,o).positions;for(var h=0,p;p=c[h];h++)p.x==n&&p.y==r&&(p.active=!1)}},e.plot=function(t,n,i){var s=new r(e(t),n,i,e.plot.plugins);return s},e.plot.version="0.8.1",e.plot.plugins=[],e.fn.plot=function(t,n){return this.each(function(){e.plot(this,t,n)})}}(jQuery);
/* ######## jquery_flot_min End ############################################# */


/* ######## jquery_flot_stack_min ############################################# */

/* Flot plugin for stacking data sets rather than overlyaing them.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes the data is sorted on x (or y if stacking horizontally).
For line charts, it is assumed that if a line has an undefined gap (from a
null point), then the line above it should have the same gap - insert zeros
instead of "null" if you want another behaviour. This also holds for the start
and end of the chart. Note that stacking a mix of positive and negative values
in most instances doesn't make sense (so it looks weird).

Two or more series are stacked when their "stack" attribute is set to the same
key (which can be any number or string or just "true"). To specify the default
stack, you can set the stack option like this:

	series: {
		stack: null/false, true, or a key (number/string)
	}

You can also specify it for a single series, like this:

	$.plot( $("#placeholder"), [{
		data: [ ... ],
		stack: true
	}])

The stacking order is determined by the order of the data series in the array
(later series end up on top of the previous).

Internally, the plugin modifies the datapoints in each series, adding an
offset to the y value. For line series, extra data points are inserted through
interpolation. If there's a second y value, it's also adjusted (e.g for bar
charts or filled areas).

*/(function(e){function n(e){function t(e,t){var n=null;for(var r=0;r<t.length;++r){if(e==t[r])break;t[r].stack==e.stack&&(n=t[r])}return n}function n(e,n,r){if(n.stack==null||n.stack===!1)return;var i=t(n,e.getData());if(!i)return;var s=r.pointsize,o=r.points,u=i.datapoints.pointsize,a=i.datapoints.points,f=[],l,c,h,p,d,v,m=n.lines.show,g=n.bars.horizontal,y=s>2&&(g?r.format[2].x:r.format[2].y),b=m&&n.lines.steps,w=!0,E=g?1:0,S=g?0:1,x=0,T=0,N,C;for(;;){if(x>=o.length)break;N=f.length;if(o[x]==null){for(C=0;C<s;++C)f.push(o[x+C]);x+=s}else if(T>=a.length){if(!m)for(C=0;C<s;++C)f.push(o[x+C]);x+=s}else if(a[T]==null){for(C=0;C<s;++C)f.push(null);w=!0,T+=u}else{l=o[x+E],c=o[x+S],p=a[T+E],d=a[T+S],v=0;if(l==p){for(C=0;C<s;++C)f.push(o[x+C]);f[N+S]+=d,v=d,x+=s,T+=u}else if(l>p){if(m&&x>0&&o[x-s]!=null){h=c+(o[x-s+S]-c)*(p-l)/(o[x-s+E]-l),f.push(p),f.push(h+d);for(C=2;C<s;++C)f.push(o[x+C]);v=d}T+=u}else{if(w&&m){x+=s;continue}for(C=0;C<s;++C)f.push(o[x+C]);m&&T>0&&a[T-u]!=null&&(v=d+(a[T-u+S]-d)*(l-p)/(a[T-u+E]-p)),f[N+S]+=v,x+=s}w=!1,N!=f.length&&y&&(f[N+2]+=v)}if(b&&N!=f.length&&N>0&&f[N]!=null&&f[N]!=f[N-s]&&f[N+1]!=f[N-s+1]){for(C=0;C<s;++C)f[N+s+C]=f[N+C];f[N+1]=f[N-s+1]}}r.points=f}e.hooks.processDatapoints.push(n)}var t={series:{stack:null}};e.plot.plugins.push({init:n,options:t,name:"stack",version:"1.2"})})(jQuery);
/* ######## jquery_flot_stack_min End ############################################# */


/* ######## jquery_migrosSelfGuide ############################################# */

// $LastChangedRevision$
;(function ( $, window, document, undefined ) {
    var pluginName = "migrosSelfGuide",
        defaults = {
            edit : false
        };

    function Plugin ( element, options ) {
        this.element = element;
        this.$element = $(element);
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var that = this;

            this.$productList  = this.$element.find('.guide-container .product-list-container');
            this.$toggleButton = this.$element.find('.guide-container .toggle');

            if(!this.settings.edit){
                this.visible = false;
                this.$productList.hide();
                this.$toggleButton.attr('title', this.$toggleButton.data('hide-title')).hide();
            }else{
                this.visible = true;
                this.$productList.show();
                this.$productList.find('.product-container').show();
                this.$toggleButton.attr('title', this.$toggleButton.data('hide-title')).show();
            }

            this.parseProducts();
            this.parseCriterias();
            this.bindEvents();
        },
        parseCriterias : function(){
            var that = this;

            this.criterias = {};

            this.$element.find('.criteria-container').each(function(){
                var $this = $(this);

                that.criterias[$this.data('criteria-id')] = $this;
            });
        },
        parseProducts : function(){
            var that = this;

            this.products = [];

            this.$element.find('.product-container').each(function(){
                var $this = $(this),
                    rules  = JSON.parse($this.data('criteria').replace(/'/g,'"')).rules;

                for(var i = 0, j = rules.length; i < j; i++){
                    rules[i] = rules[i].split('+');
                }

                $this.find('ul>li:last').addClass('last');

                that.products.push({
                    elem  : $this,
                    rules : rules
                });
            });
        },
        bindEvents : function(){
            var that = this;

            this.$element.find('.criteria-container input').change(function(e){
                var $this = $(this);

                $this.parents('.criteria-container').toggleClass('active');

                that.filterProducts();

                Migros.Utils.trackPage(e);
            });

            this.$toggleButton.on('click',function(event){
				event.preventDefault();
                if(that.visible){
                    that.hideProductList();
                    that.$toggleButton.html(that.$toggleButton.html().replace(that.$toggleButton.data('hide-text'),that.$toggleButton.data('show-text'))).attr('title', that.$toggleButton.data('show-title'));
                }else{
                    that.showProductList();
                    that.$toggleButton.html(that.$toggleButton.html().replace(that.$toggleButton.data('show-text'),that.$toggleButton.data('hide-text'))).attr('title', that.$toggleButton.data('hide-title'));
                }

                that.visible = !that.visible;
            });
        },
        filterProducts : function(){
            var that = this,
                activeItems = [],
                relevantProducts = [];

            this.$element.find('.criteria-container.active').each(function(){
                var $this = $(this);
                activeItems.push($this.data('criteria-id'));
            });

            for(var i = 0,j = this.products.length; i < j; i++){

                var rules = this.products[i].rules;

                for(var k = 0, l = rules.length; k < l; k++){
                    if(this.checkForRule(activeItems,rules[k])){
                        relevantProducts.push(this.products[i])
                    }
                }
            }

            relevantProducts = relevantProducts.splice(0,2);

            if(relevantProducts.length > 0 || this.settings.edit){
                if(!this.settings.edit){
                    this.hideProductList(function(){
                        that.$element.find('.product-container').hide();
                        for(i = 0, j = relevantProducts.length; i < j; i++){
                            relevantProducts[i].elem.show();
                        }
                        that.showProductList(function(){
                            if(!that.$toggleButton.is(':visible')){
                                that.$toggleButton.css({
                                    display : 'table-cell',
                                    opacity : 0
                                }).animate({
                                        opacity : 1
                                    }, 200);
                            }
                        });
                    });
                }else{
                    that.$element.find('.product-container').removeClass('edit-active')
                    for(i = 0, j = relevantProducts.length; i < j; i++){
                        relevantProducts[i].elem.addClass('edit-active');
                    }
                }
            }else{
                this.$toggleButton.animate({
                        opacity : 0
                    }, 200,function(){
                        that.$toggleButton.css({
                            display : 'none'
                        })
                    });
                this.hideProductList();
            }
        },
        checkForRule : function(active, rule){

            function compareArrays(a,b){
                for(var i = 0, j = a.length; i < j; i++){

                    var found = false;

                    for(var k = 0, l = b.length; k < l; k++){
                        if(a[k]==b[i]){
                            found = true;
                            break;
                        }
                    }

                    if(!found){
                        return false;
                    }
                }
                return true;
            }

            return compareArrays(active,rule) && compareArrays(rule,active);
        },
        showProductList : function( callback ){
            callback = (callback && typeof callback === 'function') ? callback : function(){};

            if (this.$productList.is(':visible')){
                callback();
                return null;
            }

            var that =this,
                height;

            this.$productList.stop(true,false).css({
                height  : 'auto',
                display : 'block'
            });

            height = this.$productList.height();

            this.$productList.css({
                height : 0
            }).animate({
                height : height
            },300,function(){
                that.visible = true;
                that.$productList.css({
                    height : 'auto'
                });

                    that.$productList.parent().addClass('active');

                    callback();
            });

            return true;
        },
        hideProductList : function( callback ){
            callback = (callback && typeof callback === 'function') ? callback : function(){};

            if (!this.$productList.is(':visible')){
                callback();
                return null;
            }

            var that = this,
                height = this.$productList.css('height');

            this.$productList.stop(true,false).css({
                height : height
            }).animate({
                height : 0
            },300,function(){
                that.visible = false;
                that.$productList.css({
                    display : 'none'
                });

                that.$productList.parent().removeClass('active');

                callback();
            });

            return true;
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
/* ######## jquery_migrosSelfGuide End ############################################# */


/* ######## main ############################################# */

// $LastChangedRevision$

var Migros = {
    Pages: {},
    Components: {},
    Tools: {},
    Controller: {},
    FeatureData: {},
    Utils: {}
};

/**
 * ------------- Features -------------
 */

Migros.Utils.adjustTrackingMethods = function () {

};

/**
 * track page
 * @constructor
 */

function dcsEvt(evt,tag){
    var e=evt.target||evt.srcElement;
    while (e&&e.tagName&&(e.tagName.toLowerCase()!=tag.toLowerCase())){
                    e=e.parentElement||e.parentNode;
    }
    return e;
}


function dcsIsOnsite(host){
    if (host.length>0){
        host=host.toLowerCase();
        if (host==window.location.hostname.toLowerCase()){
                        return true;
        }
    }
    return false;
}

function dcsSplit(list){
    var items=list.toLowerCase().split(",");
    var len=items.length;
    for (var i=0;i<len;i++){
                    items[i]=items[i].replace(/^\s*/,"").replace(/\s*$/,"");
    }
    return items;
}

function dcsTypeMatch(pth, typelist){
    var type=pth.toLowerCase().substring(pth.lastIndexOf(".")+1,pth.length);
    var types=dcsSplit(typelist);
    var tlen=types.length;
    for (var i=0;i<tlen;i++){
                    if (type==types[i]){
                                    return true;
                    }
    }
    return false;
}

downloadtypes = "xls,doc,pdf,txt,csv,zip,docx,xlsx";

Migros.Utils.trackPage = function (e) {
    var eventType = (e.type + "").toLowerCase();
    var e = e || (window.event || "");
    var node = (e.target || e.srcElement).tagName.toLowerCase();

    if (e.type = "keypress" && e.target.nodeName.toLowerCase() == "input") {

        node = $(e.target).parent().parent().find("input[type='submit']");
        e.target = node;
    }

    var targetNode = dcsEvt(e, node);
    var linkType = "standardlink";

    var track = function () {

        var hostName = "";
        var protocol = "";
        var path = "";
        var qry = "";
        var title = getTrackingTitle(e.type);
        var additionalParams = Migros.Utils.getAdditionalTrackingParams(targetNode);
        var params = [];
        var dl = "20";

        // global links with target href
        if (targetNode.href) { // link with targeturl

            hostName = targetNode.hostname ? (targetNode.hostname.split(":")[0]) : "";
            protocol = targetNode.protocol || "";
            path = targetNode.pathname ? ((targetNode.pathname.indexOf("/") != 0) ? "/" + targetNode.pathname : targetNode.pathname) : "/";
            qry = targetNode.search ? targetNode.search.substring(targetNode.search.indexOf("?") + 1, targetNode.search.length) : "";
            dl = "20";

            // Anchor
            if (dcsIsOnsite(hostName) && targetNode.hash && (targetNode.hash != "") && (targetNode.hash != "#")) {

                linkType = "anchor";

                path = escape(path + targetNode.hash);
                title = title = "Anchor:" + getTrackingTitle();
                dl = "21";
            }

            // Offsite links
            if ((hostName.length > 0) && (protocol.indexOf("http") == 0) && !dcsIsOnsite(hostName)) {

                linkType = "offsite";

                title = "Offsite:" + getTrackingTitle();
                qry = "";
                dl = "24";

                params.push('DCS.dcsref', window.location.hostname);
            }

            // if mailto
            if (targetNode.protocol) {

                if (targetNode.protocol.toLowerCase() == "mailto:") {

                    linkType = "mailto";

                    hostName = window.location.hostname;
                    path = targetNode.href;
                    title = "MailTo:" + getTrackingTitle();
                    dl = "23";
                }
                else if (targetNode.protocol.toLowerCase() == "javascript:") {

                    linkType = "javascript";

                    hostName = window.location.hostname;
                    path = targetNode.href;
                    title = "JavaScript:" + getTrackingTitle();
                    dl = "22";
                }
            }

            // if download link
            if (targetNode.pathname) {

                if (dcsIsOnsite(hostName) && dcsTypeMatch(targetNode.pathname, downloadtypes)) {

                    linkType = "download";

                    // get special download params
                    qry = targetNode.search ? targetNode.search.substring(targetNode.search.indexOf("?") + 1, targetNode.search.length) : "";

                    if (eventType == "contextmenu") {
                        //push special download param
                        title = "RightClick:" + getTrackingTitle();
                        dl = "25";
                    } else {
                        //push special download param
                        title = "Download:" + getTrackingTitle();
                        dl = "20";
                    }
                }
            }
        } else { // for links in javascript (for example stage teaser)

            linkType = "javascript";

            hostName = window.location.hostname;
            path = window.location.pathname ? ((window.location.pathname.indexOf("/") != 0) ? "/" + window.location.pathname : window.location.pathname) : "/";
            qry = window.location.search ? window.location.search.substring(window.location.search.indexOf("?") + 1, window.location.search.length) : "";
        }

        // push params
        params.push('DCS.dcssip', hostName);
        params.push('DCS.dcsuri', path);
        params.push('DCS.dcsqry', qry);
        params.push('WT.ti', title);
        params.push('WT.dl', dl);

        // gtm params
        var eventData= {}
        eventData['event'] = 'click';
        eventData['host'] = hostName;
        eventData['path'] = path;
        eventData['query'] = qry;
        eventData['title'] = title;

        // add additional params from parent nodes
        var l = additionalParams.length;
        while (l--) {

            var obj = additionalParams[l];

            for (var j in obj) {

                if (params.indexOf(j) == -1) {
                    params.push(j, obj[j]);
                    eventData[j] = obj[j];
                } else {
                    params.splice(params.indexOf(j), 2)
                    params.push(j, obj[j]);
                    eventData[j] = obj[j];
                }
            }
        }

        if (eventType == "contextmenu" && linkType != "download") {
            return false;
        }

        // track
        dataLayer.push(eventData);
        // dcsMultiTrack.apply(this, params);// pass array as comma-separated values
    };

    /**
     * get tracking title, if set via data-track = {"WT.ti" : "Depot"}
     * @returns {*}
     */
    var getTrackingTitle = function (type, field) {

        var type = type;
        var field = field;

        if (type == "keypress" && field == "input") {

            while ($(targetNode).parent()[0].nodeName.toLowerCase() != "form") {

                targetNode = $(targetNode).parent();
            }

            targetNode = $(targetNode).find("input[type='submit']");
        }

        var trackingParams = $(targetNode).attr('data-track');
        var txt = targetNode.innerText || targetNode.textContent;

        if (trackingParams) {

            var trackingParams = JSONUtil.parse(trackingParams);

            if (trackingParams['WT.ti']) {

                txt = trackingParams['WT.ti'];
            }
        }

        txt = $.trim(txt);

        return txt;
    };

    track();
};

/**
 * get additional Params from parent nodes with data-track-attributes
 */
Migros.Utils.getAdditionalTrackingParams = function (targetNode) {
    var parent = $(targetNode).parent();
    var objArray = [];

    try {

        var trackingParams = $(targetNode).attr('data-track');
        if (trackingParams) { // if has data-track, push obj in objArray
            var obj = JSONUtil.parse(trackingParams);
            objArray.push(obj);
        }

        if ($(parent)) {
            while ($(parent)[0].nodeName.toLowerCase() != "body") { // parse parent nodes up to node with class="content-grid"

                var trackingParams = $(parent).attr('data-track');
                if (trackingParams) { // if has data-track, push obj in objArray

                    var obj = JSONUtil.parse(trackingParams);
                    objArray.push(obj);
                }

                parent = $(parent).parent();
            }
        }
    } catch (e) {
    }
    return objArray;
};

/**
 * ------------- Features -------------
 */

/**
 * feature mode is edit
 * @returns {boolean}
 */
Migros.FeatureData.isEditMode = function () {

    var val = false;

    if ($('body').hasClass('edit')) {
        val = true;
    }

    return val;
};

/**
 * feature data is TouchDevice
 * @returns {boolean}
 */
Migros.FeatureData.isTouchDevice = function () {

    var val = false;
    var $body = $('body');

    if ($body.hasClass('tablet') || $body.hasClass('smartphone')) {
        val = true;
    }

    return val;
};

/**
 * feature data is TabletDevice
 * @returns {boolean}
 */
Migros.FeatureData.isTabletDevice = function () {

    var val = false;

    if ($('body').hasClass('tablet')) {
        val = true;
    }

    return val;
};

/**
 * feature data is MobileDevice
 * @returns {boolean}
 */
Migros.FeatureData.isMobileDevice = function () {

    var val = false;

    if ($('body').hasClass('smartphone')) {
        val = true;
    }

    return val;
};


/**
 * ------------- Pages -------------
 */
Migros.Pages.init = function () {

	if( $('body').hasClass('mobile') && $('#blog-wrap') > 0 ){
		$('body').addClass('smartphone');
	}

    // forms
    if ($('.form-wrapper').length != 0) {
        $.each($('.form-wrapper'), function (i, el) {

            var form = $(el).find('form');

            if ((form).length != 0) {
                try {
                    form.migrosFormValidate();
                } catch (e) {
                }

                form.find('label>.info').migrosFormTooltipsV2({
                    leftOffset: 0,
                    topOffset: 30,
                    displayDirection: 'top'
                });

                try {
                    $(el).find('#date').datepicker();
                } catch (e) {
                }
            }
        });
    }

    if($('.module-productfinder').length != 0) {
        try {
        	initmoduleProductfinder();
        } catch (e) {
        }
        if ($('.module-collapsible-component').length != 0) {
            try {
                Migros.Components.Collapsible.init();
            } catch (e) {
            }
        }
    }

	// Transfer product finder result as parameter
	if($('.module-productfinder-result-recommendation ul li').length > 0 ) {
		var $strategyValues = $('.module-productfinder-result-recommendation .productfinder-grid-4-element-text');

		var strategyLinkHref = $('.module-productfinder-result-recommendation ul li a').first().attr('href');
		var strategyLinkParams = ['recommendationAmount', 'recommendationInterval', 'recommendationDuration', 'recommendationType'];

		$strategyValues.each(function (i, el) {
			if(i == 0 && $('.module-productfinder-result-recommendation ul li a').first().attr('href').indexOf('?') == -1){
				strategyLinkHref += '?';
			}else{
				strategyLinkHref += '&';
			}

			strategyLinkHref+=  strategyLinkParams[i] + '=' + $(el).html().trim();
		});
		strategyLinkHref+= '&recommendationProduct=' + $('.module-productfinder-result-recommendation h1').html().trim();
		if($('.module-productfinder-result.recommended').length != 0){
			strategyLinkHref+= '&recommendationStrategy=' + $('.module-productfinder-result.recommended').attr('id').charAt($('.module-productfinder-result.recommended').attr('id').length-1);
		}

		$('.module-productfinder-result-recommendation ul li a').first().attr('href', strategyLinkHref);
	}

	if(top.frames.location.pathname !== location.pathname){
		return;
	}


    Migros.Utils.adjustTrackingMethods();
    Migros.Tools.Layer.parseLinks();
    Migros.Tools.Links.parse();

    if ($.bbq) {
        Migros.Controller.init();
    }

    if ($('#module-nav-main').length != 0) {
        try {
            Migros.Components.Navigation.Desktop.init();
        } catch (e) {
        }
    } else if ($('#module-nav-main-mobile').length != 0) {
        try {
            Migros.Components.Navigation.Mobile.init();
        } catch (e) {
        }

        try {
            Migros.Components.Header.Mobile.init();
        } catch (e) {
        }

        try {
            Migros.Components.Footer.Mobile.init();
        } catch (e) {
        }
    }

    if ($('.tab-module').length != 0) {

        try {
            Migros.Components.TabModule.init();
        } catch (e) {
        }
    }

    if ($('#top-stage').length != 0) {
        try {
            Migros.Components.Topstage.init();
        } catch (e) {
        }
    }

    if ($('.module-accordeon').length != 0) {
        try {
            Migros.Components.Accordeon.init();
        } catch (e) {
        }
    }

    if ($('.module-collapsible-component').length != 0) {
        try {
            Migros.Components.Collapsible.init();
        } catch (e) {
        }
    }

    if ($('.contact-dock').length != 0) {
        try {
            initContactDock();
        } catch (e) {
        }
    }

    if ($('.top-link').length != 0) {
        try {
            Migros.Tools.BackToTop.init($('.top-link'));
        } catch (e) {
        }
    }

    if ($('.module-search-result .standard-link-back').length != 0) {
        try {
            Migros.Tools.BackButton.init($('.module-search-result .standard-link-back'));
        } catch (e) {
        }
    }

    if ($('.module-calculator').length != 0) {
        try {
            Migros.Components.Calculator.init();
        } catch (e) {
        }
    }

    if($('.module-advantages').length != 0) {
        try {
    		initModuleAdvantages();
        } catch (e) {
        }
    }

    if($('.module-timeline').length != 0) {
        try {
        	initModuleTimeline();
        } catch (e) {
        }
    }

    if($('.module-cta-multicolumn.floating').length != 0) {
        try {
        	initmoduleCtaMulticolumn();
        } catch (e) {
        }
    }

    if($('.module-logismata-teaser').length != 0) {
        try {
        	initmoduleLogismataTeaser();
        } catch (e) {
        }
    }

    if (Migros.FeatureData.isTouchDevice()) {
        try {
            initTouchScroll();
        } catch (e) {
        }
    }

    // close button in layer
    if ($('.button-layer-close').length != 0) {

        if (!$('body').hasClass('smartphone') && !$('body').hasClass('tablet')) { //desktop - layer
            $('.button-layer-close').bind('click', function () {

                //$(window.parent.document).find('.lightbox-close').trigger('click');
                $(window.parent.document).find('.lightbox-close')[0].click();
            });
        } else { //touch - new tab
            $('.button-layer-close').bind('click', function () {
                $(window.parent.document).find('.tab-close').trigger('click');
            });
        }
    }

    // footer tooltip
    if ($('#footer .info').length != 0) {
    	$('#footer .info').migrosFormTooltipsV2({
            leftOffset: 0,
            topOffset: 30,
            displayDirection: 'bottom'
        });
    }
};


/**
 * ------------- Controller -------------
 */
/**
 * initialize
 * on hash change, page scrolls to anchor with id==hash
 */
Migros.Controller.init = function () {

    var targetId = $.bbq.getState().id;

    if (targetId) {

        if ($('#' + targetId).is('.accordeon-item')) {
        	var checkStatus;
        	if($('#' + targetId).parents().is('.module-faq')){
        		checkStatus = setInterval(function(){
        			if($('#' + targetId).parents('.module-faq').is('.loaded')) {
        				var category = $('#' + targetId).parents('.module-collapsible-component').data('categorization');
        				$('.faq-nav').find('[data-filter="'+ category +'"]').trigger('click');
        				clearInterval(checkStatus);
        				$('#' + targetId + ' .text-box').trigger('click');
        				setTimeout('Migros.Controller.scrollToAnchor("' + targetId + '")', 50);
                        //Migros.Controller.scrollToAnchor(targetId);

        			}
        		}, 10);

        	} else {
        		$('#' + targetId).siblings('.accordeon-item').removeClass('active');
                $('#' + targetId).addClass('active');
                $('#' + targetId + '.item-content').stop().css({'height': 'auto'});
                setTimeout('Migros.Controller.scrollToAnchor("' + targetId + '")', 125);
                //Migros.Controller.scrollToAnchor(targetId);
        	}


        }
        setTimeout('Migros.Controller.scrollToAnchor("' + targetId + '")', 125);
        //Migros.Controller.scrollToAnchor(targetId);
    }

    // hash change handler
    $(window).bind('hashchange', function (event) {
        if (event.getState().id) {
            setTimeout('Migros.Controller.scrollToAnchor("' + event.getState().id + '")', 125);
            //Migros.Controller.scrollToAnchor(event.getState().id);
        }
    });

    $('a').click(function () {

        if ($(this).attr('href') != undefined) {

            var targetHref = $(this).attr('href');
            var locationHash = window.location.hash;

            if (targetHref.length != 0 && targetHref.match(/#id=/)) {

                var hashLocation = targetHref.search(/#id=/);
                var targetHash = targetHref.substr(hashLocation);

                if (targetHash == locationHash) {
                    hashID = targetHash.split('=');
                    Migros.Controller.scrollToAnchor(hashID[1]);
                }

            }
        }
    });
};

/**
 * controller to scroll to id on page
 * @param id
 */
Migros.Controller.scrollToAnchor = function (id) {

    var aId = $('#' + id);

    if (aId.length > 0) {

        $('html, body').animate({
            scrollTop: aId.offset().top
        }, 'normal');

    }
};


/**
 * ------------- Tools -------------
 */
/**
 * parse links for tracking
 * @type {{}}
 */
Migros.Tools.Links = {};
Migros.Tools.Links.parse = function () {

    var clickEvent = (navigator.appVersion.indexOf("MSIE") != -1) ? "click" : "mousedown";
    var formOnEnterSubmit = false;

    $('a').each(function () {

        $(this).bind(clickEvent, function (e) {

            try {
                Migros.Utils.trackPage(e);
            } catch (e) {
            }
        });

        $(this).bind('contextmenu', function (e) {

            try {
                Migros.Utils.trackPage(e);
            } catch (e) {
            }
        })
    });

    $('.teaser-input').each(function () {

        $(this).find('input').bind('keypress', function (e) {
            var e = e || (window.event || "");

            if (e.keyCode == 13) {
                try {
                    Migros.Utils.trackPage(e);
                } catch (e) {
                }
            }
        });

        $(this).find("input[type='submit']").bind(clickEvent, function (e) {
            try {
                Migros.Utils.trackPage(e);
            } catch (e) {
            }
        });

    });


    $("button[type='submit']").each(function () {

        $(this).bind(clickEvent, function (e) {

            try {
                Migros.Utils.trackPage(e);
            } catch (e) {
            }
        });
    });
};

/**
 * Back to top link for desktop version
 * @type {{}}
 */
Migros.Tools.BackToTop = {};

Migros.Tools.BackToTop.init = function (node) {

    var topLink = new Migros.Tools.BackToTop.Link(node);
};

Migros.Tools.BackToTop.Link = function (node) {

    var that = this;
    this.node = node;

    var init = function () {

        // click event
        $(that.node).bind('click', function (event) {
            event.preventDefault();
            onClickHandler(event);
        });

        // scroll listener
        $(window).bind('scroll', function (event) {

            if ($(document).scrollTop() > $(window).height()) {

                if (!that.isVisible) {
                    show();
                }
            } else {
                if (that.isVisible) {
                    hide();
                }
            }
        });
    };

    /**
     * on click handler
     */
    var onClickHandler = function (e) {

        $('html, body').animate({
            scrollTop: '0'
        }, 'normal');

        if ($('.module-contact-dock').hasClass('active')) {
            $('.contact-dock li.dock-link.active').trigger('click');
        }

        try {
            Migros.Utils.trackPage(e);
        } catch (e) {
        }
    };

    /**
     * show
     */
    var show = function () {

        that.isVisible = true;

        $(that.node).stop(true, false).animate({

            'bottom': '0px'
        });
    };

    /**
     * hide
     */
    var hide = function () {

        that.isVisible = false;

        $(that.node).stop(true, false).animate({

            'bottom': '-100px'
        });
    };

    init();
};


/**
 * Back Button
 * @type {{}}
 */
Migros.Tools.BackButton = {};

Migros.Tools.BackButton.init = function (node) {

    var that = this;
    this.node = node;

    $(this.node).bind('click', function (e) {

        e.preventDefault();

        window.history.back();
    });
};


/**
 * Layer
 */
Migros.Tools.Layer = function (config) {

    var that = this;
    var code;
    var layerHeight = 0;
    var targetHeight;
    var layerWidth = 0;
    var targetWidth;
    var layerRatio;
    var targetSize = {};
    var paramString = '';

    var DIFF_HEIGHT = 88;
    var DIFF_HEIGHT_SMARTPHONE = 58;
    var MIN_HEIGHT = 200;
    var MIN_WIDTH = 200;

    var diffHeight;
    var desktopMaxWidth = 695;
    var tabletMaxWidth = 650;
    var smartphoneMaxWidth = $(window).width() - 0;
    var layerBorder = 50; // according to padding between teaser

    this.config = config;

    /**
     * init
     */
    var init = function () {

        var maxWidth = desktopMaxWidth;
        diffHeight = DIFF_HEIGHT;

        if (Migros.FeatureData.isTabletDevice()) {
            maxWidth = tabletMaxWidth;
            layerBorder = 20;
        } else if (Migros.FeatureData.isMobileDevice()) {
            maxWidth = smartphoneMaxWidth;
            layerBorder = 0;
            diffHeight = DIFF_HEIGHT_SMARTPHONE;
        }

        layerHeight = that.config.height || $(window).height();
        layerWidth = that.config.width || maxWidth;
//        layerWidth = (layerWidth < maxWidth) ? layerWidth : maxWidth;


        targetHeight = getLayerHeight();
        targetWidth = getLayerWidth();

        //seitenverhältnis
        layerRatio = layerWidth / layerHeight;
        targetSize = getLayerSize();

        getParamString();
        setupCode();

        if (!$('body').hasClass('smartphone') && !$('body').hasClass('tablet')) {
            // append code
            $('body').append(code);
            addEventHandler();

        } else {
            // if touch-device open new tab
            window.open(config.url, '_blank');
        }
    };

    /**
     * append code for iframe
     */
    var setupCode = function () {

        $('.lightbox-overlay').remove();

        code = '<div class="lightbox-overlay" style="display:none">\
                    <div class="lightbox-background"></div>\
                        <div class="lightbox-content" style="display:none; width: ' + targetSize.width + 'px">\
                        <div class="lighbox-iframe" style=" ';

        code += 'width: ' + targetSize.width + 'px; height: ' + targetSize.height + 'px;">\
                            <iframe id="mblayer" onload="this.focus();" frameBorder="0"';
        if(config.urlParam == ""){
            code += 'src="' + config.url + '"';
        }else{
            code += 'src="' + config.url + '?' + config.urlParam + '"';
        }
        code += paramString + ' ';
        code += '></iframe>\
        </div>\
        <a href="#close" title="' + globalText.screenReaderCloseLayer + '" class="lightbox-close background-light-green">\
        <div class="icon-sprite"></div>\
        </a>\
        </div>\
        </div>'
    };

    /**
     * addEventHandler
     * @returns {*}
     */
    var addEventHandler = function () {
        // close handler
        $('.lightbox-close').bind('click', function (e) {
            $('#mblayer').attr('src', 'about:blank');
            e.preventDefault();
            that.hide();
        });
        /*
         $('.lightbox-background').bind('click', function(e) {
         that.hide();
         });

         $('.lightbox-overlay').find('.content-width').bind('click', function(e){
         that.hide();
         });*/

        $(window).resize(function () {

            $('.lighbox-iframe').css({
                'height': getLayerSize().height + 'px',
                'width': getLayerSize().width + 'px'
            });

            $('.lightbox-content').css({
                'width': getLayerSize().width + 'px'
            });

        });
    };

    /**
     * util to calculate layer size
     * @returns {obj}
     */
    var getLayerSize = function () {

        var obj = {};
        var targetWindowHeight = $(window).height() - diffHeight;
        var windowRatio = $(window).width() / targetWindowHeight;
        var scrollbarXVisible = false;
        var scrollbarYVisible = false;


        if (that.config['keepRatio'] == 'true') {
            if (windowRatio > layerRatio) {

                obj.height = layerHeight;
                if (layerHeight > targetWindowHeight) {
                    obj.height = targetWindowHeight;
                    scrollbarYVisible = true;
                }

                if (obj.height < MIN_HEIGHT) {
                    obj.height = MIN_HEIGHT
                }

                obj.width = obj.height * layerRatio;
            } else {

                obj.width = layerWidth;
                if (layerWidth > ($(window).width() - 10)) {

                    obj.width = $(window).width() - 10;
                    scrollbarXVisible = true;
                }

                if (obj.height < MIN_WIDTH) {
                    obj.height = MIN_WIDTH
                }

                obj.height = obj.width * (1 / layerRatio);
            }
        } else {
            obj.height = layerHeight;
            if (layerHeight > targetWindowHeight) {
                obj.height = targetWindowHeight;
                scrollbarYVisible = true;
            }

            if (obj.height < MIN_HEIGHT) {
                obj.height = MIN_HEIGHT
            }

            obj.width = layerWidth;
            if (layerWidth > ($(window).width() - layerBorder)) {

                obj.width = $(window).width() - layerBorder;
                scrollbarXVisible = true;
            }
            if (obj.height < MIN_WIDTH) {
                obj.height = MIN_WIDTH
            }
        }

        if (navigator.platform.toUpperCase().indexOf('WIN') >= 0) {

            // adjust layer size, so that there are no additional scrollbars
            if (scrollbarXVisible) {
                obj.height = parseInt(obj.height);
                obj.height += 17;
            }

            if (scrollbarYVisible) {
                obj.width = parseInt(obj.width);
                obj.width += 17;
            }

        }
        return obj;
    };

    /**
     * util to calculate layer height
     * @returns {*}
     */
    var getLayerHeight = function () {

        var targetHeight;
        var availableWindowHeight = $(window).height() - diffHeight;

        if (availableWindowHeight < layerHeight) {
            targetHeight = availableWindowHeight;
        } else {
            targetHeight = layerHeight;
        }

        return targetHeight;
    };

    /**
     * util to caltulate layer width
     * @returns {*}
     */
    var getLayerWidth = function () {

        var targetWidth;
        var availableWindowWidth = $(window).width() - 10;

        if (availableWindowWidth < layerWidth) {
            targetWidth = availableWindowWidth;
        } else {
            targetWidth = layerWidth;
        }

        return targetWidth;
    }

    var getParamString = function () {
        $.each(config, function (i, el) {

            if (el != "width" && el != "height" && el != "attributes" && el != "showLayer" && el != "id") {

                paramString += ' ' + el + '=' + config[el];
            }
        });

        $.each(config['attributes'], function (e, el) {

            paramString += ' ' + el;
        });
    };

    /**
     * show
     */
    this.show = function () {

        $('.lightbox-overlay').stop(true, false).fadeIn('normal', function () {
            $('.lightbox-content').show();
            var scrolling = window.pageYOffset;
            $('body').addClass('noScroll').css({'top': -scrolling});
        });

        /*if($('body').hasClass('tablet')){
         $(document).bind('touchmove', false); //no scrolling on ipad
         $(document).bind('scroll', false); //no scrolling on ipad
         }*/

    };

    /**
     * hide
     */
    this.hide = function () {

        var bodyoffset = $('body').offset();
        $('.lightbox-content').stop(true, false).fadeOut('fast', function () {
            $('.lightbox-overlay').stop(true, false).fadeOut('fast', function () {
                $('.lightbox-overlay').remove();
                $('body').removeClass('noScroll').css({'top': 'auto'});
                $(document).scrollTop(Math.abs(bodyoffset.top));
            });
        });

        /*if($('body').hasClass('tablet')){
         $(document).unbind('touchmove'); //no scrolling on ipad
         $(document).unbind('scroll'); //no scrolling on ipad
         }*/
        //$(document).unbind('touchmove'); // unbind no scrolling on ipad
    };

    init();
};

/**
 * Find links with parameter "showLayer=true" and bind an click event
 * to those links that will open the target in an layer with an iframe.
 * Will also open a layer directly if the url contains the regarding hashtag.
 * param width (width of the iframe)
 * param height (height of the iframe)
 * param hashtag  (url hashtag for this highlight)
 * Example: http://www.heise.de?showLayer=true&width=1200&height=600&hashtag=example
 */
Migros.Tools.Layer.parseLinks = function () {
    if (!Migros.FeatureData.isEditMode()) {
        var layerLinkArray = [];
        $('a[href*="showLayer=true"]').each(function () {

            var that = this;
            var init = function () {
                var layerLink = new Migros.Tools.Layer.Link($(that));
                layerLinkArray.push();
            };

            init();
        });
    }
};

/**
 * Layer Link
 * @param node
 * @constructor
 */
Migros.Tools.Layer.Link = function (node) {

    var that = this;

    this.node = node;
    this.config = [];

    var init = function () {

        that.config = Migros.Tools.getUrlVars(that.node.attr('href'));
        that.config['url'] = Migros.Tools.getLayerUrl(that.node.attr('href'));
        that.config['urlParam'] = Migros.Tools.getLayerUrlParam(that.node.attr('href'));

        that.node.bind('click', function (e) {

            e.preventDefault();

            var layer = new Migros.Tools.Layer(that.config);

            layer.show();
        });
    };

    init();
};

Migros.Tools.getLayerUrl = function (url) {

    var str = url.substr(0, url.indexOf('showLayer') - 1);
    return str;
};

Migros.Tools.getLayerUrlParam = function (url) {

    var str = url.substr(url.indexOf('showLayer=true') + 14, url.length);
    return str;
};

/**
 * get url vars
 * @param url
 * @returns {Array}
 */
Migros.Tools.getUrlVars = function (url) {

    var ATTRIBUTES = "attributes";

    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    var hashAttributes = [];

    vars.push("attributes");
    vars[ATTRIBUTES] = (hashAttributes);

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');

        if (hash[1]) {
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        } else {
            vars[ATTRIBUTES].push(hash[0]);
        }
    }

    return vars;
};


/**
 * ------------- Components -------------
 */
/**
 * tab module
 * @type {{}}
 */
Migros.Components.TabModule = {};
Migros.Components.TabModule.init = function () {

    var tabList = $('.tab-module').find('ul');

    tabList.each(function () {

        var that = $(this);
        var active, links = that.find('.flags');
        var tabHeadline = $(that).parent().parent().find('h2');

        active = links.first().addClass('active');
        that.on('click', 'li .tab-link', function (e) {

            e.preventDefault();

            active.removeClass('active');
            active = $(this).parent().addClass('active');

            var activeIndex = links.index(active);

            if (activeIndex == 0) {
                links.removeClass('no-shadow');
            } else {
                links.removeClass('no-shadow').eq(activeIndex - 1).addClass('no-shadow');
            }

            var activeContent = $(this).parent().find('.tab-content');
            var modulePos = $(this).parents('.tab-module').offset();
            var contentPos = activeContent.offset();
            var targetX = modulePos.left - contentPos.left;

            if ((contentPos.left.toFixed(1)) != (modulePos.left.toFixed(1))) {
                activeContent.css({
                    'left': targetX
                })
            }

        });

        $(tabHeadline).bind('click', function () {
            $(this).parent().toggleClass('unclosed');
        });

    });
};


/**
 * topstage carousel at top of homepage
 * @type {{}}
 */
Migros.Components.Topstage = {};
Migros.Components.Topstage.init = function () {

    var config = {};
    $('#top-stage').carousel(config);
    if ($('body').hasClass('smartphone')) {
	    window.addEventListener("orientationchange", function () {
	    	top.location.reload()
	    });
    }
};


/**
 * product presentation as accordeon
 * @type {{}}
 */
Migros.Components.Accordeon = {};
Migros.Components.Accordeon.init = function () {

    var config = {};
    $('.module-accordeon').accordeon(config);
};


/**
 * details as collapsible component
 * @type {{}}
 */
Migros.Components.Collapsible = {};
Migros.Components.Collapsible.init = function () {

    var config = {};
    $('.module-collapsible-component').accordeon(config);


    $('.module-collapsible-component').find('.text-box').bind('click', function (e) {
        //wenn das kein klick auf das href ist dass href trigger
        if (e.target.tagName !== 'a' && e.target.tagName !== 'A') {
            //jetzt das visible a trigger

            $(this).find('a:visible').on('custom', function(e){
                $(this).trigger('click');
                Migros.Utils.trackPage(e);
            });

            $(this).find('a:visible').trigger('custom');

        }
    });

};


/**
 * navigation
 * @type {{}}
 */
Migros.Components.Navigation = {};
Migros.Components.Navigation.Desktop = {};
Migros.Components.Navigation.Mobile = {};

/**
 * setup desktop navigation
 */
Migros.Components.Navigation.Desktop.init = function () {

    var MOUSE_LOCS_TRACKED = 3;

    var midNaviIsOver = false;
    var overCount = 0;
    var headNaviElements = $('#module-nav-main .nav-main-super-items').find('li');
    var mainNaviElements = $('#module-nav-main .nav-main-mid-items');
    var mouseLocs = [];
    var timeoutId = null;

    var l = headNaviElements.length;
    for (var i = 0; i < l; i++) {
        var headNaviElement = new HeadNaviElement(headNaviElements[i], i);
    }

    // adjust Navi height in edit mode, if no navi item is selected
    var activeCount = 0;
    $.each($('.nav-main-link'), function (i, el) {
        if ($(el).hasClass('active')) {
            activeCount++;
        }
    });
    if (activeCount == 0) {
        $('li.nav-main-item').css({'height': 'auto'});
    }

    /**
     * Head Navi elements
     * @param node
     * @param id
     * @constructor
     */
    function HeadNaviElement(node, id) {

        var that = this;
        this.node = node;
        this.id = id;

        $(this.node).bind('click', function () {

            headNaviElements.removeClass('active');
            $(this).addClass('active');

            mainNaviElements.removeClass('active');
            $(mainNaviElements[that.id]).addClass('active');
        });

        var l = $(mainNaviElements[this.id]).find('.nav-main-item').length;
        for (var i = 0; i < l; i++) {
            var midNaviElement = new MidNaviElement($(mainNaviElements[this.id]).find('.nav-main-item')[i], i);
        }

        // mousemove
        $('.nav-main-mid-content').bind('mousemove', function (e) {

            mouseLocs.push({x: e.pageX, y: e.pageY});
            if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
                mouseLocs.shift(); //first item removed
            }
        });
    };

    /**
     * Sub Navi
     * @param node
     * @param id
     * @constructor
     */
    function MidNaviElement(node, id) {
        var SUB_NAVI_OPEN_DELAY = 200;
        var SUB_NAVI_OPEN_SPEED = 450; //faster: 300
        var SUB_NAVI_CLOSE_DELAY = 100;
        var SUB_NAVI_CLOSE_SPEED = 240;

        var that = this;
        var lastDelayLoc = null;
        var isEditMode = false;
        var rollOutProcess = false;

        this.node = node;
        this.id = id;
        this.outTimeout = null;
        this.openTimeout = null;
        this.isActive = false;

        var targetHeight = $(that.node).find('.nav-main-sub-content').height();

        if ($('body').hasClass('desktop') || $('body').hasClass('tablet')) {
            if (targetHeight < 360) {
                targetHeight = '360px'
            }
        }

        if ($('body').hasClass('edit')) {
            targetHeight = '700px';
            isEditMode = true;
        }

        $(that.node).find('.nav-main-sub-content').css({
            'display': 'none',
            'visibility': 'visible'
        });

        if (!isEditMode) { // no mouse interaction in edit mode
            // event handler for touch devices
            if (!Migros.FeatureData.isTouchDevice()) {

                // mouseenter
                $(this.node).bind('mouseenter', function () {

                    overCount = 1;

                    // Cancel any previous activation delays
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                    possiblyActivate();
                });

                // mouseleave
                $(this.node).bind('mouseleave', function () {

                    overCount = 0;

                    clearTimeout(that.outTimeout);
                    that.outTimeout = null

                    clearTimeout(that.openTimeout);
                    that.openTimeout = null

                    clearTimeout(timeoutId);
                    timeoutId = null;

                    that.outTimeout = setTimeout(function () { //navi einklappen, wenn kein navipunkt mehr rollovered

                        deactivate();
                    }, SUB_NAVI_CLOSE_DELAY);
                });

            } else { // event handler for no touch devices
                // touch
                $(this.node).find('.nav-main-link').bind('click', function (e) {
                    e.preventDefault();

                    if (!$(that.node).hasClass('active')) {
                        activate();
                    } else {
                        deactivate();
                    }
                });

                $(this.node).find('.nav-main-sub-content').bind('click', function (e) {

                    deactivate();
                });
            }
        } else {

            if ($(this.node).find('.nav-main-link').hasClass('active')) {
                $(this.node).addClass('active');
            }
        }


        // possibly activate menu item
        var possiblyActivate = function () {

            var delay = activationDelay();
            if (delay) {
                timeoutId = setTimeout(function () {
                    possiblyActivate();

                }, delay);
            } else {
                activate();
            }
        };

        /**
         * Return the amount of time that should be used as a delay before the
         * currently hovered row is activated.
         *
         * Returns 0 if the activation should happen immediately. Otherwise,
         * returns the number of milliseconds that should be delayed before
         * checking again to see if the row should be activated.
         *
         * https://github.com/kamens/jQuery-menu-aim
         */
        var activationDelay = function () {

            if (!overCount) {
                return 0;
            }

            var offset = $('.nav-main-columns-7').offset(),
                upperLeft = {
                    x: offset.left,
                    y: offset.top
                },
                upperRight = {
                    x: offset.left + $('.nav-main-columns-7').outerWidth(),
                    y: upperLeft.y
                },
                lowerLeft = {
                    x: offset.left,
                    y: offset.top + $('.nav-main-columns-7').outerHeight()
                },
                lowerRight = {
                    x: offset.left + $('.nav-main-columns-7').outerWidth(),
                    y: lowerLeft.y
                },
                loc = mouseLocs[mouseLocs.length - 1],
                prevLoc = mouseLocs[0];

            if (!loc) {
                return 0;
            }

            if (!prevLoc) {
                prevLoc = loc;
            }

            if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
                prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
                // If the previous mouse location was outside of the entire
                // menu's bounds, immediately activate.
                return 0;
            }

            if (lastDelayLoc &&
                loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
                // If the mouse hasn't moved since the last time we checked
                // for activation status, immediately activate.
                return 0;
            }


            function slope(a, b) {
                return (b.y - a.y) / (b.x - a.x);
            }

            var decreasingCorner = lowerRight,
                increasingCorner = lowerLeft;

            var decreasingSlope = slope(loc, decreasingCorner),
                increasingSlope = slope(loc, increasingCorner),
                prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                prevIncreasingSlope = slope(prevLoc, increasingCorner);


            if (decreasingSlope < prevDecreasingSlope &&
                increasingSlope > prevIncreasingSlope) {
                // Mouse is moving from previous location towards the
                // currently activated submenu. Delay before activating a
                // new menu row, because user may be moving into submenu.
                lastDelayLoc = loc;
                return SUB_NAVI_OPEN_SPEED;
            }

            lastDelayLoc = null;
            return 0;
        };

        // show subnavi menu
        var activate = function () {

            $('.nav-main-sub-content').css({
                'display': 'none'
            });

            $('.nav-main-item').removeClass('active');

            //$(that.node).addClass('active');

            if (!midNaviIsOver) { // wenn noch nicht ausgeklappt
                //midNaviIsOver = true;

                if(that.openTimeout){
                    clearTimeout(that.openTimeout);
                    that.openTimeout = null;
                }

                that.openTimeout = setTimeout(function(){

                    $(that.node).addClass('active');

                    $(that.node).find('.nav-main-sub-content').css({
                        'display': 'block',
                        'height': '0px'
                    });

                    $(that.node).find('.nav-main-sub-content').stop(true, false).animate({
                            'height': targetHeight
                        }, SUB_NAVI_OPEN_SPEED
                    );
                    $('.main-nav-layunder').stop().fadeIn(SUB_NAVI_OPEN_SPEED).addClass('active');
                    midNaviIsOver = true;

                }, SUB_NAVI_OPEN_DELAY);

            } else {

                if (rollOutProcess) {

                    $(that.node).addClass('active');

                    $(that.node).find('.nav-main-sub-content').css({
                        'display': 'block'
                    });

                    $(that.node).find('.nav-main-sub-content').stop(true, false).animate({
                        'height': targetHeight
                    }, SUB_NAVI_OPEN_SPEED);
                } else {
                    $(that.node).addClass('active');
                    $(that.node).find('.nav-main-sub-content').css({
                        'height': targetHeight,
                        'display': 'block'
                    });
                }

                rollOutProcess = false;
            }
        };

        // hide subnavi menu
        var deactivate = function () {

            if (overCount == 0) {

                rollOutProcess = true;

                $(that.node).removeClass('active');
                $('.main-nav-layunder').removeClass('active').stop(false, false).fadeOut(SUB_NAVI_CLOSE_SPEED);
                $(that.node).find('.nav-main-sub-content').stop(true, true).animate({
                    'height': '0px'
                }, SUB_NAVI_CLOSE_SPEED, function () { //160

                    rollOutProcess = false;

                    if (overCount == 0) {

                        midNaviIsOver = false;

                        $(this).css({
                            'display': 'none'
                        });

                    }

                });
            }
        };
    };
};

/**
 * setupMobileNavigation
 */
Migros.Components.Navigation.Mobile.init = function () {

    var that = this;
    this.superNavElements = [];

    var navSuperLinks = $('.nav-main-super-items > li');
    $.each(navSuperLinks, function (i, el) {
        var navElem = new Migros.Components.Navigation.Mobile.NavElement(el);
        that.superNavElements.push(navElem);
    });
};

/**
 * mobile navigation elements
 * @param node
 * @constructor
 */
Migros.Components.Navigation.Mobile.NavElement = function (node) {

    var that = this;

    this.node = node;
    this.subContent = $(this.node).find('.nav-main-mid-items');
    this.offsetHeight = 0;
    this.subNavElements = [];
    this.isActive = false;

    if ($(that.node).hasClass('active')) {

        that.isActive = true;

        $(that.node).find('.nav-main-super-item').bind('click', collapseMidNavigation);

        var navMidLinks = $(this.node).find('.nav-main-mid-items > li');
        $.each(navMidLinks, function (i, el) {
            var navElem = new Migros.Components.Navigation.Mobile.SubNavElement(el);

            that.subNavElements.push(navElem);
            that.offsetHeight += 31;
        });

        that.subContent.css({
            'height': 'auto'
        });

    } else {
        $(that.node).find('.nav-main-super-item').bind('click', expandMidNavigation);

        var navMidLinks = $(this.node).find('.nav-main-mid-items > li');
        $.each(navMidLinks, function (i, el) {
            var navElem = new Migros.Components.Navigation.Mobile.SubNavElement(el);

            that.subNavElements.push(navElem);
            that.offsetHeight += 31;
        });

        this.subContent.css({
            'height': '0px'
        });
    }

    function expandMidNavigation() {

        // collapse active elements
        $.each(Migros.Components.Navigation.Mobile.superNavElements, function (i, el) {
            if (el.isActive) {
                $(el.node).find('.nav-main-super-item').trigger('click');
            }
        });

        $(this).unbind();
        $(this).bind('click', collapseMidNavigation);
        $(this).parent().addClass('active');

        that.isActive = true;

        that.subContent.animate({
            'height': getTargetHeight()
        }, 400, function () {
            $(this).css({
                'height': 'auto'
            });
        });
    };

    function collapseMidNavigation() {
        that.isActive = false;

        $(this).unbind();
        $(this).bind('click', expandMidNavigation);
        $(this).parent().removeClass('active');

        that.subContent.animate({
            'height': '0px'
        }, 400);
    };

    function getTargetHeight() {
        var h;

        h = that.offsetHeight;

        var l = that.subNavElements.length;
        while (l--) {

            var elem = that.subNavElements[l];

            if (elem.isActive) {
                h += elem.height;
            }
        }

        return h;
    }

};

Migros.Components.Navigation.Mobile.SubNavElement = function (node) {

    var that = this;

    this.node = node;
    this.subContent = $(this.node).find('.nav-main-sub-content');
    this.height = this.subContent.height();
    this.isActive = $(that.node).hasClass('active') ? true : false;

    that.subContent.css({
        'height': '0px'
    });

    if (that.subContent.length > 0) {

        if (that.isActive) {

            that.subContent.css({
                'height': 'auto'
            });

            $(that.node).find('.nav-main-mid-item').bind('click', collapseSubNavigation);
        } else {
            $(that.node).find('.nav-main-mid-item').bind('click', expandSubNavigation);
        }

    } else {
        $(that.node).addClass('link');
    }

    function expandSubNavigation() {

        that.isActive = true;

        $(this).unbind();
        $(this).bind('click', collapseSubNavigation);

        $(this).parent().addClass('active');
        that.subContent.animate({
            'height': that.height
        }, 400);
    };

    function collapseSubNavigation() {

        that.isActive = false;

        $(this).unbind();
        $(this).bind('click', expandSubNavigation);

        $(this).parent().removeClass('active');
        that.subContent.animate({
            'height': '0px'
        }, 400);
    };
};


/**
 * Header
 * @type {{}}
 */
Migros.Components.Header = {};
Migros.Components.Header.Mobile = {};

/**
 * setupMobileHeader
 */

Migros.Components.Header.Mobile.init = function () {

    var touch = "ontouchend" in document,
        endEvent = (touch) ? 'touchend' : 'mouseup',
        moveEvent = (touch) ? 'touchmove' : 'mousemove';

    function addEventListener() {

        $('.nav-top-selected-language').bind('click', showLanguageSelection);
        $('#header').find('.nav-search-submit').bind('click', extendSearchField);
        $('#header').find('.navigation-icon').bind('click', extendMainNavigation);
        $('#header').find('.nav-search-field input').bind('blur', collapseSearchField);

        $(window).resize(function () {
            resizeHeader();
        });

        // MB-606
        var observer = new MutationObserver(function(mutations) {
        	  mutations.forEach(function(mutation) {
        		if( $(mutation.target).attr('id') == 'ifs-rl-modal'){
        		    if($(mutation.target).css('display') === 'block' ){
        		    	$('#module-nav-main-mobile .content-max-width').css({
        		    		'height':'90vh',
        			    	'overflow':'hidden'
        		    	});
        		    }else{
        		    	$('#module-nav-main-mobile .content-max-width').css({
        		    		'height':'auto',
        			    	'overflow':'auto'
        		    	});
        		    }
        		}
        	  });
        	});

        var config = { attributes: true, childList: true, characterData: true };

        function checkForDiv(){
        	if($('#ifs-rl-modal').length  === 0){
        		setTimeout(checkForDiv, 250);
        	}else{
                var myTarget = document.querySelector('#ifs-rl-modal');
                observer.observe( myTarget, config);
        	}
        }
        setTimeout(checkForDiv, 1000);
        // MB-606


    };

    function resizeHeader() {

        var targetWidth = getSearchInputSize();
        $('#header').find('.nav-search-field input').css({width: targetWidth});
    };

    function showLanguageSelection(e) {

        $('.nav-top-language').find('ul').addClass('active');

        $('.nav-top-selected-language').unbind();
        $('.nav-top-selected-language').bind('click', hideLanguageSelection);

        $('body').bind(endEvent, hideLanguageSelection);
        $('body').bind(moveEvent, hideLanguageSelection);
    };

    function hideLanguageSelection(e) {

        if ($(e.target)[0].nodeName != "LI") { // excludes click on language

            $('body').unbind(endEvent, hideLanguageSelection);
            $('body').unbind(moveEvent, hideLanguageSelection);

            $('.nav-top-language').find('ul').removeClass('active');
            $('.nav-top-selected-language').unbind();

            setTimeout(function () {
                $('.nav-top-selected-language').bind('click', showLanguageSelection);
            }, 1000);
        }
    };

    function extendSearchField(e) {

        e.preventDefault();

        var $input = $('#header').find('.nav-search-field').find('input');
        var targetWidth = getSearchInputSize();

        $input.css({width: targetWidth});


        $('#header').addClass('search-active');
        $input.focus();

        $('#header').find('.nav-search-submit').unbind();
        $('#header').find('.nav-search-submit').bind('click', submitSearch);
    };

    function submitSearch(e) {

        $('#header').find('.nav-search-submit').unbind();
        $('#header').find('.nav-search-submit').bind('click', extendSearchField);
    };

    function collapseSearchField(e) {

        setTimeout(function () {
            var targetWidth = 0;
            $('#header').find('.nav-search-field input').css({width: targetWidth});
            $('#header').removeClass('search-active');

            $('#header').find('.nav-search-submit').unbind();
            $('#header').find('.nav-search-submit').bind('click', extendSearchField);
        }, 200);
    };

    function extendMainNavigation(e) {
        e.preventDefault();


        if($('#if-search').length > 0){
        	$('#ifs-sb-searchfield').val('');
        	$('#if-search')[0].reset();
        }

        $('html').addClass('nav-active');
        setTimeout(function () {
            $('#header').find('.navigation-icon').unbind();
            $('#header').find('.navigation-icon').bind('click', collapseMainNavigation);

            $('#migros-content-mobile').unbind();
        }, 1000);
    };

    function collapseMainNavigation(e) {

        e.preventDefault();

        $('html').addClass('nav-inactive');
        setTimeout(function () {
            $('#header').find('.navigation-icon').unbind();
            $('#header').find('.navigation-icon').bind('click', extendMainNavigation);
        }, 1000);

        $('#migros-content-mobile').unbind();
        $('#migros-content-mobile').bind('webkitTransitionEnd', function (event) {

            $('html').removeClass('nav-active');
            $('html').removeClass('nav-inactive');

            if($('#if-search').length > 0){
            	//$('#ifs-sb-searchfield').val('').focus();
            }

            $('#module-nav-main-mobile').scrollTop(0);
        });
    };

    function getSearchInputSize() {

        var size = $(window).width() - 45 - 52 - 12;

        return size;
    };

    addEventListener();
};


/**
 * Footer
 * @type {{}}
 */
Migros.Components.Footer = {};
Migros.Components.Footer.Mobile = {};
Migros.Components.Footer.Mobile.init = function () {
    $('.link-accordeon').bind('click', expandLinkAccordeon);
};


/**
 * ------------- Additional functions -------------
 */
function expandLinkAccordeon() {
    $(this).parent().addClass('active');
    $(this).addClass('active').parent().find('.content').css({
        height: 'auto'
    });

    $('.link-accordeon').unbind();
    $('.link-accordeon').bind('click', collapseLinkAccordeon);
};

function collapseLinkAccordeon() {
    $(this).parent().removeClass('active');
    $(this).removeClass('active').parent().find('.content').css({
        height: '0px'
    });

    $('.link-accordeon').unbind();
    $('.link-accordeon').bind('click', expandLinkAccordeon);
};

function initResizeHandler() {

    $(window).bind('resize', function () {

        if ($('#header').hasClass('search-active')) {

            var targetWidth = 0;
            $('#header').find('.nav-search-field input').css({width: targetWidth});
            $('#header').removeClass('search-active');
            $('#header').find('.nav-search-submit').unbind();
            $('#header').find('.nav-search-submit').bind('click', extendSubmitField);
        }
    });
};

function initContactDock() {

    var lastActive = -1,
        startOffset = $('.module-contact-dock').position(),
        dockOffset = null,
        pageOffset = null,
        contentHeight = null,
        displayHeight = null,
        dockHeight = $('.contact-dock').height(),
        glassPane = '<div class="pane"></div>',
        closeButton = '<div class="dock-close background-light-green"><div class="icon-sprite"></div></div>',
        iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
        desktop = $('body').hasClass('desktop'),
        tablet = $('body').hasClass('tablet'),
        mobile = $('body').hasClass('smartphone');

    if (iOS == false) {
        if (tablet) {
           var scrolltime = false;
            $(document).on('touchmove', function () {
                $('.contact-dock').addClass('hidden');
                if (scrolltime) {
                    clearInterval(scrolltime);
                }
                scrolltime = setTimeout(afterScroll, 250);
            });
        }
    }

    if (tablet) {
        displayHeight = $(window).height();
        $('.contact-dock-layer').css({'top': displayHeight});
        $('.module-contact-dock').prepend(glassPane);
        $('.wrapper').prepend(closeButton);
        initCloseButton();
    }

    function afterScroll() {
        $('.contact-dock').removeClass('hidden');
        $('#header').removeClass('hidden');
    }

    if (tablet || mobile) {
        $('input, textarea').bind('focus', function () {
            $('.contact-dock').addClass('hidden');
        });
        $('input, textarea').bind('blur', function () {
            $('.contact-dock').removeClass('hidden');
        });
    }

    if(($('body').hasClass('desktop') || $('body').hasClass('all')) && $(window).height() <= 775){
        $('.module-contact-dock').css({'top':400,'position':'absolute'});

        $(window).scroll(function(){
            if($(window).scrollTop() >= 225){
                if(!$('.module-contact-dock').hasClass('docked')){
                    $('.module-contact-dock').css({'top':175,'position':'fixed'}).addClass('docked');
                }
            }else {
                if($('.module-contact-dock:not(.active)').hasClass('docked')) {
                    $('.module-contact-dock').css({'top': 400, 'position': 'absolute'}).removeClass('docked');
                }
            }
        })
    }
    $(document).on('click', '.contact-dock li.dock-link', function (e) {

        e.preventDefault();
        if ($('body').hasClass('desktop') || $('body').hasClass('all')) {
            if (lastActive < 0) {

                try {
                    Migros.Utils.trackPage(e);
                } catch (e) {
                }

                $('.contact-dock li.dock-link').unbind();
                dockOffset = $('.module-contact-dock').offset();
                $('.module-contact-dock').css({'overflow':'visible'}); // wegen MB-108
                lastActive = $(this).index('.contact-dock li.dock-link');
                $('.contact-dock-layer .layer-content').eq(lastActive).show();
                $('.contact-dock-layer').animate({right: '51px'}, 400, function () {
                    $('.contact-dock li.dock-link').eq(lastActive).addClass('active');
                    $('.module-contact-dock').addClass('active').css({'top': dockOffset.top});
                    $('.contact-dock li.dock-link').bind();
                });

            } else if (lastActive >= 0 && !$(this).hasClass('active')) {

                try {
                    Migros.Utils.trackPage(e);
                } catch (e) {
                }

                $('.contact-dock li.dock-link').unbind();
                $('.module-contact-dock').css({'overflow':'visible'}); // wegen MB-108
                $('.contact-dock-layer .layer-content').eq(lastActive).hide();
                $('.contact-dock li.dock-link').eq(lastActive).removeClass('active');
                lastActive = $(this).index('.contact-dock li.dock-link');
                $('.contact-dock-layer .layer-content').eq(lastActive).show();
                $(this).addClass('active');
                $('.contact-dock li.dock-link').bind();
            } else {
                $('.contact-dock li.dock-link').unbind();
                $('.contact-dock-layer').animate({right: '-330px'}, 400, function () {
                    $('.contact-dock-layer .layer-content').eq(lastActive).hide();
                    lastActive = -1;
                    var animateTop = startOffset.top - (dockOffset.top - $(document).scrollTop());
                    $('.dock-link').removeClass('active');
                    $('.module-contact-dock').animate({top: '+=' + animateTop}, 400, function () {
                        $('.module-contact-dock').removeClass('active').css({'top': startOffset.top});
                        $('.module-contact-dock').css({'overflow':'hidden'}); // wegen MB-108
                    });
                    $('.contact-dock li.dock-link').bind();
                });
            }
        } else if ($('body').hasClass('tablet')) {
            if (lastActive < 0) { // first open

                try {
                    Migros.Utils.trackPage(e);
                } catch (e) {
                }

                displayHeight = $(window).height();
                pageOffset = window.pageYOffset;
                $('.module-contact-dock').addClass('active');
                lastActive = $(this).index('.contact-dock li.dock-link');
                contentHeight = $('.layer-content').eq(lastActive).outerHeight();
                if (displayHeight - dockHeight > contentHeight) {
                    $('.wrapper').css({'bottom': '0', 'top': 'auto'});
                } else {
                	$('.contact-dock-layer .layer-content').eq(lastActive).addClass('long-content');
                    $('.wrapper').css({'top': '0', 'bottom': 'auto'});
                }
                $(this).addClass('active');
                $('#migros-wrapper').addClass('sticky').css({'top': -pageOffset});
                $('.contact-dock-layer .layer-content').eq(lastActive).addClass('active');
                $('.contact-dock-layer').animate({'top': '0'}, 0);
                $(window).scrollTop(0);

            } else if (lastActive >= 0 && !$(this).hasClass('active')) {

                try {
                    Migros.Utils.trackPage(e);
                } catch (e) {
                }

                var that = $(this);
                displayHeight = $(window).height();
                $('.contact-dock-layer').animate({'top': displayHeight}, 0, function () {
                    $('.contact-dock li.dock-link').eq(lastActive).removeClass('active');
                    $('.contact-dock-layer .layer-content').eq(lastActive).removeClass('active');
                    lastActive = that.index('.contact-dock li.dock-link');
                    contentHeight = $('.layer-content').eq(lastActive).outerHeight();
                	$('.contact-dock-layer .layer-content').removeClass('long-content');
                    if (displayHeight - dockHeight > contentHeight) {
                        $('.wrapper').css({'bottom': '0', 'top': 'auto'});
                    } else {
                    	$('.contact-dock-layer .layer-content').eq(lastActive).addClass('long-content');
                        $('.wrapper').css({'top': '0', 'bottom': 'auto'});
                    }
                    that.addClass('active');
                    $('.contact-dock-layer .layer-content').eq(lastActive).addClass('active');
                    $('.contact-dock-layer').animate({'top': '0'}, 0);
                });


            } else {
                displayHeight = $(window).height();
                $('.contact-dock-layer').animate({'top': displayHeight}, 0, function () {
                    $('.dock-link').removeClass('active');
                    $('.contact-dock-layer .layer-content').eq(lastActive).removeClass('active');
                    $('#migros-wrapper').removeClass('sticky').css({'top': 'auto'});
                    $('.module-contact-dock').removeClass('active');
                    lastActive = -1;
                    $(window).scrollTop(pageOffset);
                });

            }
        } else if ($('body').hasClass('smartphone')) {
            if (lastActive < 0) {

                try {
                    Migros.Utils.trackPage(e);
                } catch (e) {
                }

                currentScroll = $(window).scrollTop();
                $('.module-contact-dock').addClass('active');
                $('html').addClass('doc-active');
                $('body').append(glassPane);
                $('.pane').css({height: '100%'});
                $('.pane').show();
                $('#module-nav-main-mobile, #migros-content-mobile').css({'display': 'none'});
                lastActive = $(this).index('.contact-dock li.dock-link');
                $(this).addClass('active');
                $('body, html').animate({scrollTop: '0px'}, 250, function () {
                    $('.contact-dock-layer .layer-content').eq(lastActive).prepend(closeButton).show().addClass('active');
                    initCloseButton();
                });

            } else if (lastActive >= 0 && !$(this).hasClass('active')) {

                try {
                    Migros.Utils.trackPage(e);
                } catch (e) {
                }

                $('.contact-dock li.dock-link').eq(lastActive).removeClass('active');
                $('.contact-dock-layer .layer-content').eq(lastActive).hide().removeClass('active');
                $('.dock-close').remove();
                lastActive = $(this).index('.contact-dock li.dock-link');
                $(this).addClass('active');
                $('body, html').animate({scrollTop: '0px'}, 250, function () {
                    $('.contact-dock-layer .layer-content').eq(lastActive).prepend(closeButton).show().addClass('active');
                    initCloseButton();
                });
            } else {
                $(this).removeClass('active');
                $('.pane').hide();
                $('.contact-dock-layer .layer-content').eq(lastActive).hide().removeClass('active');
                $('.dock-close').remove();
                $('#module-nav-main-mobile, #migros-content-mobile').removeAttr('style');
                $('.pane').remove();
                lastActive = -1;
                $('body, html').animate({scrollTop: currentScroll}, 250);
                $('.module-contact-dock').removeClass('active');
                $('html').removeClass('doc-active');

            }
        }

    });

    if (Migros.FeatureData.isTouchDevice()) {
        window.addEventListener("orientationchange", function () {
            if (tablet && lastActive != -1) {
                var active = lastActive;
                displayHeight = $(window).height();
                $('.contact-dock li.dock-link').eq(active).trigger('click');
                $('.contact-dock-layer').animate({'top': displayHeight}, 0, function () {
                    $('.contact-dock li.dock-link').eq(active).trigger('click');
                });
            }
        }, false);
    }

    $('.contact-dock .flap').bind('click', function () {
        $('.contact-dock').toggleClass('active');
    });

    if (mobile) {
        $('.contact-dock').addClass('active');
    }

    function initCloseButton() {
        $('.dock-close').bind('click', function () {
            $('.contact-dock li.dock-link.active').trigger('click');
        });
    }

}

function iePlaceholder() {
    $("input[type=textbox]").each(function () {
        if ($(this).val().length == 0)
            $(this).val($(this).attr("placeholder"));
    });

    $(document).on('focus', 'input[type=textbox]', function () {
        if ($(this).val() == $(this).attr("placeholder"))
            $(this).val('');
    });

    $(document).on('blur', 'input[type=textbox]', function () {
        if ($(this).val().length == 0)
            $(this).val($(this).attr("placeholder"));
    });
}

function initTouchScroll() {
    function isTouchDevice() {
        /* Added Android 3.0 honeycomb detection because touchscroll.js breaks
         the built in div scrolling of android 3.0 mobile safari browser */
        if ((navigator.userAgent.match(/android 3/i)) ||
            (navigator.userAgent.match(/honeycomb/i)))
            return false;
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    function touchScroll(id) {
        if (isTouchDevice()) {
            var scrollStartPosY = 0;
            var scrollStartPosX = 0;

            document.getElementById(id).addEventListener("touchstart", function (event) {
                scrollStartPosY = this.scrollTop + event.touches[0].pageY;
                scrollStartPosX = this.scrollLeft + event.touches[0].pageX;
            }, false);

            document.getElementById(id).addEventListener("touchmove", function (event) {
                if ((this.scrollTop < this.scrollHeight - this.offsetHeight &&
                    this.scrollTop + event.touches[0].pageY < scrollStartPosY - 5) ||
                    (this.scrollTop != 0 && this.scrollTop + event.touches[0].pageY > scrollStartPosY + 5))
                    event.preventDefault();
                if ((this.scrollLeft < this.scrollWidth - this.offsetWidth &&
                    this.scrollLeft + event.touches[0].pageX < scrollStartPosX - 5) ||
                    (this.scrollLeft != 0 && this.scrollLeft + event.touches[0].pageX > scrollStartPosX + 5))
                    event.preventDefault();
                this.scrollTop = scrollStartPosY - event.touches[0].pageY;
                this.scrollLeft = scrollStartPosX - event.touches[0].pageX;
            }, false);
        }
    }

    touchScroll('module-nav-main-mobile');
}

$(window).load(function () {

    var ua = jQuery.browser;
    var longVersion = ua.version.split('.');
    var version = longVersion[0];
    if (ua.msie) {
        $('body').addClass('ie ie' + version);
    } else if (ua.mozilla) {
        $('body').addClass('mozilla mozilla' + version);
    } else if (ua.opera) {
        $('body').addClass('opera opera' + version);
    } else if (ua.safari) {
        $('body').addClass('safari safari' + version);
    } else if (ua.webkit) {
        $('body').addClass('webkit webkit' + version);
    }
    if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 6_\d/i) != null) {
        $('body').addClass('iOS6');
    } else if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i) != null) {
        $('body').addClass('iOS7');
    } else if (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 5_\d/i) != null) {
        $('body').addClass('iOS5');
    }
    if (navigator.userAgent.match(/iPad/i) != null) {
        $('body').addClass('iPad');
    } else if (navigator.userAgent.match(/iPhone/i) != null) {
        $('body').addClass('iPhone');
    }
    if (navigator.userAgent.indexOf("Android") >= 0) {

        $('body').addClass('android');

        var androidversion = parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8));
        if (androidversion < 2.4) {
            $('body').addClass('android_lt_24');
        } else {
            $('body').addClass('android_gte_24');
        }
    }
    if (navigator.userAgent.indexOf("Chrome") >= 0) {
        $('body').addClass('chrome');

    }

});


/**
 * ------------- init -------------
 */
/**
 * init website
 */
function init() {

    Migros.Pages.init();
}


Migros.Components.Helper = {};

Migros.Components.Helper.getObjectSize = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
Migros.Components.Helper.isOnScreen = function (obj) {

    var _this = obj;
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = _this.offset().top;
    bounds.bottom = bounds.top + _this.outerHeight();
    return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
};

Migros.Components.Slider = function (configuration) {

    var configurationDefaults = {
        showImagesOnLoad: false,
        slideShowType: 'image-text',
        theme: '',
        wrapper: '',
        content: null,
        animationContainer: null,
        bxSliderInfiniteLoop: false,
        bxSliderPreloadImages: 'visible',
        bxSliderShowPager: true,
        bxSliderShowControls: true,
        bxSliderAutoplay: false,
        startOnLoad: true,
        animateHeadline: true,
        animationSpeed: 'slow',
        animationDelay: 300,
        bxSliderOnLoad: function () {
        },
        bxSliderOnSlideBefore: function () {
        },
        bxSliderOnSlideAfter: function () {
        },
        bxSliderOnSlideNext: function () {
        },
        bxSliderOnSlidePrev: function () {
        }
    };
    var config = {};
    config = $.extend({}, configurationDefaults, configuration);

    var imagesOnLoad = config.showImagesOnLoad,
        sliderTheme = config.theme != '' ? config.theme : '',
        sliderType = config.slideShowType,
        sliderContent = config.content,
        bxConfig = {},
        $node = config.wrapper,
        $animationNode = config.animationContainer,
        headlineAnimation = config.animateHeadline,
        startOnload = config.startOnLoad,
        defaultanimationSpeed = config.animationSpeed;
    defaultanimationDelay = config.animationDelay;


    var init = function () {
        if (!$node.hasClass('loaded')) {

            imagesOnLoad = true;


            if (sliderType == 'image-text') {
                $node.addClass(sliderTheme);
                $node.addClass('loaded');

                initSlideshowImageText(imagesOnLoad);

            } else if (sliderType == 'images') {
                $node.addClass(sliderTheme);
                $node.addClass('loaded');
                initSlideshowImageOnly();

            }
        }
    };

    var initSlideshowImageText = function (loadImages) {


        var slideSpeed = 2000;
        bxConfig = {
            pause: 8000,
            speed: slideSpeed,
            adaptiveHeight: false,
            useCss: false,
            infiniteLoop: config.infiniteLoop,
            preloadImages: config.bxSliderPreloadImages,
            pager: config.bxSliderShowPager,
            controls: config.bxSliderShowControls,
            auto: config.bxSliderAutoplay,
            onSliderLoad: function (currentIndex) {

                $node.find('.image-text').css('opacity', '1');
                $('<div class="overlay"/>').appendTo($node.find($('.bx-wrapper .bx-viewport')));
                $('<div class="overlay right"/>').appendTo($node.find($('.bx-wrapper .bx-viewport')));

                $('a.bx-next,a.bx-prev').bind('click', function (e) {
                    e.preventDefault();
                    $node.find('a').each(function () {
                        $(this).on('click', function (e) {
                            try {
                                Migros.Components.Utils.trackPage(e);
                            } catch (e) {
                            }
                        });

                    });
                });


            }
        };

        if (loadImages) {
            $node.find($('span[data-img-src]')).each(function () {
                $('<img src="' + $(this).attr('data-img-src') + '"/>').appendTo($(this));
            });
        }

        var slider = $node.find($('.bxslider')).bxSlider(bxConfig);
    };


    var initSlideshowImageOnly = function () {

        if (sliderContent != null && $animationNode != null) {

            var slider = null;
            var startTimeout = null;
            var animTimeout = null;
            var maxSlideCount = -1;

            function getMaxSlideCount(){
            	return maxSlideCount;
            }

            function clearAnimations() {
                window.clearTimeout(animTimeout);
                window.clearTimeout(startTimeout);
            }

            bxConfig = {
                infiniteLoop: config.infiniteLoop,
                preloadImages: 'all',
                pager: config.bxSliderShowPager,
                controls: config.bxSliderShowControls,
                auto: config.bxSliderAutoplay,
                responsive: $('body').hasClass('desktop')?false:true,
                useCSS: false,
                onSliderLoad: function () {
                    var $imgNode = $node.find('.bxslider>li').eq(1);
                    playSlide($imgNode, 1);

                    if(!$("#migros-wrapper").hasClass("campaign") && !$("#migros-content-mobile").hasClass("campaign")){
                        var h = $node.find('.animation-wrapper').height();
                        $node.find('a.bx-next,a.bx-prev').css('top', (h / 2) - 3);
                    }

                    $node.find('a.bx-next,a.bx-prev').bind('click', function (e) {
                        e.preventDefault();
                    });

                    $node.find('.bx-pager-item').bind('click', function (e) {
                        clearAnimations()
                        e.preventDefault();
                        e.stopPropagation();
                    });

                    $node.find('.bx-pager-item').bind('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        clearAnimations()
                    	if($('.bx-pager-item').index($(e.target).parent()) !== slider.getCurrentSlide()){
                    	//console.log( slider.getCurrentSlide() , $('.bx-pager-item').index($(e.target).parent()) )
                    		slider.goToSlide( $('.bx-pager-item').index($(e.target).parent())) ;
                    	}
                    });

                    $node.find('a').each(function () {
                        $(this).on('click', function (e) {
                            try {
                                Migros.Utils.trackPage(e);
                            } catch (e) {
                            }
                        });

                    });

                    $node.find('.images').css('opacity', '1');
                    window.setTimeout(function(){
                    	if (sliderContent.slides[0].images[0].animationClass == 'no-animation') {
                    		$("<div style=\"background-image: url('" + sliderContent.slides[0].images[0].img + "');\"></div>").appendTo($node.find('.bx-clone:last-child .animation-wrapper'));
                    	}
                    	if (sliderContent.slides[maxSlideCount - 1].images[0].animationClass == 'no-animation') {
                    		$("<div style=\"background-image: url('" + sliderContent.slides[maxSlideCount - 1].images[0].img + "');\"></div>").appendTo($node.find('.bx-clone:first-child .animation-wrapper'));
                    	}
                    }, 1000);

                },
                onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                	//console.log('onSlideBefore', $slideElement, oldIndex, newIndex)
                	var currSlide = $slideElement.index() - 1;
                    var imgNo = 0;
                    if(sliderContent.slides[currSlide].images[imgNo].animationClass == 'no-animation'){
                    	$node.find('li').not('.bx-clone').not(':eq( ' + oldIndex + ' )').find($animationNode).find('div').remove();
                    	playSlide($slideElement);
                    }

                },

                onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                	//console.log('onSlideAfter')
                    currSlide = $slideElement.index();
                    if(sliderContent.slides[currSlide - 1].images[0].animationClass != 'no-animation'){
                    	$node.find('li').not('.bx-clone').find($animationNode).find('div').remove();
                        playSlide($slideElement);
                    }

                },
                onSlideNext: function ($slideElement, oldIndex, newIndex) {
                	//console.log('onSlideNext')
                    clearAnimations();
                	var currSlide = $slideElement.index() - 1;
                    var imgNo = 0;
                    if(sliderContent.slides[currSlide].images[imgNo].animationClass == 'no-animation'){
                    	$node.find('li').not('.bx-clone').not(':eq( ' + oldIndex + ' )').find($animationNode).find('div').remove();
                    	playSlide($slideElement);
                    }

                },
                onSlidePrev: function ($slideElement, oldIndex, newIndex) {
                	//console.log('onSlidePrev')
                    clearAnimations();
                    var currSlide = $slideElement.index() - 1;
                    var imgNo = 0;
                    if(sliderContent.slides[currSlide].images[imgNo].animationClass == 'no-animation'){
                    	$node.find('li').not('.bx-clone').not(':eq( ' + oldIndex + ' )').find($animationNode).find('div').remove();
                    	playSlide($slideElement);
                    }

                }
            };


            function playSlide($imgNode) {
                var currSlide = $imgNode.index() - 1;
                startTimeout = null;
                animTimeout = null;
                var imgNo = 0;
                var imagesLength = Migros.Components.Helper.getObjectSize(sliderContent.slides[currSlide].images);

                function anim() {

                    imgNo++;

                    if(typeof sliderContent.slides[currSlide].images[imgNo] !== "undefined") {
                        var animationTempo = sliderContent.slides[currSlide].images[imgNo].animationSpeed ? sliderContent.slides[currSlide].images[imgNo].animationSpeed : defaultanimationSpeed;
                        $("<div style=\"background-image: url('" + sliderContent.slides[currSlide].images[imgNo].img + "');\"></div>").appendTo($imgNode.find($animationNode)).addClass(sliderContent.slides[currSlide].images[imgNo].animationClass + ' ' + animationTempo);

                        window.clearTimeout(animTimeout);
                        if (imgNo + 1 < imagesLength) {
                            var nextAnimationDelay = sliderContent.slides[currSlide].images[imgNo+1].animationDelay ? sliderContent.slides[currSlide].images[imgNo+1].animationDelay : defaultanimationDelay;
                            animTimeout = window.setTimeout(anim, nextAnimationDelay);
                        }
                    }
                }

                if (sliderContent.slides[currSlide].images[imgNo].animationClass == 'no-animation') {
                    $("<div style=\"background-image: url('" + sliderContent.slides[currSlide].images[imgNo].img + "');\"></div>").appendTo($imgNode.find($animationNode));
                    var nextAnimationDelay = sliderContent.slides[currSlide].images[imgNo].animationDelay ? sliderContent.slides[currSlide].images[imgNo].animationDelay : defaultanimationDelay;
                    animTimeout = window.setTimeout(anim, nextAnimationDelay);
                } else {

                    startTimeout = window.setTimeout(function () {
                        var animationTempo = sliderContent.slides[currSlide].images[imgNo].animationSpeed ? sliderContent.slides[currSlide].images[imgNo].animationSpeed : defaultanimationSpeed;
                        $("<div style=\"background-image: url('" + sliderContent.slides[currSlide].images[imgNo].img + "');\"></div>").appendTo($imgNode.find($animationNode)).addClass(sliderContent.slides[currSlide].images[imgNo].animationClass + ' ' + animationTempo);
                        animTimeout = window.setTimeout(anim, 300);
                    }, 1500);
                }

            }

            if (headlineAnimation == true) {
                $node.find('.headline').addClass('bounce-from-top slow');
                $node.find('.text-container').addClass('slide-in-from-right slow');
            } else {
                $node.find('.headline').css('opacity', '1');
                $node.find('.text-container').css('opacity', '1');
            }

            slider = $node.find($('.bxslider')).bxSlider(bxConfig);
            maxSlideCount = slider.getSlideCount();
            $node.find('a.bx-next,a.bx-prev').on('click', function (e) {
                e.preventDefault();
            });

        }

    };


    if (startOnload) {
        init();
    } else {
        Function.prototype.debounce = function (threshold) {
            var callback = this;
            var timeout;
            return function () {
                var context = this, params = arguments;
                window.clearTimeout(timeout);
                timeout = window.setTimeout(function () {
                    callback.apply(context, params);
                }, threshold);
            };
        };
        function check() {
            var visible = Migros.Components.Helper.isOnScreen($node);
            if (visible) {
                init();
                $(window).unbind('scroll load', debounced);
            }
        }

        var debounced = check.debounce(50);
        $(window).bind('scroll load', debounced);
    }
};

var mobileAlertMessage = "";
var mobileAlertCounter = 24;
function mobileAlert(message) {
    mobileAlertMessage += message + "<br>";
    var $mobileAlert = $("#mobileAlert");
    if($mobileAlert.size() === 0) {
        $("<div id=\"mobileAlert\" style=\"position:fixed;top:50px;left:10px;z-index:10000;background-color:#00FF00;padding:5px;\">" + mobileAlertMessage + "</div>").prependTo('body');
    } else {
        $mobileAlert.html(mobileAlertMessage);
    }
    if(mobileAlertCounter-- === 0) {
        mobileAlertMessage = "";
        mobileAlertCounter = 24;
    }
}

function initModuleAdvantages(){
	var $modulAdvantages = $('.module-advantages');

	if($('body').hasClass('smartphone')){

		$('.module-advantages.collapse-copy .grid-1 ul').each(function (i, e) {
			if($(this).find('li').size() != 0){
				$(this).closest('.module-advantages.collapse-copy .grid-1').addClass('button-active');
			}
		});
		$modulAdvantages.each(function (i, e) {
			var $currentModulAdvantages = $(e);
	    	if($currentModulAdvantages.hasClass('collapse-copy')){
	    		$currentModulAdvantages.find('.grid-1').click(function(e){
	                e.preventDefault();
	                if($(this).find('.expanded').length > 0 && $(this).find('.expanded').css('display') === 'none'){
	                	$(this).addClass('active');
	                    $(this).find('img').fadeOut(200);
	                    $(this).find('.expanded').fadeIn(200);
	                }else{
	                	$(this).removeClass('active');
	                    $(this).find('img').fadeIn(800);
	                    $(this).find('.copytext-expanded').find('.expanded').fadeOut(200);
	                }
	        	});
	    	}
		});
	}else{

		$modulAdvantages.find('.expanded').each(function (i, e) {
			$(e).parent().find('.more-link').show();
			$(e).parent().addClass('active');
		});
    	$modulAdvantages.find('.more-link, .copytext').click(function(e){
            e.preventDefault();
            $(this).closest('.module-advantages').find('.expanded').hide();
            $(this).parent().find('.expanded').show();
    	});

    	$modulAdvantages.find('.expanded').click(function(e){
            e.preventDefault();
            $(this).closest('.copytext-expanded').find('.expanded').hide();
    	});
	}
}

function initModuleTimeline(){
	var $moduleTimeline = $('.module-timeline');
	var maxHeight = 0;
	var minHeight = 99999;

	$moduleTimeline.find('.timeline-content > div').each(function (i, e) {
		$(this).show();
		var thisHeight = $(this).find('.copy').height() + 50;
		if(maxHeight < thisHeight){
			maxHeight = thisHeight;
		}
		if(minHeight > thisHeight){
			minHeight = thisHeight;
		}
		$(this).attr('data-height', thisHeight);
		$(this).hide();
		if(i == 0 && $moduleTimeline.find('.timeline-content .content-0').hasClass('active')){
			// $moduleTimeline.find('.timeline-content .content-0').height( $(this).attr('data-height') );
			$moduleTimeline.find('.timeline-content .content-0').show();
			$moduleTimeline.find('.timeline-content').height(thisHeight);
		}
	});
	//$moduleTimeline.find('.timeline-content').css({'max-height':maxHeight, 'min-height':minHeight});

	$moduleTimeline.find('.timeline-image div').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            $moduleTimeline.find('.timeline-image div').removeClass('active');
            $(this).addClass('active');
            // $moduleTimeline.find('.timeline-content > div').removeClass('active');
            // $moduleTimeline.find('.timeline-content > div').height(0);
            // $moduleTimeline.find('.timeline-content .content-' + $(this).index()).height( $moduleTimeline.find('.timeline-content .content-' + $(this).index()).attr('data-height') );
            $moduleTimeline.find('.timeline-content > div').fadeOut(250);
            $moduleTimeline.find('.timeline-content .content-' + $(this).index()).fadeIn(250);
            $moduleTimeline.find('.timeline-content').height( $moduleTimeline.find('.timeline-content .content-' + $(this).index()).attr('data-height') );
            // $moduleTimeline.find('.timeline-content .content-' + $(this).index()).addClass('active');
        }
	});
}

function initmoduleCtaMulticolumn(){
	var $moduleCtaMulticolumn = $('.module-cta-multicolumn.floating').eq(0);

	if($moduleCtaMulticolumn.offset().top < 250 || ($('#migros-wrapper').hasClass('campaign') && $moduleCtaMulticolumn.offset().top < 700) ){
		$moduleCtaMulticolumn.clone().addClass('floating-box').appendTo( "#migros-wrapper" );
		$('.module-cta-multicolumn.floating-box').css({'top':  -$('.module-cta-multicolumn.floating-box').height() - 30 });

	    $(window).bind('scroll', updateCTAPosition );

	    function updateCTAPosition(){
	    	if($(document).width() > 1690) {
		    	var ctaOffsetTop = $('.module-cta-multicolumn').eq(0).offset().top;
		    	var documentScrollTop = $(document).scrollTop()
	    		$('.module-cta-multicolumn.floating-box').show();
		        if (documentScrollTop >= ctaOffsetTop ) {
		        	if(-190 + (documentScrollTop - ctaOffsetTop) < 172){
		            	$('.module-cta-multicolumn.floating-box').css({'top':  -$('.module-cta-multicolumn.floating-box').height() - 30 + (documentScrollTop - ctaOffsetTop) });
		        	}else{
		        		$('.module-cta-multicolumn.floating-box').css({'top':  64 });
		        	}
		        }else if (documentScrollTop < ctaOffsetTop ) {
		        	$('.module-cta-multicolumn.floating-box').css({'top':  -$('.module-cta-multicolumn.floating-box').height() - 30 });
		        }
	    	}else{
	    		$('.module-cta-multicolumn.floating-box').hide();
	    	}
	    }

        $(window).resize(function () {
        	if($(document).width() < 1700) {
	    		$('.module-cta-multicolumn.floating-box').hide();
	    	}else{
	    		$('.module-cta-multicolumn.floating-box').show();
	    		updateCTAPosition();
	    	}
        });

	}

}

function initmoduleProductfinder(){
	if($('.module-productfinder .investment-interval').length != 0) {
	    try {
	    	initmoduleProductfinderInvestmentInterval($('.module-productfinder .investment-interval'));
	    } catch (e) {
	    }
	}
	if($('.module-productfinder .investment-duration').length != 0) {
	    try {
	    	initmoduleProductfinderInvestmentDuration($('.module-productfinder .investment-duration'));
	    } catch (e) {
	    }
	}
	if($('.module-productfinder .investment-type').length != 0) {
	    try {
	    	initmoduleProductfinderInvestmentType($('.module-productfinder .investment-type'));
	    } catch (e) {
	    }
	}
	if($('.module-productfinder-result').length != 0) {
	    try {
	    	initmoduleProductFinderResult($('.module-productfinder-result'));
	    } catch (e) {
	    }
	}
}

function initmoduleProductFinderResult($node){

	if( $('body').hasClass('tablet') && $('body').hasClass('layer') ) {
		$('.layer-content-width').css({'overflow-x':'visible'});
		$('.smartphone .module-expand-background').css({'padding-right':'calc( ((100vw - 326px) / 2))'});
	}

	$('#investmentAlternative div[data-prio=4]').before( $('#investmentAlternative div[data-prio=3]') );
	$('#investmentAlternative div[data-prio=3]').before( $('#investmentAlternative div[data-prio=2]') );


	var mouseMoving = false;
	var selected = 1;
	var activeResult = $('.module-productfinder-result').index( $('.module-productfinder-result').not('.hidden') );
	var recommendedResult = $('.module-productfinder-result').index( $('.module-productfinder-result.recommended') );

	if( $('.module-productfinder-result-recommendation ul li').length > 0 ) {
		var strategyLink = $('.module-productfinder-result-recommendation ul li').first().clone(true);
		$('.strategy-link-recommended').append(strategyLink);
	}

	 if( $('.module-productfinder-result').length > 0 ) {
		   $('#investmentStrategyMap area, .module-productfinder-mobile div').bind('click', function(e) {
		       if( !$('body').hasClass('smartphone') ) {
		         selected = $( "#investmentStrategyMap area" ).index($(this));
		       } else {
		         selected = $(this).closest('.module-productfinder-mobile').find('div').index($(this));
		       }
		       activeResult = selected;
		       $('.module-productfinder-result').addClass('hidden');
		       $('.module-productfinder-result').eq(selected).removeClass('hidden');
		       $('.flag-recommended').removeClass('faded active');
		       $('.module-productfinder-result').eq(selected).find('.strategyImageContainer img').each(function (i, el) {
		    	   if($(el).hasClass('hidden')){
		    		   $(el).hide().removeClass('active');
		    	   }else{
		    		   $(el).show().addClass('active');
		    	   }
		       });
		   		$('.module-productfinder-result').closest('.item-content').stop().css({'height': 'auto'});
		   });

		   $('#investmentStrategyMap area').on('mouseover', function(e) {
			   e.stopPropagation();
			   e.preventDefault();
		       if( !$('body').hasClass('smartphone') && !$('body').hasClass('tablet') ) {
		    	   if(activeResult != $( "#investmentStrategyMap area" ).index($(this))){

		    		   $('.flag-recommended').addClass('faded');

		    		   if(navigator.userAgent.indexOf('Trident') == -1){
			    		   $('.module-productfinder-result').eq(activeResult).find('.img-productfinder' + ($( "#investmentStrategyMap area" ).index($(this))  + 1) ).stop(false, true).fadeIn();
			    		   $('.module-productfinder-result').eq(activeResult).find('.img-productfinder' + (activeResult + 1) ).stop(false, true).fadeOut();
		    		   }else{
			    		   $('.module-productfinder-result').eq(activeResult).find('.img-productfinder' + ($( "#investmentStrategyMap area" ).index($(this))  + 1) ).stop(false, true).show();
			    		   $('.module-productfinder-result').eq(activeResult).find('.img-productfinder' + (activeResult + 1) ).stop(false, true).hide();
		    		   }
		    	   }

		    	   if(recommendedResult == $( "#investmentStrategyMap area" ).index($(this))){
		    		   $('.flag-recommended').addClass('active');
		    	   }
		       }
		   });

		   $('#investmentStrategyMap area').on('mouseout', function(e) {
			   e.stopPropagation();
			   e.preventDefault();
		       if(!mouseMoving &&  !$('body').hasClass('smartphone') && !$('body').hasClass('tablet') ) {
		    	   if(activeResult != $( "#investmentStrategyMap area" ).index($(this))){

		    		   $('.flag-recommended').removeClass('faded');

		    		   if(navigator.userAgent.indexOf('Trident') == -1){
			    		   $('.module-productfinder-result').eq(activeResult).find('.img-productfinder' + (activeResult + 1) ).stop(false, true).fadeIn();
			    		   $('.module-productfinder-result').eq(activeResult).find('.img-productfinder' + ($( "#investmentStrategyMap area" ).index($(this))  + 1) ).stop(false, true).delay(250).fadeOut(400);
		    		   }else{
			    		   $('.module-productfinder-result').eq(activeResult).find('.img-productfinder' + (activeResult + 1) ).stop(false, true).show();
			    		   $('.module-productfinder-result').eq(activeResult).find('.img-productfinder' + ($( "#investmentStrategyMap area" ).index($(this))  + 1) ).stop(false, true).hide();
		    		   }
		    	   }
		    	   if(recommendedResult == $( "#investmentStrategyMap area" ).index($(this))){
		    		   $('.flag-recommended').removeClass('active');
		    	   }
		       }
		   });
	 }
}

function initmoduleProductfinderInvestmentType($node){
	$node.find('input').removeAttr('checked')
	$node.find('input').change (function(e){
		$('.module-productfinder .buttons .form-buttons button').addClass('active');
		$('.module-productfinder .mandatory').css('visibility', 'hidden')
	});

	$('.module-productfinder form').submit(function(e){
		if(!$('.module-productfinder .buttons .form-buttons button').hasClass('active')){
			return false;
		}

	});
}

function initmoduleProductfinderInvestmentInterval($node){

	if( $('body').hasClass('smartphone') && $('body').hasClass('layer') ) {
		$('.layer-content-width').css({'overflow-x':'visible'});
		$('.smartphone .module-expand-background').css({'padding-right':'calc( ((100vw - 326px) / 2))'});
	}

	productfinderInvestmentInterval = $node.find('input:checked').val();
	initmoduleProductfinderInvestmentAmount();
	if($node.find('input:checked').val() == 'regular'){
		if($('body').hasClass('smartphone')){
			$('.module-productfinder .investment-amount .input-currency .per-month').css('display', 'block');
		}else{
			$('.module-productfinder .investment-amount .input-currency .per-month').css('display', 'inline-block');
		}
		$('.amount-input .slider-label .only-once').css('display', 'none');
		$('.amount-input .slider-label .per-month').css('display', 'inline-block');
		$('.module-productfinder .investment-amount h2.only-once').css('display', 'none');
		$('.module-productfinder .investment-amount h2.per-month').css('display', 'block');
	}else{
		$('.amount-input .slider-label .only-once').css('display', 'inline-block');
		$('.module-productfinder .investment-amount .input-currency .per-month').css('display', 'none');
		$('.amount-input .slider-label .per-month').css('display', 'none');
		$('.module-productfinder .investment-amount h2.only-once').css('display', 'block');
		$('.module-productfinder .investment-amount h2.per-month').css('display', 'none');
	}

	$node.find('input').change (function(e){
		$('.module-productfinder .investment-amount .tooltip').fadeOut();
		productfinderInvestmentInterval = $(this).val();
		if(productfinderInvestmentInterval == 'regular'){
			if($('body').hasClass('smartphone')){
				$('.module-productfinder .investment-amount .input-currency .per-month').css('display', 'block');
			}else{
				$('.module-productfinder .investment-amount .input-currency .per-month').css('display', 'inline-block');
			}
			$('.amount-input .slider-label .only-once').css('display', 'none');
			$('.amount-input .slider-label .per-month').css('display', 'inline-block');
			$('.module-productfinder .investment-amount h2.only-once').css('display', 'none');
			$('.module-productfinder .investment-amount h2.per-month').css('display', 'block');
		}else{
			$('.amount-input .slider-label .only-once').css('display', 'inline-block');
			$('.module-productfinder .investment-amount .input-currency .per-month').css('display', 'none');
			$('.amount-input .slider-label .per-month').css('display', 'none');
			$('.module-productfinder .investment-amount h2.only-once').css('display', 'block');
			$('.module-productfinder .investment-amount h2.per-month').css('display', 'none');
		}
		updatePructfinderInvestmentAmount();
	});
}

var productfinderInvestmentAmountApp;
var productfinderInvestmentInterval = '';

function updatePructfinderInvestmentAmount(){

	$(".investment-amount-slider" ).slider( "destroy" );
	initmoduleProductfinderInvestmentAmountSlider(false);
	amountInputMobileInputLastKey = "";
	amountInputMobileInputLastValue = "";
	productfinderInvestmentAmountApp.min = animationData[productfinderInvestmentInterval].sliderMin;
	productfinderInvestmentAmountApp.max = animationData[productfinderInvestmentInterval].sliderMax;
	productfinderInvestmentAmountApp.step = animationData[productfinderInvestmentInterval].sliderStep;
	productfinderInvestmentAmountApp.value = animationData[productfinderInvestmentInterval].sliderMin;

	$('.module-productfinder .investment-amount').find('.amount-min span').html(animationData[productfinderInvestmentInterval].sliderMin);
	$('.module-productfinder .investment-amount').find('.amount-max span').html(Migros.Utils.formatNumber(animationData[productfinderInvestmentInterval].sliderMax, " ", 0));
}

function showInvestmentAmountTooltip(autoHide){
	var tooltipLeftPos = $('.amount-input .slider-label').width() - 12;
	if($('body').hasClass('smartphone')){
		tooltipLeftPos = -16;
	}
	$('.module-productfinder .investment-amount .tooltip').css({'left': tooltipLeftPos });
	if(productfinderInvestmentInterval == 'once'){
		$('.module-productfinder .investment-amount .tooltip').removeClass('left');
		$('.module-productfinder .investment-amount .tooltip.once').stop(true, true).fadeIn();
	}else{
		$('.module-productfinder .investment-amount .tooltip').removeClass('left');
		if($('body').hasClass('layer') && !$('body').hasClass('smartphone')){
			tooltipLeftPos = 75;
			$('.module-productfinder .investment-amount .tooltip').css({'left': tooltipLeftPos });
			$('.module-productfinder .investment-amount .tooltip').addClass('left');
		}
		$('.module-productfinder .investment-amount .tooltip.regular').stop(true, true).fadeIn();
	}
	if(autoHide){
		setTimeout(function() {
			$('.module-productfinder .investment-amount .tooltip').fadeOut();
		}, 5000);
	}
}

function hideInvestmentAmountTooltip(){
	$('.module-productfinder .investment-amount .tooltip').fadeOut();
}

function initmoduleProductfinderInvestmentAmount(){
	// once or regular
	productfinderInvestmentAmountApp = new Vue({
	    el: "#coin-animation",
	    data: {
	      value: animationData[productfinderInvestmentInterval].sliderMin,
	      min: animationData[productfinderInvestmentInterval].sliderMin,
	      max: animationData[productfinderInvestmentInterval].sliderMax,
	      step: animationData[productfinderInvestmentInterval].sliderStep
	    },

	    methods: {
	    	showHideCoin: function (threshold) {
		        var range = this.max - this.min;
		        var percentage = range * (threshold / 100);

		        if (this.value >= percentage) {
		          return 'visible';
		        } else {
		          return 'hidden';
		        }
	          }
	    }
	  });

	$('.module-productfinder .investment-amount').find('.amount-min span').html(animationData[productfinderInvestmentInterval].sliderMin);
	$('.module-productfinder .investment-amount').find('.amount-max span').html(Migros.Utils.formatNumber(animationData[productfinderInvestmentInterval].sliderMax, " ", 0));

	initmoduleProductfinderInvestmentAmountSlider(true);
}
var amountInputMobileInputLastKey = "";
var amountInputMobileInputLastValue = "";
function initmoduleProductfinderInvestmentAmountSlider(initAmountSlider){
	if(initAmountSlider){
		$('.module-productfinder .investment-amount .tooltip.once').css('top', -($('.module-productfinder .investment-amount .tooltip.once').height() + 40));
		$('.module-productfinder .investment-amount .tooltip.regular').css('top', -($('.module-productfinder .investment-amount .tooltip.regular').height() + 40));

		$('.module-productfinder .investment-amount .info').on('click', function(e){
			var tooltipLeftPos = $('.amount-input .slider-label').width() - 12;
			if($('body').hasClass('smartphone')){
				tooltipLeftPos = -16;
			};
			$('.module-productfinder .investment-amount .tooltip').removeClass('left');
			if($('body').hasClass('layer') && productfinderInvestmentInterval == 'regular' && !$('body').hasClass('smartphone')){
				tooltipLeftPos = 75;
				$('.module-productfinder .investment-amount .tooltip').addClass('left');
			}
			$('.module-productfinder .investment-amount .tooltip').css({'left': tooltipLeftPos });
			if(!$(this).hasClass('visible')){
				$(this).addClass('visible');
				showInvestmentAmountTooltip(false);
			} else {
				$(this).removeClass('visible');
				hideInvestmentAmountTooltip();
			}

		});
		$('.module-productfinder .investment-amount .info').on('mouseenter', function(e){
			$(this).addClass('visible');
			showInvestmentAmountTooltip(false);
		});
		$('.module-productfinder .investment-amount .info').on('mouseleave', function(e){
			$(this).removeClass('visible');
			hideInvestmentAmountTooltip();
		});


		$('.module-productfinder .investment-amount .amount-input-mobile input').keydown(function(e){
			// ArrowLeft 37, ArrowRight 39, Backspace 8, Delete 46, F5 116, Control 17, v 86, enter 13
			amountInputMobileInputLastValue = productfinderInvestmentAmountApp.value;

			if( e.keyCode == 13){
				$(this).blur();
			}
			if( ! (/^[0-9]+$/.test( e.key) || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 8 || e.keyCode == 46  || e.keyCode == 116  || e.keyCode == 17  || (amountInputMobileInputLastKey == 17 && e.keyCode == 86)) ){
				return false;
			}
			amountInputMobileInputLastKey = e.keyCode;
		});

		$('.module-productfinder .investment-amount .amount-input-mobile input').keyup(function(e){
			if(productfinderInvestmentInterval == 'once'){
				if( $(this).val() >= 10000000 ){
					 $(this).val(10000000);
				}
			}else{
				if( $(this).val() >= 50000 ){
					 $(this).val(50000);
				}
			}
			productfinderInvestmentAmountApp.value = checkInvestmentAmountValue(productfinderInvestmentAmountApp.value);
			if(!Number.parseInt($(this).val()) ){
				productfinderInvestmentAmountApp.value = amountInputMobileInputLastValue;
			}

		});

		$('.module-productfinder .investment-amount .amount-input-mobile input').change(function(e){
			amountInputMobileInputLastKey = "";
			$(".investment-amount-slider").slider("value", $(this).val() );
		});

		var checkInvestmentAmountValue = function( value ) {
			var returnValue = value;
			if(productfinderInvestmentInterval == 'once'){
				if( value >= 10000000 ){
					returnValue = 10000000;
				}
			}else{
				if( value >= 50000 ){
					returnValue = 50000;
				}
			}
			return returnValue;
		};
	}

	var sliderChangeHandler = function( event, ui ) {
		// console.log("sliderChangeHandler", productfinderInvestmentAmountApp.value , ui.value, productfinderInvestmentAmountApp.value >= 10000000);
		if( productfinderInvestmentAmountApp.value <= animationData[productfinderInvestmentInterval].sliderMax ){
			productfinderInvestmentAmountApp.value = ui.value;
			if(ui.value == animationData[productfinderInvestmentInterval].sliderMax && amountInputMobileInputLastKey != ""){
				showInvestmentAmountTooltip(true);
			}
		}else{
			productfinderInvestmentAmountApp.value = productfinderInvestmentAmountApp.value;
		}
	};

	var sliderSlideHandler = function( event, ui ) {
		// console.log("sliderSlideHandler", productfinderInvestmentAmountApp.value , ui.value);
		productfinderInvestmentAmountApp.value = ui.value;
		if(ui.value == animationData[productfinderInvestmentInterval].sliderMax){
			showInvestmentAmountTooltip(true);
		}
	};

	$(".investment-amount-slider").slider({
        animate: "normal",
        slide: sliderSlideHandler,
        change: sliderChangeHandler,
        range: "min",
        min: animationData[productfinderInvestmentInterval].sliderMin,
        max: animationData[productfinderInvestmentInterval].sliderMax,
        step: animationData[productfinderInvestmentInterval].sliderStep
    });
}


var productfinderInvestmentDuration = 1;
var productfinderInvestmentDurationHover = -1;
var productfinderInvestmentDurationInterval = 0;

function initmoduleProductfinderInvestmentDuration($node){

	var handleDown = false;

	$node.find("input").val(productfinderInvestmentDuration);

	var sliderChangeHandler = function( event, ui ) {
		if(!handleDown){
			$node.find("input").val(ui.value);
			var timerBase = Math.abs(((ui.value) - (productfinderInvestmentDuration)));
//console.log('sliderChangeHandler', timerBase, ui.value, productfinderInvestmentDuration);
			productfinderInvestmentDurationInterval =  Math.abs(timerBase * 1 / ((ui.value) - (productfinderInvestmentDuration)));

			if((ui.value - 1) - (productfinderInvestmentDuration) >= 0){
				setTimeout(function(){
					rotateUp(productfinderInvestmentDuration - 1, ui.value - 1 );
					productfinderInvestmentDuration = (ui.value);
				}, productfinderInvestmentDurationInterval);
			}else{
				rotateDown(productfinderInvestmentDuration - 1, ui.value );
				productfinderInvestmentDuration = (ui.value);
			}
			$('.module-productfinder .investment-duration .tacho-needle svg').css('transform', 'rotate(' + ((ui.value - 1) * 30) + 'deg)');
			$('.module-productfinder .investment-duration .tacho-needle svg').css('transition-duration', (timerBase / 30) + 's');
		}
		handleDown = false;
	}

	var sliderSlideHandler = function( event, ui ) {
		if(handleDown){
			$node.find("input").val(ui.value);
			var timerBase = Math.abs(((ui.value) - (productfinderInvestmentDuration)));
//console.log('sliderSlideHandler', timerBase);
			$('.module-productfinder .investment-duration .tacho-needle svg').css('transform', 'rotate(' + ((ui.value - 1) * 30) + 'deg)');
			$('.module-productfinder .investment-duration .tacho-needle svg').css('transition-duration', (timerBase / 10) + 's');
			if((ui.value - 1) - (productfinderInvestmentDuration) >= 0){
				rotateUp(productfinderInvestmentDuration - 1, ui.value - 1 );
				productfinderInvestmentDuration = (ui.value);
			}else{
				rotateDown(productfinderInvestmentDuration - 1, ui.value );
				productfinderInvestmentDuration = (ui.value);
			}
			productfinderInvestmentDuration = (ui.value);
		}
	}

    $(".investment-duration-slider" ).slider({
        animate: "normal",
        slide: sliderSlideHandler,
        change: sliderChangeHandler,
        range: "min",
        min: 1,
        max: 10,
        step: 1
    });

	$node.find('.ui-slider-handle').mousedown(function(e){
		handleDown = true;
//console.log('handle', handleDown);
	});
	/*
	$node.find('.tacho-label-container div').mouseover(function(e){
		productfinderInvestmentDurationHover =  $node.find('.tacho-label-container div').index(this);
console.log('mouseover', productfinderInvestmentDurationHover);
		rotateUp(1, productfinderInvestmentDurationHover);
	});

	$node.find('.tacho-label-container div').mouseout(function(e){
console.log('mouseout', productfinderInvestmentDuration);
		rotateDown(productfinderInvestmentDurationHover, productfinderInvestmentDuration);
		productfinderInvestmentDurationHover = -1;
	});
	*/
	$node.find('.tacho-label-container div').click(function(e){
		$(".investment-duration-slider").slider( "value", $node.find('.tacho-label-container div').index(this)+1 );
	});
}

function rotateUp(start, stop){
// console.log('rotateUp', productfinderInvestmentDurationInterval, start, stop);
	if(start <= stop){
		$('.module-productfinder .investment-duration .tacho svg path').eq(start).css('stroke', "#007756");
		setTimeout(function(){
			rotateUp(start + 1, stop)
		}, productfinderInvestmentDurationInterval);
	}
}

function rotateDown(start, stop){
//console.log('rotateDown', productfinderInvestmentDurationInterval, start, stop);
	if(start >= stop){
		var strokeColor= '#eeeeee';
		if($('body').hasClass('smartphone')){
			strokeColor= '#ffffff';
		}
		$('.module-productfinder .investment-duration .tacho svg path').eq(start).css('stroke', strokeColor);
		setTimeout(function(){
			rotateDown(start - 1, stop)
		}, productfinderInvestmentDurationInterval);
	}
}


function initmoduleLogismataTeaser(){
  var moduleLogismataTeaser = $('.module-logismata-teaser');
  var currentSliderValue = 0;

  moduleLogismataTeaser.each(function(i, e){

	var logismataInputtLastKey = '';
	var logismataInputtLastValue = -1;
	var tooltipCopyTemplate = $(this).find('.tooltip-copy-template').html();
	var contentCopyTemplate = $(this).find('.content-copy-template').html();
	var tooltipInfo = $(this).find('.info');
	var tooltip = $(this).find('.tooltip');
	var contentCopy = $(this).find('.content-copy');
	var logismataInput = $(this).find('.logismata-input-value');
	var logismataSlider = $(this).find('.logismata-amount-slider');
	var logismataSliderData = $(this).find('.logismata-slider-data');
	var logismataButton = $(this).find('.button');
	var logismataButtonLink = $(this).find('a');
	var logismataButtonHref = logismataButtonLink.attr('href');
	var logismataButtonParam = logismataButton.attr('data-link-param');
	var dataMinValue = parseInt(logismataSliderData.attr('data-min-value'));
	var dataMaxValue = parseInt(logismataSliderData.attr('data-max-value'));
	var dataDefaultValue = parseInt(logismataSliderData.attr('data-default-value'));
	var dataStepsValue = parseInt(logismataSliderData.attr('data-steps-value'));
	if(tooltipCopyTemplate != undefined){
		tooltip.html(tooltipCopyTemplate.replace('{currentValue}', logismataInput.val()));
	}
	contentCopy.html(contentCopyTemplate.replace('{currentValue}', logismataInput.val()));

	tooltipInfo.click(function(e){
		e.preventDefault();
		tooltip.toggle();
	});

	tooltipInfo.on('mouseenter', function(e){
		tooltip.stop(true, true).fadeIn();
	});
	tooltipInfo.on('mouseleave', function(e){
		tooltip.stop(true, true).fadeOut();
	});


	var updateValue = function(newValue){
		currentSliderValue = newValue;
		logismataInput.val( Migros.Utils.formatNumber(currentSliderValue, " ", 2));
		if(tooltipCopyTemplate != undefined){
			tooltip.html(tooltipCopyTemplate.replace('{currentValue}', currentSliderValue ));
		}
		contentCopy.html(contentCopyTemplate.replace('{currentValue}', currentSliderValue ));
		logismataButtonLink.attr('href', logismataButtonHref + logismataButtonParam.replace('{currentValue}', currentSliderValue));
	};

	logismataInput.keydown(function(e){
		// ArrowLeft 37, ArrowRight 39, Backspace 8, Delete 46, F5 116, Control 17, v 86, r 67, enter 13
		logismataInputtLastValue = logismataInput.val();
		if( e.keyCode == 13){
			$(this).blur();
		}
		if( ! (/^[0-9]+$/.test( e.key) || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 8 || e.keyCode == 46  || e.keyCode == 116  || e.keyCode == 17  || (logismataInputtLastKey == 17 && e.keyCode == 86)  || (logismataInputtLastKey == 17 && e.keyCode == 67)) ){
			return false;
		}
		logismataInputtLastKey = e.keyCode;
	});

	logismataInput.change(function(e){
		logismataInputtLastKey = "";
		if( Number.isInteger(parseInt(logismataInput.val())) ){
			logismataSlider.slider("value", parseInt(logismataInput.val()) );
		}else{
			logismataInput.val( Migros.Utils.formatNumber(currentSliderValue, " ", 2));
		}
	});

	var logismataSliderSlideCreate = function( event, ui ) {
		updateValue(dataDefaultValue);
	};

	var logismataSliderChangeHandler = function( event, ui ) {
		updateValue(ui.value);
	};

	var logismataSliderSlideHandler = function( event, ui ) {
		updateValue(ui.value);
	};

	$(".logismata-amount-slider").slider({
	    animate: "normal",
	    create: logismataSliderSlideCreate,
	    slide: logismataSliderSlideHandler,
	    change: logismataSliderChangeHandler,
	    range: "min",
	    min: dataMinValue,
	    max: dataMaxValue,
	    step: dataStepsValue,
	    value: dataDefaultValue
	});
  });
}

var uiSlider = function($wrapper, textInput){
	var currentSliderValue = 0;
	var initComplete = false;

	var $sliderWrapper = $wrapper;
	var $targetTextInput = $(textInput);
	var $sliderData = $sliderWrapper.find('.ui-slider-data');
	var $slider = $sliderWrapper.find('.ui-amount-slider');
	var dataMinValue = parseInt($sliderData.attr('data-min-value'));
	var dataMaxValue = parseInt($sliderData.attr('data-max-value'));
	var dataDefaultValue = parseInt($sliderData.attr('data-default-value'));
	var dataStepsValue = parseInt($sliderData.attr('data-steps-value'));

	var updateValue = function(newValue, updateInput){
		currentSliderValue = newValue;
		if(textInput == '#target-credit-duration' && newValue == 0){
			currentSliderValue = 6;
		}else if(newValue == 0){
			currentSliderValue = 0;
		}else if(currentSliderValue < 100){
			if(textInput == '#target-credit-amount' && ($('body').hasClass('smartphone') || $('body').hasClass('tabelt'))){
				currentSliderValue = currentSliderValue;
			}else{
				currentSliderValue = Migros.Utils.formatNumber(currentSliderValue, " ", 0);
			}
		}else{
			if(textInput == '#target-credit-amount' && ($('body').hasClass('smartphone') || $('body').hasClass('tabelt'))){
				currentSliderValue = currentSliderValue;
			}else{
				currentSliderValue = Migros.Utils.formatNumber(currentSliderValue, " ", 2);
			}
		}
		//console.log("updateValue", currentSliderValue);
		if(updateInput){
			$targetTextInput.val(currentSliderValue);
			$targetTextInput.change();
		}
	};

	var uiSliderCreate = function( event, ui ) {
		initComplete = true;
		setTimeout(function(){
			updateValue(dataDefaultValue, true);
		}, 100);
	};

	var uiSliderChangeHandler = function( event, ui ) {
		// console.log("uiSliderChangeHandler", ui.value);
		updateValue(ui.value, false);
	};

	var uiSlideHandler = function( event, ui ) {
		// console.log("uiSlideHandler", ui.value);
		updateValue(ui.value, true);
	};

	$slider.slider({
	    animate: "normal",
	    create: uiSliderCreate,
	    slide:  uiSlideHandler,
	    change: uiSliderChangeHandler,
	    range: "min",
	    min: dataMinValue,
	    max: dataMaxValue,
	    step: dataStepsValue,
	    value: dataDefaultValue
	});

	return $slider;
}
/* ######## main End ############################################# */


/* ######## calculators ############################################# */

// $LastChangedRevision$
/**
 * ------------- formatting utils -------------
 * **/
/**
 * get formatted Number for monetary values
 * @param nb (input)
 * @param separatorChar (character for separator)
 * @param decimals (number of decimal places after ".")
 */
Migros.Utils.formatNumber = function (nb, separatorChar, decimals) {
    var float = parseFloat(nb) || -1,
        tmpIntStr = Math.abs(parseInt(nb)).toString(),
        tmpDecimals = "",
        decimals = (decimals == undefined) ? 0 : decimals,
        separatorChar = separatorChar || " ' ",
        mod,
        output,
        isNegativeValue = false;

    if(float < 0){
        isNegativeValue = true;
    }

    // set decimals
    if (decimals > 0) {

        float = Math.round(float*getDecimalHelper(decimals))/getDecimalHelper(decimals); //cut decimals
        float = float.toFixed(decimals);
        float = float.toString();
        if(float.indexOf('.') == -1){
            float = float.toString()+'.00';
        }
        tmpDecimals = float.substr(float.indexOf('.'));
    } else {
        float = parseInt(float);
    }

    // set separator characters
    if (tmpIntStr.length > 4) {
        mod = tmpIntStr.length % 3;
        output = (mod > 0 ? (tmpIntStr.substring(0, mod)) : '');

        var l = Math.floor(tmpIntStr.length / 3);
        for (var i = 0; i < l; i++) {
            if ((mod == 0) && (i == 0)) {
                output += tmpIntStr.substring(mod + 3 * i, mod + 3 * i + 3);
            } else {
                output += separatorChar + tmpIntStr.substring(mod + 3 * i, mod + 3 * i + 3);
            }
        }
    } else {
        output = tmpIntStr.toString();
    }

    if(isNegativeValue){
        output = "-"+output;
    }

    output += tmpDecimals;

    if(parseFloat(float) ==  -1){
        output = "-1";
    }


    function getDecimalHelper (decimals) {

        var dec = 10;
        var decExp = 10;
        var decimalCound = decimals-1;

        while(decimalCound--){
            dec = dec*decExp;
        }

        return dec;
    }

    return output;
};

/**
 * get number unformatted (remove ' of formatted monetary values)
 * @param str
 * @returns {Number}
 */
Migros.Utils.unformatNumber = function(str) {

    var regex = /\s/g;

    return parseFloat(str.replace(regex, ""));
};

/**
 * get formatted Number for percentage values
 * @param nb (input)
 * @param separatorChar (character for separator)
 * @param decimals (number of decimal places after ".")
 */
Migros.Utils.formatPercentage = function(nb, separatorChar, decimals, eighth) {

    var nb = nb || -1,
        float = parseFloat(nb),
        decimals = (decimals == undefined) ? 2 : decimals,
        tmpInt = parseInt(nb),
        tmpDecimals = "",
        separatorChar = separatorChar || " ' ",
        output,
        eighth = eighth || false;

    // set decimals
    if(float > 0){
        if(decimals > 0) {
            float = float.toFixed(decimals);
            tmpDecimals = parseFloat(float.substr(float.indexOf('.')));

            // set decimals to multiples of 0.125
            if(decimals == 3){
                if(eighth){
                    tmpDecimals = Math.round(tmpDecimals/0.125) * 0.125;
                    tmpDecimals = tmpDecimals.toFixed(3).toString();
                } else {
                    var floatStr = float;
                    floatStr.toString();
                    if(floatStr[floatStr.length -1] == "0"){

                        tmpDecimals = parseFloat(tmpDecimals).toFixed(2);
                    }
                }

                tmpDecimals = tmpDecimals.toString().substr(2);
                float = tmpInt + "." + tmpDecimals;
            }

            output = float.toString().replace(/\./g, ',');

        }
    } else {
        output= "";
    }

    return output;
};

/**
 * get percentage unformatted (remove , of formatted percentage values)
 * @param str
 * @returns {Number}
 */
Migros.Utils.unformatPercentage = function(str) {

    var output;

    if(str != "-1"){
        output = str.replace(/,/g, '.');
    } else {
        output = "";
    }

    return parseFloat(output);
};




/**
 * ------------- calculator -------------
 * @type {{}}
 */
Migros.Components.Calculator = {};
Migros.Components.Calculator.init = function() {

    $.each($('.module-calculator'), function(i, el){

        var calc = Migros.Components.Calculator.CalculatorFactory(el);
    });
};

/**
 * calculator factory
 * @param el
 * @returns {*}
 * @constructor
 */
Migros.Components.Calculator.CalculatorFactory = function(el) {
    switch ($(el).attr('data-type')){
        case 'personal-credit':
            return new Migros.Components.Calculator.PersonalCredit(el);
            break;

        case 'mortgage-max':
            return new Migros.Components.Calculator.MortgageMax(el);
            break;

        case 'mortgage-measured':
            return new Migros.Components.Calculator.MortgageMeasured(el);
            break;

        case 'savings':
            return new Migros.Components.Calculator.Savings(el);
            break;

        case 'leasing':
            return new Migros.Components.Calculator.Leasing(el);
            break;

        case 'business-credit':
            return new Migros.Components.Calculator.BusinessCredit(el);
            break;

        case 'provision-saving':
            return new Migros.Components.Calculator.ProvisionSaving(el);
            break;

        default:
            return null;
            break;
    }
};

/**
 * core calculator
 * @type {{scriptData: {}, getScriptData: Function}}
 */
Migros.Components.Calculator.CoreCalculator = {

    MANDATORY_ERROR : "mandatory_error",
    VALUE_ERROR : "value_error",
    COMBINATION_ERROR : "combination_error",

    that : this,

    id : "",
    node : {},
    scriptData : {},
    restultData : {},

    inputNode: {},
    resultNode : {},
    invalidResultNoteId : {},
    resultNoteError : {},

    inputDict : [],
    inputIds : [],

    showMandatoryErrors : false,
    mandatoriesFilled : false,
    mandatoryErrorNode : {},
    resultActive : false,
    resultVisibleFirstTime : true,

    getScriptData: function() {

        this.scriptData  = $(this.node).find('script[type="text/data"]').html();
        if (this.scriptData !== null && this.scriptData.length > 0) {
            this.scriptData = JSONUtil.parse(this.scriptData);
        }
    },

    setupTooltips: function() {
        $(this.node).find('label>.info').migrosFormTooltips({
            leftOffset  : 0,
            topOffset   : 30
        });
    },

    setupTooltipsV2: function() {
        $(this.node).find('label>.info').migrosFormTooltipsV2({
            leftOffset  : 0,
            topOffset   : 30,
            displayDirection: 'top'
        });
    },


    /** ******************** EVENT HANDLER ******************** **/

    setupEventHandler: function() {

        var that = this;

        $(this.node).find("input[type='radio']").bind('change', {self: that}, this.radioChangeHandler);
        $(this.node).find("input[type='radio']").bind('click', {self: that}, this.radioKeyupHandler);
        $(this.node).find("select").bind('change', {self: that}, this.selectInputChangeHandler);
        $(this.node).find("input[type='text']").keyup(this.textInputKeyupHandler);
        $(this.node).find("input[type='text']").keydown(this.textInputKeydownHandler);
        $(this.node).find("input[type='text']").keypress(function(e){

           return (that.textInputKeypressHandler(e, this));
        });
        $(this.node).find("input[type='text']").bind('focus', {self: that}, this.textInputFocusHandler);
        $(this.node).find("input[type='text']").bind('blur', {self: that}, this.textInputChangeHandler);
        $(this.node).find(".form-reset").bind('click', {self: that}, this.formResetClickHandler);
        $(this.node).find('.form-submit').bind('click', {self: that}, this.formSubmitClickHandler);
    },

    /**
     * form reset
     * @param e
     */
    formResetClickHandler: function(e){

        if( !e ) e = window.event;
        e.preventDefault();

        var that = e.data.self;
        that.showMandatoryErrors = false;
        that.resultActive = false;

        // reset value
        $('#'+that.id)[0].reset();

        // reset errors
        $(that.resultNode).css({'display': 'none'});
        that.hideError();

        // reset input value
        var l = that.inputIds.length;
        while (l--) {

            var item = that.inputDict[that.inputIds[l]];
            item.resetInputValue();
        }

    },

    /**
     * on radio button change focus handler
     * @param e
     */
    radioChangeHandler: function(e){

        if( !e ) e = window.event;
        var that = e.data.self;

        // if server error -> hide
        that.hideServerError();

        // check errors
        if(!that.resultActive) {
            var hasErrors = that.checkErrors();
            if(hasErrors == 0){
                if(that.checkCombinationErrors()){
                    that.showCombinationErrors();
                }
            }
        }

        // show result invalid note
        if(that.resultActive) {
            that.showResultNoteInvalid();
        }
    },

    radioKeyupHandler: function(e){

        if( !e ) e = window.event;
        var that = e.data.self;
        var target = $(this);
        var parent = $(target).parent();
        var targetInput = $(target).parent();

        while(!$(parent).is('fieldset')){
            parent = $(parent).parent();
        }

        while(!$(targetInput).hasClass('form-row')){
            targetInput = $(targetInput).parent();
        }

        targetInput = targetInput.find("input[type='text']");

        $.each($(parent).find("input[type='text']"), function(i, el){

            var id = $(el).attr('id');
            that.hideError(id, that.inputDict[id].errorId);
            that.hideError(id, that.inputDict[id].combinationErrorId);
            that.inputDict[id].setState('inactive');
        });

        if(targetInput.length > 0){
            that.inputDict[$(targetInput).attr('id')].setState('active');
        }
    },

    selectInputChangeHandler: function(e){

        if( !e ) e = window.event;

        var that = e.data.self;
        var id = $(e.target).attr('id');

        var item = that.inputDict[id];
        item.value = (parseFloat(e.target.value)) ? parseFloat(e.target.value) : e.target.value; // set value as string or number

        // if server error -> hide
        that.hideServerError();

        // check errors
        var hasErrors = that.checkErrors();
        if(hasErrors == 0){
            if(that.checkCombinationErrors()){
                that.showCombinationErrors();
            }
        }

        // show result invalid note
        if(that.resultActive) {
            that.showResultNoteInvalid();
        }
    },

    textInputKeyupHandler: function(){
    },

    formSubmitClickHandler: function() {
    },

    textInputKeydownHandler: function(e){
    },

    textInputKeypressHandler: function(e, eventContext){
        if( !e ) e = window.event;
        var iPad = /(iPad)/g.test( navigator.userAgent);
        var target = $(eventContext);
        var charCode = (e.which) ? e.which : e.keyCode;
        var inputType = $(target).attr('data-inputtype');
        var inputValue = $(target).val();


        var charCodeArr = [8, 9, 13, 16, 18, 20, 27, 35, 36, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        var decimalCharCodeArr = [46, 190];
        var commaCharCodeArr = [44, 188, 110];
        var minusCharCodeArr = [45, 109];

        var numberCharCodeArr = charCodeArr.concat(decimalCharCodeArr);
        var intCharCodeArr = charCodeArr;
        var percCharCodeArr = charCodeArr.concat(decimalCharCodeArr).concat(commaCharCodeArr);
        var negativeNumberCharCodeArr = charCodeArr.concat(minusCharCodeArr);

        var returnValue = true;

        // prevent page reload on press "enter"
        // submit
        if(charCode == 13) {

            target.trigger('blur');

            if($.browser.msie || iPad){
                var timeoutThis = this;
                var timeoutEvent = e;

                setTimeout(function(){ // IE9 fix
                    timeoutThis.formSubmitClickHandler.call(timeoutEvent);
                }, 200);
            }
        }

        switch(inputType){
            case "number":
                if (jQuery.inArray(charCode, numberCharCodeArr) == -1) {
                    returnValue = false;
                } else {
                    if(jQuery.inArray(charCode, decimalCharCodeArr) != -1) { // Check for ,
                        if(jQuery.inArray(".", inputValue) != -1){
                            returnValue = false;
                        } else {
                            if(inputValue.length == 0){
                                returnValue = false;
                            }
                        }
                    }
                }
                break;

            case "percentage":
                if (jQuery.inArray(charCode, percCharCodeArr) == -1) {
                    returnValue = false;
                } else {
                    if(jQuery.inArray(charCode, commaCharCodeArr) != -1 || jQuery.inArray(charCode, decimalCharCodeArr) != -1) { // Check for ,.
                        if(jQuery.inArray(",", inputValue) != -1 || jQuery.inArray(".", inputValue) != -1){
                            returnValue = false;
                        }
                    }
                }
                break;

            case "int":
                if (jQuery.inArray(charCode, intCharCodeArr) == -1) {
                    returnValue = false;
                }
                break;

            case "negativeInt":

                if  (jQuery.inArray(charCode, negativeNumberCharCodeArr) == -1) {
                    returnValue = false;
                } else {
                    if(jQuery.inArray(charCode, minusCharCodeArr) != -1){
                        if(inputValue.length > 0){
                            returnValue = false;
                        }
                    }
                }
                break;

            default:
                returnValue = true;
                break;
        }

        return returnValue;
    },

    textInputChangeHandler: function(e){

        if( !e ) e = window.event;
        var that = e.data.self;
        var id = $(e.target).attr('id');
        var item = that.inputDict[id];
        var oldValue = item.value;

        var val = e.target.value
        val = val.replace(/\s+/g, ''); /*remove spaces*/
        that.setInputValue(item, val, that);

        // if server error -> hide
        that.hideServerError();

        // check and show error (mandatoryerror, valueerror, combinationerror)
        if(that.checkErrors() == 0){
            if(that.checkCombinationErrors()){
                that.showCombinationErrors();
            }
        }

        // show result invalid note
        if(that.resultActive) {
            if(oldValue != item.value){
                that.showResultNoteInvalid();
            }
        }
    },

    setInputValue : function(item, val, that){

        var targetValue;
        var that = that;
        var val = val;
        var item = item;

        if(item.inputType == "percentage"){
            if(val == "0"){
                targetValue = 0;
            } else {
                targetValue = Migros.Utils.unformatPercentage(val || -1);
            }
        } else {
            if(val == "0"){
                targetValue = 0;
            } else {
                if(item.inputType != ""){
                    targetValue = parseFloat(val) || -1;
                } else {
                    targetValue = val;
                }
            }
        }

        if(item.inputType != ""){
            targetValue = (isNaN(targetValue)) ? -1 : targetValue;
        }

        item.value = targetValue;
        item.formatValue();
    },

    checkCombinationErrors : function() {

        var hasError = false;

        return hasError;
    },

    textInputFocusHandler: function(e){

        /*if( !e ) e = window.event;
        var that = e.data.self;

        var id = $(e.target).attr('id');

        var item = that.inputDict[id];
        item.setInputValue();*/
    },


    /** ******************** RESULT ******************** **/

    /**
     * ajax request for result
     * @param url
     * @param config
     */
    requestData: function(url, config, callback){

        var that = this;

        $.ajaxSetup ({
            cache: false
        });

        $.ajax({
            url: url,
            data: config,
            type: 'POST',
            success: function (ajaxData, status, xhr) {

                that.hideServerError();
                /*console.log(ajaxData);*/

                if (typeof callback === 'function')
                    callback(ajaxData);
            },
            error: function (error, status, xhr) {

                that.showServerError();
                console.log(error, status, xhr);
            }
        });
    },

    /**
     * tracking
     */
    trackResult: function() {

        var targetNode = $(this.node).find('.form-submit');
        var hostName = window.location.hostname;
        var path = window.location.pathname ? ((window.location.pathname.indexOf("/")!=0) ? "/"+window.location.pathname : window.location.pathname) : "/";
        var qry = window.location.search ? window.location.search.substring(window.location.search.indexOf("?")+1,window.location.search.length) : "";
        var title = 'Result';
        var dl = "20";
        var additionalParams = Migros.Utils.getAdditionalTrackingParams(targetNode);


        var params = [];
        params.push('DCS.dcssip', hostName);
        params.push('DCS.dcsuri', path);
        params.push('DCS.dcsqry', qry);
        params.push('WT.ti', title);
        params.push('WT.dl', dl);

        // gtm params
        var eventData= {}
        eventData['event'] = 'click';
        eventData['host'] = hostName;
        eventData['path'] = path;
        eventData['query'] = qry;
        eventData['title'] = title;

        // add additional params from parent nodes
        var l = additionalParams.length;
        while(l--){

            var obj = additionalParams[l];

            for(var j in obj){

                if(params.indexOf(j) == -1) {
                    params.push(j, obj[j]);
                    eventData[j] = obj[j];
                } else {

                    params.splice(params.indexOf(j), 2);
                    params.push(j, obj[j]);
                    eventData[j] = obj[j];
                }
            }
        }

        if(typeof dataLayer != "undefined" ){
            dataLayer.push(eventData);
        }
    },

    /**
     * show result
     * @param result
     */
    showResult: function(result) {

        if(this.resultVisibleFirstTime){
            this.resultVisibleFirstTime = false;

            this.trackResult();
        }
        this.resultActive = true;

        $(this.resultNode).css({
            'display': 'block'
        });
    },

    /**
     * hide result
     */
    hideResult: function(){

        this.resultActive = false;

        $(this.resultNode).css({
            'display': 'none'
        });
    },

    /**
     * show result note
     */
    showResultNote: function(id) {

        var that = this;
        var elem = $(that.resultNote).find('.'+id);
        if (elem.text().length == 0) {
            if(Migros.FeatureData.isEditMode()){
                if (elem.data("label").length > 0) {
                    elem.text("Die Meldung '"+elem.data("label")+"' ist leer.");
                }
            } else {
                $(this.resultNote).css({
                    'display': 'none'
                });
                return;
            }
        }

        elem.css({
            'display': 'block'
        });

        $(that.resultNote).find('.background-light-grey').css({
            'display': 'block'
        });

        $(this.resultNote).stop(true, false).fadeIn(200, function(){
            $(this).css({
                'opacity': 1
            });

            $(that.resultNote).find('.close').bind('click', {self: that}, that.closeResultHandler);
        });
    },

    /**
     * handler for closing result handler
     * @param e
     */
    closeResultHandler: function(e){

        var _self = e.data.self;

        $(_self.resultNote).find('.close').unbind();
        _self.hideResultNote();
    },

    /**
     * hide result note
     */
    hideResultNote: function(id) {

        if(id){
            $(this.resultNote).find('.'+id).css({
                'display': 'none'
            });
        } else {
            $(this.resultNote).find('p').css({
                'display': 'none'
            });
        }

        $(this.resultNote).css({
            'display': 'none'
        });
    },

    showResultErrorNote : function(nodeId) {

        $(this.resultNoteError).find('.'+nodeId).css({
            'display': 'block'
        });

        $(this.resultNoteError).css({
            'display': 'block'
        });
    },

    hideResultErrorNote : function() {

        $(this.resultNoteError).find('p').css({
            'display': 'none'
        });

        $(this.resultNoteError).css({
            'display': 'none'
        });
    },

    /**
     * show hint if result invalid
     */
    showResultNoteInvalid: function() {

        $(this.resultNote).find('p').css({
            'display': 'none'
        });

        this.showResultNote(this.invalidResultNoteId);
    },

    getFormattedResultNumber : function(str, decimals) {

        var val;
        var decimals = decimals || 0;
        var formattedVal = Migros.Utils.formatNumber(str, " ", decimals);

        val = (formattedVal == "-1") ? "0" : formattedVal;

        return val;
    },

    getFormattedResultPercentage : function(str, decimals) {

        var val;
        var formattedVal = Migros.Utils.formatPercentage(str, ",", decimals);

        val = (formattedVal == "-1") ? "0" : formattedVal;

        return val;
    },

    /** ******************** ERRORS ******************** **/

    /**
     * hide error not and remove input highlighting
     * @param formRowId, errorNoteId
     */
    hideError: function(formRowId, errorNoteId) {

        if(errorNoteId){
            this.hideErrorNote(errorNoteId);
        } else {
            if(!formRowId){ // no parameters -> hide all <p>s in error note

                $(this.node).find('.calc-error-note p').css({
                    'display': 'none'
                });
            }
        }

        // show error border
        if (formRowId) {

            var _errorRow = Migros.Components.Calculator.CoreCalculator.getErrorRow(formRowId);

            $(_errorRow).removeClass('error');

        } else { // hide all red borders from errors

            if ((errorNoteId && errorNoteId.indexOf('server') == -1) || !errorNoteId) {

                $.each($(this.node).find('.form-row'), function (i, el) {
                    $(el).removeClass('error');
                    $(el).find('input').removeClass('error');
                });

                $.each($(this.node).find('.form-section'), function(i, el){
                    $(el).removeClass('error');
                });
            }
        }
    },

    /**
    * show error note on top of page and highlight form row width red border
    * @param formRowId, errorNoteId
    */
    showError: function(formRowId, errorNoteId) {

        if(formRowId != undefined) {
            var _errorRow = Migros.Components.Calculator.CoreCalculator.getErrorRow(formRowId);

            $(_errorRow).addClass('error');
        }

        if(errorNoteId) {
            this.showErrorNote(errorNoteId);
        }
    },

    /**
     * show error note on top of calc
     * @param errorNoteId
     */
    showErrorNote: function(errorNoteId) {

        $('#'+errorNoteId).css({
            display: 'block'
        });
    },

    /**
     * hide error note on top of calc
     * @param errorNoteId
     */
    hideErrorNote: function(errorNoteId) {

        $('#'+errorNoteId).css({
            display: 'none'
        });
    },

    /**
     * get form row in which error occurred
     * @param id
     * @returns {*|jQuery}
     */
    getErrorRow: function(id){

        var _parent;

        if($('#'+id).prop("nodeName") != "FIELDSET"){
            _parent = $('#'+id).parent();

            while(!$(_parent).hasClass('form-row')){
                _parent = $(_parent).parent();
            }

            if ($(_parent).find('input').length > 1) {
                _parent = $('#' + id);
            }

        } else {
            _parent = $('#'+id).parent().parent();
        }

        return _parent;
    },

    /**
     * server error on ajax fail
     */
    showServerError: function() {
        this.showError(undefined, this.serverErrorNode);
    },

    /**
     * hide server error
     */
    hideServerError: function() {
        this.hideError(undefined, this.serverErrorNode);
    },

    /**
     * check and show errors
     */
    checkErrors : function () {

        var errorCount = 0;
        var hasMandatoryErrors = false;
        var l = this.inputIds.length;
        while (l--) {

            var errorObj = this.checkSingleError(this.inputDict[this.inputIds[l]]);
            // check if any error
            if(errorObj.hasError){

                errorCount++;

                // check if mandatory error on calc
                if(errorObj.errorType == this.MANDATORY_ERROR){
                    hasMandatoryErrors = true;
                }
            }
        }

        // check if mandatory error note visible or not
        if(!hasMandatoryErrors) {
            this.hideErrorNote(this.mandatoryErrorNode);
        }

        return errorCount;
    },

    /**
     * check single error and show/hide error
     * @param item
     */
    checkSingleError : function (item) {

        var obj = item.getError();

        var returnObj = {};
        returnObj.hasError = false;
        returnObj.errorType = "";

        // hide value error note on top of page
        // hide red border on input field
        this.hideError(obj.id, obj.errorId);

        // hide combination errors
        var l = item.combinationErrorIdArray.length;
        while(l--){
            this.hideError(item.id, item.combinationErrorIdArray[l]);
        }

        if (obj.hasMandatoryError) {
            returnObj.hasError = true;
            returnObj.errorType = this.MANDATORY_ERROR;

            if (this.showMandatoryErrors) {
                this.showError(obj.id, this.mandatoryErrorNode);
            }
        } else {

            if (obj.hasValueError) {
                returnObj.hasError = true;
                returnObj.errorType = this.VALUE_ERROR;

                this.showError(obj.id, obj.errorId);
            }
        }

        return returnObj;
    },

    /**
     * show error if input combinations have error
     * @returns {number}
     */
    showCombinationErrors : function() {

        var errorCount = 0;

        var l = this.inputIds.length;
        while (l--) {
            var item = this.inputDict[this.inputIds[l]];

            if(item.hasCombinationError){

                this.showError(item.id, item.combinationErrorIdArray[item.combinationErrorIdActive]);
            }
        }

        return errorCount;
    }
};

/**
 * core input item of calculator
 * @param node
 * @param defaultValue
 * @param type
 * @param min
 * @param max
 * @constructor
 */
Migros.Components.Calculator.InputItem = function(node, defaultValue, type, min, max) {

    var that = this;
    var TYPE_INPUT = "input";
    var TYPE_SELECT = "select";
    var TYPE_RADIO = "radio";
    var formatted_value = "";

    this.node = node;
    this.type = type || TYPE_INPUT;
    this.id = $(that.node).attr('id');
    this.errorCount = 0;
    this.defaultValue = defaultValue || -1;
    this.value = defaultValue;
    this.minValue = parseFloat(min);
    this.maxValue = parseFloat(max);
    this.errorId = "calc-error-" + this.id;
    this.combinationErrorId = "calc-error-" + this.id +"-combination";
    this.isMandatory = ($(this.node).attr('data-mandatory') == "true") ? true : false;
    this.isActive = ((this.node).hasAttribute('disabled') == true) ? false : true;
    this.hasCombinationError = false;

    this.inputType = $(that.node).attr('data-inputtype');
    this.formatInput = $(that.node).attr('data-formatinput');
    this.formatInputToFixed = $(that.node).attr('data-formattofixed');
    this.combinationErrorIdArray = [];
    this.combinationErrorIdActive;


    // set class="disabled" for IE8
    if(!this.isActive){
        if($.browser.msie){
            $(that.node).addClass('disabled');
        }
    }

    /**
     * set active/inactive state
     * @param val
     */
    this.setState = function(val) {

        if(val == "active"){
            that.isActive = true;
            $(that.node).removeAttr('disabled');

            if($.browser.msie){
                $(that.node).removeClass('disabled');
            }
        } else {
            that.isActive = false;
            that.resetInputValue();
            $(that.node).attr('disabled', 'disabled');

            if($.browser.msie){
                $(that.node).addClass('disabled');
            }
        }
    };

    /**
     * check if error on input field
     * @param val
     * @returns {obj with error types and ids}
     */
    this.getError = function() {

        that.errorCount = 0;

        var hasError = false;
        var hasMandatoryError = false;
        var hasValueError = false;
        var obj = {};

        if(that.isActive){
            hasMandatoryError = that.hasMandatoryError();
            hasValueError = that.hasValueError();
        }

        hasError = (that.errorCount == 0) ? false : true;

        obj.hasError = hasError;
        obj.hasValueError = hasValueError;
        obj.hasMandatoryError = hasMandatoryError;
        obj.id = that.id;
        obj.errorId = that.errorId;
        obj.combinationErrorId = that.combinationErrorId;
        obj.hasCombinationError = that.hasCombinationError;
        obj.type = that.type;
        obj.value = that.value;

        return obj;
    };

    /**
     * check if input has value error (min/max)
     * @returns {boolean}
     */
    this.hasValueError = function() {

        var hasValueError = false;
        if (that.value != -1) { // if input field is filled
            if (that.minValue != undefined && that.value < that.minValue) {
                hasValueError = true;
                that.errorCount++;
            }

            if (that.maxValue != undefined && that.value > that.maxValue) {
                hasValueError = true;
                that.errorCount++;
            }
        }

        return hasValueError;
    };

    /**
     * check if input is filled
     */
    this.hasMandatoryError = function() {

        var hasError = false;

        if(that.isMandatory) {

            if(that.type == TYPE_INPUT){
                if(that.value == -1){
                    hasError = true;
                    that.errorCount++;
                }
                if (that.value == 0 && that.minValue > 0){
                    hasError = true;
                    that.errorCount++;
                }
            } else if(that.type == TYPE_SELECT) {
                if(that.value == that.defaultValue){
                    hasError = true;
                    that.errorCount++;
                }
            } else if(that.type == TYPE_RADIO) {
                that.value = $(that.node).find("input[name='"+that.id+"']:checked").val();
                if(!that.value){
                    hasError = true;
                    that.errorCount++;
                }
            }
        }

        return hasError;
    };

    /**
     * format value
     */
    this.formatValue = function() {

        formatted_value = $(that.node).val();
        formatted_value = formatted_value.replace(/\s+/g, ''); /*remove spaces*/
        var float_value = parseFloat(formatted_value) || "-1";

        if(formatted_value == "0"){
            float_value = 0;
        }

        if(that.formatInput && that.formatInput == "true"){

            switch(that.inputType){

                case "number":
                    formatted_value = Migros.Utils.formatNumber(float_value, " ", parseInt(that.formatInputToFixed));
                    break

                case "percentage":
                    formatted_value = formatted_value.replace(/,/g, '.');
                    formatted_value = Migros.Utils.formatPercentage(formatted_value, ",", parseInt(that.formatInputToFixed));
                    break;

                case "int":
                    float_value = parseInt(float_value);
                    that.value = float_value;
                    formatted_value = Migros.Utils.formatNumber(float_value, " ", 0);
                    break;

                case "negativeInt":
                    float_value = parseInt(float_value);
                    that.value = float_value;
                    formatted_value = Migros.Utils.formatNumber(float_value, " ", 0);
                    break;
            }
        }


        if(formatted_value != "-1"){

            if(formatted_value != "0"){
                $(that.node).val(formatted_value);
            } else {
                if(that.minValue == 0) {
                    $(that.node).val("0");
                } else {
                    formatted_value = "";
                    $(that.node).val("");
                }
            }

        } else {
            formatted_value = "-1";
        }

        return formatted_value;
    };

    /**
     * remove value formatting and set floating values in input fields (if not percentage)
     */
    this.setInputValue = function() {

        if(that.value != undefined && that.value != -1){
            if(that.inputType != "percentage"){
                $(that.node).val(that.value);
            } else {
                $(that.node).val(Migros.Utils.formatPercentage(that.value, ",", parseInt(that.formatInputToFixed)));
            }
        } else {
            $(that.node).val("");
        }
    };

    /**
     * reset value
     */
    this.resetInputValue = function() {
        that.value = that.defaultValue;
        that.setInputValue();
    };

    /**
     * get text of selected option
     */
    this.getSelectionText = function() {

        return $(that.node).find('option:selected').text();
    };
};

/**
 * calculator personal credit
 * @param node
 * @constructor
 */
Migros.Components.Calculator.PersonalCredit =  function(node){

    var that = this,
    	requestCounter = 0,
        amountSlider,
        currencyUnit = "CHF",
        percUnit = "%",
        defaultRadioId,
        requestUrl,
        targetCreditAmount,
        targetCreditDuration, // new
        inputIsFocused,
        checkedForeignId,
        creditAmountMin,
        creditAmountMax,
        creditTotalAmount,
        resetInProgress = false;

    var init = function() {

        // set variables
        that.node = node;
        that.id = $(that.node).find('form').attr('id');
        that.resultNote = $(that.node).find('.calc-result-note');
        that.resultNoteError = $(that.node).find('.calc-result-note-error');
        that.resultNode = $(that.node).find('.calc-result');
        that.creditTypeNode = $(that.node).find('.calc-credit-type');
        that.mandatoryErrorNode = 'calc-error-personal-credit-mandatory';
        that.serverErrorNode = 'calc-error-personal-credit-server';
        that.inputDict = [];
        that.inputIds = [];
        that.positiveSavingNote = $(that.node).find('.calc-result-note-positive');
        that.negativeSavingNote = $(that.node).find('.calc-result-note-negative');
        that.showMandatoryErrors = true;
        that.showFlag = 0;
        that.calculatorType = "credit-type-new";
        that.ratingDependentPricing = $(that.node).hasClass('rating-dependent-pricing');

        // default radio
        defaultRadioId = getDefaultSelectedRadio();

        //scriptdata
        that.getScriptData(that.node);
        requestUrl = decodeURIComponent(that.scriptData.request_url);
        if(that.ratingDependentPricing){
            targetCreditAmount = that.scriptData.credit_upgrade_amount_default;
        }else{

            targetCreditAmount = that.scriptData.credit_amount_default;
        }

        that.thresholdNew = that.scriptData.threshold_new;
        that.threshold = that.scriptData.threshold;
        that.interestRateLable = that.scriptData.interest_rate.replace('.', ',');

        that.interestRateNormalLable = that.scriptData.interest_rate_normal.replace('.', ',');

        $('#target-credit-amount-error-max').html($('#target-credit-amount-error-max').html().replace("##MAXCREDITAMOUNT##", "<mbmaxamount></mbmaxamount>"));
        $('#target-credit-amount-error-min').html($('#target-credit-amount-error-min').html().replace("##MINCREDITAMOUNT##", "<mbminamount></mbminamount>"));

        // updateCreditAmount
        updateCreditAmount();

        // tooltips
        that.setupTooltipsV2();

        // init handler
        that.setupEventHandler();

        // setup inputs
        setupInputs();

        // setup slider
        setupSlider();


        // Hide Checkboxes
        if(that.creditTypeNode.hasClass('hide')){
        	that.creditTypeNode.hide();
        	$('#credit-type-external').click();
        }

        // calculate default result
		setTimeout(function(){
			$('.personal-credit-amount-slider').find('.ui-slider-handle').attr('data-interest-rate', that.interestRateLable);
	        $('.calc-total-credit-amount label .text').attr('data-interest-rate', that.interestRateLable);
	    	updateInterestRateFlag(targetCreditAmount);
	        updateResult();
		}, 500);
    };

    var updateCreditAmount = function(){
    	that.creditTotalAmount = parseInt(that.scriptData.credit_amount_max);
        that.creditAmountMin = parseInt(that.scriptData.credit_amount_min);
        that.creditAmountMax = parseInt(that.scriptData.credit_amount_max);
        if(that.ratingDependentPricing){
	        if(that.calculatorType == "credit-type-existing"){
	        	that.creditTotalAmount = parseInt(that.scriptData.credit_upgrade_total_amount);
	        	that.creditAmountMin = parseInt(that.scriptData.credit_upgrade_amount_min);
	        	that.creditAmountMax = parseInt(that.scriptData.credit_upgrade_amount_max);
          	}else if(that.calculatorType == "credit-type-external"){
          		that.creditTotalAmount = parseInt(that.scriptData.credit_replace_total_amount);
          		that.creditAmountMin = parseInt(that.scriptData.credit_replace_amount_min);
          		that.creditAmountMax = parseInt(that.scriptData.credit_replace_amount_max);
  	    	}
        }
        $('#target-credit-amount-error-max mbmaxamount').html(Migros.Utils.formatNumber(that.creditTotalAmount, " ", 2));
        $('#target-credit-amount-error-min mbminamount').html(Migros.Utils.formatNumber(that.creditAmountMin, " ", 2));
    }

    /**
     * setup inputs by filling inputDictionnary and Array for input ids
     * @param e
     */
    var setupInputs = function(e) {

        // input fields
        $.each($(that.node).find(".calc-input input[type='text'], .calc-input input[type='number']"), function(i, el){

            var id = $(el).attr('id');
            var obj = getInputInterval(id);
            var value = -1;

            if($(that.node).attr('data-inputtype') != "percentage"){
                value = Migros.Utils.unformatNumber($(el).val());
            } else {
                value = Migros.Utils.unformatPercentage($(el).val());
            }

            var inputItem = new Migros.Components.Calculator.InputItem(el, value || -1, $(el).attr('type'), obj.minValue, obj.maxValue);
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });

        // select dropdowns
        $.each($(that.node).find(".calc-input select"), function(i, el){

            var id = $(el).attr('id');

            var inputItem = new Migros.Components.Calculator.InputItem(el, $(el).val(), "select" );
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });


        $(that.inputDict['foreign-interest-rate'].node).keydown(textInputKeyDownHandler);
        $(that.inputDict['foreign-credit-rate'].node).keydown(textInputKeyDownHandler);
    };

    /**
     * get min/max values of input fields
     * @param id
     * @returns {{}}
     */
    var getInputInterval = function(id) {

        var obj = {};

        switch(id){

            case 'target-credit-amount':
                obj.minValue = that.creditAmountMin;
                obj.maxValue = that.creditAmountMax;
                break;

            case 'foreign-interest-rate':
                obj.maxValue = that.scriptData.interest_rate_max;
                break;

            case 'foreign-credit-rate':
                obj.maxValue = parseFloat(parseFloat(that.scriptData.interest_rate_max)/100 * that.creditAmountMax);
                break;

            default:
                break;
        }

        return obj;
    };

    /**
     * get default id of selected radio
     * @returns {*}
     */
    var getDefaultSelectedRadio = function() {

        var id;

        $.each($(that.node).find("input[type='radio']"), function(i, el){

            if($(el).attr('checked')){
                id = $(el).attr('id');
            }
        });

        return id;
    };

    /**
     * radio change handler
     * @param e
     */
    this.radioChangeHandler = function(e){

        if( !e ) e = window.event;
        var that = e.data.self;

        var id = $(e.target).attr('id');
        var name = $(e.target).attr('name');

        if(name == 'credit-type'){
        	if(id == 'credit-type-external'){
                updateInterestRateFlag( Migros.Utils.unformatNumber($('#total-credit-amount').val()) );
        		that.calculatorType  = "credit-type-external";
        		$('#target-foreign-credit-label').css('display','block');
        		$('#target-foreign-upgrade-label').css('display','block');
        		$('#target-credit-amount-label').css('display','none');
        		$('.target-credit-upgrade-label').css('display','none');
                $('.calc-residual-debt').show();
            	$('.calc-additional-footer').hide();
            	$('.calc-additional-header').removeClass('active');
            	$('.calc-additional-result').removeClass('active');
                $('.calc-total-credit-amount').show();
                $('.foreign-bank-c-no-data-info .interest-rate-new').css('display','none');
                $('.foreign-bank-c-no-data-info .interest-rate-external').css('display','block');
                that.inputDict['foreign-interest-rate'].value = "";
            } else if(id == 'credit-type-existing'){
                updateInterestRateFlag( targetCreditAmount );
        		that.calculatorType  = "credit-type-existing";
        		$('#target-foreign-credit-label').css('display','none');
        		$('#target-foreign-upgrade-label').css('display','none');
        		$('#target-credit-amount-label').css('display','none');
        		$('.target-credit-upgrade-label').css('display','block');
                $('.calc-residual-debt').show();
            	$('.calc-additional-footer').hide();
            	$('.calc-additional-header').removeClass('active');
            	$('.calc-additional-result').removeClass('active');
                $('.calc-total-credit-amount').show();
                $('.foreign-bank-c-no-data-info .interest-rate-new').css('display','block');
                $('.foreign-bank-c-no-data-info .interest-rate-external').css('display','none');
                that.inputDict['foreign-interest-rate'].value = "";
            } else {
                updateInterestRateFlag(targetCreditAmount);
        		that.calculatorType = "credit-type-new";
        		$('#target-foreign-credit-label').css('display','none');
        		$('#target-foreign-upgrade-label').css('display','none');
        		$('#target-credit-amount-label').css('display','block');
        		$('.target-credit-upgrade-label').css('display','none');
                $('.calc-residual-debt').hide();
            	$('.calc-additional-footer').hide();
            	$('.calc-additional-header').removeClass('active');
            	$('.calc-additional-result').removeClass('active');
                $('.calc-total-credit-amount').hide();
                $('#residual-debt').val('');
                $('.foreign-bank-c-no-data-info .interest-rate-new').css('display','block');
                $('.foreign-bank-c-no-data-info .interest-rate-external').css('display','none');
                that.inputDict['residual-debt'].value = -1;
            }
        	resetForm();
        }

        if(!resetInProgress){
            updateResult();
        }

            // if server error -> hide
        that.hideServerError();
    };

    /**
     * handler for select input change
     * @param e
     */
    this.selectInputChangeHandler = function(e){

        if( !e ) e = window.event;

        // call parent
        that.parent.selectInputChangeHandler(e, that);

        updateResult();
    };

    /**
     * form reset
     * @param e
     */
    this.formResetClickHandler = function(e) {

        if( !e ) e = window.event;

        targetCreditAmount = "1000";
        inputIsFocused = false;
        resetInProgress = true;
        updateSlider();

        $('#'+defaultRadioId).trigger('click');

        // call parent
        that.parent.formResetClickHandler(e, that);

        amountInputChangeHandler();
    };

    /**
     * amount Input focus handler
     * remove formatted value
     * @param e
     */
    this.textInputFocusHandler = function(e){

        if( !e ) e = window.event;

        if($(e.target).attr('id') == 'target-credit-amount' || $(e.target).attr('id') == 'residual-debt'){
            inputIsFocused = true;
        } else {
            inputIsFocused = false;
        }

        // call parent
        that.parent.textInputFocusHandler(e);
    };

    /**
     * changes in any input field
     * @param e
     */
    this.textInputKeyupHandler = function(e) {

        if( !e ) e = window.event;

        var id = $(e.target).attr('id');

        switch(id){
            case 'target-credit-amount':
                amountInputKeyUpHandler(e, id);
                break;
            case 'residual-debt':
            	//console.log('residual-debt', $('#residual-debt').val(), $('#residual-debt').val().replace(/\s+/g, ''));
            	that.inputDict['residual-debt'].value = $('#residual-debt').val().replace(/\s+/g, '');
                updateResult();
                //amountInputKeyUpHandler(e, id);
                break;
        }

        // call parent
        that.parent.textInputKeyupHandler(e, that);

    };

    /**
     * on text input change handler
     * @param e
     */
    this.textInputChangeHandler = function(e) {
        if( !e ) e = window.event;

        // call parent
        that.parent.textInputChangeHandler(e);

        var id = $(e.target).attr('id');

        switch(id){
            case 'target-credit-amount':
            	//console.log('target-credit-amount');
                amountInputChangeHandler();
                break;
            case 'residual-debt':
            	//console.log('textInputChangeHandler');
            	residualDebtInputChangeHandler();
                break;
            default:
                break;
        }

        if(!resetInProgress){
            updateResult();
        }
    };


    var textInputKeyDownHandler = function(e) {

        if( !e ) e = window.event;
        var id = $(e.target).attr('id');
        var charCode = (e.which) ? e.which : e.keyCode;

        if(charCode == 9){

            $(e.target).blur();
            e.preventDefault();
        }
    };

    /**
     * handler after amount input changed on key up
     * @param e
     */
    var amountInputKeyUpHandler = function(e, id){

        var val = e.target.value
        val = val.replace(/\s+/g, ''); /*remove spaces*/
        targetCreditAmount = parseInt(val) || 0;
        that.inputDict[id].value = targetCreditAmount;

        that.hideError(id, id+'-error-max');
        that.hideError(id, id+'-error-min');
        that.hideError(id, 'calc-error-personal-credit-mandatory');
        if (that.inputDict[id].getError().hasError) {
            if (!that.inputDict[id].getError().hasMandatoryError) {

                if (targetCreditAmount > that.creditAmountMax) {
                    that.showError(id, id + '-error-max');
                }

                if (targetCreditAmount < that.creditAmountMin) {
                    that.showError(id, id + '-error-min');
                }
            } else {
                that.showError(id,'calc-error-personal-credit-mandatory');
            }
        }

        //updateSlider();
        updateNewSlider(id);
        updateResult();
    };

    /**
     * amount input change handler
     * @param id
     * @param val
     */
    var amountInputChangeHandler = function(){

        var input = that.inputDict['target-credit-amount'];
        input.value = targetCreditAmount;

        if(targetCreditAmount > 0){
            // console.log('targetCreditAmount', targetCreditAmount, Migros.Utils.formatNumber(targetCreditAmount, " ", 2));
            //targetCreditAmount = targetCreditAmount.replace(/\s+/g, ''); /*remove spaces*/
            var formattedValue = Migros.Utils.formatNumber(targetCreditAmount, " ", 2);
            $(input.node).val(formattedValue);
        }
    };

    /**
     * amount input change handler
     * @param id
     * @param val
     */
    var residualDebtInputChangeHandler = function(){

        var val = that.inputDict['residual-debt'].value;
        val = parseInt(val) || 0;
        //console.log(that.inputDict['residual-debt'], Migros.Utils.formatNumber(val, " ", 2));
        if(val > 0){
            var formattedValue = Migros.Utils.formatNumber(val, " ", 2);
            $('#residual-debt').val(formattedValue);
        }

    };

    /**
     * slider for credit amount
     */
    var setupSlider = function() {
        amountSlider = $(that.node).find('.calc-slider');
        $(that.node).find('.calc-slider').slider({
            animate: "normal",
            slide: sliderSlideHandler,
            change: sliderChangeHandler,
            min: parseInt(that.creditAmountMin),
            max: parseInt(that.scriptData.credit_amount_max),
            step: 1000
        });

        var input = that.inputDict['target-credit-amount'];
        input.defaultValue = targetCreditAmount;
        amountInputChangeHandler();
        $('.slider-container .ui-slider .ui-slider-handle').attr('data-interest-rate', that.interestRateLable);
    };

    /**
     * update slider on input value change
     * @param event
     * @param ui
     */
    var updateSlider = function(event, ui){
    	if(that.interestRateLable != '0%' && that.thresholdNew > 0 && that.threshold > 0){
	    	if(targetCreditAmount >= ($('input[name="credit-type"]:checked').attr('id')=='credit-type-new'?that.thresholdNew:that.threshold)){
	    		$('.slider-container .ui-slider .ui-slider-handle').addClass('show-interest-rate');
	    	}else{
	    		$('.slider-container .ui-slider .ui-slider-handle').removeClass('show-interest-rate');
	    	}
    	}
        updateInterestRateFlag(targetCreditAmount);
        $(amountSlider).slider("value", targetCreditAmount);
    };

    /**
     * handler after slider value changed
     * @param event
     * @param ui
     */
    var sliderSlideHandler = function( event, ui ) {
    	if(that.interestRateLable != '0%' && that.thresholdNew > 0 && that.threshold > 0){
	    	if(ui.value >= ($('input[name="credit-type"]:checked').attr('id')=='credit-type-new'?that.thresholdNew:that.threshold)){
	    		$('.slider-container .ui-slider .ui-slider-handle').addClass('show-interest-rate');
	    	}else{
	    		$('.slider-container .ui-slider .ui-slider-handle').removeClass('show-interest-rate');
	    	}
    	}

        inputIsFocused = false;
        targetCreditAmount = ui.value;

        var input = that.inputDict['target-credit-amount'];

        if(input.getError().hasError){
            that.hideError('target-credit-amount', 'target-credit-amount-error-max');
            that.hideError('target-credit-amount', 'target-credit-amount-error-min');
            that.hideError('target-credit-amount', 'calc-error-personal-credit-mandatory');
        }

        amountInputChangeHandler();
    };

    /**
     * on slider up handler
     * @param event
     * @param ui
     */
    var sliderChangeHandler = function (event, ui) {
        if(!inputIsFocused){
            if(!resetInProgress){
                var input = that.inputDict['target-credit-amount'];
                targetCreditAmount = ui.value;
                amountInputChangeHandler();
                updateResult();
            } else {

                resetInProgress = false;
            }
        }
    };

    /**
     * update
     */
    var updateResult = function() {
        var checkedForeignValue = $(that.node).find("input[name='foreign-values']:checked").attr('id');

        if(that.ratingDependentPricing){
        	checkedForeignValue = 'foreign-interest-rate-radio';


            if($('#foreign-interest-rate').val() == ""){
                // console.log( that.inputDict['foreign-interest-rate'],  $('#foreign-interest-rate').val());
                $('.calc-additional-result .calc-result-line').hide();
                $('.calc-additional-result .calc-result-line').eq(0).show();
                if (!$('body').hasClass('smartphone')) {
                	$('.calc-additional-result .calc-result-line').eq(1).show();
                }
                $('.calc-result-line.foreign-interest-rate .values-copy').hide();
            	$('.calc-additional-header h2').addClass('hidden');
	            that.hideError('foreign-interest-rate', 'foreign-credit-rate-error-invalid');
                that.showError('foreign-interest-rate', 'foreign-interest-rate-error-invalid');
            	return;
            }
            if(that.inputDict['foreign-interest-rate'].errorCount != 0){
                $('.calc-additional-result .calc-result-line').hide();
                $('.calc-additional-result .calc-result-line').eq(0).show();
                if (!$('body').hasClass('smartphone')) {
                	$('.calc-additional-result .calc-result-line').eq(1).show();
                }
                $('.calc-result-line.foreign-interest-rate .values-copy').hide();
            	$('.calc-additional-header h2').addClass('hidden');
	            that.hideError('foreign-interest-rate', 'foreign-interest-rate-error-invalid');
	            that.hideError('foreign-interest-rate', 'foreign-credit-rate-error-invalid');
	            that.showError('foreign-interest-rate', 'calc-error-foreign-interest-rate');
                that.inputDict['foreign-interest-rate'].errorCount = 0;
            	return;
            }

        }

        if(Migros.Utils.unformatNumber($('#target-credit-amount').val()) <= that.creditAmountMax){
            if(that.inputDict['target-credit-amount'].getError().hasError){
	            that.hideError('target-credit-amount', 'target-credit-amount-error-max');
	            that.hideError('target-credit-amount', 'target-credit-amount-error-min');
	            that.hideError('target-credit-amount', 'calc-error-personal-credit-mandatory');
            }
        }

		if( $('#residual-debt').val() == ""){
			$('#residual-debt').val(0);
			that.inputDict['residual-debt'].value = 0;
		}

    	//console.log( 'errorCount', that.inputDict['target-credit-amount'].errorCount  );

        var totalCreditAmount = parseFloat(that.inputDict['target-credit-amount'].value)
    	if(parseFloat($('#target-credit-duration').val()) != parseFloat(that.inputDict['target-credit-duration'].value)){
    		that.inputDict['target-credit-duration'].value =  parseInt($('#target-credit-duration').val());
    	}

    	// residual-debt comparison input vs slider
    	if(Migros.Utils.unformatNumber($('#residual-debt').val()) != parseFloat(that.inputDict['residual-debt'].value)){
    		that.inputDict['residual-debt'].value = Migros.Utils.unformatNumber($('#residual-debt').val());
    	}

    	// target-credit-amount comparison input vs slider
    	if(Migros.Utils.unformatNumber($('#target-credit-amount').val()) != parseFloat(that.inputDict['target-credit-amount'].value)){
    		that.inputDict['target-credit-amount'].value = Migros.Utils.unformatNumber($('#target-credit-amount').val());
    	}

    	// Add residual-debt to totalCreditAmount
    	if(that.inputDict['residual-debt'].value != '' && that.inputDict['residual-debt'].value != -1 && that.calculatorType != "credit-type-new"){
    		totalCreditAmount += parseFloat(that.inputDict['residual-debt'].value);
    	}

    	// round up to next 1000 - totalCreditAmountValue
    	var totalCreditAmountValue = totalCreditAmount;
    	if(totalCreditAmountValue % 1000 != 0){
    		totalCreditAmountValue = totalCreditAmountValue - (totalCreditAmountValue % 1000) + 1000;
    	}

    	$('#total-credit-amount').val(Migros.Utils.formatNumber(totalCreditAmountValue, " ", 2));
    	$('.display-total-credit-amount').html(Migros.Utils.formatNumber(totalCreditAmountValue, " ", 2));


    	// console.log( that.inputDict['target-credit-amount'].errorCount );
        if(that.inputDict['target-credit-amount'].errorCount == 0) {
        	$('.module-calculator.personal-credit .calc-text-bottom .button').removeClass('inactive');

            that.hideError('target-credit-amount', 'target-credit-amount-error-max');
            that.hideError('target-credit-amount', 'target-credit-amount-error-min');
            that.hideError('target-credit-amount', 'calc-error-personal-credit-mandatory');

        	// console.log( $('#target-credit-duration').val() , that.inputDict['target-credit-duration'].value);
        	// console.log( $('#residual-debt').val() , that.inputDict['residual-debt'].value);
        	// console.log( $('#target-credit-amount').val() , that.inputDict['target-credit-amount'].value);

        	var residualDebtValue = Migros.Utils.formatNumber($('#residual-debt').val().replace(/\s+/g, ''), " ", 2);
        	if(residualDebtValue != -1){
            	//$('#residual-debt').val(residualDebtValue);
        	}

			if(that.calculatorType != "credit-type-external"){
	      		updateInterestRateFlag(that.inputDict['target-credit-amount'].value);
    		}else{
                updateInterestRateFlag( Migros.Utils.unformatNumber($('#total-credit-amount').val()) );
    		}

        	//console.log( 'totalCreditAmount', totalCreditAmount, that.creditTotalAmount, totalCreditAmount >= that.creditAmountMin && totalCreditAmount <= that.creditAmountMax );
        	if(totalCreditAmount >= that.creditAmountMin && totalCreditAmount <= that.creditTotalAmount){

        		that.hideError('target-credit-amount', 'target-credit-amount-error-max');
                checkedForeignId = $('#'+checkedForeignValue).closest('.form-row').find("input[type='text']").attr('id');

            	// console.log(that.ratingDependentPricing,foreignValueIsValid());

            	if(that.ratingDependentPricing){
            		checkedForeignId = "foreign-interest-rate";
            	}
        		if(foreignValueIsValid()){
                    var _config = {
                        id: "personalcredit",
                        requestCounter: ++requestCounter,
                        foreignInterestRateA: that.scriptData.foreign_bank_a_interest_rate,
                        foreignInterestRateB: that.scriptData.foreign_bank_b_interest_rate,
                        creditAmount: that.inputDict['target-credit-amount'].value,
                        duration: that.inputDict['target-credit-duration'].value,
                        foreignInterestRate: $('#foreign-interest-rate').val().replace(',','.'),
                        foreignMonthlyRate: that.inputDict['foreign-credit-rate'].value,
                        remainingDebitAmount: (that.calculatorType != "credit-type-new")?that.inputDict['residual-debt'].value:0,
                        creditType: $('input[name="credit-type"]:checked').attr('id'),
                        foreignValue:checkedForeignValue};

                    var _testData = {
                        migros_credit: {
                            interest_rate: "12",
                            monthly_rate: "13",
                            total_cost: "14"
                        },
                        foreign_credit: {
                            interest_rate: "12",
                            monthly_rate: "13",
                            total_cost: "14"
                        },
                        additional_values : {
                            saving: "10000"
                        }
                    };
                } else {
                    var _config = {
                        id: "personalcredit",
                        requestCounter: ++requestCounter,
                        foreignInterestRateA: that.scriptData.foreign_bank_a_interest_rate,
                        foreignInterestRateB: that.scriptData.foreign_bank_b_interest_rate,
                        creditAmount: that.inputDict['target-credit-amount'].value,
                        duration: that.inputDict['target-credit-duration'].value,
                        remainingDebitAmount: (that.calculatorType != "credit-type-new")?that.inputDict['residual-debt'].value:0,
                        creditType: $('input[name="credit-type"]:checked').attr('id'),
                        foreignInterestRate: "",
                        foreignMonthlyRate: "",
                        foreignValue: "" }

                    var _testData = {
                        "migros_credit": {
                            "interest_rate": "12",
                            "monthly_rate": "13",
                            "total_cost": "14"
                        },
                        "additional_values" : {
                            "saving": "10000"
                        }
                    };
                }

                var _url = requestUrl;
//                that.requestCompleteEvent(_testData); // TODO for testing
                that.requestData(_url, _config, that.requestCompleteEvent);

        	}else{
            	$('.module-calculator.personal-credit .calc-text-bottom .button').addClass('inactive');
        		if(totalCreditAmount < that.creditAmountMin){
        			that.showError('target-credit-amount', 'target-credit-amount-error-min');
        		} else if(totalCreditAmount > that.creditAmountMax){
        			that.showError('target-credit-amount', 'target-credit-amount-error-max');
        		}

        		that.hideResult();
        	}
        } else {
        	$('.module-calculator.personal-credit .calc-text-bottom .button').addClass('inactive');
            that.hideResult();
    		if(Migros.Utils.unformatNumber($('#target-credit-amount').val()) < that.creditAmountMin){
    			that.showError('target-credit-amount', 'target-credit-amount-error-min');
    		} else if(Migros.Utils.unformatNumber($('#target-credit-amount').val()) > that.creditAmountMax){
    			that.showError('target-credit-amount', 'target-credit-amount-error-max');
    		}
        }
    };




    /* New Duration slider */

    $('#target-credit-duration').change(function(){
    	if(parseInt($(this).val()) !=  that.inputDict['target-credit-duration'].value){
       		that.inputDict['target-credit-duration'].value = $(this).val();
       		targetCreditDurationSlider.slider('value', $(this).val());
       		$('.display-credit-duration').html(that.inputDict['target-credit-duration'].value)
           	updateResult();
    	}
    });

    $('#target-credit-amount').change(function(){
        $('.personal-credit-amount-slider').find('.ui-slider-handle').attr('data-interest-rate', that.interestRateLable);
    	if(Migros.Utils.unformatNumber($('#target-credit-amount').val()) <= that.creditAmountMax){
    	}
        	// round up to next 1000 -     target-credit-amount
         	if( that.calculatorType == "credit-type-new" && that.inputDict['target-credit-amount'].value % 1000 != 0){
    		// console.log('1', that.inputDict['target-credit-amount'].value % 1000);
         		that.inputDict['target-credit-amount'].value = that.inputDict['target-credit-amount'].value - (that.inputDict['target-credit-amount'].value % 1000) + 1000;
         		// $('#target-credit-amount').val( Migros.Utils.formatNumber(that.inputDict['target-credit-amount'].value, " ", 2));
         		// input type number
         		$('#target-credit-amount').val( that.inputDict['target-credit-amount'].value );
        	}
         	// console.log('2', Migros.Utils.unformatNumber($(this).val()) , targetCreditAmountSlider.slider('value'));
       		that.inputDict['target-credit-amount'].value = Migros.Utils.unformatNumber($(this).val());
       		targetCreditAmount = that.inputDict['target-credit-amount'].value;
       		targetCreditAmountSlider.slider('value', that.inputDict['target-credit-amount'].value);
           	updateResult();
    });

    $('#residual-debt').change(function(){
    	if(Migros.Utils.unformatNumber($(this).val()) !=  targetCreditResidualDebt.slider('value') ){
       		that.inputDict['residual-debt'].value = Migros.Utils.unformatNumber($(this).val());
       		targetCreditResidualDebt.slider('value', that.inputDict['residual-debt'].value);
           	updateResult();
    	}
    });

    var updateNewSlider = function(id){
    	//console.log("updateNewSlider", that.inputDict[id].value);
    	if(that.inputDict[id].value >=  that.inputDict[id].minValue && that.inputDict[id].value <=  that.inputDict[id].maxValue){
        	targetCreditAmountSlider.slider('value', that.inputDict['target-credit-amount'].value);
    	}
    	//updateInterestRateFlag(that.inputDict['target-credit-amount'].value);
    }

    var updateInterestRateFlag = function(myTargetCreditAmoun){

    	if(that.interestRateLable != '0%' && that.thresholdNew > 0 && that.threshold > 0){
    		if( parseInt(myTargetCreditAmoun) >= parseInt($('input[name="credit-type"]:checked').attr('id')!='credit-type-existing'?that.thresholdNew:that.threshold) ){

    			if(that.calculatorType != "credit-type-external"){
		    		$('.personal-credit-amount-slider').find('.ui-slider-handle').addClass('show-interest-rate');
		    		$('.calc-total-credit-amount label .text').removeClass('show-interest-rate');
	    		}else{
		    		$('.calc-total-credit-amount label .text').addClass('show-interest-rate');
		    		$('.personal-credit-amount-slider').find('.ui-slider-handle').removeClass('show-interest-rate');
	    		}
    			$('.personal-credit-amount-slider').find('.ui-slider-handle').removeClass('normal');
    			$('.calc-total-credit-amount label .text').removeClass('normal');
    			$('.personal-credit-amount-slider').find('.ui-slider-handle').attr('data-interest-rate', that.interestRateLable);
    	        $('.calc-total-credit-amount label .text').attr('data-interest-rate', that.interestRateLable);
    		}else{
    			// $('.personal-credit-amount-slider').find('.ui-slider-handle').removeClass('show-interest-rate');
		    	// $('.calc-total-credit-amount label .text').removeClass('show-interest-rate');
    			$('.personal-credit-amount-slider').find('.ui-slider-handle').addClass('normal');
    			$('.calc-total-credit-amount label .text').addClass('normal');
    			$('.personal-credit-amount-slider').find('.ui-slider-handle').attr('data-interest-rate', that.interestRateNormalLable);
    	        $('.calc-total-credit-amount label .text').attr('data-interest-rate', that.interestRateNormalLable);

    		}
    	}
    }

    var targetCreditAmountSlider = uiSlider($('.personal-credit-amount-slider'), '#target-credit-amount' );
    var targetCreditResidualDebt = uiSlider($('.personal-credit-residual-debt-slider'), '#residual-debt' );
    var targetCreditDurationSlider = uiSlider($('.personal-credit-duration-slider'), '#target-credit-duration' );

    /* New Duration slider */


    var mobileAdditionalResult = function(){
    	if($('.calc-additional-header').hasClass('active')){
        	$('.calc-additional-footer').hide();
        	$('.calc-additional-header').removeClass('active');
        	$('.calc-additional-result').removeClass('active');
    	}else{
        	$('.calc-additional-header').addClass('active');
        	$('.calc-additional-result').addClass('active');
        	$('.calc-additional-footer').show();
    	}
    }

    $('.calc-additional-header').click(mobileAdditionalResult);
    $('.calc-additional-footer').click(mobileAdditionalResult);

    var resetForm = function(){
        that.inputDict['foreign-credit-rate'].value = '';
        that.inputDict['foreign-credit-rate'].setInputValue();
        that.inputDict['foreign-credit-rate'].formatValue();
        that.inputDict['foreign-interest-rate'].value = '';
        if(that.ratingDependentPricing){
        	that.inputDict['foreign-interest-rate'].value = that.scriptData.foreign_bank_interest_rate;
        }
        that.inputDict['foreign-interest-rate'].setInputValue();
        that.inputDict['foreign-interest-rate'].formatValue();
        that.hideError('foreign-interest-rate', 'calc-error-foreign-interest-rate');
        $('#foreign-interest-rate-radio').click()

        that.inputDict['target-credit-duration'].value = $('.personal-credit-duration-slider .ui-slider-data').attr('data-default-value');
        that.inputDict['target-credit-duration'].setInputValue();
        that.inputDict['target-credit-duration'].formatValue();
        $('.display-credit-duration').html(that.inputDict['target-credit-duration'].value)

        if(that.ratingDependentPricing){
        	that.inputDict['residual-debt'].value = parseInt(that.scriptData.residual_replace_amount_default);

	        if(that.calculatorType == "credit-type-new"){
	        	that.inputDict['target-credit-amount'].value =  that.scriptData.credit_amount_new_default;
	        } else if(that.calculatorType == "credit-type-existing"){
            	that.inputDict['target-credit-amount'].value =  that.scriptData.credit_upgrade_amount_default;
            	that.inputDict['residual-debt'].value =  that.scriptData.residual_upgrade_amount_default;
	        }else if(that.calculatorType == "credit-type-external"){
        		that.inputDict['target-credit-amount'].value =  that.scriptData.credit_replace_amount_default;
            	that.inputDict['residual-debt'].value =  that.scriptData.residual_replace_amount_default;
	    	}
        }else{
        	that.inputDict['residual-debt'].value = $('.personal-credit-residual-debt-slider .ui-slider-data').attr('data-default-value');

        	that.inputDict['target-credit-amount'].value =  that.scriptData.credit_amount_default;
        }

        that.inputDict['residual-debt'].setInputValue();
        that.inputDict['residual-debt'].formatValue();
        $(that.inputDict['residual-debt'].node).val(Migros.Utils.formatNumber(that.inputDict['residual-debt'].value, " ", 2));

        that.inputDict['target-credit-amount'].setInputValue();
        that.inputDict['target-credit-amount'].formatValue();

        if( $(that.inputDict['target-credit-amount'].node).attr('type') == 'number'){
        	$(that.inputDict['target-credit-amount'].node).val(that.inputDict['target-credit-amount'].value, " ", 2);
        }else{
        	$(that.inputDict['target-credit-amount'].node).val(Migros.Utils.formatNumber(that.inputDict['target-credit-amount'].value, " ", 2));
        }

    	targetCreditAmount = that.inputDict['target-credit-amount'].value;


    	updateCreditAmount();
        setupInputs();
    	var targetCreditAmountOptions;
    	var targetCreditResidualOptions;

    	if(that.ratingDependentPricing){
    		if(that.calculatorType == "credit-type-new"){
	    		targetCreditAmountOptions = {
	         		min: parseInt(that.scriptData.credit_amount_min),
	         		max: parseInt(that.scriptData.credit_amount_max),
	         		value: parseInt(that.scriptData.credit_amount_new_default)
	         	}
    		} else if(that.calculatorType == "credit-type-existing"){
	    		targetCreditAmountOptions = {
	         		min: parseInt(that.scriptData.credit_upgrade_amount_min),
	         		max: parseInt(that.scriptData.credit_upgrade_amount_max),
	         		value: parseInt(that.scriptData.credit_upgrade_amount_default)
	         	}
	    		targetCreditResidualOptions = {
	         		min: parseInt(that.scriptData.residual_upgrade_amount_min),
	         		max: parseInt(that.scriptData.residual_upgrade_amount_max),
	             	value: parseInt(that.scriptData.residual_upgrade_amount_default)
             	}
    		} else { // replace
	    		targetCreditAmountOptions = {
	         		min: parseInt(that.scriptData.credit_replace_amount_min),
	         		max: parseInt(that.scriptData.credit_replace_amount_max),
	         		value: parseInt(that.scriptData.credit_replace_amount_default)
	         	}
	    		targetCreditResidualOptions = {
	         		min: parseInt(that.scriptData.residual_replace_amount_min),
	         		max: parseInt(that.scriptData.residual_replace_amount_max),
	             	value: parseInt(that.scriptData.residual_replace_amount_default)
             	}
    		}
        }else{
    		targetCreditAmountOptions = {
         		value: parseInt(that.inputDict['target-credit-amount'].value)
         	}
    		targetCreditResidualOptions = {
         		value: parseInt( $('.personal-credit-residual-debt-slider .ui-slider-data').attr('data-default-value'))
         	}
        }

    	targetCreditAmountSlider.slider('option', targetCreditAmountOptions);
    	if(targetCreditResidualOptions != undefined){
        	targetCreditResidualDebt.slider('option', targetCreditResidualOptions);
    	}

    	targetCreditDurationSlider.slider('value', $('.personal-credit-duration-slider .ui-slider-data').attr('data-default-value'));
    	that.showFlag = 1;
    	updateInterestRateFlag(0);
    };


    /**
     * check if input of foreign value is valid (is filled, has no error)
     * @returns {boolean}
     */
    var foreignValueIsValid = function() {

        var bool = true;
        if (that.inputDict[checkedForeignId] && ((that.inputDict[checkedForeignId].value <= 0) || (that.inputDict[checkedForeignId].errorCount != 0))){
            bool = false;
        }

        return bool;
    };



    /**
     * ajax request complete and successful
     * @param data
     */
    this.requestCompleteEvent = function(data){

        var foreignValuesVisible = false;

        if (data !== null && data.length > 0) {
            that.resultData = JSONUtil.parse(data);
        }

        if(that.ratingDependentPricing){
            that.hideError('foreign-interest-rate', 'foreign-interest-rate-error-invalid');
            that.hideError('foreign-interest-rate', 'foreign-credit-rate-error-invalid');
            $('.calc-additional-result .calc-result-line').show();

            var _migrosBestSaving =  that.getFormattedResultNumber(that.resultData.migros_credit.foreign_bank_best_saving, 2);
            $('.calc-additional-header .foreign_bank_best_saving').html(_migrosBestSaving);
        	$('.calc-additional-header h2').removeClass('hidden');
            if(_migrosBestSaving <= 0 ){
            	$('.calc-additional-header h2').addClass('hidden');
            }

            var _migrosMonthlyRateReduced =  that.getFormattedResultNumber(that.resultData.migros_credit.monthly_rate_reduced, 2);
            var _migrosMonthlyRate =  that.getFormattedResultNumber(that.resultData.migros_credit.monthly_rate, 2);
            $('.calc-result-line .monthly-rate-value').eq(0).find('span').eq(1).html(_migrosMonthlyRateReduced);
            $('.calc-result-line .monthly-rate-value').eq(1).find('span').eq(1).html(_migrosMonthlyRate);

            var _migrosTotalCostReduced =  that.getFormattedResultNumber(that.resultData.migros_credit.total_cost_reduced, 2);
            var _migrosTotalCost =  that.getFormattedResultNumber(that.resultData.migros_credit.total_cost, 2);
            $('.calc-result-line .total-rate-value').eq(0).find('span').eq(1).html(_migrosTotalCostReduced);
            $('.calc-result-line .total-rate-value').eq(1).find('span').eq(1).html(_migrosTotalCost);

            var tempForeignInterestRate = $('#foreign-interest-rate').val().replace(',','.');
            $('#foreign-interest-rate').val(that.getFormattedResultPercentage(tempForeignInterestRate, 2));
            $('.calc-result-line.foreign-interest-rate .values-copy span').eq(0).html($('#foreign-interest-rate').val());
            $('.calc-result-line.foreign-interest-rate .values-copy').show();

            if(that.resultData.foreign_credit){
	            var _migrosForeignCreditMonthlyRate =  that.getFormattedResultNumber(that.resultData.foreign_credit.monthly_rate, 2);
	            $('.calc-result-line.monthly-rate .values span').eq(1).html(_migrosForeignCreditMonthlyRate);
	            $('.calc-result-line.monthly-rate .values-copy span').eq(1).html(_migrosForeignCreditMonthlyRate);

	            var _migrosForeignCreditTotalCost =  that.getFormattedResultNumber(that.resultData.foreign_credit.total_cost, 2);
	            $('.calc-result-line.total-cost .values span').eq(1).html(_migrosForeignCreditTotalCost);
	            $('.calc-result-line.total-cost .values-copy span').eq(1).html(_migrosForeignCreditTotalCost);
            }

            if(that.resultData.additional_values){
                var _migrosAdditionalValuesSaving =  that.getFormattedResultNumber(that.resultData.additional_values.saving, 2);
                var _migrosAdditionalValuesSavingReduced =  that.getFormattedResultNumber(that.resultData.additional_values.saving_reduced, 2);
                if(_migrosAdditionalValuesSavingReduced <= 0){
                    // that.showError('foreign-interest-rate', 'foreign-credit-rate-error-invalid');

                    if (!$('body').hasClass('smartphone')) {
                        $('.calc-additional-result .calc-result-line').hide();
                        $('.calc-additional-result .calc-result-line').eq(0).show();
                        $('.calc-additional-result .calc-result-line').eq(1).show();
                        $('.calc-additional-result .calc-result-line.foreign-bank-a-negative-data-info').show();
                        $('.calc-result-line.foreign-interest-rate .values-copy').hide();
                    }else{
                        $('.calc-additional-result .calc-result-line').hide();
                        $('.calc-additional-result .calc-result-line').eq(0).show();
                        $('.calc-additional-result .calc-result-line.foreign-bank-a-negative-data-info').show();
                        $('.calc-result-line.foreign-interest-rate .values-copy').hide();
                    }
                }else{
                    $('.calc-additional-result .calc-result-line.foreign-bank-a-negative-data-info').hide();
                    $('.calc-result-line.foreign-interest-rate .values-copy').show();
                    if (!$('body').hasClass('smartphone')) {
                        $('.calc-result-line.savings-values .values span').eq(1).html(_migrosAdditionalValuesSavingReduced);
                        $('.calc-result-line.savings-values .values-copy span').eq(1).html(_migrosAdditionalValuesSaving);
                    }else{
                        $('.calc-result-line.savings-low .values span').eq(1).html(_migrosAdditionalValuesSavingReduced);
                        $('.calc-result-line.savings-high .values span').eq(1).html(_migrosAdditionalValuesSaving);
                    }

                    if(_migrosAdditionalValuesSaving > 0){
                    	if (!$('body').hasClass('smartphone')) {
                            $('.calc-result-line.savings-values .values-copy span').eq(0).show();
                            $('.calc-result-line.savings-values .values-copy span').eq(1).show();
                            $('.calc-result-line.savings-values .values-copy span').eq(2).hide();
                    	}else{
                            $('.calc-result-line.savings-high .values span').eq(1).show();
                            $('.calc-result-line.savings-high .values span').eq(2).hide();
                            $('.calc-result-line.savings-high .values span').eq(2).hide();
                    	}
                    }else{
                    	if (!$('body').hasClass('smartphone')) {
                            $('.calc-result-line.savings-values .values-copy span').eq(0).hide();
                            $('.calc-result-line.savings-values .values-copy span').eq(1).hide();
                            $('.calc-result-line.savings-values .values-copy span').eq(2).show();
                    	}else{
                            $('.calc-result-line.savings-high .values span').eq(0).hide();
                            $('.calc-result-line.savings-high .values span').eq(1).hide();
                            $('.calc-result-line.savings-high .values span').eq(2).show();
                    	}
                    }
                }
            }else{
                $('.calc-additional-result .calc-result-line').hide();
                $('.calc-additional-result .calc-result-line').eq(0).show();
                $('.calc-additional-result .calc-result-line').eq(1).show();
            }

			if($('input[name="credit-type"]:checked').attr('id') == 'credit-type-new'){
				$('.calc-additional-header').show();
			} else if($('input[name="credit-type"]:checked').attr('id') == 'credit-type-existing'){
				$('.calc-additional-header').hide();
	        	$('.calc-additional-footer').hide();
	        	$('.calc-additional-header').removeClass('active');
	        	$('.calc-additional-result').removeClass('active');
			} else {
				$('.calc-additional-header').hide();
				$('.calc-additional-header').removeClass('active');
				$('.calc-additional-result').addClass('active');
			}

        	if($('input[name="credit-type"]:checked').attr('id') == 'credit-type-new' || Migros.Utils.unformatNumber($('#total-credit-amount').val()) <= that.creditTotalAmount){
                that.showResult();
        	}

            return;
        }

        if(that.resultData.migros_credit){
            var _migrosInterestRate = that.getFormattedResultPercentage(that.resultData.migros_credit.interest_rate, 2);
            var _migrosMonthlyRate =  that.getFormattedResultNumber(that.resultData.migros_credit.monthly_rate, 2);
            var _migrosTotalCost =  that.getFormattedResultNumber(that.resultData.migros_credit.total_cost, 2);
            var _migrosInterestRateReduced =  that.resultData.migros_credit.interest_rate_reduced;
            var _migrosRequestCounter =  that.resultData.migros_credit.request_counter;
            var _migrosBestSaving =  that.getFormattedResultNumber(that.resultData.migros_credit.foreign_bank_best_saving, 2);

            var _foreignInterestRateA = that.getFormattedResultPercentage(that.resultData.foreign_credit_a.interest_rate, 2);
            var _foreignMonthlyRateA = that.getFormattedResultNumber(that.resultData.foreign_credit_a.monthly_rate, 2);
            var _foreignTotalCostA = that.getFormattedResultNumber(that.resultData.foreign_credit_a.total_cost, 2);
            var _foreignSavingA = that.getFormattedResultNumber(that.resultData.foreign_credit_a.saving, 2);

            var _foreignInterestRateB = that.getFormattedResultPercentage(that.resultData.foreign_credit_b.interest_rate, 2);
            var _foreignMonthlyRateB = that.getFormattedResultNumber(that.resultData.foreign_credit_b.monthly_rate, 2);
            var _foreignTotalCostB = that.getFormattedResultNumber(that.resultData.foreign_credit_b.total_cost, 2);
            var _foreignSavingB = that.getFormattedResultNumber(that.resultData.foreign_credit_b.saving, 2);

            var _foreignInterestRateC = that.resultData.foreign_credit?that.getFormattedResultPercentage(that.resultData.foreign_credit.interest_rate, 2):-1;
            var _foreignMonthlyRateC =  that.resultData.foreign_credit?that.getFormattedResultNumber(that.resultData.foreign_credit.monthly_rate, 2):-1;
            var _foreignTotalCostC =  that.resultData.foreign_credit?that.getFormattedResultNumber(that.resultData.foreign_credit.total_cost, 2):-1;
            var _foreignSavingC =  that.resultData.additional_values?that.getFormattedResultNumber(that.resultData.additional_values.saving, 2):-1;

            // console.log( _migrosRequestCounter != requestCounter , that.ratingDependentPricing, $('#total-credit-amount').val() > that.creditAmountMax );
            if(_migrosRequestCounter != requestCounter || that.ratingDependentPricing && $('#total-credit-amount').val() > that.creditAmountMax){
        		return;
        	}

            $('.calc-additional-header .foreign_bank_best_saving').html(_migrosBestSaving);

            $('.calc-result-line .interest-rate-value span').eq(0).html(_migrosInterestRate);
            $('.calc-result-line .monthly-rate-value span').eq(1).html(_migrosMonthlyRate);
            $('.calc-result-line .total-rate-value span').eq(1).html(_migrosTotalCost);
            if(_migrosInterestRateReduced === "true"){
            	$('.calc-result-line .interest-rate-value').parent().addClass('blue');
            }else{
            	$('.calc-result-line .interest-rate-value').parent().removeClass('blue');
            }
            $('.calc-result-line .foreign-interest-rate-a span').eq(0).html( _foreignInterestRateA);
            $('.calc-result-line .monthly-rate-value-a span').eq(1).html( _foreignMonthlyRateA);
            $('.calc-result-line .total-rate-value-a span').eq(1).html( _foreignTotalCostA);
            $('.calc-result-line .saving-value-a span').eq(1).html( _foreignSavingA);

            $('.calc-result-line .foreign-interest-rate-b span').eq(0).html( _foreignInterestRateB);
            $('.calc-result-line .monthly-rate-value-b span').eq(1).html( _foreignMonthlyRateB);
            $('.calc-result-line .total-rate-value-b span').eq(1).html( _foreignTotalCostB);
            $('.calc-result-line .saving-value-b span').eq(1).html( _foreignSavingB);

           //$('.calc-result-line .foreign-interest-rate-c span').eq(0).html( _foreignInterestRateC);
            $('.calc-result-line .monthly-rate-value-c span').eq(1).html( _foreignMonthlyRateC);
            $('.calc-result-line .total-rate-value-c span').eq(1).html( _foreignTotalCostC);
            $('.calc-result-line .saving-value-c span').eq(1).html( _foreignSavingC);

            if(_foreignInterestRateC != -1){
            	if(Migros.Utils.unformatNumber(_foreignSavingC) > 0 || $('.foreign-bank-c-wrapper').hasClass('special-mode')){
                	$('.foreign-bank-c-data').show();
                	$('.foreign-bank-c-no-data-info').hide();
                	$('.foreign-bank-c-negative-data-info').hide();
            	}else{
                	$('.foreign-bank-c-data').hide();
                	$('.foreign-bank-c-no-data-info').hide();
                	$('.foreign-bank-c-negative-data-info').show();
            	}
            }else{
            	$('.foreign-bank-c-data').hide();
            	$('.foreign-bank-c-no-data-info').show();
            	$('.foreign-bank-c-negative-data-info').hide();
            }

			if($('input[name="credit-type"]:checked').attr('id') == 'credit-type-new'){
				$('.calc-additional-header').show();
				$('.calc-result-line.foreign-bank-a').show();
				$('.calc-result-line.foreign-bank-b').show();
				$('.calc-result-line .foreign-bank-c-lable .bank').show();
				$('.calc-result-line .foreign-bank-c-lable .compare').hide();
				$('.calc-result-line .foreign-bank-c-saving').show();
				$('.calc-result-line.foreign-bank-c-data .saving-lable span').eq(1).show();
				$('.calc-result-line.foreign-bank-c-data .saving-lable span').eq(0).hide();
				if (!$('body').hasClass('smartphone')) {
					$('.calc-table').removeClass('background-light-grey');
				}
				$('.calc-additional-result .calc-header').show();
				$('.calc-additional-result .calc-header.external').hide();
			} else if($('input[name="credit-type"]:checked').attr('id') == 'credit-type-existing'){
				$('.calc-additional-header').hide();
	        	$('.calc-additional-footer').hide();
	        	$('.calc-additional-header').removeClass('active');
	        	$('.calc-additional-result').removeClass('active');
				if (!$('body').hasClass('smartphone')) {
					$('.calc-table').removeClass('background-light-grey');
				}
				$('.calc-additional-result .calc-header').show();
				$('.calc-additional-result .calc-header.external').hide();
			} else {
				$('.calc-additional-header').hide();
				$('.calc-additional-header').removeClass('active');
				$('.calc-additional-result').addClass('active');
				if (!$('body').hasClass('smartphone')) {
					$('.calc-table').addClass('background-light-grey')
				}
				$('.calc-result-line .foreign-bank-c-lable .bank').hide();
				$('.calc-result-line .foreign-bank-c-lable .compare').show();
				$('.calc-result-line.foreign-bank-a').hide();
				$('.calc-result-line.foreign-bank-b').hide();
				$('.calc-result-line .foreign-bank-c-saving').hide();
				$('.calc-result-line.foreign-bank-c-data .saving-lable span').eq(1).hide();
				$('.calc-result-line.foreign-bank-c-data .saving-lable span').eq(0).show();
				$('.calc-additional-result .calc-header').hide();
				$('.calc-additional-result .calc-header.external').show();
			}
        }

        that.hideError('foreign-credit-rate', 'calc-error-foreign-credit-rate');
        that.hideError('foreign-credit-rate', 'calc-error-foreign-interest-rate');
        that.hideError('foreign-credit-rate', 'foreign-credit-rate-error-invalid');

        if(that.resultData.foreign_credit){
            if(parseFloat(that.resultData.foreign_credit.total_cost) > 0){

                if(parseFloat(that.resultData.foreign_credit.interest_rate) <= parseFloat(that.scriptData.interest_rate_max) && that.resultData.foreign_credit.interest_rate > 0){

                    foreignValuesVisible = true;

                    var _foreignInterestRate = that.getFormattedResultPercentage(that.resultData.foreign_credit.interest_rate, 2);
                    var _foreignMonthlyRate =  that.getFormattedResultNumber(that.resultData.foreign_credit.monthly_rate, 2);
                    var _foreignTotalCost =  that.getFormattedResultNumber(that.resultData.foreign_credit.total_cost, 2);

                    $($('.calc-table-interest-rate').find('td')[1]).html( _foreignInterestRate);
                    $($('.calc-table-monthly-rate').find('td')[1]).html(_foreignMonthlyRate);
                    $($('.calc-table-total-rate').find('td')[1]).html(_foreignTotalCost);
                    $($('.calc-table-monthly-rate').find('td')[2]).html(currencyUnit);
                    $($('.calc-table-total-rate').find('td')[2]).html(currencyUnit);
                    $($('.calc-table-interest-rate').find('td')[2]).html(percUnit);

                    if($(that.node).find("input[type='radio']:checked").attr('id') == "foreign-interest-rate-radio"){
                        that.inputDict['foreign-credit-rate'].value = that.resultData.foreign_credit.monthly_rate;
                        that.inputDict['foreign-credit-rate'].setInputValue();
                        that.inputDict['foreign-credit-rate'].formatValue();
                    } else {
                        that.inputDict['foreign-interest-rate'].value = that.resultData.foreign_credit.interest_rate;
                        that.inputDict['foreign-interest-rate'].setInputValue();
                        that.inputDict['foreign-interest-rate'].formatValue();
                    }
                } else {
                    hideForeignValues();
                    if($(that.node).find("input[name='foreign-values']:checked").attr('id') == "foreign-interest-rate-radio"){
                        $('.excessive-interest-exceeded').show();
                        $('.excessive-credit-rate-exceeded').hide();
                    } else {
                        $('.excessive-interest-exceeded').hide();
                        $('.excessive-credit-rate-exceeded').show();
                    }
                    that.showError('foreign-credit-rate', 'calc-error-foreign-interest-rate');
                }
            } else {
                hideForeignValues();
                that.showError('foreign-credit-rate', 'foreign-credit-rate-error-invalid');
            }
        } else {

          if(parseFloat(that.inputDict['foreign-interest-rate'].value) > parseFloat(that.scriptData.interest_rate_max)){
              if($(that.node).find("input[name='foreign-values']:checked").attr('id') == "foreign-interest-rate-radio"){
                  $('.excessive-interest-exceeded').show();
                  $('.excessive-credit-rate-exceeded').hide();
              } else {
                  $('.excessive-interest-exceeded').hide();
                  $('.excessive-credit-rate-exceeded').show();
              }
              that.showError('foreign-interest-rate', 'calc-error-foreign-interest-rate');
          }

            hideForeignValues();

            if(!foreignValueIsValid() && that.inputDict['foreign-credit-rate'].value > 0){
                that.showError('foreign-credit-rate', 'calc-error-foreign-credit-rate');
            }
        }

        if(foreignValuesVisible){
            if(that.resultData.additional_values && that.resultData.additional_values.saving){

                if(parseFloat(that.resultData.additional_values.saving) > 0){
                    that.positiveSavingNote.css({
                        'display': 'table-row'
                    });

                    that.negativeSavingNote.css({
                        'display': 'none'
                    });
                } else {
                    that.positiveSavingNote.css({
                        'display': 'none'
                    });

                    that.negativeSavingNote.css({
                        'display': 'block'
                    });
                }

                $($('.calc-result-note-positive').find('td')[3]).html(Migros.Utils.formatNumber(that.resultData.additional_values.saving, " ", 2));
            } else {

                that.positiveSavingNote.css({
                    'display': 'none'
                });

                that.negativeSavingNote.css({
                    'display': 'none'
                });

                $($('.calc-result-note-positive').find('td')[3]).html("");
            }
        } else {
            that.positiveSavingNote.css({
                'display': 'none'
            });

            that.negativeSavingNote.css({
                'display': 'none'
            });

            $($('.calc-result-note-positive').find('td')[3]).html("");
        }
        that.showResult();
    };

    var hideForeignValues = function() {

        if(checkedForeignId == 'foreign-credit-rate'){
            that.inputDict['foreign-interest-rate'].value = -1;
            that.inputDict['foreign-interest-rate'].setInputValue();
        } else {
            that.inputDict['foreign-credit-rate'].value = -1;
            that.inputDict['foreign-credit-rate'].setInputValue();
        }

        $($('.calc-table-monthly-rate').find('td')[1]).html("");
        $($('.calc-table-monthly-rate').find('td')[2]).html("");
        $($('.calc-table-total-rate').find('td')[1]).html("");
        $($('.calc-table-total-rate').find('td')[2]).html("");
        $($('.calc-table-interest-rate').find('td')[1]).html("");
        $($('.calc-table-interest-rate').find('td')[2]).html("");
    };

    this.parent = Object.getPrototypeOf(this);

    init();
};
Migros.Components.Calculator.PersonalCredit.prototype = Migros.Components.Calculator.CoreCalculator;
Migros.Components.Calculator.PersonalCredit.prototype.constructor = Migros.Components.Calculator.PersonalCredit;

/**
 * calculator mortgage max
 * @param node
 * @constructor
 */
Migros.Components.Calculator.MortgageMax =  function(node){

    var that = this,
        requestUrl,
        maxCostComparedToIncome,
        maxCostComparedToIncomeHigh,
        maxCostComparedToIncomeHighValue,
        currency = "CHF";

    var init = function() {

        // set variables
        that.node = node;
        that.id = $(that.node).find('form').attr('id');
        that.resultNote = $(that.node).find('.calc-result-note');
        that.resultNoteError = $(that.node).find('.calc-result-note-error');
        that.resultNode = $(that.node).find('.calc-result');
        that.inputNode = $(that.node).find('.calc-input');
        that.mandatoryErrorNode = 'calc-error-mortgage-max-mandatory';
        that.serverErrorNode = 'calc-error-mortgage-max-server';
        that.invalidResultNoteId = 'calc-note-mortgage-max-invalid';
        that.inputDict = [];
        that.inputIds = [];

        //scriptdata
        that.getScriptData(that.node);
        requestUrl = that.scriptData.request_url;
        maxCostComparedToIncome = parseFloat(that.scriptData.max_cost_compared_to_income);
        maxCostComparedToIncomeHigh = parseFloat(that.scriptData.max_cost_compared_to_income_high);
        maxCostComparedToIncomeHighValue = parseFloat(that.scriptData.max_cost_compared_to_income_high_value);

        // tooltips
        that.setupTooltips();

        // init handler
        that.setupEventHandler();

        // setup inputs
        setupInputs();
    };

    /**
     * setup inputs by filling inputDictionnary and Array for input ids
     * @param e
     */
    var setupInputs = function(e) {

        // input fields
        $.each($(that.node).find(".calc-input input[type='text']"), function(i, el){

            var id = $(el).attr('id');
            var obj = getInputInterval(id);
            var value = -1;

            if($(that.node).attr('data-inputtype') != "percentage"){
                value = Migros.Utils.unformatNumber($(el).val());
            } else {
                value = Migros.Utils.unformatPercentage($(el).val());
            }

            var inputItem = new Migros.Components.Calculator.InputItem(el, value || -1, "input", obj.minValue, obj.maxValue);

            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });
    };

    /**
     * get min/max values of input fields
     * @param id
     * @returns {{}}
     */
    var getInputInterval = function(id) {

        var obj = {};

        switch(id){
            case 'mortgage-max-equity':
                obj.minValue = 1;
                break;
            case 'mortgage-max-netincome':
                obj.minValue = 1;
                break;
            default:
                break;
        }

        return obj;
    };

    /**
     * handler on sumbit button click
     * @param e
     */
    this.formSubmitClickHandler = function(e){

        try{e.preventDefault();}catch(e){};

        that.showMandatoryErrors = true;

        var _data = {
            "mortgage": {
                "firstMortgage": "448",
                "secondMortgage": "2",
                "totalMortgage": "448",
                "mortgageToValue": "30.910",
                "totalObjectValue": "1448",
                "yearlyInterestCosts": "20.15",
                "yearlyAmortizationCosts": "2",
                "yearlyIncidentialCosts": "14.5",
                "yearlyTotalCosts": "34.65",
                "monthlyTotalCosts": "2.9",
                "costsInPercentageOfIncome": "25.110",
                "costsInPercentageOfIncomeHigh": "40"
            },
            "additional_values": {
                "cost_compared_to_income": "25" // TODO value so in ordnung?
            }
        };

        var hasErrors = that.checkErrors();

        if(hasErrors == 0){
            if(that.checkCombinationErrors()){
                that.showCombinationErrors();
            } else {
//                that.requestCompleteEvent(_data); // TODO for testing
                updateResult();
            }
        } else {
            that.hideResult();
        }
    };

    /**
     * update result
     */
    var updateResult = function () {

        that.hideError();

        var _config = {
            id : "maxmortgage",
            equity : that.inputDict['mortgage-max-equity'].value,
            netincome : that.inputDict['mortgage-max-netincome'].value,
            participantNetincome : that.inputDict['mortgage-max-participant-netincome'].value
        };

        var _url = requestUrl;
        that.requestData(_url, _config, that.requestCompleteEvent);
    };

    /**
     * callback on request complete
     * @param data
     */
    this.requestCompleteEvent = function(data){

        if (data !== null && data.length > 0) {
            that.resultData = JSONUtil.parse(data);
        }

//        that.resultData = data; //TODO for testing

        that.hideResultNote();
        that.hideResultErrorNote();

        if(that.resultData){

            updateContent();
            that.showResult();
        } else {
            that.hideResult();
        }
    };

    var updateContent = function() {

        $($(that.node).find('.calc-table-first-mortgage').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.firstMortgage));
        $($(that.node).find('.calc-table-second-mortgage').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.secondMortgage));
        $($(that.node).find('.calc-table-total-mortgage').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.totalMortgage));
        $($(that.node).find('.calc-table-mortgage-to-value').find('td')[2]).html(that.getFormattedResultPercentage(that.resultData.mortgage.mortgageToValue, 2));
        $($(that.node).find('.calc-table-total-object-value').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.totalObjectValue));
        $($(that.node).find('.calc-table-yearly-interest-costs').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.yearlyInterestCosts));
        $($(that.node).find('.calc-table-yearly-amortization-costs').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.yearlyAmortizationCosts));
        $($(that.node).find('.calc-table-yearly-incidential-costs').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.yearlyIncidentialCosts));
        $($(that.node).find('.calc-table-yearly-total-costs').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.yearlyTotalCosts));
        $($(that.node).find('.calc-table-monthly-total-costs').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.monthlyTotalCosts));
        $($(that.node).find('.calc-table-costs-percent-of-netincome').find('td')[1]).html(that.getFormattedResultPercentage(that.resultData.mortgage.costsInPercentageOfIncome, 2));
    };

    this.parent = Object.getPrototypeOf(this);

    init();
};
Migros.Components.Calculator.MortgageMax.prototype = Migros.Components.Calculator.CoreCalculator;
Migros.Components.Calculator.MortgageMax.prototype.constructor = Migros.Components.Calculator.MortgageMax;

/**
 * calculator mortgage measured
 * @param node
 * @constructor
 */
Migros.Components.Calculator.MortgageMeasured =  function(node){

    var that = this,
        requestUrl,
        currency = "CHF",
        minSelfFinancingRate,
        mortgageTypeDefault = "",
        mortgageType = 1,
        minMortgage,
        maxMortgage,
        maxCharge,
        maxChargeHigh,
        maxChargeHighValue,
        amortizationAdvice = -1,
        firstMortgageInfo = "",
        secondMortgageInfo = "",
        objectValue = -1,
        equity = -1,
        netincome = -1,
        participantNetincome = -1,
        amortization = -1;


    var init = function() {

        // set variables
        that.node = node;
        that.id = $(that.node).find('form').attr('id');
        that.resultNote = $(that.node).find('.calc-result-note');
        that.resultNode = $(that.node).find('.calc-result');
        that.inputNode = $(that.node).find('.calc-input');
        that.mandatoryErrorNode = 'calc-error-mortgage-measured-mandatory';
        that.serverErrorNode = "calc-error-mortgage-measured-server";
        that.invalidResultNoteId = 'calc-note-mortgage-measured-invalid';
        that.inputDict = [];
        that.inputIds = [];

        //scriptdata
        that.getScriptData(that.node);
        requestUrl = that.scriptData.request_url;
        minSelfFinancingRate = parseInt(that.scriptData.min_selffinancingrate);
        minMortgage = parseInt(that.scriptData.min_mortgage);
        maxMortgage = parseInt(that.scriptData.max_mortgage);
        maxCharge = parseInt(that.scriptData.max_charge);
        maxChargeHigh = parseInt(that.scriptData.max_charge_high);
        maxChargeHighValue = parseInt(that.scriptData.max_charge_high_value);
        mortgageTypeDefault = $('#mortgage-measured-mortgage-type').val();
        mortgageType = mortgageTypeDefault;
        firstMortgageInfo = that.scriptData.firstMortgageInfo;
        secondMortgageInfo = that.scriptData.secondMortgageInfo;

        // tooltips
        that.setupTooltips();

        // init handler
        that.setupEventHandler();

        // setup inputs
        setupInputs();
    };

    /**
     * setup inputs by filling inputDictionnary and Array for input ids
     * @param e
     */
    var setupInputs = function() {

        // input fields
        $.each($(that.node).find(".calc-input input[type='text']"), function(i, el){

            var id = $(el).attr('id');
            var obj = getInputInterval(id);
            var value = -1;

            if($(that.node).attr('data-inputtype') != "percentage"){
                value = Migros.Utils.unformatNumber($(el).val());
            } else {
                value = Migros.Utils.unformatPercentage($(el).val());
            }

            var inputItem = new Migros.Components.Calculator.InputItem(el, value || -1, "input", obj.minValue, obj.maxValue);
            inputItem.combinationErrorIdArray = ['calc-error-mortgage-measured-object-value-min'];
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });

        // select dropdowns
        $.each($(that.node).find(".calc-result select"), function(i, el){

            var id = $(el).attr('id');

            var inputItem = new Migros.Components.Calculator.InputItem(el, $(el).val(), "select" );
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });
    };

    /**
     * get min/max values of input fields
     * @param id
     * @returns {{}}
     */
    var getInputInterval = function(id) {

        var obj = {};

        switch(id){
            case 'mortgage-measured-object-value':
                obj.minValue = 1;
            case 'mortgage-measured-equity':
                obj.minValue = 1;
            case 'mortgage-measured-netincome':
                obj.minValue = 1;
            default:
                break;
        }

        return obj;
    };

    /**
     * select input change handler
     * @param e
     */
    this.selectInputChangeHandler = function(e) {

        if( !e ) e = window.event;
        var that = e.data.self;
        var id = $(e.target).attr('id');
        var item = that.inputDict[id];

        that.setInputValue(item, e.target.value, that);

        // call parent
        that.parent.selectInputChangeHandler(e);

        that.formSubmitClickHandler(e);
    };


    /**
     * form reset click handler
     * @param e
     */
    this.formResetClickHandler = function(e) {

        amortizationAdvice = -1;
        objectValue = -1;
        equity = -1;
        netincome = -1;
        participantNetincome = -1;
        amortization = -1;
        mortgageType = 1;

        // call parent
        that.parent.formResetClickHandler(e, that);
    };

    /**
     * check if combinations of inputs have errors and show error notes
     * @returns {boolean}
     */
    this.checkCombinationErrors = function() {

        var equity = that.inputDict['mortgage-measured-equity'];
        var object = that.inputDict['mortgage-measured-object-value'];
        var equityValue = equity.value;
        var objectValue = object.value;
        var hasError = false;

        equity.hasCombinationError = false;
        object.hasCombinationError = false;

        // Verkehrswert > Eigenmittel
        if (parseFloat(objectValue) < parseFloat(equityValue)) {

            equity.hasCombinationError = true;
            equity.combinationErrorIdActive = 0;

            object.hasCombinationError = true;
            object.combinationErrorIdActive = 0;

            hasError = true;
            return hasError;
        }

        return hasError;
    };


    /**
     * handler on sumbit button click
     * @param e
     */
    this.formSubmitClickHandler = function(e){

       try{e.preventDefault();}catch(e){};

        that.showMandatoryErrors = true;

        var _data = {
            "mortgage": {
                "firstMortgagePercent": "2.3",
                "firstMortgage": "0",

                "secondMortgagePercent": "2.3",
                "secondMortgage": "1000",
                "totalMortgage": "100",
                "mortgageToValue": "20.222",

                "yearlyInterestCosts": "45",
                "yearlyAmortizationCosts": "4",
                "yearlyAmortizationAdvice": "3",
                "yearlyIncidentialCosts": "100",
                "yearlyTotalCosts": "145",
                "monthlyTotalCosts": "12.1",
                "costsInPercentageOfIncome": "1",
                "costsInPercentageOfIncomeHigh": "1"
            },
            "additional_values": {
                "cost_compared_to_income": "1"
            }
        };

        that.inputDict['mortgage-measured-object-value'].hasCombinationError = false;
        that.inputDict['mortgage-measured-equity'].hasCombinationError = false;

        var hasErrors = that.checkErrors();

        if(hasErrors == 0){
            if(that.checkCombinationErrors()){
                that.showCombinationErrors();
            } else {
//                that.requestCompleteEvent(_data); // TODO for testing
                updateResult();
            }
        } else {
            that.hideResult();
        }
    };

    /**
     * update result
     */
    var updateResult = function () {

        that.hideError();
        that.hideResultNote();

        var _config = {
            id : "measuredmortgage",
            objectvalue : that.inputDict['mortgage-measured-object-value'].value,
            equity : that.inputDict['mortgage-measured-equity'].value,
            netincome : that.inputDict['mortgage-measured-netincome'].value,
            participantNetincome : that.inputDict['mortgage-measured-participant-netincome'].value,
            mortgageType : parseInt(that.inputDict['mortgage-measured-mortgage-type'].value),
            amortization : that.inputDict['mortgage-measured-amortization'].value
        };

        if(!onlyAmortizationChanged()) { // other values changed, too

            var _url = requestUrl;
            that.requestData(_url, _config, that.requestCompleteEvent);

        } else { // only amortization changed

            checkAmortizationValue(_config, true);
        }
    };

    /**
     * check if amortization value is smaller/bigger than adviced -> show result notes
     */
    var checkAmortizationValue = function(config, sendRequest) {

        var val  = that.inputDict['mortgage-measured-amortization'].value;

        // condition for amortization
        if(val > 0){

            if(val > amortizationAdvice) {
                var totalIncome = netincome+participantNetincome;
                var result = parseFloat(that.resultData.mortgage.yearlyTotalCosts) / totalIncome * 100;
                if (result > maxCharge) { //criticalDebitOfIncome
                    that.showResultNote('calc-note-amortization-max');
                }
                if(sendRequest) {
                    var _url = requestUrl;
                    var _config = config;
                    that.requestData(_url, _config, that.requestCompleteEvent);
                }
            } else if(val < amortizationAdvice){
                that.showResultNote('calc-note-amortization-min');
                updateAmortization(amortizationAdvice);
            }
        } else {

            if(amortization > 0 && amortizationAdvice > 0){

                updateAmortization(amortizationAdvice);
            }
        }
    };

    /**
     * check if also other values have changed
     * @returns {boolean}
     */
    var onlyAmortizationChanged = function() {

        var bool = true;

        if(that.inputDict['mortgage-measured-object-value'].value != objectValue) {
            bool = false;
        }

        if(that.inputDict['mortgage-measured-equity'].value != equity) {
            bool = false;
        }

        if(that.inputDict['mortgage-measured-netincome'].value != netincome) {
            bool = false;
        }

        if(that.inputDict['mortgage-measured-participant-netincome'].value != participantNetincome) {
            bool = false;
        }

        if(that.inputDict['mortgage-measured-mortgage-type'].value != mortgageType){
            bool = false;
        }

        return bool;
    };

    /**
     * callback on request complete
     * @param data
     */
    this.requestCompleteEvent = function(data){

        if (data !== null && data.length > 0) {
            that.resultData = JSONUtil.parse(data);
        }

//        that.resultData = data; //TODO for testing

        if(that.resultData){

            setValues();

            // condition for amortization
            checkAmortizationValue(null, false);

            // conditions for mortgage type
            if(parseFloat(that.resultData.mortgage.totalMortgage) < minMortgage) { // mortgage < min mortgage
                that.showResultNote('calc-note-mortgage-min');
            } else if(parseFloat(that.resultData.mortgage.totalMortgage) > maxMortgage) { // mortgage > max mortgage
                that.showResultNote('calc-note-mortgage-max');
            }

            // condition for minimal self financing
            if((equity / objectValue * 100) < minSelfFinancingRate) {
                that.showResultNote('calc-note-equity-financing-min');
            }

            // condition for max charge
            var totalIncome = netincome+(participantNetincome > 0 ? participantNetincome : 0);
            var costsInPercentageOfIncome = parseFloat(that.resultData.mortgage.costsInPercentageOfIncome);
            if ((maxChargeHighValue > 0) && (maxChargeHigh > 0) && (totalIncome >= maxChargeHighValue)) {
                if(costsInPercentageOfIncome > maxChargeHigh) {
                    that.showResultNote('calc-note-charge-max-high');
                }
            } else {
                if(costsInPercentageOfIncome > maxCharge) {
                    that.showResultNote('calc-note-charge-max');
                }
            }
            updateContent();
            showAmortization();
            that.showResult();
        } else {
            that.hideResult();

            // hide additional input field
            hideAmortization();
        }
    };

    var setValues = function() {

        objectValue = that.inputDict['mortgage-measured-object-value'].value;
        equity = that.inputDict['mortgage-measured-equity'].value;
        netincome = that.inputDict['mortgage-measured-netincome'].value;
        participantNetincome = that.inputDict['mortgage-measured-participant-netincome'].value;
        amortizationAdvice = parseInt(that.resultData.mortgage.yearlyAmortizationAdvice);
        amortization = parseInt(that.resultData.mortgage.yearlyAmortizationCosts);
        mortgageType = parseInt(that.inputDict['mortgage-measured-mortgage-type'].value);
    };

    var updateContent = function() {

        var $node = $(that.node);

        //show additional input field
        updateAmortization(amortization);

        $($node.find('.calc-table-first-mortgage').find('td')[0]).html('1. ' + $('#mortgage-measured-mortgage-type option:selected').text());
        $($node.find('.calc-table-first-mortgage').find('td')[1]).html(that.scriptData.firstMortgageInfo.replace("[NUMBER]", that.getFormattedResultPercentage(parseFloat(that.resultData.mortgage.firstMortgagePercent), 3)));
        $($node.find('.calc-table-first-mortgage').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.firstMortgage));
        $($node.find('.calc-table-second-mortgage').find('td')[0]).html('2. ' + $('#mortgage-measured-mortgage-type option:selected').text());
        $($node.find('.calc-table-second-mortgage').find('td')[1]).html(that.scriptData.secondMortgageInfo.replace("[NUMBER]", that.getFormattedResultPercentage(parseFloat(that.resultData.mortgage.secondMortgagePercent), 3)));
        $($node.find('.calc-table-second-mortgage').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.secondMortgage));
        $($node.find('.calc-table-total-mortgage').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.totalMortgage));
        $($node.find('.calc-table-mortgage-to-value').find('td')[2]).html(that.getFormattedResultPercentage(parseFloat(that.resultData.mortgage.mortgageToValue), 3));
        $($node.find('.calc-table-yearly-interest-costs').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.yearlyInterestCosts));
        $($node.find('.calc-table-yearly-amortization-costs').find('td')[2]).html(that.getFormattedResultNumber(amortization));
        $($node.find('.calc-table-yearly-incidential-costs').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.yearlyIncidentialCosts));
        $($node.find('.calc-table-yearly-total-costs').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.yearlyTotalCosts));
        $($node.find('.calc-table-monthly-total-costs').find('td')[2]).html(that.getFormattedResultNumber(that.resultData.mortgage.monthlyTotalCosts));
        $($node.find('.calc-table-costs-percent-of-netincome').find('td')[1]).html(that.getFormattedResultPercentage(that.resultData.mortgage.costsInPercentageOfIncome, 3));
    };

    /**
     * update amortization rate, if value to low
     * @param value
     */
    var updateAmortization = function(val){

        var amortization = parseFloat(val) || 0;

        that.inputDict['mortgage-measured-amortization'].value = amortization;
        that.inputDict['mortgage-measured-amortization'].setInputValue();
        that.inputDict['mortgage-measured-amortization'].formatValue();
        $($(that.node).find('.calc-table-yearly-amortization-costs').find('td')[2]).html(that.getFormattedResultNumber(amortization));
    };

    /**
     * show input for amortization
     */
    var showAmortization = function() {

        $('#additional_row_amortization').css({'display': 'block'});
    };

    /**
     * hide input for amortization
     */
    var hideAmortization = function() {
        $('#additional_row_amortization').css({'display': 'none'});
    };

    this.parent = Object.getPrototypeOf(this);

    init();
};
Migros.Components.Calculator.MortgageMeasured.prototype = Migros.Components.Calculator.CoreCalculator;
Migros.Components.Calculator.MortgageMeasured.prototype.constructor = Migros.Components.Calculator.MortgageMeasured;

/**
 * calculator savings
 * @param node
 * @constructor
 */
Migros.Components.Calculator.Savings =  function(node){

    var that = this,
        requestUrl,
        defaultSearchResult,
        stackValues;

    var init = function() {

        // set variables
        that.node = node;
        that.id = $(that.node).find('form').attr('id');
        that.resultNote = $(that.node).find('.calc-result-note');
        that.resultNode = $(that.node).find('.calc-result');
        that.inputNode = $(that.node).find('.calc-input');
        that.mandatoryErrorNode = 'calc-error-savings-mandatory';
        that.serverErrorNode = 'calc-error-savings-server';
        that.invalidResultNoteId = 'calc-note-savings-invalid';
        that.inputDict = [];
        that.inputIds = [];

        // defaults
        defaultSearchResult = $('#savings-search-result').val();

        //scriptdata
        that.getScriptData(that.node);
        requestUrl = that.scriptData.request_url;

        // tooltips
        that.setupTooltips();

        // init handler
        that.setupEventHandler();

        // setup inputs
        setupInputs();
    };

    /**
     * setup inputs by filling inputDictionnary and Array for input ids
     * @param e
     */
    var setupInputs = function(e) {

        // input fields
        $.each($(that.node).find(".calc-input input[type='text']"), function(i, el){

            var id = $(el).attr('id');
            var obj = getInputInterval(id);
            var value = -1;

            if($(that.node).attr('data-inputtype') != "percentage"){
                value = Migros.Utils.unformatNumber($(el).val());
            } else {
                value = Migros.Utils.unformatPercentage($(el).val());
            }

            var inputItem = new Migros.Components.Calculator.InputItem(el, value || -1, "input", obj.minValue, obj.maxValue); //0

            if(id == 'savings-'+defaultSearchResult){
                inputItem.setState('inactive')
            }

            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });


        // select dropdowns
        $.each($(that.node).find(".calc-input select"), function(i, el){

            var id = $(el).attr('id');

            var inputItem = new Migros.Components.Calculator.InputItem(el, $(el).val(), "select" );
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });
    };

    /**
     * get min/max values of input fields
     * @param id
     * @returns {{}}
     */
    var getInputInterval = function(id) {

        var obj = {};

        switch(id){
            case 'savings-start-capital':
                obj.minValue = that.scriptData.start_capital_min;
                obj.maxValue = that.scriptData.start_capital_max;
                break;
            case 'savings-saving-rate':
                obj.minValue = that.scriptData.saving_rate_min;
                obj.maxValue = that.scriptData.saving_rate_max;
                break;
            case 'savings-interest-rate':
                obj.minValue = that.scriptData.interest_rate_min;
                obj.maxValue = that.scriptData.interest_rate_max;
                break;
            case 'savings-years':
                obj.minValue = that.scriptData.years_min;
                obj.maxValue = that.scriptData.years_max;
                break;
            case 'savings-final-capital':
                obj.minValue = that.scriptData.final_capital_min;
                obj.maxValue = that.scriptData.final_capital_max;
                break;
            default:
                break;
        }

        return obj;
    };

    /**
     * handler on select input change
     *
     * @param e
     */
    this.selectInputChangeHandler = function(e){

        if( !e ) e = window.event;
        var id = $(e.target).attr('id');

        if(that.resultActive) {
            that.showResultNoteInvalid();
        }

        switch(id){
            case 'savings-search-result':
                deactivateInput('savings-'+e.target.value);
                // call parent
                that.parent.selectInputChangeHandler(e, this);
                break;
            case 'savings-periodicity':
                // call parent
                that.parent.selectInputChangeHandler(e, this);
                break;
            default:
                break;
        }
    };

    /**
     * deactivate input according to selected option
     */
    var deactivateInput = function(id) {

        var l = that.inputIds.length;
        while(l--){
            that.inputDict[that.inputIds[l]].setState("active");
        }

        that.inputDict[id].setState("inactive");
    };

    /**
     * form reset click handler
     * @param e
     */
    this.formResetClickHandler = function(e) {

        that.inputDict['savings-'+defaultSearchResult].setState('inactive');

        // call parent
        that.parent.formResetClickHandler(e, that);
    };

    /**
     * handler on sumbit button click
     * @param e
     */
    this.formSubmitClickHandler = function(e){

        try{e.preventDefault();}catch(e){};

        var _config = {
            id : "savings",
            searchResult : that.inputDict['savings-search-result'].value,
            startCapital : that.inputDict['savings-start-capital'].value,
            savingRate : that.inputDict['savings-saving-rate'].value,
            periodicity: that.inputDict['savings-periodicity'].value,
            interestRate : that.inputDict['savings-interest-rate'].value,
            years : that.inputDict['savings-years'].value,
            finalCapital : that.inputDict['savings-final-capital'].value
        };

        var _testConfig = {
            "savings": {
                "startCapital" : "100000",
                "resultValue" : "2275458.4580365014",
                "results" : [

                    {
                        "FinalCapital" : "100000",
                        "InterestRate" : "10",
                        "InterestResult" : "0",
                        "NumberOfRates" : "0",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "0",
                        "StartCapital" : "100000",
                        "Years" : "0"
                    }
                    ,
                    {
                        "FinalCapital" : "236500",
                        "InterestRate" : "10",
                        "InterestResult" : "16500",
                        "NumberOfRates" : "12",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "120000",
                        "StartCapital" : "100000",
                        "Years" : "1"
                    }
                    ,
                    {
                        "FinalCapital" : "386650",
                        "InterestRate" : "10",
                        "InterestResult" : "46650",
                        "NumberOfRates" : "24",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "240000",
                        "StartCapital" : "100000",
                        "Years" : "2"
                    }
                    ,
                    {
                        "FinalCapital" : "551815.0000000001",
                        "InterestRate" : "10",
                        "InterestResult" : "91815.00000000012",
                        "NumberOfRates" : "36",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "360000",
                        "StartCapital" : "100000",
                        "Years" : "3"
                    }
                    ,
                    {
                        "FinalCapital" : "733496.5000000005",
                        "InterestRate" : "10",
                        "InterestResult" : "153496.50000000047",
                        "NumberOfRates" : "48",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "480000",
                        "StartCapital" : "100000",
                        "Years" : "4"
                    }
                    ,
                    {
                        "FinalCapital" : "933346.1500000001",
                        "InterestRate" : "10",
                        "InterestResult" : "233346.15000000014",
                        "NumberOfRates" : "60",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "600000",
                        "StartCapital" : "100000",
                        "Years" : "5"
                    }
                    ,
                    {
                        "FinalCapital" : "1153180.7650000004",
                        "InterestRate" : "10",
                        "InterestResult" : "333180.76500000036",
                        "NumberOfRates" : "72",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "720000",
                        "StartCapital" : "100000",
                        "Years" : "6"
                    }
                    ,
                    {
                        "FinalCapital" : "1394998.8415000008",
                        "InterestRate" : "10",
                        "InterestResult" : "454998.8415000008",
                        "NumberOfRates" : "84",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "840000",
                        "StartCapital" : "100000",
                        "Years" : "7"
                    }
                    ,
                    {
                        "FinalCapital" : "1660998.7256500009",
                        "InterestRate" : "10",
                        "InterestResult" : "600998.7256500009",
                        "NumberOfRates" : "96",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "960000",
                        "StartCapital" : "100000",
                        "Years" : "8"
                    }
                    ,
                    {
                        "FinalCapital" : "1953598.598215001",
                        "InterestRate" : "10",
                        "InterestResult" : "773598.5982150009",
                        "NumberOfRates" : "108",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "1080000",
                        "StartCapital" : "100000",
                        "Years" : "9"
                    }
                    ,
                    {
                        "FinalCapital" : "2275458.4580365014",
                        "InterestRate" : "10",
                        "InterestResult" : "975458.4580365014",
                        "NumberOfRates" : "120",
                        "SavingRate" : "10000",
                        "SavingRatesResult" : "1200000",
                        "StartCapital" : "100000",
                        "Years" : "10"
                    }
                ]
            },
            "additional_values": {
            }
        }

        that.showMandatoryErrors = true;

        var hasErrors = that.checkErrors();

        if(hasErrors == 0){
            if(that.checkCombinationErrors()){
                that.showCombinationErrors();
            } else {
//                that.requestCompleteEvent(_testConfig); //TODO for testing
                updateResult();
            }
        }
    };

    /**
     * update result
     */
    var updateResult = function () {

        that.hideError();

        var _config = {
            id : "savings",
            searchResult : that.inputDict['savings-search-result'].value,
            startCapital : that.inputDict['savings-start-capital'].value,
            savingRate : that.inputDict['savings-saving-rate'].value,
            periodicity: that.inputDict['savings-periodicity'].value,
            interestRate : that.inputDict['savings-interest-rate'].value,
            years : that.inputDict['savings-years'].value,
            finalCapital : that.inputDict['savings-final-capital'].value
        };

        var _url = requestUrl;
        that.requestData(_url, _config, that.requestCompleteEvent);
    };

    /**
     * callback on request complete
     * @param data
     */
    this.requestCompleteEvent = function(data){

        var resultIsValid = true;

        if (data !== null && data.length > 0) {
            that.resultData = JSONUtil.parse(data);
        }

//        that.resultData = data; // TODO for testing

        that.hideResultNote();

        if(that.resultData){

            resultIsValid = checkResultData();

            if(resultIsValid){
                that.hideResultNote();
                that.showResult();

                showConstantResultValues();
                showChart();
            } else {
                that.hideResult();
                that.showError(undefined, 'calc-error-savings-calculation');
            }
        } else {

            that.hideResult();
        }
    };

    /**
     * check if result data is valid (no value smaller 0)
     * @returns {boolean}
     */
    var checkResultData = function() {

        var bool = true;
        var result = that.resultData.savings.results;
        var i = result.length;

        while(i--) {

            var obj = result[i];

            for(var j in obj){
                if(parseFloat(obj[j]) < 0){
                    bool = false;
                }
            }
        }

        return bool;
    };

    /**
     * make all constand values visible, those you cannot interact with
     *
     * **/
    var showConstantResultValues = function() {

        var $searchResultNode = $('.calc-table-search-result').find('td');
        var $startCapitalNode = $('.calc-table-start-capital').find('td').eq(2);
        var resultValue;
        var searchItem = that.inputDict['savings-search-result'].value;

        // show value for start capital
        $startCapitalNode.html(that.resultData.savings.startCapital);

        if(that.inputDict['savings-search-result'].value == "interest-rate") {
            resultValue = that.getFormattedResultPercentage(parseFloat(that.resultData.savings.resultValue), 3);

            // set value into searched input
            var searchedInput = that.inputDict['savings-'+that.inputDict['savings-search-result'].value];
            searchedInput.value = parseFloat(that.resultData.savings.resultValue);
            searchedInput.setInputValue();
            searchedInput.formatValue();
        } else {
            resultValue = that.getFormattedResultNumber(parseInt(that.resultData.savings.resultValue));

            // set value into searched input
            var searchedInput = that.inputDict['savings-'+that.inputDict['savings-search-result'].value];
            searchedInput.value = parseInt(that.resultData.savings.resultValue);
            searchedInput.setInputValue();
            searchedInput.formatValue();
        }

        $searchResultNode.eq(2).html(resultValue);
        var i = that.resultData.savings.results.length -1;
        updateTableContent(i);

        // show relevant search result text
        $searchResultNode.eq(1).find('p').css({
            'display': 'none'
        });

        $searchResultNode.eq(1).find('p.total-result-'+searchItem).css({
            'display': 'block'
        });

        // show relevant search result value
        $searchResultNode.eq(3).find('p').css({
            'display': 'none'
        });

        $searchResultNode.eq(3).find('p.total-result-'+searchItem).css({
            'display': 'block'
        });
    };

    /**
     * setup chart
     *
     * **/
    var showChart = function() {

        stackOptions = getStackOptions();
        graphOptions = getGraphOptions();

        that.chart = {
            flot : $.plot("#stack-graph", stackOptions, graphOptions),
            flotContainer : $('#stack-graph')
        };

        updateYearLegend(stackValues.totalYears);
        reworkChartLayout();
        addChartEventHandler();
    };

    /**
     * event handler on chart
     */
    var addChartEventHandler = function () {

        that.chart.flotContainer.bind('plothover',function (event, pos, item) {

            if (item) {
                if (that.chart.highlightState === true) return;

                for (var i = 0; i < item.datapoint.length; i++) {
                    that.chart.flot.highlight(i, item.dataIndex);
                }
                that.highlightBarHandler(item.dataIndex);

                that.chart.highlightState = true;
            } else {
                if (that.chart.highlightState === false) return;

                that.chart.flot.unhighlight();
                that.removeHighlightBarHandler();
                that.chart.highlightState = false;
            }
        }).bind("mouseleave",function (event, pos, item) {
                if (that.chart.highlightState === false) return;

                that.chart.flot.unhighlight();
                that.removeHighlightBarHandler();
                that.chart.highlightState = false;
            }).bind("touchend", function (event) {
                if (that.chart.highlightState === false) return;

                that.chart.flot.unhighlight();
                that.removeHighlightBarHandler();
                that.chart.highlightState = false;
            });
    };

    /**
     * on stack bar over handler
     * @param i
     */
    this.highlightBarHandler = function(i) {

        updateYearLegend(i);
        updateTableContent(i);

        $('#stack-graph').find('canvas').css({cursor: 'pointer'});
    };

    /**
     * on stack bar out handler
     */
    this.removeHighlightBarHandler = function() {

        $('#stack-graph').find('canvas').css({cursor: 'default'});

        updateYearLegend(stackValues.totalYears);

        var i = that.resultData.savings.results.length -1;
        updateTableContent(i);
    };

    /**
     * update values in table
     * @param i
     */
    var updateTableContent = function(i){

        var savingRate = getRate(i);

        $(that.node).find('.calc-table-start-capital').find('td').eq(2).html(that.getFormattedResultNumber(that.resultData.savings.results[i].StartCapital));
        $(that.node).find('.calc-table-saving-rate').find('td').eq(2).html(that.getFormattedResultNumber(that.resultData.savings.results[i].SavingRatesResult));
        $(that.node).find('.calc-table-saving-rate').find('td').eq(1).html(that.scriptData.result_saving_amount.replace("[NUMBER]", savingRate.timeString).replace("[UNIT]", savingRate.unitString));
        $(that.node).find('.calc-table-interest-rate td').eq(2).html(that.getFormattedResultNumber(that.resultData.savings.results[i].InterestResult));
        $(that.node).find('.calc-table-total-savings').find('td').eq(2).html(that.getFormattedResultNumber(that.resultData.savings.results[i].FinalCapital));
        $(that.node).find('.calc-table-search-result').find('td').eq(1).children('.total-result-saving-rate').html(that.scriptData.result_saving_rate.replace("[UNIT]", savingRate.unitString));
    };

    /**
     * get obj of saving rate
     */
    var getRate = function(i) {

        var obj = {};

        switch(that.inputDict['savings-periodicity'].value){
            case "monthly":
                obj.timeString = (i * 12).toString();
                obj.unitString = that.scriptData.result_monthly;
                break;
            case "quarterly":
                obj.timeString = (i * 12 / 3).toString();
                obj.unitString = that.scriptData.result_quarterly;
                break;
            case "semiAnnual":
                obj.timeString = (i * 12 / 6).toString();
                obj.unitString = that.scriptData.result_semiannual;
                break;
            case "annually":
                obj.timeString = (i).toString();
                obj.unitString = that.scriptData.result_annually;
                break;
            default:
                break;
        }

        return obj;
    };

    /**
     * update year unit in legend
     */
    var updateYearLegend = function(year) {

        var yearUnit = that.scriptData.diagram_unit_year;

        if(year != 1){
            yearUnit = that.scriptData.diagram_unit_years;
        } else {
            yearUnit = that.scriptData.diagram_unit_year;
        }

        $(that.node).find('#stack-legend .right p').html(year+" "+yearUnit);
    };

    /**
     * fix x and y axis according to layout
     */
    var reworkChartLayout = function() {

        // XAXIS Years
        // arrange folt lables
        that.chart.flotContainer.find('div.flot-x-axis DIV.flot-tick-label').css("left", "+=4px");

        // YAXIS Money
        var _yTicks = that.chart.flot.getAxes().yaxis.ticks;

        $('div#stack-graph-yaxis').html("");

        for (var i = 0; i < _yTicks.length; i++) {
            var pos = that.chart.flot.getAxes().yaxis.p2c(_yTicks[i].v);
            pos += 8;

            $('div#stack-graph-yaxis').append('<div id="tickY' + i + '" class="x-line" style="position:absolute; top:' + pos + 'px; left:0; height:1px; font-size: 1px;' + (i != 0 ? 'border-top: 1px dashed #dedede;' : 'border-top: 1px solid #909598;') + 'text-align:left;"></div>');
        }

        // arrange folt lables
        that.chart.flotContainer.find('div.flot-y-axis DIV.flot-tick-label').css("top", "-=8px").css("font-size", "12px");
    };

    /**
     * sort values to category
     * @param result
     * @returns {{}}
     */
    var getStackValues = function(result) {

        var values = {};
        values.startCapitals = [];
        values.savingAmounts = [];
        values.interestAmounts = [];
        values.totalYears = result.length-1;

        for (var i = 0; i < result.length; ++i) {
            values.startCapitals[i] = [i, result[i].StartCapital];
            values.savingAmounts[i] = [i, result[i].SavingRatesResult];
            values.interestAmounts[i] = [i, result[i].InterestResult];
        }

        return values;
    };

    /**
     * format stack elemtents
     * @returns {Array}
     */
    var getStackOptions = function() {

        stackValues = getStackValues(that.resultData.savings.results);

        var obj1 = {};
        obj1.data = stackValues.startCapitals;
        obj1.stack = true;
        obj1.label = "startCapital";
        obj1.highlightColor = "#269C45";
        obj1.bars = {
            show: true,
            barWidth: 0.6,
            lineWidth: 0,
            fill: true,
            fillColor: "#0093c5"
        };

        var obj2 = {};
        obj2.data = stackValues.savingAmounts;
        obj2.stack = true;
        obj2.label = "savingAmounts";
        obj2.highlightColor = "#269C45";
        obj2.bars = {
            show: true,
            barWidth: 0.6,
            lineWidth: 0,
            fill: true,
            fillColor: "#A1C453"/*, align: "center"*/
        };

        var obj3 = {};
        obj3.data = stackValues.interestAmounts;
        obj3.stack = true;
        obj3.label = "interestRates";
        obj3.highlightColor = "#269C45";
        obj3.bars = {
            show: true,
            barWidth: 0.6,
            lineWidth: 0,
            fill: true,
            fillColor: "#eb72a8"/*, align: "center"*/
        };

        var data = [obj1, obj2, obj3];

        return data;
    };

    var getGraphOptions = function() {

        var opts;
        var legendOpts = {
            show: false
            /*
             labelBoxBorderColor: color,
             noColumns: number,
             position: "ne" or "nw" or "se" or "sw",
             margin: number of pixels or [x margin, y margin],
             backgroundColor: null or color,
             backgroundOpacity: number between 0 and 1,
             container: null or jQuery object/DOM element/jQuery expression
             */
        };

        var xaxisOpts = {
            mode: null,
            labelWidth: 25,
            tickDecimals: 0
            /*
             min: 0,
             autoscaleMargin: null or number
             labelHeight: 100,

             transform: null or fn: number -> number
             inverseTransform: null or fn: number -> number

             ticks: 1, //null or number or ticks array or (fn: range -> ticks array)
             tickSize: 1,
             minTickSize: number or array,
             tickFormatter: suffixFormatter*/
        };

        var yaxisOpts = {
            mode: null,
            tickFormatter: suffixFormatter,
            labelWidth: 70,
            tickDecimals: 0
            /*
             min: -10000,
             autoscaleMargin: null or number

             labelWidth: 90,
             labelHeight: 100,

             transform: null or fn: number -> number
             inverseTransform: null or fn: number -> number

             ticks: //null or number or ticks array or (fn: range -> ticks array)
             tickSize: 1,
             minTickSize: number or array
             */
        };

        var gridOpts = {
            show: true,
            aboveData: false,
            backgroundColor: null,
            tickColor: "rgba(0, 0, 0, 0)",
            labelMargin: 10,
            borderWidth: 0,
            clickable: true,
            hoverable: true,
            autoHighlight: false
            /*
             color: "rgba(0, 0, 0, 0.1)",
             borderColor: "rgba(0, 0, 0, 0.1)",
             markings: lala, //[ { yaxis: { from: 10000, to: 10000 } }, { yaxis: { from: 20000, to: 20000 } }, { yaxis: { from: 40000, to: 40000 } }],
             markingsColor: "#f4f4f4",
             mouseActiveRadius: number
             */
        };

        var opts = {
            legend: legendOpts,
            xaxis: xaxisOpts,
            yaxis: yaxisOpts,
            grid: gridOpts
        };

        return opts;
    };

    var suffixFormatter = function (val, axis) {

        var mioLabel = " Mio";
        var nb = 0;

        if (val >= 1000000) {
            nb = (val % 1000000) == 0 ? (val / 1000000).toFixed(axis.tickDecimals) + mioLabel : (val / 1000000).toFixed(1) + mioLabel;
        }
        else {
            nb = formatNumbers((val.toFixed(0)).toString());
            nb = Migros.Utils.formatNumber(nb, " ", 0) || 0;

            if(nb == -1){
                nb = 0;
            }
        }

        return nb;
    };

    var formatNumbers = function(number) {

        return number; //(number != "" && number.indexOf('.') != -1 ? String.localeFormat("{0:n3}", parseFloat(number)) : number != "" ? String.localeFormat("{0:n0}", parseFloat(number)) : "");
    };

    this.parent = Object.getPrototypeOf(this);

    init();
};
Migros.Components.Calculator.Savings.prototype = Migros.Components.Calculator.CoreCalculator;
Migros.Components.Calculator.Savings.prototype.constructor = Migros.Components.Calculator.Savings;

/**
 * calculator leasing
 * @param node
 * @constructor
 */
Migros.Components.Calculator.Leasing =  function(node){

    var that = this,
        requestUrl;

    var init = function() {

        // set variables
        that.node = node;
        that.id = $(that.node).find('form').attr('id');
        that.resultNote = $(that.node).find('.calc-result-note');
        that.resultNode = $(that.node).find('.calc-result');
        that.inputNode = $(that.node).find('.calc-input');
        that.mandatoryErrorNode = 'calc-error-leasing-mandatory';
        that.serverErrorNode = 'calc-error-leasing-server';
        that.invalidResultNoteId = 'calc-note-leasing-invalid';
        that.inputDict = [];
        that.inputIds = [];

        //scriptdata
        that.getScriptData(that.node);
        requestUrl = that.scriptData.request_url;

        // tooltips
        that.setupTooltipsV2();

        // init handler
        that.setupEventHandler();

        // setup inputs
        setupInputs();
    };

    /**
     * setup inputs by filling inputDictionnary and Array for input ids
     * @param e
     */
    var setupInputs = function(e) {

        // input fields
        $.each($(that.node).find(".calc-input input[type='text']"), function(i, el){

            var id = $(el).attr('id');
            var obj = getInputInterval(id);
            var value = -1;

            if($(that.node).attr('data-inputtype') != "percentage"){
                value = Migros.Utils.unformatNumber($(el).val());
            } else {
                value = Migros.Utils.unformatPercentage($(el).val());
            }

            var inputItem = new Migros.Components.Calculator.InputItem(el, value || -1, "input", obj.minValue, obj.maxValue);
            inputItem.combinationErrorIdArray = ['calc-error-leasing-deposit-exchange-combination'];
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });

        // select dropdowns
        $.each($(that.node).find(".calc-input select"), function(i, el){

            var id = $(el).attr('id');

            var inputItem = new Migros.Components.Calculator.InputItem(el, $(el).val(), "select");
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });
    };

    /**
     * get min/max values of input fields
     * @param id
     * @returns {{}}
     */
    var getInputInterval = function(id) {

        var obj = {};

        switch(id){
            case 'leasing-price':
                obj.minValue = that.scriptData.price_min;
                obj.maxValue = that.scriptData.price_max;
                break;
            default:
                break;
        }

        return obj;
    };

    /**
     *  select input change handler
     * @param e
     */
    this.selectInputChangeHandler = function(e) {

        if( !e ) e = window.event;

        var id = $(e.target).attr('id');
        if(id == 'leasing-runtime'){

            var item = that.inputDict[id];
            item.maxValue = getRunTimeMax(that.inputDict['leasing-price'].value)
        }

        that.parent.selectInputChangeHandler(e);
    };

    this.textInputChangeHandler = function(e) {

        if( !e ) e = window.event;

        var id = $(e.target).attr('id');
        if(id == 'leasing-price'){

            that.inputDict['leasing-price'].value = parseFloat(e.target.value);

            var item = that.inputDict['leasing-runtime'];
            item.maxValue = getRunTimeMax(that.inputDict['leasing-price'].value)
        }

        that.parent.textInputChangeHandler(e);
    };

    /**
     * handler on sumbit button click
     * @param e
     */
    this.formSubmitClickHandler = function(e){

        try{e.preventDefault();}catch(e){};

        var _testConfig = {
            "leasing": {
                "numberOfRates": "12",
                "processingFee": "1200.00",
                "processingFeeRate": "2",
                "residualValue": "15000.00",
                "residualValueRate": "10",
                "rateWithoutVatSingle": "1000.00",
                "rateWithoutVatMultiple": "4355.00",
                "vatOfRateSingle": "80.00",
                "vatOfRateMultiple": "348.40",
                "totalWithoutVatSingle": "1000.00",
                "totalWithoutVatMultiple": "100165.00",
                "totalWithoutVat": "101165.00",
                "totalWithVatSingle": "1080.00",
                "totalWithVatMultiple": "108178.20",
                "totalWithVat": "109258.20"
            },
            "additional_values": {
            }
        };

        that.showMandatoryErrors = true;

        var hasErrors = that.checkErrors();

        if(hasErrors == 0){
            if(that.checkCombinationErrors()){
                that.showCombinationErrors();
            } else {
//            that.requestCompleteEvent(_testConfig); //TODO for testing
                updateResult();
            }
        }else{
        	if ($('body').hasClass('smartphone')) {
        		$(window).scrollTop( $('.module-calculator.leasing').position().top);
        	}
        }
    };

    /**
     * check if combinations of inputs have errors and show error notes
     * @returns {boolean}
     */
    this.checkCombinationErrors = function() {

        var hasError = false;
        var leasingDepositExchange = that.inputDict['leasing-deposit-exchange'];
        var leasingDepositExchangeValue = leasingDepositExchange.value;
        var leasingPrice = that.inputDict['leasing-price'];
        var leasingPriceValue = leasingPrice.value;

        that.inputDict['leasing-deposit-exchange'].hasCombinationError = false;
        that.inputDict['leasing-price'].hasCombinationError = false;

        if ((leasingDepositExchangeValue / leasingPriceValue) > (that.scriptData.first_leasing_rate_max / 100)) {

            hasError = true;

            leasingDepositExchange.hasCombinationError = true;
            leasingDepositExchange.combinationErrorIdActive = 0;

            leasingPrice.hasCombinationError = true;
            leasingPrice.combinationErrorIdActive = 0;
        }

        return hasError;
    };

    var getRunTimeMax = function(price) {

        var max = 72;

        if(price > 0){
            if(parseFloat(price) < that.scriptData.price_min_for_60_month_runtime) {
                max = 48;
            } else if(parseFloat(price) < that.scriptData.price_min_for_72_month_runtime) {
                max = 60;
            }
        }

        return max;
    };

    /**
     * update result
     */
    var updateResult = function () {

        that.hideError();

        var _config = {
            id : "leasing",
            category : that.inputDict['leasing-category'].value,
            object : that.inputDict['leasing-object'].value,
            price : that.inputDict['leasing-price'].value,
            depositExchange : that.inputDict['leasing-deposit-exchange'].value,
            runtime : that.inputDict['leasing-runtime'].value,
            periodicity : that.inputDict['leasing-periodicity'].value
        };

        var _url = requestUrl;
        that.requestData(_url, _config, that.requestCompleteEvent);
    };

    /**
     * callback on request complete
     * @param data
     */
    this.requestCompleteEvent = function(data){

        if (data !== null && data.length > 0) {
            that.resultData = JSONUtil.parse(data);
        }

//        that.resultData = data;//TODO for testing
        that.hideResultNote();

        if(that.resultData){
            that.showResult();
            updateContent();
        } else {
            that.hideResult();
        }
    };

    /**
     * update content table
     */
    var updateContent = function() {

        var $table = $(that.resultNode).find('.calc-table table');

        $table.find('tr').eq(0).find('td').eq(1).html(that.getFormattedResultNumber(that.inputDict['leasing-price'].value, 2));
        $table.find('tr').eq(1).find('td').eq(1).html(that.inputDict['leasing-runtime'].getSelectionText());
        $table.find('tr').eq(2).find('td').eq(1).html(that.inputDict['leasing-periodicity'].getSelectionText());
        $table.find('tr').eq(3).find('td').eq(1).html(that.resultData.leasing.numberOfRates);
        $table.find('tr').eq(4).find('td').eq(1).html(that.getFormattedResultPercentage(parseFloat(that.resultData.leasing.processingFeeRate), 2) + " %");
        $table.find('tr').eq(4).find('td').eq(2).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.processingFee), 2));
        $table.find('tr').eq(5).find('td').eq(1).html(that.getFormattedResultPercentage(parseFloat(that.resultData.leasing.residualValueRate), 2) + " %");
        $table.find('tr').eq(5).find('td').eq(2).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.residualValue), 2));

        if (!$('body').hasClass('smartphone')) {
	        if(parseFloat(that.inputDict['leasing-deposit-exchange'].value) > 0){
	            $table.find('tr').eq(7).find('td').eq(0).html("1x");
	        } else {
	            $table.find('tr').eq(7).find('td').eq(0).html((parseFloat(that.resultData.leasing.numberOfRates)).toString()+'x');
	        }
	        $table.find('tr').eq(8).find('td').eq(0).html((parseFloat(that.resultData.leasing.numberOfRates)-1).toString()+'x');

	        $table.find('tr').eq(7).find('td').eq(1).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.rateWithoutVatSingle), 2));
	        $table.find('tr').eq(8).find('td').eq(1).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.rateWithoutVatMultiple), 2));

	        $table.find('tr').eq(7).find('td').eq(2).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.vatOfRateSingle), 2));
	        $table.find('tr').eq(8).find('td').eq(2).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.vatOfRateMultiple), 2));

	        $table.find('tr').eq(7).find('td').eq(3).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithoutVatSingle), 2));
	        $table.find('tr').eq(8).find('td').eq(3).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithoutVatMultiple), 2));
	        $table.find('tr').eq(9).find('td').eq(3).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithoutVat), 2));

	        $table.find('tr').eq(7).find('td').eq(4).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithVatSingle), 2));
	        $table.find('tr').eq(8).find('td').eq(4).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithVatMultiple), 2));
	        $table.find('tr').eq(9).find('td').eq(4).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithVat), 2));

	        if(parseFloat(that.inputDict['leasing-deposit-exchange'].value) > 0){
	            $table.find('tr').eq(8).css({'display': 'table-row'});
	            $table.find('tr').eq(9).css({'display': 'table-row'});
	        } else {
	            $table.find('tr').eq(8).css({'display': 'none'});
	            $table.find('tr').eq(9).css({'display': 'none'});
	        }
		}else{ // smartPhone
	        if(parseFloat(that.inputDict['leasing-deposit-exchange'].value) > 0){
	            $table.find('tr').eq(7).find('td').eq(1).html("1x");
	            $table.find('tr').eq(9).find('td').eq(1).html("1x");
	            $table.find('tr').eq(11).find('td').eq(1).html("1x");
	            // $table.find('tr').eq(12).find('td').eq(1).html("1x");
	            // $table.find('tr').eq(15).find('td').eq(1).html("1x");
	            // $table.find('tr').eq(16).find('td').eq(1).html("1x");
	        } else {
	            $table.find('tr').eq(7).find('td').eq(1).html((parseFloat(that.resultData.leasing.numberOfRates)).toString()+'x');
	            $table.find('tr').eq(9).find('td').eq(1).html((parseFloat(that.resultData.leasing.numberOfRates)).toString()+'x');
	            // $table.find('tr').eq(12).find('td').eq(1).html((parseFloat(that.resultData.leasing.numberOfRates)).toString()+'x');
	            // $table.find('tr').eq(16).find('td').eq(1).html((parseFloat(that.resultData.leasing.numberOfRates)).toString()+'x');
	        }
	        $table.find('tr').eq(8).find('td').eq(1).html((parseFloat(that.resultData.leasing.numberOfRates)-1).toString()+'x');
	        $table.find('tr').eq(10).find('td').eq(1).html((parseFloat(that.resultData.leasing.numberOfRates)-1).toString()+'x');
            // $table.find('tr').eq(13).find('td').eq(1).html((parseFloat(that.resultData.leasing.numberOfRates)).toString()+'x');
            // $table.find('tr').eq(17).find('td').eq(1).html((parseFloat(that.resultData.leasing.numberOfRates)).toString()+'x');

	        $table.find('tr').eq(7).find('td').eq(2).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.rateWithoutVatSingle), 2));
	        $table.find('tr').eq(8).find('td').eq(2).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.rateWithoutVatMultiple), 2));

	        $table.find('tr').eq(9).find('td').eq(2).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.vatOfRateSingle), 2));
	        $table.find('tr').eq(10).find('td').eq(2).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.vatOfRateMultiple), 2));

	        if(parseFloat(that.inputDict['leasing-deposit-exchange'].value) > 0){
	            $table.find('tr').eq(8).css({'display': 'table-row'});
	            $table.find('tr').eq(10).css({'display': 'table-row'});
	            $table.find('tr').eq(13).css({'display': 'table-row'});
	            $table.find('tr').eq(14).css({'display': 'table-row'});
	            $table.find('tr').eq(17).css({'display': 'table-row'});
	            $table.find('tr').eq(18).css({'display': 'table-row'});
		        $table.find('tr').eq(11).find('td').eq(1).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithoutVat), 2));

		        $table.find('tr').eq(12).find('td').eq(1).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithVat), 2));
	        } else {
	            $table.find('tr').eq(8).css({'display': 'none'});
	            $table.find('tr').eq(10).css({'display': 'none'});
	            $table.find('tr').eq(13).css({'display': 'none'});
	            $table.find('tr').eq(14).css({'display': 'none'});
	            $table.find('tr').eq(17).css({'display': 'none'});
	            $table.find('tr').eq(18).css({'display': 'none'});


		        $table.find('tr').eq(11).find('td').eq(1).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithoutVatSingle), 2));

		        $table.find('tr').eq(12).find('td').eq(1).html(that.getFormattedResultNumber(parseFloat(that.resultData.leasing.totalWithVatSingle), 2));
	        }
		}
    };

    this.parent = Object.getPrototypeOf(this);

    init();
};
Migros.Components.Calculator.Leasing.prototype = Migros.Components.Calculator.CoreCalculator;
Migros.Components.Calculator.Leasing.prototype.constructor = Migros.Components.Calculator.Leasing;

/**
 * calculator business credit
 * @param node
 * @constructor
 */
Migros.Components.Calculator.BusinessCredit =  function(node){

    var that = this,
        requestUrl,
        creditMin,
        creditMax;

    var init = function() {

        // set variables
        that.node = node;
        that.id = $(that.node).find('form').attr('id');
        that.resultNote = $(that.node).find('.calc-result-note');
        that.resultNode = $(that.node).find('.calc-result');
        that.inputNode = $(that.node).find('.calc-input');
        that.mandatoryErrorNode = 'calc-error-business-credit-mandatory';
        that.serverErrorNode = 'calc-error-business-credit-server';
        that.invalidResultNoteId = 'calc-note-business-credit-invalid';
        that.inputDict = [];
        that.inputIds = [];

        //scriptdata
        that.getScriptData(that.node);
        requestUrl = that.scriptData.request_url;
        creditMin = that.scriptData.credit_amount_min;
        creditMax = that.scriptData.credit_amount_max;


        // tooltips
        that.setupTooltipsV2();

        // init handler
        that.setupEventHandler();

        // setup inputs
        setupInputs();
    };

    /**
     * setup inputs by filling inputDictionnary and Array for input ids
     * @param e
     */
    var setupInputs = function(e) {

        // input fields
        $.each($(that.node).find(".calc-input input[type='text']"), function(i, el){

            var id = $(el).attr('id');
            var obj = getInputInterval(id);
            var value = -1;

            if($(that.node).attr('data-inputtype') != "percentage"){
                value = Migros.Utils.unformatNumber($(el).val());
            } else {
                value = Migros.Utils.unformatPercentage($(el).val());
            }

            var inputItem = new Migros.Components.Calculator.InputItem(el, value || -1, "input", obj.minValue, obj.maxValue);
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });

        // select dropdowns
        $.each($(that.node).find(".calc-input select"), function(i, el){

            var id = $(el).attr('id');

            var inputItem = new Migros.Components.Calculator.InputItem(el, $(el).val(), "select" );
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });
    };

    /**
     * get min/max values of input fields
     * @param id
     * @returns {{}}
     */
    var getInputInterval = function(id) {

        var obj = {};

        switch(id){
            case 'business-credit-revenue':
                obj.minValue = that.scriptData.revenue_min;
                obj.maxValue = that.scriptData.revenue_max;
                break;
            case 'business-credit-revenue-previous':
                obj.minValue = that.scriptData.revenue_min;
                obj.maxValue = that.scriptData.revenue_max;
                break;
            case 'business-credit-cash-flow':
                obj.minValue = that.scriptData.cashflow_min;
                obj.maxValue = that.scriptData.cashflow_max;
                break;
            case 'business-credit-cash-flow-previous':
                obj.minValue = that.scriptData.cashflow_min;
                obj.maxValue = that.scriptData.cashflow_max;
                break;
            case 'business-credit-equity':
                obj.minValue = that.scriptData.equity_min;
                obj.maxValue = that.scriptData.equity_max;
                break;
            case 'business-credit-equity-previous':
                obj.minValue = that.scriptData.equity_min;
                obj.maxValue = that.scriptData.equity_max;
                break;
            case 'business-credit-private-equity':
                obj.minValue = that.scriptData.private_equity_min;
                obj.maxValue = that.scriptData.private_equity_max;
                break;
            case 'business-credit-private-equity-previous':
                obj.minValue = that.scriptData.private_equity_min;
                obj.maxValue = that.scriptData.private_equity_max;
                break;
            case 'business-credit-further-loans':
                obj.minValue = that.scriptData.further_loans_min;
                obj.maxValue = that.scriptData.further_loans_max;
                break;
            default:
                break;
        }

        return obj;
    };

    /**
     * select input change handlerf
     * @param e
     */
    this.selectInputChangeHandler = function(e){

        if( !e ) e = window.event;

        // call parent
        that.parent.selectInputChangeHandler(e, that);

        var id = $(e.target).attr('id');
        var item = that.inputDict[id];
        item.value = e.target.value;

        that.inputDict['business-credit-year-previous'].value = parseInt(item.value) - 1;
        $('.display-business-credit-year-previous').html(parseInt(item.value) - 1);
        that.inputDict['business-credit-year-previous'].setInputValue();
    };

    /**
     * handler on sumbit button click
     * @param e
     */
    this.formSubmitClickHandler = function(e){

        try{e.preventDefault();}catch(e){};

        var _testConfig = {
            "businessCredit": {
                "creditAmount": "200"
            }
        };

        that.showMandatoryErrors = true;

        var hasErrors = that.checkErrors();

        if(hasErrors == 0){
            if(that.checkCombinationErrors()){
                that.showCombinationErrors();
            } else {
//                that.requestCompleteEvent(_testConfig); //TODO for testing
                updateResult();
            }
        }else{
        	if ($('body').hasClass('smartphone')) {
        		$(window).scrollTop( $('.module-calculator.business-credit').position().top);
        	}
        }
    };

    /**
     * update result
     */
    var updateResult = function () {

        that.hideError();

        var _config = {
            id : "businesscredit",
            year : parseFloat(that.inputDict['business-credit-year'].value),
            yearPrevious : that.inputDict['business-credit-year-previous'].value,
            revenue : that.inputDict['business-credit-revenue'].value,
            revenuePrevious : that.inputDict['business-credit-revenue-previous'].value,
            cashFlow : that.inputDict['business-credit-cash-flow'].value,
            cashFlowPrevious : that.inputDict['business-credit-cash-flow-previous'].value,
            equity : that.inputDict['business-credit-equity'].value,
            equityPrevious : that.inputDict['business-credit-equity-previous'].value,
            privateEquity : that.inputDict['business-credit-private-equity'].value,
            privateEquityPrevious : that.inputDict['business-credit-private-equity-previous'].value,
            furtherLoans : that.inputDict['business-credit-further-loans'].value
        };

        var _url = requestUrl;
        that.requestData(_url, _config, that.requestCompleteEvent);
    };

    /**
     * callback on request complete
     * @param data
     */
    this.requestCompleteEvent = function(data){

        if (data !== null && data.length > 0) {
            that.resultData = JSONUtil.parse(data);
        }

//        that.resultData = data; //TODO for testing
        that.hideResultNote();

        if(that.resultData){
            that.showResult();

            var creditAmount = parseFloat(that.resultData.businessCredit.creditAmount);
            if(creditAmount > creditMin && creditAmount < creditMax){
                updateContent('calc-result-note-positive');
            } else {
                updateContent('calc-result-note-negative');
            }

        } else {
            that.hideResult();
        }
    };

    /**
     * update content table
     */
    var updateContent = function(id) {

        var $table = $(that.resultNode).find('.calc-table table');
        var targetAmount = that.getFormattedResultNumber(that.resultData.businessCredit.creditAmount, 0);
        targetAmount = ( parseFloat(targetAmount) > 0) ? targetAmount : 0;

        $table.find('tr').eq(0).find('td').eq(1).html(targetAmount);

        $('.calc-result-text>div').css({
            'display': 'none'
        });

        $('.'+id).css({
            'display': 'block'
        });
    };

    this.parent = Object.getPrototypeOf(this);

    init();
};
Migros.Components.Calculator.BusinessCredit.prototype = Migros.Components.Calculator.CoreCalculator;
Migros.Components.Calculator.BusinessCredit.prototype.constructor = Migros.Components.Calculator.BusinessCredit;

/**
 * calculator provision saving
 * @param node
 * @constructor
 */
Migros.Components.Calculator.ProvisionSaving =  function(node){

    var that = this,
        requestUrl,
        defaultRadioId,
        durationMaleMax,
        durationFemaleMax,
        yearlyRateEmployedMax,
        yearlyRateSelfemployedMax,
        yearlyRateMax;

    var init = function() {

        // set variables
        that.node = node;
        that.id = $(that.node).find('form').attr('id');
        that.resultNote = $(that.node).find('.calc-result-note');
        that.resultNode = $(that.node).find('.calc-result');
        that.inputNode = $(that.node).find('.calc-input');
        that.mandatoryErrorNode = 'calc-error-provision-saving-mandatory';
        that.serverErrorNode = 'calc-error-provision-saving-server';
        that.invalidResultNoteId = 'calc-note-provision-saving-invalid';
        that.inputDict = [];
        that.inputIds = [];

        // default radio
        defaultRadioId = getDefaultSelectedRadio();

        //scriptdata
        that.getScriptData(that.node);

        // set variables
        requestUrl = that.scriptData.request_url;
        durationMaleMax = that.scriptData.ahv_age_male - that.scriptData.age_min;
        durationFemaleMax = that.scriptData.ahv_age_female - that.scriptData.age_min;
        yearlyRateEmployedMax = that.scriptData.yearly_rate_employed_max;
        yearlyRateSelfemployedMax = that.scriptData.yearly_rate_selfemployed_max;

        // tooltips
        that.setupTooltips();

        // init handler
        that.setupEventHandler();

        // setup inputs
        setupInputs();
    };

    /**
     * get default id of selected radio
     * @returns {*}
     */
    var getDefaultSelectedRadio = function() {

        var id;

        $.each($(that.node).find("input[type='radio']"), function(i, el){

            if($(el).attr('checked')){
                id = $(el).attr('id');
            }
        });

        return id;
    };

    /**
     * setup inputs by filling inputDictionnary and Array for input ids
     * @param e
     */
    var setupInputs = function(e) {

        // input fields
        $.each($(that.node).find(".calc-input input[type='text']"), function(i, el){

            var id = $(el).attr('id');
            var obj = getInputInterval(id);
            var value = -1;

            if($(that.node).attr('data-inputtype') != "percentage"){
                value = Migros.Utils.unformatNumber($(el).val());
            } else {
                value = Migros.Utils.unformatPercentage($(el).val());
            }

            var inputItem = new Migros.Components.Calculator.InputItem(el, value || -1, "input", obj.minValue, obj.maxValue);
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });

        // select dropdowns
        $.each($(that.node).find(".calc-input select"), function(i, el){

            var id = $(el).attr('id');

            var inputItem = new Migros.Components.Calculator.InputItem(el, $(el).val(), "select" );
            that.inputDict[id] = inputItem;
            that.inputIds.push(id);
        });

        // radio fieldset
        $.each($(that.node).find("fieldset"), function(i, el){

            if($(el).attr('data-mandatory') == "true"){
                var id = $(el).attr('id');
                var inputItem = new Migros.Components.Calculator.InputItem(el, $(el).find("input[name='"+id+"']:checked").val(), "radio");
                that.inputDict[id] = inputItem;
                that.inputIds.push(id);
            }
        });

        that.inputDict['provision-saving-duration'].maxValue = durationMaleMax;
    };

    /**
     * get min/max values of input fields
     * @param id
     * @returns {{}}
     */
    var getInputInterval = function(id) {

        var obj = {};
        switch(id){

            case 'provision-saving-age':
                obj.minValue = that.scriptData.age_min;
                obj.maxValue = that.scriptData.ahv_age_male;
                if(that.inputDict['provision-saving-sex']) {
                    if (that.inputDict['provision-saving-sex'].value == "female") {
                        obj.maxValue = that.scriptData.ahv_age_female;
                    }
                }
                break;
            case 'provision-saving-duration':
                obj.minValue = 1;
                obj.maxValue = that.scriptData.duration_male_max;
                if(that.inputDict['provision-saving-sex']) {
                    if (that.inputDict['provision-saving-sex'].value == "female") {
                        obj.maxValue = that.scriptData.duration_female_max;
                    }
                }
                break;
            default:
                break;
        }

        return obj;
    };

    /**
     * select input change
     * @param e
     */
    this.selectInputChangeHandler = function(e) {

        if( !e ) e = window.event;

        // call parent
        that.parent.selectInputChangeHandler(e, that);
    };

    this.radioChangeHandler = function(e) {
        if( !e ) e = window.event;
        var that = e.data.self;

        if(e.target.value == "male") {
            that.inputDict['provision-saving-age'].maxValue = 0;
            that.inputDict['provision-saving-duration'].maxValue = 0;
            that.inputDict['provision-saving-age'].maxValue = parseFloat(that.scriptData.ahv_age_male);
            that.inputDict['provision-saving-duration'].maxValue = parseFloat(durationMaleMax);
        } else if(e.target.value == "female") {
            that.inputDict['provision-saving-age'].maxValue = 0;
            that.inputDict['provision-saving-duration'].maxValue = 0;
            that.inputDict['provision-saving-age'].maxValue = parseFloat(that.scriptData.ahv_age_female);
            that.inputDict['provision-saving-duration'].maxValue = parseFloat(durationFemaleMax);
        } else if (e.target.value == "employed") {
            yearlyRateMax = parseFloat(yearlyRateEmployedMax);
        } else if (e.target.value == "self-employed") {
            yearlyRateMax = parseFloat(yearlyRateSelfemployedMax);
        }

        // call parent
        that.parent.radioChangeHandler(e, that);
    };

    /**
     * handler on sumbit button click
     * @param e
     */
    this.formSubmitClickHandler = function(e){

        try{e.preventDefault();}catch(e){};

        var _testConfig = {
            "provisionSaving": {
                "endOfProvision": "31.12.2075",
                "payment": "33696",
                "duration": "62",
                "actualinterestRate" : "3769786",
                "averageinterestRate" : "4645509"
            }
        };

        that.showMandatoryErrors = true;

        var hasErrors = that.checkErrors();

        if(hasErrors == 0){
            if(that.checkCombinationErrors()){
                that.showCombinationErrors();
            } else {
//                that.requestCompleteEvent(_testConfig); //TODO for testing
                updateResult();
            }
        }
    };

    this.formResetClickHandler = function(e) {

        if( !e ) e = window.event;

        $('#'+defaultRadioId).trigger('click');

        // call parent
        that.parent.formResetClickHandler(e, that);

    };

    var yearlyRateHasError = function() {

        var hasError = false;

        if(parseFloat(that.inputDict['provision-saving-yearly-rate'].value)  > yearlyRateMax){

            hasError = true;
        }

        return hasError;
    };

    /**
     * update result
     */
    var updateResult = function () {

        that.hideError();

        // if value not available -> -1
        var _config = {
            id : "provisionsaving",
            sex : that.inputDict['provision-saving-sex'].value,
            age : that.inputDict['provision-saving-age'].value,
            duration: that.inputDict['provision-saving-duration'].value,
            employment : that.inputDict['provision-saving-employment'].value,
            yearlyRate : that.inputDict['provision-saving-yearly-rate'].value
        };

        var _url = requestUrl;
        that.requestData(_url, _config, that.requestCompleteEvent);
    };

    /**
     * callback on request complete
     * @param data
     */
    this.requestCompleteEvent = function(data){

        if (data !== null && data.length > 0) {
            that.resultData = JSONUtil.parse(data);
        }

//        that.resultData = data; //TODO for testing
        that.hideResultNote();

        if(that.resultData){
            that.showResult();

            if(yearlyRateHasError()){
                that.showResultNote('calc-note-provision-saving-yearly-rate');
            }

            updateContent();

        } else {
            that.hideResult();
        }
    };

    /**
     * update content table
     */
    var updateContent = function() {
        var $table = $(that.resultNode).find('.calc-table table');

        // update result table
        $table.find('tr').eq(0).find('td').eq(1).html(that.resultData.provisionSaving.endOfProvision);
        $table.find('tr').eq(1).find('td').eq(2).html(Migros.Utils.formatNumber(parseFloat(that.resultData.provisionSaving.payment), " ", 0));
        $table.find('tr').eq(2).find('td').eq(1).html(that.resultData.provisionSaving.duration);
        $table.find('tr').eq(3).find('td').eq(1).html(Migros.Utils.formatNumber(parseFloat(that.resultData.provisionSaving.actualinterestRate), " ", 0));
        $table.find('tr').eq(4).find('td').eq(1).html(Migros.Utils.formatNumber(parseFloat(that.resultData.provisionSaving.averageinterestRate), " ", 0));

        // update inputs
        that.inputDict['provision-saving-yearly-rate'].value = parseFloat(that.resultData.provisionSaving.payment);
        that.inputDict['provision-saving-yearly-rate'].setInputValue();
        that.inputDict['provision-saving-yearly-rate'].formatValue();
    };

    this.parent = Object.getPrototypeOf(this);

    init();
};
Migros.Components.Calculator.ProvisionSaving.prototype = Migros.Components.Calculator.CoreCalculator;
Migros.Components.Calculator.ProvisionSaving.prototype.constructor = Migros.Components.Calculator.ProvisionSaving;

/* ######## calculators End ############################################# */


/* ######## campaign ############################################# */

// $LastChangedRevision$


$(document).ready(function() {
  if($("#migros-wrapper").hasClass("campaign") || $("#migros-content-mobile").hasClass("campaign")){
    initCampaign();
  }
});

function initCampaign(){
  var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var $body = $("body");

  if(!$body.hasClass("edit")){


    // Show/Hide Language select
    $(".campaign #header .nav-top-items .header-language li:first-child").click(function(){
      $(".campaign #header .nav-top-items .header-language li").not(":first-child").toggle();
    });

    // Set sticky footer during reload/page load
    if((bodyScrollTop + window.innerHeight < $(document).height() - 130)){
      $(".campaign .module-footer .sticky").addClass("unstick");
    }

    if($body.hasClass("tablet")){
      scrollTablet();
      $(window).scroll(scrollTablet);
    }else if($body.hasClass("smartphone")){
      //$(".campaign #header .logo").addClass("box-shadow");
      //scrollSmartphone();
      //$(window).scroll(scrollSmartphone);
    }else{
      scrollDesktop();
      $(window).scroll(scrollDesktop);
    }
  }
}

function scrollSmartphone(){
  bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  // Resize logo during scroll
  var logoRezisePos = 200;
  if(bodyScrollTop > logoRezisePos && bodyScrollTop < logoRezisePos + 9){
    // 51 -> 46 = 5 .campaign #header .logo
    // 16 -> 15 = 1 .campaign #header .logo img
    // 84 -> 75 = 9
    var delta = (bodyScrollTop - logoRezisePos) * 100/6;
    $(".campaign #header .logo").height(51 - (5 * delta/100));
    $(".campaign #header .logo img").css({
      "marginTop" : 16 - (delta/100),
      "width": 84 - (9 * delta/100)
    });
  }
  if(bodyScrollTop > logoRezisePos + 9){
    $(".campaign #header .logo").height(46);
    $(".campaign #header .logo img").css({
      "marginTop" : 15,
      "width": 75
    });
  }
  if(bodyScrollTop < logoRezisePos){
    $(".campaign #header .logo").height(51);
    $(".campaign #header .logo img").css({
      "marginTop" : 16,
      "width": 84
    });
  }
}

function scrollTablet() {
  bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  // Set sticky footer during scroll
  if(bodyScrollTop + window.innerHeight >= $(document).height() - 124){
    $(".campaign .module-footer .sticky").removeClass("unstick");
  }
  if(bodyScrollTop + window.innerHeight + 31 < $(document).height() - 118 + 18){
    $(".campaign .module-footer .sticky").addClass("unstick");
  }

  // Resize logo during scroll
  var logoRezisePos = 200;
  if(bodyScrollTop > logoRezisePos && bodyScrollTop < logoRezisePos + 30){
    // 75 -> 46 = 29 .campaign #header .logo
    // 28 -> 15 = 13 .campaign #header .logo img
    // 111 -> 81 = 30
    var delta = (bodyScrollTop - logoRezisePos) * 100/29;
    $(".campaign #header .logo").height(75 - (29 * delta/100));
    $(".campaign #header .logo img").css({
      "marginTop" : 28 - (13 * delta/100),
      "width": 111 - (30 * delta/100)
    });
  }
  if(bodyScrollTop > logoRezisePos + 30){
    $(".campaign #header .logo").height(46);
    $(".campaign #header .logo img").css({
      "marginTop" : 15,
      "width": 81
    });
  }
  if(bodyScrollTop < logoRezisePos){
    $(".campaign #header .logo").height(75);
    $(".campaign #header .logo img").css({
      "marginTop" : 28,
      "width": 111
    });
  }
}

function scrollDesktop() {
  bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  // Set sticky footer during scroll
  if(bodyScrollTop + window.innerHeight >= $(document).height() - 124){
    $(".campaign .module-footer .sticky").removeClass("unstick");
  }
  if(bodyScrollTop + window.innerHeight + 31 < $(document).height() - 118 + 18){
    $(".campaign .module-footer .sticky").addClass("unstick");
  }

  // Resize logo during scroll
  var logoRezisePos = 200;
  if(bodyScrollTop >= logoRezisePos + 220){
    $(".campaign #header .logo").height(46);
    $(".campaign #header .logo img").css({
      "marginTop" : 15,
      "width": 86
    });
  } else if(bodyScrollTop > logoRezisePos && bodyScrollTop < logoRezisePos + 220){
	  var delta = 100 / 220 * (bodyScrollTop - logoRezisePos);
    $(".campaign #header .logo").height(105 - (59 * delta/100));
    $(".campaign #header .logo img").css({
      "marginTop" : 40 - (25 * delta/100),
      "width": 155 - (69 * delta/100)
    });
  } else {
    $(".campaign #header .logo").height(105);
    $(".campaign #header .logo img").css({
      "marginTop" : 40,
      "width": 155
    });
  }

  // Show/Hide eyecatcher
  var eyeContainer = $(".campaign .module-header-image .eyecatcher .eye-container");
  if(bodyScrollTop < 50){
    eyeContainer.addClass("animate");
    eyeContainer.removeClass("animate-back");
  }else if(bodyScrollTop > 50){
    eyeContainer.addClass("animate-back");
    eyeContainer.removeClass("animate");
  }


  // scroll
/**/

  var imageScrollSpeed = 1.75;
  var campaignModuleHeaderImage = $(".campaign .module-header-image");
  if(bodyScrollTop >= logoRezisePos + (468 * imageScrollSpeed)){
    campaignModuleHeaderImage.css({
      top: -500
    });
  } else if(bodyScrollTop > 100 && bodyScrollTop < logoRezisePos + (468 * imageScrollSpeed)){
    campaignModuleHeaderImage.css({
      top: 46 - (bodyScrollTop - 100) / imageScrollSpeed
    });
  } else {
    campaignModuleHeaderImage.css({
      top: 46
    });
  }

  if(bodyScrollTop > 100 && bodyScrollTop < logoRezisePos + (478 * imageScrollSpeed)){
    $(".campaign .content-introduction .static-eyecatcher .eye-wrapper").css({
    	"margin" : (478 - bodyScrollTop + ((bodyScrollTop - 100) / imageScrollSpeed)) + 'px auto 0'
      })
  } else {
    $(".campaign .content-introduction .static-eyecatcher .eye-wrapper").css({
    	"margin" : (478 - bodyScrollTop) + 'px auto 0'
      })
  }

}

/* ######## campaign End ############################################# */


/* ######## ytplayer ############################################# */

var player;

function initMobileYTPlayer(){
    $('.yt-slider li').on('click', function(){
        $('.yt-slider li').removeClass('active');
        $(this).addClass('active');
    });

	var hashId = $.bbq.getState('id');
    if (hashId != undefined && hashId.indexOf('yt-player-id') != -1) {
    	var videoId = hashId.split('yt-player-id-')[1];
        $('.yt-slider li').removeClass('active');
        $('.yt-slider li').eq( videoId ).addClass('active');
        $('.yt-slider li').closest('.module-youtube').attr('id');
        //jQuery.bbq.pushState('#videos');
        $('html, body').animate({
            scrollTop: $('.yt-slider li').closest('.module-youtube').position().top - 120
        }, 'normal', function(){
        	jQuery.bbq.pushState('#yt-player-id');
        });
    }

    $(window).bind('hashchange', function (event) {
    	var hashId = event.getState('id');
        if (hashId != undefined && hashId.indexOf('yt-player-id') != -1) {
        	var videoId = hashId.split('yt-player-id-')[1];
            $('.yt-slider li').removeClass('active');
            $('.yt-slider li').eq( videoId ).addClass('active');
            $('.yt-slider li').closest('.module-youtube').attr('id');
            //
            $('html, body').animate({
                scrollTop: $('.yt-slider li').closest('.module-youtube').position().top - 120
            }, 'normal', function(){
            	jQuery.bbq.pushState('#yt-player-id');
            });
        }
    });
}

function initYTPlayer(size){

    var visibleSlides = 3;
    var slidesWidth = 195;
    var slidesMargin = 15;
    var playerWidth = 645;
    var swipeing = true;

    if($('#migros-wrapper').hasClass('campaign')){
    	visibleSlides = 3;
        slidesWidth = 226;
        slidesMargin = 15;
        playerWidth = 738;
        swipeing = true;
    }

    if(size == 'large') {
        visibleSlides = 4;
        slidesWidth = 220;
        slidesMargin = 20;
        playerWidth = 980;
        swipeing = false;
    }


    //toggle list view
    $('.toggle-list-view a').on('click', function (e) {
        e.preventDefault();
        var activeItem = $('.yt-list-item.active').data('index-slide');
        var text_open = $(this).data('open');
        var text_closed = $(this).data('closed');
        var $container = $('.yt-player-container');
        // initial closed
        if (!$container.hasClass('list-open')) {
            $container.addClass('list-open');
            setTimeout(function () {
                $container.addClass('controls');
            }, 500);
            $(this).find('.button-text').text(text_open);
            $container.addClass('reload');
            mainSlider.reloadSlider({
                pager: false,
                slideWidth: playerWidth,
                mode: 'fade',
                startSlide: activeItem,
                touchEnabled: false,
                onSliderLoad: function () {
                    $container.removeClass('reload')
                }
            });
        } else {
            $container.removeClass('list-open controls');
            $(this).find('.button-text').text(text_closed);
            $container.addClass('reload');
            mainSlider.reloadSlider({
                pager: false,
                slideWidth: playerWidth,
                mode: 'horizontal',
                startSlide: activeItem,
                touchEnabled: swipeing,
                onSlideNext: function ($slideElement, oldIndex, newIndex) {
                    slideVid(newIndex);
                },
                onSlidePrev: function ($slideElement, oldIndex, newIndex) {
                    slideVid(newIndex);
                },
                onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                    $('.yt-list-item').removeClass('active');
                    // highlight current slide
                    $('.list-slider > li').each(function () {
                        if ($(this).data('index-slide') === newIndex) {
                            $(this).addClass('active');
                        }
                    });
                },
                onSliderLoad: function () {
                    $container.removeClass('reload')
                }
            });
        }
    });

    // init main YT slider

    var mainSliderStartId = 0;
	var hashId = $.bbq.getState('id');
    if (hashId != undefined && hashId.indexOf('yt-player-id') != -1) {
    	mainSliderStartId = hashId.split('yt-player-id-')[1];
        $('html, body').animate({
            scrollTop: $('.yt-slider li').closest('.module-youtube').position().top + ($('body').hasClass('tablet')?20:50)
        }, 'normal', function(){
        	jQuery.bbq.pushState('#yt-player-id');
        });
    }

    $(window).bind('hashchange', function (event) {
    	var hashId = event.getState('id');
        if (hashId != undefined && hashId.indexOf('yt-player-id') != -1) {
        	var videoId = hashId.split('yt-player-id-')[1];
            mainSlider.goToSlide(videoId);
            $('html, body').animate({
                scrollTop: $('.yt-slider li').closest('.module-youtube').position().top + ($('body').hasClass('tablet')?20:50)
            }, 'normal', function(){
            	jQuery.bbq.pushState('#yt-player-id');
            });
        }
    });

    var mainSlider = $('.yt-slider').bxSlider({
        pager: false,
        slideWidth: playerWidth,
        startSlide: mainSliderStartId,
        touchEnabled: swipeing,
        onSlideNext: function ($slideElement, oldIndex, newIndex) {
            slideVid(newIndex);
        },
        onSlidePrev: function ($slideElement, oldIndex, newIndex) {
            slideVid(newIndex);
        },
        onSliderLoad: function () {
            // initial highlight start slide
            $('.list-slider > li').each(function () {
                if ($(this).data('index-slide') === 0) {
                    $(this).addClass('active');
                }
            });
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            $('.yt-list-item').removeClass('active');
            // highlight current slide
            $('.list-slider > li').each(function () {
                if ($(this).data('index-slide') === newIndex) {
                    $(this).addClass('active');
                }
            });
        }
    });

    // init Thumb slider
    var listSlider = $('.list-slider').bxSlider({
        pager: false,
        moveSlides: 1,
        slideWidth: slidesWidth,
        slideMargin: slidesMargin,
        maxSlides: visibleSlides,
        minSlides: visibleSlides,
        touchEnabled: swipeing
    });

    if(listSlider.length > 0) {
        var listSliderItems = listSlider.getSlideCount();
        if (listSliderItems <= visibleSlides) {
            listSlider.reloadSlider({
                controls: false,
                pager: false,
                moveSlides: 1,
                slideWidth: slidesWidth,
                slideMargin: slidesMargin,
                maxSlides: visibleSlides,
                minSlides: visibleSlides,
                touchEnabled: swipeing
            });
        }
    }

    //switch vid
    $(document).on('click', '.yt-list-item', function () {
        var clickedIndex = $(this).data('index-slide');
        $('.yt-list-item').removeClass('active');
        $(this).addClass('active');
        mainSlider.goToSlide(clickedIndex);
        stopVideo();
    });

    // YT
    $('.yt-player-slider .yt-play, .yt-player-slider .yt-desc a').on('click', function (e) {
        e.preventDefault();
        var yt_id = $(this).data('yt-id');

        if($('body').hasClass('tablet')){
            var vidSrc = 'https://youtu.be/' + yt_id;
            window.open(vidSrc, 'YT-Window', '_blank');
        } else {
            if(player){
                var playerState = player.getPlayerState();
                $('.yt-player-vid').addClass('active');

                if (playerState == 5 || playerState == 0) {
                    player.loadVideoById(yt_id);
                } else if (playerState == 2) {
                    player.playVideo();
                }
            } else {
                var vidSrc = 'https://youtu.be/' + yt_id;
                window.open(vidSrc, 'YT-Window', '_blank');
            }
        }
    });

    $('.yt-player-slider .yt-play, .yt-player-slider .yt-desc a').on('click', function (e) {
        e.preventDefault();
        var yt_id = $(this).data('yt-id');

        if($('body').hasClass('tablet')){
            var vidSrc = 'https://youtu.be/' + yt_id;
            window.open(vidSrc, 'YT-Window', '_blank');
        } else {
            if(player){
                var playerState = player.getPlayerState();
                $('.yt-player-vid').addClass('active');

                if (playerState == 5 || playerState == 0) {
                    player.loadVideoById(yt_id);
                } else if (playerState == 2) {
                    player.playVideo();
                }
            } else {
                var vidSrc = 'https://youtu.be/' + yt_id;
                window.open(vidSrc, 'YT-Window', '_blank');
            }
        }
    });

    function slideVid(slideOption) {
        if(listSlider.length > 0) {
            listSlider.goToSlide(slideOption);
        }
        stopVideo();
    }
}
/* ######## ytplayer End ############################################# */


/* ######## vue ############################################# */

/*!
 * Vue.js v2.5.9
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function i(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}function a(e){return"[object Object]"===Si.call(e)}function s(e){return"[object RegExp]"===Si.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function l(e){var t=parseFloat(e);return isNaN(t)?e:t}function f(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function d(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function p(e,t){return ji.call(e,t)}function v(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function h(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function m(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function y(e,t){for(var n in t)e[n]=t[n];return e}function g(e){for(var t={},n=0;n<e.length;n++)e[n]&&y(t,e[n]);return t}function _(e,t,n){}function b(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return b(e,t[n])});if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return b(e[n],t[n])})}catch(e){return!1}}function $(e,t){for(var n=0;n<e.length;n++)if(b(e[n],t))return n;return-1}function C(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function w(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function x(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function k(e){if(!Vi.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function A(e){return"function"==typeof e&&/native code/.test(e.toString())}function O(e){lo.target&&fo.push(lo.target),lo.target=e}function S(){lo.target=fo.pop()}function T(e){return new po(void 0,void 0,void 0,String(e))}function E(e,t){var n=e.componentOptions,r=new po(e.tag,e.data,e.children,e.text,e.elm,e.context,n,e.asyncFactory);return r.ns=e.ns,r.isStatic=e.isStatic,r.key=e.key,r.isComment=e.isComment,r.fnContext=e.fnContext,r.fnOptions=e.fnOptions,r.fnScopeId=e.fnScopeId,r.isCloned=!0,t&&(e.children&&(r.children=j(e.children,!0)),n&&n.children&&(n.children=j(n.children,!0))),r}function j(e,t){for(var n=e.length,r=new Array(n),i=0;i<n;i++)r[i]=E(e[i],t);return r}function N(e,t,n){e.__proto__=t}function L(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];x(e,o,t[o])}}function I(e,t){if(o(e)&&!(e instanceof po)){var n;return p(e,"__ob__")&&e.__ob__ instanceof bo?n=e.__ob__:_o.shouldConvert&&!oo()&&(Array.isArray(e)||a(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new bo(e)),t&&n&&n.vmCount++,n}}function M(e,t,n,r,i){var o=new lo,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!i&&I(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return lo.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&F(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!==t&&r!==r||(c?c.call(e,t):n=t,u=!i&&I(t),o.notify())}})}}function D(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(M(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function P(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||p(e,t)&&(delete e[t],n&&n.dep.notify())}}function F(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n])&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&F(t)}function R(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),s=0;s<o.length;s++)r=e[n=o[s]],i=t[n],p(e,n)?a(r)&&a(i)&&R(r,i):D(e,n,i);return e}function H(e,t,n){return n?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):e;return r?R(r,i):i}:t?e?function(){return R("function"==typeof t?t.call(this):t,"function"==typeof e?e.call(this):e)}:t:e}function B(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function U(e,t,n,r){var i=Object.create(e||null);return t?y(i,t):i}function V(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[Li(i)]={type:null});else if(a(n))for(var s in n)i=n[s],o[Li(s)]=a(i)?i:{type:i};e.props=o}}function z(e,t){var n=e.inject,r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(a(n))for(var o in n){var s=n[o];r[o]=a(s)?y({from:o},s):{from:s}}}function K(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function J(e,t,n){function r(r){var i=$o[r]||xo;c[r]=i(e[r],t[r],n,r)}"function"==typeof t&&(t=t.options),V(t,n),z(t,n),K(t);var i=t.extends;if(i&&(e=J(e,i,n)),t.mixins)for(var o=0,a=t.mixins.length;o<a;o++)e=J(e,t.mixins[o],n);var s,c={};for(s in e)r(s);for(s in t)p(e,s)||r(s);return c}function q(e,t,n,r){if("string"==typeof n){var i=e[t];if(p(i,n))return i[n];var o=Li(n);if(p(i,o))return i[o];var a=Ii(o);if(p(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function W(e,t,n,r){var i=t[e],o=!p(n,e),a=n[e];if(X(Boolean,i.type)&&(o&&!p(i,"default")?a=!1:X(String,i.type)||""!==a&&a!==Di(e)||(a=!0)),void 0===a){a=G(r,i,e);var s=_o.shouldConvert;_o.shouldConvert=!0,I(a),_o.shouldConvert=s}return a}function G(e,t,n){if(p(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==Z(t.type)?r.call(e):r}}function Z(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function X(e,t){if(!Array.isArray(t))return Z(t)===Z(e);for(var n=0,r=t.length;n<r;n++)if(Z(t[n])===Z(e))return!0;return!1}function Y(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Q(e,r,"errorCaptured hook")}}Q(e,t,n)}function Q(e,t,n){if(Ui.errorHandler)try{return Ui.errorHandler.call(null,e,t,n)}catch(e){ee(e,null,"config.errorHandler")}ee(e,t,n)}function ee(e,t,n){if(!Ki&&!Ji||"undefined"==typeof console)throw e;console.error(e)}function te(){Ao=!1;var e=ko.slice(0);ko.length=0;for(var t=0;t<e.length;t++)e[t]()}function ne(e){return e._withTask||(e._withTask=function(){Oo=!0;var t=e.apply(null,arguments);return Oo=!1,t})}function re(e,t){var n;if(ko.push(function(){if(e)try{e.call(t)}catch(e){Y(e,t,"nextTick")}else n&&n(t)}),Ao||(Ao=!0,Oo?wo():Co()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}function ie(e){oe(e,No),No.clear()}function oe(e,t){var n,r,i=Array.isArray(e);if((i||o(e))&&!Object.isFrozen(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(i)for(n=e.length;n--;)oe(e[n],t);else for(n=(r=Object.keys(e)).length;n--;)oe(e[r[n]],t)}}function ae(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,e)}return t.fns=e,t}function se(t,n,r,i,o){var a,s,c,u;for(a in t)s=t[a],c=n[a],u=Lo(a),e(s)||(e(c)?(e(s.fns)&&(s=t[a]=ae(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in n)e(t[a])&&i((u=Lo(a)).name,n[a],u.capture)}function ce(r,i,o){function a(){o.apply(this,arguments),d(s.fns,a)}r instanceof po&&(r=r.data.hook||(r.data.hook={}));var s,c=r[i];e(c)?s=ae([a]):t(c.fns)&&n(c.merged)?(s=c).fns.push(a):s=ae([c,a]),s.merged=!0,r[i]=s}function ue(n,r,i){var o=r.options.props;if(!e(o)){var a={},s=n.attrs,c=n.props;if(t(s)||t(c))for(var u in o){var l=Di(u);le(a,c,u,l,!0)||le(a,s,u,l,!1)}return a}}function le(e,n,r,i,o){if(t(n)){if(p(n,r))return e[r]=n[r],o||delete n[r],!0;if(p(n,i))return e[r]=n[i],o||delete n[i],!0}return!1}function fe(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function de(e){return i(e)?[T(e)]:Array.isArray(e)?ve(e):void 0}function pe(e){return t(e)&&t(e.text)&&r(e.isComment)}function ve(r,o){var a,s,c,u,l=[];for(a=0;a<r.length;a++)e(s=r[a])||"boolean"==typeof s||(u=l[c=l.length-1],Array.isArray(s)?s.length>0&&(pe((s=ve(s,(o||"")+"_"+a))[0])&&pe(u)&&(l[c]=T(u.text+s[0].text),s.shift()),l.push.apply(l,s)):i(s)?pe(u)?l[c]=T(u.text+s):""!==s&&l.push(T(s)):pe(s)&&pe(u)?l[c]=T(u.text+s.text):(n(r._isVList)&&t(s.tag)&&e(s.key)&&t(o)&&(s.key="__vlist"+o+"_"+a+"__"),l.push(s)));return l}function he(e,t){return(e.__esModule||so&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function me(e,t,n,r,i){var o=ho();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function ye(r,i,a){if(n(r.error)&&t(r.errorComp))return r.errorComp;if(t(r.resolved))return r.resolved;if(n(r.loading)&&t(r.loadingComp))return r.loadingComp;if(!t(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var e=0,t=s.length;e<t;e++)s[e].$forceUpdate()},l=C(function(e){r.resolved=he(e,i),c||u()}),f=C(function(e){t(r.errorComp)&&(r.error=!0,u())}),d=r(l,f);return o(d)&&("function"==typeof d.then?e(r.resolved)&&d.then(l,f):t(d.component)&&"function"==typeof d.component.then&&(d.component.then(l,f),t(d.error)&&(r.errorComp=he(d.error,i)),t(d.loading)&&(r.loadingComp=he(d.loading,i),0===d.delay?r.loading=!0:setTimeout(function(){e(r.resolved)&&e(r.error)&&(r.loading=!0,u())},d.delay||200)),t(d.timeout)&&setTimeout(function(){e(r.resolved)&&f(null)},d.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}function ge(e){return e.isComment&&e.asyncFactory}function _e(e){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];if(t(r)&&(t(r.componentOptions)||ge(r)))return r}}function be(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&we(e,t)}function $e(e,t,n){n?jo.$once(e,t):jo.$on(e,t)}function Ce(e,t){jo.$off(e,t)}function we(e,t,n){jo=e,se(t,n||{},$e,Ce,e),jo=void 0}function xe(e,t){var n={};if(!e)return n;for(var r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=o.data.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children):c.push(o)}}for(var u in n)n[u].every(ke)&&delete n[u];return n}function ke(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Ae(e,t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?Ae(e[n],t):t[e[n].key]=e[n].fn;return t}function Oe(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Se(e,t,n){e.$el=t,e.$options.render||(e.$options.render=ho),Le(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},new Uo(e,r,_,null,!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Le(e,"mounted")),e}function Te(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==Oi);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data&&r.data.attrs||Oi,e.$listeners=n||Oi,t&&e.$options.props){_o.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=W(u,e.$options.props,t,e)}_o.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,we(e,n,l)}o&&(e.$slots=xe(i,r.context),e.$forceUpdate())}function Ee(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function je(e,t){if(t){if(e._directInactive=!1,Ee(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)je(e.$children[n]);Le(e,"activated")}}function Ne(e,t){if(!(t&&(e._directInactive=!0,Ee(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Ne(e.$children[n]);Le(e,"deactivated")}}function Le(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){Y(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function Ie(){Ho=Mo.length=Do.length=0,Po={},Fo=Ro=!1}function Me(){Ro=!0;var e,t;for(Mo.sort(function(e,t){return e.id-t.id}),Ho=0;Ho<Mo.length;Ho++)t=(e=Mo[Ho]).id,Po[t]=null,e.run();var n=Do.slice(),r=Mo.slice();Ie(),Fe(n),De(r),ao&&Ui.devtools&&ao.emit("flush")}function De(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&Le(r,"updated")}}function Pe(e){e._inactive=!1,Do.push(e)}function Fe(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,je(e[t],!0)}function Re(e){var t=e.id;if(null==Po[t]){if(Po[t]=!0,Ro){for(var n=Mo.length-1;n>Ho&&Mo[n].id>e.id;)n--;Mo.splice(n+1,0,e)}else Mo.push(e);Fo||(Fo=!0,re(Me))}}function He(e,t,n){Vo.get=function(){return this[t][n]},Vo.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Vo)}function Be(e){e._watchers=[];var t=e.$options;t.props&&Ue(e,t.props),t.methods&&We(e,t.methods),t.data?Ve(e):I(e._data={},!0),t.computed&&Ke(e,t.computed),t.watch&&t.watch!==eo&&Ge(e,t.watch)}function Ue(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;_o.shouldConvert=o;for(var a in t)!function(o){i.push(o);var a=W(o,t,n,e);M(r,o,a),o in e||He(e,"_props",o)}(a);_o.shouldConvert=!0}function Ve(e){var t=e.$options.data;a(t=e._data="function"==typeof t?ze(t,e):t||{})||(t={});for(var n=Object.keys(t),r=e.$options.props,i=n.length;i--;){var o=n[i];r&&p(r,o)||w(o)||He(e,"_data",o)}I(t,!0)}function ze(e,t){try{return e.call(t,t)}catch(e){return Y(e,t,"data()"),{}}}function Ke(e,t){var n=e._computedWatchers=Object.create(null),r=oo();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new Uo(e,a||_,_,zo)),i in e||Je(e,i,o)}}function Je(e,t,n){var r=!oo();"function"==typeof n?(Vo.get=r?qe(t):n,Vo.set=_):(Vo.get=n.get?r&&!1!==n.cache?qe(t):n.get:_,Vo.set=n.set?n.set:_),Object.defineProperty(e,t,Vo)}function qe(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),lo.target&&t.depend(),t.value}}function We(e,t){for(var n in t)e[n]=null==t[n]?_:h(t[n],e)}function Ge(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Ze(e,n,r[i]);else Ze(e,n,r)}}function Ze(e,t,n,r){return a(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Xe(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function Ye(e){var t=Qe(e.$options.inject,e);t&&(_o.shouldConvert=!1,Object.keys(t).forEach(function(n){M(e,n,t[n])}),_o.shouldConvert=!0)}function Qe(e,t){if(e){for(var n=Object.create(null),r=so?Reflect.ownKeys(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}):Object.keys(e),i=0;i<r.length;i++){for(var o=r[i],a=e[o].from,s=t;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}return n}}function et(e,n){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=n(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=n(i+1,i);else if(o(e))for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=n(e[c],c,i);return t(r)&&(r._isVList=!0),r}function tt(e,t,n,r){var i,o=this.$scopedSlots[e];if(o)n=n||{},r&&(n=y(y({},r),n)),i=o(n)||t;else{var a=this.$slots[e];a&&(a._rendered=!0),i=a||t}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function nt(e){return q(this.$options,"filters",e,!0)||Fi}function rt(e,t,n,r){var i=Ui.keyCodes[t]||n;return i?Array.isArray(i)?-1===i.indexOf(e):i!==e:r?Di(r)!==t:void 0}function it(e,t,n,r,i){if(n)if(o(n)){Array.isArray(n)&&(n=g(n));var a;for(var s in n)!function(o){if("class"===o||"style"===o||Ei(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||Ui.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}o in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))}(s)}else;return e}function ot(e,t,n){var r=arguments.length<3,i=this.$options.staticRenderFns,o=r||n?this._staticTrees||(this._staticTrees=[]):i.cached||(i.cached=[]),a=o[e];return a&&!t?Array.isArray(a)?j(a):E(a):(a=o[e]=i[e].call(this._renderProxy,null,this),st(a,"__static__"+e,!1),a)}function at(e,t,n){return st(e,"__once__"+t+(n?"_"+n:""),!0),e}function st(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&ct(e[r],t+"_"+r,n);else ct(e,t,n)}function ct(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function ut(e,t){if(t)if(a(t)){var n=e.on=e.on?y({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function lt(e){e._o=at,e._n=l,e._s=u,e._l=et,e._t=tt,e._q=b,e._i=$,e._m=ot,e._f=nt,e._k=rt,e._b=it,e._v=T,e._e=ho,e._u=Ae,e._g=ut}function ft(e,t,r,i,o){var a=o.options;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||Oi,this.injections=Qe(a.inject,i),this.slots=function(){return xe(r,i)};var s=Object.create(i),c=n(a._compiled),u=!c;c&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||Oi),a._scopeId?this._c=function(e,t,n,r){var o=_t(s,e,t,n,r,u);return o&&(o.fnScopeId=a._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return _t(s,e,t,n,r,u)}}function dt(e,n,r,i,o){var a=e.options,s={},c=a.props;if(t(c))for(var u in c)s[u]=W(u,c,n||Oi);else t(r.attrs)&&pt(s,r.attrs),t(r.props)&&pt(s,r.props);var l=new ft(r,s,o,i,e),f=a.render.call(null,l._c,l);return f instanceof po&&(f.fnContext=i,f.fnOptions=a,r.slot&&((f.data||(f.data={})).slot=r.slot)),f}function pt(e,t){for(var n in t)e[Li(n)]=t[n]}function vt(r,i,a,s,c){if(!e(r)){var u=a.$options._base;if(o(r)&&(r=u.extend(r)),"function"==typeof r){var l;if(e(r.cid)&&(l=r,void 0===(r=ye(l,u,a))))return me(l,i,a,s,c);i=i||{},xt(r),t(i.model)&&gt(r.options,i);var f=ue(i,r,c);if(n(r.options.functional))return dt(r,f,i,a,s);var d=i.on;if(i.on=i.nativeOn,n(r.options.abstract)){var p=i.slot;i={},p&&(i.slot=p)}mt(i);var v=r.options.name||c;return new po("vue-component-"+r.cid+(v?"-"+v:""),i,void 0,void 0,void 0,a,{Ctor:r,propsData:f,listeners:d,tag:c,children:s},l)}}}function ht(e,n,r,i){var o=e.componentOptions,a={_isComponent:!0,parent:n,propsData:o.propsData,_componentTag:o.tag,_parentVnode:e,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:r||null,_refElm:i||null},s=e.data.inlineTemplate;return t(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function mt(e){e.hook||(e.hook={});for(var t=0;t<Jo.length;t++){var n=Jo[t],r=e.hook[n],i=Ko[n];e.hook[n]=r?yt(i,r):i}}function yt(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function gt(e,n){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});t(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}function _t(e,t,r,o,a,s){return(Array.isArray(r)||i(r))&&(a=o,o=r,r=void 0),n(s)&&(a=Wo),bt(e,t,r,o,a)}function bt(e,n,r,i,o){if(t(r)&&t(r.__ob__))return ho();if(t(r)&&t(r.is)&&(n=r.is),!n)return ho();Array.isArray(i)&&"function"==typeof i[0]&&((r=r||{}).scopedSlots={default:i[0]},i.length=0),o===Wo?i=de(i):o===qo&&(i=fe(i));var a,s;if("string"==typeof n){var c;s=e.$vnode&&e.$vnode.ns||Ui.getTagNamespace(n),a=Ui.isReservedTag(n)?new po(Ui.parsePlatformTagName(n),r,i,void 0,void 0,e):t(c=q(e.$options,"components",n))?vt(c,r,e,i,n):new po(n,r,i,void 0,void 0,e)}else a=vt(n,r,e,i);return t(a)?(s&&$t(a,s),a):ho()}function $t(r,i,o){if(r.ns=i,"foreignObject"===r.tag&&(i=void 0,o=!0),t(r.children))for(var a=0,s=r.children.length;a<s;a++){var c=r.children[a];t(c.tag)&&(e(c.ns)||n(o))&&$t(c,i,o)}}function Ct(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=xe(t._renderChildren,r),e.$scopedSlots=Oi,e._c=function(t,n,r,i){return _t(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return _t(e,t,n,r,i,!0)};var i=n&&n.data;M(e,"$attrs",i&&i.attrs||Oi,null,!0),M(e,"$listeners",t._parentListeners||Oi,null,!0)}function wt(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function xt(e){var t=e.options;if(e.super){var n=xt(e.super);if(n!==e.superOptions){e.superOptions=n;var r=kt(e);r&&y(e.extendOptions,r),(t=e.options=J(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function kt(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=At(n[o],r[o],i[o]));return t}function At(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(t.indexOf(e[i])>=0||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function Ot(e){this._init(e)}function St(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=m(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}function Tt(e){e.mixin=function(e){return this.options=J(this.options,e),this}}function Et(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=J(n.options,e),a.super=n,a.options.props&&jt(a),a.options.computed&&Nt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Hi.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=y({},a.options),i[r]=a,a}}function jt(e){var t=e.options.props;for(var n in t)He(e.prototype,"_props",n)}function Nt(e){var t=e.options.computed;for(var n in t)Je(e.prototype,n,t[n])}function Lt(e){Hi.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&a(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function It(e){return e&&(e.Ctor.options.name||e.tag)}function Mt(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!s(e)&&e.test(t)}function Dt(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=It(a.componentOptions);s&&!t(s)&&Pt(n,o,r,i)}}}function Pt(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,d(n,t)}function Ft(e){for(var n=e.data,r=e,i=e;t(i.componentInstance);)(i=i.componentInstance._vnode).data&&(n=Rt(i.data,n));for(;t(r=r.parent);)r.data&&(n=Rt(n,r.data));return Ht(n.staticClass,n.class)}function Rt(e,n){return{staticClass:Bt(e.staticClass,n.staticClass),class:t(e.class)?[e.class,n.class]:n.class}}function Ht(e,n){return t(e)||t(n)?Bt(e,Ut(n)):""}function Bt(e,t){return e?t?e+" "+t:e:t||""}function Ut(e){return Array.isArray(e)?Vt(e):o(e)?zt(e):"string"==typeof e?e:""}function Vt(e){for(var n,r="",i=0,o=e.length;i<o;i++)t(n=Ut(e[i]))&&""!==n&&(r&&(r+=" "),r+=n);return r}function zt(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function Kt(e){return ya(e)?"svg":"math"===e?"math":void 0}function Jt(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function qt(e,t){var n=e.data.ref;if(n){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?d(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function Wt(r,i){return r.key===i.key&&(r.tag===i.tag&&r.isComment===i.isComment&&t(r.data)===t(i.data)&&Gt(r,i)||n(r.isAsyncPlaceholder)&&r.asyncFactory===i.asyncFactory&&e(i.asyncFactory.error))}function Gt(e,n){if("input"!==e.tag)return!0;var r,i=t(r=e.data)&&t(r=r.attrs)&&r.type,o=t(r=n.data)&&t(r=r.attrs)&&r.type;return i===o||ba(i)&&ba(o)}function Zt(e,n,r){var i,o,a={};for(i=n;i<=r;++i)t(o=e[i].key)&&(a[o]=i);return a}function Xt(e,t){(e.data.directives||t.data.directives)&&Yt(e,t)}function Yt(e,t){var n,r,i,o=e===wa,a=t===wa,s=Qt(e.data.directives,e.context),c=Qt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,tn(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(tn(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)tn(u[n],"inserted",t,e)};o?ce(t,"insert",f):f()}if(l.length&&ce(t,"postpatch",function(){for(var n=0;n<l.length;n++)tn(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||tn(s[n],"unbind",e,e,a)}function Qt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)(i=e[r]).modifiers||(i.modifiers=Aa),n[en(i)]=i,i.def=q(t.$options,"directives",i.name,!0);return n}function en(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function tn(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Y(r,n.context,"directive "+e.name+" "+t+" hook")}}function nn(n,r){var i=r.componentOptions;if(!(t(i)&&!1===i.Ctor.options.inheritAttrs||e(n.data.attrs)&&e(r.data.attrs))){var o,a,s=r.elm,c=n.data.attrs||{},u=r.data.attrs||{};t(u.__ob__)&&(u=r.data.attrs=y({},u));for(o in u)a=u[o],c[o]!==a&&rn(s,o,a);(Gi||Xi)&&u.value!==c.value&&rn(s,"value",u.value);for(o in c)e(u[o])&&(da(o)?s.removeAttributeNS(fa,pa(o)):ua(o)||s.removeAttribute(o))}}function rn(e,t,n){if(la(t))va(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n));else if(ua(t))e.setAttribute(t,va(n)||"false"===n?"false":"true");else if(da(t))va(n)?e.removeAttributeNS(fa,pa(t)):e.setAttributeNS(fa,t,n);else if(va(n))e.removeAttribute(t);else{if(Gi&&!Zi&&"TEXTAREA"===e.tagName&&"placeholder"===t&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}function on(n,r){var i=r.elm,o=r.data,a=n.data;if(!(e(o.staticClass)&&e(o.class)&&(e(a)||e(a.staticClass)&&e(a.class)))){var s=Ft(r),c=i._transitionClasses;t(c)&&(s=Bt(s,Ut(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function an(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=e.charAt(h));h--);m&&Ea.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=sn(o,a[i]);return o}function sn(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n)+'")('+e+","+t.slice(n+1)}function cn(e){console.error("[Vue compiler]: "+e)}function un(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function ln(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function fn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function dn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function pn(e,t,n,r,i,o){(r=r||Oi).capture&&(delete r.capture,t="!"+t),r.once&&(delete r.once,t="~"+t),r.passive&&(delete r.passive,t="&"+t),"click"===t&&(r.right?(t="contextmenu",delete r.right):r.middle&&(t="mouseup"));var a;r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n};r!==Oi&&(s.modifiers=r);var c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s}function vn(e,t,n){var r=hn(e,":"+t)||hn(e,"v-bind:"+t);if(null!=r)return an(r);if(!1!==n){var i=hn(e,t);if(null!=i)return JSON.stringify(i)}}function hn(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function mn(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=yn(t,o);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+a+"}"}}function yn(e,t){var n=gn(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function gn(e){if(Yo=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Yo-1)return(ta=e.lastIndexOf("."))>-1?{exp:e.slice(0,ta),key:'"'+e.slice(ta+1)+'"'}:{exp:e,key:null};for(Qo=e,ta=na=ra=0;!bn();)$n(ea=_n())?wn(ea):91===ea&&Cn(ea);return{exp:e.slice(0,na),key:e.slice(na+1,ra)}}function _n(){return Qo.charCodeAt(++ta)}function bn(){return ta>=Yo}function $n(e){return 34===e||39===e}function Cn(e){var t=1;for(na=ta;!bn();)if(e=_n(),$n(e))wn(e);else if(91===e&&t++,93===e&&t--,0===t){ra=ta;break}}function wn(e){for(var t=e;!bn()&&(e=_n())!==t;);}function xn(e,t,n){var r=n&&n.number,i=vn(e,"value")||"null",o=vn(e,"true-value")||"true",a=vn(e,"false-value")||"false";ln(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),pn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+t+"=$$a.concat([$$v]))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+yn(t,"$$c")+"}",null,!0)}function kn(e,t,n){var r=n&&n.number,i=vn(e,"value")||"null";ln(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),pn(e,"change",yn(t,i),null,!0)}function An(e,t,n){var r="var $$selectedVal = "+('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"})")+";";pn(e,"change",r=r+" "+yn(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),null,!0)}function On(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ja:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=yn(t,l);c&&(f="if($event.target.composing)return;"+f),ln(e,"value","("+t+")"),pn(e,u,f,null,!0),(s||a)&&pn(e,"blur","$forceUpdate()")}function Sn(e){if(t(e[ja])){var n=Gi?"change":"input";e[n]=[].concat(e[ja],e[n]||[]),delete e[ja]}t(e[Na])&&(e.change=[].concat(e[Na],e.change||[]),delete e[Na])}function Tn(e,t,n){var r=ia;return function i(){null!==e.apply(null,arguments)&&jn(t,i,n,r)}}function En(e,t,n,r,i){t=ne(t),n&&(t=Tn(t,e,r)),ia.addEventListener(e,t,to?{capture:r,passive:i}:r)}function jn(e,t,n,r){(r||ia).removeEventListener(e,t._withTask||t,n)}function Nn(t,n){if(!e(t.data.on)||!e(n.data.on)){var r=n.data.on||{},i=t.data.on||{};ia=n.elm,Sn(r),se(r,i,En,jn,n.context),ia=void 0}}function Ln(n,r){if(!e(n.data.domProps)||!e(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},c=r.data.domProps||{};t(c.__ob__)&&(c=r.data.domProps=y({},c));for(i in s)e(c[i])&&(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i){a._value=o;var u=e(o)?"":String(o);In(a,u)&&(a.value=u)}else a[i]=o}}}function In(e,t){return!e.composing&&("OPTION"===e.tagName||Mn(e,t)||Dn(e,t))}function Mn(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}function Dn(e,n){var r=e.value,i=e._vModifiers;return t(i)&&i.number?l(r)!==l(n):t(i)&&i.trim?r.trim()!==n.trim():r!==n}function Pn(e){var t=Fn(e.style);return e.staticStyle?y(e.staticStyle,t):t}function Fn(e){return Array.isArray(e)?g(e):"string"==typeof e?Ma(e):e}function Rn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode).data&&(n=Pn(i.data))&&y(r,n);(n=Pn(e.data))&&y(r,n);for(var o=e;o=o.parent;)o.data&&(n=Pn(o.data))&&y(r,n);return r}function Hn(n,r){var i=r.data,o=n.data;if(!(e(i.staticStyle)&&e(i.style)&&e(o.staticStyle)&&e(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,d=Fn(r.data.style)||{};r.data.normalizedStyle=t(d.__ob__)?y({},d):d;var p=Rn(r,!0);for(s in f)e(p[s])&&Fa(c,s,"");for(s in p)(a=p[s])!==f[s]&&Fa(c,s,null==a?"":a)}}function Bn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Un(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function Vn(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&y(t,Ua(e.name||"v")),y(t,e),t}return"string"==typeof e?Ua(e):void 0}}function zn(e){Za(function(){Za(e)})}function Kn(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Bn(e,t))}function Jn(e,t){e._transitionClasses&&d(e._transitionClasses,t),Un(e,t)}function qn(e,t,n){var r=Wn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===za?qa:Ga,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function Wn(e,t){var n,r=window.getComputedStyle(e),i=r[Ja+"Delay"].split(", "),o=r[Ja+"Duration"].split(", "),a=Gn(i,o),s=r[Wa+"Delay"].split(", "),c=r[Wa+"Duration"].split(", "),u=Gn(s,c),l=0,f=0;return t===za?a>0&&(n=za,l=a,f=o.length):t===Ka?u>0&&(n=Ka,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?za:Ka:null)?n===za?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===za&&Xa.test(r[Ja+"Property"])}}function Gn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Zn(t)+Zn(e[n])}))}function Zn(e){return 1e3*Number(e.slice(0,-1))}function Xn(n,r){var i=n.elm;t(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=Vn(n.data.transition);if(!e(a)&&!t(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,f=a.enterToClass,d=a.enterActiveClass,p=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,x=a.appearCancelled,k=a.duration,A=Io,O=Io.$vnode;O&&O.parent;)A=(O=O.parent).context;var S=!A._isMounted||!n.isRootInsert;if(!S||$||""===$){var T=S&&p?p:u,E=S&&h?h:d,j=S&&v?v:f,N=S?b||m:m,L=S&&"function"==typeof $?$:y,I=S?w||g:g,M=S?x||_:_,D=l(o(k)?k.enter:k),P=!1!==s&&!Zi,F=er(L),R=i._enterCb=C(function(){P&&(Jn(i,j),Jn(i,E)),R.cancelled?(P&&Jn(i,T),M&&M(i)):I&&I(i),i._enterCb=null});n.data.show||ce(n,"insert",function(){var e=i.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),L&&L(i,R)}),N&&N(i),P&&(Kn(i,T),Kn(i,E),zn(function(){Kn(i,j),Jn(i,T),R.cancelled||F||(Qn(D)?setTimeout(R,D):qn(i,c,R))})),n.data.show&&(r&&r(),L&&L(i,R)),P||F||R()}}}function Yn(n,r){function i(){x.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),v&&v(a),b&&(Kn(a,f),Kn(a,p),zn(function(){Kn(a,d),Jn(a,f),x.cancelled||$||(Qn(w)?setTimeout(x,w):qn(a,u,x))})),h&&h(a,x),b||$||x())}var a=n.elm;t(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=Vn(n.data.transition);if(e(s)||1!==a.nodeType)return r();if(!t(a._leaveCb)){var c=s.css,u=s.type,f=s.leaveClass,d=s.leaveToClass,p=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,y=s.leaveCancelled,g=s.delayLeave,_=s.duration,b=!1!==c&&!Zi,$=er(h),w=l(o(_)?_.leave:_),x=a._leaveCb=C(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),b&&(Jn(a,d),Jn(a,p)),x.cancelled?(b&&Jn(a,f),y&&y(a)):(r(),m&&m(a)),a._leaveCb=null});g?g(i):i()}}function Qn(e){return"number"==typeof e&&!isNaN(e)}function er(n){if(e(n))return!1;var r=n.fns;return t(r)?er(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function tr(e,t){!0!==t.data.show&&Xn(t)}function nr(e,t,n){rr(e,t,n),(Gi||Xi)&&setTimeout(function(){rr(e,t,n)},0)}function rr(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=$(r,or(a))>-1,a.selected!==o&&(a.selected=o);else if(b(or(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function ir(e,t){return t.every(function(t){return!b(t,e)})}function or(e){return"_value"in e?e._value:e.value}function ar(e){e.target.composing=!0}function sr(e){e.target.composing&&(e.target.composing=!1,cr(e.target,"input"))}function cr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ur(e){return!e.componentInstance||e.data&&e.data.transition?e:ur(e.componentInstance._vnode)}function lr(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?lr(_e(t.children)):e}function fr(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Li(o)]=i[o];return t}function dr(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function pr(e){for(;e=e.parent;)if(e.data.transition)return!0}function vr(e,t){return t.key===e.key&&t.tag===e.tag}function hr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function mr(e){e.data.newPos=e.elm.getBoundingClientRect()}function yr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function gr(e,t){var n=t?cs(t):as;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){(i=r.index)>a&&o.push(JSON.stringify(e.slice(a,i)));var s=an(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function _r(e,t){var n=t?Hs:Rs;return e.replace(n,function(e){return Fs[e]})}function br(e,t){function n(t){l+=t,e=e.substring(t)}function r(e,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),e&&(s=e.toLowerCase()),e)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)t.end&&t.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var i,o,a=[],s=t.expectHTML,c=t.isUnaryTag||Pi,u=t.canBeLeftOpenTag||Pi,l=0;e;){if(i=e,o&&Ds(o)){var f=0,d=o.toLowerCase(),p=Ps[d]||(Ps[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=e.replace(p,function(e,n,r){return f=r.length,Ds(d)||"noscript"===d||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Us(d,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});l+=e.length-v.length,e=v,r(d,l-f,l)}else{var h=e.indexOf("<");if(0===h){if(Cs.test(e)){var m=e.indexOf("--\x3e");if(m>=0){t.shouldKeepComment&&t.comment(e.substring(4,m)),n(m+3);continue}}if(ws.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var g=e.match($s);if(g){n(g[0].length);continue}var _=e.match(bs);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var t=e.match(gs);if(t){var r={tagName:t[1],attrs:[],start:l};n(t[0].length);for(var i,o;!(i=e.match(_s))&&(o=e.match(hs));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(e){var n=e.tagName,i=e.unarySlash;s&&("p"===o&&vs(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||!!i,f=e.attrs.length,d=new Array(f),p=0;p<f;p++){var v=e.attrs[p];xs&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"",m="a"===n&&"href"===v[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;d[p]={name:v[1],value:_r(h,m)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:d}),o=n),t.start&&t.start(n,d,l,e.start,e.end)}($),Us(o,e)&&n(1);continue}}var C=void 0,w=void 0,x=void 0;if(h>=0){for(w=e.slice(h);!(bs.test(w)||gs.test(w)||Cs.test(w)||ws.test(w)||(x=w.indexOf("<",1))<0);)h+=x,w=e.slice(h);C=e.substring(0,h),n(h)}h<0&&(C=e,e=""),t.chars&&C&&t.chars(C)}if(e===i){t.chars&&t.chars(e);break}}r()}function $r(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:Rr(t),parent:n,children:[]}}function Cr(e,t){function n(e){e.pre&&(s=!1),Es(e.tag)&&(c=!1)}ks=t.warn||cn,Es=t.isPreTag||Pi,js=t.mustUseProp||Pi,Ns=t.getTagNamespace||Pi,Os=un(t.modules,"transformNode"),Ss=un(t.modules,"preTransformNode"),Ts=un(t.modules,"postTransformNode"),As=t.delimiters;var r,i,o=[],a=!1!==t.preserveWhitespace,s=!1,c=!1;return br(e,{warn:ks,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,start:function(e,a,u){var l=i&&i.ns||Ns(e);Gi&&"svg"===l&&(a=Ur(a));var f=$r(e,a,i);l&&(f.ns=l),Br(f)&&!oo()&&(f.forbidden=!0);for(var d=0;d<Ss.length;d++)f=Ss[d](f,t)||f;if(s||(wr(f),f.pre&&(s=!0)),Es(f.tag)&&(c=!0),s?xr(f):f.processed||(Sr(f),Tr(f),Lr(f),kr(f,t)),r?o.length||r.if&&(f.elseif||f.else)&&Nr(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)Er(f,i);else if(f.slotScope){i.plain=!1;var p=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[p]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f));for(var v=0;v<Ts.length;v++)Ts[v](f,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!Gi||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?Hr(i)?e:Xs(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=gr(e,As))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}},comment:function(e){i.children.push({type:3,text:e,isComment:!0})}}),r}function wr(e){null!=hn(e,"v-pre")&&(e.pre=!0)}function xr(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function kr(e,t){Ar(e),e.plain=!e.key&&!e.attrsList.length,Or(e),Ir(e),Mr(e);for(var n=0;n<Os.length;n++)e=Os[n](e,t)||e;Dr(e)}function Ar(e){var t=vn(e,"key");t&&(e.key=t)}function Or(e){var t=vn(e,"ref");t&&(e.ref=t,e.refInFor=Pr(e))}function Sr(e){var t;if(t=hn(e,"v-for")){var n=t.match(Ks);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Js);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r.replace(qs,"")}}function Tr(e){var t=hn(e,"v-if");if(t)e.if=t,Nr(e,{exp:t,block:e});else{null!=hn(e,"v-else")&&(e.else=!0);var n=hn(e,"v-else-if");n&&(e.elseif=n)}}function Er(e,t){var n=jr(t.children);n&&n.if&&Nr(n,{exp:e.elseif,block:e})}function jr(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function Nr(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Lr(e){null!=hn(e,"v-once")&&(e.once=!0)}function Ir(e){if("slot"===e.tag)e.slotName=vn(e,"name");else{var t;"template"===e.tag?(t=hn(e,"scope"),e.slotScope=t||hn(e,"slot-scope")):(t=hn(e,"slot-scope"))&&(e.slotScope=t);var n=vn(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,"template"===e.tag||e.slotScope||fn(e,"slot",n))}}function Mr(e){var t;(t=vn(e,"is"))&&(e.component=t),null!=hn(e,"inline-template")&&(e.inlineTemplate=!0)}function Dr(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,zs.test(r))if(e.hasBindings=!0,(a=Fr(r))&&(r=r.replace(Zs,"")),Gs.test(r))r=r.replace(Gs,""),o=an(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=Li(r))&&(r="innerHTML")),a.camel&&(r=Li(r)),a.sync&&pn(e,"update:"+Li(r),yn(o,"$event"))),s||!e.component&&js(e.tag,e.attrsMap.type,r)?ln(e,r,o):fn(e,r,o);else if(Vs.test(r))pn(e,r=r.replace(Vs,""),o,a,!1,ks);else{var u=(r=r.replace(zs,"")).match(Ws),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),dn(e,r,i,o,l,a)}else fn(e,r,JSON.stringify(o)),!e.component&&"muted"===r&&js(e.tag,e.attrsMap.type,r)&&ln(e,r,"true")}function Pr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Fr(e){var t=e.match(Zs);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Rr(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Hr(e){return"script"===e.tag||"style"===e.tag}function Br(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Ur(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ys.test(r.name)||(r.name=r.name.replace(Qs,""),t.push(r))}return t}function Vr(e){return $r(e.tag,e.attrsList.slice(),e.parent)}function zr(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function Kr(e,t){e&&(Ls=nc(t.staticKeys||""),Is=t.isReservedTag||Pi,Jr(e),qr(e,!1))}function Jr(e){if(e.static=Wr(e),1===e.type){if(!Is(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Jr(r),r.static||(e.static=!1)}if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++){var a=e.ifConditions[i].block;Jr(a),a.static||(e.static=!1)}}}function qr(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)qr(e.children[n],t||!!e.for);if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++)qr(e.ifConditions[i].block,t)}}function Wr(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Ti(e.tag)||!Is(e.tag)||Gr(e)||!Object.keys(e).every(Ls))))}function Gr(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}function Zr(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e)r+='"'+i+'":'+Xr(i,e[i])+",";return r.slice(0,-1)+"}"}function Xr(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Xr(e,t)}).join(",")+"]";var n=ic.test(t.value),r=rc.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)if(sc[s])o+=sc[s],oc[s]&&a.push(s);else if("exact"===s){var c=t.modifiers;o+=ac(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=Yr(a)),o&&(i+=o),"function($event){"+i+(n?t.value+"($event)":r?"("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Yr(e){return"if(!('button' in $event)&&"+e.map(Qr).join("&&")+")return null;"}function Qr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=oc[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key)"}function ei(e,t){var n=new uc(t);return{render:"with(this){return "+(e?ti(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function ti(e,t){if(e.staticRoot&&!e.staticProcessed)return ni(e,t);if(e.once&&!e.onceProcessed)return ri(e,t);if(e.for&&!e.forProcessed)return ai(e,t);if(e.if&&!e.ifProcessed)return ii(e,t);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return _i(e,t);var n;if(e.component)n=bi(e.component,e,t);else{var r=e.plain?void 0:si(e,t),i=e.inlineTemplate?null:pi(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return pi(e,t)||"void 0"}function ni(e,t,n){return e.staticProcessed=!0,t.staticRenderFns.push("with(this){return "+ti(e,t)+"}"),"_m("+(t.staticRenderFns.length-1)+","+(e.staticInFor?"true":"false")+","+(n?"true":"false")+")"}function ri(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ii(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+ti(e,t)+","+t.onceId+++","+n+")":ti(e,t)}return ni(e,t,!0)}function ii(e,t,n,r){return e.ifProcessed=!0,oi(e.ifConditions.slice(),t,n,r)}function oi(e,t,n,r){function i(e){return n?n(e,t):e.once?ri(e,t):ti(e,t)}if(!e.length)return r||"_e()";var o=e.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+oi(e,t,n,r):""+i(o.block)}function ai(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||ti)(e,t)+"})"}function si(e,t){var n="{",r=ci(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:{"+$i(e.attrs)+"},"),e.props&&(n+="domProps:{"+$i(e.props)+"},"),e.events&&(n+=Zr(e.events,!1,t.warn)+","),e.nativeEvents&&(n+=Zr(e.nativeEvents,!0,t.warn)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=li(e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=ui(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function ci(e,t){var n=e.directives;if(n){var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}return c?s.slice(0,-1)+"]":void 0}}function ui(e,t){var n=e.children[0];if(1===n.type){var r=ei(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function li(e,t){return"scopedSlots:_u(["+Object.keys(e).map(function(n){return fi(n,e[n],t)}).join(",")+"])"}function fi(e,t,n){return t.for&&!t.forProcessed?di(e,t,n):"{key:"+e+",fn:"+("function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?t.if+"?"+(pi(t,n)||"undefined")+":undefined":pi(t,n)||"undefined":ti(t,n))+"}")+"}"}function di(e,t,n){var r=t.for,i=t.alias,o=t.iterator1?","+t.iterator1:"",a=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+fi(e,t,n)+"})"}function pi(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||ti)(a,t);var s=n?vi(o,t.maybeComponent):0,c=i||mi;return"["+o.map(function(e){return c(e,t)}).join(",")+"]"+(s?","+s:"")}}function vi(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(hi(i)||i.ifConditions&&i.ifConditions.some(function(e){return hi(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}function hi(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function mi(e,t){return 1===e.type?ti(e,t):3===e.type&&e.isComment?gi(e):yi(e)}function yi(e){return"_v("+(2===e.type?e.expression:Ci(JSON.stringify(e.text)))+")"}function gi(e){return"_e("+JSON.stringify(e.text)+")"}function _i(e,t){var n=e.slotName||'"default"',r=pi(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return Li(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];return!o&&!a||r||(i+=",null"),o&&(i+=","+o),a&&(i+=(o?"":",null")+","+a),i+")"}function bi(e,t,n){var r=t.inlineTemplate?null:pi(t,n,!0);return"_c("+e+","+si(t,n)+(r?","+r:"")+")"}function $i(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Ci(r.value)+","}return t.slice(0,-1)}function Ci(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function wi(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),_}}function xi(e){var t=Object.create(null);return function(n,r,i){delete(r=y({},r)).warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=wi(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return wi(e,c)}),t[o]=s}}function ki(e){return Ms=Ms||document.createElement("div"),Ms.innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',Ms.innerHTML.indexOf("&#10;")>0}function Ai(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Oi=Object.freeze({}),Si=Object.prototype.toString,Ti=f("slot,component",!0),Ei=f("key,ref,slot,slot-scope,is"),ji=Object.prototype.hasOwnProperty,Ni=/-(\w)/g,Li=v(function(e){return e.replace(Ni,function(e,t){return t?t.toUpperCase():""})}),Ii=v(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Mi=/\B([A-Z])/g,Di=v(function(e){return e.replace(Mi,"-$1").toLowerCase()}),Pi=function(e,t,n){return!1},Fi=function(e){return e},Ri="data-server-rendered",Hi=["component","directive","filter"],Bi=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],Ui={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Pi,isReservedAttr:Pi,isUnknownElement:Pi,getTagNamespace:_,parsePlatformTagName:Fi,mustUseProp:Pi,_lifecycleHooks:Bi},Vi=/[^\w.$]/,zi="__proto__"in{},Ki="undefined"!=typeof window,Ji="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,qi=Ji&&WXEnvironment.platform.toLowerCase(),Wi=Ki&&window.navigator.userAgent.toLowerCase(),Gi=Wi&&/msie|trident/.test(Wi),Zi=Wi&&Wi.indexOf("msie 9.0")>0,Xi=Wi&&Wi.indexOf("edge/")>0,Yi=Wi&&Wi.indexOf("android")>0||"android"===qi,Qi=Wi&&/iphone|ipad|ipod|ios/.test(Wi)||"ios"===qi,eo=(Wi&&/chrome\/\d+/.test(Wi),{}.watch),to=!1;if(Ki)try{var no={};Object.defineProperty(no,"passive",{get:function(){to=!0}}),window.addEventListener("test-passive",null,no)}catch(e){}var ro,io,oo=function(){return void 0===ro&&(ro=!Ki&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),ro},ao=Ki&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,so="undefined"!=typeof Symbol&&A(Symbol)&&"undefined"!=typeof Reflect&&A(Reflect.ownKeys);io="undefined"!=typeof Set&&A(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var co=_,uo=0,lo=function(){this.id=uo++,this.subs=[]};lo.prototype.addSub=function(e){this.subs.push(e)},lo.prototype.removeSub=function(e){d(this.subs,e)},lo.prototype.depend=function(){lo.target&&lo.target.addDep(this)},lo.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},lo.target=null;var fo=[],po=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vo={child:{configurable:!0}};vo.child.get=function(){return this.componentInstance},Object.defineProperties(po.prototype,vo);var ho=function(e){void 0===e&&(e="");var t=new po;return t.text=e,t.isComment=!0,t},mo=Array.prototype,yo=Object.create(mo);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=mo[e];x(yo,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var go=Object.getOwnPropertyNames(yo),_o={shouldConvert:!0},bo=function(e){this.value=e,this.dep=new lo,this.vmCount=0,x(e,"__ob__",this),Array.isArray(e)?((zi?N:L)(e,yo,go),this.observeArray(e)):this.walk(e)};bo.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)M(e,t[n],e[t[n]])},bo.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)I(e[t])};var $o=Ui.optionMergeStrategies;$o.data=function(e,t,n){return n?H(e,t,n):t&&"function"!=typeof t?e:H(e,t)},Bi.forEach(function(e){$o[e]=B}),Hi.forEach(function(e){$o[e+"s"]=U}),$o.watch=function(e,t,n,r){if(e===eo&&(e=void 0),t===eo&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};y(i,e);for(var o in t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},$o.props=$o.methods=$o.inject=$o.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return y(i,e),t&&y(i,t),i},$o.provide=H;var Co,wo,xo=function(e,t){return void 0===t?e:t},ko=[],Ao=!1,Oo=!1;if("undefined"!=typeof setImmediate&&A(setImmediate))wo=function(){setImmediate(te)};else if("undefined"==typeof MessageChannel||!A(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())wo=function(){setTimeout(te,0)};else{var So=new MessageChannel,To=So.port2;So.port1.onmessage=te,wo=function(){To.postMessage(1)}}if("undefined"!=typeof Promise&&A(Promise)){var Eo=Promise.resolve();Co=function(){Eo.then(te),Qi&&setTimeout(_)}}else Co=wo;var jo,No=new io,Lo=v(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}),Io=null,Mo=[],Do=[],Po={},Fo=!1,Ro=!1,Ho=0,Bo=0,Uo=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Bo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new io,this.newDepIds=new io,this.expression="","function"==typeof t?this.getter=t:(this.getter=k(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Uo.prototype.get=function(){O(this);var e,t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Y(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ie(e),S(),this.cleanupDeps()}return e},Uo.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Uo.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Uo.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Re(this)},Uo.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Y(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Uo.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Uo.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Uo.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||d(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Vo={enumerable:!0,configurable:!0,get:_,set:_},zo={lazy:!0};lt(ft.prototype);var Ko={init:function(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed)(e.componentInstance=ht(e,Io,n,r)).$mount(t?e.elm:void 0,t);else if(e.data.keepAlive){var i=e;Ko.prepatch(i,i)}},prepatch:function(e,t){var n=t.componentOptions;Te(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Le(n,"mounted")),e.data.keepAlive&&(t._isMounted?Pe(n):je(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Ne(t,!0):t.$destroy())}},Jo=Object.keys(Ko),qo=1,Wo=2,Go=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=Go++,t._isVue=!0,e&&e._isComponent?wt(t,e):t.$options=J(xt(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Oe(t),be(t),Ct(t),Le(t,"beforeCreate"),Ye(t),Be(t),Xe(t),Le(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(Ot),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=D,e.prototype.$delete=P,e.prototype.$watch=function(e,t,n){var r=this;if(a(t))return Ze(r,e,t,n);(n=n||{}).user=!0;var i=new Uo(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}(Ot),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(!t)return r._events[e]=null,r;if(t)for(var s,c=a.length;c--;)if((s=a[c])===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?m(n):n;for(var r=m(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(t,r)}catch(n){Y(n,t,'event handler for "'+e+'"')}}return t}}(Ot),function(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&Le(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=Io;Io=n,n._vnode=e,i?n.$el=n.__patch__(i,e):(n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),Io=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Le(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||d(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Le(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(Ot),function(e){lt(e.prototype),e.prototype.$nextTick=function(e){return re(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t._parentVnode;if(e._isMounted)for(var i in e.$slots){var o=e.$slots[i];(o._rendered||o[0]&&o[0].elm)&&(e.$slots[i]=j(o,!0))}e.$scopedSlots=r&&r.data.scopedSlots||Oi,e.$vnode=r;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){Y(t,e,"render"),a=e._vnode}return a instanceof po||(a=ho()),a.parent=r,a}}(Ot);var Zo=[String,RegExp,Array],Xo={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Zo,exclude:Zo,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){var e=this;for(var t in e.cache)Pt(e.cache,t,e.keys)},watch:{include:function(e){Dt(this,function(t){return Mt(e,t)})},exclude:function(e){Dt(this,function(t){return!Mt(e,t)})}},render:function(){var e=this.$slots.default,t=_e(e),n=t&&t.componentOptions;if(n){var r=It(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!Mt(o,r))||a&&r&&Mt(a,r))return t;var s=this,c=s.cache,u=s.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,d(u,l),u.push(l)):(c[l]=t,u.push(l),this.max&&u.length>parseInt(this.max)&&Pt(c,u[0],u,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={};t.get=function(){return Ui},Object.defineProperty(e,"config",t),e.util={warn:co,extend:y,mergeOptions:J,defineReactive:M},e.set=D,e.delete=P,e.nextTick=re,e.options=Object.create(null),Hi.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,y(e.options.components,Xo),St(e),Tt(e),Et(e),Lt(e)}(Ot),Object.defineProperty(Ot.prototype,"$isServer",{get:oo}),Object.defineProperty(Ot.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Ot.version="2.5.9";var Yo,Qo,ea,ta,na,ra,ia,oa,aa=f("style,class"),sa=f("input,textarea,option,select,progress"),ca=function(e,t,n){return"value"===n&&sa(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},ua=f("contenteditable,draggable,spellcheck"),la=f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),fa="http://www.w3.org/1999/xlink",da=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},pa=function(e){return da(e)?e.slice(6,e.length):""},va=function(e){return null==e||!1===e},ha={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ma=f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ya=f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ga=function(e){return ma(e)||ya(e)},_a=Object.create(null),ba=f("text,number,password,search,email,tel,url"),$a=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(ha[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setAttribute:function(e,t,n){e.setAttribute(t,n)}}),Ca={create:function(e,t){qt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(qt(e,!0),qt(t))},destroy:function(e){qt(e,!0)}},wa=new po("",{},[]),xa=["create","activate","update","remove","destroy"],ka={create:Xt,update:Xt,destroy:function(e){Xt(e,wa)}},Aa=Object.create(null),Oa=[Ca,ka],Sa={create:nn,update:nn},Ta={create:on,update:on},Ea=/[\w).+\-_$\]]/,ja="__r",Na="__c",La={create:Nn,update:Nn},Ia={create:Ln,update:Ln},Ma=v(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),Da=/^--/,Pa=/\s*!important$/,Fa=function(e,t,n){if(Da.test(t))e.style.setProperty(t,n);else if(Pa.test(n))e.style.setProperty(t,n.replace(Pa,""),"important");else{var r=Ha(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Ra=["Webkit","Moz","ms"],Ha=v(function(e){if(oa=oa||document.createElement("div").style,"filter"!==(e=Li(e))&&e in oa)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Ra.length;n++){var r=Ra[n]+t;if(r in oa)return r}}),Ba={create:Hn,update:Hn},Ua=v(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Va=Ki&&!Zi,za="transition",Ka="animation",Ja="transition",qa="transitionend",Wa="animation",Ga="animationend";Va&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ja="WebkitTransition",qa="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Wa="WebkitAnimation",Ga="webkitAnimationEnd"));var Za=Ki?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()},Xa=/\b(transform|all)(,|$)/,Ya=function(r){function o(e){return new po(j.tagName(e).toLowerCase(),{},[],void 0,e)}function a(e,t){function n(){0==--n.listeners&&s(e)}return n.listeners=t,n}function s(e){var n=j.parentNode(e);t(n)&&j.removeChild(n,e)}function c(e,r,i,o,a){if(e.isRootInsert=!a,!u(e,r,i,o)){var s=e.data,c=e.children,l=e.tag;t(l)?(e.elm=e.ns?j.createElementNS(e.ns,l):j.createElement(l,e),y(e),v(e,c,r),t(s)&&m(e,r),p(i,e.elm,o)):n(e.isComment)?(e.elm=j.createComment(e.text),p(i,e.elm,o)):(e.elm=j.createTextNode(e.text),p(i,e.elm,o))}}function u(e,r,i,o){var a=e.data;if(t(a)){var s=t(e.componentInstance)&&a.keepAlive;if(t(a=a.hook)&&t(a=a.init)&&a(e,!1,i,o),t(e.componentInstance))return l(e,r),n(s)&&d(e,r,i,o),!0}}function l(e,n){t(e.data.pendingInsert)&&(n.push.apply(n,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,h(e)?(m(e,n),y(e)):(qt(e),n.push(e))}function d(e,n,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,t(o=a.data)&&t(o=o.transition)){for(o=0;o<T.activate.length;++o)T.activate[o](wa,a);n.push(a);break}p(r,e.elm,i)}function p(e,n,r){t(e)&&(t(r)?r.parentNode===e&&j.insertBefore(e,n,r):j.appendChild(e,n))}function v(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)c(t[r],n,e.elm,null,!0);else i(e.text)&&j.appendChild(e.elm,j.createTextNode(e.text))}function h(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return t(e.tag)}function m(e,n){for(var r=0;r<T.create.length;++r)T.create[r](wa,e);t(O=e.data.hook)&&(t(O.create)&&O.create(wa,e),t(O.insert)&&n.push(e))}function y(e){var n;if(t(n=e.fnScopeId))j.setAttribute(e.elm,n,"");else for(var r=e;r;)t(n=r.context)&&t(n=n.$options._scopeId)&&j.setAttribute(e.elm,n,""),r=r.parent;t(n=Io)&&n!==e.context&&n!==e.fnContext&&t(n=n.$options._scopeId)&&j.setAttribute(e.elm,n,"")}function g(e,t,n,r,i,o){for(;r<=i;++r)c(n[r],o,e,t)}function _(e){var n,r,i=e.data;if(t(i))for(t(n=i.hook)&&t(n=n.destroy)&&n(e),n=0;n<T.destroy.length;++n)T.destroy[n](e);if(t(n=e.children))for(r=0;r<e.children.length;++r)_(e.children[r])}function b(e,n,r,i){for(;r<=i;++r){var o=n[r];t(o)&&(t(o.tag)?($(o),_(o)):s(o.elm))}}function $(e,n){if(t(n)||t(e.data)){var r,i=T.remove.length+1;for(t(n)?n.listeners+=i:n=a(e.elm,i),t(r=e.componentInstance)&&t(r=r._vnode)&&t(r.data)&&$(r,n),r=0;r<T.remove.length;++r)T.remove[r](e,n);t(r=e.data.hook)&&t(r=r.remove)?r(e,n):n()}else s(e.elm)}function C(n,r,i,o,a){for(var s,u,l,f=0,d=0,p=r.length-1,v=r[0],h=r[p],m=i.length-1,y=i[0],_=i[m],$=!a;f<=p&&d<=m;)e(v)?v=r[++f]:e(h)?h=r[--p]:Wt(v,y)?(x(v,y,o),v=r[++f],y=i[++d]):Wt(h,_)?(x(h,_,o),h=r[--p],_=i[--m]):Wt(v,_)?(x(v,_,o),$&&j.insertBefore(n,v.elm,j.nextSibling(h.elm)),v=r[++f],_=i[--m]):Wt(h,y)?(x(h,y,o),$&&j.insertBefore(n,h.elm,v.elm),h=r[--p],y=i[++d]):(e(s)&&(s=Zt(r,f,p)),e(u=t(y.key)?s[y.key]:w(y,r,f,p))?c(y,o,n,v.elm):Wt(l=r[u],y)?(x(l,y,o),r[u]=void 0,$&&j.insertBefore(n,l.elm,v.elm)):c(y,o,n,v.elm),y=i[++d]);f>p?g(n,e(i[m+1])?null:i[m+1].elm,i,d,m,o):d>m&&b(n,r,f,p)}function w(e,n,r,i){for(var o=r;o<i;o++){var a=n[o];if(t(a)&&Wt(e,a))return o}}function x(r,i,o,a){if(r!==i){var s=i.elm=r.elm;if(n(r.isAsyncPlaceholder))t(i.asyncFactory.resolved)?A(r.elm,i,o):i.isAsyncPlaceholder=!0;else if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))i.componentInstance=r.componentInstance;else{var c,u=i.data;t(u)&&t(c=u.hook)&&t(c=c.prepatch)&&c(r,i);var l=r.children,f=i.children;if(t(u)&&h(i)){for(c=0;c<T.update.length;++c)T.update[c](r,i);t(c=u.hook)&&t(c=c.update)&&c(r,i)}e(i.text)?t(l)&&t(f)?l!==f&&C(s,l,f,o,a):t(f)?(t(r.text)&&j.setTextContent(s,""),g(s,null,f,0,f.length-1,o)):t(l)?b(s,l,0,l.length-1):t(r.text)&&j.setTextContent(s,""):r.text!==i.text&&j.setTextContent(s,i.text),t(u)&&t(c=u.hook)&&t(c=c.postpatch)&&c(r,i)}}}function k(e,r,i){if(n(i)&&t(e.parent))e.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function A(e,r,i,o){var a,s=r.tag,c=r.data,u=r.children;if(o=o||c&&c.pre,r.elm=e,n(r.isComment)&&t(r.asyncFactory))return r.isAsyncPlaceholder=!0,!0;if(t(c)&&(t(a=c.hook)&&t(a=a.init)&&a(r,!0),t(a=r.componentInstance)))return l(r,i),!0;if(t(s)){if(t(u))if(e.hasChildNodes())if(t(a=c)&&t(a=a.domProps)&&t(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var f=!0,d=e.firstChild,p=0;p<u.length;p++){if(!d||!A(d,u[p],i,o)){f=!1;break}d=d.nextSibling}if(!f||d)return!1}else v(r,u,i);if(t(c)){var h=!1;for(var y in c)if(!N(y)){h=!0,m(r,i);break}!h&&c.class&&ie(c.class)}}else e.data!==r.text&&(e.data=r.text);return!0}var O,S,T={},E=r.modules,j=r.nodeOps;for(O=0;O<xa.length;++O)for(T[xa[O]]=[],S=0;S<E.length;++S)t(E[S][xa[O]])&&T[xa[O]].push(E[S][xa[O]]);var N=f("attrs,class,staticClass,staticStyle,key");return function(r,i,a,s,u,l){if(!e(i)){var f=!1,d=[];if(e(r))f=!0,c(i,d,u,l);else{var p=t(r.nodeType);if(!p&&Wt(r,i))x(r,i,d,s);else{if(p){if(1===r.nodeType&&r.hasAttribute(Ri)&&(r.removeAttribute(Ri),a=!0),n(a)&&A(r,i,d))return k(i,d,!0),r;r=o(r)}var v=r.elm,m=j.parentNode(v);if(c(i,d,v._leaveCb?null:m,j.nextSibling(v)),t(i.parent))for(var y=i.parent,g=h(i);y;){for(var $=0;$<T.destroy.length;++$)T.destroy[$](y);if(y.elm=i.elm,g){for(var C=0;C<T.create.length;++C)T.create[C](wa,y);var w=y.data.hook.insert;if(w.merged)for(var O=1;O<w.fns.length;O++)w.fns[O]()}else qt(y);y=y.parent}t(m)?b(m,[r],0,0):t(r.tag)&&_(r)}}return k(i,d,f),i.elm}t(r)&&_(r)}}({nodeOps:$a,modules:[Sa,Ta,La,Ia,Ba,Ki?{create:tr,activate:tr,remove:function(e,t){!0!==e.data.show?Yn(e,t):t()}}:{}].concat(Oa)});Zi&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&cr(e,"input")});var Qa={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ce(n,"postpatch",function(){Qa.componentUpdated(e,t,n)}):nr(e,t,n.context),e._vOptions=[].map.call(e.options,or)):("textarea"===n.tag||ba(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("change",sr),Yi||(e.addEventListener("compositionstart",ar),e.addEventListener("compositionend",sr)),Zi&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){nr(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,or);i.some(function(e,t){return!b(e,r[t])})&&(e.multiple?t.value.some(function(e){return ir(e,i)}):t.value!==t.oldValue&&ir(t.value,i))&&cr(e,"change")}}},es={model:Qa,show:{bind:function(e,t,n){var r=t.value,i=(n=ur(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Xn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;r!==t.oldValue&&((n=ur(n)).data&&n.data.transition?(n.data.show=!0,r?Xn(n,function(){e.style.display=e.__vOriginalDisplay}):Yn(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},ts={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},ns={name:"transition",props:ts,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag||ge(e)})).length){var r=this.mode,o=n[0];if(pr(this.$vnode))return o;var a=lr(o);if(!a)return o;if(this._leaving)return dr(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=fr(this),u=this._vnode,l=lr(u);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),l&&l.data&&!vr(a,l)&&!ge(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=y({},c);if("out-in"===r)return this._leaving=!0,ce(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),dr(e,o);if("in-out"===r){if(ge(a))return u;var d,p=function(){d()};ce(c,"afterEnter",p),ce(c,"enterCancelled",p),ce(f,"delayLeave",function(e){d=e})}}return o}}},rs=y({tag:String,moveClass:String},ts);delete rs.mode;var is={Transition:ns,TransitionGroup:{props:rs,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=fr(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(hr),e.forEach(mr),e.forEach(yr),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Kn(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(qa,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(qa,e),n._moveCb=null,Jn(n,t))})}}))},methods:{hasMove:function(e,t){if(!Va)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Un(n,e)}),Bn(n,t),n.style.display="none",this.$el.appendChild(n);var r=Wn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Ot.config.mustUseProp=ca,Ot.config.isReservedTag=ga,Ot.config.isReservedAttr=aa,Ot.config.getTagNamespace=Kt,Ot.config.isUnknownElement=function(e){if(!Ki)return!0;if(ga(e))return!1;if(e=e.toLowerCase(),null!=_a[e])return _a[e];var t=document.createElement(e);return e.indexOf("-")>-1?_a[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:_a[e]=/HTMLUnknownElement/.test(t.toString())},y(Ot.options.directives,es),y(Ot.options.components,is),Ot.prototype.__patch__=Ki?Ya:_,Ot.prototype.$mount=function(e,t){return e=e&&Ki?Jt(e):void 0,Se(this,e,t)},Ot.nextTick(function(){Ui.devtools&&ao&&ao.emit("init",Ot)},0);var os,as=/\{\{((?:.|\n)+?)\}\}/g,ss="/[-.*+?^$" + "{}()|[\]\/\\]/g",cs=v(function(e){var t=e[0].replace(ss,"\\$&"),n=e[1].replace(ss,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),us={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=hn(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=vn(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}},ls={staticKeys:["staticStyle"],transformNode:function(e,t){var n=hn(e,"style");n&&(e.staticStyle=JSON.stringify(Ma(n)));var r=vn(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},fs={decode:function(e){return os=os||document.createElement("div"),os.innerHTML=e,os.textContent}},ds=f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ps=f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),vs=f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),hs=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,ms="[a-zA-Z_][\\w\\-\\.]*",ys="((?:"+ms+"\\:)?"+ms+")",gs=new RegExp("^<"+ys),_s=/^\s*(\/?)>/,bs=new RegExp("^<\\/"+ys+"[^>]*>"),$s=/^<!DOCTYPE [^>]+>/i,Cs=/^<!--/,ws=/^<!\[/,xs=!1;"x".replace(/x(.)?/g,function(e,t){xs=""===t});var ks,As,Os,Ss,Ts,Es,js,Ns,Ls,Is,Ms,Ds=f("script,style,textarea",!0),Ps={},Fs={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},Rs=/&(?:lt|gt|quot|amp);/g,Hs=/&(?:lt|gt|quot|amp|#10|#9);/g,Bs=f("pre,textarea",!0),Us=function(e,t){return e&&Bs(e)&&"\n"===t[0]},Vs=/^@|^v-on:/,zs=/^v-|^@|^:/,Ks=/(.*?)\s+(?:in|of)\s+(.*)/,Js=/\((\{[^}]*\}|[^,{]*),([^,]*)(?:,([^,]*))?\)/,qs=/^\(|\)$/g,Ws=/:(.*)$/,Gs=/^:|^v-bind:/,Zs=/\.[^.]+/g,Xs=v(fs.decode),Ys=/^xmlns:NS\d+/,Qs=/^NS\d+:/,ec=[us,ls,{preTransformNode:function(e,t){if("input"===e.tag){var n=e.attrsMap;if(n["v-model"]&&(n["v-bind:type"]||n[":type"])){var r=vn(e,"type"),i=hn(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=hn(e,"v-else",!0),s=hn(e,"v-else-if",!0),c=Vr(e);Sr(c),zr(c,"type","checkbox"),kr(c,t),c.processed=!0,c.if="("+r+")==='checkbox'"+o,Nr(c,{exp:c.if,block:c});var u=Vr(e);hn(u,"v-for",!0),zr(u,"type","radio"),kr(u,t),Nr(c,{exp:"("+r+")==='radio'"+o,block:u});var l=Vr(e);return hn(l,"v-for",!0),zr(l,":type",r),kr(l,t),Nr(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}],tc={expectHTML:!0,modules:ec,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return mn(e,r,i),!1;if("select"===o)An(e,r,i);else if("input"===o&&"checkbox"===a)xn(e,r,i);else if("input"===o&&"radio"===a)kn(e,r,i);else if("input"===o||"textarea"===o)On(e,r,i);else if(!Ui.isReservedTag(o))return mn(e,r,i),!1;return!0},text:function(e,t){t.value&&ln(e,"textContent","_s("+t.value+")")},html:function(e,t){t.value&&ln(e,"innerHTML","_s("+t.value+")")}},isPreTag:function(e){return"pre"===e},isUnaryTag:ds,mustUseProp:ca,canBeLeftOpenTag:ps,isReservedTag:ga,getTagNamespace:Kt,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(ec)},nc=v(function(e){return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}),rc=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ic=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,oc={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},ac=function(e){return"if("+e+")return null;"},sc={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ac("$event.target !== $event.currentTarget"),ctrl:ac("!$event.ctrlKey"),shift:ac("!$event.shiftKey"),alt:ac("!$event.altKey"),meta:ac("!$event.metaKey"),left:ac("'button' in $event && $event.button !== 0"),middle:ac("'button' in $event && $event.button !== 1"),right:ac("'button' in $event && $event.button !== 2")},cc={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:_},uc=function(e){this.options=e,this.warn=e.warn||cn,this.transforms=un(e.modules,"transformCode"),this.dataGenFns=un(e.modules,"genData"),this.directives=y(y({},cc),e.directives);var t=e.isReservedTag||Pi;this.maybeComponent=function(e){return!t(e.tag)},this.onceId=0,this.staticRenderFns=[]},lc=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),function(e){return function(t){function n(n,r){var i=Object.create(t),o=[],a=[];if(i.warn=function(e,t){(t?a:o).push(e)},r){r.modules&&(i.modules=(t.modules||[]).concat(r.modules)),r.directives&&(i.directives=y(Object.create(t.directives),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var c=e(n,i);return c.errors=o,c.tips=a,c}return{compile:n,compileToFunctions:xi(n)}}}(function(e,t){var n=Cr(e.trim(),t);Kr(n,t);var r=ei(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})(tc).compileToFunctions),fc=!!Ki&&ki(!1),dc=!!Ki&&ki(!0),pc=v(function(e){var t=Jt(e);return t&&t.innerHTML}),vc=Ot.prototype.$mount;return Ot.prototype.$mount=function(e,t){if((e=e&&Jt(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=pc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Ai(e));if(r){var i=lc(r,{shouldDecodeNewlines:fc,shouldDecodeNewlinesForHref:dc,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return vc.call(this,e,t)},Ot.compile=lc,Ot});
/* ######## vue End ############################################# */


/* ######## support ############################################# */



/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=3ffe7057755ae7bb86ebe1890012c751)
 * Config saved to config.json and https://gist.github.com/3ffe7057755ae7bb86ebe1890012c751
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict";function e(e){var r=e.attr("data-target");r||(r=e.attr("href"),r=r&&/#[A-Za-z]/.test(r)&&r.replace(/.*(?=#[^\s]*$)/,""));var o=r&&t(r);return o&&o.length?o:e.parent()}function r(r){r&&3===r.which||(t(n).remove(),t(a).each(function(){var o=t(this),n=e(o),a={relatedTarget:this};n.hasClass("open")&&(r&&"click"==r.type&&/input|textarea/i.test(r.target.tagName)&&t.contains(n[0],r.target)||(n.trigger(r=t.Event("hide.bs.dropdown",a)),r.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",a)))))}))}function o(e){return this.each(function(){var r=t(this),o=r.data("bs.dropdown");o||r.data("bs.dropdown",o=new i(this)),"string"==typeof e&&o[e].call(r)})}var n=".dropdown-backdrop",a='[data-toggle="dropdown"]',i=function(e){t(e).on("click.bs.dropdown",this.toggle)};i.VERSION="3.3.6",i.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var a=e(n),i=a.hasClass("open");if(r(),!i){"ontouchstart"in document.documentElement&&!a.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",r);var d={relatedTarget:this};if(a.trigger(o=t.Event("show.bs.dropdown",d)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),a.toggleClass("open").trigger(t.Event("shown.bs.dropdown",d))}return!1}},i.prototype.keydown=function(r){if(/(38|40|27|32)/.test(r.which)&&!/input|textarea/i.test(r.target.tagName)){var o=t(this);if(r.preventDefault(),r.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),i=n.hasClass("open");if(!i&&27!=r.which||i&&27==r.which)return 27==r.which&&n.find(a).trigger("focus"),o.trigger("click");var d=" li:not(.disabled):visible a",s=n.find(".dropdown-menu"+d);if(s.length){var p=s.index(r.target);38==r.which&&p>0&&p--,40==r.which&&p<s.length-1&&p++,~p||(p=0),s.eq(p).trigger("focus")}}}};var d=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=i,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=d,this},t(document).on("click.bs.dropdown.data-api",r).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",a,i.prototype.toggle).on("keydown.bs.dropdown.data-api",a,i.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",i.prototype.keydown)}(jQuery);

$(function () {

    Array.prototype.unique = function () {
        var r = new Array();
        o:for (var i = 0, n = this.length; i < n; i++) {
            cleaned =  this[i].replace(/(\r\n|\n|\r)/gm,'')
            for (var x = 0, y = r.length; x < y; x++) {
                cleaned2 =  r[x].replace(/(\r\n|\n|\r)/gm,'')

                if (cleaned2 == cleaned) {
                    // console.log()('this is a DUPE!');
                    continue o;
                }
            }

            if (this[i].length > 1) {

                r[r.length] = cleaned;
            }
        }
        return r;
    };


    var $filterBox = $("#filter");
    var $searchableContainer = $('.module-faq');
    var $faqNav = $('.faq-nav');
    var $mobileFaqNav = $('.faq-nav-mobile');
    if ($mobileFaqNav.is(":visible")) {
        $faqNav = $mobileFaqNav;
    }


    function resetFiltering() {
        $searchableContainer.find('.accordeon-item.active .item-banderole').trigger('click');
        $searchableContainer.removeClass('filtering');
        $filterBox.val("");
        $searchableContainer.find(".module-collapsible-component").show();
        $('.no-result').hide();
    }

    if (!$('body').hasClass('edit')) {

        $filterBox.on("search", function () {
            resetFiltering();
            $faqNav.find('li.active').trigger('click');
        });

            // filter via navigation
        $faqNav.find('li').click(function (e) {
            e.preventDefault();
            var _this = $(this);

            var category = $(this).find('a').data('filter');

            if ($searchableContainer.hasClass('filtering')) {
                resetFiltering();
            }

            _this.addClass('active').siblings().removeClass('active');


            $searchableContainer.find(".module-collapsible-component").each(function () {

                if ($(this).data('categorization')) {
                    if ($(this).data('categorization').indexOf(_this.find('a').data('filter')) >= 0) {
                        $(this).show();
                        $(this).find('.accordeon-item').attr('data-track', '{"DCSext.Filter":"'+category+'"}');
                    } else {
                        $(this).hide();
                        $(this).find('.accordeon-item').removeAttr('data-track');
                    }
                }
            });
            $searchableContainer.find('.accordeon-item.active .item-banderole').trigger('click');

        });


        function searchResult(filterString) {
            $searchableContainer.find(".module-collapsible-component[data-categorization='top']").hide();
            $searchableContainer.find(".module-collapsible-component[data-categorization!='top']").each(function () {

                // If the list item does not contain the text phrase fade it out

                if ($(this).text().toLowerCase().search(new RegExp(filterString.toLowerCase(), "ig")) < 0) {
                    $(this).hide();
                    $(this).find('.accordeon-item').removeAttr('data-track');
                } else {
                    $(this).show();
                    $(this).find('.accordeon-item').attr('data-track', '{"DCSext.Filter":"search"}');

                    count++;
                }
            });
            if (count === 0) {
                $('.no-result').show();

            } else {
                $('.no-result').hide();
            }
        }


        var count = 0;
        // filter via search-box

        $('#search-faq').on('submit',function(e){
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $('.faq-nav-wrapper').offset().top
            }, 300);
            var filterString = $filterBox.val();
            $searchableContainer.addClass('filtering');
            $searchableContainer.find('.accordeon-item.active .item-banderole').trigger('click');
            searchResult(filterString);
            var numberResults = $('.module-collapsible-component').filter(':visible').length;
            if(filterString == ''){
            	filterString = 'empty';
            }
            dcsMultiTrack('DCSext.Area','Content', 'DCSext.Module','Faq', 'DCSext.SubArea','Search', 'WT.oss', filterString, 'WT.oss_r', numberResults);
        });

        $filterBox.keypress(function (e) {
            if (e.which == 13) {
                $('#search-faq').submit();
                return false;
            }
        });


        if ($mobileFaqNav.is(":visible")) {
            var $dropdownToggle = $('.dropdown-toggle');
            $('.faq-nav li').on('click', function () {
                var _this = $(this);
                $dropdownToggle.attr('class', 'dropdown-toggle').addClass(_this.attr('class'))
                $dropdownToggle.find('>span').text(_this.find('a').text())
            })
        }


        window.onload = function () {
            window.setTimeout(function () {
                $faqNav.find('li:eq(0)').trigger('click');
                $searchableContainer.addClass('loaded');

            }, 500);


            // prepare data for typeahead
            var objects = "";
            $('.module-faq .accordeon-item .item-content').find('div:not(.voting-wrapper),div.text-box').each(function () {

                if (!$(this).hasClass('voting-wrapper')) {

                    objects += $(this).text();
                }
            });

            $('.module-faq .accordeon-item .text-box h3').each(function () {
                    objects += $(this).text();
            });

            objects = objects.replace(/&nbsp;/g, ' ');
            objects = objects.replace(/[!.?'",/]/g, ' ');
            objects = objects.replace(/  +/g, ' ');
            objects = objects.replace(/[`~!@#$%^&*«»()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, "")
            objects = objects.split(' ');
            objects = objects.unique();

            var substringMatcher = function (strs) {
                return function findMatches(q, cb) {
                    var matches;
                    matches = [];

                    substrRegex = new RegExp(q, 'i');
                    $.each(strs, function (i, str) {
                        if (substrRegex.test(str)) {
                            matches.push(str);
                        }
                    });

                    cb(matches);
                };
            };


            $('#filter').typeahead({
                    hint: true,
                    highlight: true,
                    minLength: 1
                },
                {
                    name: 'objects',
                    source: substringMatcher(objects)
                });
        };
    }else{

        $searchableContainer.find(".module-collapsible-component").each(function () {
            $(this).addClass('.loaded')
        });
    }
});

/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("bloodhound", [ "jquery" ], function(a0) {
            return root["Bloodhound"] = factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root["Bloodhound"] = factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var VERSION = "0.11.1";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(keys) {
                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                    this.size--;
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage;
            LOCAL_STORAGE.setItem("~~~", "!");
            LOCAL_STORAGE.removeItem("~~~");
        } catch (err) {
            LOCAL_STORAGE = null;
        }
        function PersistentStorage(namespace, override) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
            this.ls = override || LOCAL_STORAGE;
            !this.ls && this._noop();
        }
        _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key;
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey;
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val);
                } catch (err) {
                    if (err.name === "QuotaExceededError") {
                        this.clear();
                        this._noop();
                    }
                }
            },
            get: function(key) {
                if (this.isExpired(key)) {
                    this.remove(key);
                }
                return decode(this.ls.getItem(this._prefix(key)));
            },
            set: function(key, val, ttl) {
                if (_.isNumber(ttl)) {
                    this._safeSet(this._ttlKey(key), encode(now() + ttl));
                } else {
                    this.ls.removeItem(this._ttlKey(key));
                }
                return this._safeSet(this._prefix(key), encode(val));
            },
            remove: function(key) {
                this.ls.removeItem(this._ttlKey(key));
                this.ls.removeItem(this._prefix(key));
                return this;
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--; ) {
                    this.remove(keys[i]);
                }
                return this;
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? true : false;
            }
        });
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return $.parseJSON(val);
        }
        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [], len = LOCAL_STORAGE.length;
            for (i = 0; i < len; i++) {
                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                    keys.push(key.replace(keyMatcher, ""));
                }
            }
            return keys;
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this.cancelled = false;
            this.lastReq = null;
            this._send = o.transport;
            this._get = o.limiter ? o.limiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _fingerprint: function fingerprint(o) {
                o = o || {};
                return o.url + o.type + $.param(o.data || {});
            },
            _get: function(o, cb) {
                var that = this, fingerprint, jqXhr;
                fingerprint = this._fingerprint(o);
                if (this.cancelled || fingerprint !== this.lastReq) {
                    return;
                }
                if (jqXhr = pendingRequests[fingerprint]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb(null, resp);
                    that._cache.set(fingerprint, resp);
                }
                function fail() {
                    cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[fingerprint];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop;
                o = _.isString(o) ? {
                    url: o
                } : o || {};
                fingerprint = this._fingerprint(o);
                this.cancelled = false;
                this.lastReq = fingerprint;
                if (resp = this._cache.get(fingerprint)) {
                    cb(null, resp);
                } else {
                    this._get(o, cb);
                }
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
    }();
    var SearchIndex = window.SearchIndex = function() {
        "use strict";
        var CHILDREN = "c", IDS = "i";
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.identify = o.identify || _.stringify;
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                            node[IDS].push(id);
                        }
                    });
                });
            },
            get: function get(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id];
                });
            },
            search: function search(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node[CHILDREN][ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node[IDS].slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            all: function all() {
                var values = [];
                for (var key in this.datums) {
                    values.push(this.datums[key]);
                }
                return values;
            },
            reset: function reset() {
                this.datums = {};
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            var node = {};
            node[IDS] = [];
            node[CHILDREN] = {};
            return node;
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort();
            arrayB = arrayB.sort();
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
        }
    }();
    var Prefetch = function() {
        "use strict";
        var keys;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        function Prefetch(o) {
            this.url = o.url;
            this.ttl = o.ttl;
            this.cache = o.cache;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = o.transport;
            this.thumbprint = o.thumbprint;
            this.storage = new PersistentStorage(o.cacheKey);
        }
        _.mixin(Prefetch.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            store: function store(data) {
                if (!this.cache) {
                    return;
                }
                this.storage.set(keys.data, data, this.ttl);
                this.storage.set(keys.protocol, location.protocol, this.ttl);
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
            },
            fromCache: function fromCache() {
                var stored = {}, isExpired;
                if (!this.cache) {
                    return null;
                }
                stored.data = this.storage.get(keys.data);
                stored.protocol = this.storage.get(keys.protocol);
                stored.thumbprint = this.storage.get(keys.thumbprint);
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            fromNetwork: function(cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                settings = this.prepare(this._settings());
                this.transport(settings).fail(onError).done(onResponse);
                function onError() {
                    cb(true);
                }
                function onResponse(resp) {
                    cb(null, that.transform(resp));
                }
            },
            clear: function clear() {
                this.storage.clear();
                return this;
            }
        });
        return Prefetch;
    }();
    var Remote = function() {
        "use strict";
        function Remote(o) {
            this.url = o.url;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport
            });
        }
        _.mixin(Remote.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            get: function get(query, cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                query = query || "";
                settings = this.prepare(query, this._settings());
                return this.transport.get(settings, onResponse);
                function onResponse(err, resp) {
                    err ? cb([]) : cb(that.transform(resp));
                }
            },
            cancelLastRequest: function cancelLastRequest() {
                this.transport.cancel();
            }
        });
        return Remote;
    }();
    var oParser = function() {
        "use strict";
        return function parse(o) {
            var defaults, sorter;
            defaults = {
                initialize: true,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            };
            o = _.mixin(defaults, o || {});
            !o.datumTokenizer && $.error("datumTokenizer is required");
            !o.queryTokenizer && $.error("queryTokenizer is required");
            sorter = o.sorter;
            o.sorter = sorter ? function(x) {
                return x.sort(sorter);
            } : _.identity;
            o.local = _.isFunction(o.local) ? o.local() : o.local;
            o.prefetch = parsePrefetch(o.prefetch);
            o.remote = parseRemote(o.remote);
            return o;
        };
        function parsePrefetch(o) {
            var defaults;
            if (!o) {
                return null;
            }
            defaults = {
                url: null,
                ttl: 24 * 60 * 60 * 1e3,
                cache: true,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("prefetch requires url to be set");
            o.transform = o.filter || o.transform;
            o.cacheKey = o.cacheKey || o.url;
            o.thumbprint = VERSION + o.thumbprint;
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            return o;
        }
        function parseRemote(o) {
            var defaults;
            if (!o) {
                return;
            }
            defaults = {
                url: null,
                cache: true,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("remote requires url to be set");
            o.transform = o.filter || o.transform;
            o.prepare = toRemotePrepare(o);
            o.limiter = toLimiter(o);
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            delete o.replace;
            delete o.wildcard;
            delete o.rateLimitBy;
            delete o.rateLimitWait;
            return o;
        }
        function toRemotePrepare(o) {
            var prepare, replace, wildcard;
            prepare = o.prepare;
            replace = o.replace;
            wildcard = o.wildcard;
            if (prepare) {
                return prepare;
            }
            if (replace) {
                prepare = prepareByReplace;
            } else if (o.wildcard) {
                prepare = prepareByWildcard;
            } else {
                prepare = idenityPrepare;
            }
            return prepare;
            function prepareByReplace(query, settings) {
                settings.url = replace(settings.url, query);
                return settings;
            }
            function prepareByWildcard(query, settings) {
                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                return settings;
            }
            function idenityPrepare(query, settings) {
                return settings;
            }
        }
        function toLimiter(o) {
            var limiter, method, wait;
            limiter = o.limiter;
            method = o.rateLimitBy;
            wait = o.rateLimitWait;
            if (!limiter) {
                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
            }
            return limiter;
            function debounce(wait) {
                return function debounce(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function throttle(wait) {
                return function throttle(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
        function callbackToDeferred(fn) {
            return function wrapper(o) {
                var deferred = $.Deferred();
                fn(o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var Bloodhound = function() {
        "use strict";
        var old;
        old = window && window.Bloodhound;
        function Bloodhound(o) {
            o = oParser(o);
            this.sorter = o.sorter;
            this.identify = o.identify;
            this.sufficient = o.sufficient;
            this.local = o.local;
            this.remote = o.remote ? new Remote(o.remote) : null;
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            o.initialize !== false && this.initialize();
        }
        Bloodhound.noConflict = function noConflict() {
            window && (window.Bloodhound = old);
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function ttAdapter() {
                var that = this;
                return this.remote ? withAsync : withoutAsync;
                function withAsync(query, sync, async) {
                    return that.search(query, sync, async);
                }
                function withoutAsync(query, sync) {
                    return that.search(query, sync);
                }
            },
            _loadPrefetch: function loadPrefetch() {
                var that = this, deferred, serialized;
                deferred = $.Deferred();
                if (!this.prefetch) {
                    deferred.resolve();
                } else if (serialized = this.prefetch.fromCache()) {
                    this.index.bootstrap(serialized);
                    deferred.resolve();
                } else {
                    this.prefetch.fromNetwork(done);
                }
                return deferred.promise();
                function done(err, data) {
                    if (err) {
                        return deferred.reject();
                    }
                    that.add(data);
                    that.prefetch.store(that.index.serialize());
                    deferred.resolve();
                }
            },
            _initialize: function initialize() {
                var that = this, deferred;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                return this.initPromise;
                function addLocalToIndex() {
                    that.add(that.local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
                return this;
            },
            get: function get(ids) {
                ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                return this.index.get(ids);
            },
            search: function search(query, sync, async) {
                var that = this, local;
                local = this.sorter(this.index.search(query));
                sync(this.remote ? local.slice() : local);
                if (this.remote && local.length < this.sufficient) {
                    this.remote.get(query, processRemote);
                } else if (this.remote) {
                    this.remote.cancelLastRequest();
                }
                return this;
                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l);
                        }) && nonDuplicates.push(r);
                    });
                    async && async(nonDuplicates);
                }
            },
            all: function all() {
                return this.index.all();
            },
            clear: function clear() {
                this.index.reset();
                return this;
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.prefetch && this.prefetch.clear();
                return this;
            },
            clearRemoteCache: function clearRemoteCache() {
                Transport.resetCache();
                return this;
            },
            ttAdapter: function ttAdapter() {
                return this.__ttAdapter();
            }
        });
        return Bloodhound;
    }();
    return Bloodhound;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("typeahead.js", [ "jquery" ], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var WWW = function() {
        "use strict";
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build;
        function build(o) {
            var www, classes;
            classes = _.mixin({}, defaultClassNames, o);
            www = {
                css: buildCss(),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            };
            return {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www);
                }
            };
        }
        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div class="' + c.menu + '"></div>'
            };
        }
        function buildSelectors(classes) {
            var selectors = {};
            _.each(classes, function(v, k) {
                selectors[k] = "." + v;
            });
            return selectors;
        }
        function buildCss() {
            var css = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            if (_.isMsie()) {
                _.mixin(css.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
            }
            return css;
        }
    }();
    var EventBus = function() {
        "use strict";
        var namespace, deprecationMap;
        namespace = "typeahead:";
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        };
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e;
                $e = $.Event(namespace + type);
                (args = args || []).unshift($e);
                this.$el.trigger.apply(this.$el, args);
                return $e;
            },
            before: function(type) {
                var args, $e;
                args = [].slice.call(arguments, 1);
                $e = this._trigger("before" + type, args);
                return $e.isDefaultPrevented();
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1));
                if (deprecatedType = deprecationMap[type]) {
                    this._trigger(deprecatedType, [].slice.call(arguments, 1));
                }
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o, www) {
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            www.mixin(this);
            this.$hint = $(o.hint);
            this.$input = $(o.input);
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = buildOverflowHelper(this.$input);
            this._checkLanguageDirection();
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
        }
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.queryWhenFocused = this.query;
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
                }
                return trigger;
            },
            _checkLanguageDirection: function checkLanguageDirection() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$hint.attr("dir", dir);
                    this.trigger("langDirChanged", dir);
                }
            },
            _setQuery: function setQuery(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                this.query = val;
                if (!silent && !areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (!silent && hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            bind: function() {
                var that = this, onBlur, onFocus, onKeydown, onInput;
                onBlur = _.bind(this._onBlur, this);
                onFocus = _.bind(this._onFocus, this);
                onKeydown = _.bind(this._onKeydown, this);
                onInput = _.bind(this._onInput, this);
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                if (!_.isMsie() || _.isMsie() > 9) {
                    this.$input.on("input.tt", onInput);
                } else {
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                            return;
                        }
                        _.defer(_.bind(that._onInput, that, $e));
                    });
                }
                return this;
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getLangDir: function getLangDir() {
                return this.dir;
            },
            getQuery: function getQuery() {
                return this.query || "";
            },
            setQuery: function setQuery(val, silent) {
                this.setInputValue(val);
                this._setQuery(val, silent);
            },
            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                return this.query !== this.queryWhenFocused;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value) {
                this.$input.val(value);
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            hasFocus: function hasFocus() {
                return this.$input.is(":focus");
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = $("<div>");
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var keys, nameGenerator;
        keys = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        };
        nameGenerator = _.getIdGenerator();
        function Dataset(o, www) {
            o = o || {};
            o.templates = o.templates || {};
            o.templates.notFound = o.templates.notFound || o.templates.empty;
            if (!o.source) {
                $.error("missing source");
            }
            if (!o.node) {
                $.error("missing node");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = o.name || nameGenerator();
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", this.name, suggestions, false);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", this.name, suggestions, true);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this, fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this, canceled = false, syncCalled = false, rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);
                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query);
                    }
                }
                function async(suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        rendered += suggestions.length;
                        that._append(query, suggestions.slice(0, that.limit - rendered));
                        that.async && that.trigger("asyncReceived", query);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return $("<div>").text(displayFn(context));
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";
        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, isDatasetEmpty);
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this, onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
                this._updateHint();
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if ($selectable = this.menu.getTopSelectable()) {
                    this.autocomplete($selectable) && $e.preventDefault();
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, payload, cancelMove;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                payload = data ? data.obj : null;
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        this.input.setInputValue(data.val);
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", payload);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(newVal);
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this), typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                autocomplete: "off",
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }
        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});

$(function () {


    // on reload: set items in sessionstorage to voted
    if (false && typeof sessionStorage === 'object') {
        try {
            for (var i=0, len = sessionStorage.length; i  <  len; i++){
                var key = sessionStorage.key(i);
                $( ".module-collapsible-component[data-url=\'"+key+"\']" ).find('.voting-wrapper').addClass('voted');
            }
        } catch (e) {
        }
    }

    $('.module-faq .voting-form input[data-comment-required]').on('change',function (e) {
        var requestForm = $(this).closest(".voting-form");
        requestForm.removeClass('error1, error2');
        if($($(e)[0].target).data("comment-required") == true){
          //$(this).closest('.voting-form').find('.textarea-hint-container').show();
        }else{
          //$(this).closest('.voting-form').find('.textarea-hint-container').hide();
        }
        var itemContent = $(this).closest(".item-content");
        itemContent.height(itemContent.find(".item-clearfix").height())
    });

    $('.module-faq .voting-form .textarea-hint-container textarea').on('keyup',function (e) {
        if( $(this).val().length >= 240){
            $(this).val($(this).val().substr(0, 239));
            $(this).next().addClass('error');
        }else{
            $(this).next().removeClass('error');
        }
        var requestForm = $(this).closest(".voting-form");
        requestForm.removeClass('error1, error2');
    });

    $(".module-faq .voting-form .submit").each(function(){
        $(this).on('click',function (e) {
            e.preventDefault();
            var _this = $(this);
            var requestUrl = _this.closest(".module-collapsible-component").data("url");
            var requestForm = _this.closest(".voting-form");
            var faqHeadline = _this.closest(".module-collapsible-component").find(".text-box h3");
            var votingFormWrapper = _this.closest(".module-collapsible-component").find(".voting-form-wrapper");
            var votingRespondsWrapper = _this.closest(".module-collapsible-component").find(".voting-responds-wrapper");

            var formError = 1;
            if (requestUrl && requestUrl !== ""){
                if(requestForm.find(":radio:checked").size() > 0){
                    formError = 0;
                    if(requestForm.find(":radio:checked").data("comment-required") == true){
                        if(requestForm.find("textarea").val() == ''){
                            formError = 2;
                        }else{
                            formError = 0;
                        }
                    }
                }
            }
            if(formError == 1){
                requestForm.addClass('error1');
            }else if(formError == 2){
                requestForm.addClass('error2');
            }else{
                requestForm.removeClass('error1, error2');
                var faqFeedbackObj = {
                    points: 0,
                    select: requestForm.find(":radio:checked").val(),
                    comment: requestForm.find("textarea").val()
                };
                submitFaqFeedback(requestUrl, faqFeedbackObj);
                votingRespondsWrapper.show();
                votingRespondsWrapper.find('p').eq(1).show();
                votingFormWrapper.hide();
                var itemContent = $(this).closest(".item-content");
                itemContent.height(itemContent.find(".item-clearfix").height())
            }
        });
    });

    $(".module-faq .vote").each(function(){
        $(this).on('click',function (e) {
            e.preventDefault();
            var _this = $(this);
            var requestUrl = _this.closest(".module-collapsible-component").data("url");
            var votingFormWrapper = _this.closest(".module-collapsible-component").find(".voting-form-wrapper");
            var faqHeadline = _this.closest(".module-collapsible-component").find(".text-box h3");
            var votingWrapper = _this.closest(".module-collapsible-component").find(".voting-wrapper");
            var votingRespondsWrapper = _this.closest(".module-collapsible-component").find(".voting-responds-wrapper");

            votingWrapper.hide();
            if (requestUrl && requestUrl !== ""){ //  } && !sessionStorage.getItem(requestUrl)) {
                if (_this.hasClass("upvote")) {
                    var faqFeedbackObj = {
                        points: 5
                    };
                    submitFaqFeedback(requestUrl, faqFeedbackObj)
                    votingRespondsWrapper.show();
                    votingRespondsWrapper.find('p').eq(0).show();
                    var itemContent = $(this).closest(".item-content");
                    itemContent.height(itemContent.find(".item-clearfix").height())
                }else{
                    votingFormWrapper.show();
                    var itemContent = $(this).closest(".item-content");
                    itemContent.height(itemContent.find(".item-clearfix").height())
                }
            }
        });
    });

    function submitFaqFeedback(requestUrl, data){
        $.ajax({
            url:requestUrl,
            type: "POST",
            data: data,
            success: function (data) {

                data = $.parseJSON(data);

                $(".module-collapsible-component").each(function(){
                    if($(this).data("url") === requestUrl){
                        $(this).find(".voting-wrapper:not(.voted)").addClass('voted');
                        // $(this).find('.accordeon-item').find('.rating').find('span:lt('+stars+')').addClass('active')
                        // $(this).find('.accordeon-item').find('.rating').find('span:gt('+(stars-1)+')').removeClass('active')
                    }
                });
            },
            error: function(){
                console.log('failed')
            }

        });
    }

    $(".module-faq .accordeon-item > .text-box").each(function(){
        $(this).on('click',function (e) {
            e.preventDefault();
            var _this = $(this);
            var requestUrl = $(this).closest(".module-collapsible-component").data("url");

            if (requestUrl && requestUrl !== "" && !sessionStorage.getItem('tracked-'+requestUrl) && !_this.hasClass('tracked') ) {


                if (typeof sessionStorage === 'object') {
                    try {
                        if (!sessionStorage.getItem('tracked-'+requestUrl)) {
                            sessionStorage.setItem('tracked-'+requestUrl, "true");
                        }
                    } catch (e) {
                        _this.addClass('tracked');
                    }
                }

                $.ajax({
                    url: requestUrl,
                    type: "POST",
                    success: function () {

                    }

                });
            }
        });
    })
});
/* ######## support End ############################################# */
