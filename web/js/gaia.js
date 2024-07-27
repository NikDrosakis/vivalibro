/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


//# sourceMappingURL=jquery.slim.min.map/*! Sortable 1.10.1 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function I(i){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,o;e=i,o=r[n=t],n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o})}return i}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],0<=e.indexOf(n)||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function e(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var w=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),E=t(/Edge/i),c=t(/firefox/i),s=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),i=t(/chrome/i)&&t(/android/i),r={capture:!1,passive:!1};function u(t,e,n){t.addEventListener(e,n,!w&&r)}function d(t,e,n){t.removeEventListener(e,n,!w&&r)}function h(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function P(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&h(t,e):h(t,e))||o&&t===n)return t;if(t===n)break}while(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode)}var i;return null}var f,p=/\s+/g;function k(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(p," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(p," ")}}function R(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=R(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix;return i&&new i(n)}function g(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function N(){return w?document.documentElement:document.scrollingElement}function X(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d;if(d=t!==window&&t!==N()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!w))do{if(i&&i.getBoundingClientRect&&("none"!==R(i,"transform")||n&&"static"!==R(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(R(i,"border-top-width")),l-=h.left+parseInt(R(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);if(o&&t!==window){var f=v(i||t),p=f&&f.a,g=f&&f.d;f&&(s=(a/=g)+(u/=g),c=(l/=p)+(d/=p))}return{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function Y(t,e,n){for(var o=H(t,!0),i=X(t)[e];o;){var r=X(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===N())break;o=H(o,!1)}return!1}function m(t,e,n){for(var o=0,i=0,r=t.children;i<r.length;){if("none"!==r[i].style.display&&r[i]!==Rt.ghost&&r[i]!==Rt.dragged&&P(r[i],n.draggable,t,!1)){if(o===e)return r[i];o++}i++}return null}function B(t,e){for(var n=t.lastElementChild;n&&(n===Rt.ghost||"none"===R(n,"display")||e&&!h(n,e));)n=n.previousElementSibling;return n||null}function F(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Rt.clone||e&&!h(t,e)||n++;return n}function b(t){var e=0,n=0,o=N();if(t)do{var i=v(t),r=i.a,a=i.d;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function H(t,e){if(!t||!t.getBoundingClientRect)return N();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=R(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return N();if(o||e)return n;o=!0}}}while(n=n.parentNode);return N()}function y(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function D(e,n){return function(){if(!f){var t=arguments;1===t.length?e.call(this,t[0]):e.apply(this,t),f=setTimeout(function(){f=void 0},n)}}}function L(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function _(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function S(t,e){R(t,"position","absolute"),R(t,"top",e.top),R(t,"left",e.left),R(t,"width",e.width),R(t,"height",e.height)}function C(t){R(t,"position",""),R(t,"top",""),R(t,"left",""),R(t,"width",""),R(t,"height","")}var j="Sortable"+(new Date).getTime();function T(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){if("none"!==R(t,"display")&&t!==Rt.ghost){o.push({target:t,rect:X(t)});var e=I({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=v(t,!0);n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=X(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&y(r,i)&&!y(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(e=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(l,r,a,c.options)),y(i,o)||(n.prevFromRect=o,n.prevToRect=i,e||(e=c.options.animation),c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){if(o){R(t,"transition",""),R(t,"transform","");var i=v(this.el),r=i&&i.a,a=i&&i.d,l=(e.left-n.left)/(r||1),s=(e.top-n.top)/(a||1);t.animatingX=!!l,t.animatingY=!!s,R(t,"transform","translate3d("+l+"px,"+s+"px,0)"),function(t){t.offsetWidth}(t),R(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),R(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){R(t,"transition",""),R(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}}var x=[],M={initializeByDefault:!0},O={mount:function(t){for(var e in M)!M.hasOwnProperty(e)||e in t||(t[e]=M[e]);x.push(t)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";x.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](I({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](I({sortable:n},o)))})},initializePlugins:function(o,i,r,t){for(var e in x.forEach(function(t){var e=t.pluginName;if(o.options[e]||t.initializeByDefault){var n=new t(o,i,o.options);n.sortable=o,n.options=o.options,o[e]=n,a(r,n.defaults)}}),o.options)if(o.options.hasOwnProperty(e)){var n=this.modifyOption(o,e,o.options[e]);void 0!==n&&(o.options[e]=n)}},getEventProperties:function(e,n){var o={};return x.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return x.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function A(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,v=e.options,m="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||w||E?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var b=I({},p,O.getEventProperties(o,e));for(var y in b)g[y]=b[y];n&&n.dispatchEvent(g),v[m]&&v[m].call(e,g)}}function K(t,e,n){var o=2<arguments.length&&void 0!==n?n:{},i=o.evt,r=l(o,["evt"]);O.pluginEvent.bind(Rt)(t,e,I({dragEl:z,parentEl:G,ghostEl:U,rootEl:q,nextEl:V,lastDownEl:Z,cloneEl:Q,cloneHidden:$,dragStarted:dt,putSortable:it,activeSortable:Rt.active,originalEvent:i,oldIndex:J,oldDraggableIndex:et,newIndex:tt,newDraggableIndex:nt,hideGhostForTarget:Nt,unhideGhostForTarget:It,cloneNowHidden:function(){$=!0},cloneNowShown:function(){$=!1},dispatchSortableEvent:function(t){W({sortable:e,name:t,originalEvent:i})}},r))}function W(t){A(I({putSortable:it,cloneEl:Q,targetEl:z,rootEl:q,oldIndex:J,oldDraggableIndex:et,newIndex:tt,newDraggableIndex:nt},t))}var z,G,U,q,V,Z,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,vt=!1,mt=!1,bt=[],yt=!1,wt=!1,Et=[],Dt=!1,_t=[],St="undefined"!=typeof document,Ct=n,Tt=E||w?"cssFloat":"float",xt=St&&!i&&!n&&"draggable"in document.createElement("div"),Mt=function(){if(St){if(w)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ot=function(t,e){var n=R(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=m(t,0,e),r=m(t,1,e),a=i&&R(i),l=r&&R(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+X(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+X(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==u?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Tt]||r&&"none"===n[Tt]&&o<s+c)?"vertical":"horizontal"},At=function(t){function s(a,l){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==a&&(l||i))return!0;if(null==a||!1===a)return!1;if(l&&"clone"===a)return a;if("function"==typeof a)return s(a(t,e,n,o),l)(t,e,n,o);var r=(l?t:e).options.group.name;return!0===a||"string"==typeof a&&a===r||a.join&&-1<a.indexOf(r)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=s(n.pull,!0),e.checkPut=s(n.put),e.revertClone=n.revertClone,t.group=e},Nt=function(){!Mt&&U&&R(U,"display","none")},It=function(){!Mt&&U&&R(U,"display","")};St&&document.addEventListener("click",function(t){if(mt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),mt=!1},!0);function Pt(t){if(z){var e=function(r,a){var l;return bt.some(function(t){if(!B(t)){var e=X(t),n=t[j].options.emptyInsertThreshold,o=r>=e.left-n&&r<=e.right+n,i=a>=e.top-n&&a<=e.bottom+n;return n&&o&&i?l=t:void 0}}),l}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[j]._onDragOver(n)}}}function kt(t){z&&z.parentNode[j]._isOutsideThisEl(t.target)}function Rt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ot(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Rt.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var o in O.initializePlugins(this,t,n),n)o in e||(e[o]=n[o]);for(var i in At(e),this)"_"===i.charAt(0)&&"function"==typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&xt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?u(t,"pointerdown",this._onTapStart):(u(t,"mousedown",this._onTapStart),u(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(u(t,"dragover",this),u(t,"dragenter",this)),bt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,T())}function Xt(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return!window.CustomEvent||w||E?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||X(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),d&&(c=d.call(u,s,a)),c}function Yt(t){t.draggable=!1}function Bt(){Dt=!1}function Ft(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Ht(t){return setTimeout(t,0)}function Lt(t){return clearTimeout(t)}Rt.prototype={constructor:Rt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(ht=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,z):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(function(t){_t.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&_t.push(o)}}(o),!z&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled||s.isContentEditable||(l=P(l,t.draggable,o,!1))&&l.animated||Z===l)){if(J=F(l),et=F(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return W({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),K("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c&&(c=c.split(",").some(function(t){if(t=P(s,t.trim(),o,!1))return W({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),K("filter",n,{evt:e}),!0})))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!P(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;if(n&&!z&&n.parentNode===r){var s=X(n);if(q=r,G=(z=n).parentNode,V=z.nextSibling,Z=n,ot=a.group,rt={target:Rt.dragged=z,clientX:(e||t).clientX,clientY:(e||t).clientY},ct=rt.clientX-s.left,ut=rt.clientY-s.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,z.style["will-change"]="all",o=function(){K("delayEnded",i,{evt:t}),Rt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!c&&i.nativeDraggable&&(z.draggable=!0),i._triggerDragStart(t,e),W({sortable:i,name:"choose",originalEvent:t}),k(z,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){g(z,t.trim(),Yt)}),u(l,"dragover",Pt),u(l,"mousemove",Pt),u(l,"touchmove",Pt),u(l,"mouseup",i._onDrop),u(l,"touchend",i._onDrop),u(l,"touchcancel",i._onDrop),c&&this.nativeDraggable&&(this.options.touchStartThreshold=4,z.draggable=!0),K("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(E||w))o();else{if(Rt.eventCanceled)return void this._onDrop();u(l,"mouseup",i._disableDelayedDrag),u(l,"touchend",i._disableDelayedDrag),u(l,"touchcancel",i._disableDelayedDrag),u(l,"mousemove",i._delayedDragTouchMoveHandler),u(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&u(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){z&&Yt(z),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;d(t,"mouseup",this._disableDelayedDrag),d(t,"touchend",this._disableDelayedDrag),d(t,"touchcancel",this._disableDelayedDrag),d(t,"mousemove",this._delayedDragTouchMoveHandler),d(t,"touchmove",this._delayedDragTouchMoveHandler),d(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?u(document,"pointermove",this._onTouchMove):u(document,e?"touchmove":"mousemove",this._onTouchMove):(u(z,"dragend",this),u(q,"dragstart",this._onDragStart));try{document.selection?Ht(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(vt=!1,q&&z){K("dragStarted",this,{evt:e}),this.nativeDraggable&&u(document,"dragover",kt);var n=this.options;t||k(z,n.dragClass,!1),k(z,n.ghostClass,!0),Rt.active=this,t&&this._appendGhost(),W({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,Nt();for(var t=document.elementFromPoint(at.clientX,at.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY))!==e;)e=t;if(z.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j]){if(e[j]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);It()}},_onTouchMove:function(t){if(rt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=U&&v(U),a=U&&r&&r.a,l=U&&r&&r.d,s=Ct&&gt&&b(gt),c=(i.clientX-rt.clientX+o.x)/(a||1)+(s?s[0]-Et[0]:0)/(a||1),u=(i.clientY-rt.clientY+o.y)/(l||1)+(s?s[1]-Et[1]:0)/(l||1);if(!Rt.active&&!vt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(U){r?(r.e+=c-(lt||0),r.f+=u-(st||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");R(U,"webkitTransform",d),R(U,"mozTransform",d),R(U,"msTransform",d),R(U,"transform",d),lt=c,st=u,at=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!U){var t=this.options.fallbackOnBody?document.body:q,e=X(z,!0,Ct,!0,t),n=this.options;if(Ct){for(gt=t;"static"===R(gt,"position")&&"none"===R(gt,"transform")&&gt!==document;)gt=gt.parentNode;gt!==document.body&&gt!==document.documentElement?(gt===document&&(gt=N()),e.top+=gt.scrollTop,e.left+=gt.scrollLeft):gt=N(),Et=b(gt)}k(U=z.cloneNode(!0),n.ghostClass,!1),k(U,n.fallbackClass,!0),k(U,n.dragClass,!0),R(U,"transition",""),R(U,"transform",""),R(U,"box-sizing","border-box"),R(U,"margin",0),R(U,"top",e.top),R(U,"left",e.left),R(U,"width",e.width),R(U,"height",e.height),R(U,"opacity","0.8"),R(U,"position",Ct?"absolute":"fixed"),R(U,"zIndex","100000"),R(U,"pointerEvents","none"),Rt.ghost=U,t.appendChild(U),R(U,"transform-origin",ct/parseInt(U.style.width)*100+"% "+ut/parseInt(U.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;K("dragStart",this,{evt:t}),Rt.eventCanceled?this._onDrop():(K("setupClone",this),Rt.eventCanceled||((Q=_(z)).draggable=!1,Q.style["will-change"]="",this._hideClone(),k(Q,this.options.chosenClass,!1),Rt.clone=Q),n.cloneId=Ht(function(){K("clone",n),Rt.eventCanceled||(n.options.removeCloneOnHide||q.insertBefore(Q,z),n._hideClone(),W({sortable:n,name:"clone"}))}),e||k(z,i.dragClass,!0),e?(mt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(d(document,"mouseup",n._onDrop),d(document,"touchend",n._onDrop),d(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,z)),u(document,"drop",n),R(z,"transform","translateZ(0)")),vt=!0,n._dragStartId=Ht(n._dragStarted.bind(n,e,t)),u(document,"selectstart",n),dt=!0,s&&R(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,a,l=this.el,s=n.target,e=this.options,t=e.group,c=Rt.active,u=ot===t,d=e.sort,h=it||c,f=this,p=!1;if(!Dt){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),s=P(s,e.draggable,l,!0),M("dragOver"),Rt.eventCanceled)return p;if(z.contains(n.target)||s.animated&&s.animatingX&&s.animatingY||f._ignoreWhileAnimating===s)return A(!1);if(mt=!1,c&&!e.disabled&&(u?d||(r=!q.contains(z)):it===this||(this.lastPutMode=ot.checkPull(this,c,z,n))&&t.checkPut(this,c,z,n))){if(a="vertical"===this._getDirection(n,s),o=X(z),M("dragOverValid"),Rt.eventCanceled)return p;if(r)return G=q,O(),this._hideClone(),M("revert"),Rt.eventCanceled||(V?q.insertBefore(z,V):q.appendChild(z)),A(!0);var g=B(l,e.draggable);if(!g||function(t,e,n){var o=X(B(n.el,n.options.draggable));return e?t.clientX>o.right+10||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+10}(n,a,this)&&!g.animated){if(g===z)return A(!1);if(g&&l===n.target&&(s=g),s&&(i=X(s)),!1!==Xt(q,l,z,o,s,i,n,!!s))return O(),l.appendChild(z),G=l,N(),A(!0)}else if(s.parentNode===l){i=X(s);var v,m,b,y=z.parentNode!==l,w=!function(t,e,n){var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,l=n?e.right:e.bottom,s=n?e.width:e.height;return o===a||i===l||o+r/2===a+s/2}(z.animated&&z.toRect||o,s.animated&&s.toRect||i,a),E=a?"top":"left",D=Y(s,"top","top")||Y(z,"top","top"),_=D?D.scrollTop:void 0;if(ht!==s&&(m=i[E],yt=!1,wt=!w&&e.invertSwap||y),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&pt<c*i){if(!yt&&(1===ft?u+c*r/2<s:s<d-c*r/2)&&(yt=!0),yt)h=!0;else if(1===ft?s<u+pt:d-pt<s)return-ft}else if(u+c*(1-i)/2<s&&s<d-c*(1-i)/2)return function(t){return F(z)<F(t)?1:-1}(e);if((h=h||a)&&(s<u+c*r/2||d-c*r/2<s))return u+c/2<s?1:-1;return 0}(n,s,i,a,w?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,wt,ht===s)))for(var S=F(z);S-=v,(b=G.children[S])&&("none"===R(b,"display")||b===U););if(0===v||b===s)return A(!1);ft=v;var C=(ht=s).nextElementSibling,T=!1,x=Xt(q,l,z,o,s,i,n,T=1===v);if(!1!==x)return 1!==x&&-1!==x||(T=1===x),Dt=!0,setTimeout(Bt,30),O(),T&&!C?l.appendChild(z):s.parentNode.insertBefore(z,T?C:s),D&&L(D,0,_-D.scrollTop),G=z.parentNode,void 0===m||wt||(pt=Math.abs(m-X(s)[E])),N(),A(!0)}if(l.contains(z))return A(!1)}return!1}function M(t,e){K(t,f,I({evt:n,isOwner:u,axis:a?"vertical":"horizontal",revert:r,dragRect:o,targetRect:i,canSort:d,fromSortable:h,target:s,completed:A,onMove:function(t,e){return Xt(q,l,z,o,t,X(t),n,e)},changed:N},e))}function O(){M("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState()}function A(t){return M("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(k(z,it?it.options.ghostClass:c.options.ghostClass,!1),k(z,e.ghostClass,!0)),it!==f&&f!==Rt.active?it=f:f===Rt.active&&it&&(it=null),h===f&&(f._ignoreWhileAnimating=s),f.animateAll(function(){M("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(s===z&&!z.animated||s===l&&!s.animated)&&(ht=null),e.dragoverBubble||n.rootEl||s===document||(z.parentNode[j]._isOutsideThisEl(n.target),t||Pt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=!0}function N(){tt=F(z),nt=F(z,e.draggable),W({sortable:f,name:"change",toEl:l,newIndex:tt,newDraggableIndex:nt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){d(document,"mousemove",this._onTouchMove),d(document,"touchmove",this._onTouchMove),d(document,"pointermove",this._onTouchMove),d(document,"dragover",Pt),d(document,"mousemove",Pt),d(document,"touchmove",Pt)},_offUpEvents:function(){var t=this.el.ownerDocument;d(t,"mouseup",this._onDrop),d(t,"touchend",this._onDrop),d(t,"pointerup",this._onDrop),d(t,"touchcancel",this._onDrop),d(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;tt=F(z),nt=F(z,n.draggable),K("drop",this,{evt:t}),G=z&&z.parentNode,tt=F(z),nt=F(z,n.draggable),Rt.eventCanceled||(yt=wt=vt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Lt(this.cloneId),Lt(this._dragStartId),this.nativeDraggable&&(d(document,"drop",this),d(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),s&&R(document.body,"user-select",""),t&&(dt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),U&&U.parentNode&&U.parentNode.removeChild(U),(q===G||it&&"clone"!==it.lastPutMode)&&Q&&Q.parentNode&&Q.parentNode.removeChild(Q),z&&(this.nativeDraggable&&d(z,"dragend",this),Yt(z),z.style["will-change"]="",dt&&!vt&&k(z,it?it.options.ghostClass:this.options.ghostClass,!1),k(z,this.options.chosenClass,!1),W({sortable:this,name:"unchoose",toEl:G,newIndex:null,newDraggableIndex:null,originalEvent:t}),q!==G?(0<=tt&&(W({rootEl:G,name:"add",toEl:G,fromEl:q,originalEvent:t}),W({sortable:this,name:"remove",toEl:G,originalEvent:t}),W({rootEl:G,name:"sort",toEl:G,fromEl:q,originalEvent:t}),W({sortable:this,name:"sort",toEl:G,originalEvent:t})),it&&it.save()):tt!==J&&0<=tt&&(W({sortable:this,name:"update",toEl:G,originalEvent:t}),W({sortable:this,name:"sort",toEl:G,originalEvent:t})),Rt.active&&(null!=tt&&-1!==tt||(tt=J,nt=et),W({sortable:this,name:"end",toEl:G,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){K("nulling",this),q=z=G=U=V=Q=Z=$=rt=at=dt=tt=nt=J=et=ht=ft=it=ot=Rt.dragged=Rt.ghost=Rt.clone=Rt.active=null,_t.forEach(function(t){t.checked=!0}),_t.length=lt=st=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":z&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)P(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Ft(t));return e},sort:function(t){var o={},i=this.el;this.toArray().forEach(function(t,e){var n=i.children[e];P(n,this.options.draggable,i,!1)&&(o[t]=n)},this),t.forEach(function(t){o[t]&&(i.removeChild(o[t]),i.appendChild(o[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return P(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=O.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&At(n)},destroy:function(){K("destroy",this);var t=this.el;t[j]=null,d(t,"mousedown",this._onTapStart),d(t,"touchstart",this._onTapStart),d(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(d(t,"dragover",this),d(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),bt.splice(bt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!$){if(K("hideClone",this),Rt.eventCanceled)return;R(Q,"display","none"),this.options.removeCloneOnHide&&Q.parentNode&&Q.parentNode.removeChild(Q),$=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if($){if(K("showClone",this),Rt.eventCanceled)return;q.contains(z)&&!this.options.group.revertClone?q.insertBefore(Q,z):V?q.insertBefore(Q,V):q.appendChild(Q),this.options.group.revertClone&&this.animate(z,Q),R(Q,"display",""),$=!1}}else this._hideClone()}},St&&u(document,"touchmove",function(t){(Rt.active||vt)&&t.cancelable&&t.preventDefault()}),Rt.utils={on:u,off:d,css:R,find:g,is:function(t,e){return!!P(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:D,closest:P,toggleClass:k,clone:_,index:F,nextTick:Ht,cancelNextTick:Lt,detectDirection:Ot,getChild:m},Rt.get=function(t){return t[j]},Rt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Rt.utils=I({},Rt.utils,t.utils)),O.mount(t)})},Rt.create=function(t,e){return new Rt(t,e)};var jt,Kt,Wt,zt,Gt,Ut,qt=[],Vt=!(Rt.version="1.10.1");function Zt(){qt.forEach(function(t){clearInterval(t.pid)}),qt=[]}function Qt(){clearInterval(Ut)}function $t(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var s=n||i;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(c.clientX,c.clientY);l(),s&&!s.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}}var Jt,te=D(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=N(),u=!1;Kt!==e&&(Kt=e,Zt(),jt=t.scroll,i=t.scrollFn,!0===jt&&(jt=H(e,!0)));var d=0,h=jt;do{var f=h,p=X(f),g=p.top,v=p.bottom,m=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,_=f.scrollWidth,S=f.scrollHeight,C=R(f),T=f.scrollLeft,x=f.scrollTop;D=f===c?(E=y<_&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<S&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<_&&("auto"===C.overflowX||"scroll"===C.overflowX),w<S&&("auto"===C.overflowY||"scroll"===C.overflowY));var M=E&&(Math.abs(b-r)<=l&&T+y<_)-(Math.abs(m-r)<=l&&!!T),O=D&&(Math.abs(v-a)<=l&&x+w<S)-(Math.abs(g-a)<=l&&!!x);if(!qt[d])for(var A=0;A<=d;A++)qt[A]||(qt[A]={});qt[d].vx==M&&qt[d].vy==O&&qt[d].el===f||(qt[d].el=f,qt[d].vx=M,qt[d].vy=O,clearInterval(qt[d].pid),0==M&&0==O||(u=!0,qt[d].pid=setInterval(function(){o&&0===this.layer&&Rt.active._onTouchMove(Gt);var t=qt[this.layer].vy?qt[this.layer].vy*s:0,e=qt[this.layer].vx?qt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Rt.dragged.parentNode[j],e,t,n,Gt,qt[this.layer].el)||L(qt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=H(h,!1)));Vt=u}},30);function ee(){}function ne(){}ee.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=m(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:$t},a(ee,{pluginName:"revertOnSpill"}),ne.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:$t},a(ne,{pluginName:"removeOnSpill"});var oe,ie,re,ae,le,se=[],ce=[],ue=!1,de=!1,he=!1;function fe(o,i){ce.forEach(function(t,e){var n=i.children[t.sortableIndex+(o?Number(e):0)];n?i.insertBefore(t,n):i.appendChild(t)})}function pe(){se.forEach(function(t){t!==re&&t.parentNode&&t.parentNode.removeChild(t)})}return Rt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?u(document,"dragover",this._handleAutoScroll):this.options.supportPointer?u(document,"pointermove",this._handleFallbackAutoScroll):e.touches?u(document,"touchmove",this._handleFallbackAutoScroll):u(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?d(document,"dragover",this._handleAutoScroll):(d(document,"pointermove",this._handleFallbackAutoScroll),d(document,"touchmove",this._handleFallbackAutoScroll),d(document,"mousemove",this._handleFallbackAutoScroll)),Qt(),Zt(),clearTimeout(f),f=void 0},nulling:function(){Gt=Kt=jt=Vt=Ut=Wt=zt=null,qt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o=this,i=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(i,r);if(Gt=e,n||E||w||s){te(e,this.options,t,n);var a=H(t,!0);!Vt||Ut&&i===Wt&&r===zt||(Ut&&Qt(),Ut=setInterval(function(){var t=H(document.elementFromPoint(i,r),!0);t!==a&&(a=t,Zt()),te(e,o.options,t,n)},10),Wt=i,zt=r)}else{if(!this.options.bubbleScroll||H(t,!0)===N())return void Zt();te(e,this.options,H(t,!1),!1)}}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Rt.mount(ne,ee),Rt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){var e=t.dragEl;Jt=e},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;if(i.options.swap){var l=this.sortable.el,s=this.options;if(n&&n!==l){var c=Jt;Jt=!1!==o(n)?(k(n,s.swapClass,!0),n):null,c&&c!==Jt&&k(c,s.swapClass,!1)}r(),e(!0),a()}},drop:function(t){var e=t.activeSortable,n=t.putSortable,o=t.dragEl,i=n||this.sortable,r=this.options;Jt&&k(Jt,r.swapClass,!1),Jt&&(r.swap||n&&n.options.swap)&&o!==Jt&&(i.captureAnimationState(),i!==e&&e.captureAnimationState(),function(t,e){var n,o,i=t.parentNode,r=e.parentNode;if(!i||!r||i.isEqualNode(e)||r.isEqualNode(t))return;n=F(t),o=F(e),i.isEqualNode(r)&&n<o&&o++;i.insertBefore(e,i.children[n]),r.insertBefore(t,r.children[o])}(o,Jt),i.animateAll(),i!==e&&e.animateAll())},nulling:function(){Jt=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Jt}}})}),Rt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.supportPointer?u(document,"pointerup",this._deselectMultiDrag):(u(document,"mouseup",this._deselectMultiDrag),u(document,"touchend",this._deselectMultiDrag)),u(document,"keydown",this._checkKeyDown),u(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,e){var n="";se.length&&ie===o?se.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){var e=t.dragEl;re=e},delayEnded:function(){this.isMultiDrag=~se.indexOf(re)},setupClone:function(t){var e=t.sortable,n=t.cancel;if(this.isMultiDrag){for(var o=0;o<se.length;o++)ce.push(_(se[o])),ce[o].sortableIndex=se[o].sortableIndex,ce[o].draggable=!1,ce[o].style["will-change"]="",k(ce[o],this.options.selectedClass,!1),se[o]===re&&k(ce[o],this.options.chosenClass,!1);e._hideClone(),n()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,i=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||se.length&&ie===e&&(fe(!0,n),o("clone"),i()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,o=t.cancel;this.isMultiDrag&&(fe(!1,n),ce.forEach(function(t){R(t,"display","")}),e(),le=!1,o())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),o=t.cancel;this.isMultiDrag&&(ce.forEach(function(t){R(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),le=!0,o())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&ie&&ie.multiDrag._deselectMultiDrag(),se.forEach(function(t){t.sortableIndex=F(t)}),se=se.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),he=!0},dragStarted:function(t){var e=this,n=t.sortable;if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){se.forEach(function(t){t!==re&&R(t,"position","absolute")});var o=X(re,!1,!0,!0);se.forEach(function(t){t!==re&&S(t,o)}),ue=de=!0}n.animateAll(function(){ue=de=!1,e.options.animation&&se.forEach(function(t){C(t)}),e.options.sort&&pe()})}},dragOver:function(t){var e=t.target,n=t.completed,o=t.cancel;de&&~se.indexOf(e)&&(n(!1),o())},revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect;1<se.length&&(se.forEach(function(t){o.addAnimationState({target:t,rect:de?X(t):i}),C(t),t.fromRect=i,e.removeAnimationState(t)}),de=!1,function(o,i){se.forEach(function(t,e){var n=i.children[t.sortableIndex+(o?Number(e):0)];n?i.insertBefore(t,n):i.appendChild(t)})}(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(t){var e=t.sortable,n=t.isOwner,o=t.insertion,i=t.activeSortable,r=t.parentEl,a=t.putSortable,l=this.options;if(o){if(n&&i._hideClone(),ue=!1,l.animation&&1<se.length&&(de||!n&&!i.options.sort&&!a)){var s=X(re,!1,!0,!0);se.forEach(function(t){t!==re&&(S(t,s),r.appendChild(t))}),de=!0}if(!n)if(de||pe(),1<se.length){var c=le;i._showClone(e),i.options.animation&&!le&&c&&ce.forEach(function(t){i.addAnimationState({target:t,rect:ae}),t.fromRect=ae,t.thisAnimationDuration=null})}else i._showClone(e)}},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(se.forEach(function(t){t.thisAnimationDuration=null}),o.options.animation&&!n&&o.multiDrag.isMultiDrag){ae=a({},e);var i=v(re,!0);ae.top-=i.f,ae.left-=i.e}},dragOverAnimationComplete:function(){de&&(de=!1,pe())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c=this.options,u=o.children;if(!he)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),k(re,c.selectedClass,!~se.indexOf(re)),~se.indexOf(re))se.splice(se.indexOf(re),1),oe=null,A({sortable:i,rootEl:n,name:"deselect",targetEl:re,originalEvt:e});else{if(se.push(re),A({sortable:i,rootEl:n,name:"select",targetEl:re,originalEvt:e}),e.shiftKey&&oe&&i.el.contains(oe)){var d,h,f=F(oe),p=F(re);if(~f&&~p&&f!==p)for(d=f<p?(h=f,p):(h=p,f+1);h<d;h++)~se.indexOf(u[h])||(k(u[h],c.selectedClass,!0),se.push(u[h]),A({sortable:i,rootEl:n,name:"select",targetEl:u[h],originalEvt:e}))}else oe=re;ie=s}if(he&&this.isMultiDrag){if((o[j].options.sort||o!==n)&&1<se.length){var g=X(re),v=F(re,":not(."+this.options.selectedClass+")");if(!ue&&c.animation&&(re.thisAnimationDuration=null),s.captureAnimationState(),!ue&&(c.animation&&(re.fromRect=g,se.forEach(function(t){if(t.thisAnimationDuration=null,t!==re){var e=de?X(t):g;t.fromRect=e,s.addAnimationState({target:t,rect:e})}})),pe(),se.forEach(function(t){u[v]?o.insertBefore(t,u[v]):o.appendChild(t),v++}),a===F(re))){var m=!1;se.forEach(function(t){t.sortableIndex===F(t)||(m=!0)}),m&&r("update")}se.forEach(function(t){C(t)}),s.animateAll()}ie=s}(n===o||l&&"clone"!==l.lastPutMode)&&ce.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=he=!1,ce.length=0},destroyGlobal:function(){this._deselectMultiDrag(),d(document,"pointerup",this._deselectMultiDrag),d(document,"mouseup",this._deselectMultiDrag),d(document,"touchend",this._deselectMultiDrag),d(document,"keydown",this._checkKeyDown),d(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!he&&ie===this.sortable&&!(t&&P(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;se.length;){var e=se[0];k(e,this.options.selectedClass,!1),se.shift(),A({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~se.indexOf(t)&&(ie&&ie!==e&&(ie.multiDrag._deselectMultiDrag(),ie=e),k(t,e.options.selectedClass,!0),se.push(t))},deselect:function(t){var e=t.parentNode[j],n=se.indexOf(t);e&&e.options.multiDrag&&~n&&(k(t,e.options.selectedClass,!1),se.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return se.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=de&&t!==re?-1:de?F(t,":not(."+n.options.selectedClass+")"):F(t),i.push({multiDragElement:t,index:e})}),{items:e(se),clones:[].concat(ce),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Rt});

//custom functions
function scrolltop(){document.body.scrollTop=0,document.documentElement.scrollTop=0};
function sleep(ms){return new Promise(resolve => setTimeout(resolve, ms));}
function removeA(e){for(var n,r,f=arguments,o=f.length;o>1&&e.length;)for(n=f[--o];-1!==(r=e.indexOf(n));)e.splice(r,1);return e};
function ucfirst(n){return n.charAt(0).toUpperCase()+n.slice(1)};
function opener(n){var t=$("#"+n);if(t.css("display")=="none"){t.show()}else{t.hide()}}
function toggledit(r,e){if(x(r).css('display')=='none'){x(e).hide();x(r).show();}else{x(e).show();x(r).hide()}};
function btype_from_buscat(t){return t<13?1:13==t?2:14==t?3:t>14&&t<21?4:t>20&&t<25?5:t>24&&t<39?6:t>38&&t<49?7:t>48&&t<98?8:t>97&&t<105?9:t>104&&t<118?10:t>117&&t<129?11:t>128&&t<147?12:t>146&&t<155?13:t>154&&t<158?14:t>157&&t<165?15:t>164&&t<167?16:t>166&&t<170?17:t>169&&t<174?18:t>173&&t<177?19:t>176&&t<183?20:t>182&&t<187?21:t>186&&t<190?22:t>189&&t<199?23:199==t?24:void 0};
function sublist(array,list){var newl={};for(var i in list){newl[list[i]]=array[list[i]];}return newl;};
function roundrank(rank){if(rank>0){var arank=rank/2;return (Math.ceil(arank/5)*5);}};
function similarity(t,e){var n=t,a=e;t.length<e.length&&(n=e,a=t);var i=n.length;return 0==i?1:(i-editDistance(n,a))/parseFloat(i)};
function editDistance(e,t){e=e.toLowerCase(),t=t.toLowerCase();for(var r=new Array,a=0;a<=e.length;a++){for(var n=a,h=0;h<=t.length;h++)if(0==a)r[h]=h;else if(h>0){var i=r[h-1];e.charAt(a-1)!=t.charAt(h-1)&&(i=Math.min(Math.min(i,n),r[h])+1),r[h-1]=n,n=i}a>0&&(r[t.length]=n)}return r[t.length]};
function array_combine(e,t){var r={},n=e&&e.length,o=0;if("object"!=typeof e||"object"!=typeof t||"number"!=typeof n||"number"!=typeof t.length||!n)return!1;if(n!=t.length)return!1;for(o=0;o<n;o++)r[e[o]]=t[o];return r};
function array_unique($a) {return [...new Set($a)];};
function range(r,a,N){var i,o,s=[],e=N||1,f=!1;if(isNaN(r)||isNaN(a)?isNaN(r)&&isNaN(a)?(f=!0,i=r.charCodeAt(0),o=a.charCodeAt(0)):(i=isNaN(r)?0:r,o=isNaN(a)?0:a):(i=r,o=a),!(i>o))for(;i<=o;)s.push(f?String.fromCharCode(i):i),i+=e;else for(;i>=o;)s.push(f?String.fromCharCode(i):i),i-=e;return s};
function opener2(n,t){var e=$("#"+n);void 0!==t&&"close"==t?e.css("display","none"):"none"==e.css("display")?e.css("display","block"):e.css("display","none")};
function opener3(s,n){var e=x("#"+s);if("none"==e.css("display"))for(var i in e.css("display","block"),n)x("#"+n[i]).css("display","none");else e.css("display","none")};
function hash(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return n()+n()+n()+n()+n()+n()+n()+n()};
function in_array(a,b){return b.includes(a);};
function iconic(n){if(!!n){return n.includes("icon_") ? n : (n.includes("uploads") ? n.replace("uploads/","uploads/thumbs/icon_"):G.UPLOADS+n)}else{return '/img/noimage.jpg';}};
function aniconic(n){return n.includes("icon_") ? n.replace("thumbs/icon_",""): n};
function strtotime(n){return Date.parse(n)/1e3};function timestamp(n){var t=(n=n.split("-"))[1]+"/"+n[0]+"/"+n[2];return new Date(t).getTime()}function explode(n,t,e){if(arguments.length<2||void 0===n||void 0===t)return null;if(""===n||!1===n||null===n)return!1;if("function"==typeof n||"object"==typeof n||"function"==typeof t||"object"==typeof t)return{0:""};!0===n&&(n="1");var r=(t+="").split(n+="");return void 0===e?r:(0===e&&(e=1),e>0?e>=r.length?r:r.slice(0,e-1).concat([r.slice(e-1).join(n)]):-e>=r.length?[]:(r.splice(r.length+e),r))};
function sizeobj(n){var t,e=0;for(t in n)n.hasOwnProperty(t)&&e++;return e};
function scrollBottom(n){n=n||"chat";if(0!=x("#"+n).length){var t=$("#"+n)[0].scrollHeight;$("#"+n).scrollTop(t)}};
function array_flip(n){var t,e={};if(n&&"object"==typeof n&&n.change_key_case)return n.flip();for(t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e};
function date(n,t){var e,r,o=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],u=/\\?(.?)/gi,i=function(n,t){return r[n]?r[n]():t},c=function(n,t){for(n=String(n);n.length<t;)n="0"+n;return n};return r={d:function(){return c(r.j(),2)},D:function(){return r.l().slice(0,3)},j:function(){return e.getDate()},l:function(){return o[r.w()]+"day"},N:function(){return r.w()||7},S:function(){var n=r.j(),t=n%10;return t<=3&&1==parseInt(n%100/10,10)&&(t=0),["st","nd","rd"][t-1]||"th"},w:function(){return e.getDay()},z:function(){var n=new Date(r.Y(),r.n()-1,r.j()),t=new Date(r.Y(),0,1);return Math.round((n-t)/864e5)},W:function(){var n=new Date(r.Y(),r.n()-1,r.j()-r.N()+3),t=new Date(n.getFullYear(),0,4);return c(1+Math.round((n-t)/864e5/7),2)},F:function(){return o[6+r.n()]},m:function(){return c(r.n(),2)},M:function(){return r.F().slice(0,3)},n:function(){return e.getMonth()+1},t:function(){return new Date(r.Y(),r.n(),0).getDate()},L:function(){var n=r.Y();return n%4==0&n%100!=0|n%400==0},o:function(){var n=r.n(),t=r.W();return r.Y()+(12===n&&t<9?1:1===n&&t>9?-1:0)},Y:function(){return e.getFullYear()},y:function(){return r.Y().toString().slice(-2)},a:function(){return e.getHours()>11?"pm":"am"},A:function(){return r.a().toUpperCase()},B:function(){var n=3600*e.getUTCHours(),t=60*e.getUTCMinutes(),r=e.getUTCSeconds();return c(Math.floor((n+t+r+3600)/86.4)%1e3,3)},g:function(){return r.G()%12||12},G:function(){return e.getHours()},h:function(){return c(r.g(),2)},H:function(){return c(r.G(),2)},i:function(){return c(e.getMinutes(),2)},s:function(){return c(e.getSeconds(),2)},u:function(){return c(1e3*e.getMilliseconds(),6)},e:function(){throw"Not supported (see source code of date() for timezone on how to add support)"},I:function(){return new Date(r.Y(),0)-Date.UTC(r.Y(),0)!=new Date(r.Y(),6)-Date.UTC(r.Y(),6)?1:0},O:function(){var n=e.getTimezoneOffset(),t=Math.abs(n);return(n>0?"-":"+")+c(100*Math.floor(t/60)+t%60,4)},P:function(){var n=r.O();return n.substr(0,3)+":"+n.substr(3,2)},T:function(){return"T"},Z:function(){return 60*-e.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(u,i)},r:function(){return"D, d M Y H:i:s O".replace(u,i)},U:function(){return e/1e3|0}},this.date=function(n,t){return e=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t),n.replace(u,i)},this.date(n,t)};
function toggle_edit(n,t){var e=x("#"+n),r=x("#"+t);if("none"==e.css("display"))r.hide("fast"),e.show("fast");else{r.show("fast"),e.hide("fast")}};
function opener_more(e,n,o){"none"==x("#"+e).css("display")?(x("#"+e).show("normal"),x("#"+n).text("<<"+dic.LESS)):(x("#"+e).hide("normal"),x("#"+n).text(dic.MORE+">>"))}
function previous_page(){var previous_page = document.referrer;var pp = previous_page.split('/');return pp[3];};function greeklish(str){var str=str.replace(/[\#\[\]\/\{\}\(\)\*\<\>\%\@\:\>\<\~\"\'\=\*\+\!\;\-\,\?\.\\\^\$\|]/g, "");var greekLetters=[' ','α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','ο','π','ρ','σ','τ','υ','φ','χ','ψ','ω','Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Ι','Κ','Λ','Μ','Ν','Ξ','Ο','Π','Ρ','Σ','Τ','Υ','Φ','Χ','Ψ','Ω','ά','έ','ή','ί','ό','ύ','ώ','ς'],enLetters=['_','a','v','g','d','e','z','i','th','i','k','l','m','n','x','o','p','r','s','t','u','f','h','ps','o','A','B','G','D','E','Z','I','Th','I','K','L','M','N','X','O','P','R','S','T','Y','F','Ch','Ps','O','a','e','i','i','o','u','o','s'];string=str_replace(greekLetters,enLetters,str);return string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')};function str_replace(t,o,n,r){var c,e=0,i=0,l="",a="",g=0,h=[].concat(t),p=[].concat(o),j=n,b="[object Array]"===Object.prototype.toString.call(p),f="[object Array]"===Object.prototype.toString.call(j);for(j=[].concat(j),r&&(this.window[r]=0),e=0,c=j.length;e<c;e++)if(""!==j[e])for(i=0,g=h.length;i<g;i++)l=j[e]+"",a=b?void 0!==p[i]?p[i]:"":p[0],j[e]=l.split(h[i]).join(a),r&&j[e]!==l&&(this.window[r]+=(l.length-j[e].length)/h[i].length);return f?j:j[0]};function reset(divid){x('#'+divid).html('');x('#speedloaderCon').show();};function resetNoLoader(divid){x('#'+divid).html('');}
function isjson(str){try {var x=JSON.parse(str);return x;} catch (e) {return str;}};
function isFunction(checkedfunction){return checkedfunction && {}.toString.call(checkedfunction)==='[object Function]'};
function timediff(e){var r=Date.now(),a=1e3*e,o=r-a;if(o<0){var n=a-r;return n<6e4?Math.round(n/1e3)+" SECONDS":n<36e5?Math.round(n/6e4)+" MINUTES":n<864e5?Math.round(n/36e5)+" HOURS":n<2592e6?Math.round(n/864e5)+" DAYS":n<31536e6?"approx "+Math.round(n/2592e6)+" MONTHS":"approx "+Math.round(n/31536e6)+" YEARS1"}return o<6e4?Math.round(o/1e3)+" SECONDS AGO":o<36e5?Math.round(o/6e4)+" MINUTES AGO":o<864e5?Math.round(o/36e5)+" HOURS AGO":o<2592e6?Math.round(o/864e5)+" DAYS AGO":o<31536e6?"approx "+Math.round(o/2592e6)+" MONTHS AGO":"approx "+Math.round(o/31536e6)+" YEARS1 AGO"};
function inverse(obj){var retobj = {};for(var key in obj){retobj[obj[key]] = key;}return retobj;}
function getKeyWithHighestValue(obj) {return Object.entries(obj).reduce((max, entry) => {return entry[1] > max[1] ? entry : max;})[0];}
function sanitizeFilename(filename) {filename = filename.replace(/\s+/g, '_');        filename = filename.replace(/[^a-zA-Z0-9._\-]/g, '');return filename;}
function get_top_words(titles){
    const stopWords = new Set([
        'ο', 'η','ή','no', 'το', 'και', 'ένα', 'μια', 'στο', 'του', 'της', 'των', 'σε', 'με', 'για', 'είναι', 
        'που', 'αυτό', 'αυτή', 'αυτά', 'αυτός', 'αυτές', 'εκείνος', 'εκείνη', 'εκείνα', 'εκείνος', 'το', 
        'τα', 'οι', 'τους', 'τις', 'στον', 'στην', 'στο', 'από', 'ως', 'έως', 'έναν', 'κάποια', 'αυτός'
    ]);
	 function countWords(titles) {
        const count = {};
        titles.forEach(title => {
              const words = title.toLowerCase().split(/[\s.,!?;()]+/u).filter(word => !stopWords.has(word) && word.length > 0);
            words.forEach(word => {
                count[word] = (count[word] || 0) + 1;
            });
        });
        return count;
    }
	 // Get the frequency count of words
    const wordCounts = countWords(titles);
    // Convert the count object to an array of [word, count] pairs
    const wordCountPairs = Object.entries(wordCounts);
    // Sort the array by count in descending order
    wordCountPairs.sort((a, b) => b[1] - a[1]);
    const top5Words = wordCountPairs.slice(0, 5).map(pair => pair[0]);
	return top5Words;	
}
function search_googlebookapi(q){
	var query=q || "Πρόσφατες Εκδόσεις"
    $.get("https://www.googleapis.com/books/v1/volumes?q="+query,{},function(res){
        console.log(res)
        var items='';
        // var res= JSON.parse(res);
        for(var i in res.items){
            items += '<li class="item"><b>'+res.items[i].volumeInfo.title+'</b>' +
                (typeof res.items[i].volumeInfo.imageLinks!='undefined' ? '<img src="'+res.items[i].volumeInfo.imageLinks.thumbnail+'">':'') +
                (typeof res.items[i].volumeInfo.subtitle!='undefined' ? '<p>'+res.items[i].volumeInfo.subtitle+'</p>':'') +
                '</li>';
        }
        // $('#inforeply').html('<h2>'+res.AbstractText+'</h2>');
        $('#finfos').html(items)
        // $( "#finfos" ).after('<button id="savefinfo">Save Info</button>');
        // $('#bookimg').attr('src',)
    })
}

var ses=function(a,b){var s=sessionStorage;if(!a){return Object(s);}else if(!b){return s.getItem(a)||false;}else{s.setItem(a,b)}};ses.del=function(a){if(Array.isArray(a)){for(var i in a){sessionStorage.removeItem(a[i])}}else{sessionStorage.removeItem(a);}};ses.clear=function(){sessionStorage.clear();}					
var local=function(a,b){var s=localStorage;if(!a){return Object(s);}else if(!b){return s.getItem(a)||false;}else{s.setItem(a,b)}};local.del=function(a){if(Array.isArray(a)){for(var i in a){localStorage.removeItem(a[i])}}else{localStorage.removeItem(a)}};local.clear=function(){localStorage.clear()}	
var coo=function(a,b,time,domain){
	var d=document.cookie,h,clear;
	h=window.location.host.split('.');base=h.length==3 ? (h[1]+"."+h[2]):window.location.host;
	if(!a){var coos=d.split(';');var cooks,ret={};for(var i in coos){var cooks=coos[i].split("=");ret[cooks[0].trim()]=cooks[1];}return ret;
	}else if(!b){var r;return (r=RegExp('(^|; )' + encodeURIComponent(a)+'=([^;]*)').exec(d)) ? r[2]:false;
	}else{	
	var dmn=!domain ?(base ?";domain="+base:""):";domain="+domain;
	if(d.indexOf(a)>=0){document.cookie=name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";};
	var now=s.Dat(),nowtime=now.getTime(),expireTime=!time ? nowtime+ 1000*36000*1000 : nowtime + (time*1000);now.setTime(expireTime);
	document.cookie=a+"="+b+";expires="+now.toUTCString()+";"+dmn+";path=/;SameSite=None;Secure";}
	};
coo.del=function(a,b){
	var h=window.location.host.split('.');var base=h.length==3 ? (h[1]+"."+h[2]):window.location.host;
	var dmn=!b?(base!=null?";domain="+'.'+base:""):";domain="+b;
	if(Array.isArray(a)){for(var i in a){document.cookie=a[i]+"=;"+dmn+";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;max-age=0";}}else{document.cookie = a+"=;"+dmn+";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;max-age=0";}};
coo.delAll=function(except){var coos=document.cookie.split(";");for(var i=0;i<coos.length;i++){var cookie=coos[i];var eqPos=cookie.indexOf("=");var name=eqPos >-1 ? cookie.substr(0,eqPos).trim() : cookie.trim();if (!except.includes(name)){coo.del(name);}}};    
//s object root
var s= {
    maria: "gs_api",
    mongo: "gaia",
    ses: function (a, b) {
        var ss = sessionStorage;
        if (!a) {
            return Object(ss);
        } else if (!b) {
            return ss.getItem(a) || false;
        } else {
            ss.setItem(a, b)
        }
    },
    sesdel: function (a) {
        if (Array.isArray(a)) {
            for (var i in a) {
                sessionStorage.removeItem(a[i])
            }
        } else {
            sessionStorage.removeItem(a);
        }
    },
    sesclear:function () {
        sessionStorage.clear();
    },
    local: function (a, b) {
        var s = localStorage;
        if (!a) {
            return Object(s);
        } else if (!b) {
            return s.getItem(a) || false;
        } else {
            s.setItem(a, b)
        }
    },
    localdel:function (a) {
        if (Array.isArray(a)) {
            for (var i in a) {
                localStorage.removeItem(a[i])
            }
        } else {
            localStorage.removeItem(a)
        }
    },
    localclear: function () {
        localStorage.clear()
    },
    coo: function (a, b, time, domain) {
        var d = document.cookie, h, clear;
        h = window.location.host.split('.');
        base = h.length == 3 ? (h[1] + "." + h[2]) : window.location.host;
        if (!a) {
            var coos = d.split(';');
            var cooks, ret = {};
            for (var i in coos) {
                var cooks = coos[i].split("=");
                ret[cooks[0].trim()] = cooks[1];
            }
            return ret;
        } else if (!b) {
            var r;
            return (r = RegExp('(^|; )' + encodeURIComponent(a) + '=([^;]*)').exec(d)) ? r[2] : false;
        } else {
            var dmn = !domain ? (base ? ";domain=" + base : "") : ";domain=" + domain;
            if (d.indexOf(a) >= 0) {
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            }
            ;
            var now = s.Dat(), nowtime = now.getTime(),
                expireTime = !time ? nowtime + 1000 * 36000 * 1000 : nowtime + (time * 1000);
            now.setTime(expireTime);
            document.cookie = a + "=" + b + ";expires=" + now.toUTCString() + ";" + dmn + ";path=/;SameSite=None;Secure";
        }
    },
    coodel: function (a, b) {
        var h = window.location.host.split('.');
        var base = h.length == 3 ? (h[1] + "." + h[2]) : window.location.host;
        var dmn = !b ? (base != null ? ";domain=" + '.' + base : "") : ";domain=" + b;
        if (Array.isArray(a)) {
            for (var i in a) {
                document.cookie = a[i] + "=;" + dmn + ";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;max-age=0";
            }
        } else {
            document.cookie = a + "=;" + dmn + ";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;max-age=0";
        }
    },
    coodelAll: function (except) {
        var coos = document.cookie.split(";");
        for (var i = 0; i < coos.length; i++) {
            var cookie = coos[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
            if (!except.includes(name)) {
                coo.del(name);
            }
        }
    },
    regex: (val) => {
        return typeof val == "string" && val.charAt(val.length - 1) === '*' ? new RegExp(val.substring(0, val.length - 1), 'i') : val;
    },
    get: typeof G != 'undefined' ? G : '',
    hash_target: window.location.hash.split('#')[1],
    ajaxfile: '/ajax.php',
    clijax: '/gaia/dsh/clijax.php',
    hostArray: window.location.host.split('.'),
    host: function () {
        if (this.hostArray[0] == 'www') {
            this.hostArray.splice(0, 1);
        }
        return this.hostArray.join('.');
    },
    country: typeof window.location.host.toString().split('.')[2] != 'undefined'
        ? window.location.host.toString().split('.')[2]
        : window.location.host.toString().split('.')[1],
    serverbase: function () {
        return this.hostArray.length == 3 ? this.hostArray[1] + "." + this.hostArray[2] : window.location.host
    },
    path: {
        plugins: '/plugins/',
        images: '/gaia/img/',
        uploads: '/media/',
        thumbs: '/media/thumbs/',
        modules: '/modules/',
        templates: '/templates/',
        ajax: '/gaia/gajax.php',
        css: '/gaia/css/',
        lib: '/gaia/lib/',
    },
    curdir: window.location.href.toString().split('/')[3],
    urlfile: typeof window.location.href.toString().split('/')[3] == 'undefined'
        ? window.location.href.toString().split('/')[2]
        : window.location.href.toString().split('/')[3],
    url: window.location.pathname,
    lastget: function () {return window.location.pathname.substring(this.url.lastIndexOf('/') + 1);},
    loc: window.country,
    i: function (val) {
        return parseInt(val)
    },
    isWorkersAvailable: function () {
        return !!window.Worker;
    },
    eval: function (action) {
        return eval(action);
    },
    randomove: function (moves) {
        return moves[Math.floor(Math.random() * moves.length)];
    },
    array_diff: function (a1, a2) {
        var a = [], diff = [];
        for (var i = 0; i < a1.length; i++) {
            a[a1[i]] = true;
        }
        for (var i = 0; i < a2.length; i++) {
            if (a[a2[i]]) {
                delete a[a2[i]];
            } else {
                a[a2[i]] = true;
            }
        }
        for (var k in a) {
            diff.push(k);
        }
        return diff;
    },
    changeObjkey: function (obj, key, newkey, del) {
        if (del == true) {
            delete obj[key];
        } else {
            Object.defineProperty(obj, newkey, Object.getOwnPropertyDescriptor(obj, key));
            delete obj[key];
        }
        return obj;
    },
    changekey: function (ar, key, newkey, del) {
        if (del == true) {
            delete ar[key];
        } else {
            ar[key] = ar[newkey];
            delete ar[key];
        }
        return ar;
    },
    getkey: function (obj, val) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (obj[prop] === val)
                    return prop;
            }
        }
    },
    isJS: function (url) {
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].src == url) return true;
        }
        return false;
    },
    isCSS: function (url) {
        var scripts = document.getElementsByTagName('link');
        for (var i = scripts.length; i--;) {
            if (scripts[i].href == url) return true;
        }
        return false;
    },
    loadJS: function (url, div, callback) {
        if (!this.isJS(url)) {
            var div = typeof (div) != 'undefined' ? div : 'head';
            // Adding the script tag to the head as suggested before
            var head = document.getElementsByTagName(div)[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            // Then bind the event to the callback function.
            // There are several events for cross browser compatibility.
            script.onreadystatechange = callback;
            script.onload = callback;
            head.appendChild(script);
        }
    },
    loadExt: function (ext, callback) {
        this.loadJS('/gaia/js/ext/' + ext + '.js', 'head', callback);
    },
    loadCSS: function (url, callback) {
        if (!this.isCSS(url)) {
            // Adding the script tag to the head as suggested before
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('link');
            script.type = 'text/css';
            script.rel = 'stylesheet';
            script.href = url;
            // Then bind the event to the callback function.
            // There are several events for cross browser compatibility.
            script.onreadystatechange = callback;
            script.onload = callback;
            head.appendChild(script);
        }
    },
    redirect: function (url) {
        location.href = url;
    },
    htmlentities: {
        encode: function (str) {
            var buf = [];

            for (var i = str.length - 1; i >= 0; i--) {
                buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
            }

            return buf.join('');
        },
        decode: function (str) {
            return str.replace(/&#(\d+);/g, function (match, dec) {
                return String.fromCharCode(dec);
            });
        }
    },
    fetch: function (file, callback) {
        fetch(file).then(function (response) {
            return response.json();
        })
            .then(callback);
    },
    ajax: function (file, params, method, append) {
        //var echo_div;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (typeof append != 'undefined') {
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $(append).html(xmlhttp.responseText);
                }
            }
        }
        var method = typeof method != 'undefined' ? method : 'GET';
        // params= {a:5,b:4}
        var res = [];
        for (var i in params) {
            res.push(i + '=' + params[i]);
        }
        ;
        var request = file + '?' + res.join('&');
        xmlhttp.open(method, request, true);
        xmlhttp.send();
    },
    cors: function (url, params, callback, method) {
        var method = !method ? "GET" : method;
        $.ajax({
            method: method,
            data: params,
            url: url,
            // headers: {
            //     "My-First-Header":"first value",
            //     "My-Second-Header":"second value"
            // }
            // dataType: 'html',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: callback
        });
    },
    worker: function (file, args, callback, id) {
        if (g.isWorkersAvailable) {
            window['worker' + id] = new Worker(file);
            window['worker' + id].onerror = function (e) {
                throw new Error(e.message + " (" + e.filename + ":" + e.lineno + ")");
            };
            window['worker' + id].postMessage(args);
            window['worker' + id].onmessage = callback;
            // console.log('worker'+id);
        }
    },
    divid: function (id) {
        return document.getElementById(id);
    },
    isInt: function (n) {
        return n % 1 === 0;
    },
    hash: function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(26)
                .substring(1);
        }

        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    },
    //objects size
    size: function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    },
    time_diff: function (timestamp) {
        //now
        var current = Date.now();
        var jstimestamp = timestamp * 1000;

        var msnow = 15 * 1000;
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - jstimestamp;
        //return elapsed;
        if (elapsed < 0) {
            var future = jstimestamp - current;
            if (future < msPerMinute) {
                return Math.round(future / 1000) + ' ' + dic.SECONDS;
            } else if (future < msPerHour) {
                return Math.round(future / msPerMinute) + ' ' + dic.MINUTES;
            } else if (future < msPerDay) {
                return Math.round(future / msPerHour) + ' ' + dic.HOURS;
            } else if (future < msPerMonth) {
                return Math.round(future / msPerDay) + ' ' + dic.DAYS;
            } else if (future < msPerYear) {
                return 'approx ' + Math.round(future / msPerMonth) + ' ' + dic.MONTHS;
            } else {
                return 'approx ' + Math.round(future / msPerYear) + ' ' + dic.YEARS1;
            }
        } else {
            if (elapsed < msPerMinute) {
                return Math.round(elapsed / 1000) + ' ' + dic.SECONDS + ' ' + dic.AGO;
            } else if (elapsed < msPerHour) {
                return Math.round(elapsed / msPerMinute) + ' ' + dic.MINUTES + ' ' + dic.AGO;
            } else if (elapsed < msPerDay) {
                return Math.round(elapsed / msPerHour) + ' ' + dic.HOURS + ' ' + dic.AGO;
            } else if (elapsed < msPerMonth) {
                return Math.round(elapsed / msPerDay) + ' ' + dic.DAYS + ' ' + dic.AGO;
            } else if (elapsed < msPerYear) {
                return 'approx ' + Math.round(elapsed / msPerMonth) + ' ' + dic.MONTHS + ' ' + dic.AGO;
            } else {
                return 'approx ' + Math.round(elapsed / msPerYear) + ' ' + dic.YEARS1 + ' ' + dic.AGO;
            }
        }
    },
    vareplace: function (string, value) {
        var res = string.match(/@[a-z_-]+/g);
        var res1 = res != null ? res[0].substr(1) : '';
        var value = typeof value != 'object' ? value : value[res1];
        return string.replace(/@[a-z_-]+/g, value);
    },
    chrono: function () {
        var startTime = 0;
        var start = 0;
        var end = 0;
        var diff = 0;
        var timerID = 0;
        end = new Date();
        diff = end - start;
        diff = new Date(diff);
        var sec = diff.getSeconds();
        var min = diff.getMinutes();
        var hr = min > 59 ? 1 : 0;
        var day = hr > 23 ? 1 : 0;
        //need to reset to 2
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        document.getElementById("chronotime").innerHTML = (day != 0 ? (day + ":") : "") + (hr != 0 ? (hr + ":") : "") + (min != 0 ? (min + ":") : "") + sec;
        timerID = setTimeout("chrono()", 1000);
    },
    link_exist: function (image_url) {
        var http = new XMLHttpRequest();
        if (image_url != '/media/null') {
            http.open('HEAD', image_url, false);
            http.send();
            return http.status != 404;
        }
    },
    array_combine: function (keys, values) {
        var new_array = {},
            keycount = keys && keys.length,
            i = 0;
        // input sanitation
        if (typeof keys !== 'object' || typeof values !== 'object' || // Only accept arrays or array-like objects
            typeof keycount !== 'number' || typeof values.length !== 'number' || !keycount) { // Require arrays to have a count
            return false;
        }
        // number of elements does not match
        if (keycount != values.length) {
            return false;
        }
        for (i = 0; i < keycount; i++) {
            new_array[keys[i]] = values[i];
        }
        return new_array;
    },
    explode: function (delimiter, string, limit) {
        if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') return null;
        if (delimiter === '' || delimiter === false || delimiter === null) return false;
        if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string === 'object') {
            return {
                0: ''
            };
        }
        if (delimiter === true) delimiter = '1';
        delimiter += '';
        string += '';
        var s = string.split(delimiter);
        if (typeof limit === 'undefined') return s;
        // Support for limit
        if (limit === 0) limit = 1;
        // Positive limit
        if (limit > 0) {
            if (limit >= s.length) return s;
            return s.slice(0, limit - 1)
                .concat([s.slice(limit - 1)
                    .join(delimiter)
                ]);
        }
        // Negative limit
        if (-limit >= s.length) return [];
        s.splice(s.length + limit);
        return s;
    },
    implode: function (glue, pieces) {
        var i = '',
            retVal = '',
            tGlue = '';
        if (arguments.length === 1) {
            pieces = glue;
            glue = '';
        }
        if (typeof pieces === 'object') {
            if (Object.prototype.toString.call(pieces) === '[object Array]') {
                return pieces.join(glue);
            }
            for (i in pieces) {
                retVal += tGlue + pieces[i];
                tGlue = glue;
            }
            return retVal;
        }
        return pieces;
    },
    array_unique: function (inputArr) {
        var key = '',
            tmp_arr2 = {},
            val = '';
        var __array_search = function (needle, haystack) {
            var fkey = '';
            for (fkey in haystack) {
                if (haystack.hasOwnProperty(fkey)) {
                    if ((haystack[fkey] + '') === (needle + '')) {
                        return fkey;
                    }
                }
            }
            return false;
        };
        for (key in inputArr) {
            if (inputArr.hasOwnProperty(key)) {
                val = inputArr[key];
                if (false === __array_search(val, tmp_arr2)) {
                    tmp_arr2[key] = val;
                }
            }
        }
        return tmp_arr2;
    },
    inlist: function (needle, haystack, argStrict) {
        var key = '',
            strict = !!argStrict;
        if (strict) {
            for (key in haystack) {
                if (haystack[key] === needle) {
                    return true;
                }
            }
        } else {
            for (key in haystack) {
                if (haystack[key] == needle) {
                    return true;
                }
            }
        }
        return false;
    },
    str_replace: function (search, replace, subject, countObj) {
        var i = 0
        var j = 0
        var temp = ''
        var repl = ''
        var sl = 0
        var fl = 0
        var f = [].concat(search)
        var r = [].concat(replace)
        var s = subject
        var ra = Object.prototype.toString.call(r) === '[object Array]'
        var sa = Object.prototype.toString.call(s) === '[object Array]'
        s = [].concat(s)

        var $global = (typeof window !== 'undefined' ? window : GLOBAL)
        $global.$locutus = $global.$locutus || {}
        var $locutus = $global.$locutus
        $locutus.php = $locutus.php || {}
        if (typeof (search) === 'object' && typeof (replace) === 'string') {
            temp = replace
            replace = []
            for (i = 0; i < search.length; i += 1) {
                replace[i] = temp
            }
            temp = ''
            r = [].concat(replace)
            ra = Object.prototype.toString.call(r) === '[object Array]'
        }

        if (typeof countObj !== 'undefined') {
            countObj.value = 0
        }

        for (i = 0, sl = s.length; i < sl; i++) {
            if (s[i] === '') {
                continue
            }
            for (j = 0, fl = f.length; j < fl; j++) {
                temp = s[i] + ''
                repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0]
                s[i] = (temp).split(f[j]).join(repl)
                if (typeof countObj !== 'undefined') {
                    countObj.value += ((temp.split(f[j])).length - 1)
                }
            }
        }
        return sa ? s : s[0]
    },
    range: function (low, high, step) {
        var matrix = [];
        var inival, endval, plus;
        var walker = step || 1;
        var chars = false;

        if (!isNaN(low) && !isNaN(high)) {
            inival = low;
            endval = high;
        } else if (isNaN(low) && isNaN(high)) {
            chars = true;
            inival = low.charCodeAt(0);
            endval = high.charCodeAt(0);
        } else {
            inival = (isNaN(low) ? 0 : low);
            endval = (isNaN(high) ? 0 : high);
        }

        plus = ((inival > endval) ? false : true);
        if (plus) {
            while (inival <= endval) {
                matrix.push(((chars) ? String.fromCharCode(inival) : inival));
                inival += walker;
            }
        } else {
            while (inival >= endval) {
                matrix.push(((chars) ? String.fromCharCode(inival) : inival));
                inival -= walker;
            }
        }
        return matrix;
    },
    greeklish: function (str) {
        var str = str.replace(/[\#\[\]\/\{\}\(\)\*\<\>\%\@\:\>\<\~\"\'\=\*\+\!\;\-\,\?\.\\\^\$\|]/g, "_");
        var greekLetters = [' ', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω', 'A', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', 'ά', 'έ', 'ή', 'ί', 'ό', 'ύ', 'ώ', 'ς'];
        var enLetters = ['_', 'a', 'v', 'g', 'd', 'e', 'z', 'i', 'th', 'i', 'k', 'l', 'm', 'n', 'x', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'ps', 'o', 'A', 'B', 'G', 'D', 'E', 'Z', 'I', 'Th', 'I', 'K', 'L', 'M', 'N', 'X', 'O', 'P', 'R', 'S', 'T', 'Y', 'F', 'Ch', 'Ps', 'O', 'a', 'e', 'i', 'i', 'o', 'u', 'o', 's'];
        return this.str_replace(greekLetters, enLetters, str);
    },
    date: function (format, timestamp) {
        var that = this;
        var jsdate, f;
        // Keep this here (works, but for code commented-out below for file size reasons)
        // var tal= [];
        var txt_words = [
            'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        // trailing backslash -> (dropped)
        // a backslash followed by any character (including backslash) -> the character
        // empty string -> empty string
        var formatChr = /\\?(.?)/gi;
        var formatChrCb = function (t, s) {
            return f[t] ? f[t]() : s;
        };
        var _pad = function (n, c) {
            n = String(n);
            while (n.length < c) {
                n = '0' + n;
            }
            return n;
        };
        f = {
            // Day
            d: function () { // Day of month w/leading 0; 01..31
                return _pad(f.j(), 2);
            },
            D: function () { // Shorthand day name; Mon...Sun
                return f.l()
                    .slice(0, 3);
            },
            j: function () { // Day of month; 1..31
                return jsdate.getDate();
            },
            l: function () { // Full day name; Monday...Sunday
                return txt_words[f.w()] + 'day';
            },
            N: function () { // ISO-8601 day of week; 1[Mon]..7[Sun]
                return f.w() || 7;
            },
            S: function () { // Ordinal suffix for day of month; st, nd, rd, th
                var j = f.j();
                var i = j % 10;
                if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
                    i = 0;
                }
                return ['st', 'nd', 'rd'][i - 1] || 'th';
            },
            w: function () { // Day of week; 0[Sun]..6[Sat]
                return jsdate.getDay();
            },
            z: function () { // Day of year; 0..365
                var a = new Date(f.Y(), f.n() - 1, f.j());
                var b = new Date(f.Y(), 0, 1);
                return Math.round((a - b) / 864e5);
            },

            // Week
            W: function () { // ISO-8601 week number
                var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
                var b = new Date(a.getFullYear(), 0, 4);
                return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
            },

            // Month
            F: function () { // Full month name; January...December
                return txt_words[6 + f.n()];
            },
            m: function () { // Month w/leading 0; 01...12
                return _pad(f.n(), 2);
            },
            M: function () { // Shorthand month name; Jan...Dec
                return f.F()
                    .slice(0, 3);
            },
            n: function () { // Month; 1...12
                return jsdate.getMonth() + 1;
            },
            t: function () { // Days in month; 28...31
                return (new Date(f.Y(), f.n(), 0))
                    .getDate();
            },

            // Year
            L: function () { // Is leap year?; 0 or 1
                var j = f.Y();
                return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
            },
            o: function () { // ISO-8601 year
                var n = f.n();
                var W = f.W();
                var Y = f.Y();
                return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
            },
            Y: function () { // Full year; e.g. 1980...2010
                return jsdate.getFullYear();
            },
            y: function () { // Last two digits of year; 00...99
                return f.Y()
                    .toString()
                    .slice(-2);
            },

            // Time
            a: function () { // am or pm
                return jsdate.getHours() > 11 ? 'pm' : 'am';
            },
            A: function () { // AM or PM
                return f.a()
                    .toUpperCase();
            },
            B: function () { // Swatch Internet time; 000..999
                var H = jsdate.getUTCHours() * 36e2;
                // Hours
                var i = jsdate.getUTCMinutes() * 60;
                // Minutes
                var s = jsdate.getUTCSeconds(); // Seconds
                return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
            },
            g: function () { // 12-Hours; 1..12
                return f.G() % 12 || 12;
            },
            G: function () { // 24-Hours; 0..23
                return jsdate.getHours();
            },
            h: function () { // 12-Hours w/leading 0; 01..12
                return _pad(f.g(), 2);
            },
            H: function () { // 24-Hours w/leading 0; 00..23
                return _pad(f.G(), 2);
            },
            i: function () { // Minutes w/leading 0; 00..59
                return _pad(jsdate.getMinutes(), 2);
            },
            s: function () { // Seconds w/leading 0; 00..59
                return _pad(jsdate.getSeconds(), 2);
            },
            u: function () { // Microseconds; 000000-999000
                return _pad(jsdate.getMilliseconds() * 1000, 6);
            },
            // Timezone
            e: function () { // Timezone identifier; e.g. Atlantic/Azores, ...
                // The following works, but requires inclusion of the very large
                // timezone_abbreviations_list() function.
                /*              return that.date_default_timezone_get();
                 */
                throw 'Not supported (see source code of date() for timezone on how to add support)';
            },
            I: function () { // DST observed?; 0 or 1
                // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
                // If they are not equal, then DST is observed.
                var a = new Date(f.Y(), 0);
                // Jan 1
                var c = Date.UTC(f.Y(), 0);
                // Jan 1 UTC
                var b = new Date(f.Y(), 6);
                // Jul 1
                var d = Date.UTC(f.Y(), 6); // Jul 1 UTC
                return ((a - c) !== (b - d)) ? 1 : 0;
            },
            O: function () { // Difference to GMT in hour format; e.g. +0200
                var tzo = jsdate.getTimezoneOffset();
                var a = Math.abs(tzo);
                return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
            },
            P: function () { // Difference to GMT w/colon; e.g. +02:00
                var O = f.O();
                return (O.substr(0, 3) + ':' + O.substr(3, 2));
            },
            T: function () {
                return 'UTC';
            },
            Z: function () { // Timezone offset in seconds (-43200...50400)
                return -jsdate.getTimezoneOffset() * 60;
            },

            // Full Date/Time
            c: function () { // ISO-8601 date.
                return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
            },
            r: function () { // RFC 2822
                return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
            },
            U: function () { // Seconds since UNIX epoch
                return jsdate / 1000 | 0;
            }
        };
        this.date = function (format, timestamp) {
            that = this;
            jsdate = (timestamp === undefined ? new Date() : // Not provided
                    (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
                        new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
            );
            return format.replace(formatChr, formatChrCb);
        };
        return this.date(format, timestamp);
    },
    ucfirst: function (string) {
        return typeof string != 'undefined' ? string.charAt(0).toUpperCase() + string.slice(1) : '';
    },
    json_encode: function (mixedVal) {
        var $global = (typeof window !== 'undefined' ? window : global)
        $global.$locutus = $global.$locutus || {}
        var $locutus = $global.$locutus
        $locutus.php = $locutus.php || {}
        var json = $global.JSON
        var retVal
        try {
            if (typeof json === 'object' && typeof json.stringify === 'function') {
                // Errors will not be caught here if our own equivalent to resource
                retVal = json.stringify(mixedVal)
                if (retVal === undefined) {
                    throw new SyntaxError('json_encode')
                }
                return retVal
            }
            var value = mixedVal
            var quote = function (string) {
                var escapeChars = [
                    '\u0000-\u001f',
                    '\u007f-\u009f',
                    '\u00ad',
                    '\u0600-\u0604',
                    '\u070f',
                    '\u17b4',
                    '\u17b5',
                    '\u200c-\u200f',
                    '\u2028-\u202f',
                    '\u2060-\u206f',
                    '\ufeff',
                    '\ufff0-\uffff'
                ].join('')
                var escapable = new RegExp('[\\"' + escapeChars + ']', 'g')
                var meta = {
                    // table of character substitutions
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\'
                }
                escapable.lastIndex = 0
                return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                    var c = meta[a]
                    return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0)
                        .toString(16))
                        .slice(-4)
                }) + '"' : '"' + string + '"'
            }
            var _str = function (key, holder) {
                var gap = ''
                var indent = '    '
                // The loop counter.
                var i = 0
                // The member key.
                var k = ''
                // The member value.
                var v = ''
                var length = 0
                var mind = gap
                var partial = []
                var value = holder[key]

                // If the value has a toJSON method, call it to obtain a replacement value.
                if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
                    value = value.toJSON(key);
                }

                // What happens next depends on the value's type.
                switch (typeof value) {
                    case 'string':
                        return quote(value);
                    case 'number':
                        // JSON numbers must be finite. Encode non-finite numbers as null.
                        return isFinite(value) ? String(value) : 'null';
                        ;
                    case 'boolean':
                    case 'null':
                        // If the value is a boolean or null, convert it to a string. Note:
                        // typeof null does not produce 'null'. The case is included here in
                        // the remote chance that this gets fixed someday.
                        return String(value);
                    case 'object':
                        // If the type is 'object', we might be dealing with an object or an array or
                        // null.
                        // Due to a specification blunder in ECMAScript, typeof null is 'object',
                        // so watch out for that case.
                        if (!value) {
                            return 'null'
                        }
                        // Make an array to hold the partial results of stringifying this object value.
                        gap += indent;
                        partial = [];
                        // Is the value an array?
                        if (Object.prototype.toString.apply(value) === '[object Array]') {
                            // The value is an array. Stringify every element. Use null as a placeholder
                            // for non-JSON values.
                            length = value.length
                            for (i = 0; i < length; i += 1) {
                                partial[i] = _str(i, value) || 'null';
                            }
                            // Join all of the elements together, separated with commas, and wrap them in
                            // brackets.
                            v = partial.length === 0 ? '[]' : gap
                                ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                                : '[' + partial.join(',') + ']'
                            gap = mind;
                            return v;
                        }
                        // Iterate through all of the keys in the object.
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = _str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                        // Join all of the member texts together, separated with commas,
                        // and wrap them in braces.
                        v = partial.length === 0 ? '{}' : gap
                            ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                            : '{' + partial.join(',') + '}';
                        gap = mind;
                        return v;
                    case 'undefined':
                    case 'function':
                    default:
                        throw new SyntaxError('json_encode');
                }
            }

            // Make a fake root object containing our value under the key of ''.
            // Return the result of stringifying the value.
            return _str('', {
                '': value
            })
        } catch (err) {
            // @todo: ensure error handling above throws a SyntaxError in all cases where it could
            // (i.e., when the JSON global is not available and there is an error)
            if (!(err instanceof SyntaxError)) {
                throw new Error('Unexpected error type in json_encode()')
            }
            // usable by json_last_error()
            $locutus.php.last_error_json = 4
            return null
        }
    },
    json_decode: function (strJson) {
        var $global = (typeof window !== 'undefined' ? window : global)
        $global.$locutus = $global.$locutus || {}
        var $locutus = $global.$locutus
        $locutus.php = $locutus.php || {}

        var json = $global.JSON
        if (typeof json === 'object' && typeof json.parse === 'function') {
            try {
                return json.parse(strJson)
            } catch (err) {
                if (!(err instanceof SyntaxError)) {
                    throw new Error('Unexpected error type in json_decode()')
                }

                // usable by json_last_error()
                $locutus.php.last_error_json = 4
                return null
            }
        }
        var chars = [
            '\u0000',
            '\u00ad',
            '\u0600-\u0604',
            '\u070f',
            '\u17b4',
            '\u17b5',
            '\u200c-\u200f',
            '\u2028-\u202f',
            '\u2060-\u206f',
            '\ufeff',
            '\ufff0-\uffff'
        ].join('')
        var cx = new RegExp('[' + chars + ']', 'g')
        var j
        var text = strJson
        cx.lastIndex = 0
        if (cx.test(text)) {
            text = text.replace(cx, function (a) {
                return '\\u' + ('0000' + a.charCodeAt(0)
                    .toString(16))
                    .slice(-4)
            })
        }
        var m = (/^[\],:{}\s]*$/)
            .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))

        if (m) {
            j = eval('(' + text + ')') // eslint-disable-line no-eval
            return j
        }

        // usable by json_last_error()
        $locutus.php.last_error_json = 4
        return null
    },
    insertAtCursor: function (area, text) {
        var txtarea = document.querySelectorAll(area)[0];
        var scrollPos = txtarea.scrollTop;
        //   console.log(scrollPos)
        var strPos = 0;
        var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
            "ff" : (document.selection ? "ie" : false));
        if (br == "ie") {
            txtarea.focus();
            var range = document.selection.createRange();
            range.moveStart('character', -txtarea.innerHTML.length);
            strPos = range.text.length;

        } else if (br == "ff") strPos = txtarea.selectionStart;

        var front = (txtarea.innerHTML).substring(0, strPos);
        var back = (txtarea.innerHTML).substring(strPos, txtarea.innerHTML.length);
        txtarea.innerHTML = front + text + back;
        strPos = strPos + text.length;

        if (br == "ie") {
            txtarea.focus();
            var range = document.selection.createRange();
            range.moveStart('character', -txtarea.innerHTML.length);
            range.moveStart('character', strPos);
            range.moveEnd('character', 0);
            range.select();

        } else if (br == "ff") {
            txtarea.selectionStart = strPos;
            txtarea.selectionEnd = strPos;
            txtarea.focus();
        }
        txtarea.scrollTop = scrollPos;
    },
    insertHTML: function (newhtml) {
        var sel, range, html;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                range.insertNode(document.createTextNode(newhtml));
            }
        } else if (document.selection && document.selection.createRange) {
            document.selection.createRange().innerHTML = newhtml;
        }
    },
    chmod: function (file, permission) {
        $.get(s.ajaxfile, {a: 'chmod', b: file, c: permission}, function (data) {
            // console.log(data)
        })
    },
    shell_exec: function (command, callback) {
        $.get(s.ajaxfile, {a: 'shell_exec', b: command}, callback);
    },
    cachereset: function () {
        $.get(s.ajaxfile, {a: 'cachereset'}, function (data) {
            console.log(data);
        });
    },
    sh: function (command) {
        $.get(s.ajaxfile, {a: 'shell_exec', b: command}, function (d) {
            console.log(d)
        });
    },
    d: (wd) => {
        if (wd.charAt(wd.length - 1) === '*') {
            var nwd = wd.replace('*', ''), re = new RegExp(nwd, "i");
            var z = {};
            var newd = Object.keys(dic).filter(val => re.test(val)).map(x => {
                z[x] = dic[x];
                return z
            })[0]
        } else {
            return !dic[wd] ? "not set" : s.regex(dic[wd])
        }
    },
    dv: (wd) => {
        function getKeyByValue(object, value) {
            return Object.keys(dic).find(key => dic[key] == value);
        }

        if (wd.charAt(wd.length - 1) === '*') {
            var nwd = wd.replace('*', '')
            var re = new RegExp(nwd, "i");
            var keys = Object.keys(dic);
            var values = Object.values(dic);
            var z = {};
            var newd = values.filter(val => re.test(val)).map(x => {
                z[x] = keys[values.indexOf(x)];
                return z
            })[0]
            console.table(newd)
        } else {
            return !dic[wd] ? "not set" : s.regex(dic[wd])
        }
    },
    time: () => {
        return Math.floor(Date.now() / 1e3)
    },
    confirm: (hint, call) => {
        var c = window.confirm(hint);
        if (c) {
            call(true)
        } else {
            call(false)
        }
    },
    pop: (o) => {
        var c = "<div class='pop' id='" + hash() + "'>" + $(o).attr("data-content") + "</div>";
        $(o).after(c);
    },
    modal: (o) => {
        if (o != null) {
            if (typeof (o) === "string") {
                $('#modalbody').html(o);
            } else {
                if (o.hasOwnProperty('message')) {
                    $('#modalbody').html(o.message);
                }
                if (o.hasOwnProperty('title')) {
                    $('#modaltitle').html(o.title);
                }
                if (o.hasOwnProperty('foot')) {
                    if (typeof o.foot == 'object') {
                        $('#modalfoot').html(o.foot.join());
                    } else {
                        $('#modalfoot').html(o.foot);
                    }
                }
            }
        }
        if ($('#modal').css('display') == "none") {
            $('#modal').show();
            $('body').addClass('modaldark');
            $('button').prop('disabled', true);
        } else {
            $('#modal').hide();
            $('body').removeClass('modaldark');
            $('button').prop('disabled', false);
        }
    },
    modalclose:function(){s.modal();$('#modalbody').html('');$('#modaltitle').html('');$('#modalfoot').html('');},
    dins: (key, val) => {
        key = key.toUpperCase();
        api.mo.up("form", {name: "dic" + LANG}, {$set: {key: val}})
        api.red.del("formdic" + LANG);
    },
    streamapps: {1: "inter", 2: "offer", 3: "prop", 4: "loan", 5: "afer"},
    i: (x) => {
        return isNaN(parseInt(x)) ? x : parseInt(x);
    },
    isMacLike: () => {
        return navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
    },
    isNotification: () => {
        return !("Notification" in window) ? false : true
    },
    isWorkersAvailable: () => {
        return !!window.Worker;
    },
    isJS: function (url) {
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].src == url) return true;
        }
        return false;
    },
    isCSS: (url) => {
        var cssfiles = document.getElementsByTagName('link');
        for (var i = cssfiles.length; i--;) {
            if (cssfiles[i].href == url) return true;
        }
        return false;
    },
    urlExists: (url) => {
        if (url) {
            var req = new XMLHttpRequest();
            req.open('GET', url, false);
            req.send();
            return req.status == 200;
        } else {
            return false;
        }
    },
    loadJS: function (url, ele, callback) {
        if (!Array.isArray(url)) {
            var urls = [];
            urls.push(url)
        } else {
            var urls = url
        }
        for (var i in urls) {
            if (!this.isJS(urls[i])) {
                var ele = typeof (ele) != 'undefined' ? ele : 'head';
                var PLACE = $(ele)[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = urls[i];
                script.onreadystatechange = callback;
                script.onload = callback;
                if (ele == 'body') {
                    PLACE.insertBefore(script, PLACE.firstChild);
                } else {
                    PLACE.appendChild(script);
                }
            }
        }
    },
    loadCSS: (url, callback) => {
        if (!this.isCSS(url)) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('link');
            script.type = 'text/css';
            script.rel = 'stylesheet';
            script.href = url;
            script.onreadystatechange = callback;
            script.onload = callback;
            head.appendChild(script);
        }
    },
    shell_exec: (command, callback) => {
        s.xget({a: 'shell_exec', b: command}, callback);
    },
    reset: () => {
        api.mo.up('setting', {name: 'this_version'}, {$inc: {value: 1}}, r => {
            let newver = parseInt(coo('ver')) + 1;
            coo('ver', newver);
            s.xget({a: 'reset'});
        })
    },
    get_css: (div) => {
        var para = document.querySelector(div);
        return window.getComputedStyle(para);
    },
    get: typeof G != 'undefined' ? G : '',
    hash_target: window.location.hash.split('#')[1],
    pathExt: window.location.host.toString().split('.')[0] == 'm' ? window.location.host.toString().split('.')[2]
        : (typeof window.location.host.toString().split('.')[2] != 'undefined' //com.au
            ? window.location.host.toString().split('.')[1] + '.' + window.location.host.toString().split('.')[2]
            : window.location.host.toString().split('.')[1]),
    country: typeof window.location.host.toString().split('.')[2] != 'undefined'
        ? window.location.host.toString().split('.')[2]
        : window.location.host.toString().split('.')[1],
    curdir: window.location.href.toString().split('/')[3],
    urlfile: typeof window.location.href.toString().split('/')[3] == 'undefined'
        ? window.location.href.toString().split('/')[2]
        : window.location.href.toString().split('/')[3],
    redirect: (link) => {
        location.href = link;
    },
    hostarr: window.location.host.split('.'),
    serverbase: function () {
        return this.hostarr.length == 3 ? (this.hostarr[1] + "." + this.hostarr[2]) : window.location.host
    },
    //replace new Date() with s.Dat() that takes timezone difference
    Dat: () => {
        var d = new Date();
        if (coo('tzdiff') != false) {
            d.setHours(d.getHours() + s.i(coo('tzdiff')))
        }
        return d;
    },
    notify: (icon, message, title) => {
        var title = title || "";
        var obj = {};
        obj.progress = 0;
        obj.fadeTime = 1000;
        obj.fadeTicks = 50;
        obj.fadeInterval = 0;
        obj.opacity = 1;
        obj.time = 2;
        obj.ticks = 500;
        obj.element = null;
        obj.progress = null;
        obj.progressPos = 0;
        obj.progressIncrement = 0;
        obj.Show = function () {
            obj.element = document.createElement('div');
            obj.element.id = "notify";
            obj.element.className = "notify " + icon;
            content = document.createElement('div');
            content.className = "ncont";
            content.innerHTML = (title != "" ? "<h1>" + title + "</h1>" : "") + "<label>" + message + "</label>";
            obj.element.appendChild(content);
            var progressDiv = document.createElement('div');
            progressDiv.className = 'prog';
            obj.progress = document.createElement('div');
            progressDiv.appendChild(obj.progress);
            obj.element.appendChild(progressDiv);
            obj.progressIncrement = 100 / obj.ticks;
            document.getElementById('wrapper2').appendChild(obj.element);
            obj.StartWait();
        };
        obj.StartWait = function () {
            if (obj.progressPos >= 100) {
                obj.fadeInterval = 1;
                obj.FadeTick();
                return;
            }
            setTimeout(obj.Tick, obj.time);
        };
        obj.Clear = function () {
            obj.opacity = 0;
            obj.progressPos = 100;
            obj.element.remove();
            obj = null;
            return;
        };
        obj.FadeTick = function () {
            obj.opacity = ((obj.opacity * 100) - obj.fadeInterval) / 100;
            if (obj.opacity <= 0) {
                obj.element.remove();
                obj = null;
                return;
            }
            obj.element.style.opacity = obj.opacity;
            setTimeout(obj.FadeTick, (obj.fadeTime / obj.fadeTicks))
        };
        obj.Tick = function () {
            obj.progressPos += obj.progressIncrement;
            obj.progress.style.width = obj.progressPos + "%";
            obj.StartWait()
        };
        obj.Show();
        return obj;
    },
    notification: {
        permission: () => {
            if (!("Notification" in window)) {
                console.log("This browser does not support desktop notification");
            } else {
                if (Notification.permission === "granted") {
                    console.log('notication granted');
                } else if (Notification.permission !== "denied") {
                    Notification.requestPermission((permission) => {
                        if (permission === "granted") {
                            console.log('notication granted');
                        }
                    });
                }
                if (!s.isMacLike) {
                    Notification.requestPermission().then((result) => {
                        console.log(result);
                    });
                }
            }
        },
        set: (activity, body, icon, title, link) => {
            var n;
            var link = link;
            if (activity == 1) {
                var options = {
                    body: body,
                    icon: icon
                };
                n = new Notification(title, options);
                n.onclick = () => {
                    window.open(link);
                };
            } else if (activity == 0) {
                if (typeof (n) != 'undefined') n.close();
            }
        },
        create: (obj, callback) => {
            var json = {}
            json["created"] = time();
            json["img"] = "/img/notifAlert4.png";
            json["uid"] = my.uid;
            json["status"] = 3;
            json["message"] = "default content";
            var list = ["uid", "img", "url", "title", "message"]
            for (var i in list) {
                if (obj.hasOwnProperty(list[i])) {
                    json[list[i]] = obj[list[i]];
                    delete obj[list[i]];
                }
            }
            if (!isEmpty(obj)) {
                for (var j in obj) {
                    json[j] = obj[j];
                }
            }
            api.mo.ins('activity', json);
        }
    },
    roundTo: (n, digits) => {
        if (digits === undefined) {
            digits = 0;
        }
        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        return (Math.round(n) / multiplicator).toFixed(2);
    },
    swap: (json) => {
        var ret = {};
        for (var key in json) {
            ret[json[key]] = key;
        }
        return ret;
    },
    gotorel: (val) => {
        var exp = explode('_', val);
        if (exp[0] == 'interview') {
            s.ses('i_button', 22);
            s.ses('i_status', 23);
            s.ses('i_contact', exp[1]);
            location.href = '/interview';
        }
    },
    counter: (data) => {
        return new Promise((resolve, reject) => {
            api.ma.N(my, [], (d) => {
                var res = d.val;
                d.uid = data.uid;
                d.savedat = date('Y-m-d H:i:s');
                resolve(d);
            });
        })
    },
    checkrule: (rulestring, id) => {
        try {
            if (eval(rulestring)) {
                return true;
            } else {
                console.c('warn', "not permitted @" + id)
            }
        } catch (e) {
            if (e instanceof SyntaxError) {
                return ("err12");
            }
        }
        return true;
    }
};
//x functions clean javascript
s.but=function(a,callb){
    var button = document.createElement('button');button.innerHTML=a;
    if(!!callb){
        button.addEventListener('click',callb,false);
    }else{
        button.addEventListener('click', ()=>{modalclose();})
    }
    document.getElementById('modalfoot').appendChild(button);
    //return "<button onclick='callb()'>"+a+"</button>";
};
s.xget=function(params,call,type,file){
    var file=!file ? (location.href.includes('dsh') ? "/gajax.php":"/gajax.php"):file;
    var url,res,type=!type?'text':type;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=ensureReadiness;
    function ensureReadiness(){
        if(xhr.readyState<4){return;}if(xhr.status!==200){return;}
        if(xhr.readyState===4 &&  xhr.status==200){
            var response=isjson(xhr.responseText);if(!!call){call(response)}else{console.log(response)}
            if(typeof params==='string'){
                var parm=params.slice(1).split("&")[0].split("=")[1];
                mamycall(parm)
            }else if(typeof params['a']!='undefined'){
                mamycall(params['a'])
            }
        }
    }
    if(typeof params==='string'){url=file+params
    }else if(typeof params==='object'){res=[];for (var i in params){res.push(i + '=' + params[i]);};url=file+'?'+res.join('&');}
    xhr.open("GET", url, true);xhr.send('');
};
s.xpost=function(file,params,call,type){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=ensureReadiness;
    function ensureReadiness(){if(xhr.readyState<4){return;}if(xhr.status!==200){return;}
        if(xhr.readyState===4 &&  xhr.status==200){
            var response=isjson(xhr.responseText);
            if(!!call){call(response)}else{console.log(response)}
            if(typeof params['a']!='undefined')mamycall(params['a'])
        }}
    //set request params format
    var reqtype= typeof params=="string" ? params : JSON.stringify(params);
    var restype=type=="json"?"application/json":("img"?"multipart/form-data":"application/x-www-form-urlencoded");
    xhr.open("POST", file,true);xhr.setRequestHeader("Content-Type", restype);xhr.send(reqtype);
}
s.xupload=function(file,formid,call) {
    var url = "/upload.php";
    var xhr = new XMLHttpRequest();
    var form = document.querySelector('#'+formid);
    var formData = new FormData(form);
    xhr.open('POST', url, true);
    xhr.addEventListener('readystatechange',function(e){
        if (xhr.readyState == 4 && xhr.status == 200) {
            s.notify("good","Upload successfull");
            $('#progressbar'+formid).val(33);
            c('warn',"Upload successfull")
            var response=isjson(xhr.responseText);
            if(!!call){call(response)}else{console.log(response)}
            var type=formid.replace('form','');
            if(['1','2'].includes(type)){
                s.api.ma.my("get",my,["user","photos"]);
            }else if(['3'].includes(type)){
                s.api.ma.my("get",my,["photos"]);
            }else if(['5'].includes(type)){
                s.api.ma.my("get",my,["certs","photos"]);
            }
            s.api.ma.my("get",my,["photos"]);
            if(['5','6','8','12'].includes(type)){
                $('#gallery'+type).html("<button onclick='mediav(this.childNodes[0])'><img type='"+type+"' file='"+G.UPLOADS+response+"' title='"+response+"' loading='lazy' src='https://dev.speedemployer.gr/img/file_extensions/pdf.png'>"+response+"</button>");
            }
            if(type.substring(0,2)=='15'){
                $('#gallery'+type).html("<button onclick='mediav(this.childNodes[0])'><img type='"+type+"' file='"+G.UPLOADS+response+"' title='"+response+"' loading='lazy' src='https://dev.speedemployer.gr/img/file_extensions/pdf.png'>"+response+"</button>");
            }
            if(type=='11'){s.api.ma.my("get",my,["offer"]);}
            opener2('conform'+type);

            if(['3','4','12','14'].includes(type)){
                $('#gallery'+type).append('<div class="attachments"><span class="attachedImg"><button onclick="mediav(this.childNodes[0])"><img type="'+type+'" file="'+G.UPLOADS+response+'" src="'+G.UPLOADS+response+'"></button></span></div>');
            }else if(['13','16'].includes(type)){
                $('#gallery'+type).html('<span class="attachedImg"><button onclick="mediav(this.childNodes[0])"><img type="'+type+'" file="'+G.UPLOADS+response+'" src="'+G.UPLOADS+response+'"></button></span>');
            }else if(type=='11'){
                $('#gallery'+type).html('<button onclick="mediav(this.childNodes[0])"><img type="'+type+'" file="'+G.UPLOADS+response+'" src="'+G.UPLOADS+response+'" width="100%">');
            }else if(['1','2'].includes(type)){
                $('#gallery'+type).html('<button onclick="mediav(this.childNodes[0])"><img type="'+type+'" file="'+G.UPLOADS+response+'" src="'+G.UPLOADS+response+'" loading="lazy" width="100%" class="profile_photo2"></button>');
            }

        }else if (xhr.readyState == 4 && xhr.status != 200) {
            s.notify("warn","Problem uploading files")
            c('warn',"Problem uploading files")
        }
    });
    formData.append('file',file);
    xhr.send(formData);
}
s.mamycall=function(aparam){
    var user=Object.assign(Object.keys(G.schemado.ur),['editInfo','updateCityProfile','setapp','esearch_switch','offeract','propact','loanact','updatePass','fullname','relocationRef','email_alert','new_cv']);
    if(user.includes(aparam) || aparam.includes("buy_")){s.api.ma.my('get',my,['user']);console.log(aparam+" updated")}
}
//API
s.api={
    uri:location.origin+"/api/",version:2.0,port:3005,
    mo:{url:'mongodb://mongodb://root:n130177!@0.0.0.0:27017/'+s.mongo+'/',
        get:(col,params,call)=>{
            if(typeof(params)!='undefined'){params['a']="get";}else{var params={a:'get'};}
            if(!call){
                $.get(s.api.uri+'mo/'+col,params,(d)=>{console.log(isjson(d))},'json')
            }else{
                $.get(s.api.uri+'mo/'+col,params,call,'json');
            }
        },
        count:(col,params,call)=>{
            if(typeof(params)!='undefined'){params['a']="count";}else{var params={a:'count'};}
            if(!call){
                $.get(params,(d)=>{console.log(isjson(d))},'json',s.api.uri+'mo/'+col)
            }else{
                $.get(s.api.uri+'mo/'+col,params,call,'json');
            }
        },
        agg:(col,params,call)=>{
            if(!call){
                s.xget({a:"agg",set:JSON.stringify(params)},(d)=>{console.log(isjson(d))},'json',s.api.uri+'mo/'+col)
            }else{
                s.xget(params,call,'json',s.api.uri+'mo/'+col);
            }
        },
        getOne:(col,params,call)=>{
            if(typeof(params)!='undefined'){params['a']="getOne";}else{var params={a:'getOne'};}
            if(!call){
                s.xget(params,d=>{console.log(isjson(d))},"json",s.api.uri+'mo/'+col);
            }else{
                s.xget(params,call,"json",s.api.uri+'mo/'+col);
            }
        },
        set:(col,where,params,call)=>{
            if(!call){
                xpost(s.api.uri+'mo/'+col,{a:"set",where:JSON.stringify(where),params:JSON.stringify(params)},d=>{console.log(isjson(d))},'json');
            }else{
                xpost(s.api.uri+'mo/'+col,{a:"set",where:JSON.stringify(where),set:JSON.stringify(params)},call,'json');
            }
        },
        up:(col,where,params,call)=>{
            if(!call){xpost(s.api.uri+'mo/'+col,{a:"upsert",where:JSON.stringify(where),set:JSON.stringify(params)},d=>{console.log(isjson(d))},'json');
            }else{xpost(s.api.uri+'mo/'+col,{a:"upsert",where:JSON.stringify(where),set:JSON.stringify(params)},call,'json')}
        },
        fup:(col,where,params,call)=>{
            if(!call){
                xpost(s.api.uri+'mo/'+col,{a:"fup",where:JSON.stringify(where),set:JSON.stringify(params)},d=>{console.log(isjson(d))},'json');
            }else{
                xpost(s.api.uri+'mo/'+col,{a:"fup",where:JSON.stringify(where),set:JSON.stringify(params)},call,'json');
            }
        },
        upMany:(col,where,params,call)=>{	//updateMany add upsert inc decr
            if(!call){
                xpost(s.api.uri+'mo/'+col,{a:"upMany",where:JSON.stringify(where),set:JSON.stringify(params)},d=>{console.log(isjson(d))},'json');
            }else{
                xpost(s.api.uri+'mo/'+col,{a:"upMany",where:JSON.stringify(where),set:JSON.stringify(params)},call,'json');
            }
        },
        del:(col,params,call)=>{
            if(typeof(params)!='undefined'){params['a']="del";}else{var params={a:'del'};}
            if(!call){
                xpost(s.api.uri+'mo/'+col,params,d=>{console.log(isjson(d))},'json');
            }else{
                xpost(s.api.uri+'mo/'+col,params,call,'json');
            }
        },
        delMany:(col,params,call)=>{
            if(typeof(params)!='undefined'){params['a']="delMany";}else{var params={a:'delMany'};}
            if(!call){
                xpost(s.api.uri+'mo/'+col,params,d=>{console.log(isjson(d))},'json');
            }else{
                xpost(s.api.uri+'mo/'+col,params,call,'json');
            }
        },
        ins:(col,obj,call)=>{
            if(!call){
                xpost(s.api.uri+'mo/'+col,{a:"ins",set:JSON.stringify(obj)},d=>{console.log(isjson(d))},'json');
            }else{
                xpost(s.api.uri+'mo/'+col,{a:"ins",set:JSON.stringify(obj)},call,'json');
            }
        },
        insMany:(col,obj,call)=>{
            if(!call){
                xpost(s.api.uri+'mo/'+col,{a:"insMany",set:JSON.stringify(obj)},d=>{console.log(isjson(d))},'json');
            }else{
                xpost(s.api.uri+'mo/'+col,{a:"insMany",set:JSON.stringify(obj)},call,'json');
            }
        },
        bulk:(col,obj,call)=>{
            if(!call){
                xpost(s.api.uri+'mo/'+col,{a:"bulk",set:JSON.stringify(obj)},d=>{console.log(isjson(d))},'json');
            }else{
                xpost(s.api.uri+'mo/'+col,{a:"bulk",set:JSON.stringify(obj)},call,'json');
            }
        }
    },
    ma:{show:(query,prm,call)=>{
            var prm=!prm ? []:prm;
            if(!call){
                s.xget({q:query,prm:prm},d=>{console.log(isjson(d))},'json',s.api.uri+'ma/show');
            }else{
                s.xget({q:query,prm:prm},call,"json",s.api.uri+'ma/show');
            }
        },
        get:(query,prm,call)=>{
            var prm=!prm ? []:prm;
            console.log(prm)
            if(!call){s.xget({q:query,prm:JSON.stringify(prm)},d=>{console.log(d)},"json",s.api.uri+'ma/get');
            }else{
                s.xget({q:query,prm:JSON.stringify(prm)},call,"json",s.api.uri+'ma/get');
            }
        },
        getOne:(query,prm,call)=>{
            var prm=!prm ? []:prm;
            if(!call){$.get(s.api.uri+'ma/getOne',{q:query,prm:JSON.stringify(prm)},d=>{console.log(d)},'json');
            }else{
                s.xget(s.api.uri+'ma/getOne',{q:query,prm:JSON.stringify(prm)},call,'json');
            }
        },
        set:(query,prm,call)=>{
            var prm=!prm ? []:prm;
            if(!call){
                $.post(s.api.uri+'ma/update',{q:query,prm:prm},d=>{console.log(d)},"json");
            }else{
                $.post(s.api.uri+'ma/update',{q:query,prm:prm},call,"json");
            }
        },
        del:(query,prm,call)=>{
            var prm=!prm ? []:prm;
            if(!call){
                xpost(s.api.uri+'ma/delete',{q:query,prm:prm},d=>{console.log(d)},"json");
            }else{
                xpost(s.api.uri+'ma/delete',{q:query,prm:prm},call,"json");
            }
        },
        ins:(query,array,prm,call)=>{ //??not finished
            var prm=!prm ? []:prm;
            if(!call){
                xpost(s.api.uri+'ma/insert into',{q:query,prm:prm,ins:JSON.stringify(array)},d=>{console.log(d)},"json");
            }else{
                xpost(s.api.uri+'ma/insert into',{q:query,prm:prm,ins:JSON.stringify(array)},call,"json");
            }
        },
//if only uid is
        N:(method,myd,list,call)=>{
            let liste=!list ?[]:list;
            if(typeof myd==="object"){
                api.red.get('N'+myd.uid,old=>{
                    if(old=="NO"){method="set";}
                    let array={a:"upsert",method:method,uid:myd.uid,grp:myd.grp,receivedeoiF:myd.receivedeoiF,liste:liste}
                    if(!call){
                        xpost(s.api.uri+'ma/N',{q:JSON.stringify(array)},d=>{loadN(d)},"json");
                    }else{
                        xpost(s.api.uri+'ma/N',{q:JSON.stringify(array)},d=>{call(d);},"json");
                    }
                })
            }else{
                api.red.get('N'+myd,old=>{
                    if(old=="NO"){method="set";}
                    api.ma.getOne("uid,grp,receivedeoiF from ur where uid=?",[myd],ur=>{
                        let array={a:"upsert",method:method,uid:ur.uid,grp:ur.grp,receivedeoiF:ur.receivedeoiF,liste:liste}
                        if(!call){
                            xpost(s.api.uri+'ma/N',{q:JSON.stringify(array)},d=>{loadN(d);},"json");
                        }else{
                            xpost(s.api.uri+'ma/N',{q:JSON.stringify(array)},d=>{call(d);},"json");
                        }
                    })
                })
            }
        },
        my:(method,myd,list,call)=>{
            console.log('loading My'+myd)
            let liste=!list ?[]:list;
            if(typeof myd==="object"){
                let array={a:"upsert",method:method,uid:myd.uid,affiliate:myd.affiliate,grp:myd.grp,agent:myd.agent,membership:myd.membership,liste:liste}
                if(!call){
                    xpost(s.api.uri+'ma/my',{q:JSON.stringify(array)},d=>{
                        if(!!my.user){for(var i in my.user){my[i]=my.user[i];}delete my.user;}
                    },"json");
                }else{
                    xpost(s.api.uri+'ma/my',{q:JSON.stringify(array)},d=>{
                        if(!!my.user){for(var i in my.user){my[i]=my.user[i];}delete my.user;};call(d);
                    },"json");
                }
            }else{
                api.ma.getOne("uid,grp,membership,agent,affiliate from ur where uid=?",[myd],ur=>{
                    let array={a:"upsert",method:method,uid:ur.uid,affiliate:ur.affiliate,grp:ur.grp,agent:ur.agent,membership:ur.membership,liste:liste}
                    if(!call){
                        xpost(s.api.uri+'ma/my',{q:JSON.stringify(array)},d=>{
                            my=d;if(!!my.user){for(var i in my.user){my[i]=my.user[i];}delete my.user;}
                        },"json");
                    }else{
                        xpost(s.api.uri+'ma/my',{q:JSON.stringify(array)},d=>{
                            my=d;if(!!my.user){for(var i in my.user){my[i]=my.user[i];}delete my.user;};call(d);
                        },"json");
                    }
                })
            }
        }
    },
    red:{
        gfunc:(a,key,call)=>{if(!call){
            s.xget({key:key},d=>{console.log(d)},'json',s.api.uri+'red/'+a);
        }else{s.xget({key:key},call,'json',s.api.uri+'red/'+a);}
        },
        pfunc:(a,key,val,call)=>{
            var val=typeof(val)=="object" ? JSON.stringify(val):val;
            if(!call){
                xpost(s.api.uri+'red/'+a,{key:key,val:val},(d)=>{console.log(d)},'json');
            }else{xpost(s.api.uri+'red/'+a,{key:key,val:val},call,'json');}
        },
        get:function(key,call){this.gfunc((key.indexOf("*")!== -1?'keys':'get'),key,call)},
        lrange:function(key,call){this.gfunc('lrange',key,call)},
        sinter:function(key,call){this.gfunc('sinter',key,call)},
        sismember:function(key,call){this.gfunc('sismember',key,call)},
        set:function(key,val,call){this.pfunc('set',key,val,call)},
        sadd:function(key,val,call){this.pfunc('sadd',key,val,call)},
        rpush:function(key,val,call){this.pfunc('rpush',key,val,call)},
        del:(key,call)=>{
            if(!call){xpost(s.api.uri+'red/del',{key:key},(d)=>{console.log(d)});
            }else{xpost(s.api.uri+'red/del',{key:key},call);}},
    },
    form:(name,call)=>{
        api.red.get('form'+name,(r)=>{
                if(r=='NO'){
                    if(!call){
                        api.mo.getOne('form',{name:name},(d)=>{
                            console.log(isjson(d));
                        })
                    }else{
                        api.mo.getOne('form',{name:name},call)
                    }
                }else{
                    if(!call){
                        api.red.get('form'+name,(d)=>{
                            console.log(isjson(d));
                        })
                    }else{
                        api.mo.getOne('form'+name,call)
                    }
                }
            }
        )},
    /***********CACHE forms get from mongo and save to redis spd.gr*************/
    upforms:()=>{api.red.del('formschemado');api.red.del('formindex');
        api.mo.get('form',{},d=>{			//var names=d[LOC+LANG];
            for(var i in d){
                if(d[i].name!='undefined'){
                    console.log(d[i].name)
                    var name=d[i].name;delete(d[i].name);
                    api.red.set('form'+name,d[i]);
                }}
        })
    },
    formdel:(name)=>{
        api.red.del('form'+name);
        api.mo.del('form',{name:name});
    },
    my:(uid,call)=>{
        if(Array.isArray(uid)){
            var ids=[];
            for(var i in uid){ids.push({uid:uid[i]});}
            if(!call){
                api.mo.get("my",{$or:ids},d=>{console.table(isjson(d) ? JSON.parse(d) : d);})
            }else{
                api.mo.get("my",{$or:ids},call)
            }
        }else{
            api.mo.getOne('my',{uid:uid},d=>{
                if(!call){console.table(isjson(d) ? JSON.parse(d) : d);}else{api.mo.getOne('my',{uid:uid},call);}
            })
        }
    },
    mamour:(uid)=>{
        api.red.del(uid)
        api.ma.getOne("ur.*,author.level from ur LEFT join author on author.uid=ur.uid where ur.uid=?",[uid],(dma)=>{
            api.mo.up("my",{uid:uid},{$set:dma},(dmo)=>{
            })
        })
    },
    cache:{ 	//αν δεν υπάρχει στο cache βάλεαπ' τη mongo
        make:(col,name,call)=>{  	//col: [my OR form] if exist do not set
            //api.red.get('bulk',(d)=>{if(d=='no'){api.form('bulk',(d1)=>{api.red.set('bulk',d1)})}})
            const cachename=col+name;
            api.red.get(cachename,(red)=>{
                    if(red=='NO'){
                        s.api[col](name,(d1)=>{	//mo
                                api.red.set(cachename,d1,d2=>call(d2))
                            }
                        )
                    }
                }
            )
        },
        updatemy:(uid)=>{
            api.red.sinter('mye'+uid,(dred)=>{
                if(dred!="NO"){
                    api.ma.getOne("* from ur where uid=?",[uid],(dma)=>{
                        c('warn',dma)
                        api.mo.up("my",{uid:uid},{$set:dma},(dmo)=>{
                            c('warn',dmo)
                            c('warn',"my cachd updated");console.log(dmo);
                            api.red.del('mye'+uid)
                        })
                    })
                }
            })
        }
    },
    compo:(col,params,call)=>{
        if(!call){s.xget(s.api.uri+'compo/'+col,{q:JSON.stringify(params)},(d)=>{
            $('#'+col+'con').html(d);
        })
        }else{s.xget(s.api.uri+'compo/'+col,{q:JSON.stringify(params)},call);}
    },
    maria2mongo(col){s.api.ma.get("* from ?",[col],(d)=>{api.mo.insMany(col,d)})}
};
s.db = {
    /* G.DB
 * php DB class common js function
 * @rows :array
 * @table :string
 * @clause: string
 * */
        querychain: function (querya, queryb, callback) {
            $.post(s.ajaxfile, {a: 'querychain', b: querya, c: queryb}, callback, 'json');
        },
        func: function (method, param, callback, type) {
            var datatype = method != 'get' ? 'json' : '';
            if (type == 'POST') {
                $.post(s.ajaxfile, {a: 'func2', b: method, c: param}, callback, datatype);
            } else {
                $.get(s.ajaxfile, {a: 'func2', b: method, c: param}, callback, datatype);
            }
        },
        query: function (query, callback) {
         //   console.log(query)
            $.post(s.ajaxfile, {a: 'func', b: 'q', c: query}, callback);
        },
        columns:function(table,callback){
            $.get(s.ajaxfile, {a: 'columns', b: table}, callback,'json');
        },
        queryhtml: function (obj,callback,method) {
            var method = !method ? "GET" : method;
                $.ajax({
                    method: method,
                    //from encodeURIComponent(filefolder)
                    dataType:"json",
                    data: {a: 'query', value: obj.value,table:obj.table,where:obj.where},
                    url: s.ajaxfile,
                    success: callback,
                    error: callback
                });
        },
        queryone: function (table,obj,id,callback,method) {
            var method = !method ? "GET" : method;
            this.columns(table,function(col){
            var query= "UPDATE "+table+" SET "+obj.id+"='"+obj.value+"' WHERE "+col[0]+"="+id;
          //      console.log(query)
                $.ajax({
                    method: method,
                    //from encodeURIComponent(filefolder)
                    dataType:"json",
                    data: {a: 'query', b: 'query', c: query},
                    url: s.ajaxfile,
                    success: callback,
                    error: callback
                });
            })
        },
        is: function (row, callback) {
            this.func('', 'is', row, "WHERE name='" + row + "'", callback, 'json');
        },
        max: function (row, table, clause, callback) {
            $.get(s.ajaxfile, {a: 'max', b: row, c: table, d: clause}, callback);
        }
    };
s.file = {
		//saving json requires type: text , html type html
        put_contents: function (filefolder, content, success, contentType) {
            var a=contentType=="html" ? "save_html": "save_file";
			var content= contentType=="html" ? content :  JSON.stringify(content,null,2);
			$.ajax({
                type: "POST",
                //from encodeURIComponent(filefolder)
                //data: {a: 'save_file', b: encodeURIComponent(filefolder), c: JSON.stringify(content,null,2)},
                data: {a: a, b: encodeURIComponent(filefolder), c: content},
                url: s.ajaxfile,
                success: success,
                error: function (xhr, status, error) {
                        console.log(error);
                        console.log(xhr.textStatus)
                        console.log('error ' + status);
                    }
            });
            // console.log('executed')
        },
        get_contents: function (file,callback){
            $.get(s.ajaxfile, {a: 'getcontent', b: file,c:'encoded'},callback);
        },
        htmldecode: function (input) {
            var e = document.createElement('div');
            e.innerHTML = input;
            return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        },
        glob: function (folder, callback) {
            $.get(s.ajaxfile, {a: 'glob', b: folder}, callback, 'json');
        },
        unlink: function (file, callback) {
            $.get(s.ajaxfile, {a: 'unlink', b: file}, callback);
        },
        download: function(obj){
            s.loadJS("/gaia/lib/jquery.fileDownload.js", 'head',function(){
                $.fileDownload(obj.href)
                    .done(function () { s.modal('File download a success!'); })
                    .fail(function () { s.modal('File download failed!'); });

                return false; //this is critical to stop the click event which will trigger a normal file download
            });
        },
		include :function(url,data,callback,method,datatype){
			 var method =!method ? "GET":method;
			 var datatype =!datatype ? "json":datatype;
			 $.ajax({
                    type: method,
                    url: url,
                    data: data,
                    dataType: datatype,
                    success: callback,                    
                    error: function (xhr, status, error) {
                        console.log(error);
                        console.log(xhr.textStatus)
                        console.log('error ' + status);
                    }
                });
			
		}
    };
s.ui = {
        table :  {
            execute: function (divid, query, data, row,node) {
                if (row == "delete") {
                    var id = divid.replace('delete', '');
                    var q = s.vareplace(query, data);
                    s.db.func('query', q, function (res) {
                        if (res == 'yes') {
                            $('#'+node+id).remove();
                        }
                    });
                }
            },
            get: function (f) {
                var topbar = '';
                /*
                 TOP BAR
                 1) from date to date selection all tables have creation and modified date
                 2) search table
                 3) counter
                 4) order by label
                 5) pagination
                 */
                topbar += '<div class="board_id_container">' +
                    '<button style="float:left;margin: 0.5%;display:flex;justify-content: center;" onclick="s.ui.table.reset()" class="btn btn-default btn-sm">Reset</button>' +
                    '<input type="text" id="search" style="width: 78%; margin: 0.5% 0 10px 0;display:flex;justify-content: center;float: left;" onkeyup=" s.ui.table.search(this)" placeholder="search" value="' + (!coo('search') ? '' : coo('search')) + '" class="form-control input-sm">' +
                    '<div class="toFromTitle">' +
                    '<span>Registered from:</span><input style="display:inline-block;width:62%" style="margin: 6px;" type="date" onchange="s.ui.table.dateselection(this)" value="' + (!coo('date' + f.adata + 'from') ? '' : coo('date' + f.adata + 'from')) + '" id="date' + f.adata + 'from" class="form-control input-sm"></div>' +
                    '<div class="toFromTitle">' +
                    '<span>Until:</span><input style="display:inline-block;width:74%" type="date" style="margin: 6px;"  class="form-control input-sm" onchange="s.ui.table.dateselection(this)" value="' + (!coo('date' + f.adata + 'to') ? '' : coo('date' + f.adata + 'to')) + '" id="date' + f.adata + 'to"></div>' +
                    '<div class="label1"><span id="counter"></span> ' + s.get.sub + ' <span id="order_label"></span></div>' +
                    '<div id="pagination" class="paginikCon"></div>' +
                    '</div>';

                //HEAD OF TABLE
                var board = '';
                var append = 'append' in f ? f.append : (s.get.dsh ? '.gs-sidepanel' : '#main_window');

                for (var h in f.list) {
                    if (f.list[h].type != "img") {
                        board += '<th><button onclick="s.ui.table.orderby(this);" class="orderby" id="order_' + f.list[h].row + '">' + f.list[h].row + '</button></th>';
                    } else {
                        board += '<th>' + f.list[h].row + '</th>';
                    }
                }
                $(topbar + '<table class="TFtable"><tr class="board_titles">' + board + '</tr><tbody id="' + f.adata + '"></tbody></table>').appendTo(append);
                //read the loop
                this.loop(f);
            },
//reset button table
            reset: function () {
                //delete inputs
                coo.del('date' + s.f.adata + 'from');
                coo.del('date' + s.f.adata + 'to');
                coo.del('search');

                //clean inputs
                $('#search').val('');
                $('#date' + s.f.adata + 'from').val('');
                $('#date' + s.f.adata + 'to').val('');

                //reset
                s.ui.reset('#' + s.f.adata);
                this.loop(s.f);
            },
//ORDER BY
            orderby: function (obj) {
                var name = obj.id.replace('order_', '')
                var cookiename = s.explode('_', obj.id)[0];
                s.ui.reset('#' + s.f.adata);
                s.f.order[1] = s.f.order[0] == name ? (s.f.order[1] == "DESC" ? "ASC" : "DESC") : "ASC";
                s.f.order[0] = name;
                coo(s.get.mode + '_' + cookiename, s.f.order[0] + " " + s.f.order[1]);
                this.loop(s.f);
            },
//DATE SELECTION
            dateselection: function (obj) {
                coo(obj.id, obj.value)
                s.f.datauserfrom = obj.value;
                s.ui.reset('#' + s.f.adata);
                this.loop(s.f);
            },
//list search
            search: function (obj) {
                coo('search', obj.value);
                // cookieSet('userlist_page',1)
                s.ui.reset('#' + s.f.adata);
                this.loop(s.f)
            },
//set photos
            get_imgs: function (obj) {

                $.ajax({
                    type: 'GET',
                    url: s.ajaxfile,
                    data: {a: 'get_imgs', b: obj.ids, c: obj.objgroupid},
                    dataType: 'json',
                    success: function (imgs) {
                        // console.log(imgs)
                        for (var i in imgs) {
                            // console.log(i + ':' + imgs[i])
                            $('#fimage' + i).attr('src', s.get.UPLOADS + imgs[i]);
                        }
                    }
                });
            },
//TABLE LOOP
            loop: function (f) {
                var row, nature, divid, event, label, type, query, h, href, datarow, images = 0, board = '', ids = [], objgroupid;
                var order = "ORDER BY " + (coo(s.get.mode + '_order') != false ? coo(s.get.mode + '_order') : f.order.join(" "));
                f.page = 'page' in f ? f.page : 1;
                f.dateuserfrom = 'datefrom' in f ? f.page : "";
                // console.log(f.dateuserfrom)
                f.dateuserto = 'dateto' in f ? f.page : "";
                $.ajax({
                    type: 'GET',
                    url: s.ajaxfile,
                    data: {a: f.fetch[0], b: f.fetch[1], order: order, page: f.page, table: f.adata},
                    dataType: 'json',
                    success: function (data) {
                        // console.log(data[0].query)
                        // console.log(data)
                        if (data != 'No') {

                            for (var i in data) {
                                board += '<tr id="line' + data[i].id + '">';
                                for (var j in f.list) {
                                    row = 'row' in f.list[j] ? f.list[j].row : '';
                                    datarow = 'global' in f.list[j] ? f.list[j].global[data[i][row]] : data[i][row];
                                    type = 'type' in f.list[j] ? f.list[j].type : '';
                                    nature = 'nature' in f.list[j] ? f.list[j].nature : '';
                                    label = 'label' in f.list[j] ? f.list[j].label : row;
                                    query = 'query' in f.list[j] ? f.list[j].query : '';
                                    href = 'href' in f.list[j] ? (f.list[j].href) : '';
                                    event = 'event' in f.list[j] ? (f.list[j].event) : '';
                                    divid = row + data[i].id;
                                    //TYPES
                                    if (type == 'a') {
                                        if (nature != 'edit') {
                                            board += '<td><a href="' + s.vareplace(href, data[i]) + '">' + data[i][row] + '</a></td>';
                                        } else {
                                            board += '<td><a href="' + s.vareplace(href, data[i]) + '"><input id="' + divid + '" type="text" value="' + data[i][row] + '"></a></td>';
                                        }
                                    } else if (type == 'img') {
                                        // ids.push(data[i].id);
                                        // images=1;
                                        // objgroupid = f.list[j].objgroupid;
                                        board += '<td><img id="' + divid + '" src="' + (typeof data[i][row] != 'undefined' && data[i][row] != null ? s.get.UPLOADS + data[i][row] : s.siteurl + 'gaia/img/post.jpg') + '" width="30" height="30"></td>';
                                    } else if (type == 'button') {
                                        board += '<td><button id="' + divid + '" value="' + data[i].id + '" name="' + query + '" title="' + row + '" class="btn btn-default btn-xs" onclick="s.ui.table.execute(this.id,this.name,this.value,this.title)">' + label + '</button></td>';
                                    } else if (type == 'date') {
                                        board += '<td id="' + divid + '">' + s.date('Y-m-d, H:i', datarow) + '</td>';
                                    } else {
                                        if (nature != 'edit') {
                                            board += '<td id="' + divid + '"><span id="' + divid + '">' + datarow + '</span></td>';
                                        } else {
                                            board += '<td><input ' + divid + '" type="text" value="' + datarow + '"></td>';
                                        }
                                    }
                                }
                                board += '</tr>';
                            }
                            $(board).appendTo('#' + f.adata);

                        } else {
                            s.ui.reset('#pagination');
                            $('<tr>No results!</tr>').appendTo('#' + f.adata);

                        }

                        //APPEND SORT, COUNTER, PAGINATION
                        $('#counter').text(data[0].count);
                        $('#order_label').text(order + " - page: " + f.page);
                        if (typeof(data[0].count) != 'undefined') {
                            s.ui.pagination.get(f.pagenum, data[0].count, s.get.is.pagin);
                        }

                        //if img exist
                        // if(images==1) {
                        //     s.ui.table.get_imgs({ids: ids.join(","), objgroupid: objgroupid});
                        // }

                    },
                    error: function (xhr, status, error) {
                        console.log(error);
                        console.log(xhr.textStatus)
                        console.log('error ' + status);
                    }
                });

            },
            editable: function (id) {
                // console.log(id)
                $('td[id="' + id + '"]').html('<input id="' + id + '" value="drosakis111">');
            }
        },
        checkedAll: function (form) {
            var checked = false;
            var aa = document.getElementById('form');
            if (checked == false) {
                checked = true
            } else {
                checked = false
            }
            for (var i = 0; i < aa.elements.length; i++) {
                aa.elements[i].checked = checked;
            }
        },
        dragcopy: function (callback) {
            var listLength = $("[id^='list_']").length;
            for (var i = 0; i < listLength; i++) {
                Sortable.create($("[id^='list_']")[i], {
                    animation: 150,
                    onEnd: function (evt) {
                        // console.log(evt)
                        var file = evt.item.id.replace('nodorder', '');
                        var fromfolder = evt.from.id.replace('list_', '');
                        $.ajax({
                            type: "POST",
                            data: {a: 'dragcopy', b: fromfolder, c: file},
                            url: s.ajaxfile,
                            success: callback
                        });
                    }
                });
            }
        },
        draggable: function (obj, e) {
            e.preventDefault();
            var sidepanelClass = $('#' + obj.id).parent().attr('class');  //.gs-sidepanel
            // console.log(sidepanelClass)
            $(document)
                .mousemove(function (e) {
                    var mainwindow_width = parseInt($('#main_window').css('width')),
                        sidepanel = parseInt($('.' + sidepanelClass).css('width')),
                        el = $('#' + obj.id)[0],
                        drag = el.getBoundingClientRect(),
                        move = drag.left - e.pageX,
                        main_window_new = mainwindow_width - move,
                        sidepanelnew = sidepanel + move;
                    // console.log(main_window_new);
                    // console.log(move);
                //    $('#main_window').css('width', main_window_new);
                    $('.' + sidepanelClass).css('width', sidepanelnew);
                    coo('drgb-main',main_window_new);
                    coo('drgb-sidepanel',sidepanelnew);
                })
                .mouseup(function (e) {
                    $(document).unbind('mousemove');
                });
        },
        /*
         data[0] : direction : previous || next
         data[1] : db table to check for direction
         data[2] : get parameter
         data[3] : current get value
         data[4] : redirect body
         */
        goto: function (data) {
            var index, direct, value = parseInt(data[3]);

            s.db.func('fetchList1', data[2] + ',' + data[1] + ',' + 'ORDER BY id', function (list) {
              //  console.log(list)
                if (typeof(data[0]) != 'number') {
                    for (var i = 0; i < list.length; i++) list[i] = parseInt(list[i], 10);
                }
                index = list.indexOf(value);
                if (index >= 0 && index < list.length) {
                    if (data[0] == 'previous') {
                        direct = typeof list[index - 1] != 'undefined' ? list[index - 1] : list[list.length - 1];
                    } else if (data[0] == 'next') {
                        direct = typeof list[index + 1] != 'undefined' ? list[index + 1] : list[0];
                    }
                }
                location.href = data[4] + direct;
            });
        },

        //insert a div with id in a div to make it draggable with the #main_window
        modal: function (b) {
            var defaults = {title: "", message: "Message!", closeButton: true, scrollable: false};
            var b = $.extend({}, defaults, b);
            var c = (b.scrollable === true) ? 'style="max-height: 420px;overflow-y: auto;"' : "";
            var html = '<div class="modal fade" id="printModal">';
            html += '<div class="modal-dialog">';
            html += '<div class="modal-content">';
            html += '<div class="modal-header">';

            if (b.title.length > 0) {
                html += '<h4 class="modal-title">' + b.title + "</h4>"
            }

            html += "</div>";
            html += '<div class="modal-body" ' + c + ">";
            html += b.message;
            html += "</div>";
            html += '<div class="modal-footer">';

            if (b.closeButton === true) {
                html += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>';
            }
            html += "</div></div></div></div>";

            $("body").prepend(html);
            $("#printModal").modal().on("hidden.bs.modal", function () {
                $(this).remove()
            })
            $("#printModal").modal().on("click", "#pntButton", function () {
                $(this).print();
            })
        },
        //type :  info |  danger | success | warning
        notify : function(type,title,message,url){
            $.notify({
                // options
                icon: 'glyphicon glyphicon-'+type+'-sign',
                title: title,
                message: message,
                url: url,
                target: '_blank'
            },{
                // settings
                element: 'body',
                position: null,
                type: type,
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "bottom",
                    align: "left"
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 5000,
                timer: 1000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                // '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                (!url ? '':'<a href="{3}" target="{4}" data-notify="url"></a>') +
                '</div>'
            });
        },
        notification : {
            permission : function () {
                // Let's check if the browser supports notifications
                if (!("Notification" in window)) {
                    console.log("This browser does not support desktop notification");
                }

                // Let's check whether notification permissions have already been granted
                else if (Notification.permission === "granted") {
                    // If it's okay let's create a notification
                    console.log('notication granted');
                }

                // Otherwise, we need to ask the user for permission
                else if (Notification.permission !== "denied") {
                    Notification.requestPermission(function (permission) {
                        // If the user accepts, let's create a notification
                        if (permission === "granted") {
                            console.log('notication granted');
                            // var notification = new Notification("Hi there!");
                        }
                    });
                }

                // At last, if the user has denied notifications, and you
                // want to be respectful there is no need to bother them any more.
                Notification.requestPermission().then(function(result) {
                    console.log(result);
                });
            },
            set : function (activity,body, icon, title,link) {
                var n;
                var link=link;
                if(activity==1) {
                    var options = {
                        body: body,
                        icon: icon
                    };
                    n = new Notification(title, options);
                    n.onclick = function () {
                        window.open(link);
                    };
                }else if(activity==0){
                    if(typeof(n)!='undefined') n.close();
                }
            },
            unset : function(){

            }
        },
		pagination2 : function (current,total_results,results_per_page){
			var current = parseInt(current);
			var last= Math.ceil(total_results/results_per_page);
			var previous = current!=1 ? '<button id="page_'+(parseInt(current)-1)+'" class="glyphicon glyphicon-chevron-left"></button>':'';
			var firstb = '<button id="page_1">1</button>';
			var list='';
			var starting= current <= 5 ? 2 : current - 4;
			var ending=	  last < 10 ? last : (current <= 5  ? 10
					: (
						current==last
							? last :
							(
								last - current >= 4
									? current + 4
									: current+(last - current)
							)
					)
			);
			for (var i = starting; i <= ending; i++) {
				list += '<button id="page_'+i+'">'+i+'</button>';
			}
			// var lastb = last >= 10 && current!=last ? '<button id="page_'+last+'">Last</button>':'';
			var lastb ='';
			var next = current!=last ? '<button id="page_'+(parseInt(current)+1)+'" class="glyphicon glyphicon-chevron-right"></button>':'';
			var pagination= '<div class="pagin">'+previous+firstb+list+lastb+next+'</div>';
			$('#pagination').html(pagination);
			//set selected page
			$('#page_'+current).addClass('pageSelected'); //selected
		},
        pagination: {
            get: function (current, total_results, results_per_page,loopname) {
				var loopname=!loopname ? '' : loopname;
                s.ui.reset('#pagination');
                var last = Math.ceil(total_results / results_per_page);
                var previous = current != 1 ? '<button value="'+loopname+'" onclick="s.ui.pagination.page(this)" id="page_' + (parseInt(current) - 1) + '" class="glyphicon glyphicon-chevron-left"></button>' : '';
                var firstb = '<button value="'+loopname+'" onclick="s.ui.pagination.page(this)" id="page_1">1</button>';
                var list = '';
                var starting = current <= 5 ? 2 : current - 4;
                var ending = last < 10 ? last : (current <= 5 ? 10 : (current == last ? last : (last - current >= 4 ? current + 4 : current + (last - current))));

                for (var i = starting; i <= ending; i++) {
                    list += '<button value="'+loopname+'" onclick="s.ui.pagination.page(this)" id="page_' + i + '">' + i + '</button>';
                }

                var lastb = last >= 10 && current != last ? '<button value="'+loopname+'" onclick="s.ui.pagination.page(this)" id="page_' + last + '">Last</button>' : '';
                var next = current != last ? '<button value="'+loopname+'" onclick="s.ui.pagination.page(this)" id="page_' + (parseInt(current) + 1) + '" class="glyphicon glyphicon-chevron-right"></button>' : '';

                $('#pagination').html('<div class="pagin">' + previous + firstb + list + lastb + next + '</div>');
                //set selected page
                $('#page_' + current).addClass('pageSelected'); //selected
            },
            page: function (obj) {
                var exp = s.explode('_', obj.id);
                // s.f.page = exp[1];
                // console.log(exp)
                coo(obj.value+'_page',exp[1]);
                // s.ui.reset('#' + s.f.adata);
                s.ui.reset('#' + obj.value);
				var name=obj.value+'list';
			//	console.log(name);
				window[name]();
                //s.ui.list.get(obj.value);
                 //s.ui.table.loop(s.f);
            }
        },
        reset: function (div) {
            $(div).html('');
        },
        /* SET CUSTOM HTML ATTRIBUTE usage set: set_attr('module','analytics','#newtag');
         usage get: $('#newtag').attr('module', 'anal');
         */
        scrollBottom: function (div) {
            /*
             scroll to bottom after insert chat
             */
            var height = $(div)[0].scrollHeight;
            $(div).scrollTop(height);
            // console.log('scrolled to ' + height)
        },
        set_attr: function (name, value, div) {
            var tag = _(div);
            var att = document.createAttribute(name);
            att.value = value;
            tag.setAttributeNode(att);
        },
        /*
         * Switcher hides/shows one/more divs
         * @div Array OR String ie toggles visibility of one/more divs with another
         * @display block, inline-block etc
         * @effect no effect just open-close, fade, slide
         * */
        switcher: function (div, effect, display) {
            var display = !display ? 'block' : display;
            //more divs (open one, close other(s))
            if (div.constructor === Array) {
                var readid = div[0], editid = div[1];
                if ($(readid).css('display') == 'none') {
                    if (typeof effect != 'undefined') {
                        if (effect == 'fade') {$(editid).fadeOut('medium');$(readid).fadeIn('medium');}
                        else {$(editid).hide(effect);$(readid).show(effect);}
                    } else {
                        $(editid).css('display', 'none');
                        $(readid).css('display', display);
                    }
                } else {
                    if (typeof effect != 'undefined') {
                        if (effect == 'fade') { $(readid).fadeOut(500);$(editid).fadeIn(500);}
                        else {$(readid).hide(effect);$(editid).show(effect);}
                    } else {$(readid).css('display', 'none');$(editid).css('display', display);}
                }
            } else {
                var edit = $(div);
                if (edit.css('display') == 'none') {
                    if (!effect) {edit.css('display',display);} else if(effect=='fade') {edit.fadeIn(500);}else if(effect=='slide') {edit.slideDown('medium');}
                } else {
                    if (!effect) {edit.css('display','none');} else if(effect=='fade') {edit.fadeOut(500);} else if(effect=='slide') {edit.slideUp('medium');}
                }
            }
        },
        sortable: function (query, tag) {
			//console.log('query:'+query)
			//console.log('tag:'+tag)
            var listLength = $("[id^='list']").length;
           //  console.log(listLength);
            for (var i = 0; i < listLength; i++) {
                Sortable.create($("[id^='list']")[i], {
                    onEnd: function (evt) {
                        var id = evt.from.id.replace('list', '');
                      //  console.log(id);
                        // console.log('onEnd.list:', [evt.item, evt.from]);
                        //var order = $(".group" + id + " " + tag);
                        var order = $(".menuBox" + id);
					//	console.log(order)
                        var allIds = [];
                        for (var z in order) {
                            var el = order[z];
                            if (el.id) {
                                allIds.push(el.id.replace('nodorder' + id + '_', ''));
                            }
                        }
                     //    console.log(allIds);
                        // console.log(query);
                        $.ajax({
                            type: "POST",
                            data: {a: 'sorting', order: allIds, query: query},
                            url: s.ajaxfile,
                            success: function (data) {
                                for (var j in allIds) {
                                    $('#menusrt' + id+allIds[j]).text(j);
                                }
                            },error(xhr,error){
								console.log(xhr)
								console.log(error)
								
							}
                        });
                    }
                });
            }
        },
        //table produces TABLES- * type:  a | img | button | date * update if img s.db.func, add hidden objgroup
        tree : function(){
            // Hide all subfolders at startup
            $(".filedir").find("UL").hide();
            // Expand/collapse on click
            $(".tree-dir A").click( function() {
                $(this).parent().find("UL:first").slideToggle("medium");
                if( $(this).parent().attr('className') == "tree-dir" ) return false;
            });
        },
        viewer: { 
			img:function(){
        //get image mode
        //PHOTOS MODAL on press button right left
        var hrefs = new Array();
		var pattern = /^(http|https|ftp)/;  //exclude https
        $('.viewImage').each(function () {
				var href=$(this).attr('href');
			if(href!='/gaia/img/myface.jpg' && href!=''){
				//var cleaned=s.str_replace(G.UPLOADS,'',href);
				//if(!pattern.test(cleaned)){
				hrefs.push(href);		
				//}
			}    			
            // }
        })
				$.unique(hrefs)
        //IMAGE	MODAL VIEWER
        $(document).on("click", ".viewImage, .viewVideo", function (e) {

            e.preventDefault();
            var imgHref = $(this).attr('href');
			 var imgid = $(this).parent().attr('id');
             //var imgid = s.str_replace(G.UPLOADS,'',imgHref);
            //log(hrefs)
            //index
            var index = hrefs.indexOf(imgHref);
				var photoBox = s.dialog({
                title: "Media <span id='viewCounter'>" + index + "</span> / " + hrefs.length + "",
                success: {},
                callback: function () {
                },
                message: '<div class="myPhotosGallery" id="modal' + imgid + '"><div id="prev_' + imgid + '" class="arrowGalleryL"></div><img id="img_' + imgid + '" src="' + imgHref + '" width="100%"><div id="next_' + imgid + '" class="arrowGalleryR"></div><div class="viewTitle"></div></div>'
				})
			})
			//IMAGE	CHANGE BUTTON EVENT
			.on("click swipeleft swiperight", ".arrowGalleryR, .arrowGalleryL",function (e) {
				var imgid = $(this).parent().attr('id').replace('modal', '');
				var href = $("#img_" + imgid).attr('src');
				//index href of hrefss
				var index = hrefs.indexOf(href);
			
				//left or right new index after click
				var rightorleft = $(this).attr('class').replace('arrowGallery', '');
				var newindex = rightorleft == 'R' 				
                    ? (index==hrefs.length - 1 ? 0 : Math.abs(index) + 1)
                    : (index==0 ? hrefs.length -1 : Math.abs(index) - 1);
						console.log(newindex)
						console.log(hrefs[newindex])
				//change index counter
			//	var newindexCounter = rightorleft == 'R' ? newindex + 1 : newindex - 1;
			//	$("#viewCounter").text(newindexCounter);
				$("#viewCounter").text(newindex);
				$("#img_" + imgid).hide().attr('src',hrefs[newindex]).show();
			})
            },
            /*
             * PDF VIEWER - DOWNLOADER
             * just add the class view-pdf and follow this time of format
             * <a class="printGrey  btn-primary view-pdf" href="https://"+document.domain+"/print/post.php?uname=upvolume&amp;pname=art18" id="print_12183" title="art18"></a>
             *
             * */
            pdf: function () {
                $(document).on('click', '.view-pdf', function () {
                    var pdf_link = $(this).attr('href');
                    var iframe = '<div class="iframe-container"><iframe src="' + pdf_link + '"></iframe></div>'
                    $.createModal({
                        title: this.title,
                        message: iframe,
                        printButton: true,
                        closeButton: true,
                        scrollable: false
                    });
                    return false;
                });
            }
        }
    };
//g.upload.uploader(g.get.mode, 1, g.get.id);
s.media= {
    uploader: function (table, objgroup, linkid,callback) {
		console.log([table, objgroup, linkid])		
        var url = s.ajaxfile,
            uploadButton = $('<button/>')
                .addClass('btn btn-primary')
                .css('margin', '0 0 37px 137px')
                .prop('disabled', true)
                .text('Processing...')
                .on('click', function () {
                    var $this = $(this),
                        data = $this.data();
                    $this
                        .off('click')
                        .text('Abort')
                        .on('click', function () {
                            $this.remove();
                            data.abort();
                        });
                    data.submit().always(function () {
                        $this.remove();
                    });
                });

        $("#fileupload").fileupload({
            url: url,
            formData: {a: 'insert_obj', objgroup: objgroup, linkid: linkid, table: table},
            dataType: 'json',
            autoUpload: false,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            maxFileSize: 999000,
            // Enable image resizing, except for Android and Opera,
            // which actually support image resizing, but fail to
            // send Blob objects via XHR requests:
            disableImageResize: /Android(?!.*Chrome)|Opera/
                .test(window.navigator.userAgent),
            previewMaxWidth: 228,
            previewMaxHeight: 250,
            previewCrop: true,
            done: function (e, data) {				
                callback(data)
            }
        })
            .on('fileuploadadd', function (e, data) {
                // data.context = $('<div/>').appendTo('#files');
                data.context = $('#files').html('');
                $.each(data.files, function (index, file) {
                    var node = $('#files');
                    // var node = $('<p/>').append($('<span/>').text(file.name));
                    if (!index) {
                        // .append('<br>')

                        node.append(uploadButton.clone(true).data(data));
                    }
                    $('#progress').show();
                    // node.appendTo(data.context);
                });
            })
            .on('fileuploadprocessalways', function (e, data) {
                var index = data.index,
                    file = data.files[index],
                    node = $(data.context[index]);
                // console.log(data.context[index]);
                if (file.preview) {
                    node.prepend(file.preview);
                }
                if (file.error) {
                    node
                        .append('<br>')
                        .append($('<span class="text-danger"/>').text(file.error));
                }
                if (index + 1 === data.files.length) {
                    data.context.find('button')
                        .text('Upload')
                        .prop('disabled', !!data.files.error);
                }

            })
            .on('fileuploadprogressall', function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                );

                function close_progress() {
                    $('#progress').hide()
                }

                if (progress == '100') {
                    setTimeout(close_progress, 1000);
                }

            })
            .on('fileuploaddone', function (e, data) {
                $('#progress').hide();

                $.each(data.result.files, function (index, file) {
                    if (file.url) {
                        var link = $('<a>')
                            .attr('class', 'viewImage')
                            .prop('href', file.url);
                        $(data.context.children()[index])
                            .wrap(link);
                    } else if (file.error) {
                        var error = $('<span class="text-danger"/>').text(file.error);
                        $(data.context.children()[index])
                            .append('<br>')
                            .append(error);
                    }
                });

            })
            .on('fileuploadfail', function (e, data) {
                $.each(data.files, function (index) {
                    var error = $('<span class="text-danger"/>').text('File upload failed.');
                    $(data.context.children()[index])
                        .append('<br>')
                        .append(error);
                });
            })
            .prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
    },
	select: function(obj){
			console.log(obj)
		
		s.db.func('fa', "SELECT * from obj GROUP BY filename",function (imgs) {
			console.log(imgs)
			var modaldata='';
			for(var i in imgs){
				modaldata +='<div id="obj_'+imgs[i].id+'" class="img-thumbnail" style="float: left;width: 220px;height:360px;position:relative;margin:1px">'+
				'<img id="media_'+imgs[i].id+'" style="width:200px;overflow:hidden;vertical-align: middle;margin:4px;" src="'+G.UPLOADS+imgs[i].filename+'"/>'+
				'<div style="display:block;line-height: 1.0em;position:relative">'+                
				'<div class="desc">File:'+imgs[i].filename+'</div>'+				
				'<div class="desc">Title:'+imgs[i].title+'</div>'+
				'<div class="desc">Summary:'+imgs[i].summary+'</div>'+				
				'<div class="desc">Created:'+s.date('Y-m-d',imgs[i].created)+'</div>'+
				'</div>'+								
				'</div>';				
			}
			var mediabox=bootbox.dialog({
			title: "Media",			
			message: modaldata,
			title: "Select Image (double click to select)",
			buttons: {},
			show: true,
			})
			
			$(document).on("click",".img-thumbnail", function() {
				$(this).css('background','white').css('background','#c7fb6026');				
			})	
			$(document).on("dblclick",".img-thumbnail", function() {			
			var id=this.id.replace("obj_","");
			var file=$('#media_'+id).attr('src');
			var filename=s.str_replace(G.UPLOADS,'',file);
			var id=G.mode=='user' ? G.uid : G.id;
			var query="UPDATE "+G.mode+" SET img='"+filename+"' WHERE id="+id;
			console.log(query);
				s.db.query(query,function(res){
				//	console.log(res)					
					$('#files').html('<img src="'+file+'" style="height:250px;width: 229px;margin: -21px 0 0 -21px;">')
					mediabox.modal('hide');
				})
			});

			//box.modal('show');			
		})
	}	
}
s.init= {
    changeLang: function (langid) {
        coo('LANG', langid);
        location.reload();
    },
//SET online-offline users * one classname with joined uid* online dot is added as a class user_offline user_online* interval 5 sec
//AUTOMATION (REAL TIME) INTERVALS setInterval(s.getActive,5000);
    isActive: function (uid) {
        $.get(s.ajaxfile, {a: "fetch", b: "fetch", c: "SELECT phase FROM user WHERE id=" + uid}, function (data) {
            if (data.phase == 2) {
                $("div[class*='user_" + uid + "']").removeClass('user_offline').addClass('user_online');
            } else {
                $("div[class*='user_" + uid + "']").removeClass('user_online').addClass('user_offline');
            }
        });
    },
    getActive: function () {
        $("div[class*='user_']").each(function () {
            var uid = this.className.replace(className, '');
            this.isActive(uid);
        });
    },
    login: function () {
        var mail = $('#mail').val().trim();
        var pass = $('#pass').val().trim();
        var authArray = ['2', '3', '4', '5'];
		var params={a: 'login', b: pass, c: mail};
		console.log(params)
        $.get(s.ajaxfile,params,function(data){
            console.log(data)
            if (data == 'no_account') {
                alert("Account does not exist");
                //if not integer ie is not active account
                return false;
            } else if (data === 'authentication_pending') {
                alert("AUTHENTICATION is PENDING");
            } else if (s.inlist(data['auth'], authArray)) {
                // if not integer ie authentication pending
                s.confirm(s.get.auth[data['auth']], function (result) {
                    if (result == true) {
                        if (data.authentication == '4') {
                            coo('GSID', data['id']);
                            coo('GSLIBID', 2);
                            coo('GSGRP', data['grp']);
                        }
                    }
                });
            } else {
                var gcookies = {
                    GSID: 'id',
                    GSGRP: 'grp',
                    GSNAME: 'name',
                    GSIMG: 'img',
                    LANG: 'lang',
                    sp: 'sp'
                };
                for (var c in gcookies) {
                    coo(c, data[gcookies[c]]);
                }
				console.log(data)
				if(coo('GSID')!='undefined'){
                location.href = "/";
				}
              //  console.log(data);
            }
        },'json');
    },
	register : {
		submit: function () {
			//check if mail exist
			var mail = $('#gs-mail').val().trim();
			var name = $('#gs-name').val().trim();
			s.db.func('validate', mail, function (mailres) {
				if (mailres == "ok") {
					s.db.func('name_not_exist', name, function (nameres) {
						if (nameres == "ok") {
							var firstname = $('#gs-firstname').val().trim();
							var lastname = $('#gs-lastname').val().trim();
							var pass = $('#gs-pass').val().trim();
							var pass2 = $('#gs-pass2').val().trim();
							if (pass == pass2) {
								s.db.func("f","SELECT id FROM user WHERE mail='" + mail + "' OR name='" + name + "'", function (data) {
								if (data === false) {
									s.db.query("INSERT INTO user(name,firstname,lastname,mail,pass,grp,auth,registered) VALUES('" + name + "','" + firstname + "','" + lastname + "','" + mail + "','" + pass + "',2,1," + s.time() + ")", function (insert) {
									if (insert!='No') {
										s.ui.notify("success","Registration successfull");
										$("input").val('');
										}
									});
								} else {
									s.ui.notify("danger","Email or Name already exist");
								}
								//	$('#gs-subscribe-mail').val('');
								});
							}else{s.ui.notify("danger",'Password do not match!');}
						//	s.ui.form.reset_inputs(['#gs-mail', '#gs-name', '#gs-pass', '#gs-pass2'])
						}else{s.ui.notify("danger","Username validation problem")}
					})
				}else{s.ui.notify("danger","Email validation problem")}
			})
		},
		subscribe: function (mail) {
			//check if mail exist
			var mail = mail.trim();
			s.db.func('validate', mail, function (mailres) {
				if (mailres == "ok") {
				s.db.func("f", "SELECT id FROM user WHERE mail='" + mail + "'", function (data) {
				//insert email, status
				if (data == 'No') {
				s.db.query("INSERT INTO user(mail,grp,registered) VALUES('" + mail + "',1," + s.time() + ")", function (insert) {
				// console.log(insert)
				if (insert != 'No') {
					s.ui.notify("success","Subscription successfull");
				}
				});
				} else {
					s.ui.notify("danger","Email already exist");
				}
				$('#gs-subscribe-mail').val('');				
				});
				}else{s.ui.notify("danger","Email validation problem")}
			})				
			}
		},
		/********************
	LOAD PVARS TO PAGE
	!!! pvars should be load after widgets, so pvars inside widgets would load correctly
	********************/	
         pvars_get: function(){
		var pvars = $(".pvar").map(function () {
            return this.id;
        }).get();
		//console.log(pvars);
        // and insert and create an array
		if(pvars.length > 0){
        $.ajax({
            type: "POST",
            data: {a: 'pvars_get', b: JSON.stringify(pvars)},
            url: s.ajaxfile,
            dataType: "json",
            success: function (data) {
                //append pvars
                for (var i in data) {
					var content=decodeURIComponent(data[i].en);
                    if (data[i].type == "text" || data[i].type == "textarea") {
                        $('#' + data[i].name).text(content);
                    } else if (data[i].type == "html") {						
                        $('#' + data[i].name).html(content);
                    } else if(data[i].type == "img") {
                        $('#' + data[i].name).attr("src",content);
					} else if(data[i].type == "color") {
						$('#' + data[i].name).css("background",content);
                    }
                }
            },error:function(xhr,error){
				console.log(xhr)
				console.log(error)
			}
        });
		}
		},
    logout: function () {
        //clear session
        s.sesclear();
        coo.delAll(['LANG']);
        location.href = '/';
    }
}
s.apit = function (com, callback){
        // console.log(command);
        //  var res = [];for (var i in command) {res.push(i + '=' + command[i]);};
        var idQ= typeof(com.id)!='undefined' ? "/"+com.id: "";
        var request = "https://"+document.domain+"/api/"+com.method+"/"+com.table+idQ;
        console.log(request);
        $.getJSON(request,callback);
    };
s.setup={
	//gaia update
	gaia_update_button:function(appendid){    
		var find={
		   "selector": {"_id": {"$gt": null}},
		   "sort": [{"_id": "desc"}],"limit": 1
		   };
/*	s.cors("https://vivalibro.gr:6984/gaia/_find",JSON.stringify(find),function(res){
		console.log(res.docs[0]._id);	 					
		var gaia_latest_version=parseFloat(res.docs[0]._id).toFixed(2)
		var gaia_current_version= !G.is ? parseFloat($('#current_version').val()).toFixed(2) : parseFloat(G.is.system_version).toFixed(2);
		if (gaia_current_version==0){
			var html = '<button class="btn btn-success" id="update_gaia'+gaia_latest_version+'">Install GaiaCMS '+gaia_latest_version+'</button>';		
		}else if(gaia_latest_version == gaia_current_version){
				var html = 'Latest installed GaiaCMS version '+gaia_latest_version;				
		}else if(gaia_latest_version > gaia_current_version){		
				var html = 'Current GaiaCMS version '+gaia_current_version+' <button class="btn btn-success" id="update_gaia'+gaia_latest_version+'">Update gaiaCMS to '+gaia_latest_version+'</button>';
		}
			$(appendid).append(html);		
		},'POST');*/

	$(document).on("click","button[id^='update_gaia']",function(data){
		var version = this.id.replace('update_gaia','')
		$.get(s.ajaxfile,{a:"gaia_update",b:version},function(res){
			console.log(res);
			if(res[0]=="copied" && res[1]=="extracted"){
			s.ui.notify("success","GaiaCMS Update successful")
			}else if (res=='nossh'){
			s.ui.notify("danger","SSH is not working on this system. Try download template and extract folder to domain/templates folder")
			}
		},"JSON");
	})		
	},
	//template update
	template_update_button:function(template,appendid){    
		var find={
		   "selector": {"_id": {"$gt": null}},
		   "sort": [{"_id": "desc"}],"limit": 1
		   };
	s.cors("https://vivalibro.gr:6984/templates/_find",JSON.stringify(find),function(res){
		console.log(res.docs[0]._id);	 					
		var template_latest_version=parseFloat(res.docs[0]._id).toFixed(2)
		var template_current_version= !G.is ? parseFloat($('#template_current').val()).toFixed(2) : parseFloat(G.is.system_version).toFixed(2);
		if (template_current_version==0){
			var html = '<button class="btn btn-success" id="update_gaia'+template_latest_version+'">Install tepmlate '+template_latest_version+'</button>';		
		}else if(template_latest_version == template_current_version){
				var html = 'Latest installed tepmlate version '+template_latest_version;				
		}else if(template_latest_version > template_current_version){		
				var html = 'Current tepmlate version '+template_current_version+' <button class="btn btn-success" id="update_template_'+template+'_'+template_latest_version+'">Update template '+template+' to '+template_latest_version+'</button>';
		}
			$(appendid).append(html);		
		},'POST');
		
	$(document).on("click","button[id^='template_update']",function(data){
		var version = this.id.replace('template_update','')
		$.get(s.ajaxfile,{a:"template_update",b:version},function(res){
			console.log(res);
			if(res[0]=="copied" && res[1]=="extracted"){
			s.ui.notify("success","GaiaCMS Update successful")
			}else if (res=='nossh'){
			s.ui.notify("danger","SSH is not working on this system. Try download template and extract folder to domain/templates folder")
			}
		},"JSON");
	})		
	}
	};
s.json={
		 form: function(id){
					var newform = $(id).serializeArray();	
					var json={};
					for(var i in newform){
						json[newform[i].name]=newform[i].value;
					}
					return json;
				}
	}

