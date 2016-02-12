/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
(function(){var a,b,c,d,e,f,g,h,i=[].slice,j={}.hasOwnProperty,k=function(a,b){function c(){this.constructor=a}for(var d in b)j.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};g=function(){},b=function(){function a(){}return a.prototype.addEventListener=a.prototype.on,a.prototype.on=function(a,b){return this._callbacks=this._callbacks||{},this._callbacks[a]||(this._callbacks[a]=[]),this._callbacks[a].push(b),this},a.prototype.emit=function(){var a,b,c,d,e,f;if(d=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],this._callbacks=this._callbacks||{},c=this._callbacks[d])for(e=0,f=c.length;f>e;e++)b=c[e],b.apply(this,a);return this},a.prototype.removeListener=a.prototype.off,a.prototype.removeAllListeners=a.prototype.off,a.prototype.removeEventListener=a.prototype.off,a.prototype.off=function(a,b){var c,d,e,f,g;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(d=this._callbacks[a],!d)return this;if(1===arguments.length)return delete this._callbacks[a],this;for(e=f=0,g=d.length;g>f;e=++f)if(c=d[e],c===b){d.splice(e,1);break}return this},a}(),a=function(a){function c(a,b){var e,f,g;if(this.element=a,this.version=c.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(c.instances.push(this),this.element.dropzone=this,e=null!=(g=c.optionsForElement(this.element))?g:{},this.options=d({},this.defaultOptions,e,null!=b?b:{}),this.options.forceFallback||!c.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(f=this.getExistingFallback())&&f.parentNode&&f.parentNode.removeChild(f),this.options.previewsContainer!==!1&&(this.previewsContainer=this.options.previewsContainer?c.getElement(this.options.previewsContainer,"previewsContainer"):this.element),this.options.clickable&&(this.clickableElements=this.options.clickable===!0?[this.element]:c.getElements(this.options.clickable,"clickable")),this.init()}var d,e;return k(c,a),c.prototype.Emitter=b,c.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],c.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,filesizeBase:1e3,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,capture:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(a,b){return b()},init:function(){return g},forceFallback:!1,fallback:function(){var a,b,d,e,f,g;for(this.element.className=""+this.element.className+" dz-browser-not-supported",g=this.element.getElementsByTagName("div"),e=0,f=g.length;f>e;e++)a=g[e],/(^| )dz-message($| )/.test(a.className)&&(b=a,a.className="dz-message");return b||(b=c.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(b)),d=b.getElementsByTagName("span")[0],d&&(d.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(a){var b,c,d;return b={srcX:0,srcY:0,srcWidth:a.width,srcHeight:a.height},c=a.width/a.height,b.optWidth=this.options.thumbnailWidth,b.optHeight=this.options.thumbnailHeight,null==b.optWidth&&null==b.optHeight?(b.optWidth=b.srcWidth,b.optHeight=b.srcHeight):null==b.optWidth?b.optWidth=c*b.optHeight:null==b.optHeight&&(b.optHeight=1/c*b.optWidth),d=b.optWidth/b.optHeight,a.height<b.optHeight||a.width<b.optWidth?(b.trgHeight=b.srcHeight,b.trgWidth=b.srcWidth):c>d?(b.srcHeight=a.height,b.srcWidth=b.srcHeight*d):(b.srcWidth=a.width,b.srcHeight=b.srcWidth/d),b.srcX=(a.width-b.srcWidth)/2,b.srcY=(a.height-b.srcHeight)/2,b},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:g,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:g,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(a){var b,d,e,f,g,h,i,j,k,l,m,n,o;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(a.previewElement=c.createElement(this.options.previewTemplate.trim()),a.previewTemplate=a.previewElement,this.previewsContainer.appendChild(a.previewElement),l=a.previewElement.querySelectorAll("[data-dz-name]"),f=0,i=l.length;i>f;f++)b=l[f],b.textContent=a.name;for(m=a.previewElement.querySelectorAll("[data-dz-size]"),g=0,j=m.length;j>g;g++)b=m[g],b.innerHTML=this.filesize(a.size);for(this.options.addRemoveLinks&&(a._removeLink=c.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),a.previewElement.appendChild(a._removeLink)),d=function(b){return function(d){return d.preventDefault(),d.stopPropagation(),a.status===c.UPLOADING?c.confirm(b.options.dictCancelUploadConfirmation,function(){return b.removeFile(a)}):b.options.dictRemoveFileConfirmation?c.confirm(b.options.dictRemoveFileConfirmation,function(){return b.removeFile(a)}):b.removeFile(a)}}(this),n=a.previewElement.querySelectorAll("[data-dz-remove]"),o=[],h=0,k=n.length;k>h;h++)e=n[h],o.push(e.addEventListener("click",d));return o}},removedfile:function(a){var b;return a.previewElement&&null!=(b=a.previewElement)&&b.parentNode.removeChild(a.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(a,b){var c,d,e,f;if(a.previewElement){for(a.previewElement.classList.remove("dz-file-preview"),f=a.previewElement.querySelectorAll("[data-dz-thumbnail]"),d=0,e=f.length;e>d;d++)c=f[d],c.alt=a.name,c.src=b;return setTimeout(function(){return function(){return a.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(a,b){var c,d,e,f,g;if(a.previewElement){for(a.previewElement.classList.add("dz-error"),"String"!=typeof b&&b.error&&(b=b.error),f=a.previewElement.querySelectorAll("[data-dz-errormessage]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.textContent=b);return g}},errormultiple:g,processing:function(a){return a.previewElement&&(a.previewElement.classList.add("dz-processing"),a._removeLink)?a._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:g,uploadprogress:function(a,b){var c,d,e,f,g;if(a.previewElement){for(f=a.previewElement.querySelectorAll("[data-dz-uploadprogress]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push("PROGRESS"===c.nodeName?c.value=b:c.style.width=""+b+"%");return g}},totaluploadprogress:g,sending:g,sendingmultiple:g,success:function(a){return a.previewElement?a.previewElement.classList.add("dz-success"):void 0},successmultiple:g,canceled:function(a){return this.emit("error",a,"Upload canceled.")},canceledmultiple:g,complete:function(a){return a._removeLink&&(a._removeLink.textContent=this.options.dictRemoveFile),a.previewElement?a.previewElement.classList.add("dz-complete"):void 0},completemultiple:g,maxfilesexceeded:g,maxfilesreached:g,queuecomplete:g,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},d=function(){var a,b,c,d,e,f,g;for(d=arguments[0],c=2<=arguments.length?i.call(arguments,1):[],f=0,g=c.length;g>f;f++){b=c[f];for(a in b)e=b[a],d[a]=e}return d},c.prototype.getAcceptedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted&&e.push(a);return e},c.prototype.getRejectedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted||e.push(a);return e},c.prototype.getFilesWithStatus=function(a){var b,c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.status===a&&f.push(b);return f},c.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(c.QUEUED)},c.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(c.UPLOADING)},c.prototype.getActiveFiles=function(){var a,b,d,e,f;for(e=this.files,f=[],b=0,d=e.length;d>b;b++)a=e[b],(a.status===c.UPLOADING||a.status===c.QUEUED)&&f.push(a);return f},c.prototype.init=function(){var a,b,d,e,f,g,h;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(c.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(d=function(a){return function(){return a.hiddenFileInput&&document.body.removeChild(a.hiddenFileInput),a.hiddenFileInput=document.createElement("input"),a.hiddenFileInput.setAttribute("type","file"),(null==a.options.maxFiles||a.options.maxFiles>1)&&a.hiddenFileInput.setAttribute("multiple","multiple"),a.hiddenFileInput.className="dz-hidden-input",null!=a.options.acceptedFiles&&a.hiddenFileInput.setAttribute("accept",a.options.acceptedFiles),null!=a.options.capture&&a.hiddenFileInput.setAttribute("capture",a.options.capture),a.hiddenFileInput.style.visibility="hidden",a.hiddenFileInput.style.position="absolute",a.hiddenFileInput.style.top="0",a.hiddenFileInput.style.left="0",a.hiddenFileInput.style.height="0",a.hiddenFileInput.style.width="0",document.body.appendChild(a.hiddenFileInput),a.hiddenFileInput.addEventListener("change",function(){var b,c,e,f;if(c=a.hiddenFileInput.files,c.length)for(e=0,f=c.length;f>e;e++)b=c[e],a.addFile(b);return d()})}}(this))(),this.URL=null!=(g=window.URL)?g:window.webkitURL,h=this.events,e=0,f=h.length;f>e;e++)a=h[e],this.on(a,this.options[a]);return this.on("uploadprogress",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("canceled",function(a){return function(b){return a.emit("complete",b)}}(this)),this.on("complete",function(a){return function(){return 0===a.getUploadingFiles().length&&0===a.getQueuedFiles().length?setTimeout(function(){return a.emit("queuecomplete")},0):void 0}}(this)),b=function(a){return a.stopPropagation(),a.preventDefault?a.preventDefault():a.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(a){return function(b){return a.emit("dragstart",b)}}(this),dragenter:function(a){return function(c){return b(c),a.emit("dragenter",c)}}(this),dragover:function(a){return function(c){var d;try{d=c.dataTransfer.effectAllowed}catch(e){}return c.dataTransfer.dropEffect="move"===d||"linkMove"===d?"move":"copy",b(c),a.emit("dragover",c)}}(this),dragleave:function(a){return function(b){return a.emit("dragleave",b)}}(this),drop:function(a){return function(c){return b(c),a.drop(c)}}(this),dragend:function(a){return function(b){return a.emit("dragend",b)}}(this)}}],this.clickableElements.forEach(function(a){return function(b){return a.listeners.push({element:b,events:{click:function(d){return b!==a.element||d.target===a.element||c.elementInside(d.target,a.element.querySelector(".dz-message"))?a.hiddenFileInput.click():void 0}}})}}(this)),this.enable(),this.options.init.call(this)},c.prototype.destroy=function(){var a;return this.disable(),this.removeAllFiles(!0),(null!=(a=this.hiddenFileInput)?a.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,c.instances.splice(c.instances.indexOf(this),1)},c.prototype.updateTotalUploadProgress=function(){var a,b,c,d,e,f,g,h;if(d=0,c=0,a=this.getActiveFiles(),a.length){for(h=this.getActiveFiles(),f=0,g=h.length;g>f;f++)b=h[f],d+=b.upload.bytesSent,c+=b.upload.total;e=100*d/c}else e=100;return this.emit("totaluploadprogress",e,c,d)},c.prototype._getParamName=function(a){return"function"==typeof this.options.paramName?this.options.paramName(a):""+this.options.paramName+(this.options.uploadMultiple?"["+a+"]":"")},c.prototype.getFallbackForm=function(){var a,b,d,e;return(a=this.getExistingFallback())?a:(d='<div class="dz-fallback">',this.options.dictFallbackText&&(d+="<p>"+this.options.dictFallbackText+"</p>"),d+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',b=c.createElement(d),"FORM"!==this.element.tagName?(e=c.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),e.appendChild(b)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=e?e:b)},c.prototype.getExistingFallback=function(){var a,b,c,d,e,f;for(b=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)if(b=a[c],/(^| )fallback($| )/.test(b.className))return b},f=["div","form"],d=0,e=f.length;e>d;d++)if(c=f[d],a=b(this.element.getElementsByTagName(c)))return a},c.prototype.setupEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.addEventListener(b,c,!1));return e}());return g},c.prototype.removeEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.removeEventListener(b,c,!1));return e}());return g},c.prototype.disable=function(){var a,b,c,d,e;for(this.clickableElements.forEach(function(a){return a.classList.remove("dz-clickable")}),this.removeEventListeners(),d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.cancelUpload(a));return e},c.prototype.enable=function(){return this.clickableElements.forEach(function(a){return a.classList.add("dz-clickable")}),this.setupEventListeners()},c.prototype.filesize=function(a){var b,c,d,e,f,g,h,i;for(g=["TB","GB","MB","KB","b"],d=e=null,c=h=0,i=g.length;i>h;c=++h)if(f=g[c],b=Math.pow(this.options.filesizeBase,4-c)/10,a>=b){d=a/Math.pow(this.options.filesizeBase,4-c),e=f;break}return d=Math.round(10*d)/10,"<strong>"+d+"</strong> "+e},c.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},c.prototype.drop=function(a){var b,c;a.dataTransfer&&(this.emit("drop",a),b=a.dataTransfer.files,b.length&&(c=a.dataTransfer.items,c&&c.length&&null!=c[0].webkitGetAsEntry?this._addFilesFromItems(c):this.handleFiles(b)))},c.prototype.paste=function(a){var b,c;if(null!=(null!=a&&null!=(c=a.clipboardData)?c.items:void 0))return this.emit("paste",a),b=a.clipboardData.items,b.length?this._addFilesFromItems(b):void 0},c.prototype.handleFiles=function(a){var b,c,d,e;for(e=[],c=0,d=a.length;d>c;c++)b=a[c],e.push(this.addFile(b));return e},c.prototype._addFilesFromItems=function(a){var b,c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],f.push(null!=c.webkitGetAsEntry&&(b=c.webkitGetAsEntry())?b.isFile?this.addFile(c.getAsFile()):b.isDirectory?this._addFilesFromDirectory(b,b.name):void 0:null!=c.getAsFile?null==c.kind||"file"===c.kind?this.addFile(c.getAsFile()):void 0:void 0);return f},c.prototype._addFilesFromDirectory=function(a,b){var c,d;return c=a.createReader(),d=function(a){return function(c){var d,e,f;for(e=0,f=c.length;f>e;e++)d=c[e],d.isFile?d.file(function(c){return a.options.ignoreHiddenFiles&&"."===c.name.substring(0,1)?void 0:(c.fullPath=""+b+"/"+c.name,a.addFile(c))}):d.isDirectory&&a._addFilesFromDirectory(d,""+b+"/"+d.name)}}(this),c.readEntries(d,function(a){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(a):void 0})},c.prototype.accept=function(a,b){return a.size>1024*this.options.maxFilesize*1024?b(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(a.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):c.isValidFile(a,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",a)):this.options.accept.call(this,a,b):b(this.options.dictInvalidFileType)},c.prototype.addFile=function(a){return a.upload={progress:0,total:a.size,bytesSent:0},this.files.push(a),a.status=c.ADDED,this.emit("addedfile",a),this._enqueueThumbnail(a),this.accept(a,function(b){return function(c){return c?(a.accepted=!1,b._errorProcessing([a],c)):(a.accepted=!0,b.options.autoQueue&&b.enqueueFile(a)),b._updateMaxFilesReachedClass()}}(this))},c.prototype.enqueueFiles=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)b=a[c],this.enqueueFile(b);return null},c.prototype.enqueueFile=function(a){if(a.status!==c.ADDED||a.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return a.status=c.QUEUED,this.options.autoProcessQueue?setTimeout(function(a){return function(){return a.processQueue()}}(this),0):void 0},c.prototype._thumbnailQueue=[],c.prototype._processingThumbnail=!1,c.prototype._enqueueThumbnail=function(a){return this.options.createImageThumbnails&&a.type.match(/image.*/)&&a.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(a),setTimeout(function(a){return function(){return a._processThumbnailQueue()}}(this),0)):void 0},c.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(a){return function(){return a._processingThumbnail=!1,a._processThumbnailQueue()}}(this)))},c.prototype.removeFile=function(a){return a.status===c.UPLOADING&&this.cancelUpload(a),this.files=h(this.files,a),this.emit("removedfile",a),0===this.files.length?this.emit("reset"):void 0},c.prototype.removeAllFiles=function(a){var b,d,e,f;for(null==a&&(a=!1),f=this.files.slice(),d=0,e=f.length;e>d;d++)b=f[d],(b.status!==c.UPLOADING||a)&&this.removeFile(b);return null},c.prototype.createThumbnail=function(a,b){var c;return c=new FileReader,c.onload=function(d){return function(){var e;return"image/svg+xml"===a.type?(d.emit("thumbnail",a,c.result),void(null!=b&&b())):(e=document.createElement("img"),e.onload=function(){var c,g,h,i,j,k,l,m;return a.width=e.width,a.height=e.height,h=d.options.resize.call(d,a),null==h.trgWidth&&(h.trgWidth=h.optWidth),null==h.trgHeight&&(h.trgHeight=h.optHeight),c=document.createElement("canvas"),g=c.getContext("2d"),c.width=h.trgWidth,c.height=h.trgHeight,f(g,e,null!=(j=h.srcX)?j:0,null!=(k=h.srcY)?k:0,h.srcWidth,h.srcHeight,null!=(l=h.trgX)?l:0,null!=(m=h.trgY)?m:0,h.trgWidth,h.trgHeight),i=c.toDataURL("image/png"),d.emit("thumbnail",a,i),null!=b?b():void 0},e.onerror=b,e.src=c.result)}}(this),c.readAsDataURL(a)},c.prototype.processQueue=function(){var a,b,c,d;if(b=this.options.parallelUploads,c=this.getUploadingFiles().length,a=c,!(c>=b)&&(d=this.getQueuedFiles(),d.length>0)){if(this.options.uploadMultiple)return this.processFiles(d.slice(0,b-c));for(;b>a;){if(!d.length)return;this.processFile(d.shift()),a++}}},c.prototype.processFile=function(a){return this.processFiles([a])},c.prototype.processFiles=function(a){var b,d,e;for(d=0,e=a.length;e>d;d++)b=a[d],b.processing=!0,b.status=c.UPLOADING,this.emit("processing",b);return this.options.uploadMultiple&&this.emit("processingmultiple",a),this.uploadFiles(a)},c.prototype._getFilesWithXhr=function(a){var b,c;return c=function(){var c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.xhr===a&&f.push(b);return f}.call(this)},c.prototype.cancelUpload=function(a){var b,d,e,f,g,h,i;if(a.status===c.UPLOADING){for(d=this._getFilesWithXhr(a.xhr),e=0,g=d.length;g>e;e++)b=d[e],b.status=c.CANCELED;for(a.xhr.abort(),f=0,h=d.length;h>f;f++)b=d[f],this.emit("canceled",b);this.options.uploadMultiple&&this.emit("canceledmultiple",d)}else((i=a.status)===c.ADDED||i===c.QUEUED)&&(a.status=c.CANCELED,this.emit("canceled",a),this.options.uploadMultiple&&this.emit("canceledmultiple",[a]));return this.options.autoProcessQueue?this.processQueue():void 0},e=function(){var a,b;return b=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],"function"==typeof b?b.apply(this,a):b},c.prototype.uploadFile=function(a){return this.uploadFiles([a])},c.prototype.uploadFiles=function(a){var b,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L;for(w=new XMLHttpRequest,x=0,B=a.length;B>x;x++)b=a[x],b.xhr=w;p=e(this.options.method,a),u=e(this.options.url,a),w.open(p,u,!0),w.withCredentials=!!this.options.withCredentials,s=null,g=function(c){return function(){var d,e,f;for(f=[],d=0,e=a.length;e>d;d++)b=a[d],f.push(c._errorProcessing(a,s||c.options.dictResponseError.replace("{{statusCode}}",w.status),w));return f}}(this),t=function(c){return function(d){var e,f,g,h,i,j,k,l,m;if(null!=d)for(f=100*d.loaded/d.total,g=0,j=a.length;j>g;g++)b=a[g],b.upload={progress:f,total:d.total,bytesSent:d.loaded};else{for(e=!0,f=100,h=0,k=a.length;k>h;h++)b=a[h],(100!==b.upload.progress||b.upload.bytesSent!==b.upload.total)&&(e=!1),b.upload.progress=f,b.upload.bytesSent=b.upload.total;if(e)return}for(m=[],i=0,l=a.length;l>i;i++)b=a[i],m.push(c.emit("uploadprogress",b,f,b.upload.bytesSent));return m}}(this),w.onload=function(b){return function(d){var e;if(a[0].status!==c.CANCELED&&4===w.readyState){if(s=w.responseText,w.getResponseHeader("content-type")&&~w.getResponseHeader("content-type").indexOf("application/json"))try{s=JSON.parse(s)}catch(f){d=f,s="Invalid JSON response from server."}return t(),200<=(e=w.status)&&300>e?b._finished(a,s,d):g()}}}(this),w.onerror=function(){return function(){return a[0].status!==c.CANCELED?g():void 0}}(this),r=null!=(G=w.upload)?G:w,r.onprogress=t,j={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&d(j,this.options.headers);for(h in j)i=j[h],w.setRequestHeader(h,i);if(f=new FormData,this.options.params){H=this.options.params;for(o in H)v=H[o],f.append(o,v)}for(y=0,C=a.length;C>y;y++)b=a[y],this.emit("sending",b,w,f);if(this.options.uploadMultiple&&this.emit("sendingmultiple",a,w,f),"FORM"===this.element.tagName)for(I=this.element.querySelectorAll("input, textarea, select, button"),z=0,D=I.length;D>z;z++)if(l=I[z],m=l.getAttribute("name"),n=l.getAttribute("type"),"SELECT"===l.tagName&&l.hasAttribute("multiple"))for(J=l.options,A=0,E=J.length;E>A;A++)q=J[A],q.selected&&f.append(m,q.value);else(!n||"checkbox"!==(K=n.toLowerCase())&&"radio"!==K||l.checked)&&f.append(m,l.value);for(k=F=0,L=a.length-1;L>=0?L>=F:F>=L;k=L>=0?++F:--F)f.append(this._getParamName(k),a[k],a[k].name);return w.send(f)},c.prototype._finished=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.SUCCESS,this.emit("success",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("successmultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c.prototype._errorProcessing=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.ERROR,this.emit("error",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("errormultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c}(b),a.version="4.0.1",a.options={},a.optionsForElement=function(b){return b.getAttribute("id")?a.options[c(b.getAttribute("id"))]:void 0},a.instances=[],a.forElement=function(a){if("string"==typeof a&&(a=document.querySelector(a)),null==(null!=a?a.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return a.dropzone},a.autoDiscover=!0,a.discover=function(){var b,c,d,e,f,g;for(document.querySelectorAll?d=document.querySelectorAll(".dropzone"):(d=[],b=function(a){var b,c,e,f;for(f=[],c=0,e=a.length;e>c;c++)b=a[c],f.push(/(^| )dropzone($| )/.test(b.className)?d.push(b):void 0);return f},b(document.getElementsByTagName("div")),b(document.getElementsByTagName("form"))),g=[],e=0,f=d.length;f>e;e++)c=d[e],g.push(a.optionsForElement(c)!==!1?new a(c):void 0);return g},a.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],a.isBrowserSupported=function(){var b,c,d,e,f;if(b=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(f=a.blacklistedBrowsers,d=0,e=f.length;e>d;d++)c=f[d],c.test(navigator.userAgent)&&(b=!1);else b=!1;else b=!1;return b},h=function(a,b){var c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],c!==b&&f.push(c);return f},c=function(a){return a.replace(/[\-_](\w)/g,function(a){return a.charAt(1).toUpperCase()})},a.createElement=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.childNodes[0]},a.elementInside=function(a,b){if(a===b)return!0;for(;a=a.parentNode;)if(a===b)return!0;return!1},a.getElement=function(a,b){var c;if("string"==typeof a?c=document.querySelector(a):null!=a.nodeType&&(c=a),null==c)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector or a plain HTML element.");return c},a.getElements=function(a,b){var c,d,e,f,g,h,i,j;if(a instanceof Array){e=[];try{for(f=0,h=a.length;h>f;f++)d=a[f],e.push(this.getElement(d,b))}catch(k){c=k,e=null}}else if("string"==typeof a)for(e=[],j=document.querySelectorAll(a),g=0,i=j.length;i>g;g++)d=j[g],e.push(d);else null!=a.nodeType&&(e=[a]);if(null==e||!e.length)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return e},a.confirm=function(a,b,c){return window.confirm(a)?b():null!=c?c():void 0},a.isValidFile=function(a,b){var c,d,e,f,g;if(!b)return!0;for(b=b.split(","),d=a.type,c=d.replace(/\/.*$/,""),f=0,g=b.length;g>f;f++)if(e=b[f],e=e.trim(),"."===e.charAt(0)){if(-1!==a.name.toLowerCase().indexOf(e.toLowerCase(),a.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(c===e.replace(/\/.*$/,""))return!0}else if(d===e)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(b){return this.each(function(){return new a(this,b)})}),"undefined"!=typeof module&&null!==module?module.exports=a:window.Dropzone=a,a.ADDED="added",a.QUEUED="queued",a.ACCEPTED=a.QUEUED,a.UPLOADING="uploading",a.PROCESSING=a.UPLOADING,a.CANCELED="canceled",a.ERROR="error",a.SUCCESS="success",e=function(a){var b,c,d,e,f,g,h,i,j,k;for(h=a.naturalWidth,g=a.naturalHeight,c=document.createElement("canvas"),c.width=1,c.height=g,d=c.getContext("2d"),d.drawImage(a,0,0),e=d.getImageData(0,0,1,g).data,k=0,f=g,i=g;i>k;)b=e[4*(i-1)+3],0===b?f=i:k=i,i=f+k>>1;return j=i/g,0===j?1:j},f=function(a,b,c,d,f,g,h,i,j,k){var l;return l=e(b),a.drawImage(b,c,d,f,g,h,i,j,k/l)},d=function(a,b){var c,d,e,f,g,h,i,j,k;if(e=!1,k=!0,d=a.document,j=d.documentElement,c=d.addEventListener?"addEventListener":"attachEvent",i=d.addEventListener?"removeEventListener":"detachEvent",h=d.addEventListener?"":"on",f=function(c){return"readystatechange"!==c.type||"complete"===d.readyState?(("load"===c.type?a:d)[i](h+c.type,f,!1),!e&&(e=!0)?b.call(a,c.type||c):void 0):void 0
},g=function(){var a;try{j.doScroll("left")}catch(b){return a=b,void setTimeout(g,50)}return f("poll")},"complete"!==d.readyState){if(d.createEventObject&&j.doScroll){try{k=!a.frameElement}catch(l){}k&&g()}return d[c](h+"DOMContentLoaded",f,!1),d[c](h+"readystatechange",f,!1),a[c](h+"load",f,!1)}},a._autoDiscoverFunction=function(){return a.autoDiscover?a.discover():void 0},d(window,a._autoDiscoverFunction)}).call(this);
!function(a,b,c,d){"use strict";function e(a){return("string"==typeof a||a instanceof String)&&(a=a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),a}var f=function(b){for(var c=b.length,d=a("head");c--;)0===d.has("."+b[c]).length&&d.append('<meta class="'+b[c]+'" />')};f(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),a(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof c.body&&FastClick.attach(c.body)});var g=function(b,d){if("string"==typeof b){if(d){var e;if(d.jquery){if(e=d[0],!e)return d}else e=d;return a(e.querySelectorAll(b))}return a(c.querySelectorAll(b))}return a(b,d)},h=function(a){var b=[];return a||b.push("data"),this.namespace.length>0&&b.push(this.namespace),b.push(this.name),b.join("-")},i=function(a){for(var b=a.split("-"),c=b.length,d=[];c--;)0!==c?d.push(b[c]):this.namespace.length>0?d.push(this.namespace,b[c]):d.push(b[c]);return d.reverse().join("-")},j=function(b,c){var d=this,e=function(){var e=g(this),f=!e.data(d.attr_name(!0)+"-init");e.data(d.attr_name(!0)+"-init",a.extend({},d.settings,c||b,d.data_options(e))),f&&d.events(this)};return g(this.scope).is("["+this.attr_name()+"]")?e.call(this.scope):g("["+this.attr_name()+"]",this.scope).each(e),"string"==typeof b?this[b].call(this,c):void 0},k=function(a,b){function c(){b(a[0])}function d(){if(this.one("load",c),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=this.attr("src"),b=a.match(/\?/)?"&":"?";b+="random="+(new Date).getTime(),this.attr("src",a+b)}}return a.attr("src")?void(a[0].complete||4===a[0].readyState?c():d.call(a)):void c()};/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
b.matchMedia||(b.matchMedia=function(){var a=b.styleMedia||b.media;if(!a){var d=c.createElement("style"),e=c.getElementsByTagName("script")[0],f=null;d.type="text/css",d.id="matchmediajs-test",e.parentNode.insertBefore(d,e),f="getComputedStyle"in b&&b.getComputedStyle(d,null)||d.currentStyle,a={matchMedium:function(a){var b="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return d.styleSheet?d.styleSheet.cssText=b:d.textContent=b,"1px"===f.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a){function c(){d&&(g(c),i&&a.fx.tick())}for(var d,e=0,f=["webkit","moz"],g=b.requestAnimationFrame,h=b.cancelAnimationFrame,i="undefined"!=typeof a.fx;e<f.length&&!g;e++)g=b[f[e]+"RequestAnimationFrame"],h=h||b[f[e]+"CancelAnimationFrame"]||b[f[e]+"CancelRequestAnimationFrame"];g?(b.requestAnimationFrame=g,b.cancelAnimationFrame=h,i&&(a.fx.timer=function(b){b()&&a.timers.push(b)&&!d&&(d=!0,c())},a.fx.stop=function(){d=!1})):(b.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-e)),f=b.setTimeout(function(){a(c+d)},d);return e=c+d,f},b.cancelAnimationFrame=function(a){clearTimeout(a)})}(a),b.Foundation={name:"Foundation",version:"5.5.2",media_queries:{small:g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"small-only":g(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"medium-only":g(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"large-only":g(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"xlarge-only":g(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:a("<style></style>").appendTo("head")[0].sheet,global:{namespace:d},init:function(a,c,d,e,f){var h=[a,d,e,f],i=[];if(this.rtl=/rtl/i.test(g("html").attr("dir")),this.scope=a||this.scope,this.set_namespace(),c&&"string"==typeof c&&!/reflow/i.test(c))this.libs.hasOwnProperty(c)&&i.push(this.init_lib(c,h));else for(var j in this.libs)i.push(this.init_lib(j,c));return g(b).load(function(){g(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),a},init_lib:function(b,c){return this.libs.hasOwnProperty(b)?(this.patch(this.libs[b]),c&&c.hasOwnProperty(b)?("undefined"!=typeof this.libs[b].settings?a.extend(!0,this.libs[b].settings,c[b]):"undefined"!=typeof this.libs[b].defaults&&a.extend(!0,this.libs[b].defaults,c[b]),this.libs[b].init.apply(this.libs[b],[this.scope,c[b]])):(c=c instanceof Array?c:new Array(c),this.libs[b].init.apply(this.libs[b],c))):function(){}},patch:function(a){a.scope=this.scope,a.namespace=this.global.namespace,a.rtl=this.rtl,a.data_options=this.utils.data_options,a.attr_name=h,a.add_namespace=i,a.bindings=j,a.S=this.utils.S},inherit:function(a,b){for(var c=b.split(" "),d=c.length;d--;)this.utils.hasOwnProperty(c[d])&&(a[c[d]]=this.utils[c[d]])},set_namespace:function(){var b=this.global.namespace===d?a(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=b===d||/false/i.test(b)?"":b},libs:{},utils:{S:g,throttle:function(a,b){var c=null;return function(){var d=this,e=arguments;null==c&&(c=setTimeout(function(){a.apply(d,e),c=null},b))}},debounce:function(a,b,c){var d,e;return function(){var f=this,g=arguments,h=function(){d=null,c||(e=a.apply(f,g))},i=c&&!d;return clearTimeout(d),d=setTimeout(h,b),i&&(e=a.apply(f,g)),e}},data_options:function(b,c){function d(a){return!isNaN(a-0)&&null!==a&&""!==a&&a!==!1&&a!==!0}function e(b){return"string"==typeof b?a.trim(b):b}c=c||"options";var f,g,h,i={},j=function(a){var b=Foundation.global.namespace;return a.data(b.length>0?b+"-"+c:c)},k=j(b);if("object"==typeof k)return k;for(h=(k||":").split(";"),f=h.length;f--;)g=h[f].split(":"),g=[g[0],g.slice(1).join(":")],/true/i.test(g[1])&&(g[1]=!0),/false/i.test(g[1])&&(g[1]=!1),d(g[1])&&(-1===g[1].indexOf(".")?g[1]=parseInt(g[1],10):g[1]=parseFloat(g[1])),2===g.length&&g[0].length>0&&(i[e(g[0])]=e(g[1]));return i},register_media:function(b,c){Foundation.media_queries[b]===d&&(a("head").append('<meta class="'+c+'"/>'),Foundation.media_queries[b]=e(a("."+c).css("font-family")))},add_custom_rule:function(a,b){if(b===d&&Foundation.stylesheet)Foundation.stylesheet.insertRule(a,Foundation.stylesheet.cssRules.length);else{var c=Foundation.media_queries[b];c!==d&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[b]+"{ "+a+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(a,b){function c(a){for(var b=a.length,c=b-1;c>=0;c--)if(a.attr("height")===d)return!1;return!0}var e=this,f=a.length;(0===f||c(a))&&b(a),a.each(function(){k(e.S(this),function(){f-=1,0===f&&b(a)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(a){return b.matchMedia(a).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},a.fn.foundation=function(){var a=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(a)),this})}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.abide={name:"abide",version:"5.5.2",settings:{live_validate:!0,validate_on_blur:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(a,b,d){var e=c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,f=a.value,g=e===f;return g}}},timer:null,init:function(a,b,c){this.bindings(b,c)},events:function(b){function c(a,b){clearTimeout(d.timer),d.timer=setTimeout(function(){d.validate([a],b)}.bind(a),f.timeout)}var d=this,e=d.S(b).attr("novalidate","novalidate"),f=e.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),e.off(".abide").on("submit.fndtn.abide",function(a){var b=/ajax/i.test(d.S(this).attr(d.attr_name()));return d.validate(d.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(),a,b)}).on("validate.fndtn.abide",function(a){"manual"===f.validate_on&&d.validate([a.target],a)}).on("reset",function(b){return d.reset(a(this),b)}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(a){f.validate_on_blur&&f.validate_on_blur===!0&&c(this,a),"change"===f.validate_on&&c(this,a)}).on("keydown.fndtn.abide",function(a){f.live_validate&&f.live_validate===!0&&9!=a.which&&c(this,a),"tab"===f.validate_on&&9===a.which?c(this,a):"change"===f.validate_on&&c(this,a)}).on("focus",function(b){navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)&&a("html, body").animate({scrollTop:a(b.target).offset().top},100)})},reset:function(b,c){var d=this;b.removeAttr(d.invalid_attr),a("["+d.invalid_attr+"]",b).removeAttr(d.invalid_attr),a("."+d.settings.error_class,b).not("small").removeClass(d.settings.error_class),a(":input",b).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(d.invalid_attr)},validate:function(a,b,c){for(var d=this.parse_patterns(a),e=d.length,f=this.S(a[0]).closest("form"),g=/submit/.test(b.type),h=0;e>h;h++)if(!d[h]&&(g||c))return this.settings.focus_on_invalid&&a[h].focus(),f.trigger("invalid.fndtn.abide"),this.S(a[h]).closest("form").attr(this.invalid_attr,""),!1;return(g||c)&&f.trigger("valid.fndtn.abide"),f.removeAttr(this.invalid_attr),c?!1:!0},parse_patterns:function(a){for(var b=a.length,c=[];b--;)c.push(this.pattern(a[b]));return this.check_validation_and_apply_styles(c)},pattern:function(a){var b=a.getAttribute("type"),c="string"==typeof a.getAttribute("required"),d=a.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(d)&&d.length>0?[a,this.settings.patterns[d],c]:d.length>0?[a,new RegExp(d),c]:this.settings.patterns.hasOwnProperty(b)?[a,this.settings.patterns[b],c]:(d=/.*/,[a,d,c])},check_validation_and_apply_styles:function(b){var c=b.length,d=[],e=this.S(b[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(e.data(this.attr_name(!0)+"-init")||{};c--;){var f,g,h=b[c][0],i=b[c][2],j=h.value.trim(),k=this.S(h).parent(),l=h.getAttribute(this.add_namespace("data-abide-validator")),m="radio"===h.type,n="checkbox"===h.type,o=this.S('label[for="'+h.getAttribute("id")+'"]'),p=i?h.value.length>0:!0,q=[];if(h.getAttribute(this.add_namespace("data-equalto"))&&(l="equalTo"),f=k.is("label")?k.parent():k,m&&i)q.push(this.valid_radio(h,i));else if(n&&i)q.push(this.valid_checkbox(h,i));else if(l){for(var r=l.split(" "),s=!0,t=!0,u=0;u<r.length;u++)g=this.settings.validators[r[u]].apply(this,[h,i,f]),q.push(g),t=g&&s,s=g;t?(this.S(h).removeAttr(this.invalid_attr),f.removeClass("error"),o.length>0&&this.settings.error_labels&&o.removeClass(this.settings.error_class).removeAttr("role"),a(h).triggerHandler("valid")):(this.S(h).attr(this.invalid_attr,""),f.addClass("error"),o.length>0&&this.settings.error_labels&&o.addClass(this.settings.error_class).attr("role","alert"),a(h).triggerHandler("invalid"))}else if(q.push(b[c][1].test(j)&&p||!i&&h.value.length<1||a(h).attr("disabled")?!0:!1),q=[q.every(function(a){return a})],q[0])this.S(h).removeAttr(this.invalid_attr),h.setAttribute("aria-invalid","false"),h.removeAttribute("aria-describedby"),f.removeClass(this.settings.error_class),o.length>0&&this.settings.error_labels&&o.removeClass(this.settings.error_class).removeAttr("role"),a(h).triggerHandler("valid");else{this.S(h).attr(this.invalid_attr,""),h.setAttribute("aria-invalid","true");var v=f.find("small."+this.settings.error_class,"span."+this.settings.error_class),w=v.length>0?v[0].id:"";w.length>0&&h.setAttribute("aria-describedby",w),f.addClass(this.settings.error_class),o.length>0&&this.settings.error_labels&&o.addClass(this.settings.error_class).attr("role","alert"),a(h).triggerHandler("invalid")}d=d.concat(q)}return d},valid_checkbox:function(b,c){var b=this.S(b),d=b.is(":checked")||!c||b.get(0).getAttribute("disabled");return d?(b.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),a(b).triggerHandler("valid")):(b.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),a(b).triggerHandler("invalid")),d},valid_radio:function(b,c){for(var d=b.getAttribute("name"),e=this.S(b).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+d+"']"),f=e.length,g=!1,h=!1,i=0;f>i;i++)e[i].getAttribute("disabled")?(h=!0,g=!0):e[i].checked?g=!0:h&&(g=!1);for(var i=0;f>i;i++)g?(this.S(e[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),a(e[i]).triggerHandler("valid")):(this.S(e[i]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),a(e[i]).triggerHandler("invalid"));return g},valid_equal:function(a,b,d){var e=c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,f=a.value,g=e===f;return g?(this.S(a).removeAttr(this.invalid_attr),d.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(a).attr(this.invalid_attr,""),d.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),g},valid_oneof:function(a,b,c,d){var a=this.S(a),e=this.S("["+this.add_namespace("data-oneof")+"]"),f=e.filter(":checked").length>0;if(f?a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):a.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!d){var g=this;e.each(function(){g.valid_oneof.call(g,this,null,null,!0)})}return f},reflow:function(a,b){var c=this,d=c.S("["+this.attr_name()+"]").attr("novalidate","novalidate");c.S(d).each(function(a,b){c.events(b)})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.2",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(a,b,c){this.bindings(b,c)},events:function(b){var c=this,d=this.S;c.create(this.S(b)),d(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(b){var e=d(this).closest("["+c.attr_name()+"]"),f=c.attr_name()+"="+e.attr(c.attr_name()),g=e.data(c.attr_name(!0)+"-init")||c.settings,h=d("#"+this.href.split("#")[1]),i=a("> dd, > li",e),j=i.children("."+g.content_class),k=j.filter("."+g.active_class);return b.preventDefault(),e.attr(c.attr_name())&&(j=j.add("["+f+"] dd > ."+g.content_class+", ["+f+"] li > ."+g.content_class),i=i.add("["+f+"] dd, ["+f+"] li")),g.toggleable&&h.is(k)?(h.parent("dd, li").toggleClass(g.active_class,!1),h.toggleClass(g.active_class,!1),d(this).attr("aria-expanded",function(a,b){return"true"===b?"false":"true"}),g.callback(h),h.triggerHandler("toggled",[e]),void e.triggerHandler("toggled",[h])):(g.multi_expand||(j.removeClass(g.active_class),i.removeClass(g.active_class),i.children("a").attr("aria-expanded","false")),h.addClass(g.active_class).parent().addClass(g.active_class),g.callback(h),h.triggerHandler("toggled",[e]),e.triggerHandler("toggled",[h]),void d(this).attr("aria-expanded","true"))})},create:function(b){var c=this,d=b,e=a("> .accordion-navigation",d),f=d.data(c.attr_name(!0)+"-init")||c.settings;e.children("a").attr("aria-expanded","false"),e.has("."+f.content_class+"."+f.active_class).children("a").attr("aria-expanded","true"),f.multi_expand&&b.attr("aria-multiselectable","true")},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.alert={name:"alert",version:"5.5.2",settings:{callback:function(){}},init:function(a,b,c){this.bindings(b,c)},events:function(){var b=this,c=this.S;a(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(a){var d=c(this).closest("["+b.attr_name()+"]"),e=d.data(b.attr_name(!0)+"-init")||b.settings;a.preventDefault(),Modernizr.csstransitions?(d.addClass("alert-close"),d.on("transitionend webkitTransitionEnd oTransitionEnd",function(a){c(this).trigger("close.fndtn.alert").remove(),e.callback()})):d.fadeOut(300,function(){c(this).trigger("close.fndtn.alert").remove(),e.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.2",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(a,b,c){var d=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(b,c),d.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(d.S("li",this.scope)):d.S("["+this.attr_name()+"]",this.scope).each(function(){d.assemble(d.S("li",this))})},events:function(d){var e=this,f=e.S,g=a(".scroll-container");g.length>0&&(this.scope=g),f(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(a,b,c){var b=b||f(this),c=c||b,d=b.next("li"),g=b.closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init"),h=f(a.target);a.preventDefault(),g||(e.init(),g=b.closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init")),c.hasClass("visible")&&b[0]===c[0]&&d.length>0&&e.is_open(b)&&(c=d,h=f("img",c)),e.open(h,b,c),e.update_paddles(c)}).on("click.fndtn.clearing",".clearing-main-next",function(a){e.nav(a,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(a){e.nav(a,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(a){Foundation.libs.clearing.close(a,this)}),a(c).on("keydown.fndtn.clearing",function(a){e.keydown(a)}),f(b).off(".clearing").on("resize.fndtn.clearing",function(){e.resize()}),this.swipe_events(d)},swipe_events:function(a){var b=this,c=b.S;c(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(a){a.touches||(a=a.originalEvent);var b={start_page_x:a.touches[0].pageX,start_page_y:a.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:d};c(this).data("swipe-transition",b),a.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(a){if(a.touches||(a=a.originalEvent),!(a.touches.length>1||a.scale&&1!==a.scale)){var d=c(this).data("swipe-transition");if("undefined"==typeof d&&(d={}),d.delta_x=a.touches[0].pageX-d.start_page_x,Foundation.rtl&&(d.delta_x=-d.delta_x),"undefined"==typeof d.is_scrolling&&(d.is_scrolling=!!(d.is_scrolling||Math.abs(d.delta_x)<Math.abs(a.touches[0].pageY-d.start_page_y))),!d.is_scrolling&&!d.active){a.preventDefault();var e=d.delta_x<0?"next":"prev";d.active=!0,b.nav(a,e)}}}).on("touchend.fndtn.clearing",".visible-img",function(a){c(this).data("swipe-transition",{}),a.stopPropagation()})},assemble:function(b){var c=b.parent();if(!c.parent().hasClass("carousel")){c.after('<div id="foundationClearingHolder"></div>');var d=c.detach(),e="";if(null!=d[0]){e=d[0].outerHTML;var f=this.S("#foundationClearingHolder"),g=c.data(this.attr_name(!0)+"-init"),h={grid:'<div class="carousel">'+e+"</div>",viewing:g.templates.viewing},i='<div class="clearing-assembled"><div>'+h.viewing+h.grid+"</div></div>",j=this.settings.touch_label;Modernizr.touch&&(i=a(i).find(".clearing-touch-label").html(j).end()),f.after(i).remove()}}},open:function(b,d,e){function f(){setTimeout(function(){this.image_loaded(m,function(){1!==m.outerWidth()||o?g.call(this,m):f.call(this)}.bind(this))}.bind(this),100)}function g(b){var c=a(b);c.css("visibility","visible"),c.trigger("imageVisible"),i.css("overflow","hidden"),j.addClass("clearing-blackout"),k.addClass("clearing-container"),l.show(),this.fix_height(e).caption(h.S(".clearing-caption",l),h.S("img",e)).center_and_label(b,n).shift(d,e,function(){e.closest("li").siblings().removeClass("visible"),e.closest("li").addClass("visible")}),l.trigger("opened.fndtn.clearing")}var h=this,i=a(c.body),j=e.closest(".clearing-assembled"),k=h.S("div",j).first(),l=h.S(".visible-img",k),m=h.S("img",l).not(b),n=h.S(".clearing-touch-label",k),o=!1,p={};a("body").on("touchmove",function(a){a.preventDefault()}),m.error(function(){o=!0}),this.locked()||(l.trigger("open.fndtn.clearing"),p=this.load(b),p.interchange?m.attr("data-interchange",p.interchange).foundation("interchange","reflow"):m.attr("src",p.src).attr("data-interchange",""),m.css("visibility","hidden"),f.call(this))},close:function(b,d){b.preventDefault();var e,f,g=function(a){return/blackout/.test(a.selector)?a:a.closest(".clearing-blackout")}(a(d)),h=a(c.body);return d===b.target&&g&&(h.css("overflow",""),e=a("div",g).first(),f=a(".visible-img",e),f.trigger("close.fndtn.clearing"),this.settings.prev_index=0,a("ul["+this.attr_name()+"]",g).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),e.removeClass("clearing-container"),f.hide(),f.trigger("closed.fndtn.clearing")),a("body").off("touchmove"),!1},is_open:function(a){return a.parent().prop("style").length>0},keydown:function(b){var c=a(".clearing-blackout ul["+this.attr_name()+"]"),d=this.rtl?37:39,e=this.rtl?39:37,f=27;b.which===d&&this.go(c,"next"),b.which===e&&this.go(c,"prev"),b.which===f&&this.S("a.clearing-close").trigger("click.fndtn.clearing")},nav:function(b,c){var d=a("ul["+this.attr_name()+"]",".clearing-blackout");b.preventDefault(),this.go(d,c)},resize:function(){var b=a("img",".clearing-blackout .visible-img"),c=a(".clearing-touch-label",".clearing-blackout");b.length&&(this.center_and_label(b,c),b.trigger("resized.fndtn.clearing"))},fix_height:function(a){var b=a.parent().children(),c=this;return b.each(function(){var a=c.S(this),b=a.find("img");a.height()>b.outerHeight()&&a.addClass("fix-height")}).closest("ul").width(100*b.length+"%"),this},update_paddles:function(a){a=a.closest("li");var b=a.closest(".carousel").siblings(".visible-img");a.next().length>0?this.S(".clearing-main-next",b).removeClass("disabled"):this.S(".clearing-main-next",b).addClass("disabled"),a.prev().length>0?this.S(".clearing-main-prev",b).removeClass("disabled"):this.S(".clearing-main-prev",b).addClass("disabled")},center_and_label:function(a,b){return b.css(!this.rtl&&b.length>0?{marginLeft:-(b.outerWidth()/2),marginTop:-(a.outerHeight()/2)-b.outerHeight()-10}:{marginRight:-(b.outerWidth()/2),marginTop:-(a.outerHeight()/2)-b.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(a){var b,c,d;return"A"===a[0].nodeName?(b=a.attr("href"),c=a.data("clearing-interchange")):(d=a.closest("a"),b=d.attr("href"),c=d.data("clearing-interchange")),this.preload(a),{src:b?b:a.attr("src"),interchange:b?c:a.data("clearing-interchange")}},preload:function(a){this.img(a.closest("li").next(),"next").img(a.closest("li").prev(),"prev")},img:function(b,c){if(b.length){var d,e,f,g=a(".clearing-preload-"+c),h=this.S("a",b);h.length?(d=h.attr("href"),e=h.data("clearing-interchange")):(f=this.S("img",b),d=f.attr("src"),e=f.data("clearing-interchange")),e?g.attr("data-interchange",e):(g.attr("src",d),g.attr("data-interchange",""))}return this},caption:function(a,b){var c=b.attr("data-caption");return c?a.html(c).show():a.text("").hide(),this},go:function(a,b){var c=this.S(".visible",a),d=c[b]();this.settings.skip_selector&&0!=d.find(this.settings.skip_selector).length&&(d=d[b]()),d.length&&this.S("img",d).trigger("click.fndtn.clearing",[c,d]).trigger("change.fndtn.clearing")},shift:function(a,b,c){var d,e=b.parent(),f=this.settings.prev_index||b.index(),g=this.direction(e,a,b),h=this.rtl?"right":"left",i=parseInt(e.css("left"),10),j=b.outerWidth(),k={};b.index()===f||/skip/.test(g)?/skip/.test(g)&&(d=b.index()-this.settings.up_count,this.lock(),d>0?(k[h]=-(d*j),e.animate(k,300,this.unlock())):(k[h]=0,e.animate(k,300,this.unlock()))):/left/.test(g)?(this.lock(),k[h]=i+j,e.animate(k,300,this.unlock())):/right/.test(g)&&(this.lock(),k[h]=i-j,e.animate(k,300,this.unlock())),c()},direction:function(a,b,c){var d,e=this.S("li",a),f=e.outerWidth()+e.outerWidth()/4,g=Math.floor(this.S(".clearing-container").outerWidth()/f)-1,h=e.index(c);return this.settings.up_count=g,d=this.adjacent(this.settings.prev_index,h)?h>g&&h>this.settings.prev_index?"right":h>g-1&&h<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=h,d},adjacent:function(a,b){for(var c=b+1;c>=b-1;c--)if(c===a)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(b).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.5.2",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,hover_timeout:150,opened:function(){},closed:function(){}},init:function(b,c,d){Foundation.inherit(this,"throttle"),a.extend(!0,this.settings,c,d),this.bindings(c,d)},events:function(d){var e=this,f=e.S;f(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(b){var c=f(this).data(e.attr_name(!0)+"-init")||e.settings;(!c.is_hover||Modernizr.touch)&&(b.preventDefault(),f(this).parent("[data-reveal-id]").length&&b.stopPropagation(),e.toggle(a(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(a){var b,c,d=f(this);clearTimeout(e.timeout),d.data(e.data_attr())?(b=f("#"+d.data(e.data_attr())),c=d):(b=d,c=f("["+e.attr_name()+'="'+b.attr("id")+'"]'));var g=c.data(e.attr_name(!0)+"-init")||e.settings;f(a.currentTarget).data(e.data_attr())&&g.is_hover&&e.closeall.call(e),g.is_hover&&e.open.apply(e,[b,c])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(a){var b,c=f(this);if(c.data(e.data_attr()))b=c.data(e.data_attr(!0)+"-init")||e.settings;else var d=f("["+e.attr_name()+'="'+f(this).attr("id")+'"]'),b=d.data(e.attr_name(!0)+"-init")||e.settings;e.timeout=setTimeout(function(){c.data(e.data_attr())?b.is_hover&&e.close.call(e,f("#"+c.data(e.data_attr()))):b.is_hover&&e.close.call(e,c)}.bind(this),b.hover_timeout)}).on("click.fndtn.dropdown",function(b){var d=f(b.target).closest("["+e.attr_name()+"-content]"),g=d.find("a");return g.length>0&&"false"!==d.attr("aria-autoclose")&&e.close.call(e,f("["+e.attr_name()+"-content]")),b.target!==c&&!a.contains(c.documentElement,b.target)||f(b.target).closest("["+e.attr_name()+"]").length>0?void 0:!f(b.target).data("revealId")&&d.length>0&&(f(b.target).is("["+e.attr_name()+"-content]")||a.contains(d.first()[0],b.target))?void b.stopPropagation():void e.close.call(e,f("["+e.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+e.attr_name()+"-content]",function(){e.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+e.attr_name()+"-content]",function(){e.settings.closed.call(this)}),f(b).off(".dropdown").on("resize.fndtn.dropdown",e.throttle(function(){e.resize.call(e)},50)),this.resize()},close:function(b){var c=this;b.each(function(d){var e=a("["+c.attr_name()+"="+b[d].id+"]")||a("aria-controls="+b[d].id+"]");e.attr("aria-expanded","false"),c.S(this).hasClass(c.settings.active_class)&&(c.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(c.settings.active_class).prev("["+c.attr_name()+"]").removeClass(c.settings.active_class).removeData("target"),c.S(this).trigger("closed.fndtn.dropdown",[b]))}),b.removeClass("f-open-"+this.attr_name(!0))},closeall:function(){var b=this;a.each(b.S(".f-open-"+this.attr_name(!0)),function(){b.close.call(b,b.S(this))})},open:function(a,b){this.css(a.addClass(this.settings.active_class),b),a.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),a.data("target",b.get(0)).trigger("opened.fndtn.dropdown",[a,b]),a.attr("aria-hidden","false"),b.attr("aria-expanded","true"),a.focus(),a.addClass("f-open-"+this.attr_name(!0))},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(a){if(!a.hasClass(this.settings.disabled_class)){var b=this.S("#"+a.data(this.data_attr()));0!==b.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(b)),b.hasClass(this.settings.active_class)?(this.close.call(this,b),b.data("target")!==a.get(0)&&this.open.call(this,b,a)):this.open.call(this,b,a))}},resize:function(){var b=this.S("["+this.attr_name()+"-content].open"),c=a(b.data("target"));b.length&&c.length&&this.css(b,c)},css:function(a,b){var c=Math.max((b.width()-a.width())/2,8),d=b.data(this.attr_name(!0)+"-init")||this.settings,e=a.parent().css("overflow-y")||a.parent().css("overflow");if(this.clear_idx(),this.small()){var f=this.dirs.bottom.call(a,b,d);a.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:f.top}),a.css(Foundation.rtl?"right":"left",c)}else if("visible"!==e){var g=b[0].offsetTop+b[0].offsetHeight;a.attr("style","").css({position:"absolute",top:g}),a.css(Foundation.rtl?"right":"left",c)}else this.style(a,b,d);return a},style:function(b,c,d){var e=a.extend({position:"absolute"},this.dirs[d.align].call(b,c,d));b.attr("style","").css(e)},dirs:{_base:function(a){var d=this.offsetParent(),e=d.offset(),f=a.offset();f.top-=e.top,f.left-=e.left,f.missRight=!1,f.missTop=!1,f.missLeft=!1,f.leftRightFlag=!1;var g;g=c.getElementsByClassName("row")[0]?c.getElementsByClassName("row")[0].clientWidth:b.innerWidth;var h=(b.innerWidth-g)/2,i=g;return this.hasClass("mega")||(a.offset().top<=this.outerHeight()&&(f.missTop=!0,i=b.innerWidth-h,f.leftRightFlag=!0),a.offset().left+this.outerWidth()>a.offset().left+h&&a.offset().left-h>this.outerWidth()&&(f.missRight=!0,f.missLeft=!1),a.offset().left-this.outerWidth()<=0&&(f.missLeft=!0,f.missRight=!1)),f},top:function(a,b){var c=Foundation.libs.dropdown,d=c.dirs._base.call(this,a);return this.addClass("drop-top"),1==d.missTop&&(d.top=d.top+a.outerHeight()+this.outerHeight(),this.removeClass("drop-top")),1==d.missRight&&(d.left=d.left-this.outerWidth()+a.outerWidth()),(a.outerWidth()<this.outerWidth()||c.small()||this.hasClass(b.mega_menu))&&c.adjust_pip(this,a,b,d),Foundation.rtl?{left:d.left-this.outerWidth()+a.outerWidth(),top:d.top-this.outerHeight()}:{left:d.left,top:d.top-this.outerHeight()}},bottom:function(a,b){var c=Foundation.libs.dropdown,d=c.dirs._base.call(this,a);return 1==d.missRight&&(d.left=d.left-this.outerWidth()+a.outerWidth()),(a.outerWidth()<this.outerWidth()||c.small()||this.hasClass(b.mega_menu))&&c.adjust_pip(this,a,b,d),
c.rtl?{left:d.left-this.outerWidth()+a.outerWidth(),top:d.top+a.outerHeight()}:{left:d.left,top:d.top+a.outerHeight()}},left:function(a,b){var c=Foundation.libs.dropdown.dirs._base.call(this,a);return this.addClass("drop-left"),1==c.missLeft&&(c.left=c.left+this.outerWidth(),c.top=c.top+a.outerHeight(),this.removeClass("drop-left")),{left:c.left-this.outerWidth(),top:c.top}},right:function(a,b){var c=Foundation.libs.dropdown.dirs._base.call(this,a);this.addClass("drop-right"),1==c.missRight?(c.left=c.left-this.outerWidth(),c.top=c.top+a.outerHeight(),this.removeClass("drop-right")):c.triggeredRight=!0;var d=Foundation.libs.dropdown;return(a.outerWidth()<this.outerWidth()||d.small()||this.hasClass(b.mega_menu))&&d.adjust_pip(this,a,b,c),{left:c.left+a.outerWidth(),top:c.top}}},adjust_pip:function(a,b,c,d){var e=Foundation.stylesheet,f=8;a.hasClass(c.mega_class)?f=d.left+b.outerWidth()/2-8:this.small()&&(f+=d.left-8),this.rule_idx=e.cssRules.length;var g=".f-dropdown.open:before",h=".f-dropdown.open:after",i="left: "+f+"px;",j="left: "+(f-1)+"px;";1==d.missRight&&(f=a.outerWidth()-23,g=".f-dropdown.open:before",h=".f-dropdown.open:after",i="left: "+f+"px;",j="left: "+(f-1)+"px;"),1==d.triggeredRight&&(g=".f-dropdown.open:before",h=".f-dropdown.open:after",i="left:-12px;",j="left:-14px;"),e.insertRule?(e.insertRule([g,"{",i,"}"].join(" "),this.rule_idx),e.insertRule([h,"{",j,"}"].join(" "),this.rule_idx+1)):(e.addRule(g,i,this.rule_idx),e.addRule(h,j,this.rule_idx+1))},clear_idx:function(){var a=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(a.deleteRule(this.rule_idx),a.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(b).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.2",settings:{use_tallest:!0,before_height_change:a.noop,after_height_change:a.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(a,b,c){Foundation.inherit(this,"image_loaded"),this.bindings(b,c),this.reflow()},events:function(){this.S(b).off(".equalizer").on("resize.fndtn.equalizer",function(a){this.reflow()}.bind(this))},equalize:function(b){var c,d,e=!1,f=b.data("equalizer"),g=b.data(this.attr_name(!0)+"-init")||this.settings;if(c=b.find(g.act_on_hidden_el?f?"["+this.attr_name()+'-watch="'+f+'"]':"["+this.attr_name()+"-watch]":f?"["+this.attr_name()+'-watch="'+f+'"]:visible':"["+this.attr_name()+"-watch]:visible"),0!==c.length&&(g.before_height_change(),b.trigger("before-height-change.fndth.equalizer"),c.height("inherit"),g.equalize_on_stack!==!1||(d=c.first().offset().top,c.each(function(){return a(this).offset().top!==d?(e=!0,!1):void 0}),!e))){var h=c.map(function(){return a(this).outerHeight(!1)}).get();if(g.use_tallest){var i=Math.max.apply(null,h);c.css("height",i)}else{var j=Math.min.apply(null,h);c.css("height",j)}g.after_height_change(),b.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var b=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var c=a(this),d=c.data("equalizer-mq"),e=!0;d&&(d="is_"+d.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(d)&&(e=!1)),b.image_loaded(b.S("img",this),function(){if(e||Foundation.utils[d]())b.equalize(c);else{var a=c.find("["+b.attr_name()+"-watch]:visible");a.css("height","auto")}})})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.2",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(b,c,d){if(null!==b&&/IMG/.test(b[0].nodeName)){var e=b[0].src;if(new RegExp(c,"i").test(e))return;return b.attr("src",c),d(b[0].src)}var f=b.data(this.data_attr+"-last-path"),g=this;if(f!=c)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c)?(a(b).css("background-image","url("+c+")"),b.data("interchange-last-path",c),d(c)):a.get(c,function(a){b.html(a),b.data(g.data_attr+"-last-path",c),d()})}}},init:function(b,c,d){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),a.extend(!0,this.settings,c,d),this.bindings(c,d),this.reflow()},get_media_hash:function(){var a="";for(var b in this.settings.named_queries)a+=matchMedia(this.settings.named_queries[b]).matches.toString();return a},events:function(){var c,d=this;return a(b).off(".interchange").on("resize.fndtn.interchange",d.throttle(function(){var a=d.get_media_hash();a!==c&&d.resize(),c=a},50)),this},resize:function(){var b=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(a.proxy(this.resize,this),50);for(var c in b)if(b.hasOwnProperty(c)){var d=this.results(c,b[c]);d&&this.settings.directives[d.scenario[1]].call(this,d.el,d.scenario[0],function(a){if(arguments[0]instanceof Array)var b=arguments[0];else var b=Array.prototype.slice.call(arguments,0);return function(){a.el.trigger(a.scenario[1],b)}}(d))}},results:function(a,b){var c=b.length;if(c>0)for(var d=this.S("["+this.add_namespace("data-uuid")+'="'+a+'"]');c--;){var e,f=b[c][2];if(e=matchMedia(this.settings.named_queries.hasOwnProperty(f)?this.settings.named_queries[f]:f),e.matches)return{el:d,scenario:b[c]}}return!1},load:function(a,b){return("undefined"==typeof this["cached_"+a]||b)&&this["update_"+a](),this["cached_"+a]},update_images:function(){var a=this.S("img["+this.data_attr+"]"),b=a.length,c=b,d=0,e=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===b;c--;){if(d++,a[c]){var f=a[c].getAttribute(e)||"";f.length>0&&this.cached_images.push(a[c])}d===b&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var a=this.S("["+this.data_attr+"]").not("img"),b=a.length,c=b,d=0,e=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===b;c--;){d++;var f=a[c].getAttribute(e)||"";f.length>0&&this.cached_nodes.push(a[c]),d===b&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(c){for(var d=this["cached_"+c].length;d--;)this.object(a(this["cached_"+c][d]));return a(b).trigger("resize.fndtn.interchange")},convert_directive:function(a){var b=this.trim(a);return b.length>0?b:"replace"},parse_scenario:function(a){var b=a[0].match(/(.+),\s*(\w+)\s*$/),c=a[1].match(/(.*)\)/);if(b)var d=b[1],e=b[2];else var f=a[0].split(/,\s*$/),d=f[0],e="";return[this.trim(d),this.convert_directive(e),this.trim(c[1])]},object:function(a){var b=this.parse_data_attr(a),c=[],d=b.length;if(d>0)for(;d--;){var e=b[d].split(/,\s?\(/);if(e.length>1){var f=this.parse_scenario(e);c.push(f)}}return this.store(a,c)},store:function(a,b){var c=this.random_str(),d=a.data(this.add_namespace("uuid",!0));return this.cache[d]?this.cache[d]:(a.attr(this.add_namespace("data-uuid"),c),this.cache[c]=b)},trim:function(b){return"string"==typeof b?a.trim(b):b},set_data_attr:function(a){return a?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(a){for(var b=a.attr(this.attr_name()).split(/\[(.*?)\]/),c=b.length,d=[];c--;)b[c].replace(/[\W\d]+/,"").length>4&&d.push(b[c]);return d},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.5.2",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(b,c,d){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||a.extend({},this.defaults,d||c),this.bindings(c,d)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var c=this;a(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(a){a.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(a){a.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(a){a.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(a){if(this.settings.keyboard&&this.settings.riding)switch(a.which){case 39:a.preventDefault(),this.go_next();break;case 37:a.preventDefault(),this.go_prev();break;case 27:a.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),a(b).off(".joyride").on("resize.fndtn.joyride",c.throttle(function(){if(a("["+c.attr_name()+"]").length>0&&c.settings.$next_tip&&c.settings.riding){if(c.settings.exposed.length>0){var b=a(c.settings.exposed);b.each(function(){var b=a(this);c.un_expose(b),c.expose(b)})}c.is_phone()?c.pos_phone():c.pos_default(!1)}},100))},start:function(){var b=this,c=a("["+this.attr_name()+"]",this.scope),d=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],e=d.length;!c.length>0||(this.settings.init||this.events(),this.settings=c.data(this.attr_name(!0)+"-init"),this.settings.$content_el=c,this.settings.$body=a(this.settings.tip_container),this.settings.body_offset=a(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof a.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!a.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(c){var f=a(this);this.settings=a.extend({},b.defaults,b.data_options(f));for(var g=e;g--;)b.settings[d[g]]=parseInt(b.settings[d[g]],10);b.create({$li:f,index:c})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(b){var c,d;return b.tip_class=b.tip_class||"",c=a(this.settings.template.tip).addClass(b.tip_class),d=a.trim(a(b.li).html())+this.prev_button_text(b.prev_button_text,b.index)+this.button_text(b.button_text)+this.settings.template.link+this.timer_instance(b.index),c.append(a(this.settings.template.wrapper)),c.first().attr(this.add_namespace("data-index"),b.index),a(".joyride-content-wrapper",c).append(d),c[0]},timer_instance:function(b){var c;return c=0===b&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":a(this.settings.template.timer)[0].outerHTML},button_text:function(b){return this.settings.tip_settings.next_button?(b=a.trim(b)||"Next",b=a(this.settings.template.button).append(b)[0].outerHTML):b="",b},prev_button_text:function(b,c){return this.settings.tip_settings.prev_button?(b=a.trim(b)||"Previous",b=0==c?a(this.settings.template.prev_button).append(b).addClass("disabled")[0].outerHTML:a(this.settings.template.prev_button).append(b)[0].outerHTML):b="",b},create:function(b){this.settings.tip_settings=a.extend({},this.settings,this.data_options(b.$li));var c=b.$li.attr(this.add_namespace("data-button"))||b.$li.attr(this.add_namespace("data-text")),d=b.$li.attr(this.add_namespace("data-button-prev"))||b.$li.attr(this.add_namespace("data-prev-text")),e=b.$li.attr("class"),f=a(this.tip_template({tip_class:e,index:b.index,button_text:c,prev_button_text:d,li:b.$li}));a(this.settings.tip_container).append(f)},show:function(b,c){var e=null;if(this.settings.$li===d||-1===a.inArray(this.settings.$li.index(),this.settings.pause_after))if(this.settings.paused?this.settings.paused=!1:this.set_li(b,c),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0){if(b&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=a.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],!/body/i.test(this.settings.$target.selector)){var f=a(".joyride-modal-bg");/pop/i.test(this.settings.tipAnimation)?f.hide():f.fadeOut(this.settings.tipAnimationFadeSpeed),this.scroll_to()}this.is_phone()?this.pos_phone(!0):this.pos_default(!0),e=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(e.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){e.animate({width:e.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(e.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){e.animate({width:e.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip}else this.settings.$li&&this.settings.$target.length<1?this.show(b,c):this.end();else this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||a(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(a.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(a,b){a?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(b?this.settings.$li=this.settings.$li.prev():this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=a(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var b=this.settings.$li.attr(this.add_namespace("data-class")),d=this.settings.$li.attr(this.add_namespace("data-id")),e=function(){return d?a(c.getElementById(d)):b?a("."+b).first():a("body")};this.settings.$target=e()},scroll_to:function(){var c,d;c=a(b).height()/2,d=Math.ceil(this.settings.$target.offset().top-c+this.settings.$next_tip.outerHeight()),0!=d&&a("html, body").stop().animate({scrollTop:d},this.settings.scroll_speed,"swing")},paused:function(){return-1===a.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=d,this.show("init")},pos_default:function(a){var b=this.settings.$next_tip.find(".joyride-nub"),c=Math.ceil(b.outerWidth()/2),d=Math.ceil(b.outerHeight()/2),e=a||!1;if(e&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(b);else{var f=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,g=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.settings.$next_tip.css(this.rtl?{top:this.settings.$target.offset().top+d+this.settings.$target.outerHeight()+f,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+g}:{top:this.settings.$target.offset().top+d+this.settings.$target.outerHeight()+f,left:this.settings.$target.offset().left+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"top")):this.top()?(this.settings.$next_tip.css(this.rtl?{top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-d+f,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}:{top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-d+f,left:this.settings.$target.offset().left+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+f,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+c+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+f,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-c+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(b.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}e&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(b){var c=this.settings.$next_tip.outerHeight(),d=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),e=a(".joyride-nub",this.settings.$next_tip),f=Math.ceil(e.outerHeight()/2),g=b||!1;e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),g&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(e):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-c-f}),e.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+d+f}),e.addClass("top")),g&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(a){this.center(),a.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var b=a(".joyride-modal-bg");if(b.length<1){var b=a(this.settings.template.modal);b.appendTo("body")}/pop/i.test(this.settings.tip_animation)?b.show():b.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var c,d,e,f,g,h="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof a)e=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;e=this.settings.$target}return e.length<1?(b.console&&console.error("element not valid",e),!1):(c=a(this.settings.template.expose),this.settings.$body.append(c),c.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)}),d=a(this.settings.template.expose_cover),f={zIndex:e.css("z-index"),position:e.css("position")},g=null==e.attr("class")?"":e.attr("class"),e.css("z-index",parseInt(c.css("z-index"))+1),"static"==f.position&&e.css("position","relative"),e.data("expose-css",f),e.data("orig-class",g),e.attr("class",g+" "+this.settings.expose_add_class),d.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(d),c.addClass(h),d.addClass(h),e.data("expose",h),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,e),void this.add_exposed(e))},un_expose:function(){var c,d,e,f,g,h=!1;if(arguments.length>0&&arguments[0]instanceof a)d=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;d=this.settings.$target}return d.length<1?(b.console&&console.error("element not valid",d),!1):(c=d.data("expose"),e=a("."+c),arguments.length>1&&(h=arguments[1]),h===!0?a(".joyride-expose-wrapper,.joyride-expose-cover").remove():e.remove(),f=d.data("expose-css"),"auto"==f.zIndex?d.css("z-index",""):d.css("z-index",f.zIndex),f.position!=d.css("position")&&("static"==f.position?d.css("position",""):d.css("position",f.position)),g=d.data("orig-class"),d.attr("class",g),d.removeData("orig-classes"),d.removeData("expose"),d.removeData("expose-z-index"),void this.remove_exposed(d))},add_exposed:function(b){this.settings.exposed=this.settings.exposed||[],b instanceof a||"object"==typeof b?this.settings.exposed.push(b[0]):"string"==typeof b&&this.settings.exposed.push(b)},remove_exposed:function(b){var c,d;for(b instanceof a?c=b[0]:"string"==typeof b&&(c=b),this.settings.exposed=this.settings.exposed||[],d=this.settings.exposed.length;d--;)if(this.settings.exposed[d]==c)return void this.settings.exposed.splice(d,1)},center:function(){var c=a(b);return this.settings.$next_tip.css({top:(c.height()-this.settings.$next_tip.outerHeight())/2+c.scrollTop(),left:(c.width()-this.settings.$next_tip.outerWidth())/2+c.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(c){var d=a(b),e=d.height()/2,f=Math.ceil(this.settings.$target.offset().top-e+this.settings.$next_tip.outerHeight()),g=d.width()+d.scrollLeft(),h=d.height()+f,i=d.height()+d.scrollTop(),j=d.scrollTop();return j>f&&(j=0>f?0:f),h>i&&(i=h),[c.offset().top<j,g<c.offset().left+c.outerWidth(),i<c.offset().top+c.outerHeight(),d.scrollLeft()>c.offset().left]},visible:function(a){for(var b=a.length;b--;)if(a[b])return!1;return!0},nub_position:function(a,b,c){a.addClass("auto"===b?c:b)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(b){this.settings.cookie_monster&&a.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),a(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,a(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof b||b===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),a(".joyride-tip-guide").remove()},off:function(){a(this.scope).off(".joyride"),a(b).off(".joyride"),a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),a(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.2",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(a,b,c){Foundation.inherit(this,"throttle"),this.bindings(b,c)},events:function(){var b=this,c=b.S,d=b.settings;b.set_expedition_position(),c(b.scope).off(".magellan").on("click.fndtn.magellan","["+b.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(c){var d=this.hostname===location.hostname||!this.hostname,e=b.filterPathname(location.pathname)===b.filterPathname(this.pathname),f=this.hash.replace(/(:|\.|\/)/g,"\\$1"),g=this;if(d&&e&&f){c.preventDefault();var h=a(this).closest("["+b.attr_name()+"]"),i=h.data("magellan-expedition-init"),j=this.hash.split("#").join(""),k=a('a[name="'+j+'"]');0===k.length&&(k=a("#"+j));var l=k.offset().top-i.destination_threshold+1;i.offset_by_height&&(l-=h.outerHeight()),a("html, body").stop().animate({scrollTop:l},i.duration,i.easing,function(){history.pushState?history.pushState(null,null,g.pathname+"#"+j):location.hash=g.pathname+"#"+j})}}).on("scroll.fndtn.magellan",b.throttle(this.check_for_arrivals.bind(this),d.throttle_delay))},check_for_arrivals:function(){var a=this;a.update_arrivals(),a.update_expedition_positions()},set_expedition_position:function(){var b=this;a("["+this.attr_name()+"=fixed]",b.scope).each(function(c,d){var e,f,g=a(this),h=g.data("magellan-expedition-init"),i=g.attr("styles");g.attr("style",""),e=g.offset().top+h.threshold,f=parseInt(g.data("magellan-fixed-top")),isNaN(f)||(b.settings.fixed_top=f),g.data(b.data_attr("magellan-top-offset"),e),g.attr("style",i)})},update_expedition_positions:function(){var c=this,d=a(b).scrollTop();a("["+this.attr_name()+"=fixed]",c.scope).each(function(){var b=a(this),e=b.data("magellan-expedition-init"),f=b.attr("style"),g=b.data("magellan-top-offset");if(d+c.settings.fixed_top>=g){var h=b.prev("["+c.add_namespace("data-magellan-expedition-clone")+"]");0===h.length&&(h=b.clone(),h.removeAttr(c.attr_name()),h.attr(c.add_namespace("data-magellan-expedition-clone"),""),b.before(h)),b.css({position:"fixed",top:e.fixed_top}).addClass("fixed")}else b.prev("["+c.add_namespace("data-magellan-expedition-clone")+"]").remove(),b.attr("style",f).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var c=this,d=a(b).scrollTop();a("["+this.attr_name()+"]",c.scope).each(function(){var b=a(this),e=b.data(c.attr_name(!0)+"-init"),f=c.offsets(b,d),g=b.find("["+c.add_namespace("data-magellan-arrival")+"]"),h=!1;f.each(function(a,d){if(d.viewport_offset>=d.top_offset){var f=b.find("["+c.add_namespace("data-magellan-arrival")+"]");return f.not(d.arrival).removeClass(e.active_class),d.arrival.addClass(e.active_class),h=!0,!0}}),h||g.removeClass(e.active_class)})},offsets:function(b,c){var d=this,e=b.data(d.attr_name(!0)+"-init"),f=c;return b.find("["+d.add_namespace("data-magellan-arrival")+"]").map(function(c,g){var h=a(this).data(d.data_attr("magellan-arrival")),i=a("["+d.add_namespace("data-magellan-destination")+"="+h+"]");if(i.length>0){var j=i.offset().top-e.destination_threshold;return e.offset_by_height&&(j-=b.outerHeight()),j=Math.floor(j),{destination:i,arrival:a(this),top_offset:j,viewport_offset:f}}}).sort(function(a,b){return a.top_offset<b.top_offset?-1:a.top_offset>b.top_offset?1:0})},data_attr:function(a){return this.namespace.length>0?this.namespace+"-"+a:a},off:function(){this.S(this.scope).off(".magellan"),this.S(b).off(".magellan")},filterPathname:function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var b=this;a("["+b.add_namespace("data-magellan-expedition-clone")+"]",b.scope).remove()}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.2",settings:{open_method:"move",close_on_click:!1},init:function(a,b,c){this.bindings(b,c)},events:function(){var b=this,c=b.S,d="",e="",f="";"move"===this.settings.open_method?(d="move-",e="right",f="left"):"overlap_single"===this.settings.open_method?(d="offcanvas-overlap-",e="right",f="left"):"overlap"===this.settings.open_method&&(d="offcanvas-overlap"),c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(f){b.click_toggle_class(f,d+e),"overlap"!==b.settings.open_method&&c(".left-submenu").removeClass(d+e),a(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(f){var g=b.get_settings(f),h=c(this).parent();!g.close_on_click||h.hasClass("has-submenu")||h.hasClass("back")?c(this).parent().hasClass("has-submenu")?(f.preventDefault(),c(this).siblings(".left-submenu").toggleClass(d+e)):h.hasClass("back")&&(f.preventDefault(),h.parent().removeClass(d+e)):(b.hide.call(b,d+e,b.get_wrapper(f)),h.parent().removeClass(d+e)),a(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(e){b.click_toggle_class(e,d+f),"overlap"!==b.settings.open_method&&c(".right-submenu").removeClass(d+f),a(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(e){var g=b.get_settings(e),h=c(this).parent();!g.close_on_click||h.hasClass("has-submenu")||h.hasClass("back")?c(this).parent().hasClass("has-submenu")?(e.preventDefault(),c(this).siblings(".right-submenu").toggleClass(d+f)):h.hasClass("back")&&(e.preventDefault(),h.parent().removeClass(d+f)):(b.hide.call(b,d+f,b.get_wrapper(e)),h.parent().removeClass(d+f)),a(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(g){b.click_remove_class(g,d+f),c(".right-submenu").removeClass(d+f),e&&(b.click_remove_class(g,d+e),c(".left-submenu").removeClass(d+f)),a(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(c){b.click_remove_class(c,d+f),a(".left-off-canvas-toggle").attr("aria-expanded","false"),e&&(b.click_remove_class(c,d+e),a(".right-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(a,b){b=b||this.get_wrapper(),b.is("."+a)?this.hide(a,b):this.show(a,b)},show:function(a,b){b=b||this.get_wrapper(),b.trigger("open.fndtn.offcanvas"),b.addClass(a)},hide:function(a,b){b=b||this.get_wrapper(),b.trigger("close.fndtn.offcanvas"),b.removeClass(a)},click_toggle_class:function(a,b){
a.preventDefault();var c=this.get_wrapper(a);this.toggle(b,c)},click_remove_class:function(a,b){a.preventDefault();var c=this.get_wrapper(a);this.hide(b,c)},get_settings:function(a){var b=this.S(a.target).closest("["+this.attr_name()+"]");return b.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(a){var b=this.S(a?a.target:this.scope).closest(".off-canvas-wrap");return 0===b.length&&(b=this.S(".off-canvas-wrap")),b},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";var e=function(){},f=function(e,f){if(e.hasClass(f.slides_container_class))return this;var j,k,l,m,n,o,p=this,q=e,r=0,s=!1;p.slides=function(){return q.children(f.slide_selector)},p.slides().first().addClass(f.active_slide_class),p.update_slide_number=function(b){f.slide_number&&(k.find("span:first").text(parseInt(b)+1),k.find("span:last").text(p.slides().length)),f.bullets&&(l.children().removeClass(f.bullets_active_class),a(l.children().get(b)).addClass(f.bullets_active_class))},p.update_active_link=function(b){var c=a('[data-orbit-link="'+p.slides().eq(b).attr("data-orbit-slide")+'"]');c.siblings().removeClass(f.bullets_active_class),c.addClass(f.bullets_active_class)},p.build_markup=function(){q.wrap('<div class="'+f.container_class+'"></div>'),j=q.parent(),q.addClass(f.slides_container_class),f.stack_on_small&&j.addClass(f.stack_on_small_class),f.navigation_arrows&&(j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)),j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))),f.timer&&(m=a("<div>").addClass(f.timer_container_class),m.append("<span>"),m.append(a("<div>").addClass(f.timer_progress_class)),m.addClass(f.timer_paused_class),j.append(m)),f.slide_number&&(k=a("<div>").addClass(f.slide_number_class),k.append("<span></span> "+f.slide_number_text+" <span></span>"),j.append(k)),f.bullets&&(l=a("<ol>").addClass(f.bullets_container_class),j.append(l),l.wrap('<div class="orbit-bullets-container"></div>'),p.slides().each(function(b,c){var d=a("<li>").attr("data-orbit-slide",b).on("click",p.link_bullet);l.append(d)}))},p._goto=function(b,c){if(b===r)return!1;"object"==typeof o&&o.restart();var d=p.slides(),e="next";if(s=!0,r>b&&(e="prev"),b>=d.length){if(!f.circular)return!1;b=0}else if(0>b){if(!f.circular)return!1;b=d.length-1}var g=a(d.get(r)),h=a(d.get(b));g.css("zIndex",2),g.removeClass(f.active_slide_class),h.css("zIndex",4).addClass(f.active_slide_class),q.trigger("before-slide-change.fndtn.orbit"),f.before_slide_change(),p.update_active_link(b);var i=function(){var a=function(){r=b,s=!1,c===!0&&(o=p.create_timer(),o.start()),p.update_slide_number(r),q.trigger("after-slide-change.fndtn.orbit",[{slide_number:r,total_slides:d.length}]),f.after_slide_change(r,d.length)};q.outerHeight()!=h.outerHeight()&&f.variable_height?q.animate({height:h.outerHeight()},250,"linear",a):a()};if(1===d.length)return i(),!1;var j=function(){"next"===e&&n.next(g,h,i),"prev"===e&&n.prev(g,h,i)};h.outerHeight()>q.outerHeight()&&f.variable_height?q.animate({height:h.outerHeight()},250,"linear",j):j()},p.next=function(a){a.stopImmediatePropagation(),a.preventDefault(),p._goto(r+1)},p.prev=function(a){a.stopImmediatePropagation(),a.preventDefault(),p._goto(r-1)},p.link_custom=function(b){b.preventDefault();var c=a(this).attr("data-orbit-link");if("string"==typeof c&&""!=(c=a.trim(c))){var d=j.find("[data-orbit-slide="+c+"]");-1!=d.index()&&p._goto(d.index())}},p.link_bullet=function(b){var c=a(this).attr("data-orbit-slide");if("string"==typeof c&&""!=(c=a.trim(c)))if(isNaN(parseInt(c))){var d=j.find("[data-orbit-slide="+c+"]");-1!=d.index()&&p._goto(d.index()+1)}else p._goto(parseInt(c))},p.timer_callback=function(){p._goto(r+1,!0)},p.compute_dimensions=function(){var b=a(p.slides().get(r)),c=b.outerHeight();f.variable_height||p.slides().each(function(){a(this).outerHeight()>c&&(c=a(this).outerHeight())}),q.height(c)},p.create_timer=function(){var a=new g(j.find("."+f.timer_container_class),f,p.timer_callback);return a},p.stop_timer=function(){"object"==typeof o&&o.stop()},p.toggle_timer=function(){var a=j.find("."+f.timer_container_class);a.hasClass(f.timer_paused_class)?("undefined"==typeof o&&(o=p.create_timer()),o.start()):"object"==typeof o&&o.stop()},p.init=function(){p.build_markup(),f.timer&&(o=p.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),o.start)),n=new i(f,q),"slide"===f.animation&&(n=new h(f,q)),j.on("click","."+f.next_class,p.next),j.on("click","."+f.prev_class,p.prev),f.next_on_click&&j.on("click","."+f.slides_container_class+" [data-orbit-slide]",p.link_bullet),j.on("click",p.toggle_timer),f.swipe&&j.on("touchstart.fndtn.orbit",function(a){a.touches||(a=a.originalEvent);var b={start_page_x:a.touches[0].pageX,start_page_y:a.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:d};j.data("swipe-transition",b),a.stopPropagation()}).on("touchmove.fndtn.orbit",function(a){if(a.touches||(a=a.originalEvent),!(a.touches.length>1||a.scale&&1!==a.scale)){var b=j.data("swipe-transition");if("undefined"==typeof b&&(b={}),b.delta_x=a.touches[0].pageX-b.start_page_x,"undefined"==typeof b.is_scrolling&&(b.is_scrolling=!!(b.is_scrolling||Math.abs(b.delta_x)<Math.abs(a.touches[0].pageY-b.start_page_y))),!b.is_scrolling&&!b.active){a.preventDefault();var c=b.delta_x<0?r+1:r-1;b.active=!0,p._goto(c)}}}).on("touchend.fndtn.orbit",function(a){j.data("swipe-transition",{}),a.stopPropagation()}),j.on("mouseenter.fndtn.orbit",function(a){f.timer&&f.pause_on_hover&&p.stop_timer()}).on("mouseleave.fndtn.orbit",function(a){f.timer&&f.resume_on_mouseout&&o.start()}),a(c).on("click","[data-orbit-link]",p.link_custom),a(b).on("load resize",p.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),p.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){j.prev("."+f.preloader_class).css("display","none"),p.update_slide_number(0),p.update_active_link(0),q.trigger("ready.fndtn.orbit")})},p.init()},g=function(a,b,c){var d,e,f=this,g=b.timer_speed,h=a.find("."+b.timer_progress_class),i=-1;this.update_progress=function(a){var b=h.clone();b.attr("style",""),b.css("width",a+"%"),h.replaceWith(b),h=b},this.restart=function(){clearTimeout(e),a.addClass(b.timer_paused_class),i=-1,f.update_progress(0)},this.start=function(){return a.hasClass(b.timer_paused_class)?(i=-1===i?g:i,a.removeClass(b.timer_paused_class),d=(new Date).getTime(),h.animate({width:"100%"},i,"linear"),e=setTimeout(function(){f.restart(),c()},i),void a.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(a.hasClass(b.timer_paused_class))return!0;clearTimeout(e),a.addClass(b.timer_paused_class);var c=(new Date).getTime();i-=c-d;var h=100-i/g*100;f.update_progress(h),a.trigger("timer-stopped.fndtn.orbit")}},h=function(b,c){var d=b.animation_speed,e=1===a("html[dir=rtl]").length,f=e?"marginRight":"marginLeft",g={};g[f]="0%",this.next=function(a,b,c){a.animate({marginLeft:"-100%"},d),b.animate(g,d,function(){a.css(f,"100%"),c()})},this.prev=function(a,b,c){a.animate({marginLeft:"100%"},d),b.css(f,"-100%"),b.animate(g,d,function(){a.css(f,"100%"),c()})}},i=function(b,c){{var d=b.animation_speed;1===a("html[dir=rtl]").length}this.next=function(a,b,c){b.css({margin:"0%",opacity:"0.01"}),b.animate({opacity:"1"},d,"linear",function(){a.css("margin","100%"),c()})},this.prev=function(a,b,c){b.css({margin:"0%",opacity:"0.01"}),b.animate({opacity:"1"},d,"linear",function(){a.css("margin","100%"),c()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.5.2",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:e,after_slide_change:e},init:function(a,b,c){this.bindings(b,c)},events:function(a){var b=new f(this.S(a),this.S(a).data("orbit-init"));this.S(a).data(this.name+"-instance",b)},reflow:function(){var a=this;if(a.S(a.scope).is("[data-orbit]")){var b=a.S(a.scope),c=b.data(a.name+"-instance");c.compute_dimensions()}else a.S("[data-orbit]",a.scope).each(function(b,c){var d=a.S(c),e=(a.data_options(d),d.data(a.name+"-instance"));e.compute_dimensions()})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";function e(a){var b=/fade/i.test(a),c=/pop/i.test(a);return{animate:b||c,pop:c,fade:b}}Foundation.libs.reveal={name:"reveal",version:"5.5.2",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",multiple_opened:!1,bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},on_ajax_error:a.noop,bg:a(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(b,c,d){a.extend(!0,this.settings,c,d),this.bindings(c,d)},events:function(a){var b=this,d=b.S;return d(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(a){if(a.preventDefault(),!b.locked){var c=d(this),e=c.data(b.data_attr("reveal-ajax")),f=c.data(b.data_attr("reveal-replace-content"));if(b.locked=!0,"undefined"==typeof e)b.open.call(b,c);else{var g=e===!0?c.attr("href"):e;b.open.call(b,c,{url:g},{replaceContentSel:f})}}}),d(c).on("click.fndtn.reveal",this.close_targets(),function(a){if(a.preventDefault(),!b.locked){var c=d("["+b.attr_name()+"].open").data(b.attr_name(!0)+"-init")||b.settings,e=d(a.target)[0]===d("."+c.bg_class)[0];if(e){if(!c.close_on_background_click)return;a.stopPropagation()}b.locked=!0,b.close.call(b,e?d("["+b.attr_name()+"].open:not(.toback)"):d(this).closest("["+b.attr_name()+"]"))}}),d("["+b.attr_name()+"]",this.scope).length>0?d(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):d(this.scope).on("open.fndtn.reveal","["+b.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+b.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+b.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+b.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+b.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+b.attr_name()+"]",this.close_video),!0},key_up_on:function(a){var b=this;return b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(a){var c=b.S("["+b.attr_name()+"].open"),d=c.data(b.attr_name(!0)+"-init")||b.settings;d&&27===a.which&&d.close_on_esc&&!b.locked&&b.close.call(b,c)}),!0},key_up_off:function(a){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(c,d){var e,f=this;c?"undefined"!=typeof c.selector?e=f.S("#"+c.data(f.data_attr("reveal-id"))).first():(e=f.S(this.scope),d=c):e=f.S(this.scope);var g=e.data(f.attr_name(!0)+"-init");if(g=g||this.settings,e.hasClass("open")&&c.attr("data-reveal-id")==e.attr("id"))return f.close(e);if(!e.hasClass("open")){var h=f.S("["+f.attr_name()+"].open");if("undefined"==typeof e.data("css-top")&&e.data("css-top",parseInt(e.css("top"),10)).data("offset",this.cache_offset(e)),e.attr("tabindex","0").attr("aria-hidden","false"),this.key_up_on(e),e.on("open.fndtn.reveal",function(a){"fndtn.reveal"!==a.namespace}),e.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),h.length<1&&this.toggle_bg(e,!0),"string"==typeof d&&(d={url:d}),"undefined"!=typeof d&&d.url){var i="undefined"!=typeof d.success?d.success:null;a.extend(d,{success:function(b,c,d){if(a.isFunction(i)){var j=i(b,c,d);"string"==typeof j&&(b=j)}"undefined"!=typeof options&&"undefined"!=typeof options.replaceContentSel?e.find(options.replaceContentSel).html(b):e.html(b),f.S(e).foundation("section","reflow"),f.S(e).children().foundation(),h.length>0&&(g.multiple_opened?f.to_back(h):f.hide(h,g.css.close)),f.show(e,g.css.open)}}),g.on_ajax_error!==a.noop&&a.extend(d,{error:g.on_ajax_error}),a.ajax(d)}else h.length>0&&(g.multiple_opened?f.to_back(h):f.hide(h,g.css.close)),this.show(e,g.css.open)}f.S(b).trigger("resize")},close:function(b){var b=b&&b.length?b:this.S(this.scope),c=this.S("["+this.attr_name()+"].open"),d=b.data(this.attr_name(!0)+"-init")||this.settings,e=this;c.length>0&&(b.removeAttr("tabindex","0").attr("aria-hidden","true"),this.locked=!0,this.key_up_off(b),b.trigger("close.fndtn.reveal"),(d.multiple_opened&&1===c.length||!d.multiple_opened||b.length>1)&&(e.toggle_bg(b,!1),e.to_front(b)),d.multiple_opened?(e.hide(b,d.css.close,d),e.to_front(a(a.makeArray(c).reverse()[1]))):e.hide(c,d.css.close,d))},close_targets:function(){var a="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?a+", ."+this.settings.bg_class:a},toggle_bg:function(b,c){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=a("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var e=this.settings.bg.filter(":visible").length>0;c!=e&&((c==d?e:!c)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(c,d){if(d){var f=c.data(this.attr_name(!0)+"-init")||this.settings,g=f.root_element,h=this;if(0===c.parent(g).length){var i=c.wrap('<div style="display: none;" />').parent();c.on("closed.fndtn.reveal.wrapped",function(){c.detach().appendTo(i),c.unwrap().unbind("closed.fndtn.reveal.wrapped")}),c.detach().appendTo(g)}var j=e(f.animation);if(j.animate||(this.locked=!1),j.pop){d.top=a(b).scrollTop()-c.data("offset")+"px";var k={top:a(b).scrollTop()+c.data("css-top")+"px",opacity:1};return setTimeout(function(){return c.css(d).animate(k,f.animation_speed,"linear",function(){h.locked=!1,c.trigger("opened.fndtn.reveal")}).addClass("open")},f.animation_speed/2)}if(j.fade){d.top=a(b).scrollTop()+c.data("css-top")+"px";var k={opacity:1};return setTimeout(function(){return c.css(d).animate(k,f.animation_speed,"linear",function(){h.locked=!1,c.trigger("opened.fndtn.reveal")}).addClass("open")},f.animation_speed/2)}return c.css(d).show().css({opacity:1}).addClass("open").trigger("opened.fndtn.reveal")}var f=this.settings;return e(f.animation).fade?c.fadeIn(f.animation_speed/2):(this.locked=!1,c.show())},to_back:function(a){a.addClass("toback")},to_front:function(a){a.removeClass("toback")},hide:function(c,d){if(d){var f=c.data(this.attr_name(!0)+"-init"),g=this;f=f||this.settings;var h=e(f.animation);if(h.animate||(this.locked=!1),h.pop){var i={top:-a(b).scrollTop()-c.data("offset")+"px",opacity:0};return setTimeout(function(){return c.animate(i,f.animation_speed,"linear",function(){g.locked=!1,c.css(d).trigger("closed.fndtn.reveal")}).removeClass("open")},f.animation_speed/2)}if(h.fade){var i={opacity:0};return setTimeout(function(){return c.animate(i,f.animation_speed,"linear",function(){g.locked=!1,c.css(d).trigger("closed.fndtn.reveal")}).removeClass("open")},f.animation_speed/2)}return c.hide().css(d).removeClass("open").trigger("closed.fndtn.reveal")}var f=this.settings;return e(f.animation).fade?c.fadeOut(f.animation_speed/2):c.hide()},close_video:function(b){var c=a(".flex-video",b.target),d=a("iframe",c);d.length>0&&(d.attr("data-src",d[0].src),d.attr("src",d.attr("src")),c.hide())},open_video:function(b){var c=a(".flex-video",b.target),e=c.find("iframe");if(e.length>0){var f=e.attr("data-src");if("string"==typeof f)e[0].src=e.attr("data-src");else{var g=e[0].src;e[0].src=d,e[0].src=g}c.show()}},data_attr:function(a){return this.namespace.length>0?this.namespace+"-"+a:a},cache_offset:function(a){var b=a.show().height()+parseInt(a.css("top"),10)+a.scrollY;return a.hide(),b},off:function(){a(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.2",settings:{start:0,end:100,step:1,precision:null,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(a,b,c){Foundation.inherit(this,"throttle"),this.bindings(b,c),this.reflow()},events:function(){var c=this;a(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+c.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(b){c.cache.active||(b.preventDefault(),c.set_active_slider(a(b.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(d){if(c.cache.active)if(d.preventDefault(),a.data(c.cache.active[0],"settings").vertical){var e=0;d.pageY||(e=b.scrollY),c.calculate_position(c.cache.active,c.get_cursor_position(d,"y")+e)}else c.calculate_position(c.cache.active,c.get_cursor_position(d,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(a){c.remove_active_slider()}).on("change.fndtn.slider",function(a){c.settings.on_change()}),c.S(b).on("resize.fndtn.slider",c.throttle(function(a){c.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var b=a(this),d=b.children(".range-slider-handle")[0],e=c.initialize_settings(d);""!=e.display_selector&&a(e.display_selector).each(function(){this.hasOwnProperty("value")&&a(this).change(function(){b.foundation("slider","set_value",a(this).val())})})})},get_cursor_position:function(a,b){var c,d="page"+b.toUpperCase(),e="client"+b.toUpperCase();return"undefined"!=typeof a[d]?c=a[d]:"undefined"!=typeof a.originalEvent[e]?c=a.originalEvent[e]:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0][e]?c=a.originalEvent.touches[0][e]:a.currentPoint&&"undefined"!=typeof a.currentPoint[b]&&(c=a.currentPoint[b]),c},set_active_slider:function(a){this.cache.active=a},remove_active_slider:function(){this.cache.active=null},calculate_position:function(b,c){var d=this,e=a.data(b[0],"settings"),f=(a.data(b[0],"handle_l"),a.data(b[0],"handle_o"),a.data(b[0],"bar_l")),g=a.data(b[0],"bar_o");requestAnimationFrame(function(){var a;a=Foundation.rtl&&!e.vertical?d.limit_to((g+f-c)/f,0,1):d.limit_to((c-g)/f,0,1),a=e.vertical?1-a:a;var h=d.normalized_value(a,e.start,e.end,e.step,e.precision);d.set_ui(b,h)})},set_ui:function(b,c){var d=a.data(b[0],"settings"),e=a.data(b[0],"handle_l"),f=a.data(b[0],"bar_l"),g=this.normalized_percentage(c,d.start,d.end),h=g*(f-e)-1,i=100*g,j=b.parent(),k=b.parent().children("input[type=hidden]");Foundation.rtl&&!d.vertical&&(h=-h),h=d.vertical?-h+f-e+1:h,this.set_translate(b,h,d.vertical),d.vertical?b.siblings(".range-slider-active-segment").css("height",i+"%"):b.siblings(".range-slider-active-segment").css("width",i+"%"),j.attr(this.attr_name(),c).trigger("change.fndtn.slider"),k.val(c),d.trigger_input_change&&k.trigger("change.fndtn.slider"),b[0].hasAttribute("aria-valuemin")||b.attr({"aria-valuemin":d.start,"aria-valuemax":d.end}),b.attr("aria-valuenow",c),""!=d.display_selector&&a(d.display_selector).each(function(){this.hasAttribute("value")?a(this).val(c):a(this).text(c)})},normalized_percentage:function(a,b,c){return Math.min(1,(a-b)/(c-b))},normalized_value:function(a,b,c,d,e){var f=c-b,g=a*f,h=(g-g%d)/d,i=g%d,j=i>=.5*d?d:0;return(h*d+j+b).toFixed(e)},set_translate:function(b,c,d){d?a(b).css("-webkit-transform","translateY("+c+"px)").css("-moz-transform","translateY("+c+"px)").css("-ms-transform","translateY("+c+"px)").css("-o-transform","translateY("+c+"px)").css("transform","translateY("+c+"px)"):a(b).css("-webkit-transform","translateX("+c+"px)").css("-moz-transform","translateX("+c+"px)").css("-ms-transform","translateX("+c+"px)").css("-o-transform","translateX("+c+"px)").css("transform","translateX("+c+"px)")},limit_to:function(a,b,c){return Math.min(Math.max(a,b),c)},initialize_settings:function(b){var c,d=a.extend({},this.settings,this.data_options(a(b).parent()));return null===d.precision&&(c=(""+d.step).match(/\.([\d]*)/),d.precision=c&&c[1]?c[1].length:0),d.vertical?(a.data(b,"bar_o",a(b).parent().offset().top),a.data(b,"bar_l",a(b).parent().outerHeight()),a.data(b,"handle_o",a(b).offset().top),a.data(b,"handle_l",a(b).outerHeight())):(a.data(b,"bar_o",a(b).parent().offset().left),a.data(b,"bar_l",a(b).parent().outerWidth()),a.data(b,"handle_o",a(b).offset().left),a.data(b,"handle_l",a(b).outerWidth())),a.data(b,"bar",a(b).parent()),a.data(b,"settings",d)},set_initial_position:function(b){var c=a.data(b.children(".range-slider-handle")[0],"settings"),d="number"!=typeof c.initial||isNaN(c.initial)?Math.floor(.5*(c.end-c.start)/c.step)*c.step+c.start:c.initial,e=b.children(".range-slider-handle");this.set_ui(e,d)},set_value:function(b){var c=this;a("["+c.attr_name()+"]",this.scope).each(function(){a(this).attr(c.attr_name(),b)}),a(this.scope).attr(c.attr_name())&&a(this.scope).attr(c.attr_name(),b),c.reflow()},reflow:function(){var b=this;b.S("["+this.attr_name()+"]").each(function(){var c=a(this).children(".range-slider-handle")[0],d=a(this).attr(b.attr_name());b.initialize_settings(c),d?b.set_ui(a(c),parseFloat(d)):b.set_initial_position(a(this))})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.2",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(a,c,d){var e=this,f=this.S;f("["+this.attr_name()+"] > .active > a",this.scope).each(function(){e.default_tab_hashes.push(this.hash)}),e.entry_location=b.location.href,this.bindings(c,d),this.handle_location_hash_change()},events:function(){var a=this,c=this.S,d=function(b,d){var e=c(d).closest("["+a.attr_name()+"]").data(a.attr_name(!0)+"-init");(!e.is_hover||Modernizr.touch)&&(b.preventDefault(),b.stopPropagation(),a.toggle_active_tab(c(d).parent()))};c(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(a){var b=this,c=a.keyCode||a.which;9==c&&(a.preventDefault(),d(a,b))}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(a){var b=this;d(a,b)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(b){var d=c(this).closest("["+a.attr_name()+"]").data(a.attr_name(!0)+"-init");d.is_hover&&a.toggle_active_tab(c(this).parent())}),c(b).on("hashchange.fndtn.tab",function(b){b.preventDefault(),a.handle_location_hash_change()})},handle_location_hash_change:function(){var b=this,c=this.S;c("["+this.attr_name()+"]",this.scope).each(function(){var e=c(this).data(b.attr_name(!0)+"-init");if(e.deep_linking){var f;if(f=e.scroll_to_content?b.scope.location.hash:b.scope.location.hash.replace("fndtn-",""),""!=f){var g=c(f);if(g.hasClass("content")&&g.parent().hasClass("tabs-content"))b.toggle_active_tab(a("["+b.attr_name()+"] > * > a[href="+f+"]").parent());else{var h=g.closest(".content").attr("id");h!=d&&b.toggle_active_tab(a("["+b.attr_name()+"] > * > a[href=#"+h+"]").parent(),f)}}else for(var i=0;i<b.default_tab_hashes.length;i++)b.toggle_active_tab(a("["+b.attr_name()+"] > * > a[href="+b.default_tab_hashes[i]+"]").parent())}})},toggle_active_tab:function(e,f){var g=this,h=g.S,i=e.closest("["+this.attr_name()+"]"),j=e.find("a"),k=e.children("a").first(),l="#"+k.attr("href").split("#")[1],m=h(l),n=e.siblings(),o=i.data(this.attr_name(!0)+"-init"),p=function(b){var d,e=a(this),f=a(this).parents("li").prev().children('[role="tab"]'),g=a(this).parents("li").next().children('[role="tab"]');switch(b.keyCode){case 37:d=f;break;case 39:d=g;break;default:d=!1}d.length&&(e.attr({tabindex:"-1","aria-selected":null}),d.attr({tabindex:"0","aria-selected":!0}).focus()),a('[role="tabpanel"]').attr("aria-hidden","true"),a("#"+a(c.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},q=function(a){var c=b.location.href===g.entry_location,d=o.scroll_to_content?g.default_tab_hashes[0]:c?b.location.hash:"fndtn-"+g.default_tab_hashes[0].replace("#","");c&&a===d||(b.location.hash=a)};k.data("tab-content")&&(l="#"+k.data("tab-content").split("#")[1],m=h(l)),o.deep_linking&&(o.scroll_to_content?(q(f||l),f==d||f==l?e.parent()[0].scrollIntoView():h(l)[0].scrollIntoView()):q(f!=d?"fndtn-"+f.replace("#",""):"fndtn-"+l.replace("#",""))),e.addClass(o.active_class).triggerHandler("opened"),j.attr({"aria-selected":"true",tabindex:0}),n.removeClass(o.active_class),n.find("a").attr({"aria-selected":"false",tabindex:-1}),m.siblings().removeClass(o.active_class).attr({"aria-hidden":"true",tabindex:-1}),m.addClass(o.active_class).attr("aria-hidden","false").removeAttr("tabindex"),o.callback(e),m.triggerHandler("toggled",[m]),i.triggerHandler("toggled",[e]),j.off("keydown").on("keydown",p)},data_attr:function(a){return this.namespace.length>0?this.namespace+"-"+a:a},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.2",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,show_on:"all",tip_template:function(a,b){return'<span data-selector="'+a+'" id="'+a+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+b+'<span class="nub"></span></span>'}},cache:{},init:function(a,b,c){Foundation.inherit(this,"random_str"),this.bindings(b,c)},should_show:function(b,c){var d=a.extend({},this.settings,this.data_options(b));return"all"===d.show_on?!0:this.small()&&"small"===d.show_on?!0:this.medium()&&"medium"===d.show_on?!0:this.large()&&"large"===d.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(b){function c(a,b,c){a.timer||(c?(a.timer=null,e.showTip(b)):a.timer=setTimeout(function(){a.timer=null,e.showTip(b)}.bind(a),e.settings.hover_delay))}function d(a,b){a.timer&&(clearTimeout(a.timer),a.timer=null),e.hide(b)}var e=this,f=e.S;e.create(this.S(b)),a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(b){var g=f(this),h=a.extend({},e.settings,e.data_options(g)),i=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type)&&f(b.target).is("a"))return!1;if(/mouse/i.test(b.type)&&e.ie_touch(b))return!1;if(g.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type)&&b.preventDefault(),e.hide(g);else{if(h.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type))return;if(!h.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type)&&(b.preventDefault(),f(h.tooltip_class+".open").hide(),i=!0,a(".open["+e.attr_name()+"]").length>0)){var j=f(a(".open["+e.attr_name()+"]")[0]);e.hide(j)}/enter|over/i.test(b.type)?c(this,g):"mouseout"===b.type||"mouseleave"===b.type?d(this,g):c(this,g,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(b){return/mouse/i.test(b.type)&&e.ie_touch(b)?!1:void(("touch"!=a(this).data("tooltip-open-event-type")||"mouseleave"!=b.type)&&("mouse"==a(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(b.type)?e.convert_to_touch(a(this)):d(this,a(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(a){d(this,f(this))})},ie_touch:function(a){return!1},showTip:function(a){var b=this.getTip(a);return this.should_show(a,b)?this.show(a):void 0},getTip:function(b){var c=this.selector(b),d=a.extend({},this.settings,this.data_options(b)),e=null;return c&&(e=this.S('span[data-selector="'+c+'"]'+d.tooltip_class)),"object"==typeof e?e:!1},selector:function(a){var b=a.attr(this.attr_name())||a.attr("data-selector");return"string"!=typeof b&&(b=this.random_str(6),a.attr("data-selector",b).attr("aria-describedby",b)),b},create:function(c){var d=this,e=a.extend({},this.settings,this.data_options(c)),f=this.settings.tip_template;"string"==typeof e.tip_template&&b.hasOwnProperty(e.tip_template)&&(f=b[e.tip_template]);var g=a(f(this.selector(c),a("<div></div>").html(c.attr("title")).html())),h=this.inheritable_classes(c);g.addClass(h).appendTo(e.append_to),Modernizr.touch&&(g.append('<span class="tap-to-close">'+e.touch_close_text+"</span>"),g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(a){d.hide(c)})),c.removeAttr("title").attr("title","")},reposition:function(b,c,d){var e,f,g,h,i;if(c.css("visibility","hidden").show(),e=b.data("width"),f=c.children(".nub"),g=f.outerHeight(),h=f.outerHeight(),c.css(this.small()?{width:"100%"}:{width:e?e:"auto"}),i=function(a,b,c,d,e,f){return a.css({top:b?b:"auto",bottom:d?d:"auto",left:e?e:"auto",right:c?c:"auto"}).end()},i(c,b.offset().top+b.outerHeight()+10,"auto","auto",b.offset().left),this.small())i(c,b.offset().top+b.outerHeight()+10,"auto","auto",12.5,a(this.scope).width()),c.addClass("tip-override"),i(f,-g,"auto","auto",b.offset().left);else{var j=b.offset().left;Foundation.rtl&&(f.addClass("rtl"),j=b.offset().left+b.outerWidth()-c.outerWidth()),i(c,b.offset().top+b.outerHeight()+10,"auto","auto",j),f.attr("style")&&f.removeAttr("style"),c.removeClass("tip-override"),d&&d.indexOf("tip-top")>-1?(Foundation.rtl&&f.addClass("rtl"),i(c,b.offset().top-c.outerHeight(),"auto","auto",j).removeClass("tip-override")):d&&d.indexOf("tip-left")>-1?(i(c,b.offset().top+b.outerHeight()/2-c.outerHeight()/2,"auto","auto",b.offset().left-c.outerWidth()-g).removeClass("tip-override"),f.removeClass("rtl")):d&&d.indexOf("tip-right")>-1&&(i(c,b.offset().top+b.outerHeight()/2-c.outerHeight()/2,"auto","auto",b.offset().left+b.outerWidth()+g).removeClass("tip-override"),f.removeClass("rtl"))}c.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(b){var c=a.extend({},this.settings,this.data_options(b)),d=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(c.additional_inheritable_classes),e=b.attr("class"),f=e?a.map(e.split(" "),function(b,c){return-1!==a.inArray(b,d)?b:void 0}).join(" "):"";return a.trim(f)},convert_to_touch:function(b){var c=this,d=c.getTip(b),e=a.extend({},c.settings,c.data_options(b));0===d.find(".tap-to-close").length&&(d.append('<span class="tap-to-close">'+e.touch_close_text+"</span>"),d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(a){c.hide(b)})),b.data("tooltip-open-event-type","touch")},show:function(a){var b=this.getTip(a);"touch"==a.data("tooltip-open-event-type")&&this.convert_to_touch(a),this.reposition(a,b,a.attr("class")),a.addClass("open"),b.fadeIn(150)},hide:function(a){var b=this.getTip(a);b.fadeOut(150,function(){b.find(".tap-to-close").remove(),b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),a.removeClass("open")})},off:function(){var b=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(c){a("["+b.attr_name()+"]").eq(c).attr("title",a(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.2",settings:{index:0,start_offset:0,
sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all",dropdown_autoclose:!0},init:function(b,c,d){Foundation.inherit(this,"add_custom_rule register_media throttle");var e=this;e.register_media("topbar","foundation-mq-topbar"),this.bindings(c,d),e.S("["+this.attr_name()+"]",this.scope).each(function(){{var b=a(this),c=b.data(e.attr_name(!0)+"-init");e.S("section, .top-bar-section",this)}b.data("index",0);var d=b.parent();d.hasClass("fixed")||e.is_sticky(b,d,c)?(e.settings.sticky_class=c.sticky_class,e.settings.sticky_topbar=b,b.data("height",d.outerHeight()),b.data("stickyoffset",d.offset().top)):b.data("height",b.outerHeight()),c.assembled||e.assemble(b),c.is_hover?e.S(".has-dropdown",b).addClass("not-click"):e.S(".has-dropdown",b).removeClass("not-click"),e.add_custom_rule(".f-topbar-fixed { padding-top: "+b.data("height")+"px }"),d.hasClass("fixed")&&e.S("body").addClass("f-topbar-fixed")})},is_sticky:function(a,b,c){var d=b.hasClass(c.sticky_class),e=matchMedia(Foundation.media_queries.small).matches,f=matchMedia(Foundation.media_queries.medium).matches,g=matchMedia(Foundation.media_queries.large).matches;return d&&"all"===c.sticky_on?!0:d&&this.small()&&-1!==c.sticky_on.indexOf("small")&&e&&!f&&!g?!0:d&&this.medium()&&-1!==c.sticky_on.indexOf("medium")&&e&&f&&!g?!0:d&&this.large()&&-1!==c.sticky_on.indexOf("large")&&e&&f&&g?!0:!1},toggle:function(c){var d,e=this;d=c?e.S(c).closest("["+this.attr_name()+"]"):e.S("["+this.attr_name()+"]");var f=d.data(this.attr_name(!0)+"-init"),g=e.S("section, .top-bar-section",d);e.breakpoint()&&(e.rtl?(g.css({right:"0%"}),a(">.name",g).css({right:"100%"})):(g.css({left:"0%"}),a(">.name",g).css({left:"100%"})),e.S("li.moved",g).removeClass("moved"),d.data("index",0),d.toggleClass("expanded").css("height","")),f.scrolltop?d.hasClass("expanded")?d.parent().hasClass("fixed")&&(f.scrolltop?(d.parent().removeClass("fixed"),d.addClass("fixed"),e.S("body").removeClass("f-topbar-fixed"),b.scrollTo(0,0)):d.parent().removeClass("expanded")):d.hasClass("fixed")&&(d.parent().addClass("fixed"),d.removeClass("fixed"),e.S("body").addClass("f-topbar-fixed")):(e.is_sticky(d,d.parent(),f)&&d.parent().addClass("fixed"),d.parent().hasClass("fixed")&&(d.hasClass("expanded")?(d.addClass("fixed"),d.parent().addClass("expanded"),e.S("body").addClass("f-topbar-fixed")):(d.removeClass("fixed"),d.parent().removeClass("expanded"),e.update_sticky_positioning())))},timer:null,events:function(c){var d=this,e=this.S;e(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(a){a.preventDefault(),d.toggle(this)}).on("click.fndtn.topbar contextmenu.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(b){var c=a(this).closest("li"),e=c.closest("["+d.attr_name()+"]"),f=e.data(d.attr_name(!0)+"-init");if(f.dropdown_autoclose&&f.is_hover){var g=a(this).closest(".hover");g.removeClass("hover")}!d.breakpoint()||c.hasClass("back")||c.hasClass("has-dropdown")||d.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(b){var c=e(this),f=e(b.target),g=c.closest("["+d.attr_name()+"]"),h=g.data(d.attr_name(!0)+"-init");return f.data("revealId")?void d.toggle():void(d.breakpoint()||(!h.is_hover||Modernizr.touch)&&(b.stopImmediatePropagation(),c.hasClass("hover")?(c.removeClass("hover").find("li").removeClass("hover"),c.parents("li.hover").removeClass("hover")):(c.addClass("hover"),a(c).siblings().removeClass("hover"),"A"===f[0].nodeName&&f.parent().hasClass("has-dropdown")&&b.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(a){if(d.breakpoint()){a.preventDefault();var b=e(this),c=b.closest("["+d.attr_name()+"]"),f=c.find("section, .top-bar-section"),g=(b.next(".dropdown").outerHeight(),b.closest("li"));c.data("index",c.data("index")+1),g.addClass("moved"),d.rtl?(f.css({right:-(100*c.data("index"))+"%"}),f.find(">.name").css({right:100*c.data("index")+"%"})):(f.css({left:-(100*c.data("index"))+"%"}),f.find(">.name").css({left:100*c.data("index")+"%"})),c.css("height",b.siblings("ul").outerHeight(!0)+c.data("height"))}}),e(b).off(".topbar").on("resize.fndtn.topbar",d.throttle(function(){d.resize.call(d)},50)).trigger("resize.fndtn.topbar").load(function(){e(this).trigger("resize.fndtn.topbar")}),e("body").off(".topbar").on("click.fndtn.topbar",function(a){var b=e(a.target).closest("li").closest("li.hover");b.length>0||e("["+d.attr_name()+"] li.hover").removeClass("hover")}),e(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(a){a.preventDefault();var b=e(this),c=b.closest("["+d.attr_name()+"]"),f=c.find("section, .top-bar-section"),g=(c.data(d.attr_name(!0)+"-init"),b.closest("li.moved")),h=g.parent();c.data("index",c.data("index")-1),d.rtl?(f.css({right:-(100*c.data("index"))+"%"}),f.find(">.name").css({right:100*c.data("index")+"%"})):(f.css({left:-(100*c.data("index"))+"%"}),f.find(">.name").css({left:100*c.data("index")+"%"})),0===c.data("index")?c.css("height",""):c.css("height",h.outerHeight(!0)+c.data("height")),setTimeout(function(){g.removeClass("moved")},300)}),e(this.scope).find(".dropdown a").focus(function(){a(this).parents(".has-dropdown").addClass("hover")}).blur(function(){a(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var a=this;a.S("["+this.attr_name()+"]").each(function(){var b,d=a.S(this),e=d.data(a.attr_name(!0)+"-init"),f=d.parent("."+a.settings.sticky_class);if(!a.breakpoint()){var g=d.hasClass("expanded");d.css("height","").removeClass("expanded").find("li").removeClass("hover"),g&&a.toggle(d)}a.is_sticky(d,f,e)&&(f.hasClass("fixed")?(f.removeClass("fixed"),b=f.offset().top,a.S(c.body).hasClass("f-topbar-fixed")&&(b-=d.data("height")),d.data("stickyoffset",b),f.addClass("fixed")):(b=f.offset().top,d.data("stickyoffset",b)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(b){var c=this,d=b.data(this.attr_name(!0)+"-init"),e=c.S("section, .top-bar-section",b);e.detach(),c.S(".has-dropdown>a",e).each(function(){var b,e=c.S(this),f=e.siblings(".dropdown"),g=e.attr("href");f.find(".title.back").length||(b=a(1==d.mobile_show_parent_link&&g?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="'+g+'">'+e.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),a("h5>a",b).html(1==d.custom_back_text?d.back_text:"&laquo; "+e.html()),f.prepend(b))}),e.appendTo(b),this.sticky(),this.assembled(b)},assembled:function(b){b.data(this.attr_name(!0),a.extend({},b.data(this.attr_name(!0)),{assembled:!0}))},height:function(b){var c=0,d=this;return a("> li",b).each(function(){c+=d.S(this).outerHeight(!0)}),c},sticky:function(){var a=this;this.S(b).on("scroll",function(){a.update_sticky_positioning()})},update_sticky_positioning:function(){var a="."+this.settings.sticky_class,c=this.S(b),d=this;if(d.settings.sticky_topbar&&d.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var e=this.settings.sticky_topbar.data("stickyoffset")+this.settings.start_offset;d.S(a).hasClass("expanded")||(c.scrollTop()>e?d.S(a).hasClass("fixed")||(d.S(a).addClass("fixed"),d.S("body").addClass("f-topbar-fixed")):c.scrollTop()<=e&&d.S(a).hasClass("fixed")&&(d.S(a).removeClass("fixed"),d.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(b).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document);
//! moment.js
//! version : 2.11.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    function isUndefined(input) {
        return input === void 0;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function Locale() {
    }

    // internal storage for locale config files
    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, values) {
        if (values !== null) {
            values.abbr = name;
            locales[name] = locales[name] || new Locale();
            locales[name].set(values);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    // returns locale data
    function locale_locales__getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function get_set__set (mom, unit, value) {
        if (mom.isValid()) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    // MOMENTS

    function getSet (units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        return isArray(this._months) ? this._months[m.month()] :
            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')$', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')$', 'i');
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        //the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(utils_hooks__hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        if (!valid__isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date(utils_hooks__hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             if (this.isValid() && other.isValid()) {
                 return other < this ? this : other;
             } else {
                 return valid__createInvalid();
             }
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return valid__createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = ((string || '').match(matcher) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
            } else if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(matchOffset, this._i));
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    var isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])        * sign,
                h  : toInt(match[HOUR])        * sign,
                m  : toInt(match[MINUTE])      * sign,
                s  : toInt(match[SECOND])      * sign,
                ms : toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                d : parseIso(match[4], sign),
                h : parseIso(match[5], sign),
                m : parseIso(match[6], sign),
                s : parseIso(match[7], sign),
                w : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return +this > +localInput;
        } else {
            return +localInput < +this.clone().startOf(units);
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return +this < +localInput;
        } else {
            return +this.clone().endOf(units) < +localInput;
        }
    }

    function isBetween (from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return +this === +localInput;
        } else {
            inputMs = +localInput;
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(+this / 1000);
    }

    function toDate () {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // JSON.stringify(new Date(NaN)) === 'null'
        return this.isValid() ? this.toISOString() : 'null';
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        // console.log("got", weekYear, week, weekday, "set", date.toISOString());
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   matchWord);
    addRegexToken('ddd',  matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = local__createLocal([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add               = add_subtract__add;
    momentPrototype__proto.calendar          = moment_calendar__calendar;
    momentPrototype__proto.clone             = clone;
    momentPrototype__proto.diff              = diff;
    momentPrototype__proto.endOf             = endOf;
    momentPrototype__proto.format            = format;
    momentPrototype__proto.from              = from;
    momentPrototype__proto.fromNow           = fromNow;
    momentPrototype__proto.to                = to;
    momentPrototype__proto.toNow             = toNow;
    momentPrototype__proto.get               = getSet;
    momentPrototype__proto.invalidAt         = invalidAt;
    momentPrototype__proto.isAfter           = isAfter;
    momentPrototype__proto.isBefore          = isBefore;
    momentPrototype__proto.isBetween         = isBetween;
    momentPrototype__proto.isSame            = isSame;
    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
    momentPrototype__proto.isValid           = moment_valid__isValid;
    momentPrototype__proto.lang              = lang;
    momentPrototype__proto.locale            = locale;
    momentPrototype__proto.localeData        = localeData;
    momentPrototype__proto.max               = prototypeMax;
    momentPrototype__proto.min               = prototypeMin;
    momentPrototype__proto.parsingFlags      = parsingFlags;
    momentPrototype__proto.set               = getSet;
    momentPrototype__proto.startOf           = startOf;
    momentPrototype__proto.subtract          = add_subtract__subtract;
    momentPrototype__proto.toArray           = toArray;
    momentPrototype__proto.toObject          = toObject;
    momentPrototype__proto.toDate            = toDate;
    momentPrototype__proto.toISOString       = moment_format__toISOString;
    momentPrototype__proto.toJSON            = toJSON;
    momentPrototype__proto.toString          = toString;
    momentPrototype__proto.unix              = unix;
    momentPrototype__proto.valueOf           = to_type__valueOf;
    momentPrototype__proto.creationData      = creationData;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat (string) {
        return string;
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar       = defaultCalendar;
    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto._invalidDate    = defaultInvalidDate;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto._ordinal        = defaultOrdinal;
    prototype__proto.ordinal         = ordinal;
    prototype__proto._ordinalParse   = defaultOrdinalParse;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto._relativeTime   = defaultRelativeTime;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months            =        localeMonths;
    prototype__proto._months           = defaultLocaleMonths;
    prototype__proto.monthsShort       =        localeMonthsShort;
    prototype__proto._monthsShort      = defaultLocaleMonthsShort;
    prototype__proto.monthsParse       =        localeMonthsParse;
    prototype__proto._monthsRegex      = defaultMonthsRegex;
    prototype__proto.monthsRegex       = monthsRegex;
    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
    prototype__proto.monthsShortRegex  = monthsShortRegex;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto._weekdays      = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list (format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort (format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays (format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort (format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin (format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes <= 1           && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   <= 1           && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    <= 1           && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  <= 1           && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   <= 1           && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.11.2';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.now                   = now;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    utils_hooks__hooks.prototype             = momentPrototype;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
//! moment.js locale configuration
//! locale : brazilian portuguese (pt-br)
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var pt_br = moment.defineLocale('pt-br', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : '%s atrás',
            s : 'poucos segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinalParse: /\d{1,2}º/,
        ordinal : '%dº'
    });

    return pt_br;

}));
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
/*!
 * Vue.js v1.0.15
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.Vue = factory();
}(this, function () { 'use strict';

  function set(obj, key, val) {
    if (hasOwn(obj, key)) {
      obj[key] = val;
      return;
    }
    if (obj._isVue) {
      set(obj._data, key, val);
      return;
    }
    var ob = obj.__ob__;
    if (!ob) {
      obj[key] = val;
      return;
    }
    ob.convert(key, val);
    ob.dep.notify();
    if (ob.vms) {
      var i = ob.vms.length;
      while (i--) {
        var vm = ob.vms[i];
        vm._proxy(key);
        vm._digest();
      }
    }
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   *
   * @param {Object} obj
   * @param {String} key
   */

  function del(obj, key) {
    if (!hasOwn(obj, key)) {
      return;
    }
    delete obj[key];
    var ob = obj.__ob__;
    if (!ob) {
      return;
    }
    ob.dep.notify();
    if (ob.vms) {
      var i = ob.vms.length;
      while (i--) {
        var vm = ob.vms[i];
        vm._unproxy(key);
        vm._digest();
      }
    }
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check whether the object has the property.
   *
   * @param {Object} obj
   * @param {String} key
   * @return {Boolean}
   */

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Check if an expression is a literal value.
   *
   * @param {String} exp
   * @return {Boolean}
   */

  var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/;

  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }

  /**
   * Check if a string starts with $ or _
   *
   * @param {String} str
   * @return {Boolean}
   */

  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Guard text output, make sure undefined outputs
   * empty string
   *
   * @param {*} value
   * @return {String}
   */

  function _toString(value) {
    return value == null ? '' : value.toString();
  }

  /**
   * Check and convert possible numeric strings to numbers
   * before setting back to data
   *
   * @param {*} value
   * @return {*|Number}
   */

  function toNumber(value) {
    if (typeof value !== 'string') {
      return value;
    } else {
      var parsed = Number(value);
      return isNaN(parsed) ? value : parsed;
    }
  }

  /**
   * Convert string boolean literals into real booleans.
   *
   * @param {*} value
   * @return {*|Boolean}
   */

  function toBoolean(value) {
    return value === 'true' ? true : value === 'false' ? false : value;
  }

  /**
   * Strip quotes from a string
   *
   * @param {String} str
   * @return {String | false}
   */

  function stripQuotes(str) {
    var a = str.charCodeAt(0);
    var b = str.charCodeAt(str.length - 1);
    return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
  }

  /**
   * Camelize a hyphen-delmited string.
   *
   * @param {String} str
   * @return {String}
   */

  var camelizeRE = /-(\w)/g;

  function camelize(str) {
    return str.replace(camelizeRE, toUpper);
  }

  function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
  }

  /**
   * Hyphenate a camelCase string.
   *
   * @param {String} str
   * @return {String}
   */

  var hyphenateRE = /([a-z\d])([A-Z])/g;

  function hyphenate(str) {
    return str.replace(hyphenateRE, '$1-$2').toLowerCase();
  }

  /**
   * Converts hyphen/underscore/slash delimitered names into
   * camelized classNames.
   *
   * e.g. my-component => MyComponent
   *      some_else    => SomeElse
   *      some/comp    => SomeComp
   *
   * @param {String} str
   * @return {String}
   */

  var classifyRE = /(?:^|[-_\/])(\w)/g;

  function classify(str) {
    return str.replace(classifyRE, toUpper);
  }

  /**
   * Simple bind, faster than native
   *
   * @param {Function} fn
   * @param {Object} ctx
   * @return {Function}
   */

  function bind$1(fn, ctx) {
    return function (a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    };
  }

  /**
   * Convert an Array-like object to a real Array.
   *
   * @param {Array-like} list
   * @param {Number} [start] - start index
   * @return {Array}
   */

  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   *
   * @param {Object} to
   * @param {Object} from
   */

  function extend(to, from) {
    var keys = Object.keys(from);
    var i = keys.length;
    while (i--) {
      to[keys[i]] = from[keys[i]];
    }
    return to;
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   *
   * @param {*} obj
   * @return {Boolean}
   */

  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   *
   * @param {*} obj
   * @return {Boolean}
   */

  var toString = Object.prototype.toString;
  var OBJECT_STRING = '[object Object]';

  function isPlainObject(obj) {
    return toString.call(obj) === OBJECT_STRING;
  }

  /**
   * Array type check.
   *
   * @param {*} obj
   * @return {Boolean}
   */

  var isArray = Array.isArray;

  /**
   * Define a non-enumerable property
   *
   * @param {Object} obj
   * @param {String} key
   * @param {*} val
   * @param {Boolean} [enumerable]
   */

  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Debounce a function so it only gets called after the
   * input stops arriving after the given wait period.
   *
   * @param {Function} func
   * @param {Number} wait
   * @return {Function} - the debounced function
   */

  function _debounce(func, wait) {
    var timeout, args, context, timestamp, result;
    var later = function later() {
      var last = Date.now() - timestamp;
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    };
    return function () {
      context = this;
      args = arguments;
      timestamp = Date.now();
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      return result;
    };
  }

  /**
   * Manual indexOf because it's slightly faster than
   * native.
   *
   * @param {Array} arr
   * @param {*} obj
   */

  function indexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * Make a cancellable version of an async callback.
   *
   * @param {Function} fn
   * @return {Function}
   */

  function cancellable(fn) {
    var cb = function cb() {
      if (!cb.cancelled) {
        return fn.apply(this, arguments);
      }
    };
    cb.cancel = function () {
      cb.cancelled = true;
    };
    return cb;
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   *
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   */

  function looseEqual(a, b) {
    /* eslint-disable eqeqeq */
    return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
    /* eslint-enable eqeqeq */
  }

  var hasProto = ('__proto__' in {});

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

  var isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;

  var isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;

  var transitionProp = undefined;
  var transitionEndEvent = undefined;
  var animationProp = undefined;
  var animationEndEvent = undefined;

  // Transition property/event sniffing
  if (inBrowser && !isIE9) {
    var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
    var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
    transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
    transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
    animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
    animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
  }

  /**
   * Defer a task to execute it asynchronously. Ideally this
   * should be executed as a microtask, so we leverage
   * MutationObserver if it's available, and fallback to
   * setTimeout(0).
   *
   * @param {Function} cb
   * @param {Object} ctx
   */

  var nextTick = (function () {
    var callbacks = [];
    var pending = false;
    var timerFunc;
    function nextTickHandler() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks = [];
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
    /* istanbul ignore if */
    if (typeof MutationObserver !== 'undefined') {
      var counter = 1;
      var observer = new MutationObserver(nextTickHandler);
      var textNode = document.createTextNode(counter);
      observer.observe(textNode, {
        characterData: true
      });
      timerFunc = function () {
        counter = (counter + 1) % 2;
        textNode.data = counter;
      };
    } else {
      timerFunc = setTimeout;
    }
    return function (cb, ctx) {
      var func = ctx ? function () {
        cb.call(ctx);
      } : cb;
      callbacks.push(func);
      if (pending) return;
      pending = true;
      timerFunc(nextTickHandler, 0);
    };
  })();

  function Cache(limit) {
    this.size = 0;
    this.limit = limit;
    this.head = this.tail = undefined;
    this._keymap = Object.create(null);
  }

  var p = Cache.prototype;

  /**
   * Put <value> into the cache associated with <key>.
   * Returns the entry which was removed to make room for
   * the new entry. Otherwise undefined is returned.
   * (i.e. if there was enough room already).
   *
   * @param {String} key
   * @param {*} value
   * @return {Entry|undefined}
   */

  p.put = function (key, value) {
    var removed;
    if (this.size === this.limit) {
      removed = this.shift();
    }

    var entry = this.get(key, true);
    if (!entry) {
      entry = {
        key: key
      };
      this._keymap[key] = entry;
      if (this.tail) {
        this.tail.newer = entry;
        entry.older = this.tail;
      } else {
        this.head = entry;
      }
      this.tail = entry;
      this.size++;
    }
    entry.value = value;

    return removed;
  };

  /**
   * Purge the least recently used (oldest) entry from the
   * cache. Returns the removed entry or undefined if the
   * cache was empty.
   */

  p.shift = function () {
    var entry = this.head;
    if (entry) {
      this.head = this.head.newer;
      this.head.older = undefined;
      entry.newer = entry.older = undefined;
      this._keymap[entry.key] = undefined;
      this.size--;
    }
    return entry;
  };

  /**
   * Get and register recent use of <key>. Returns the value
   * associated with <key> or undefined if not in cache.
   *
   * @param {String} key
   * @param {Boolean} returnEntry
   * @return {Entry|*}
   */

  p.get = function (key, returnEntry) {
    var entry = this._keymap[key];
    if (entry === undefined) return;
    if (entry === this.tail) {
      return returnEntry ? entry : entry.value;
    }
    // HEAD--------------TAIL
    //   <.older   .newer>
    //  <--- add direction --
    //   A  B  C  <D>  E
    if (entry.newer) {
      if (entry === this.head) {
        this.head = entry.newer;
      }
      entry.newer.older = entry.older; // C <-- E.
    }
    if (entry.older) {
      entry.older.newer = entry.newer; // C. --> E
    }
    entry.newer = undefined; // D --x
    entry.older = this.tail; // D. --> E
    if (this.tail) {
      this.tail.newer = entry; // E. <-- D
    }
    this.tail = entry;
    return returnEntry ? entry : entry.value;
  };

  var cache$1 = new Cache(1000);
  var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
  var reservedArgRE = /^in$|^-?\d+/;

  /**
   * Parser state
   */

  var str;
  var dir;
  var c;
  var prev;
  var i;
  var l;
  var lastFilterIndex;
  var inSingle;
  var inDouble;
  var curly;
  var square;
  var paren;
  /**
   * Push a filter to the current directive object
   */

  function pushFilter() {
    var exp = str.slice(lastFilterIndex, i).trim();
    var filter;
    if (exp) {
      filter = {};
      var tokens = exp.match(filterTokenRE);
      filter.name = tokens[0];
      if (tokens.length > 1) {
        filter.args = tokens.slice(1).map(processFilterArg);
      }
    }
    if (filter) {
      (dir.filters = dir.filters || []).push(filter);
    }
    lastFilterIndex = i + 1;
  }

  /**
   * Check if an argument is dynamic and strip quotes.
   *
   * @param {String} arg
   * @return {Object}
   */

  function processFilterArg(arg) {
    if (reservedArgRE.test(arg)) {
      return {
        value: toNumber(arg),
        dynamic: false
      };
    } else {
      var stripped = stripQuotes(arg);
      var dynamic = stripped === arg;
      return {
        value: dynamic ? arg : stripped,
        dynamic: dynamic
      };
    }
  }

  /**
   * Parse a directive value and extract the expression
   * and its filters into a descriptor.
   *
   * Example:
   *
   * "a + 1 | uppercase" will yield:
   * {
   *   expression: 'a + 1',
   *   filters: [
   *     { name: 'uppercase', args: null }
   *   ]
   * }
   *
   * @param {String} str
   * @return {Object}
   */

  function parseDirective(s) {

    var hit = cache$1.get(s);
    if (hit) {
      return hit;
    }

    // reset parser state
    str = s;
    inSingle = inDouble = false;
    curly = square = paren = 0;
    lastFilterIndex = 0;
    dir = {};

    for (i = 0, l = str.length; i < l; i++) {
      prev = c;
      c = str.charCodeAt(i);
      if (inSingle) {
        // check single quote
        if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
      } else if (inDouble) {
        // check double quote
        if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
      } else if (c === 0x7C && // pipe
      str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
        if (dir.expression == null) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          dir.expression = str.slice(0, i).trim();
        } else {
          // already has filter
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
      }
    }

    if (dir.expression == null) {
      dir.expression = str.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    cache$1.put(s, dir);
    return dir;
  }

  var directive = Object.freeze({
    parseDirective: parseDirective
  });

  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var cache = undefined;
  var tagRE = undefined;
  var htmlRE = undefined;
  /**
   * Escape a string so it can be used in a RegExp
   * constructor.
   *
   * @param {String} str
   */

  function escapeRegex(str) {
    return str.replace(regexEscapeRE, '\\$&');
  }

  function compileRegex() {
    var open = escapeRegex(config.delimiters[0]);
    var close = escapeRegex(config.delimiters[1]);
    var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
    var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
    tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
    htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
    // reset cache
    cache = new Cache(1000);
  }

  /**
   * Parse a template text string into an array of tokens.
   *
   * @param {String} text
   * @return {Array<Object> | null}
   *               - {String} type
   *               - {String} value
   *               - {Boolean} [html]
   *               - {Boolean} [oneTime]
   */

  function parseText(text) {
    if (!cache) {
      compileRegex();
    }
    var hit = cache.get(text);
    if (hit) {
      return hit;
    }
    text = text.replace(/\n/g, '');
    if (!tagRE.test(text)) {
      return null;
    }
    var tokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, html, value, first, oneTime;
    /* eslint-disable no-cond-assign */
    while (match = tagRE.exec(text)) {
      /* eslint-enable no-cond-assign */
      index = match.index;
      // push text token
      if (index > lastIndex) {
        tokens.push({
          value: text.slice(lastIndex, index)
        });
      }
      // tag token
      html = htmlRE.test(match[0]);
      value = html ? match[1] : match[2];
      first = value.charCodeAt(0);
      oneTime = first === 42; // *
      value = oneTime ? value.slice(1) : value;
      tokens.push({
        tag: true,
        value: value.trim(),
        html: html,
        oneTime: oneTime
      });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      tokens.push({
        value: text.slice(lastIndex)
      });
    }
    cache.put(text, tokens);
    return tokens;
  }

  /**
   * Format a list of tokens into an expression.
   * e.g. tokens parsed from 'a {{b}} c' can be serialized
   * into one single expression as '"a " + b + " c"'.
   *
   * @param {Array} tokens
   * @param {Vue} [vm]
   * @return {String}
   */

  function tokensToExp(tokens, vm) {
    if (tokens.length > 1) {
      return tokens.map(function (token) {
        return formatToken(token, vm);
      }).join('+');
    } else {
      return formatToken(tokens[0], vm, true);
    }
  }

  /**
   * Format a single token.
   *
   * @param {Object} token
   * @param {Vue} [vm]
   * @param {Boolean} [single]
   * @return {String}
   */

  function formatToken(token, vm, single) {
    return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
  }

  /**
   * For an attribute with multiple interpolation tags,
   * e.g. attr="some-{{thing | filter}}", in order to combine
   * the whole thing into a single watchable expression, we
   * have to inline those filters. This function does exactly
   * that. This is a bit hacky but it avoids heavy changes
   * to directive parser and watcher mechanism.
   *
   * @param {String} exp
   * @param {Boolean} single
   * @return {String}
   */

  var filterRE$1 = /[^|]\|[^|]/;
  function inlineFilters(exp, single) {
    if (!filterRE$1.test(exp)) {
      return single ? exp : '(' + exp + ')';
    } else {
      var dir = parseDirective(exp);
      if (!dir.filters) {
        return '(' + exp + ')';
      } else {
        return 'this._applyFilters(' + dir.expression + // value
        ',null,' + // oldValue (null for read)
        JSON.stringify(dir.filters) + // filter descriptors
        ',false)'; // write?
      }
    }
  }

  var text$1 = Object.freeze({
    compileRegex: compileRegex,
    parseText: parseText,
    tokensToExp: tokensToExp
  });

  var delimiters = ['{{', '}}'];
  var unsafeDelimiters = ['{{{', '}}}'];

  var config = Object.defineProperties({

    /**
     * Whether to print debug messages.
     * Also enables stack trace for warnings.
     *
     * @type {Boolean}
     */

    debug: false,

    /**
     * Whether to suppress warnings.
     *
     * @type {Boolean}
     */

    silent: false,

    /**
     * Whether to use async rendering.
     */

    async: true,

    /**
     * Whether to warn against errors caught when evaluating
     * expressions.
     */

    warnExpressionErrors: true,

    /**
     * Whether or not to handle fully object properties which
     * are already backed by getters and seters. Depending on
     * use case and environment, this might introduce non-neglible
     * performance penalties.
     */
    convertAllProperties: false,

    /**
     * Internal flag to indicate the delimiters have been
     * changed.
     *
     * @type {Boolean}
     */

    _delimitersChanged: true,

    /**
     * List of asset types that a component can own.
     *
     * @type {Array}
     */

    _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

    /**
     * prop binding modes
     */

    _propBindingModes: {
      ONE_WAY: 0,
      TWO_WAY: 1,
      ONE_TIME: 2
    },

    /**
     * Max circular updates allowed in a batcher flush cycle.
     */

    _maxUpdateCount: 100

  }, {
    delimiters: { /**
                   * Interpolation delimiters. Changing these would trigger
                   * the text parser to re-compile the regular expressions.
                   *
                   * @type {Array<String>}
                   */

      get: function get() {
        return delimiters;
      },
      set: function set(val) {
        delimiters = val;
        compileRegex();
      },
      configurable: true,
      enumerable: true
    },
    unsafeDelimiters: {
      get: function get() {
        return unsafeDelimiters;
      },
      set: function set(val) {
        unsafeDelimiters = val;
        compileRegex();
      },
      configurable: true,
      enumerable: true
    }
  });

  var warn = undefined;

  if ('development' !== 'production') {
    (function () {
      var hasConsole = typeof console !== 'undefined';
      warn = function (msg, e) {
        if (hasConsole && (!config.silent || config.debug)) {
          console.warn('[Vue warn]: ' + msg);
          /* istanbul ignore if */
          if (config.debug) {
            if (e) {
              throw e;
            } else {
              console.warn(new Error('Warning Stack Trace').stack);
            }
          }
        }
      };
    })();
  }

  /**
   * Append with transition.
   *
   * @param {Element} el
   * @param {Element} target
   * @param {Vue} vm
   * @param {Function} [cb]
   */

  function appendWithTransition(el, target, vm, cb) {
    applyTransition(el, 1, function () {
      target.appendChild(el);
    }, vm, cb);
  }

  /**
   * InsertBefore with transition.
   *
   * @param {Element} el
   * @param {Element} target
   * @param {Vue} vm
   * @param {Function} [cb]
   */

  function beforeWithTransition(el, target, vm, cb) {
    applyTransition(el, 1, function () {
      before(el, target);
    }, vm, cb);
  }

  /**
   * Remove with transition.
   *
   * @param {Element} el
   * @param {Vue} vm
   * @param {Function} [cb]
   */

  function removeWithTransition(el, vm, cb) {
    applyTransition(el, -1, function () {
      remove(el);
    }, vm, cb);
  }

  /**
   * Apply transitions with an operation callback.
   *
   * @param {Element} el
   * @param {Number} direction
   *                  1: enter
   *                 -1: leave
   * @param {Function} op - the actual DOM operation
   * @param {Vue} vm
   * @param {Function} [cb]
   */

  function applyTransition(el, direction, op, vm, cb) {
    var transition = el.__v_trans;
    if (!transition ||
    // skip if there are no js hooks and CSS transition is
    // not supported
    !transition.hooks && !transitionEndEvent ||
    // skip transitions for initial compile
    !vm._isCompiled ||
    // if the vm is being manipulated by a parent directive
    // during the parent's compilation phase, skip the
    // animation.
    vm.$parent && !vm.$parent._isCompiled) {
      op();
      if (cb) cb();
      return;
    }
    var action = direction > 0 ? 'enter' : 'leave';
    transition[action](op, cb);
  }

  /**
   * Query an element selector if it's not an element already.
   *
   * @param {String|Element} el
   * @return {Element}
   */

  function query(el) {
    if (typeof el === 'string') {
      var selector = el;
      el = document.querySelector(el);
      if (!el) {
        'development' !== 'production' && warn('Cannot find element: ' + selector);
      }
    }
    return el;
  }

  /**
   * Check if a node is in the document.
   * Note: document.documentElement.contains should work here
   * but always returns false for comment nodes in phantomjs,
   * making unit tests difficult. This is fixed by doing the
   * contains() check on the node's parentNode instead of
   * the node itself.
   *
   * @param {Node} node
   * @return {Boolean}
   */

  function inDoc(node) {
    var doc = document.documentElement;
    var parent = node && node.parentNode;
    return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
  }

  /**
   * Get and remove an attribute from a node.
   *
   * @param {Node} node
   * @param {String} _attr
   */

  function getAttr(node, _attr) {
    var val = node.getAttribute(_attr);
    if (val !== null) {
      node.removeAttribute(_attr);
    }
    return val;
  }

  /**
   * Get an attribute with colon or v-bind: prefix.
   *
   * @param {Node} node
   * @param {String} name
   * @return {String|null}
   */

  function getBindAttr(node, name) {
    var val = getAttr(node, ':' + name);
    if (val === null) {
      val = getAttr(node, 'v-bind:' + name);
    }
    return val;
  }

  /**
   * Check the presence of a bind attribute.
   *
   * @param {Node} node
   * @param {String} name
   * @return {Boolean}
   */

  function hasBindAttr(node, name) {
    return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  function before(el, target) {
    target.parentNode.insertBefore(el, target);
  }

  /**
   * Insert el after target
   *
   * @param {Element} el
   * @param {Element} target
   */

  function after(el, target) {
    if (target.nextSibling) {
      before(el, target.nextSibling);
    } else {
      target.parentNode.appendChild(el);
    }
  }

  /**
   * Remove el from DOM
   *
   * @param {Element} el
   */

  function remove(el) {
    el.parentNode.removeChild(el);
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  function prepend(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  }

  /**
   * Replace target with el
   *
   * @param {Element} target
   * @param {Element} el
   */

  function replace(target, el) {
    var parent = target.parentNode;
    if (parent) {
      parent.replaceChild(el, target);
    }
  }

  /**
   * Add event listener shorthand.
   *
   * @param {Element} el
   * @param {String} event
   * @param {Function} cb
   */

  function on$1(el, event, cb) {
    el.addEventListener(event, cb);
  }

  /**
   * Remove event listener shorthand.
   *
   * @param {Element} el
   * @param {String} event
   * @param {Function} cb
   */

  function off(el, event, cb) {
    el.removeEventListener(event, cb);
  }

  /**
   * In IE9, setAttribute('class') will result in empty class
   * if the element also has the :class attribute; However in
   * PhantomJS, setting `className` does not work on SVG elements...
   * So we have to do a conditional check here.
   *
   * @param {Element} el
   * @param {String} cls
   */

  function setClass(el, cls) {
    /* istanbul ignore if */
    if (isIE9 && !(el instanceof SVGElement)) {
      el.className = cls;
    } else {
      el.setAttribute('class', cls);
    }
  }

  /**
   * Add class with compatibility for IE & SVG
   *
   * @param {Element} el
   * @param {String} cls
   */

  function addClass(el, cls) {
    if (el.classList) {
      el.classList.add(cls);
    } else {
      var cur = ' ' + (el.getAttribute('class') || '') + ' ';
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        setClass(el, (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for IE & SVG
   *
   * @param {Element} el
   * @param {String} cls
   */

  function removeClass(el, cls) {
    if (el.classList) {
      el.classList.remove(cls);
    } else {
      var cur = ' ' + (el.getAttribute('class') || '') + ' ';
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      setClass(el, cur.trim());
    }
    if (!el.className) {
      el.removeAttribute('class');
    }
  }

  /**
   * Extract raw content inside an element into a temporary
   * container div
   *
   * @param {Element} el
   * @param {Boolean} asFragment
   * @return {Element}
   */

  function extractContent(el, asFragment) {
    var child;
    var rawContent;
    /* istanbul ignore if */
    if (isTemplate(el) && el.content instanceof DocumentFragment) {
      el = el.content;
    }
    if (el.hasChildNodes()) {
      trimNode(el);
      rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
      /* eslint-disable no-cond-assign */
      while (child = el.firstChild) {
        /* eslint-enable no-cond-assign */
        rawContent.appendChild(child);
      }
    }
    return rawContent;
  }

  /**
   * Trim possible empty head/tail textNodes inside a parent.
   *
   * @param {Node} node
   */

  function trimNode(node) {
    trim(node, node.firstChild);
    trim(node, node.lastChild);
  }

  function trim(parent, node) {
    if (node && node.nodeType === 3 && !node.data.trim()) {
      parent.removeChild(node);
    }
  }

  /**
   * Check if an element is a template tag.
   * Note if the template appears inside an SVG its tagName
   * will be in lowercase.
   *
   * @param {Element} el
   */

  function isTemplate(el) {
    return el.tagName && el.tagName.toLowerCase() === 'template';
  }

  /**
   * Create an "anchor" for performing dom insertion/removals.
   * This is used in a number of scenarios:
   * - fragment instance
   * - v-html
   * - v-if
   * - v-for
   * - component
   *
   * @param {String} content
   * @param {Boolean} persist - IE trashes empty textNodes on
   *                            cloneNode(true), so in certain
   *                            cases the anchor needs to be
   *                            non-empty to be persisted in
   *                            templates.
   * @return {Comment|Text}
   */

  function createAnchor(content, persist) {
    var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
    anchor.__vue_anchor = true;
    return anchor;
  }

  /**
   * Find a component ref attribute that starts with $.
   *
   * @param {Element} node
   * @return {String|undefined}
   */

  var refRE = /^v-ref:/;

  function findRef(node) {
    if (node.hasAttributes()) {
      var attrs = node.attributes;
      for (var i = 0, l = attrs.length; i < l; i++) {
        var name = attrs[i].name;
        if (refRE.test(name)) {
          return camelize(name.replace(refRE, ''));
        }
      }
    }
  }

  /**
   * Map a function to a range of nodes .
   *
   * @param {Node} node
   * @param {Node} end
   * @param {Function} op
   */

  function mapNodeRange(node, end, op) {
    var next;
    while (node !== end) {
      next = node.nextSibling;
      op(node);
      node = next;
    }
    op(end);
  }

  /**
   * Remove a range of nodes with transition, store
   * the nodes in a fragment with correct ordering,
   * and call callback when done.
   *
   * @param {Node} start
   * @param {Node} end
   * @param {Vue} vm
   * @param {DocumentFragment} frag
   * @param {Function} cb
   */

  function removeNodeRange(start, end, vm, frag, cb) {
    var done = false;
    var removed = 0;
    var nodes = [];
    mapNodeRange(start, end, function (node) {
      if (node === end) done = true;
      nodes.push(node);
      removeWithTransition(node, vm, onRemoved);
    });
    function onRemoved() {
      removed++;
      if (done && removed >= nodes.length) {
        for (var i = 0; i < nodes.length; i++) {
          frag.appendChild(nodes[i]);
        }
        cb && cb();
      }
    }
  }

  var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
  var reservedTagRE = /^(slot|partial|component)$/;

  /**
   * Check if an element is a component, if yes return its
   * component id.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Object|undefined}
   */

  function checkComponentAttr(el, options) {
    var tag = el.tagName.toLowerCase();
    var hasAttrs = el.hasAttributes();
    if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
      if (resolveAsset(options, 'components', tag)) {
        return { id: tag };
      } else {
        var is = hasAttrs && getIsBinding(el);
        if (is) {
          return is;
        } else if ('development' !== 'production') {
          if (tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&
          // Chrome returns unknown for several HTML5 elements.
          // https://code.google.com/p/chromium/issues/detail?id=540526
          !/^(data|time|rtc|rb)$/.test(tag)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly?');
          }
        }
      }
    } else if (hasAttrs) {
      return getIsBinding(el);
    }
  }

  /**
   * Get "is" binding from an element.
   *
   * @param {Element} el
   * @return {Object|undefined}
   */

  function getIsBinding(el) {
    // dynamic syntax
    var exp = getAttr(el, 'is');
    if (exp != null) {
      return { id: exp };
    } else {
      exp = getBindAttr(el, 'is');
      if (exp != null) {
        return { id: exp, dynamic: true };
      }
    }
  }

  /**
   * Set a prop's initial value on a vm and its data object.
   *
   * @param {Vue} vm
   * @param {Object} prop
   * @param {*} value
   */

  function initProp(vm, prop, value) {
    var key = prop.path;
    value = coerceProp(prop, value);
    vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
  }

  /**
   * Assert whether a prop is valid.
   *
   * @param {Object} prop
   * @param {*} value
   */

  function assertProp(prop, value) {
    // if a prop is not provided and is not required,
    // skip the check.
    if (prop.raw === null && !prop.required) {
      return true;
    }
    var options = prop.options;
    var type = options.type;
    var valid = true;
    var expectedType;
    if (type) {
      if (type === String) {
        expectedType = 'string';
        valid = typeof value === expectedType;
      } else if (type === Number) {
        expectedType = 'number';
        valid = typeof value === 'number';
      } else if (type === Boolean) {
        expectedType = 'boolean';
        valid = typeof value === 'boolean';
      } else if (type === Function) {
        expectedType = 'function';
        valid = typeof value === 'function';
      } else if (type === Object) {
        expectedType = 'object';
        valid = isPlainObject(value);
      } else if (type === Array) {
        expectedType = 'array';
        valid = isArray(value);
      } else {
        valid = value instanceof type;
      }
    }
    if (!valid) {
      'development' !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
      return false;
    }
    var validator = options.validator;
    if (validator) {
      if (!validator.call(null, value)) {
        'development' !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
        return false;
      }
    }
    return true;
  }

  /**
   * Force parsing value with coerce option.
   *
   * @param {*} value
   * @param {Object} options
   * @return {*}
   */

  function coerceProp(prop, value) {
    var coerce = prop.options.coerce;
    if (!coerce) {
      return value;
    }
    // coerce is a function
    return coerce(value);
  }

  function formatType(val) {
    return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
  }

  function formatValue(val) {
    return Object.prototype.toString.call(val).slice(8, -1);
  }

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   *
   * All strategy functions follow the same signature:
   *
   * @param {*} parentVal
   * @param {*} childVal
   * @param {Vue} [vm]
   */

  var strats = config.optionMergeStrategies = Object.create(null);

  /**
   * Helper that recursively merges two data objects together.
   */

  function mergeData(to, from) {
    var key, toVal, fromVal;
    for (key in from) {
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isObject(toVal) && isObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (typeof childVal !== 'function') {
        'development' !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(childVal.call(this), parentVal.call(this));
      };
    } else if (parentVal || childVal) {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  };

  /**
   * El
   */

  strats.el = function (parentVal, childVal, vm) {
    if (!vm && childVal && typeof childVal !== 'function') {
      'development' !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
      return;
    }
    var ret = childVal || parentVal;
    // invoke the element factory if this is instance merge
    return vm && typeof ret === 'function' ? ret.call(vm) : ret;
  };

  /**
   * Hooks and param attributes are merged as arrays.
   */

  strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function (parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  };

  /**
   * 0.11 deprecation warning
   */

  strats.paramAttributes = function () {
    /* istanbul ignore next */
    'development' !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
  };

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */

  function mergeAssets(parentVal, childVal) {
    var res = Object.create(parentVal);
    return childVal ? extend(res, guardArrayAssets(childVal)) : res;
  }

  config._assetTypes.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Events & Watchers.
   *
   * Events & watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */

  strats.watch = strats.events = function (parentVal, childVal) {
    if (!childVal) return parentVal;
    if (!parentVal) return childVal;
    var ret = {};
    extend(ret, parentVal);
    for (var key in childVal) {
      var parent = ret[key];
      var child = childVal[key];
      if (parent && !isArray(parent)) {
        parent = [parent];
      }
      ret[key] = parent ? parent.concat(child) : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */

  strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
    if (!childVal) return parentVal;
    if (!parentVal) return childVal;
    var ret = Object.create(null);
    extend(ret, parentVal);
    extend(ret, childVal);
    return ret;
  };

  /**
   * Default strategy.
   */

  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Make sure component options get converted to actual
   * constructors.
   *
   * @param {Object} options
   */

  function guardComponents(options) {
    if (options.components) {
      var components = options.components = guardArrayAssets(options.components);
      var def;
      var ids = Object.keys(components);
      for (var i = 0, l = ids.length; i < l; i++) {
        var key = ids[i];
        if (commonTagRE.test(key) || reservedTagRE.test(key)) {
          'development' !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
          continue;
        }
        def = components[key];
        if (isPlainObject(def)) {
          components[key] = Vue.extend(def);
        }
      }
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   *
   * @param {Object} options
   */

  function guardProps(options) {
    var props = options.props;
    var i, val;
    if (isArray(props)) {
      options.props = {};
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          options.props[val] = null;
        } else if (val.name) {
          options.props[val.name] = val;
        }
      }
    } else if (isPlainObject(props)) {
      var keys = Object.keys(props);
      i = keys.length;
      while (i--) {
        val = props[keys[i]];
        if (typeof val === 'function') {
          props[keys[i]] = { type: val };
        }
      }
    }
  }

  /**
   * Guard an Array-format assets option and converted it
   * into the key-value Object format.
   *
   * @param {Object|Array} assets
   * @return {Object}
   */

  function guardArrayAssets(assets) {
    if (isArray(assets)) {
      var res = {};
      var i = assets.length;
      var asset;
      while (i--) {
        asset = assets[i];
        var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
        if (!id) {
          'development' !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
        } else {
          res[id] = asset;
        }
      }
      return res;
    }
    return assets;
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   *
   * @param {Object} parent
   * @param {Object} child
   * @param {Vue} [vm] - if vm is present, indicates this is
   *                     an instantiation merge.
   */

  function mergeOptions(parent, child, vm) {
    guardComponents(child);
    guardProps(child);
    var options = {};
    var key;
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   *
   * @param {Object} options
   * @param {String} type
   * @param {String} id
   * @return {Object|Function}
   */

  function resolveAsset(options, type, id) {
    var assets = options[type];
    var camelizedId;
    return assets[id] ||
    // camelCase ID
    assets[camelizedId = camelize(id)] ||
    // Pascal Case ID
    assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  }

  /**
   * Assert asset exists
   */

  function assertAsset(val, type, id) {
    if (!val) {
      'development' !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
    }
  }

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto)

  /**
   * Intercept mutating methods and emit events
   */

  ;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      // avoid leaking arguments:
      // http://jsperf.com/closure-with-arguments
      var i = arguments.length;
      var args = new Array(i);
      while (i--) {
        args[i] = arguments[i];
      }
      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
          inserted = args;
          break;
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) ob.observeArray(inserted);
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /**
   * Swap the element at the given index with a new value
   * and emits corresponding event.
   *
   * @param {Number} index
   * @param {*} val
   * @return {*} - replaced element
   */

  def(arrayProto, '$set', function $set(index, val) {
    if (index >= this.length) {
      this.length = Number(index) + 1;
    }
    return this.splice(index, 1, val)[0];
  });

  /**
   * Convenience method to remove the element at given index.
   *
   * @param {Number} index
   * @param {*} val
   */

  def(arrayProto, '$remove', function $remove(item) {
    /* istanbul ignore if */
    if (!this.length) return;
    var index = indexOf(this, item);
    if (index > -1) {
      return this.splice(index, 1);
    }
  });

  var uid$3 = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   *
   * @constructor
   */
  function Dep() {
    this.id = uid$3++;
    this.subs = [];
  }

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;

  /**
   * Add a directive subscriber.
   *
   * @param {Directive} sub
   */

  Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
  };

  /**
   * Remove a directive subscriber.
   *
   * @param {Directive} sub
   */

  Dep.prototype.removeSub = function (sub) {
    this.subs.$remove(sub);
  };

  /**
   * Add self as a dependency to the target watcher.
   */

  Dep.prototype.depend = function () {
    Dep.target.addDep(this);
  };

  /**
   * Notify all subscribers of a new value.
   */

  Dep.prototype.notify = function () {
    // stablize the subscriber list first
    var subs = toArray(this.subs);
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * Observer class that are attached to each observed
   * object. Once attached, the observer converts target
   * object's property keys into getter/setters that
   * collect dependencies and dispatches updates.
   *
   * @param {Array|Object} value
   * @constructor
   */

  function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    def(value, '__ob__', this);
    if (isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  // Instance methods

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   *
   * @param {Object} obj
   */

  Observer.prototype.walk = function (obj) {
    var keys = Object.keys(obj);
    for (var i = 0, l = keys.length; i < l; i++) {
      this.convert(keys[i], obj[keys[i]]);
    }
  };

  /**
   * Observe a list of Array items.
   *
   * @param {Array} items
   */

  Observer.prototype.observeArray = function (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  /**
   * Convert a property into getter/setter so we can emit
   * the events when the property is accessed/changed.
   *
   * @param {String} key
   * @param {*} val
   */

  Observer.prototype.convert = function (key, val) {
    defineReactive(this.value, key, val);
  };

  /**
   * Add an owner vm, so that when $set/$delete mutations
   * happen we can notify owner vms to proxy the keys and
   * digest the watchers. This is only called when the object
   * is observed as an instance's root $data.
   *
   * @param {Vue} vm
   */

  Observer.prototype.addVm = function (vm) {
    (this.vms || (this.vms = [])).push(vm);
  };

  /**
   * Remove an owner vm. This is called when the object is
   * swapped out as an instance's $data object.
   *
   * @param {Vue} vm
   */

  Observer.prototype.removeVm = function (vm) {
    this.vms.$remove(vm);
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   *
   * @param {Object|Array} target
   * @param {Object} proto
   */

  function protoAugment(target, src) {
    target.__proto__ = src;
  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   *
   * @param {Object|Array} target
   * @param {Object} proto
   */

  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   *
   * @param {*} value
   * @param {Vue} [vm]
   * @return {Observer|undefined}
   * @static
   */

  function observe(value, vm) {
    if (!value || typeof value !== 'object') {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (ob && vm) {
      ob.addVm(vm);
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   *
   * @param {Object} obj
   * @param {String} key
   * @param {*} val
   */

  function defineReactive(obj, key, val) {
    var dep = new Dep();

    // cater for pre-defined getter/setters
    var getter, setter;
    if (config.convertAllProperties) {
      var property = Object.getOwnPropertyDescriptor(obj, key);
      if (property && property.configurable === false) {
        return;
      }
      getter = property && property.get;
      setter = property && property.set;
    }

    var childOb = observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
          }
          if (isArray(value)) {
            for (var e, i = 0, l = value.length; i < l; i++) {
              e = value[i];
              e && e.__ob__ && e.__ob__.dep.depend();
            }
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        if (newVal === value) {
          return;
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = observe(newVal);
        dep.notify();
      }
    });
  }

  var util = Object.freeze({
  	defineReactive: defineReactive,
  	set: set,
  	del: del,
  	hasOwn: hasOwn,
  	isLiteral: isLiteral,
  	isReserved: isReserved,
  	_toString: _toString,
  	toNumber: toNumber,
  	toBoolean: toBoolean,
  	stripQuotes: stripQuotes,
  	camelize: camelize,
  	hyphenate: hyphenate,
  	classify: classify,
  	bind: bind$1,
  	toArray: toArray,
  	extend: extend,
  	isObject: isObject,
  	isPlainObject: isPlainObject,
  	def: def,
  	debounce: _debounce,
  	indexOf: indexOf,
  	cancellable: cancellable,
  	looseEqual: looseEqual,
  	isArray: isArray,
  	hasProto: hasProto,
  	inBrowser: inBrowser,
  	isIE9: isIE9,
  	isAndroid: isAndroid,
  	get transitionProp () { return transitionProp; },
  	get transitionEndEvent () { return transitionEndEvent; },
  	get animationProp () { return animationProp; },
  	get animationEndEvent () { return animationEndEvent; },
  	nextTick: nextTick,
  	query: query,
  	inDoc: inDoc,
  	getAttr: getAttr,
  	getBindAttr: getBindAttr,
  	hasBindAttr: hasBindAttr,
  	before: before,
  	after: after,
  	remove: remove,
  	prepend: prepend,
  	replace: replace,
  	on: on$1,
  	off: off,
  	setClass: setClass,
  	addClass: addClass,
  	removeClass: removeClass,
  	extractContent: extractContent,
  	trimNode: trimNode,
  	isTemplate: isTemplate,
  	createAnchor: createAnchor,
  	findRef: findRef,
  	mapNodeRange: mapNodeRange,
  	removeNodeRange: removeNodeRange,
  	mergeOptions: mergeOptions,
  	resolveAsset: resolveAsset,
  	assertAsset: assertAsset,
  	checkComponentAttr: checkComponentAttr,
  	initProp: initProp,
  	assertProp: assertProp,
  	coerceProp: coerceProp,
  	commonTagRE: commonTagRE,
  	reservedTagRE: reservedTagRE,
  	get warn () { return warn; }
  });

  var uid = 0;

  function initMixin (Vue) {

    /**
     * The main init sequence. This is called for every
     * instance, including ones that are created from extended
     * constructors.
     *
     * @param {Object} options - this options object should be
     *                           the result of merging class
     *                           options and the options passed
     *                           in to the constructor.
     */

    Vue.prototype._init = function (options) {

      options = options || {};

      this.$el = null;
      this.$parent = options.parent;
      this.$root = this.$parent ? this.$parent.$root : this;
      this.$children = [];
      this.$refs = {}; // child vm references
      this.$els = {}; // element references
      this._watchers = []; // all watchers as an array
      this._directives = []; // all directives

      // a uid
      this._uid = uid++;

      // a flag to avoid this being observed
      this._isVue = true;

      // events bookkeeping
      this._events = {}; // registered callbacks
      this._eventsCount = {}; // for $broadcast optimization

      // fragment instance properties
      this._isFragment = false;
      this._fragment = // @type {DocumentFragment}
      this._fragmentStart = // @type {Text|Comment}
      this._fragmentEnd = null; // @type {Text|Comment}

      // lifecycle state
      this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = false;
      this._unlinkFn = null;

      // context:
      // if this is a transcluded component, context
      // will be the common parent vm of this instance
      // and its host.
      this._context = options._context || this.$parent;

      // scope:
      // if this is inside an inline v-for, the scope
      // will be the intermediate scope created for this
      // repeat fragment. this is used for linking props
      // and container directives.
      this._scope = options._scope;

      // fragment:
      // if this instance is compiled inside a Fragment, it
      // needs to reigster itself as a child of that fragment
      // for attach/detach to work properly.
      this._frag = options._frag;
      if (this._frag) {
        this._frag.children.push(this);
      }

      // push self into parent / transclusion host
      if (this.$parent) {
        this.$parent.$children.push(this);
      }

      // merge options.
      options = this.$options = mergeOptions(this.constructor.options, options, this);

      // set ref
      this._updateRef();

      // initialize data as empty object.
      // it will be filled up in _initScope().
      this._data = {};

      // call init hook
      this._callHook('init');

      // initialize data observation and scope inheritance.
      this._initState();

      // setup event system and option events.
      this._initEvents();

      // call created hook
      this._callHook('created');

      // if `el` option is passed, start compilation.
      if (options.el) {
        this.$mount(options.el);
      }
    };
  }

  var pathCache = new Cache(1000);

  // actions
  var APPEND = 0;
  var PUSH = 1;
  var INC_SUB_PATH_DEPTH = 2;
  var PUSH_SUB_PATH = 3;

  // states
  var BEFORE_PATH = 0;
  var IN_PATH = 1;
  var BEFORE_IDENT = 2;
  var IN_IDENT = 3;
  var IN_SUB_PATH = 4;
  var IN_SINGLE_QUOTE = 5;
  var IN_DOUBLE_QUOTE = 6;
  var AFTER_PATH = 7;
  var ERROR = 8;

  var pathStateMachine = [];

  pathStateMachine[BEFORE_PATH] = {
    'ws': [BEFORE_PATH],
    'ident': [IN_IDENT, APPEND],
    '[': [IN_SUB_PATH],
    'eof': [AFTER_PATH]
  };

  pathStateMachine[IN_PATH] = {
    'ws': [IN_PATH],
    '.': [BEFORE_IDENT],
    '[': [IN_SUB_PATH],
    'eof': [AFTER_PATH]
  };

  pathStateMachine[BEFORE_IDENT] = {
    'ws': [BEFORE_IDENT],
    'ident': [IN_IDENT, APPEND]
  };

  pathStateMachine[IN_IDENT] = {
    'ident': [IN_IDENT, APPEND],
    '0': [IN_IDENT, APPEND],
    'number': [IN_IDENT, APPEND],
    'ws': [IN_PATH, PUSH],
    '.': [BEFORE_IDENT, PUSH],
    '[': [IN_SUB_PATH, PUSH],
    'eof': [AFTER_PATH, PUSH]
  };

  pathStateMachine[IN_SUB_PATH] = {
    "'": [IN_SINGLE_QUOTE, APPEND],
    '"': [IN_DOUBLE_QUOTE, APPEND],
    '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
    ']': [IN_PATH, PUSH_SUB_PATH],
    'eof': ERROR,
    'else': [IN_SUB_PATH, APPEND]
  };

  pathStateMachine[IN_SINGLE_QUOTE] = {
    "'": [IN_SUB_PATH, APPEND],
    'eof': ERROR,
    'else': [IN_SINGLE_QUOTE, APPEND]
  };

  pathStateMachine[IN_DOUBLE_QUOTE] = {
    '"': [IN_SUB_PATH, APPEND],
    'eof': ERROR,
    'else': [IN_DOUBLE_QUOTE, APPEND]
  };

  /**
   * Determine the type of a character in a keypath.
   *
   * @param {Char} ch
   * @return {String} type
   */

  function getPathCharType(ch) {
    if (ch === undefined) {
      return 'eof';
    }

    var code = ch.charCodeAt(0);

    switch (code) {
      case 0x5B: // [
      case 0x5D: // ]
      case 0x2E: // .
      case 0x22: // "
      case 0x27: // '
      case 0x30:
        // 0
        return ch;

      case 0x5F: // _
      case 0x24:
        // $
        return 'ident';

      case 0x20: // Space
      case 0x09: // Tab
      case 0x0A: // Newline
      case 0x0D: // Return
      case 0xA0: // No-break space
      case 0xFEFF: // Byte Order Mark
      case 0x2028: // Line Separator
      case 0x2029:
        // Paragraph Separator
        return 'ws';
    }

    // a-z, A-Z
    if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
      return 'ident';
    }

    // 1-9
    if (code >= 0x31 && code <= 0x39) {
      return 'number';
    }

    return 'else';
  }

  /**
   * Format a subPath, return its plain form if it is
   * a literal string or number. Otherwise prepend the
   * dynamic indicator (*).
   *
   * @param {String} path
   * @return {String}
   */

  function formatSubPath(path) {
    var trimmed = path.trim();
    // invalid leading 0
    if (path.charAt(0) === '0' && isNaN(path)) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
  }

  /**
   * Parse a string path into an array of segments
   *
   * @param {String} path
   * @return {Array|undefined}
   */

  function parse(path) {
    var keys = [];
    var index = -1;
    var mode = BEFORE_PATH;
    var subPathDepth = 0;
    var c, newChar, key, type, transition, action, typeMap;

    var actions = [];

    actions[PUSH] = function () {
      if (key !== undefined) {
        keys.push(key);
        key = undefined;
      }
    };

    actions[APPEND] = function () {
      if (key === undefined) {
        key = newChar;
      } else {
        key += newChar;
      }
    };

    actions[INC_SUB_PATH_DEPTH] = function () {
      actions[APPEND]();
      subPathDepth++;
    };

    actions[PUSH_SUB_PATH] = function () {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = IN_SUB_PATH;
        actions[APPEND]();
      } else {
        subPathDepth = 0;
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[PUSH]();
        }
      }
    };

    function maybeUnescapeQuote() {
      var nextChar = path[index + 1];
      if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
        index++;
        newChar = '\\' + nextChar;
        actions[APPEND]();
        return true;
      }
    }

    while (mode != null) {
      index++;
      c = path[index];

      if (c === '\\' && maybeUnescapeQuote()) {
        continue;
      }

      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap['else'] || ERROR;

      if (transition === ERROR) {
        return; // parse error
      }

      mode = transition[0];
      action = actions[transition[1]];
      if (action) {
        newChar = transition[2];
        newChar = newChar === undefined ? c : newChar;
        if (action() === false) {
          return;
        }
      }

      if (mode === AFTER_PATH) {
        keys.raw = path;
        return keys;
      }
    }
  }

  /**
   * External parse that check for a cache hit first
   *
   * @param {String} path
   * @return {Array|undefined}
   */

  function parsePath(path) {
    var hit = pathCache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        pathCache.put(path, hit);
      }
    }
    return hit;
  }

  /**
   * Get from an object from a path string
   *
   * @param {Object} obj
   * @param {String} path
   */

  function getPath(obj, path) {
    return parseExpression(path).get(obj);
  }

  /**
   * Warn against setting non-existent root path on a vm.
   */

  var warnNonExistent;
  if ('development' !== 'production') {
    warnNonExistent = function (path) {
      warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
    };
  }

  /**
   * Set on an object from a path
   *
   * @param {Object} obj
   * @param {String | Array} path
   * @param {*} val
   */

  function setPath(obj, path, val) {
    var original = obj;
    if (typeof path === 'string') {
      path = parse(path);
    }
    if (!path || !isObject(obj)) {
      return false;
    }
    var last, key;
    for (var i = 0, l = path.length; i < l; i++) {
      last = obj;
      key = path[i];
      if (key.charAt(0) === '*') {
        key = parseExpression(key.slice(1)).get.call(original, original);
      }
      if (i < l - 1) {
        obj = obj[key];
        if (!isObject(obj)) {
          obj = {};
          if ('development' !== 'production' && last._isVue) {
            warnNonExistent(path);
          }
          set(last, key, obj);
        }
      } else {
        if (isArray(obj)) {
          obj.$set(key, val);
        } else if (key in obj) {
          obj[key] = val;
        } else {
          if ('development' !== 'production' && obj._isVue) {
            warnNonExistent(path);
          }
          set(obj, key, val);
        }
      }
    }
    return true;
  }

  var path = Object.freeze({
    parsePath: parsePath,
    getPath: getPath,
    setPath: setPath
  });

  var expressionCache = new Cache(1000);

  var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
  var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

  // keywords that don't make sense inside expressions
  var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
  var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

  var wsRE = /\s/g;
  var newlineRE = /\n/g;
  var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g;
  var restoreRE = /"(\d+)"/g;
  var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
  var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
  var booleanLiteralRE = /^(?:true|false)$/;

  /**
   * Save / Rewrite / Restore
   *
   * When rewriting paths found in an expression, it is
   * possible for the same letter sequences to be found in
   * strings and Object literal property keys. Therefore we
   * remove and store these parts in a temporary array, and
   * restore them after the path rewrite.
   */

  var saved = [];

  /**
   * Save replacer
   *
   * The save regex can match two possible cases:
   * 1. An opening object literal
   * 2. A string
   * If matched as a plain string, we need to escape its
   * newlines, since the string needs to be preserved when
   * generating the function body.
   *
   * @param {String} str
   * @param {String} isString - str if matched as a string
   * @return {String} - placeholder with index
   */

  function save(str, isString) {
    var i = saved.length;
    saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
    return '"' + i + '"';
  }

  /**
   * Path rewrite replacer
   *
   * @param {String} raw
   * @return {String}
   */

  function rewrite(raw) {
    var c = raw.charAt(0);
    var path = raw.slice(1);
    if (allowedKeywordsRE.test(path)) {
      return raw;
    } else {
      path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
      return c + 'scope.' + path;
    }
  }

  /**
   * Restore replacer
   *
   * @param {String} str
   * @param {String} i - matched save index
   * @return {String}
   */

  function restore(str, i) {
    return saved[i];
  }

  /**
   * Rewrite an expression, prefixing all path accessors with
   * `scope.` and generate getter/setter functions.
   *
   * @param {String} exp
   * @return {Function}
   */

  function compileGetter(exp) {
    if (improperKeywordsRE.test(exp)) {
      'development' !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
    }
    // reset state
    saved.length = 0;
    // save strings and object literal keys
    var body = exp.replace(saveRE, save).replace(wsRE, '');
    // rewrite all paths
    // pad 1 space here becaue the regex matches 1 extra char
    body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
    return makeGetterFn(body);
  }

  /**
   * Build a getter function. Requires eval.
   *
   * We isolate the try/catch so it doesn't affect the
   * optimization of the parse function when it is not called.
   *
   * @param {String} body
   * @return {Function|undefined}
   */

  function makeGetterFn(body) {
    try {
      return new Function('scope', 'return ' + body + ';');
    } catch (e) {
      'development' !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
    }
  }

  /**
   * Compile a setter function for the expression.
   *
   * @param {String} exp
   * @return {Function|undefined}
   */

  function compileSetter(exp) {
    var path = parsePath(exp);
    if (path) {
      return function (scope, val) {
        setPath(scope, path, val);
      };
    } else {
      'development' !== 'production' && warn('Invalid setter expression: ' + exp);
    }
  }

  /**
   * Parse an expression into re-written getter/setters.
   *
   * @param {String} exp
   * @param {Boolean} needSet
   * @return {Function}
   */

  function parseExpression(exp, needSet) {
    exp = exp.trim();
    // try cache
    var hit = expressionCache.get(exp);
    if (hit) {
      if (needSet && !hit.set) {
        hit.set = compileSetter(hit.exp);
      }
      return hit;
    }
    var res = { exp: exp };
    res.get = isSimplePath(exp) && exp.indexOf('[') < 0
    // optimized super simple getter
    ? makeGetterFn('scope.' + exp)
    // dynamic getter
    : compileGetter(exp);
    if (needSet) {
      res.set = compileSetter(exp);
    }
    expressionCache.put(exp, res);
    return res;
  }

  /**
   * Check if an expression is a simple path.
   *
   * @param {String} exp
   * @return {Boolean}
   */

  function isSimplePath(exp) {
    return pathTestRE.test(exp) &&
    // don't treat true/false as paths
    !booleanLiteralRE.test(exp) &&
    // Math constants e.g. Math.PI, Math.E etc.
    exp.slice(0, 5) !== 'Math.';
  }

  var expression = Object.freeze({
    parseExpression: parseExpression,
    isSimplePath: isSimplePath
  });

  // we have two separate queues: one for directive updates
  // and one for user watcher registered via $watch().
  // we want to guarantee directive updates to be called
  // before user watchers so that when user watchers are
  // triggered, the DOM would have already been in updated
  // state.
  var queue = [];
  var userQueue = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var internalQueueDepleted = false;

  /**
   * Reset the batcher's state.
   */

  function resetBatcherState() {
    queue = [];
    userQueue = [];
    has = {};
    circular = {};
    waiting = internalQueueDepleted = false;
  }

  /**
   * Flush both queues and run the watchers.
   */

  function flushBatcherQueue() {
    runBatcherQueue(queue);
    internalQueueDepleted = true;
    runBatcherQueue(userQueue);
    // dev tool hook
    /* istanbul ignore if */
    if ('development' !== 'production') {
      if (inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush');
      }
    }
    resetBatcherState();
  }

  /**
   * Run the watchers in a single queue.
   *
   * @param {Array} queue
   */

  function runBatcherQueue(queue) {
    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (var i = 0; i < queue.length; i++) {
      var watcher = queue[i];
      var id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if ('development' !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > config._maxUpdateCount) {
          queue.splice(has[id], 1);
          warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
        }
      }
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   *
   * @param {Watcher} watcher
   *   properties:
   *   - {Number} id
   *   - {Function} run
   */

  function pushWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      // if an internal watcher is pushed, but the internal
      // queue is already depleted, we run it immediately.
      if (internalQueueDepleted && !watcher.user) {
        watcher.run();
        return;
      }
      // push watcher into appropriate queue
      var q = watcher.user ? userQueue : queue;
      has[id] = q.length;
      q.push(watcher);
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushBatcherQueue);
      }
    }
  }

  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   *
   * @param {Vue} vm
   * @param {String} expression
   * @param {Function} cb
   * @param {Object} options
   *                 - {Array} filters
   *                 - {Boolean} twoWay
   *                 - {Boolean} deep
   *                 - {Boolean} user
   *                 - {Boolean} sync
   *                 - {Boolean} lazy
   *                 - {Function} [preProcess]
   *                 - {Function} [postProcess]
   * @constructor
   */
  function Watcher(vm, expOrFn, cb, options) {
    // mix in options
    if (options) {
      extend(this, options);
    }
    var isFn = typeof expOrFn === 'function';
    this.vm = vm;
    vm._watchers.push(this);
    this.expression = isFn ? expOrFn.toString() : expOrFn;
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = Object.create(null);
    this.newDeps = null;
    this.prevError = null; // for async error stacks
    // parse expression for getter/setter
    if (isFn) {
      this.getter = expOrFn;
      this.setter = undefined;
    } else {
      var res = parseExpression(expOrFn, this.twoWay);
      this.getter = res.get;
      this.setter = res.set;
    }
    this.value = this.lazy ? undefined : this.get();
    // state for avoiding false triggers for deep and Array
    // watchers during vm._digest()
    this.queued = this.shallow = false;
  }

  /**
   * Add a dependency to this directive.
   *
   * @param {Dep} dep
   */

  Watcher.prototype.addDep = function (dep) {
    var id = dep.id;
    if (!this.newDeps[id]) {
      this.newDeps[id] = dep;
      if (!this.deps[id]) {
        this.deps[id] = dep;
        dep.addSub(this);
      }
    }
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */

  Watcher.prototype.get = function () {
    this.beforeGet();
    var scope = this.scope || this.vm;
    var value;
    try {
      value = this.getter.call(scope, scope);
    } catch (e) {
      if ('development' !== 'production' && config.warnExpressionErrors) {
        warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
      }
    }
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    if (this.preProcess) {
      value = this.preProcess(value);
    }
    if (this.filters) {
      value = scope._applyFilters(value, null, this.filters, false);
    }
    if (this.postProcess) {
      value = this.postProcess(value);
    }
    this.afterGet();
    return value;
  };

  /**
   * Set the corresponding value with the setter.
   *
   * @param {*} value
   */

  Watcher.prototype.set = function (value) {
    var scope = this.scope || this.vm;
    if (this.filters) {
      value = scope._applyFilters(value, this.value, this.filters, true);
    }
    try {
      this.setter.call(scope, scope, value);
    } catch (e) {
      if ('development' !== 'production' && config.warnExpressionErrors) {
        warn('Error when evaluating setter "' + this.expression + '"', e);
      }
    }
    // two-way sync for v-for alias
    var forContext = scope.$forContext;
    if (forContext && forContext.alias === this.expression) {
      if (forContext.filters) {
        'development' !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
        return;
      }
      forContext._withLock(function () {
        if (scope.$key) {
          // original is an object
          forContext.rawValue[scope.$key] = value;
        } else {
          forContext.rawValue.$set(scope.$index, value);
        }
      });
    }
  };

  /**
   * Prepare for dependency collection.
   */

  Watcher.prototype.beforeGet = function () {
    Dep.target = this;
    this.newDeps = Object.create(null);
  };

  /**
   * Clean up for dependency collection.
   */

  Watcher.prototype.afterGet = function () {
    Dep.target = null;
    var ids = Object.keys(this.deps);
    var i = ids.length;
    while (i--) {
      var id = ids[i];
      if (!this.newDeps[id]) {
        this.deps[id].removeSub(this);
      }
    }
    this.deps = this.newDeps;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   *
   * @param {Boolean} shallow
   */

  Watcher.prototype.update = function (shallow) {
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync || !config.async) {
      this.run();
    } else {
      // if queued, only overwrite shallow with non-shallow,
      // but not the other way around.
      this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
      this.queued = true;
      // record before-push error stack in debug mode
      /* istanbul ignore if */
      if ('development' !== 'production' && config.debug) {
        this.prevError = new Error('[vue] async stack trace');
      }
      pushWatcher(this);
    }
  };

  /**
   * Batcher job interface.
   * Will be called by the batcher.
   */

  Watcher.prototype.run = function () {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated; but only do so if this is a
      // non-shallow update (caused by a vm digest).
      (isObject(value) || this.deep) && !this.shallow) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        // in debug + async mode, when a watcher callbacks
        // throws, we also throw the saved before-push error
        // so the full cross-tick stack trace is available.
        var prevError = this.prevError;
        /* istanbul ignore if */
        if ('development' !== 'production' && config.debug && prevError) {
          this.prevError = null;
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            nextTick(function () {
              throw prevError;
            }, 0);
            throw e;
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
      this.queued = this.shallow = false;
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */

  Watcher.prototype.evaluate = function () {
    // avoid overwriting another watcher that is being
    // collected.
    var current = Dep.target;
    this.value = this.get();
    this.dirty = false;
    Dep.target = current;
  };

  /**
   * Depend on all deps collected by this watcher.
   */

  Watcher.prototype.depend = function () {
    var depIds = Object.keys(this.deps);
    var i = depIds.length;
    while (i--) {
      this.deps[depIds[i]].depend();
    }
  };

  /**
   * Remove self from all dependencies' subcriber list.
   */

  Watcher.prototype.teardown = function () {
    if (this.active) {
      // remove self from vm's watcher list
      // we can skip this if the vm if being destroyed
      // which can improve teardown performance.
      if (!this.vm._isBeingDestroyed) {
        this.vm._watchers.$remove(this);
      }
      var depIds = Object.keys(this.deps);
      var i = depIds.length;
      while (i--) {
        this.deps[depIds[i]].removeSub(this);
      }
      this.active = false;
      this.vm = this.cb = this.value = null;
    }
  };

  /**
   * Recrusively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   *
   * @param {*} val
   */

  function traverse(val) {
    var i, keys;
    if (isArray(val)) {
      i = val.length;
      while (i--) traverse(val[i]);
    } else if (isObject(val)) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) traverse(val[keys[i]]);
    }
  }

  var cloak = {
    bind: function bind() {
      var el = this.el;
      this.vm.$once('pre-hook:compiled', function () {
        el.removeAttribute('v-cloak');
      });
    }
  };

  var ref = {
    bind: function bind() {
      'development' !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
    }
  };

  var ON = 700;
  var MODEL = 800;
  var BIND = 850;
  var TRANSITION = 1100;
  var EL = 1500;
  var COMPONENT = 1500;
  var PARTIAL = 1750;
  var FOR = 2000;
  var IF = 2000;
  var SLOT = 2100;

  var el = {

    priority: EL,

    bind: function bind() {
      /* istanbul ignore if */
      if (!this.arg) {
        return;
      }
      var id = this.id = camelize(this.arg);
      var refs = (this._scope || this.vm).$els;
      if (hasOwn(refs, id)) {
        refs[id] = this.el;
      } else {
        defineReactive(refs, id, this.el);
      }
    },

    unbind: function unbind() {
      var refs = (this._scope || this.vm).$els;
      if (refs[this.id] === this.el) {
        refs[this.id] = null;
      }
    }
  };

  var prefixes = ['-webkit-', '-moz-', '-ms-'];
  var camelPrefixes = ['Webkit', 'Moz', 'ms'];
  var importantRE = /!important;?$/;
  var propCache = Object.create(null);

  var testEl = null;

  var style = {

    deep: true,

    update: function update(value) {
      if (typeof value === 'string') {
        this.el.style.cssText = value;
      } else if (isArray(value)) {
        this.handleObject(value.reduce(extend, {}));
      } else {
        this.handleObject(value || {});
      }
    },

    handleObject: function handleObject(value) {
      // cache object styles so that only changed props
      // are actually updated.
      var cache = this.cache || (this.cache = {});
      var name, val;
      for (name in cache) {
        if (!(name in value)) {
          this.handleSingle(name, null);
          delete cache[name];
        }
      }
      for (name in value) {
        val = value[name];
        if (val !== cache[name]) {
          cache[name] = val;
          this.handleSingle(name, val);
        }
      }
    },

    handleSingle: function handleSingle(prop, value) {
      prop = normalize(prop);
      if (!prop) return; // unsupported prop
      // cast possible numbers/booleans into strings
      if (value != null) value += '';
      if (value) {
        var isImportant = importantRE.test(value) ? 'important' : '';
        if (isImportant) {
          value = value.replace(importantRE, '').trim();
        }
        this.el.style.setProperty(prop, value, isImportant);
      } else {
        this.el.style.removeProperty(prop);
      }
    }

  };

  /**
   * Normalize a CSS property name.
   * - cache result
   * - auto prefix
   * - camelCase -> dash-case
   *
   * @param {String} prop
   * @return {String}
   */

  function normalize(prop) {
    if (propCache[prop]) {
      return propCache[prop];
    }
    var res = prefix(prop);
    propCache[prop] = propCache[res] = res;
    return res;
  }

  /**
   * Auto detect the appropriate prefix for a CSS property.
   * https://gist.github.com/paulirish/523692
   *
   * @param {String} prop
   * @return {String}
   */

  function prefix(prop) {
    prop = hyphenate(prop);
    var camel = camelize(prop);
    var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
    if (!testEl) {
      testEl = document.createElement('div');
    }
    if (camel in testEl.style) {
      return prop;
    }
    var i = prefixes.length;
    var prefixed;
    while (i--) {
      prefixed = camelPrefixes[i] + upper;
      if (prefixed in testEl.style) {
        return prefixes[i] + prop;
      }
    }
  }

  // xlink
  var xlinkNS = 'http://www.w3.org/1999/xlink';
  var xlinkRE = /^xlink:/;

  // check for attributes that prohibit interpolations
  var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
  // these attributes should also set their corresponding properties
  // because they only affect the initial state of the element
  var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;

  // these attributes should set a hidden property for
  // binding v-model to object values
  var modelProps = {
    value: '_value',
    'true-value': '_trueValue',
    'false-value': '_falseValue'
  };

  var bind = {

    priority: BIND,

    bind: function bind() {
      var attr = this.arg;
      var tag = this.el.tagName;
      // should be deep watch on object mode
      if (!attr) {
        this.deep = true;
      }
      // handle interpolation bindings
      var descriptor = this.descriptor;
      var tokens = descriptor.interp;
      if (tokens) {
        // handle interpolations with one-time tokens
        if (descriptor.hasOneTime) {
          this.expression = tokensToExp(tokens, this._scope || this.vm);
        }

        // only allow binding on native attributes
        if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
          'development' !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
          this.el.removeAttribute(attr);
          this.invalid = true;
        }

        /* istanbul ignore if */
        if ('development' !== 'production') {
          var raw = attr + '="' + descriptor.raw + '": ';
          // warn src
          if (attr === 'src') {
            warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
          }

          // warn style
          if (attr === 'style') {
            warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
          }
        }
      }
    },

    update: function update(value) {
      if (this.invalid) {
        return;
      }
      var attr = this.arg;
      if (this.arg) {
        this.handleSingle(attr, value);
      } else {
        this.handleObject(value || {});
      }
    },

    // share object handler with v-bind:class
    handleObject: style.handleObject,

    handleSingle: function handleSingle(attr, value) {
      var el = this.el;
      var interp = this.descriptor.interp;
      if (!interp && attrWithPropsRE.test(attr) && attr in el) {
        el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
        ? '' : value : value;
      }
      // set model props
      var modelProp = modelProps[attr];
      if (!interp && modelProp) {
        el[modelProp] = value;
        // update v-model if present
        var model = el.__v_model;
        if (model) {
          model.listener();
        }
      }
      // do not set value attribute for textarea
      if (attr === 'value' && el.tagName === 'TEXTAREA') {
        el.removeAttribute(attr);
        return;
      }
      // update attribute
      if (value != null && value !== false) {
        if (attr === 'class') {
          // handle edge case #1960:
          // class interpolation should not overwrite Vue transition class
          if (el.__v_trans) {
            value += ' ' + el.__v_trans.id + '-transition';
          }
          setClass(el, value);
        } else if (xlinkRE.test(attr)) {
          el.setAttributeNS(xlinkNS, attr, value);
        } else {
          el.setAttribute(attr, value);
        }
      } else {
        el.removeAttribute(attr);
      }
    }
  };

  // keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    'delete': 46,
    up: 38,
    left: 37,
    right: 39,
    down: 40
  };

  function keyFilter(handler, keys) {
    var codes = keys.map(function (key) {
      var charCode = key.charCodeAt(0);
      if (charCode > 47 && charCode < 58) {
        return parseInt(key, 10);
      }
      if (key.length === 1) {
        charCode = key.toUpperCase().charCodeAt(0);
        if (charCode > 64 && charCode < 91) {
          return charCode;
        }
      }
      return keyCodes[key];
    });
    return function keyHandler(e) {
      if (codes.indexOf(e.keyCode) > -1) {
        return handler.call(this, e);
      }
    };
  }

  function stopFilter(handler) {
    return function stopHandler(e) {
      e.stopPropagation();
      return handler.call(this, e);
    };
  }

  function preventFilter(handler) {
    return function preventHandler(e) {
      e.preventDefault();
      return handler.call(this, e);
    };
  }

  var on = {

    acceptStatement: true,
    priority: ON,

    bind: function bind() {
      // deal with iframes
      if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
        var self = this;
        this.iframeBind = function () {
          on$1(self.el.contentWindow, self.arg, self.handler);
        };
        this.on('load', this.iframeBind);
      }
    },

    update: function update(handler) {
      // stub a noop for v-on with no value,
      // e.g. @mousedown.prevent
      if (!this.descriptor.raw) {
        handler = function () {};
      }

      if (typeof handler !== 'function') {
        'development' !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
        return;
      }

      // apply modifiers
      if (this.modifiers.stop) {
        handler = stopFilter(handler);
      }
      if (this.modifiers.prevent) {
        handler = preventFilter(handler);
      }
      // key filter
      var keys = Object.keys(this.modifiers).filter(function (key) {
        return key !== 'stop' && key !== 'prevent';
      });
      if (keys.length) {
        handler = keyFilter(handler, keys);
      }

      this.reset();
      this.handler = handler;

      if (this.iframeBind) {
        this.iframeBind();
      } else {
        on$1(this.el, this.arg, this.handler);
      }
    },

    reset: function reset() {
      var el = this.iframeBind ? this.el.contentWindow : this.el;
      if (this.handler) {
        off(el, this.arg, this.handler);
      }
    },

    unbind: function unbind() {
      this.reset();
    }
  };

  var checkbox = {

    bind: function bind() {
      var self = this;
      var el = this.el;

      this.getValue = function () {
        return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
      };

      function getBooleanValue() {
        var val = el.checked;
        if (val && el.hasOwnProperty('_trueValue')) {
          return el._trueValue;
        }
        if (!val && el.hasOwnProperty('_falseValue')) {
          return el._falseValue;
        }
        return val;
      }

      this.listener = function () {
        var model = self._watcher.value;
        if (isArray(model)) {
          var val = self.getValue();
          if (el.checked) {
            if (indexOf(model, val) < 0) {
              model.push(val);
            }
          } else {
            model.$remove(val);
          }
        } else {
          self.set(getBooleanValue());
        }
      };

      this.on('change', this.listener);
      if (el.hasAttribute('checked')) {
        this.afterBind = this.listener;
      }
    },

    update: function update(value) {
      var el = this.el;
      if (isArray(value)) {
        el.checked = indexOf(value, this.getValue()) > -1;
      } else {
        if (el.hasOwnProperty('_trueValue')) {
          el.checked = looseEqual(value, el._trueValue);
        } else {
          el.checked = !!value;
        }
      }
    }
  };

  var select = {

    bind: function bind() {
      var self = this;
      var el = this.el;

      // method to force update DOM using latest value.
      this.forceUpdate = function () {
        if (self._watcher) {
          self.update(self._watcher.get());
        }
      };

      // check if this is a multiple select
      var multiple = this.multiple = el.hasAttribute('multiple');

      // attach listener
      this.listener = function () {
        var value = getValue(el, multiple);
        value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
        self.set(value);
      };
      this.on('change', this.listener);

      // if has initial value, set afterBind
      var initValue = getValue(el, multiple, true);
      if (multiple && initValue.length || !multiple && initValue !== null) {
        this.afterBind = this.listener;
      }

      // All major browsers except Firefox resets
      // selectedIndex with value -1 to 0 when the element
      // is appended to a new parent, therefore we have to
      // force a DOM update whenever that happens...
      this.vm.$on('hook:attached', this.forceUpdate);
    },

    update: function update(value) {
      var el = this.el;
      el.selectedIndex = -1;
      var multi = this.multiple && isArray(value);
      var options = el.options;
      var i = options.length;
      var op, val;
      while (i--) {
        op = options[i];
        val = op.hasOwnProperty('_value') ? op._value : op.value;
        /* eslint-disable eqeqeq */
        op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
        /* eslint-enable eqeqeq */
      }
    },

    unbind: function unbind() {
      /* istanbul ignore next */
      this.vm.$off('hook:attached', this.forceUpdate);
    }
  };

  /**
   * Get select value
   *
   * @param {SelectElement} el
   * @param {Boolean} multi
   * @param {Boolean} init
   * @return {Array|*}
   */

  function getValue(el, multi, init) {
    var res = multi ? [] : null;
    var op, val, selected;
    for (var i = 0, l = el.options.length; i < l; i++) {
      op = el.options[i];
      selected = init ? op.hasAttribute('selected') : op.selected;
      if (selected) {
        val = op.hasOwnProperty('_value') ? op._value : op.value;
        if (multi) {
          res.push(val);
        } else {
          return val;
        }
      }
    }
    return res;
  }

  /**
   * Native Array.indexOf uses strict equal, but in this
   * case we need to match string/numbers with custom equal.
   *
   * @param {Array} arr
   * @param {*} val
   */

  function indexOf$1(arr, val) {
    var i = arr.length;
    while (i--) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  var radio = {

    bind: function bind() {
      var self = this;
      var el = this.el;

      this.getValue = function () {
        // value overwrite via v-bind:value
        if (el.hasOwnProperty('_value')) {
          return el._value;
        }
        var val = el.value;
        if (self.params.number) {
          val = toNumber(val);
        }
        return val;
      };

      this.listener = function () {
        self.set(self.getValue());
      };
      this.on('change', this.listener);

      if (el.hasAttribute('checked')) {
        this.afterBind = this.listener;
      }
    },

    update: function update(value) {
      this.el.checked = looseEqual(value, this.getValue());
    }
  };

  var text$2 = {

    bind: function bind() {
      var self = this;
      var el = this.el;
      var isRange = el.type === 'range';
      var lazy = this.params.lazy;
      var number = this.params.number;
      var debounce = this.params.debounce;

      // handle composition events.
      //   http://blog.evanyou.me/2014/01/03/composition-event/
      // skip this for Android because it handles composition
      // events quite differently. Android doesn't trigger
      // composition events for language input methods e.g.
      // Chinese, but instead triggers them for spelling
      // suggestions... (see Discussion/#162)
      var composing = false;
      if (!isAndroid && !isRange) {
        this.on('compositionstart', function () {
          composing = true;
        });
        this.on('compositionend', function () {
          composing = false;
          // in IE11 the "compositionend" event fires AFTER
          // the "input" event, so the input handler is blocked
          // at the end... have to call it here.
          //
          // #1327: in lazy mode this is unecessary.
          if (!lazy) {
            self.listener();
          }
        });
      }

      // prevent messing with the input when user is typing,
      // and force update on blur.
      this.focused = false;
      if (!isRange && !lazy) {
        this.on('focus', function () {
          self.focused = true;
        });
        this.on('blur', function () {
          self.focused = false;
          // do not sync value after fragment removal (#2017)
          if (!self._frag || self._frag.inserted) {
            self.rawListener();
          }
        });
      }

      // Now attach the main listener
      this.listener = this.rawListener = function () {
        if (composing || !self._bound) {
          return;
        }
        var val = number || isRange ? toNumber(el.value) : el.value;
        self.set(val);
        // force update on next tick to avoid lock & same value
        // also only update when user is not typing
        nextTick(function () {
          if (self._bound && !self.focused) {
            self.update(self._watcher.value);
          }
        });
      };

      // apply debounce
      if (debounce) {
        this.listener = _debounce(this.listener, debounce);
      }

      // Support jQuery events, since jQuery.trigger() doesn't
      // trigger native events in some cases and some plugins
      // rely on $.trigger()
      //
      // We want to make sure if a listener is attached using
      // jQuery, it is also removed with jQuery, that's why
      // we do the check for each directive instance and
      // store that check result on itself. This also allows
      // easier test coverage control by unsetting the global
      // jQuery variable in tests.
      this.hasjQuery = typeof jQuery === 'function';
      if (this.hasjQuery) {
        jQuery(el).on('change', this.listener);
        if (!lazy) {
          jQuery(el).on('input', this.listener);
        }
      } else {
        this.on('change', this.listener);
        if (!lazy) {
          this.on('input', this.listener);
        }
      }

      // IE9 doesn't fire input event on backspace/del/cut
      if (!lazy && isIE9) {
        this.on('cut', function () {
          nextTick(self.listener);
        });
        this.on('keyup', function (e) {
          if (e.keyCode === 46 || e.keyCode === 8) {
            self.listener();
          }
        });
      }

      // set initial value if present
      if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
        this.afterBind = this.listener;
      }
    },

    update: function update(value) {
      this.el.value = _toString(value);
    },

    unbind: function unbind() {
      var el = this.el;
      if (this.hasjQuery) {
        jQuery(el).off('change', this.listener);
        jQuery(el).off('input', this.listener);
      }
    }
  };

  var handlers = {
    text: text$2,
    radio: radio,
    select: select,
    checkbox: checkbox
  };

  var model = {

    priority: MODEL,
    twoWay: true,
    handlers: handlers,
    params: ['lazy', 'number', 'debounce'],

    /**
     * Possible elements:
     *   <select>
     *   <textarea>
     *   <input type="*">
     *     - text
     *     - checkbox
     *     - radio
     *     - number
     */

    bind: function bind() {
      // friendly warning...
      this.checkFilters();
      if (this.hasRead && !this.hasWrite) {
        'development' !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
      }
      var el = this.el;
      var tag = el.tagName;
      var handler;
      if (tag === 'INPUT') {
        handler = handlers[el.type] || handlers.text;
      } else if (tag === 'SELECT') {
        handler = handlers.select;
      } else if (tag === 'TEXTAREA') {
        handler = handlers.text;
      } else {
        'development' !== 'production' && warn('v-model does not support element type: ' + tag);
        return;
      }
      el.__v_model = this;
      handler.bind.call(this);
      this.update = handler.update;
      this._unbind = handler.unbind;
    },

    /**
     * Check read/write filter stats.
     */

    checkFilters: function checkFilters() {
      var filters = this.filters;
      if (!filters) return;
      var i = filters.length;
      while (i--) {
        var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
        if (typeof filter === 'function' || filter.read) {
          this.hasRead = true;
        }
        if (filter.write) {
          this.hasWrite = true;
        }
      }
    },

    unbind: function unbind() {
      this.el.__v_model = null;
      this._unbind && this._unbind();
    }
  };

  var show = {

    bind: function bind() {
      // check else block
      var next = this.el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        this.elseEl = next;
      }
    },

    update: function update(value) {
      this.apply(this.el, value);
      if (this.elseEl) {
        this.apply(this.elseEl, !value);
      }
    },

    apply: function apply(el, value) {
      if (inDoc(el)) {
        applyTransition(el, value ? 1 : -1, toggle, this.vm);
      } else {
        toggle();
      }
      function toggle() {
        el.style.display = value ? '' : 'none';
      }
    }
  };

  var templateCache = new Cache(1000);
  var idSelectorCache = new Cache(1000);

  var map = {
    efault: [0, '', ''],
    legend: [1, '<fieldset>', '</fieldset>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
  };

  map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

  map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

  map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

  map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

  /**
   * Check if a node is a supported template node with a
   * DocumentFragment content.
   *
   * @param {Node} node
   * @return {Boolean}
   */

  function isRealTemplate(node) {
    return isTemplate(node) && node.content instanceof DocumentFragment;
  }

  var tagRE$1 = /<([\w:]+)/;
  var entityRE = /&#?\w+?;/;

  /**
   * Convert a string template to a DocumentFragment.
   * Determines correct wrapping by tag types. Wrapping
   * strategy found in jQuery & component/domify.
   *
   * @param {String} templateString
   * @param {Boolean} raw
   * @return {DocumentFragment}
   */

  function stringToFragment(templateString, raw) {
    // try a cache hit first
    var hit = templateCache.get(templateString);
    if (hit) {
      return hit;
    }

    var frag = document.createDocumentFragment();
    var tagMatch = templateString.match(tagRE$1);
    var entityMatch = entityRE.test(templateString);

    if (!tagMatch && !entityMatch) {
      // text only, return a single text node.
      frag.appendChild(document.createTextNode(templateString));
    } else {

      var tag = tagMatch && tagMatch[1];
      var wrap = map[tag] || map.efault;
      var depth = wrap[0];
      var prefix = wrap[1];
      var suffix = wrap[2];
      var node = document.createElement('div');

      var templateStringToUse = raw ? templateString : templateString.trim();
      node.innerHTML = prefix + templateStringToUse + suffix;
      while (depth--) {
        node = node.lastChild;
      }

      var child;
      /* eslint-disable no-cond-assign */
      while (child = node.firstChild) {
        /* eslint-enable no-cond-assign */
        frag.appendChild(child);
      }
    }

    templateCache.put(templateString, frag);
    return frag;
  }

  /**
   * Convert a template node to a DocumentFragment.
   *
   * @param {Node} node
   * @return {DocumentFragment}
   */

  function nodeToFragment(node) {
    // if its a template tag and the browser supports it,
    // its content is already a document fragment.
    if (isRealTemplate(node)) {
      trimNode(node.content);
      return node.content;
    }
    // script template
    if (node.tagName === 'SCRIPT') {
      return stringToFragment(node.textContent);
    }
    // normal node, clone it to avoid mutating the original
    var clonedNode = cloneNode(node);
    var frag = document.createDocumentFragment();
    var child;
    /* eslint-disable no-cond-assign */
    while (child = clonedNode.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
    trimNode(frag);
    return frag;
  }

  // Test for the presence of the Safari template cloning bug
  // https://bugs.webkit.org/showug.cgi?id=137755
  var hasBrokenTemplate = (function () {
    /* istanbul ignore else */
    if (inBrowser) {
      var a = document.createElement('div');
      a.innerHTML = '<template>1</template>';
      return !a.cloneNode(true).firstChild.innerHTML;
    } else {
      return false;
    }
  })();

  // Test for IE10/11 textarea placeholder clone bug
  var hasTextareaCloneBug = (function () {
    /* istanbul ignore else */
    if (inBrowser) {
      var t = document.createElement('textarea');
      t.placeholder = 't';
      return t.cloneNode(true).value === 't';
    } else {
      return false;
    }
  })();

  /**
   * 1. Deal with Safari cloning nested <template> bug by
   *    manually cloning all template instances.
   * 2. Deal with IE10/11 textarea placeholder bug by setting
   *    the correct value after cloning.
   *
   * @param {Element|DocumentFragment} node
   * @return {Element|DocumentFragment}
   */

  function cloneNode(node) {
    if (!node.querySelectorAll) {
      return node.cloneNode();
    }
    var res = node.cloneNode(true);
    var i, original, cloned;
    /* istanbul ignore if */
    if (hasBrokenTemplate) {
      var tempClone = res;
      if (isRealTemplate(node)) {
        node = node.content;
        tempClone = res.content;
      }
      original = node.querySelectorAll('template');
      if (original.length) {
        cloned = tempClone.querySelectorAll('template');
        i = cloned.length;
        while (i--) {
          cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
        }
      }
    }
    /* istanbul ignore if */
    if (hasTextareaCloneBug) {
      if (node.tagName === 'TEXTAREA') {
        res.value = node.value;
      } else {
        original = node.querySelectorAll('textarea');
        if (original.length) {
          cloned = res.querySelectorAll('textarea');
          i = cloned.length;
          while (i--) {
            cloned[i].value = original[i].value;
          }
        }
      }
    }
    return res;
  }

  /**
   * Process the template option and normalizes it into a
   * a DocumentFragment that can be used as a partial or a
   * instance template.
   *
   * @param {*} template
   *        Possible values include:
   *        - DocumentFragment object
   *        - Node object of type Template
   *        - id selector: '#some-template-id'
   *        - template string: '<div><span>{{msg}}</span></div>'
   * @param {Boolean} shouldClone
   * @param {Boolean} raw
   *        inline HTML interpolation. Do not check for id
   *        selector and keep whitespace in the string.
   * @return {DocumentFragment|undefined}
   */

  function parseTemplate(template, shouldClone, raw) {
    var node, frag;

    // if the template is already a document fragment,
    // do nothing
    if (template instanceof DocumentFragment) {
      trimNode(template);
      return shouldClone ? cloneNode(template) : template;
    }

    if (typeof template === 'string') {
      // id selector
      if (!raw && template.charAt(0) === '#') {
        // id selector can be cached too
        frag = idSelectorCache.get(template);
        if (!frag) {
          node = document.getElementById(template.slice(1));
          if (node) {
            frag = nodeToFragment(node);
            // save selector to cache
            idSelectorCache.put(template, frag);
          }
        }
      } else {
        // normal string template
        frag = stringToFragment(template, raw);
      }
    } else if (template.nodeType) {
      // a direct node
      frag = nodeToFragment(template);
    }

    return frag && shouldClone ? cloneNode(frag) : frag;
  }

  var template = Object.freeze({
    cloneNode: cloneNode,
    parseTemplate: parseTemplate
  });

  /**
   * Abstraction for a partially-compiled fragment.
   * Can optionally compile content with a child scope.
   *
   * @param {Function} linker
   * @param {Vue} vm
   * @param {DocumentFragment} frag
   * @param {Vue} [host]
   * @param {Object} [scope]
   */
  function Fragment(linker, vm, frag, host, scope, parentFrag) {
    this.children = [];
    this.childFrags = [];
    this.vm = vm;
    this.scope = scope;
    this.inserted = false;
    this.parentFrag = parentFrag;
    if (parentFrag) {
      parentFrag.childFrags.push(this);
    }
    this.unlink = linker(vm, frag, host, scope, this);
    var single = this.single = frag.childNodes.length === 1 &&
    // do not go single mode if the only node is an anchor
    !frag.childNodes[0].__vue_anchor;
    if (single) {
      this.node = frag.childNodes[0];
      this.before = singleBefore;
      this.remove = singleRemove;
    } else {
      this.node = createAnchor('fragment-start');
      this.end = createAnchor('fragment-end');
      this.frag = frag;
      prepend(this.node, frag);
      frag.appendChild(this.end);
      this.before = multiBefore;
      this.remove = multiRemove;
    }
    this.node.__vfrag__ = this;
  }

  /**
   * Call attach/detach for all components contained within
   * this fragment. Also do so recursively for all child
   * fragments.
   *
   * @param {Function} hook
   */

  Fragment.prototype.callHook = function (hook) {
    var i, l;
    for (i = 0, l = this.childFrags.length; i < l; i++) {
      this.childFrags[i].callHook(hook);
    }
    for (i = 0, l = this.children.length; i < l; i++) {
      hook(this.children[i]);
    }
  };

  /**
   * Insert fragment before target, single node version
   *
   * @param {Node} target
   * @param {Boolean} withTransition
   */

  function singleBefore(target, withTransition) {
    this.inserted = true;
    var method = withTransition !== false ? beforeWithTransition : before;
    method(this.node, target, this.vm);
    if (inDoc(this.node)) {
      this.callHook(attach);
    }
  }

  /**
   * Remove fragment, single node version
   */

  function singleRemove() {
    this.inserted = false;
    var shouldCallRemove = inDoc(this.node);
    var self = this;
    this.beforeRemove();
    removeWithTransition(this.node, this.vm, function () {
      if (shouldCallRemove) {
        self.callHook(detach);
      }
      self.destroy();
    });
  }

  /**
   * Insert fragment before target, multi-nodes version
   *
   * @param {Node} target
   * @param {Boolean} withTransition
   */

  function multiBefore(target, withTransition) {
    this.inserted = true;
    var vm = this.vm;
    var method = withTransition !== false ? beforeWithTransition : before;
    mapNodeRange(this.node, this.end, function (node) {
      method(node, target, vm);
    });
    if (inDoc(this.node)) {
      this.callHook(attach);
    }
  }

  /**
   * Remove fragment, multi-nodes version
   */

  function multiRemove() {
    this.inserted = false;
    var self = this;
    var shouldCallRemove = inDoc(this.node);
    this.beforeRemove();
    removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
      if (shouldCallRemove) {
        self.callHook(detach);
      }
      self.destroy();
    });
  }

  /**
   * Prepare the fragment for removal.
   */

  Fragment.prototype.beforeRemove = function () {
    var i, l;
    for (i = 0, l = this.childFrags.length; i < l; i++) {
      // call the same method recursively on child
      // fragments, depth-first
      this.childFrags[i].beforeRemove(false);
    }
    for (i = 0, l = this.children.length; i < l; i++) {
      // Call destroy for all contained instances,
      // with remove:false and defer:true.
      // Defer is necessary because we need to
      // keep the children to call detach hooks
      // on them.
      this.children[i].$destroy(false, true);
    }
    var dirs = this.unlink.dirs;
    for (i = 0, l = dirs.length; i < l; i++) {
      // disable the watchers on all the directives
      // so that the rendered content stays the same
      // during removal.
      dirs[i]._watcher && dirs[i]._watcher.teardown();
    }
  };

  /**
   * Destroy the fragment.
   */

  Fragment.prototype.destroy = function () {
    if (this.parentFrag) {
      this.parentFrag.childFrags.$remove(this);
    }
    this.node.__vfrag__ = null;
    this.unlink();
  };

  /**
   * Call attach hook for a Vue instance.
   *
   * @param {Vue} child
   */

  function attach(child) {
    if (!child._isAttached) {
      child._callHook('attached');
    }
  }

  /**
   * Call detach hook for a Vue instance.
   *
   * @param {Vue} child
   */

  function detach(child) {
    if (child._isAttached) {
      child._callHook('detached');
    }
  }

  var linkerCache = new Cache(5000);

  /**
   * A factory that can be used to create instances of a
   * fragment. Caches the compiled linker if possible.
   *
   * @param {Vue} vm
   * @param {Element|String} el
   */
  function FragmentFactory(vm, el) {
    this.vm = vm;
    var template;
    var isString = typeof el === 'string';
    if (isString || isTemplate(el)) {
      template = parseTemplate(el, true);
    } else {
      template = document.createDocumentFragment();
      template.appendChild(el);
    }
    this.template = template;
    // linker can be cached, but only for components
    var linker;
    var cid = vm.constructor.cid;
    if (cid > 0) {
      var cacheId = cid + (isString ? el : el.outerHTML);
      linker = linkerCache.get(cacheId);
      if (!linker) {
        linker = compile(template, vm.$options, true);
        linkerCache.put(cacheId, linker);
      }
    } else {
      linker = compile(template, vm.$options, true);
    }
    this.linker = linker;
  }

  /**
   * Create a fragment instance with given host and scope.
   *
   * @param {Vue} host
   * @param {Object} scope
   * @param {Fragment} parentFrag
   */

  FragmentFactory.prototype.create = function (host, scope, parentFrag) {
    var frag = cloneNode(this.template);
    return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
  };

  var vIf = {

    priority: IF,

    bind: function bind() {
      var el = this.el;
      if (!el.__vue__) {
        // check else block
        var next = el.nextElementSibling;
        if (next && getAttr(next, 'v-else') !== null) {
          remove(next);
          this.elseFactory = new FragmentFactory(this.vm, next);
        }
        // check main block
        this.anchor = createAnchor('v-if');
        replace(el, this.anchor);
        this.factory = new FragmentFactory(this.vm, el);
      } else {
        'development' !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
        this.invalid = true;
      }
    },

    update: function update(value) {
      if (this.invalid) return;
      if (value) {
        if (!this.frag) {
          this.insert();
        }
      } else {
        this.remove();
      }
    },

    insert: function insert() {
      if (this.elseFrag) {
        this.elseFrag.remove();
        this.elseFrag = null;
      }
      this.frag = this.factory.create(this._host, this._scope, this._frag);
      this.frag.before(this.anchor);
    },

    remove: function remove() {
      if (this.frag) {
        this.frag.remove();
        this.frag = null;
      }
      if (this.elseFactory && !this.elseFrag) {
        this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
        this.elseFrag.before(this.anchor);
      }
    },

    unbind: function unbind() {
      if (this.frag) {
        this.frag.destroy();
      }
    }
  };

  var uid$1 = 0;

  var vFor = {

    priority: FOR,

    params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

    bind: function bind() {
      // support "item in items" syntax
      var inMatch = this.expression.match(/(.*) in (.*)/);
      if (inMatch) {
        var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
        if (itMatch) {
          this.iterator = itMatch[1].trim();
          this.alias = itMatch[2].trim();
        } else {
          this.alias = inMatch[1].trim();
        }
        this.expression = inMatch[2];
      }

      if (!this.alias) {
        'development' !== 'production' && warn('Alias is required in v-for.');
        return;
      }

      // uid as a cache identifier
      this.id = '__v-for__' + ++uid$1;

      // check if this is an option list,
      // so that we know if we need to update the <select>'s
      // v-model when the option list has changed.
      // because v-model has a lower priority than v-for,
      // the v-model is not bound here yet, so we have to
      // retrive it in the actual updateModel() function.
      var tag = this.el.tagName;
      this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

      // setup anchor nodes
      this.start = createAnchor('v-for-start');
      this.end = createAnchor('v-for-end');
      replace(this.el, this.end);
      before(this.start, this.end);

      // cache
      this.cache = Object.create(null);

      // fragment factory
      this.factory = new FragmentFactory(this.vm, this.el);
    },

    update: function update(data) {
      this.diff(data);
      this.updateRef();
      this.updateModel();
    },

    /**
     * Diff, based on new data and old data, determine the
     * minimum amount of DOM manipulations needed to make the
     * DOM reflect the new data Array.
     *
     * The algorithm diffs the new data Array by storing a
     * hidden reference to an owner vm instance on previously
     * seen data. This allows us to achieve O(n) which is
     * better than a levenshtein distance based algorithm,
     * which is O(m * n).
     *
     * @param {Array} data
     */

    diff: function diff(data) {
      // check if the Array was converted from an Object
      var item = data[0];
      var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

      var trackByKey = this.params.trackBy;
      var oldFrags = this.frags;
      var frags = this.frags = new Array(data.length);
      var alias = this.alias;
      var iterator = this.iterator;
      var start = this.start;
      var end = this.end;
      var inDocument = inDoc(start);
      var init = !oldFrags;
      var i, l, frag, key, value, primitive;

      // First pass, go through the new Array and fill up
      // the new frags array. If a piece of data has a cached
      // instance for it, we reuse it. Otherwise build a new
      // instance.
      for (i = 0, l = data.length; i < l; i++) {
        item = data[i];
        key = convertedFromObject ? item.$key : null;
        value = convertedFromObject ? item.$value : item;
        primitive = !isObject(value);
        frag = !init && this.getCachedFrag(value, i, key);
        if (frag) {
          // reusable fragment
          frag.reused = true;
          // update $index
          frag.scope.$index = i;
          // update $key
          if (key) {
            frag.scope.$key = key;
          }
          // update iterator
          if (iterator) {
            frag.scope[iterator] = key !== null ? key : i;
          }
          // update data for track-by, object repeat &
          // primitive values.
          if (trackByKey || convertedFromObject || primitive) {
            frag.scope[alias] = value;
          }
        } else {
          // new isntance
          frag = this.create(value, alias, i, key);
          frag.fresh = !init;
        }
        frags[i] = frag;
        if (init) {
          frag.before(end);
        }
      }

      // we're done for the initial render.
      if (init) {
        return;
      }

      // Second pass, go through the old fragments and
      // destroy those who are not reused (and remove them
      // from cache)
      var removalIndex = 0;
      var totalRemoved = oldFrags.length - frags.length;
      for (i = 0, l = oldFrags.length; i < l; i++) {
        frag = oldFrags[i];
        if (!frag.reused) {
          this.deleteCachedFrag(frag);
          this.remove(frag, removalIndex++, totalRemoved, inDocument);
        }
      }

      // Final pass, move/insert new fragments into the
      // right place.
      var targetPrev, prevEl, currentPrev;
      var insertionIndex = 0;
      for (i = 0, l = frags.length; i < l; i++) {
        frag = frags[i];
        // this is the frag that we should be after
        targetPrev = frags[i - 1];
        prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
        if (frag.reused && !frag.staggerCb) {
          currentPrev = findPrevFrag(frag, start, this.id);
          if (currentPrev !== targetPrev && (!currentPrev ||
          // optimization for moving a single item.
          // thanks to suggestions by @livoras in #1807
          findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
            this.move(frag, prevEl);
          }
        } else {
          // new instance, or still in stagger.
          // insert with updated stagger index.
          this.insert(frag, insertionIndex++, prevEl, inDocument);
        }
        frag.reused = frag.fresh = false;
      }
    },

    /**
     * Create a new fragment instance.
     *
     * @param {*} value
     * @param {String} alias
     * @param {Number} index
     * @param {String} [key]
     * @return {Fragment}
     */

    create: function create(value, alias, index, key) {
      var host = this._host;
      // create iteration scope
      var parentScope = this._scope || this.vm;
      var scope = Object.create(parentScope);
      // ref holder for the scope
      scope.$refs = Object.create(parentScope.$refs);
      scope.$els = Object.create(parentScope.$els);
      // make sure point $parent to parent scope
      scope.$parent = parentScope;
      // for two-way binding on alias
      scope.$forContext = this;
      // define scope properties
      defineReactive(scope, alias, value);
      defineReactive(scope, '$index', index);
      if (key) {
        defineReactive(scope, '$key', key);
      } else if (scope.$key) {
        // avoid accidental fallback
        def(scope, '$key', null);
      }
      if (this.iterator) {
        defineReactive(scope, this.iterator, key !== null ? key : index);
      }
      var frag = this.factory.create(host, scope, this._frag);
      frag.forId = this.id;
      this.cacheFrag(value, frag, index, key);
      return frag;
    },

    /**
     * Update the v-ref on owner vm.
     */

    updateRef: function updateRef() {
      var ref = this.descriptor.ref;
      if (!ref) return;
      var hash = (this._scope || this.vm).$refs;
      var refs;
      if (!this.fromObject) {
        refs = this.frags.map(findVmFromFrag);
      } else {
        refs = {};
        this.frags.forEach(function (frag) {
          refs[frag.scope.$key] = findVmFromFrag(frag);
        });
      }
      hash[ref] = refs;
    },

    /**
     * For option lists, update the containing v-model on
     * parent <select>.
     */

    updateModel: function updateModel() {
      if (this.isOption) {
        var parent = this.start.parentNode;
        var model = parent && parent.__v_model;
        if (model) {
          model.forceUpdate();
        }
      }
    },

    /**
     * Insert a fragment. Handles staggering.
     *
     * @param {Fragment} frag
     * @param {Number} index
     * @param {Node} prevEl
     * @param {Boolean} inDocument
     */

    insert: function insert(frag, index, prevEl, inDocument) {
      if (frag.staggerCb) {
        frag.staggerCb.cancel();
        frag.staggerCb = null;
      }
      var staggerAmount = this.getStagger(frag, index, null, 'enter');
      if (inDocument && staggerAmount) {
        // create an anchor and insert it synchronously,
        // so that we can resolve the correct order without
        // worrying about some elements not inserted yet
        var anchor = frag.staggerAnchor;
        if (!anchor) {
          anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
          anchor.__vfrag__ = frag;
        }
        after(anchor, prevEl);
        var op = frag.staggerCb = cancellable(function () {
          frag.staggerCb = null;
          frag.before(anchor);
          remove(anchor);
        });
        setTimeout(op, staggerAmount);
      } else {
        frag.before(prevEl.nextSibling);
      }
    },

    /**
     * Remove a fragment. Handles staggering.
     *
     * @param {Fragment} frag
     * @param {Number} index
     * @param {Number} total
     * @param {Boolean} inDocument
     */

    remove: function remove(frag, index, total, inDocument) {
      if (frag.staggerCb) {
        frag.staggerCb.cancel();
        frag.staggerCb = null;
        // it's not possible for the same frag to be removed
        // twice, so if we have a pending stagger callback,
        // it means this frag is queued for enter but removed
        // before its transition started. Since it is already
        // destroyed, we can just leave it in detached state.
        return;
      }
      var staggerAmount = this.getStagger(frag, index, total, 'leave');
      if (inDocument && staggerAmount) {
        var op = frag.staggerCb = cancellable(function () {
          frag.staggerCb = null;
          frag.remove();
        });
        setTimeout(op, staggerAmount);
      } else {
        frag.remove();
      }
    },

    /**
     * Move a fragment to a new position.
     * Force no transition.
     *
     * @param {Fragment} frag
     * @param {Node} prevEl
     */

    move: function move(frag, prevEl) {
      // fix a common issue with Sortable:
      // if prevEl doesn't have nextSibling, this means it's
      // been dragged after the end anchor. Just re-position
      // the end anchor to the end of the container.
      /* istanbul ignore if */
      if (!prevEl.nextSibling) {
        this.end.parentNode.appendChild(this.end);
      }
      frag.before(prevEl.nextSibling, false);
    },

    /**
     * Cache a fragment using track-by or the object key.
     *
     * @param {*} value
     * @param {Fragment} frag
     * @param {Number} index
     * @param {String} [key]
     */

    cacheFrag: function cacheFrag(value, frag, index, key) {
      var trackByKey = this.params.trackBy;
      var cache = this.cache;
      var primitive = !isObject(value);
      var id;
      if (key || trackByKey || primitive) {
        id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
        if (!cache[id]) {
          cache[id] = frag;
        } else if (trackByKey !== '$index') {
          'development' !== 'production' && this.warnDuplicate(value);
        }
      } else {
        id = this.id;
        if (hasOwn(value, id)) {
          if (value[id] === null) {
            value[id] = frag;
          } else {
            'development' !== 'production' && this.warnDuplicate(value);
          }
        } else {
          def(value, id, frag);
        }
      }
      frag.raw = value;
    },

    /**
     * Get a cached fragment from the value/index/key
     *
     * @param {*} value
     * @param {Number} index
     * @param {String} key
     * @return {Fragment}
     */

    getCachedFrag: function getCachedFrag(value, index, key) {
      var trackByKey = this.params.trackBy;
      var primitive = !isObject(value);
      var frag;
      if (key || trackByKey || primitive) {
        var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
        frag = this.cache[id];
      } else {
        frag = value[this.id];
      }
      if (frag && (frag.reused || frag.fresh)) {
        'development' !== 'production' && this.warnDuplicate(value);
      }
      return frag;
    },

    /**
     * Delete a fragment from cache.
     *
     * @param {Fragment} frag
     */

    deleteCachedFrag: function deleteCachedFrag(frag) {
      var value = frag.raw;
      var trackByKey = this.params.trackBy;
      var scope = frag.scope;
      var index = scope.$index;
      // fix #948: avoid accidentally fall through to
      // a parent repeater which happens to have $key.
      var key = hasOwn(scope, '$key') && scope.$key;
      var primitive = !isObject(value);
      if (trackByKey || key || primitive) {
        var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
        this.cache[id] = null;
      } else {
        value[this.id] = null;
        frag.raw = null;
      }
    },

    /**
     * Get the stagger amount for an insertion/removal.
     *
     * @param {Fragment} frag
     * @param {Number} index
     * @param {Number} total
     * @param {String} type
     */

    getStagger: function getStagger(frag, index, total, type) {
      type = type + 'Stagger';
      var trans = frag.node.__v_trans;
      var hooks = trans && trans.hooks;
      var hook = hooks && (hooks[type] || hooks.stagger);
      return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
    },

    /**
     * Pre-process the value before piping it through the
     * filters. This is passed to and called by the watcher.
     */

    _preProcess: function _preProcess(value) {
      // regardless of type, store the un-filtered raw value.
      this.rawValue = value;
      return value;
    },

    /**
     * Post-process the value after it has been piped through
     * the filters. This is passed to and called by the watcher.
     *
     * It is necessary for this to be called during the
     * wathcer's dependency collection phase because we want
     * the v-for to update when the source Object is mutated.
     */

    _postProcess: function _postProcess(value) {
      if (isArray(value)) {
        return value;
      } else if (isPlainObject(value)) {
        // convert plain object to array.
        var keys = Object.keys(value);
        var i = keys.length;
        var res = new Array(i);
        var key;
        while (i--) {
          key = keys[i];
          res[i] = {
            $key: key,
            $value: value[key]
          };
        }
        return res;
      } else {
        if (typeof value === 'number') {
          value = range(value);
        }
        return value || [];
      }
    },

    unbind: function unbind() {
      if (this.descriptor.ref) {
        (this._scope || this.vm).$refs[this.descriptor.ref] = null;
      }
      if (this.frags) {
        var i = this.frags.length;
        var frag;
        while (i--) {
          frag = this.frags[i];
          this.deleteCachedFrag(frag);
          frag.destroy();
        }
      }
    }
  };

  /**
   * Helper to find the previous element that is a fragment
   * anchor. This is necessary because a destroyed frag's
   * element could still be lingering in the DOM before its
   * leaving transition finishes, but its inserted flag
   * should have been set to false so we can skip them.
   *
   * If this is a block repeat, we want to make sure we only
   * return frag that is bound to this v-for. (see #929)
   *
   * @param {Fragment} frag
   * @param {Comment|Text} anchor
   * @param {String} id
   * @return {Fragment}
   */

  function findPrevFrag(frag, anchor, id) {
    var el = frag.node.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__vfrag__;
    while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
      el = el.previousSibling;
      /* istanbul ignore if */
      if (!el) return;
      frag = el.__vfrag__;
    }
    return frag;
  }

  /**
   * Find a vm from a fragment.
   *
   * @param {Fragment} frag
   * @return {Vue|undefined}
   */

  function findVmFromFrag(frag) {
    var node = frag.node;
    // handle multi-node frag
    if (frag.end) {
      while (!node.__vue__ && node !== frag.end && node.nextSibling) {
        node = node.nextSibling;
      }
    }
    return node.__vue__;
  }

  /**
   * Create a range array from given number.
   *
   * @param {Number} n
   * @return {Array}
   */

  function range(n) {
    var i = -1;
    var ret = new Array(n);
    while (++i < n) {
      ret[i] = i;
    }
    return ret;
  }

  if ('development' !== 'production') {
    vFor.warnDuplicate = function (value) {
      warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
    };
  }

  var html = {

    bind: function bind() {
      // a comment node means this is a binding for
      // {{{ inline unescaped html }}}
      if (this.el.nodeType === 8) {
        // hold nodes
        this.nodes = [];
        // replace the placeholder with proper anchor
        this.anchor = createAnchor('v-html');
        replace(this.el, this.anchor);
      }
    },

    update: function update(value) {
      value = _toString(value);
      if (this.nodes) {
        this.swap(value);
      } else {
        this.el.innerHTML = value;
      }
    },

    swap: function swap(value) {
      // remove old nodes
      var i = this.nodes.length;
      while (i--) {
        remove(this.nodes[i]);
      }
      // convert new value to a fragment
      // do not attempt to retrieve from id selector
      var frag = parseTemplate(value, true, true);
      // save a reference to these nodes so we can remove later
      this.nodes = toArray(frag.childNodes);
      before(frag, this.anchor);
    }
  };

  var text = {

    bind: function bind() {
      this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
    },

    update: function update(value) {
      this.el[this.attr] = _toString(value);
    }
  };

  // must export plain object
  var publicDirectives = {
    text: text,
    html: html,
    'for': vFor,
    'if': vIf,
    show: show,
    model: model,
    on: on,
    bind: bind,
    el: el,
    ref: ref,
    cloak: cloak
  };

  var queue$1 = [];
  var queued = false;

  /**
   * Push a job into the queue.
   *
   * @param {Function} job
   */

  function pushJob(job) {
    queue$1.push(job);
    if (!queued) {
      queued = true;
      nextTick(flush);
    }
  }

  /**
   * Flush the queue, and do one forced reflow before
   * triggering transitions.
   */

  function flush() {
    // Force layout
    var f = document.documentElement.offsetHeight;
    for (var i = 0; i < queue$1.length; i++) {
      queue$1[i]();
    }
    queue$1 = [];
    queued = false;
    // dummy return, so js linters don't complain about
    // unused variable f
    return f;
  }

  var TYPE_TRANSITION = 'transition';
  var TYPE_ANIMATION = 'animation';
  var transDurationProp = transitionProp + 'Duration';
  var animDurationProp = animationProp + 'Duration';

  /**
   * A Transition object that encapsulates the state and logic
   * of the transition.
   *
   * @param {Element} el
   * @param {String} id
   * @param {Object} hooks
   * @param {Vue} vm
   */
  function Transition(el, id, hooks, vm) {
    this.id = id;
    this.el = el;
    this.enterClass = hooks && hooks.enterClass || id + '-enter';
    this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
    this.hooks = hooks;
    this.vm = vm;
    // async state
    this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
    this.justEntered = false;
    this.entered = this.left = false;
    this.typeCache = {};
    // check css transition type
    this.type = hooks && hooks.type;
    /* istanbul ignore if */
    if ('development' !== 'production') {
      if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
        warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
      }
    }
    // bind
    var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
      self[m] = bind$1(self[m], self);
    });
  }

  var p$1 = Transition.prototype;

  /**
   * Start an entering transition.
   *
   * 1. enter transition triggered
   * 2. call beforeEnter hook
   * 3. add enter class
   * 4. insert/show element
   * 5. call enter hook (with possible explicit js callback)
   * 6. reflow
   * 7. based on transition type:
   *    - transition:
   *        remove class now, wait for transitionend,
   *        then done if there's no explicit js callback.
   *    - animation:
   *        wait for animationend, remove class,
   *        then done if there's no explicit js callback.
   *    - no css transition:
   *        done now if there's no explicit js callback.
   * 8. wait for either done or js callback, then call
   *    afterEnter hook.
   *
   * @param {Function} op - insert/show the element
   * @param {Function} [cb]
   */

  p$1.enter = function (op, cb) {
    this.cancelPending();
    this.callHook('beforeEnter');
    this.cb = cb;
    addClass(this.el, this.enterClass);
    op();
    this.entered = false;
    this.callHookWithCb('enter');
    if (this.entered) {
      return; // user called done synchronously.
    }
    this.cancel = this.hooks && this.hooks.enterCancelled;
    pushJob(this.enterNextTick);
  };

  /**
   * The "nextTick" phase of an entering transition, which is
   * to be pushed into a queue and executed after a reflow so
   * that removing the class can trigger a CSS transition.
   */

  p$1.enterNextTick = function () {

    // Important hack:
    // in Chrome, if a just-entered element is applied the
    // leave class while its interpolated property still has
    // a very small value (within one frame), Chrome will
    // skip the leave transition entirely and not firing the
    // transtionend event. Therefore we need to protected
    // against such cases using a one-frame timeout.
    this.justEntered = true;
    var self = this;
    setTimeout(function () {
      self.justEntered = false;
    }, 17);

    var enterDone = this.enterDone;
    var type = this.getCssTransitionType(this.enterClass);
    if (!this.pendingJsCb) {
      if (type === TYPE_TRANSITION) {
        // trigger transition by removing enter class now
        removeClass(this.el, this.enterClass);
        this.setupCssCb(transitionEndEvent, enterDone);
      } else if (type === TYPE_ANIMATION) {
        this.setupCssCb(animationEndEvent, enterDone);
      } else {
        enterDone();
      }
    } else if (type === TYPE_TRANSITION) {
      removeClass(this.el, this.enterClass);
    }
  };

  /**
   * The "cleanup" phase of an entering transition.
   */

  p$1.enterDone = function () {
    this.entered = true;
    this.cancel = this.pendingJsCb = null;
    removeClass(this.el, this.enterClass);
    this.callHook('afterEnter');
    if (this.cb) this.cb();
  };

  /**
   * Start a leaving transition.
   *
   * 1. leave transition triggered.
   * 2. call beforeLeave hook
   * 3. add leave class (trigger css transition)
   * 4. call leave hook (with possible explicit js callback)
   * 5. reflow if no explicit js callback is provided
   * 6. based on transition type:
   *    - transition or animation:
   *        wait for end event, remove class, then done if
   *        there's no explicit js callback.
   *    - no css transition:
   *        done if there's no explicit js callback.
   * 7. wait for either done or js callback, then call
   *    afterLeave hook.
   *
   * @param {Function} op - remove/hide the element
   * @param {Function} [cb]
   */

  p$1.leave = function (op, cb) {
    this.cancelPending();
    this.callHook('beforeLeave');
    this.op = op;
    this.cb = cb;
    addClass(this.el, this.leaveClass);
    this.left = false;
    this.callHookWithCb('leave');
    if (this.left) {
      return; // user called done synchronously.
    }
    this.cancel = this.hooks && this.hooks.leaveCancelled;
    // only need to handle leaveDone if
    // 1. the transition is already done (synchronously called
    //    by the user, which causes this.op set to null)
    // 2. there's no explicit js callback
    if (this.op && !this.pendingJsCb) {
      // if a CSS transition leaves immediately after enter,
      // the transitionend event never fires. therefore we
      // detect such cases and end the leave immediately.
      if (this.justEntered) {
        this.leaveDone();
      } else {
        pushJob(this.leaveNextTick);
      }
    }
  };

  /**
   * The "nextTick" phase of a leaving transition.
   */

  p$1.leaveNextTick = function () {
    var type = this.getCssTransitionType(this.leaveClass);
    if (type) {
      var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
      this.setupCssCb(event, this.leaveDone);
    } else {
      this.leaveDone();
    }
  };

  /**
   * The "cleanup" phase of a leaving transition.
   */

  p$1.leaveDone = function () {
    this.left = true;
    this.cancel = this.pendingJsCb = null;
    this.op();
    removeClass(this.el, this.leaveClass);
    this.callHook('afterLeave');
    if (this.cb) this.cb();
    this.op = null;
  };

  /**
   * Cancel any pending callbacks from a previously running
   * but not finished transition.
   */

  p$1.cancelPending = function () {
    this.op = this.cb = null;
    var hasPending = false;
    if (this.pendingCssCb) {
      hasPending = true;
      off(this.el, this.pendingCssEvent, this.pendingCssCb);
      this.pendingCssEvent = this.pendingCssCb = null;
    }
    if (this.pendingJsCb) {
      hasPending = true;
      this.pendingJsCb.cancel();
      this.pendingJsCb = null;
    }
    if (hasPending) {
      removeClass(this.el, this.enterClass);
      removeClass(this.el, this.leaveClass);
    }
    if (this.cancel) {
      this.cancel.call(this.vm, this.el);
      this.cancel = null;
    }
  };

  /**
   * Call a user-provided synchronous hook function.
   *
   * @param {String} type
   */

  p$1.callHook = function (type) {
    if (this.hooks && this.hooks[type]) {
      this.hooks[type].call(this.vm, this.el);
    }
  };

  /**
   * Call a user-provided, potentially-async hook function.
   * We check for the length of arguments to see if the hook
   * expects a `done` callback. If true, the transition's end
   * will be determined by when the user calls that callback;
   * otherwise, the end is determined by the CSS transition or
   * animation.
   *
   * @param {String} type
   */

  p$1.callHookWithCb = function (type) {
    var hook = this.hooks && this.hooks[type];
    if (hook) {
      if (hook.length > 1) {
        this.pendingJsCb = cancellable(this[type + 'Done']);
      }
      hook.call(this.vm, this.el, this.pendingJsCb);
    }
  };

  /**
   * Get an element's transition type based on the
   * calculated styles.
   *
   * @param {String} className
   * @return {Number}
   */

  p$1.getCssTransitionType = function (className) {
    /* istanbul ignore if */
    if (!transitionEndEvent ||
    // skip CSS transitions if page is not visible -
    // this solves the issue of transitionend events not
    // firing until the page is visible again.
    // pageVisibility API is supported in IE10+, same as
    // CSS transitions.
    document.hidden ||
    // explicit js-only transition
    this.hooks && this.hooks.css === false ||
    // element is hidden
    isHidden(this.el)) {
      return;
    }
    var type = this.type || this.typeCache[className];
    if (type) return type;
    var inlineStyles = this.el.style;
    var computedStyles = window.getComputedStyle(this.el);
    var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
    if (transDuration && transDuration !== '0s') {
      type = TYPE_TRANSITION;
    } else {
      var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
      if (animDuration && animDuration !== '0s') {
        type = TYPE_ANIMATION;
      }
    }
    if (type) {
      this.typeCache[className] = type;
    }
    return type;
  };

  /**
   * Setup a CSS transitionend/animationend callback.
   *
   * @param {String} event
   * @param {Function} cb
   */

  p$1.setupCssCb = function (event, cb) {
    this.pendingCssEvent = event;
    var self = this;
    var el = this.el;
    var onEnd = this.pendingCssCb = function (e) {
      if (e.target === el) {
        off(el, event, onEnd);
        self.pendingCssEvent = self.pendingCssCb = null;
        if (!self.pendingJsCb && cb) {
          cb();
        }
      }
    };
    on$1(el, event, onEnd);
  };

  /**
   * Check if an element is hidden - in that case we can just
   * skip the transition alltogether.
   *
   * @param {Element} el
   * @return {Boolean}
   */

  function isHidden(el) {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }

  var transition = {

    priority: TRANSITION,

    update: function update(id, oldId) {
      var el = this.el;
      // resolve on owner vm
      var hooks = resolveAsset(this.vm.$options, 'transitions', id);
      id = id || 'v';
      // apply on closest vm
      el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
      if (oldId) {
        removeClass(el, oldId + '-transition');
      }
      addClass(el, id + '-transition');
    }
  };

  var bindingModes = config._propBindingModes;

  var propDef = {

    bind: function bind() {

      var child = this.vm;
      var parent = child._context;
      // passed in from compiler directly
      var prop = this.descriptor.prop;
      var childKey = prop.path;
      var parentKey = prop.parentPath;
      var twoWay = prop.mode === bindingModes.TWO_WAY;

      var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
        val = coerceProp(prop, val);
        if (assertProp(prop, val)) {
          child[childKey] = val;
        }
      }, {
        twoWay: twoWay,
        filters: prop.filters,
        // important: props need to be observed on the
        // v-for scope if present
        scope: this._scope
      });

      // set the child initial value.
      initProp(child, prop, parentWatcher.value);

      // setup two-way binding
      if (twoWay) {
        // important: defer the child watcher creation until
        // the created hook (after data observation)
        var self = this;
        child.$once('pre-hook:created', function () {
          self.childWatcher = new Watcher(child, childKey, function (val) {
            parentWatcher.set(val);
          }, {
            // ensure sync upward before parent sync down.
            // this is necessary in cases e.g. the child
            // mutates a prop array, then replaces it. (#1683)
            sync: true
          });
        });
      }
    },

    unbind: function unbind() {
      this.parentWatcher.teardown();
      if (this.childWatcher) {
        this.childWatcher.teardown();
      }
    }
  };

  var component = {

    priority: COMPONENT,

    params: ['keep-alive', 'transition-mode', 'inline-template'],

    /**
     * Setup. Two possible usages:
     *
     * - static:
     *   <comp> or <div v-component="comp">
     *
     * - dynamic:
     *   <component :is="view">
     */

    bind: function bind() {
      if (!this.el.__vue__) {
        // keep-alive cache
        this.keepAlive = this.params.keepAlive;
        if (this.keepAlive) {
          this.cache = {};
        }
        // check inline-template
        if (this.params.inlineTemplate) {
          // extract inline template as a DocumentFragment
          this.inlineTemplate = extractContent(this.el, true);
        }
        // component resolution related state
        this.pendingComponentCb = this.Component = null;
        // transition related state
        this.pendingRemovals = 0;
        this.pendingRemovalCb = null;
        // create a ref anchor
        this.anchor = createAnchor('v-component');
        replace(this.el, this.anchor);
        // remove is attribute.
        // this is removed during compilation, but because compilation is
        // cached, when the component is used elsewhere this attribute
        // will remain at link time.
        this.el.removeAttribute('is');
        // remove ref, same as above
        if (this.descriptor.ref) {
          this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
        }
        // if static, build right now.
        if (this.literal) {
          this.setComponent(this.expression);
        }
      } else {
        'development' !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
      }
    },

    /**
     * Public update, called by the watcher in the dynamic
     * literal scenario, e.g. <component :is="view">
     */

    update: function update(value) {
      if (!this.literal) {
        this.setComponent(value);
      }
    },

    /**
     * Switch dynamic components. May resolve the component
     * asynchronously, and perform transition based on
     * specified transition mode. Accepts a few additional
     * arguments specifically for vue-router.
     *
     * The callback is called when the full transition is
     * finished.
     *
     * @param {String} value
     * @param {Function} [cb]
     */

    setComponent: function setComponent(value, cb) {
      this.invalidatePending();
      if (!value) {
        // just remove current
        this.unbuild(true);
        this.remove(this.childVM, cb);
        this.childVM = null;
      } else {
        var self = this;
        this.resolveComponent(value, function () {
          self.mountComponent(cb);
        });
      }
    },

    /**
     * Resolve the component constructor to use when creating
     * the child vm.
     */

    resolveComponent: function resolveComponent(id, cb) {
      var self = this;
      this.pendingComponentCb = cancellable(function (Component) {
        self.ComponentName = Component.options.name || id;
        self.Component = Component;
        cb();
      });
      this.vm._resolveComponent(id, this.pendingComponentCb);
    },

    /**
     * Create a new instance using the current constructor and
     * replace the existing instance. This method doesn't care
     * whether the new component and the old one are actually
     * the same.
     *
     * @param {Function} [cb]
     */

    mountComponent: function mountComponent(cb) {
      // actual mount
      this.unbuild(true);
      var self = this;
      var activateHook = this.Component.options.activate;
      var cached = this.getCached();
      var newComponent = this.build();
      if (activateHook && !cached) {
        this.waitingFor = newComponent;
        activateHook.call(newComponent, function () {
          if (self.waitingFor !== newComponent) {
            return;
          }
          self.waitingFor = null;
          self.transition(newComponent, cb);
        });
      } else {
        // update ref for kept-alive component
        if (cached) {
          newComponent._updateRef();
        }
        this.transition(newComponent, cb);
      }
    },

    /**
     * When the component changes or unbinds before an async
     * constructor is resolved, we need to invalidate its
     * pending callback.
     */

    invalidatePending: function invalidatePending() {
      if (this.pendingComponentCb) {
        this.pendingComponentCb.cancel();
        this.pendingComponentCb = null;
      }
    },

    /**
     * Instantiate/insert a new child vm.
     * If keep alive and has cached instance, insert that
     * instance; otherwise build a new one and cache it.
     *
     * @param {Object} [extraOptions]
     * @return {Vue} - the created instance
     */

    build: function build(extraOptions) {
      var cached = this.getCached();
      if (cached) {
        return cached;
      }
      if (this.Component) {
        // default options
        var options = {
          name: this.ComponentName,
          el: cloneNode(this.el),
          template: this.inlineTemplate,
          // make sure to add the child with correct parent
          // if this is a transcluded component, its parent
          // should be the transclusion host.
          parent: this._host || this.vm,
          // if no inline-template, then the compiled
          // linker can be cached for better performance.
          _linkerCachable: !this.inlineTemplate,
          _ref: this.descriptor.ref,
          _asComponent: true,
          _isRouterView: this._isRouterView,
          // if this is a transcluded component, context
          // will be the common parent vm of this instance
          // and its host.
          _context: this.vm,
          // if this is inside an inline v-for, the scope
          // will be the intermediate scope created for this
          // repeat fragment. this is used for linking props
          // and container directives.
          _scope: this._scope,
          // pass in the owner fragment of this component.
          // this is necessary so that the fragment can keep
          // track of its contained components in order to
          // call attach/detach hooks for them.
          _frag: this._frag
        };
        // extra options
        // in 1.0.0 this is used by vue-router only
        /* istanbul ignore if */
        if (extraOptions) {
          extend(options, extraOptions);
        }
        var child = new this.Component(options);
        if (this.keepAlive) {
          this.cache[this.Component.cid] = child;
        }
        /* istanbul ignore if */
        if ('development' !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
          warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
        }
        return child;
      }
    },

    /**
     * Try to get a cached instance of the current component.
     *
     * @return {Vue|undefined}
     */

    getCached: function getCached() {
      return this.keepAlive && this.cache[this.Component.cid];
    },

    /**
     * Teardown the current child, but defers cleanup so
     * that we can separate the destroy and removal steps.
     *
     * @param {Boolean} defer
     */

    unbuild: function unbuild(defer) {
      if (this.waitingFor) {
        this.waitingFor.$destroy();
        this.waitingFor = null;
      }
      var child = this.childVM;
      if (!child || this.keepAlive) {
        if (child) {
          // remove ref
          child._updateRef(true);
        }
        return;
      }
      // the sole purpose of `deferCleanup` is so that we can
      // "deactivate" the vm right now and perform DOM removal
      // later.
      child.$destroy(false, defer);
    },

    /**
     * Remove current destroyed child and manually do
     * the cleanup after removal.
     *
     * @param {Function} cb
     */

    remove: function remove(child, cb) {
      var keepAlive = this.keepAlive;
      if (child) {
        // we may have a component switch when a previous
        // component is still being transitioned out.
        // we want to trigger only one lastest insertion cb
        // when the existing transition finishes. (#1119)
        this.pendingRemovals++;
        this.pendingRemovalCb = cb;
        var self = this;
        child.$remove(function () {
          self.pendingRemovals--;
          if (!keepAlive) child._cleanup();
          if (!self.pendingRemovals && self.pendingRemovalCb) {
            self.pendingRemovalCb();
            self.pendingRemovalCb = null;
          }
        });
      } else if (cb) {
        cb();
      }
    },

    /**
     * Actually swap the components, depending on the
     * transition mode. Defaults to simultaneous.
     *
     * @param {Vue} target
     * @param {Function} [cb]
     */

    transition: function transition(target, cb) {
      var self = this;
      var current = this.childVM;
      // for devtool inspection
      if ('development' !== 'production') {
        if (current) current._inactive = true;
        target._inactive = false;
      }
      this.childVM = target;
      switch (self.params.transitionMode) {
        case 'in-out':
          target.$before(self.anchor, function () {
            self.remove(current, cb);
          });
          break;
        case 'out-in':
          self.remove(current, function () {
            target.$before(self.anchor, cb);
          });
          break;
        default:
          self.remove(current);
          target.$before(self.anchor, cb);
      }
    },

    /**
     * Unbind.
     */

    unbind: function unbind() {
      this.invalidatePending();
      // Do not defer cleanup when unbinding
      this.unbuild();
      // destroy all keep-alive cached instances
      if (this.cache) {
        for (var key in this.cache) {
          this.cache[key].$destroy();
        }
        this.cache = null;
      }
    }
  };

  var vClass = {

    deep: true,

    update: function update(value) {
      if (value && typeof value === 'string') {
        this.handleObject(stringToObject(value));
      } else if (isPlainObject(value)) {
        this.handleObject(value);
      } else if (isArray(value)) {
        this.handleArray(value);
      } else {
        this.cleanup();
      }
    },

    handleObject: function handleObject(value) {
      this.cleanup(value);
      var keys = this.prevKeys = Object.keys(value);
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        if (value[key]) {
          addClass(this.el, key);
        } else {
          removeClass(this.el, key);
        }
      }
    },

    handleArray: function handleArray(value) {
      this.cleanup(value);
      for (var i = 0, l = value.length; i < l; i++) {
        if (value[i]) {
          addClass(this.el, value[i]);
        }
      }
      this.prevKeys = value.slice();
    },

    cleanup: function cleanup(value) {
      if (this.prevKeys) {
        var i = this.prevKeys.length;
        while (i--) {
          var key = this.prevKeys[i];
          if (key && (!value || !contains$1(value, key))) {
            removeClass(this.el, key);
          }
        }
      }
    }
  };

  function stringToObject(value) {
    var res = {};
    var keys = value.trim().split(/\s+/);
    var i = keys.length;
    while (i--) {
      res[keys[i]] = true;
    }
    return res;
  }

  function contains$1(value, key) {
    return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
  }

  var internalDirectives = {
    style: style,
    'class': vClass,
    component: component,
    prop: propDef,
    transition: transition
  };

  var propBindingModes = config._propBindingModes;
  var empty = {};

  // regexes
  var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
  var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

  /**
   * Compile props on a root element and return
   * a props link function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Array} propOptions
   * @return {Function} propsLinkFn
   */

  function compileProps(el, propOptions) {
    var props = [];
    var names = Object.keys(propOptions);
    var i = names.length;
    var options, name, attr, value, path, parsed, prop;
    while (i--) {
      name = names[i];
      options = propOptions[name] || empty;

      if ('development' !== 'production' && name === '$data') {
        warn('Do not use $data as prop.');
        continue;
      }

      // props could contain dashes, which will be
      // interpreted as minus calculations by the parser
      // so we need to camelize the path here
      path = camelize(name);
      if (!identRE$1.test(path)) {
        'development' !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
        continue;
      }

      prop = {
        name: name,
        path: path,
        options: options,
        mode: propBindingModes.ONE_WAY,
        raw: null
      };

      attr = hyphenate(name);
      // first check dynamic version
      if ((value = getBindAttr(el, attr)) === null) {
        if ((value = getBindAttr(el, attr + '.sync')) !== null) {
          prop.mode = propBindingModes.TWO_WAY;
        } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
          prop.mode = propBindingModes.ONE_TIME;
        }
      }
      if (value !== null) {
        // has dynamic binding!
        prop.raw = value;
        parsed = parseDirective(value);
        value = parsed.expression;
        prop.filters = parsed.filters;
        // check binding type
        if (isLiteral(value) && !parsed.filters) {
          // for expressions containing literal numbers and
          // booleans, there's no need to setup a prop binding,
          // so we can optimize them as a one-time set.
          prop.optimizedLiteral = true;
        } else {
          prop.dynamic = true;
          // check non-settable path for two-way bindings
          if ('development' !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
            prop.mode = propBindingModes.ONE_WAY;
            warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
          }
        }
        prop.parentPath = value;

        // warn required two-way
        if ('development' !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
          warn('Prop "' + name + '" expects a two-way binding type.');
        }
      } else if ((value = getAttr(el, attr)) !== null) {
        // has literal binding!
        prop.raw = value;
      } else if (options.required) {
        // warn missing required
        'development' !== 'production' && warn('Missing required prop: ' + name);
      }
      // push prop
      props.push(prop);
    }
    return makePropsLinkFn(props);
  }

  /**
   * Build a function that applies props to a vm.
   *
   * @param {Array} props
   * @return {Function} propsLinkFn
   */

  function makePropsLinkFn(props) {
    return function propsLinkFn(vm, scope) {
      // store resolved props info
      vm._props = {};
      var i = props.length;
      var prop, path, options, value, raw;
      while (i--) {
        prop = props[i];
        raw = prop.raw;
        path = prop.path;
        options = prop.options;
        vm._props[path] = prop;
        if (raw === null) {
          // initialize absent prop
          initProp(vm, prop, getDefault(vm, options));
        } else if (prop.dynamic) {
          // dynamic prop
          if (vm._context) {
            if (prop.mode === propBindingModes.ONE_TIME) {
              // one time binding
              value = (scope || vm._context).$get(prop.parentPath);
              initProp(vm, prop, value);
            } else {
              // dynamic binding
              vm._bindDir({
                name: 'prop',
                def: propDef,
                prop: prop
              }, null, null, scope); // el, host, scope
            }
          } else {
              'development' !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
            }
        } else if (prop.optimizedLiteral) {
          // optimized literal, cast it and just set once
          var stripped = stripQuotes(raw);
          value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
          initProp(vm, prop, value);
        } else {
          // string literal, but we need to cater for
          // Boolean props with no value
          value = options.type === Boolean && raw === '' ? true : raw;
          initProp(vm, prop, value);
        }
      }
    };
  }

  /**
   * Get the default value of a prop.
   *
   * @param {Vue} vm
   * @param {Object} options
   * @return {*}
   */

  function getDefault(vm, options) {
    // no default, return undefined
    if (!hasOwn(options, 'default')) {
      // absent boolean value defaults to false
      return options.type === Boolean ? false : undefined;
    }
    var def = options['default'];
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      'development' !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
    }
    // call factory function for non-Function types
    return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
  }

  // special binding prefixes
  var bindRE = /^v-bind:|^:/;
  var onRE = /^v-on:|^@/;
  var argRE = /:(.*)$/;
  var modifierRE = /\.[^\.]+/g;
  var transitionRE = /^(v-bind:|:)?transition$/;

  // terminal directives
  var terminalDirectives = ['for', 'if'];

  // default directive priority
  var DEFAULT_PRIORITY = 1000;

  /**
   * Compile a template and return a reusable composite link
   * function, which recursively contains more link functions
   * inside. This top level compile function would normally
   * be called on instance root nodes, but can also be used
   * for partial compilation if the partial argument is true.
   *
   * The returned composite link function, when called, will
   * return an unlink function that tearsdown all directives
   * created during the linking phase.
   *
   * @param {Element|DocumentFragment} el
   * @param {Object} options
   * @param {Boolean} partial
   * @return {Function}
   */

  function compile(el, options, partial) {
    // link function for the node itself.
    var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
    // link function for the childNodes
    var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

    /**
     * A composite linker function to be called on a already
     * compiled piece of DOM, which instantiates all directive
     * instances.
     *
     * @param {Vue} vm
     * @param {Element|DocumentFragment} el
     * @param {Vue} [host] - host vm of transcluded content
     * @param {Object} [scope] - v-for scope
     * @param {Fragment} [frag] - link context fragment
     * @return {Function|undefined}
     */

    return function compositeLinkFn(vm, el, host, scope, frag) {
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(el.childNodes);
      // link
      var dirs = linkAndCapture(function compositeLinkCapturer() {
        if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
        if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
      }, vm);
      return makeUnlinkFn(vm, dirs);
    };
  }

  /**
   * Apply a linker to a vm/element pair and capture the
   * directives created during the process.
   *
   * @param {Function} linker
   * @param {Vue} vm
   */

  function linkAndCapture(linker, vm) {
    var originalDirCount = vm._directives.length;
    linker();
    var dirs = vm._directives.slice(originalDirCount);
    dirs.sort(directiveComparator);
    for (var i = 0, l = dirs.length; i < l; i++) {
      dirs[i]._bind();
    }
    return dirs;
  }

  /**
   * Directive priority sort comparator
   *
   * @param {Object} a
   * @param {Object} b
   */

  function directiveComparator(a, b) {
    a = a.descriptor.def.priority || DEFAULT_PRIORITY;
    b = b.descriptor.def.priority || DEFAULT_PRIORITY;
    return a > b ? -1 : a === b ? 0 : 1;
  }

  /**
   * Linker functions return an unlink function that
   * tearsdown all directives instances generated during
   * the process.
   *
   * We create unlink functions with only the necessary
   * information to avoid retaining additional closures.
   *
   * @param {Vue} vm
   * @param {Array} dirs
   * @param {Vue} [context]
   * @param {Array} [contextDirs]
   * @return {Function}
   */

  function makeUnlinkFn(vm, dirs, context, contextDirs) {
    function unlink(destroying) {
      teardownDirs(vm, dirs, destroying);
      if (context && contextDirs) {
        teardownDirs(context, contextDirs);
      }
    }
    // expose linked directives
    unlink.dirs = dirs;
    return unlink;
  }

  /**
   * Teardown partial linked directives.
   *
   * @param {Vue} vm
   * @param {Array} dirs
   * @param {Boolean} destroying
   */

  function teardownDirs(vm, dirs, destroying) {
    var i = dirs.length;
    while (i--) {
      dirs[i]._teardown();
      if (!destroying) {
        vm._directives.$remove(dirs[i]);
      }
    }
  }

  /**
   * Compile link props on an instance.
   *
   * @param {Vue} vm
   * @param {Element} el
   * @param {Object} props
   * @param {Object} [scope]
   * @return {Function}
   */

  function compileAndLinkProps(vm, el, props, scope) {
    var propsLinkFn = compileProps(el, props);
    var propDirs = linkAndCapture(function () {
      propsLinkFn(vm, scope);
    }, vm);
    return makeUnlinkFn(vm, propDirs);
  }

  /**
   * Compile the root element of an instance.
   *
   * 1. attrs on context container (context scope)
   * 2. attrs on the component template root node, if
   *    replace:true (child scope)
   *
   * If this is a fragment instance, we only need to compile 1.
   *
   * @param {Vue} vm
   * @param {Element} el
   * @param {Object} options
   * @param {Object} contextOptions
   * @return {Function}
   */

  function compileRoot(el, options, contextOptions) {
    var containerAttrs = options._containerAttrs;
    var replacerAttrs = options._replacerAttrs;
    var contextLinkFn, replacerLinkFn;

    // only need to compile other attributes for
    // non-fragment instances
    if (el.nodeType !== 11) {
      // for components, container and replacer need to be
      // compiled separately and linked in different scopes.
      if (options._asComponent) {
        // 2. container attributes
        if (containerAttrs && contextOptions) {
          contextLinkFn = compileDirectives(containerAttrs, contextOptions);
        }
        if (replacerAttrs) {
          // 3. replacer attributes
          replacerLinkFn = compileDirectives(replacerAttrs, options);
        }
      } else {
        // non-component, just compile as a normal element.
        replacerLinkFn = compileDirectives(el.attributes, options);
      }
    } else if ('development' !== 'production' && containerAttrs) {
      // warn container directives for fragment instances
      var names = containerAttrs.filter(function (attr) {
        // allow vue-loader/vueify scoped css attributes
        return attr.name.indexOf('_v-') < 0 &&
        // allow event listeners
        !onRE.test(attr.name) &&
        // allow slots
        attr.name !== 'slot';
      }).map(function (attr) {
        return '"' + attr.name + '"';
      });
      if (names.length) {
        var plural = names.length > 1;
        warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
      }
    }

    options._containerAttrs = options._replacerAttrs = null;
    return function rootLinkFn(vm, el, scope) {
      // link context scope dirs
      var context = vm._context;
      var contextDirs;
      if (context && contextLinkFn) {
        contextDirs = linkAndCapture(function () {
          contextLinkFn(context, el, null, scope);
        }, context);
      }

      // link self
      var selfDirs = linkAndCapture(function () {
        if (replacerLinkFn) replacerLinkFn(vm, el);
      }, vm);

      // return the unlink function that tearsdown context
      // container directives.
      return makeUnlinkFn(vm, selfDirs, context, contextDirs);
    };
  }

  /**
   * Compile a node and return a nodeLinkFn based on the
   * node type.
   *
   * @param {Node} node
   * @param {Object} options
   * @return {Function|null}
   */

  function compileNode(node, options) {
    var type = node.nodeType;
    if (type === 1 && node.tagName !== 'SCRIPT') {
      return compileElement(node, options);
    } else if (type === 3 && node.data.trim()) {
      return compileTextNode(node, options);
    } else {
      return null;
    }
  }

  /**
   * Compile an element and return a nodeLinkFn.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Function|null}
   */

  function compileElement(el, options) {
    // preprocess textareas.
    // textarea treats its text content as the initial value.
    // just bind it as an attr directive for value.
    if (el.tagName === 'TEXTAREA') {
      var tokens = parseText(el.value);
      if (tokens) {
        el.setAttribute(':value', tokensToExp(tokens));
        el.value = '';
      }
    }
    var linkFn;
    var hasAttrs = el.hasAttributes();
    // check terminal directives (for & if)
    if (hasAttrs) {
      linkFn = checkTerminalDirectives(el, options);
    }
    // check element directives
    if (!linkFn) {
      linkFn = checkElementDirectives(el, options);
    }
    // check component
    if (!linkFn) {
      linkFn = checkComponent(el, options);
    }
    // normal directives
    if (!linkFn && hasAttrs) {
      linkFn = compileDirectives(el.attributes, options);
    }
    return linkFn;
  }

  /**
   * Compile a textNode and return a nodeLinkFn.
   *
   * @param {TextNode} node
   * @param {Object} options
   * @return {Function|null} textNodeLinkFn
   */

  function compileTextNode(node, options) {
    // skip marked text nodes
    if (node._skip) {
      return removeText;
    }

    var tokens = parseText(node.wholeText);
    if (!tokens) {
      return null;
    }

    // mark adjacent text nodes as skipped,
    // because we are using node.wholeText to compile
    // all adjacent text nodes together. This fixes
    // issues in IE where sometimes it splits up a single
    // text node into multiple ones.
    var next = node.nextSibling;
    while (next && next.nodeType === 3) {
      next._skip = true;
      next = next.nextSibling;
    }

    var frag = document.createDocumentFragment();
    var el, token;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
      frag.appendChild(el);
    }
    return makeTextNodeLinkFn(tokens, frag, options);
  }

  /**
   * Linker for an skipped text node.
   *
   * @param {Vue} vm
   * @param {Text} node
   */

  function removeText(vm, node) {
    remove(node);
  }

  /**
   * Process a single text token.
   *
   * @param {Object} token
   * @param {Object} options
   * @return {Node}
   */

  function processTextToken(token, options) {
    var el;
    if (token.oneTime) {
      el = document.createTextNode(token.value);
    } else {
      if (token.html) {
        el = document.createComment('v-html');
        setTokenType('html');
      } else {
        // IE will clean up empty textNodes during
        // frag.cloneNode(true), so we have to give it
        // something here...
        el = document.createTextNode(' ');
        setTokenType('text');
      }
    }
    function setTokenType(type) {
      if (token.descriptor) return;
      var parsed = parseDirective(token.value);
      token.descriptor = {
        name: type,
        def: publicDirectives[type],
        expression: parsed.expression,
        filters: parsed.filters
      };
    }
    return el;
  }

  /**
   * Build a function that processes a textNode.
   *
   * @param {Array<Object>} tokens
   * @param {DocumentFragment} frag
   */

  function makeTextNodeLinkFn(tokens, frag) {
    return function textNodeLinkFn(vm, el, host, scope) {
      var fragClone = frag.cloneNode(true);
      var childNodes = toArray(fragClone.childNodes);
      var token, value, node;
      for (var i = 0, l = tokens.length; i < l; i++) {
        token = tokens[i];
        value = token.value;
        if (token.tag) {
          node = childNodes[i];
          if (token.oneTime) {
            value = (scope || vm).$eval(value);
            if (token.html) {
              replace(node, parseTemplate(value, true));
            } else {
              node.data = value;
            }
          } else {
            vm._bindDir(token.descriptor, node, host, scope);
          }
        }
      }
      replace(el, fragClone);
    };
  }

  /**
   * Compile a node list and return a childLinkFn.
   *
   * @param {NodeList} nodeList
   * @param {Object} options
   * @return {Function|undefined}
   */

  function compileNodeList(nodeList, options) {
    var linkFns = [];
    var nodeLinkFn, childLinkFn, node;
    for (var i = 0, l = nodeList.length; i < l; i++) {
      node = nodeList[i];
      nodeLinkFn = compileNode(node, options);
      childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
      linkFns.push(nodeLinkFn, childLinkFn);
    }
    return linkFns.length ? makeChildLinkFn(linkFns) : null;
  }

  /**
   * Make a child link function for a node's childNodes.
   *
   * @param {Array<Function>} linkFns
   * @return {Function} childLinkFn
   */

  function makeChildLinkFn(linkFns) {
    return function childLinkFn(vm, nodes, host, scope, frag) {
      var node, nodeLinkFn, childrenLinkFn;
      for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
        node = nodes[n];
        nodeLinkFn = linkFns[i++];
        childrenLinkFn = linkFns[i++];
        // cache childNodes before linking parent, fix #657
        var childNodes = toArray(node.childNodes);
        if (nodeLinkFn) {
          nodeLinkFn(vm, node, host, scope, frag);
        }
        if (childrenLinkFn) {
          childrenLinkFn(vm, childNodes, host, scope, frag);
        }
      }
    };
  }

  /**
   * Check for element directives (custom elements that should
   * be resovled as terminal directives).
   *
   * @param {Element} el
   * @param {Object} options
   */

  function checkElementDirectives(el, options) {
    var tag = el.tagName.toLowerCase();
    if (commonTagRE.test(tag)) return;
    // special case: give named slot a higher priority
    // than unnamed slots
    if (tag === 'slot' && hasBindAttr(el, 'name')) {
      tag = '_namedSlot';
    }
    var def = resolveAsset(options, 'elementDirectives', tag);
    if (def) {
      return makeTerminalNodeLinkFn(el, tag, '', options, def);
    }
  }

  /**
   * Check if an element is a component. If yes, return
   * a component link function.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Function|undefined}
   */

  function checkComponent(el, options) {
    var component = checkComponentAttr(el, options);
    if (component) {
      var ref = findRef(el);
      var descriptor = {
        name: 'component',
        ref: ref,
        expression: component.id,
        def: internalDirectives.component,
        modifiers: {
          literal: !component.dynamic
        }
      };
      var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
        if (ref) {
          defineReactive((scope || vm).$refs, ref, null);
        }
        vm._bindDir(descriptor, el, host, scope, frag);
      };
      componentLinkFn.terminal = true;
      return componentLinkFn;
    }
  }

  /**
   * Check an element for terminal directives in fixed order.
   * If it finds one, return a terminal link function.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Function} terminalLinkFn
   */

  function checkTerminalDirectives(el, options) {
    // skip v-pre
    if (getAttr(el, 'v-pre') !== null) {
      return skip;
    }
    // skip v-else block, but only if following v-if
    if (el.hasAttribute('v-else')) {
      var prev = el.previousElementSibling;
      if (prev && prev.hasAttribute('v-if')) {
        return skip;
      }
    }
    var value, dirName;
    for (var i = 0, l = terminalDirectives.length; i < l; i++) {
      dirName = terminalDirectives[i];
      value = el.getAttribute('v-' + dirName);
      if (value != null) {
        return makeTerminalNodeLinkFn(el, dirName, value, options);
      }
    }
  }

  function skip() {}
  skip.terminal = true;

  /**
   * Build a node link function for a terminal directive.
   * A terminal link function terminates the current
   * compilation recursion and handles compilation of the
   * subtree in the directive.
   *
   * @param {Element} el
   * @param {String} dirName
   * @param {String} value
   * @param {Object} options
   * @param {Object} [def]
   * @return {Function} terminalLinkFn
   */

  function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
    var parsed = parseDirective(value);
    var descriptor = {
      name: dirName,
      expression: parsed.expression,
      filters: parsed.filters,
      raw: value,
      // either an element directive, or if/for
      def: def || publicDirectives[dirName]
    };
    // check ref for v-for and router-view
    if (dirName === 'for' || dirName === 'router-view') {
      descriptor.ref = findRef(el);
    }
    var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
      if (descriptor.ref) {
        defineReactive((scope || vm).$refs, descriptor.ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    fn.terminal = true;
    return fn;
  }

  /**
   * Compile the directives on an element and return a linker.
   *
   * @param {Array|NamedNodeMap} attrs
   * @param {Object} options
   * @return {Function}
   */

  function compileDirectives(attrs, options) {
    var i = attrs.length;
    var dirs = [];
    var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens;
    while (i--) {
      attr = attrs[i];
      name = rawName = attr.name;
      value = rawValue = attr.value;
      tokens = parseText(value);
      // reset arg
      arg = null;
      // check modifiers
      modifiers = parseModifiers(name);
      name = name.replace(modifierRE, '');

      // attribute interpolations
      if (tokens) {
        value = tokensToExp(tokens);
        arg = name;
        pushDir('bind', publicDirectives.bind, tokens);
        // warn against mixing mustaches with v-bind
        if ('development' !== 'production') {
          if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
            return attr.name === ':class' || attr.name === 'v-bind:class';
          })) {
            warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
          }
        }
      } else

        // special attribute: transition
        if (transitionRE.test(name)) {
          modifiers.literal = !bindRE.test(name);
          pushDir('transition', internalDirectives.transition);
        } else

          // event handlers
          if (onRE.test(name)) {
            arg = name.replace(onRE, '');
            pushDir('on', publicDirectives.on);
          } else

            // attribute bindings
            if (bindRE.test(name)) {
              dirName = name.replace(bindRE, '');
              if (dirName === 'style' || dirName === 'class') {
                pushDir(dirName, internalDirectives[dirName]);
              } else {
                arg = dirName;
                pushDir('bind', publicDirectives.bind);
              }
            } else

              // normal directives
              if (name.indexOf('v-') === 0) {
                // check arg
                arg = (arg = name.match(argRE)) && arg[1];
                if (arg) {
                  name = name.replace(argRE, '');
                }
                // extract directive name
                dirName = name.slice(2);

                // skip v-else (when used with v-show)
                if (dirName === 'else') {
                  continue;
                }

                dirDef = resolveAsset(options, 'directives', dirName);

                if ('development' !== 'production') {
                  assertAsset(dirDef, 'directive', dirName);
                }

                if (dirDef) {
                  pushDir(dirName, dirDef);
                }
              }
    }

    /**
     * Push a directive.
     *
     * @param {String} dirName
     * @param {Object|Function} def
     * @param {Array} [interpTokens]
     */

    function pushDir(dirName, def, interpTokens) {
      var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
      var parsed = !hasOneTimeToken && parseDirective(value);
      dirs.push({
        name: dirName,
        attr: rawName,
        raw: rawValue,
        def: def,
        arg: arg,
        modifiers: modifiers,
        // conversion from interpolation strings with one-time token
        // to expression is differed until directive bind time so that we
        // have access to the actual vm context for one-time bindings.
        expression: parsed && parsed.expression,
        filters: parsed && parsed.filters,
        interp: interpTokens,
        hasOneTime: hasOneTimeToken
      });
    }

    if (dirs.length) {
      return makeNodeLinkFn(dirs);
    }
  }

  /**
   * Parse modifiers from directive attribute name.
   *
   * @param {String} name
   * @return {Object}
   */

  function parseModifiers(name) {
    var res = Object.create(null);
    var match = name.match(modifierRE);
    if (match) {
      var i = match.length;
      while (i--) {
        res[match[i].slice(1)] = true;
      }
    }
    return res;
  }

  /**
   * Build a link function for all directives on a single node.
   *
   * @param {Array} directives
   * @return {Function} directivesLinkFn
   */

  function makeNodeLinkFn(directives) {
    return function nodeLinkFn(vm, el, host, scope, frag) {
      // reverse apply because it's sorted low to high
      var i = directives.length;
      while (i--) {
        vm._bindDir(directives[i], el, host, scope, frag);
      }
    };
  }

  /**
   * Check if an interpolation string contains one-time tokens.
   *
   * @param {Array} tokens
   * @return {Boolean}
   */

  function hasOneTime(tokens) {
    var i = tokens.length;
    while (i--) {
      if (tokens[i].oneTime) return true;
    }
  }

  var specialCharRE = /[^\w\-:\.]/;

  /**
   * Process an element or a DocumentFragment based on a
   * instance option object. This allows us to transclude
   * a template node/fragment before the instance is created,
   * so the processed fragment can then be cloned and reused
   * in v-for.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Element|DocumentFragment}
   */

  function transclude(el, options) {
    // extract container attributes to pass them down
    // to compiler, because they need to be compiled in
    // parent scope. we are mutating the options object here
    // assuming the same object will be used for compile
    // right after this.
    if (options) {
      options._containerAttrs = extractAttrs(el);
    }
    // for template tags, what we want is its content as
    // a documentFragment (for fragment instances)
    if (isTemplate(el)) {
      el = parseTemplate(el);
    }
    if (options) {
      if (options._asComponent && !options.template) {
        options.template = '<slot></slot>';
      }
      if (options.template) {
        options._content = extractContent(el);
        el = transcludeTemplate(el, options);
      }
    }
    if (el instanceof DocumentFragment) {
      // anchors for fragment instance
      // passing in `persist: true` to avoid them being
      // discarded by IE during template cloning
      prepend(createAnchor('v-start', true), el);
      el.appendChild(createAnchor('v-end', true));
    }
    return el;
  }

  /**
   * Process the template option.
   * If the replace option is true this will swap the $el.
   *
   * @param {Element} el
   * @param {Object} options
   * @return {Element|DocumentFragment}
   */

  function transcludeTemplate(el, options) {
    var template = options.template;
    var frag = parseTemplate(template, true);
    if (frag) {
      var replacer = frag.firstChild;
      var tag = replacer.tagName && replacer.tagName.toLowerCase();
      if (options.replace) {
        /* istanbul ignore if */
        if (el === document.body) {
          'development' !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
        }
        // there are many cases where the instance must
        // become a fragment instance: basically anything that
        // can create more than 1 root nodes.
        if (
        // multi-children template
        frag.childNodes.length > 1 ||
        // non-element template
        replacer.nodeType !== 1 ||
        // single nested component
        tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
        // element directive
        resolveAsset(options, 'elementDirectives', tag) ||
        // for block
        replacer.hasAttribute('v-for') ||
        // if block
        replacer.hasAttribute('v-if')) {
          return frag;
        } else {
          options._replacerAttrs = extractAttrs(replacer);
          mergeAttrs(el, replacer);
          return replacer;
        }
      } else {
        el.appendChild(frag);
        return el;
      }
    } else {
      'development' !== 'production' && warn('Invalid template option: ' + template);
    }
  }

  /**
   * Helper to extract a component container's attributes
   * into a plain object array.
   *
   * @param {Element} el
   * @return {Array}
   */

  function extractAttrs(el) {
    if (el.nodeType === 1 && el.hasAttributes()) {
      return toArray(el.attributes);
    }
  }

  /**
   * Merge the attributes of two elements, and make sure
   * the class names are merged properly.
   *
   * @param {Element} from
   * @param {Element} to
   */

  function mergeAttrs(from, to) {
    var attrs = from.attributes;
    var i = attrs.length;
    var name, value;
    while (i--) {
      name = attrs[i].name;
      value = attrs[i].value;
      if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
        to.setAttribute(name, value);
      } else if (name === 'class' && !parseText(value)) {
        value.split(/\s+/).forEach(function (cls) {
          addClass(to, cls);
        });
      }
    }
  }

  var compiler = Object.freeze({
  	compile: compile,
  	compileAndLinkProps: compileAndLinkProps,
  	compileRoot: compileRoot,
  	terminalDirectives: terminalDirectives,
  	transclude: transclude
  });

  function stateMixin (Vue) {

    /**
     * Accessor for `$data` property, since setting $data
     * requires observing the new object and updating
     * proxied properties.
     */

    Object.defineProperty(Vue.prototype, '$data', {
      get: function get() {
        return this._data;
      },
      set: function set(newData) {
        if (newData !== this._data) {
          this._setData(newData);
        }
      }
    });

    /**
     * Setup the scope of an instance, which contains:
     * - observed data
     * - computed properties
     * - user methods
     * - meta properties
     */

    Vue.prototype._initState = function () {
      this._initProps();
      this._initMeta();
      this._initMethods();
      this._initData();
      this._initComputed();
    };

    /**
     * Initialize props.
     */

    Vue.prototype._initProps = function () {
      var options = this.$options;
      var el = options.el;
      var props = options.props;
      if (props && !el) {
        'development' !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
      }
      // make sure to convert string selectors into element now
      el = options.el = query(el);
      this._propsUnlinkFn = el && el.nodeType === 1 && props
      // props must be linked in proper scope if inside v-for
      ? compileAndLinkProps(this, el, props, this._scope) : null;
    };

    /**
     * Initialize the data.
     */

    Vue.prototype._initData = function () {
      var propsData = this._data;
      var optionsDataFn = this.$options.data;
      var optionsData = optionsDataFn && optionsDataFn();
      if (optionsData) {
        this._data = optionsData;
        for (var prop in propsData) {
          if ('development' !== 'production' && hasOwn(optionsData, prop)) {
            warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
          }
          if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
            set(optionsData, prop, propsData[prop]);
          }
        }
      }
      var data = this._data;
      // proxy data on instance
      var keys = Object.keys(data);
      var i, key;
      i = keys.length;
      while (i--) {
        key = keys[i];
        this._proxy(key);
      }
      // observe data
      observe(data, this);
    };

    /**
     * Swap the instance's $data. Called in $data's setter.
     *
     * @param {Object} newData
     */

    Vue.prototype._setData = function (newData) {
      newData = newData || {};
      var oldData = this._data;
      this._data = newData;
      var keys, key, i;
      // unproxy keys not present in new data
      keys = Object.keys(oldData);
      i = keys.length;
      while (i--) {
        key = keys[i];
        if (!(key in newData)) {
          this._unproxy(key);
        }
      }
      // proxy keys not already proxied,
      // and trigger change for changed values
      keys = Object.keys(newData);
      i = keys.length;
      while (i--) {
        key = keys[i];
        if (!hasOwn(this, key)) {
          // new property
          this._proxy(key);
        }
      }
      oldData.__ob__.removeVm(this);
      observe(newData, this);
      this._digest();
    };

    /**
     * Proxy a property, so that
     * vm.prop === vm._data.prop
     *
     * @param {String} key
     */

    Vue.prototype._proxy = function (key) {
      if (!isReserved(key)) {
        // need to store ref to self here
        // because these getter/setters might
        // be called by child scopes via
        // prototype inheritance.
        var self = this;
        Object.defineProperty(self, key, {
          configurable: true,
          enumerable: true,
          get: function proxyGetter() {
            return self._data[key];
          },
          set: function proxySetter(val) {
            self._data[key] = val;
          }
        });
      }
    };

    /**
     * Unproxy a property.
     *
     * @param {String} key
     */

    Vue.prototype._unproxy = function (key) {
      if (!isReserved(key)) {
        delete this[key];
      }
    };

    /**
     * Force update on every watcher in scope.
     */

    Vue.prototype._digest = function () {
      for (var i = 0, l = this._watchers.length; i < l; i++) {
        this._watchers[i].update(true); // shallow updates
      }
    };

    /**
     * Setup computed properties. They are essentially
     * special getter/setters
     */

    function noop() {}
    Vue.prototype._initComputed = function () {
      var computed = this.$options.computed;
      if (computed) {
        for (var key in computed) {
          var userDef = computed[key];
          var def = {
            enumerable: true,
            configurable: true
          };
          if (typeof userDef === 'function') {
            def.get = makeComputedGetter(userDef, this);
            def.set = noop;
          } else {
            def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind$1(userDef.get, this) : noop;
            def.set = userDef.set ? bind$1(userDef.set, this) : noop;
          }
          Object.defineProperty(this, key, def);
        }
      }
    };

    function makeComputedGetter(getter, owner) {
      var watcher = new Watcher(owner, getter, null, {
        lazy: true
      });
      return function computedGetter() {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      };
    }

    /**
     * Setup instance methods. Methods must be bound to the
     * instance since they might be passed down as a prop to
     * child components.
     */

    Vue.prototype._initMethods = function () {
      var methods = this.$options.methods;
      if (methods) {
        for (var key in methods) {
          this[key] = bind$1(methods[key], this);
        }
      }
    };

    /**
     * Initialize meta information like $index, $key & $value.
     */

    Vue.prototype._initMeta = function () {
      var metas = this.$options._meta;
      if (metas) {
        for (var key in metas) {
          defineReactive(this, key, metas[key]);
        }
      }
    };
  }

  var eventRE = /^v-on:|^@/;

  function eventsMixin (Vue) {

    /**
     * Setup the instance's option events & watchers.
     * If the value is a string, we pull it from the
     * instance's methods by name.
     */

    Vue.prototype._initEvents = function () {
      var options = this.$options;
      if (options._asComponent) {
        registerComponentEvents(this, options.el);
      }
      registerCallbacks(this, '$on', options.events);
      registerCallbacks(this, '$watch', options.watch);
    };

    /**
     * Register v-on events on a child component
     *
     * @param {Vue} vm
     * @param {Element} el
     */

    function registerComponentEvents(vm, el) {
      var attrs = el.attributes;
      var name, handler;
      for (var i = 0, l = attrs.length; i < l; i++) {
        name = attrs[i].name;
        if (eventRE.test(name)) {
          name = name.replace(eventRE, '');
          handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
          handler._fromParent = true;
          vm.$on(name.replace(eventRE), handler);
        }
      }
    }

    /**
     * Register callbacks for option events and watchers.
     *
     * @param {Vue} vm
     * @param {String} action
     * @param {Object} hash
     */

    function registerCallbacks(vm, action, hash) {
      if (!hash) return;
      var handlers, key, i, j;
      for (key in hash) {
        handlers = hash[key];
        if (isArray(handlers)) {
          for (i = 0, j = handlers.length; i < j; i++) {
            register(vm, action, key, handlers[i]);
          }
        } else {
          register(vm, action, key, handlers);
        }
      }
    }

    /**
     * Helper to register an event/watch callback.
     *
     * @param {Vue} vm
     * @param {String} action
     * @param {String} key
     * @param {Function|String|Object} handler
     * @param {Object} [options]
     */

    function register(vm, action, key, handler, options) {
      var type = typeof handler;
      if (type === 'function') {
        vm[action](key, handler, options);
      } else if (type === 'string') {
        var methods = vm.$options.methods;
        var method = methods && methods[handler];
        if (method) {
          vm[action](key, method, options);
        } else {
          'development' !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
        }
      } else if (handler && type === 'object') {
        register(vm, action, key, handler.handler, handler);
      }
    }

    /**
     * Setup recursive attached/detached calls
     */

    Vue.prototype._initDOMHooks = function () {
      this.$on('hook:attached', onAttached);
      this.$on('hook:detached', onDetached);
    };

    /**
     * Callback to recursively call attached hook on children
     */

    function onAttached() {
      if (!this._isAttached) {
        this._isAttached = true;
        this.$children.forEach(callAttach);
      }
    }

    /**
     * Iterator to call attached hook
     *
     * @param {Vue} child
     */

    function callAttach(child) {
      if (!child._isAttached && inDoc(child.$el)) {
        child._callHook('attached');
      }
    }

    /**
     * Callback to recursively call detached hook on children
     */

    function onDetached() {
      if (this._isAttached) {
        this._isAttached = false;
        this.$children.forEach(callDetach);
      }
    }

    /**
     * Iterator to call detached hook
     *
     * @param {Vue} child
     */

    function callDetach(child) {
      if (child._isAttached && !inDoc(child.$el)) {
        child._callHook('detached');
      }
    }

    /**
     * Trigger all handlers for a hook
     *
     * @param {String} hook
     */

    Vue.prototype._callHook = function (hook) {
      this.$emit('pre-hook:' + hook);
      var handlers = this.$options[hook];
      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          handlers[i].call(this);
        }
      }
      this.$emit('hook:' + hook);
    };
  }

  function noop() {}

  /**
   * A directive links a DOM element with a piece of data,
   * which is the result of evaluating an expression.
   * It registers a watcher with the expression and calls
   * the DOM update function when a change is triggered.
   *
   * @param {String} name
   * @param {Node} el
   * @param {Vue} vm
   * @param {Object} descriptor
   *                 - {String} name
   *                 - {Object} def
   *                 - {String} expression
   *                 - {Array<Object>} [filters]
   *                 - {Boolean} literal
   *                 - {String} attr
   *                 - {String} raw
   * @param {Object} def - directive definition object
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   * @constructor
   */
  function Directive(descriptor, vm, el, host, scope, frag) {
    this.vm = vm;
    this.el = el;
    // copy descriptor properties
    this.descriptor = descriptor;
    this.name = descriptor.name;
    this.expression = descriptor.expression;
    this.arg = descriptor.arg;
    this.modifiers = descriptor.modifiers;
    this.filters = descriptor.filters;
    this.literal = this.modifiers && this.modifiers.literal;
    // private
    this._locked = false;
    this._bound = false;
    this._listeners = null;
    // link context
    this._host = host;
    this._scope = scope;
    this._frag = frag;
    // store directives on node in dev mode
    if ('development' !== 'production' && this.el) {
      this.el._vue_directives = this.el._vue_directives || [];
      this.el._vue_directives.push(this);
    }
  }

  /**
   * Initialize the directive, mixin definition properties,
   * setup the watcher, call definition bind() and update()
   * if present.
   *
   * @param {Object} def
   */

  Directive.prototype._bind = function () {
    var name = this.name;
    var descriptor = this.descriptor;

    // remove attribute
    if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
      var attr = descriptor.attr || 'v-' + name;
      this.el.removeAttribute(attr);
    }

    // copy def properties
    var def = descriptor.def;
    if (typeof def === 'function') {
      this.update = def;
    } else {
      extend(this, def);
    }

    // setup directive params
    this._setupParams();

    // initial bind
    if (this.bind) {
      this.bind();
    }
    this._bound = true;

    if (this.literal) {
      this.update && this.update(descriptor.raw);
    } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
      // wrapped updater for context
      var dir = this;
      if (this.update) {
        this._update = function (val, oldVal) {
          if (!dir._locked) {
            dir.update(val, oldVal);
          }
        };
      } else {
        this._update = noop;
      }
      var preProcess = this._preProcess ? bind$1(this._preProcess, this) : null;
      var postProcess = this._postProcess ? bind$1(this._postProcess, this) : null;
      var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
      {
        filters: this.filters,
        twoWay: this.twoWay,
        deep: this.deep,
        preProcess: preProcess,
        postProcess: postProcess,
        scope: this._scope
      });
      // v-model with inital inline value need to sync back to
      // model instead of update to DOM on init. They would
      // set the afterBind hook to indicate that.
      if (this.afterBind) {
        this.afterBind();
      } else if (this.update) {
        this.update(watcher.value);
      }
    }
  };

  /**
   * Setup all param attributes, e.g. track-by,
   * transition-mode, etc...
   */

  Directive.prototype._setupParams = function () {
    if (!this.params) {
      return;
    }
    var params = this.params;
    // swap the params array with a fresh object.
    this.params = Object.create(null);
    var i = params.length;
    var key, val, mappedKey;
    while (i--) {
      key = params[i];
      mappedKey = camelize(key);
      val = getBindAttr(this.el, key);
      if (val != null) {
        // dynamic
        this._setupParamWatcher(mappedKey, val);
      } else {
        // static
        val = getAttr(this.el, key);
        if (val != null) {
          this.params[mappedKey] = val === '' ? true : val;
        }
      }
    }
  };

  /**
   * Setup a watcher for a dynamic param.
   *
   * @param {String} key
   * @param {String} expression
   */

  Directive.prototype._setupParamWatcher = function (key, expression) {
    var self = this;
    var called = false;
    var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
      self.params[key] = val;
      // since we are in immediate mode,
      // only call the param change callbacks if this is not the first update.
      if (called) {
        var cb = self.paramWatchers && self.paramWatchers[key];
        if (cb) {
          cb.call(self, val, oldVal);
        }
      } else {
        called = true;
      }
    }, {
      immediate: true,
      user: false
    });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
  };

  /**
   * Check if the directive is a function caller
   * and if the expression is a callable one. If both true,
   * we wrap up the expression and use it as the event
   * handler.
   *
   * e.g. on-click="a++"
   *
   * @return {Boolean}
   */

  Directive.prototype._checkStatement = function () {
    var expression = this.expression;
    if (expression && this.acceptStatement && !isSimplePath(expression)) {
      var fn = parseExpression(expression).get;
      var scope = this._scope || this.vm;
      var handler = function handler(e) {
        scope.$event = e;
        fn.call(scope, scope);
        scope.$event = null;
      };
      if (this.filters) {
        handler = scope._applyFilters(handler, null, this.filters);
      }
      this.update(handler);
      return true;
    }
  };

  /**
   * Set the corresponding value with the setter.
   * This should only be used in two-way directives
   * e.g. v-model.
   *
   * @param {*} value
   * @public
   */

  Directive.prototype.set = function (value) {
    /* istanbul ignore else */
    if (this.twoWay) {
      this._withLock(function () {
        this._watcher.set(value);
      });
    } else if ('development' !== 'production') {
      warn('Directive.set() can only be used inside twoWay' + 'directives.');
    }
  };

  /**
   * Execute a function while preventing that function from
   * triggering updates on this directive instance.
   *
   * @param {Function} fn
   */

  Directive.prototype._withLock = function (fn) {
    var self = this;
    self._locked = true;
    fn.call(self);
    nextTick(function () {
      self._locked = false;
    });
  };

  /**
   * Convenience method that attaches a DOM event listener
   * to the directive element and autometically tears it down
   * during unbind.
   *
   * @param {String} event
   * @param {Function} handler
   */

  Directive.prototype.on = function (event, handler) {
    on$1(this.el, event, handler);(this._listeners || (this._listeners = [])).push([event, handler]);
  };

  /**
   * Teardown the watcher and call unbind.
   */

  Directive.prototype._teardown = function () {
    if (this._bound) {
      this._bound = false;
      if (this.unbind) {
        this.unbind();
      }
      if (this._watcher) {
        this._watcher.teardown();
      }
      var listeners = this._listeners;
      var i;
      if (listeners) {
        i = listeners.length;
        while (i--) {
          off(this.el, listeners[i][0], listeners[i][1]);
        }
      }
      var unwatchFns = this._paramUnwatchFns;
      if (unwatchFns) {
        i = unwatchFns.length;
        while (i--) {
          unwatchFns[i]();
        }
      }
      if ('development' !== 'production' && this.el) {
        this.el._vue_directives.$remove(this);
      }
      this.vm = this.el = this._watcher = this._listeners = null;
    }
  };

  function lifecycleMixin (Vue) {

    /**
     * Update v-ref for component.
     *
     * @param {Boolean} remove
     */

    Vue.prototype._updateRef = function (remove) {
      var ref = this.$options._ref;
      if (ref) {
        var refs = (this._scope || this._context).$refs;
        if (remove) {
          if (refs[ref] === this) {
            refs[ref] = null;
          }
        } else {
          refs[ref] = this;
        }
      }
    };

    /**
     * Transclude, compile and link element.
     *
     * If a pre-compiled linker is available, that means the
     * passed in element will be pre-transcluded and compiled
     * as well - all we need to do is to call the linker.
     *
     * Otherwise we need to call transclude/compile/link here.
     *
     * @param {Element} el
     * @return {Element}
     */

    Vue.prototype._compile = function (el) {
      var options = this.$options;

      // transclude and init element
      // transclude can potentially replace original
      // so we need to keep reference; this step also injects
      // the template and caches the original attributes
      // on the container node and replacer node.
      var original = el;
      el = transclude(el, options);
      this._initElement(el);

      // handle v-pre on root node (#2026)
      if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
        return;
      }

      // root is always compiled per-instance, because
      // container attrs and props can be different every time.
      var contextOptions = this._context && this._context.$options;
      var rootLinker = compileRoot(el, options, contextOptions);

      // compile and link the rest
      var contentLinkFn;
      var ctor = this.constructor;
      // component compilation can be cached
      // as long as it's not using inline-template
      if (options._linkerCachable) {
        contentLinkFn = ctor.linker;
        if (!contentLinkFn) {
          contentLinkFn = ctor.linker = compile(el, options);
        }
      }

      // link phase
      // make sure to link root with prop scope!
      var rootUnlinkFn = rootLinker(this, el, this._scope);
      var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

      // register composite unlink function
      // to be called during instance destruction
      this._unlinkFn = function () {
        rootUnlinkFn();
        // passing destroying: true to avoid searching and
        // splicing the directives
        contentUnlinkFn(true);
      };

      // finally replace original
      if (options.replace) {
        replace(original, el);
      }

      this._isCompiled = true;
      this._callHook('compiled');
      return el;
    };

    /**
     * Initialize instance element. Called in the public
     * $mount() method.
     *
     * @param {Element} el
     */

    Vue.prototype._initElement = function (el) {
      if (el instanceof DocumentFragment) {
        this._isFragment = true;
        this.$el = this._fragmentStart = el.firstChild;
        this._fragmentEnd = el.lastChild;
        // set persisted text anchors to empty
        if (this._fragmentStart.nodeType === 3) {
          this._fragmentStart.data = this._fragmentEnd.data = '';
        }
        this._fragment = el;
      } else {
        this.$el = el;
      }
      this.$el.__vue__ = this;
      this._callHook('beforeCompile');
    };

    /**
     * Create and bind a directive to an element.
     *
     * @param {String} name - directive name
     * @param {Node} node   - target node
     * @param {Object} desc - parsed directive descriptor
     * @param {Object} def  - directive definition object
     * @param {Vue} [host] - transclusion host component
     * @param {Object} [scope] - v-for scope
     * @param {Fragment} [frag] - owner fragment
     */

    Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
      this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
    };

    /**
     * Teardown an instance, unobserves the data, unbind all the
     * directives, turn off all the event listeners, etc.
     *
     * @param {Boolean} remove - whether to remove the DOM node.
     * @param {Boolean} deferCleanup - if true, defer cleanup to
     *                                 be called later
     */

    Vue.prototype._destroy = function (remove, deferCleanup) {
      if (this._isBeingDestroyed) {
        if (!deferCleanup) {
          this._cleanup();
        }
        return;
      }

      var destroyReady;
      var pendingRemoval;

      var self = this;
      // Cleanup should be called either synchronously or asynchronoysly as
      // callback of this.$remove(), or if remove and deferCleanup are false.
      // In any case it should be called after all other removing, unbinding and
      // turning of is done
      var cleanupIfPossible = function cleanupIfPossible() {
        if (destroyReady && !pendingRemoval && !deferCleanup) {
          self._cleanup();
        }
      };

      // remove DOM element
      if (remove && this.$el) {
        pendingRemoval = true;
        this.$remove(function () {
          pendingRemoval = false;
          cleanupIfPossible();
        });
      }

      this._callHook('beforeDestroy');
      this._isBeingDestroyed = true;
      var i;
      // remove self from parent. only necessary
      // if parent is not being destroyed as well.
      var parent = this.$parent;
      if (parent && !parent._isBeingDestroyed) {
        parent.$children.$remove(this);
        // unregister ref (remove: true)
        this._updateRef(true);
      }
      // destroy all children.
      i = this.$children.length;
      while (i--) {
        this.$children[i].$destroy();
      }
      // teardown props
      if (this._propsUnlinkFn) {
        this._propsUnlinkFn();
      }
      // teardown all directives. this also tearsdown all
      // directive-owned watchers.
      if (this._unlinkFn) {
        this._unlinkFn();
      }
      i = this._watchers.length;
      while (i--) {
        this._watchers[i].teardown();
      }
      // remove reference to self on $el
      if (this.$el) {
        this.$el.__vue__ = null;
      }

      destroyReady = true;
      cleanupIfPossible();
    };

    /**
     * Clean up to ensure garbage collection.
     * This is called after the leave transition if there
     * is any.
     */

    Vue.prototype._cleanup = function () {
      if (this._isDestroyed) {
        return;
      }
      // remove self from owner fragment
      // do it in cleanup so that we can call $destroy with
      // defer right when a fragment is about to be removed.
      if (this._frag) {
        this._frag.children.$remove(this);
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (this._data.__ob__) {
        this._data.__ob__.removeVm(this);
      }
      // Clean up references to private properties and other
      // instances. preserve reference to _data so that proxy
      // accessors still work. The only potential side effect
      // here is that mutating the instance after it's destroyed
      // may affect the state of other components that are still
      // observing the same object, but that seems to be a
      // reasonable responsibility for the user rather than
      // always throwing an error on them.
      this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
      // call the last hook...
      this._isDestroyed = true;
      this._callHook('destroyed');
      // turn off all instance listeners.
      this.$off();
    };
  }

  function miscMixin (Vue) {

    /**
     * Apply a list of filter (descriptors) to a value.
     * Using plain for loops here because this will be called in
     * the getter of any watcher with filters so it is very
     * performance sensitive.
     *
     * @param {*} value
     * @param {*} [oldValue]
     * @param {Array} filters
     * @param {Boolean} write
     * @return {*}
     */

    Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
      var filter, fn, args, arg, offset, i, l, j, k;
      for (i = 0, l = filters.length; i < l; i++) {
        filter = filters[i];
        fn = resolveAsset(this.$options, 'filters', filter.name);
        if ('development' !== 'production') {
          assertAsset(fn, 'filter', filter.name);
        }
        if (!fn) continue;
        fn = write ? fn.write : fn.read || fn;
        if (typeof fn !== 'function') continue;
        args = write ? [value, oldValue] : [value];
        offset = write ? 2 : 1;
        if (filter.args) {
          for (j = 0, k = filter.args.length; j < k; j++) {
            arg = filter.args[j];
            args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
          }
        }
        value = fn.apply(this, args);
      }
      return value;
    };

    /**
     * Resolve a component, depending on whether the component
     * is defined normally or using an async factory function.
     * Resolves synchronously if already resolved, otherwise
     * resolves asynchronously and caches the resolved
     * constructor on the factory.
     *
     * @param {String} id
     * @param {Function} cb
     */

    Vue.prototype._resolveComponent = function (id, cb) {
      var factory = resolveAsset(this.$options, 'components', id);
      if ('development' !== 'production') {
        assertAsset(factory, 'component', id);
      }
      if (!factory) {
        return;
      }
      // async component factory
      if (!factory.options) {
        if (factory.resolved) {
          // cached
          cb(factory.resolved);
        } else if (factory.requested) {
          // pool callbacks
          factory.pendingCallbacks.push(cb);
        } else {
          factory.requested = true;
          var cbs = factory.pendingCallbacks = [cb];
          factory(function resolve(res) {
            if (isPlainObject(res)) {
              res = Vue.extend(res);
            }
            // cache resolved
            factory.resolved = res;
            // invoke callbacks
            for (var i = 0, l = cbs.length; i < l; i++) {
              cbs[i](res);
            }
          }, function reject(reason) {
            'development' !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
          });
        }
      } else {
        // normal component
        cb(factory);
      }
    };
  }

  function globalAPI (Vue) {

    /**
     * Expose useful internals
     */

    Vue.util = util;
    Vue.config = config;
    Vue.set = set;
    Vue['delete'] = del;
    Vue.nextTick = nextTick;

    /**
     * The following are exposed for advanced usage / plugins
     */

    Vue.compiler = compiler;
    Vue.FragmentFactory = FragmentFactory;
    Vue.internalDirectives = internalDirectives;
    Vue.parsers = {
      path: path,
      text: text$1,
      template: template,
      directive: directive,
      expression: expression
    };

    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */

    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     *
     * @param {Object} extendOptions
     */

    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var isFirstExtend = Super.cid === 0;
      if (isFirstExtend && extendOptions._Ctor) {
        return extendOptions._Ctor;
      }
      var name = extendOptions.name || Super.options.name;
      if ('development' !== 'production') {
        if (!/^[a-zA-Z][\w-]+$/.test(name)) {
          warn('Invalid component name: ' + name);
          name = null;
        }
      }
      var Sub = createClass(name || 'VueComponent');
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;
      // allow further extension
      Sub.extend = Super.extend;
      // create asset registers, so extended classes
      // can have their private assets too.
      config._assetTypes.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }
      // cache constructor
      if (isFirstExtend) {
        extendOptions._Ctor = Sub;
      }
      return Sub;
    };

    /**
     * A function that returns a sub-class constructor with the
     * given name. This gives us much nicer output when
     * logging instances in the console.
     *
     * @param {String} name
     * @return {Function}
     */

    function createClass(name) {
      return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    }

    /**
     * Plugin system
     *
     * @param {Object} plugin
     */

    Vue.use = function (plugin) {
      /* istanbul ignore if */
      if (plugin.installed) {
        return;
      }
      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else {
        plugin.apply(null, args);
      }
      plugin.installed = true;
      return this;
    };

    /**
     * Apply a global mixin by merging it into the default
     * options.
     */

    Vue.mixin = function (mixin) {
      Vue.options = mergeOptions(Vue.options, mixin);
    };

    /**
     * Create asset registration methods with the following
     * signature:
     *
     * @param {String} id
     * @param {*} definition
     */

    config._assetTypes.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if ('development' !== 'production') {
            if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
              warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
            }
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = id;
            definition = Vue.extend(definition);
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  var filterRE = /[^|]\|[^|]/;

  function dataAPI (Vue) {

    /**
     * Get the value from an expression on this vm.
     *
     * @param {String} exp
     * @param {Boolean} [asStatement]
     * @return {*}
     */

    Vue.prototype.$get = function (exp, asStatement) {
      var res = parseExpression(exp);
      if (res) {
        if (asStatement && !isSimplePath(exp)) {
          var self = this;
          return function statementHandler() {
            self.$arguments = toArray(arguments);
            var result = res.get.call(self, self);
            self.$arguments = null;
            return result;
          };
        } else {
          try {
            return res.get.call(this, this);
          } catch (e) {}
        }
      }
    };

    /**
     * Set the value from an expression on this vm.
     * The expression must be a valid left-hand
     * expression in an assignment.
     *
     * @param {String} exp
     * @param {*} val
     */

    Vue.prototype.$set = function (exp, val) {
      var res = parseExpression(exp, true);
      if (res && res.set) {
        res.set.call(this, this, val);
      }
    };

    /**
     * Delete a property on the VM
     *
     * @param {String} key
     */

    Vue.prototype.$delete = function (key) {
      del(this._data, key);
    };

    /**
     * Watch an expression, trigger callback when its
     * value changes.
     *
     * @param {String|Function} expOrFn
     * @param {Function} cb
     * @param {Object} [options]
     *                 - {Boolean} deep
     *                 - {Boolean} immediate
     * @return {Function} - unwatchFn
     */

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      var parsed;
      if (typeof expOrFn === 'string') {
        parsed = parseDirective(expOrFn);
        expOrFn = parsed.expression;
      }
      var watcher = new Watcher(vm, expOrFn, cb, {
        deep: options && options.deep,
        sync: options && options.sync,
        filters: parsed && parsed.filters,
        user: !options || options.user !== false
      });
      if (options && options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };

    /**
     * Evaluate a text directive, including filters.
     *
     * @param {String} text
     * @param {Boolean} [asStatement]
     * @return {String}
     */

    Vue.prototype.$eval = function (text, asStatement) {
      // check for filters.
      if (filterRE.test(text)) {
        var dir = parseDirective(text);
        // the filter regex check might give false positive
        // for pipes inside strings, so it's possible that
        // we don't get any filters here
        var val = this.$get(dir.expression, asStatement);
        return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
      } else {
        // no filter
        return this.$get(text, asStatement);
      }
    };

    /**
     * Interpolate a piece of template text.
     *
     * @param {String} text
     * @return {String}
     */

    Vue.prototype.$interpolate = function (text) {
      var tokens = parseText(text);
      var vm = this;
      if (tokens) {
        if (tokens.length === 1) {
          return vm.$eval(tokens[0].value) + '';
        } else {
          return tokens.map(function (token) {
            return token.tag ? vm.$eval(token.value) : token.value;
          }).join('');
        }
      } else {
        return text;
      }
    };

    /**
     * Log instance data as a plain JS object
     * so that it is easier to inspect in console.
     * This method assumes console is available.
     *
     * @param {String} [path]
     */

    Vue.prototype.$log = function (path) {
      var data = path ? getPath(this._data, path) : this._data;
      if (data) {
        data = clean(data);
      }
      // include computed fields
      if (!path) {
        for (var key in this.$options.computed) {
          data[key] = clean(this[key]);
        }
      }
      console.log(data);
    };

    /**
     * "clean" a getter/setter converted object into a plain
     * object copy.
     *
     * @param {Object} - obj
     * @return {Object}
     */

    function clean(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }

  function domAPI (Vue) {

    /**
     * Convenience on-instance nextTick. The callback is
     * auto-bound to the instance, and this avoids component
     * modules having to rely on the global Vue.
     *
     * @param {Function} fn
     */

    Vue.prototype.$nextTick = function (fn) {
      nextTick(fn, this);
    };

    /**
     * Append instance to target
     *
     * @param {Node} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$appendTo = function (target, cb, withTransition) {
      return insert(this, target, cb, withTransition, append, appendWithTransition);
    };

    /**
     * Prepend instance to target
     *
     * @param {Node} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$prependTo = function (target, cb, withTransition) {
      target = query(target);
      if (target.hasChildNodes()) {
        this.$before(target.firstChild, cb, withTransition);
      } else {
        this.$appendTo(target, cb, withTransition);
      }
      return this;
    };

    /**
     * Insert instance before target
     *
     * @param {Node} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$before = function (target, cb, withTransition) {
      return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
    };

    /**
     * Insert instance after target
     *
     * @param {Node} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$after = function (target, cb, withTransition) {
      target = query(target);
      if (target.nextSibling) {
        this.$before(target.nextSibling, cb, withTransition);
      } else {
        this.$appendTo(target.parentNode, cb, withTransition);
      }
      return this;
    };

    /**
     * Remove instance from DOM
     *
     * @param {Function} [cb]
     * @param {Boolean} [withTransition] - defaults to true
     */

    Vue.prototype.$remove = function (cb, withTransition) {
      if (!this.$el.parentNode) {
        return cb && cb();
      }
      var inDocument = this._isAttached && inDoc(this.$el);
      // if we are not in document, no need to check
      // for transitions
      if (!inDocument) withTransition = false;
      var self = this;
      var realCb = function realCb() {
        if (inDocument) self._callHook('detached');
        if (cb) cb();
      };
      if (this._isFragment) {
        removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
      } else {
        var op = withTransition === false ? removeWithCb : removeWithTransition;
        op(this.$el, this, realCb);
      }
      return this;
    };

    /**
     * Shared DOM insertion function.
     *
     * @param {Vue} vm
     * @param {Element} target
     * @param {Function} [cb]
     * @param {Boolean} [withTransition]
     * @param {Function} op1 - op for non-transition insert
     * @param {Function} op2 - op for transition insert
     * @return vm
     */

    function insert(vm, target, cb, withTransition, op1, op2) {
      target = query(target);
      var targetIsDetached = !inDoc(target);
      var op = withTransition === false || targetIsDetached ? op1 : op2;
      var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
      if (vm._isFragment) {
        mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
          op(node, target, vm);
        });
        cb && cb();
      } else {
        op(vm.$el, target, vm, cb);
      }
      if (shouldCallHook) {
        vm._callHook('attached');
      }
      return vm;
    }

    /**
     * Check for selectors
     *
     * @param {String|Element} el
     */

    function query(el) {
      return typeof el === 'string' ? document.querySelector(el) : el;
    }

    /**
     * Append operation that takes a callback.
     *
     * @param {Node} el
     * @param {Node} target
     * @param {Vue} vm - unused
     * @param {Function} [cb]
     */

    function append(el, target, vm, cb) {
      target.appendChild(el);
      if (cb) cb();
    }

    /**
     * InsertBefore operation that takes a callback.
     *
     * @param {Node} el
     * @param {Node} target
     * @param {Vue} vm - unused
     * @param {Function} [cb]
     */

    function beforeWithCb(el, target, vm, cb) {
      before(el, target);
      if (cb) cb();
    }

    /**
     * Remove operation that takes a callback.
     *
     * @param {Node} el
     * @param {Vue} vm - unused
     * @param {Function} [cb]
     */

    function removeWithCb(el, vm, cb) {
      remove(el);
      if (cb) cb();
    }
  }

  function eventsAPI (Vue) {

    /**
     * Listen on the given `event` with `fn`.
     *
     * @param {String} event
     * @param {Function} fn
     */

    Vue.prototype.$on = function (event, fn) {
      (this._events[event] || (this._events[event] = [])).push(fn);
      modifyListenerCount(this, event, 1);
      return this;
    };

    /**
     * Adds an `event` listener that will be invoked a single
     * time then automatically removed.
     *
     * @param {String} event
     * @param {Function} fn
     */

    Vue.prototype.$once = function (event, fn) {
      var self = this;
      function on() {
        self.$off(event, on);
        fn.apply(this, arguments);
      }
      on.fn = fn;
      this.$on(event, on);
      return this;
    };

    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     *
     * @param {String} event
     * @param {Function} fn
     */

    Vue.prototype.$off = function (event, fn) {
      var cbs;
      // all
      if (!arguments.length) {
        if (this.$parent) {
          for (event in this._events) {
            cbs = this._events[event];
            if (cbs) {
              modifyListenerCount(this, event, -cbs.length);
            }
          }
        }
        this._events = {};
        return this;
      }
      // specific event
      cbs = this._events[event];
      if (!cbs) {
        return this;
      }
      if (arguments.length === 1) {
        modifyListenerCount(this, event, -cbs.length);
        this._events[event] = null;
        return this;
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          modifyListenerCount(this, event, -1);
          cbs.splice(i, 1);
          break;
        }
      }
      return this;
    };

    /**
     * Trigger an event on self.
     *
     * @param {String|Object} event
     * @return {Boolean} shouldPropagate
     */

    Vue.prototype.$emit = function (event) {
      var isSource = typeof event === 'string';
      event = isSource ? event : event.name;
      var cbs = this._events[event];
      var shouldPropagate = isSource || !cbs;
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        // this is a somewhat hacky solution to the question raised
        // in #2102: for an inline component listener like <comp @test="doThis">,
        // the propagation handling is somewhat broken. Therefore we
        // need to treat these inline callbacks differently.
        var hasParentCbs = isSource && cbs.some(function (cb) {
          return cb._fromParent;
        });
        if (hasParentCbs) {
          shouldPropagate = false;
        }
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          var cb = cbs[i];
          var res = cb.apply(this, args);
          if (res === true && (!hasParentCbs || cb._fromParent)) {
            shouldPropagate = true;
          }
        }
      }
      return shouldPropagate;
    };

    /**
     * Recursively broadcast an event to all children instances.
     *
     * @param {String|Object} event
     * @param {...*} additional arguments
     */

    Vue.prototype.$broadcast = function (event) {
      var isSource = typeof event === 'string';
      event = isSource ? event : event.name;
      // if no child has registered for this event,
      // then there's no need to broadcast.
      if (!this._eventsCount[event]) return;
      var children = this.$children;
      var args = toArray(arguments);
      if (isSource) {
        // use object event to indicate non-source emit
        // on children
        args[0] = { name: event, source: this };
      }
      for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var shouldPropagate = child.$emit.apply(child, args);
        if (shouldPropagate) {
          child.$broadcast.apply(child, args);
        }
      }
      return this;
    };

    /**
     * Recursively propagate an event up the parent chain.
     *
     * @param {String} event
     * @param {...*} additional arguments
     */

    Vue.prototype.$dispatch = function (event) {
      var shouldPropagate = this.$emit.apply(this, arguments);
      if (!shouldPropagate) return;
      var parent = this.$parent;
      var args = toArray(arguments);
      // use object event to indicate non-source emit
      // on parents
      args[0] = { name: event, source: this };
      while (parent) {
        shouldPropagate = parent.$emit.apply(parent, args);
        parent = shouldPropagate ? parent.$parent : null;
      }
      return this;
    };

    /**
     * Modify the listener counts on all parents.
     * This bookkeeping allows $broadcast to return early when
     * no child has listened to a certain event.
     *
     * @param {Vue} vm
     * @param {String} event
     * @param {Number} count
     */

    var hookRE = /^hook:/;
    function modifyListenerCount(vm, event, count) {
      var parent = vm.$parent;
      // hooks do not get broadcasted so no need
      // to do bookkeeping for them
      if (!parent || !count || hookRE.test(event)) return;
      while (parent) {
        parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
        parent = parent.$parent;
      }
    }
  }

  function lifecycleAPI (Vue) {

    /**
     * Set instance target element and kick off the compilation
     * process. The passed in `el` can be a selector string, an
     * existing Element, or a DocumentFragment (for block
     * instances).
     *
     * @param {Element|DocumentFragment|string} el
     * @public
     */

    Vue.prototype.$mount = function (el) {
      if (this._isCompiled) {
        'development' !== 'production' && warn('$mount() should be called only once.');
        return;
      }
      el = query(el);
      if (!el) {
        el = document.createElement('div');
      }
      this._compile(el);
      this._initDOMHooks();
      if (inDoc(this.$el)) {
        this._callHook('attached');
        ready.call(this);
      } else {
        this.$once('hook:attached', ready);
      }
      return this;
    };

    /**
     * Mark an instance as ready.
     */

    function ready() {
      this._isAttached = true;
      this._isReady = true;
      this._callHook('ready');
    }

    /**
     * Teardown the instance, simply delegate to the internal
     * _destroy.
     */

    Vue.prototype.$destroy = function (remove, deferCleanup) {
      this._destroy(remove, deferCleanup);
    };

    /**
     * Partially compile a piece of DOM and return a
     * decompile function.
     *
     * @param {Element|DocumentFragment} el
     * @param {Vue} [host]
     * @return {Function}
     */

    Vue.prototype.$compile = function (el, host, scope, frag) {
      return compile(el, this.$options, true)(this, el, host, scope, frag);
    };
  }

  /**
   * The exposed Vue constructor.
   *
   * API conventions:
   * - public API methods/properties are prefixed with `$`
   * - internal methods/properties are prefixed with `_`
   * - non-prefixed properties are assumed to be proxied user
   *   data.
   *
   * @constructor
   * @param {Object} [options]
   * @public
   */

  function Vue(options) {
    this._init(options);
  }

  // install internals
  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  miscMixin(Vue);

  // install APIs
  globalAPI(Vue);
  dataAPI(Vue);
  domAPI(Vue);
  eventsAPI(Vue);
  lifecycleAPI(Vue);

  var convertArray = vFor._postProcess;

  /**
   * Limit filter for arrays
   *
   * @param {Number} n
   * @param {Number} offset (Decimal expected)
   */

  function limitBy(arr, n, offset) {
    offset = offset ? parseInt(offset, 10) : 0;
    n = toNumber(n);
    return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
  }

  /**
   * Filter filter for arrays
   *
   * @param {String} search
   * @param {String} [delimiter]
   * @param {String} ...dataKeys
   */

  function filterBy(arr, search, delimiter) {
    arr = convertArray(arr);
    if (search == null) {
      return arr;
    }
    if (typeof search === 'function') {
      return arr.filter(search);
    }
    // cast to lowercase string
    search = ('' + search).toLowerCase();
    // allow optional `in` delimiter
    // because why not
    var n = delimiter === 'in' ? 3 : 2;
    // extract and flatten keys
    var keys = toArray(arguments, n).reduce(function (prev, cur) {
      return prev.concat(cur);
    }, []);
    var res = [];
    var item, key, val, j;
    for (var i = 0, l = arr.length; i < l; i++) {
      item = arr[i];
      val = item && item.$value || item;
      j = keys.length;
      if (j) {
        while (j--) {
          key = keys[j];
          if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
            res.push(item);
            break;
          }
        }
      } else if (contains(item, search)) {
        res.push(item);
      }
    }
    return res;
  }

  /**
   * Filter filter for arrays
   *
   * @param {String} sortKey
   * @param {String} reverse
   */

  function orderBy(arr, sortKey, reverse) {
    arr = convertArray(arr);
    if (!sortKey) {
      return arr;
    }
    var order = reverse && reverse < 0 ? -1 : 1;
    // sort on a copy to avoid mutating original array
    return arr.slice().sort(function (a, b) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
      return a === b ? 0 : a > b ? order : -order;
    });
  }

  /**
   * String contain helper
   *
   * @param {*} val
   * @param {String} search
   */

  function contains(val, search) {
    var i;
    if (isPlainObject(val)) {
      var keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        if (contains(val[keys[i]], search)) {
          return true;
        }
      }
    } else if (isArray(val)) {
      i = val.length;
      while (i--) {
        if (contains(val[i], search)) {
          return true;
        }
      }
    } else if (val != null) {
      return val.toString().toLowerCase().indexOf(search) > -1;
    }
  }

  var digitsRE = /(\d{3})(?=\d)/g;

  // asset collections must be a plain object.
  var filters = {

    orderBy: orderBy,
    filterBy: filterBy,
    limitBy: limitBy,

    /**
     * Stringify value.
     *
     * @param {Number} indent
     */

    json: {
      read: function read(value, indent) {
        return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
      },
      write: function write(value) {
        try {
          return JSON.parse(value);
        } catch (e) {
          return value;
        }
      }
    },

    /**
     * 'abc' => 'Abc'
     */

    capitalize: function capitalize(value) {
      if (!value && value !== 0) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },

    /**
     * 'abc' => 'ABC'
     */

    uppercase: function uppercase(value) {
      return value || value === 0 ? value.toString().toUpperCase() : '';
    },

    /**
     * 'AbC' => 'abc'
     */

    lowercase: function lowercase(value) {
      return value || value === 0 ? value.toString().toLowerCase() : '';
    },

    /**
     * 12345 => $12,345.00
     *
     * @param {String} sign
     */

    currency: function currency(value, _currency) {
      value = parseFloat(value);
      if (!isFinite(value) || !value && value !== 0) return '';
      _currency = _currency != null ? _currency : '$';
      var stringified = Math.abs(value).toFixed(2);
      var _int = stringified.slice(0, -3);
      var i = _int.length % 3;
      var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
      var _float = stringified.slice(-3);
      var sign = value < 0 ? '-' : '';
      return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
    },

    /**
     * 'item' => 'items'
     *
     * @params
     *  an array of strings corresponding to
     *  the single, double, triple ... forms of the word to
     *  be pluralized. When the number to be pluralized
     *  exceeds the length of the args, it will use the last
     *  entry in the array.
     *
     *  e.g. ['single', 'double', 'triple', 'multiple']
     */

    pluralize: function pluralize(value) {
      var args = toArray(arguments, 1);
      return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
    },

    /**
     * Debounce a handler function.
     *
     * @param {Function} handler
     * @param {Number} delay = 300
     * @return {Function}
     */

    debounce: function debounce(handler, delay) {
      if (!handler) return;
      if (!delay) {
        delay = 300;
      }
      return _debounce(handler, delay);
    }
  };

  var partial = {

    priority: PARTIAL,

    params: ['name'],

    // watch changes to name for dynamic partials
    paramWatchers: {
      name: function name(value) {
        vIf.remove.call(this);
        if (value) {
          this.insert(value);
        }
      }
    },

    bind: function bind() {
      this.anchor = createAnchor('v-partial');
      replace(this.el, this.anchor);
      this.insert(this.params.name);
    },

    insert: function insert(id) {
      var partial = resolveAsset(this.vm.$options, 'partials', id);
      if ('development' !== 'production') {
        assertAsset(partial, 'partial', id);
      }
      if (partial) {
        this.factory = new FragmentFactory(this.vm, partial);
        vIf.insert.call(this);
      }
    },

    unbind: function unbind() {
      if (this.frag) {
        this.frag.destroy();
      }
    }
  };

  // This is the elementDirective that handles <content>
  // transclusions. It relies on the raw content of an
  // instance being stored as `$options._content` during
  // the transclude phase.

  // We are exporting two versions, one for named and one
  // for unnamed, because the unnamed slots must be compiled
  // AFTER all named slots have selected their content. So
  // we need to give them different priorities in the compilation
  // process. (See #1965)

  var slot = {

    priority: SLOT,

    bind: function bind() {
      var host = this.vm;
      var raw = host.$options._content;
      if (!raw) {
        this.fallback();
        return;
      }
      var context = host._context;
      var slotName = this.params && this.params.name;
      if (!slotName) {
        // Default slot
        this.tryCompile(extractFragment(raw.childNodes, raw, true), context, host);
      } else {
        // Named slot
        var selector = '[slot="' + slotName + '"]';
        var nodes = raw.querySelectorAll(selector);
        if (nodes.length) {
          this.tryCompile(extractFragment(nodes, raw), context, host);
        } else {
          this.fallback();
        }
      }
    },

    tryCompile: function tryCompile(content, context, host) {
      if (content.hasChildNodes()) {
        this.compile(content, context, host);
      } else {
        this.fallback();
      }
    },

    compile: function compile(content, context, host) {
      if (content && context) {
        var scope = host ? host._scope : this._scope;
        this.unlink = context.$compile(content, host, scope, this._frag);
      }
      if (content) {
        replace(this.el, content);
      } else {
        remove(this.el);
      }
    },

    fallback: function fallback() {
      this.compile(extractContent(this.el, true), this.vm);
    },

    unbind: function unbind() {
      if (this.unlink) {
        this.unlink();
      }
    }
  };

  var namedSlot = extend(extend({}, slot), {
    priority: slot.priority + 1,
    params: ['name']
  });

  /**
   * Extract qualified content nodes from a node list.
   *
   * @param {NodeList} nodes
   * @param {Element} parent
   * @param {Boolean} main
   * @return {DocumentFragment}
   */

  function extractFragment(nodes, parent, main) {
    var frag = document.createDocumentFragment();
    for (var i = 0, l = nodes.length; i < l; i++) {
      var node = nodes[i];
      // if this is the main outlet, we want to skip all
      // previously selected nodes;
      // otherwise, we want to mark the node as selected.
      // clone the node so the original raw content remains
      // intact. this ensures proper re-compilation in cases
      // where the outlet is inside a conditional block
      if (main && !node.__v_selected) {
        append(node);
      } else if (!main && node.parentNode === parent) {
        node.__v_selected = true;
        append(node);
      }
    }
    return frag;

    function append(node) {
      if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
        node = parseTemplate(node);
      }
      node = cloneNode(node);
      frag.appendChild(node);
    }
  }

  var elementDirectives = {
    slot: slot,
    _namedSlot: namedSlot, // same as slot but with higher priority
    partial: partial
  };

  Vue.version = '1.0.15';

  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: publicDirectives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  // devtools global hook
  /* istanbul ignore if */
  if ('development' !== 'production' && inBrowser) {
    if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue);
    } else if (/Chrome\/\d+/.test(navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }

  return Vue;

}));
//# sourceMappingURL=plugins.js.map