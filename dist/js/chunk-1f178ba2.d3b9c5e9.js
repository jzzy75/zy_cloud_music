(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f178ba2"],{"184f":function(t,e,n){"use strict";var i=n("ab1c");n("2cdf")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},"2c7c":function(t,e,n){"use strict";var i=n("3eb8"),r=n.n(i);r.a},"31eb":function(t,e,n){"use strict";n("184f");var i=n("2340"),r=n("160d"),a=n("09e9"),c=n("50fd"),s=n("3d19"),l=n("ab1c"),o=s("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=s(t),v=!a(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),p=v?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[o]=function(){return n}),n[d](""),!e}):void 0;if(!v||!p||"replace"===t&&!u||"split"===t&&!f){var h=/./[d],g=n(c,d,""[t],function(t,e,n,i,r){return e.exec===l?v&&!r?{done:!0,value:h.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=g[0],b=g[1];i(String.prototype,t,m),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"34c9":function(t,e,n){var i=n("30fb"),r=n("50fd");t.exports=function(t){return function(e,n){var a,c,s=String(r(e)),l=i(n),o=s.length;return l<0||l>=o?t?"":void 0:(a=s.charCodeAt(l),a<55296||a>56319||l+1===o||(c=s.charCodeAt(l+1))<56320||c>57343?t?s.charAt(l):a:t?s.slice(l,l+2):c-56320+(a-55296<<10)+65536)}}},"3d42":function(t,e,n){"use strict";var i=n("aa3d"),r=n("1f0c"),a=n("d3f1"),c=n("dd68");n("31eb")("match",1,function(t,e,n,s){return[function(n){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=s(n,t,this);if(e.done)return e.value;var l=i(t),o=String(this);if(!l.global)return c(l,o);var u=l.unicode;l.lastIndex=0;var f,d=[],v=0;while(null!==(f=c(l,o))){var p=String(f[0]);d[v]=p,""===p&&(l.lastIndex=a(o,r(l.lastIndex),u)),v++}return 0===v?null:d}]})},"3eb8":function(t,e,n){},"4fbc":function(t,e,n){},5362:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"musicList"},[t.list.length>0?[n("div",{staticClass:"list-item list-header"},[n("span",{staticClass:"list-name"},[t._v("歌曲")]),n("span",{staticClass:"list-artist"},[t._v("歌手")]),1===t.listType?n("span",{staticClass:"list-time"},[t._v("时长")]):n("span",{staticClass:"list-album"},[t._v("专辑")])]),n("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(e){return t.listScroll(e)}}},[t._l(t.list,function(e,i){return n("div",{key:e.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===e.id},on:{dblclick:function(n){return t.selectItem(e,i,n)}}},[n("span",{staticClass:"list-num",domProps:{textContent:t._s(i+1)}}),n("div",{staticClass:"list-name"},[n("span",[t._v(t._s(e.name))]),n("div",{staticClass:"list-menu"},[n("span",{staticClass:"list-menu-icon-play",class:{on:t.playing&&t.currentMusic.id===e.id},on:{click:function(n){return n.stopPropagation(),t.selectItem(e,i)}}})])]),n("span",{staticClass:"list-artist"},[t._v(t._s(e.singer))]),1===t.listType?n("span",{staticClass:"list-time"},[t._v("\n          "+t._s(t._f("format")(e.duration%3600))+"\n          "),n("i",{staticClass:"list-menu-icon-del",on:{click:function(e){return e.stopPropagation(),t.deleteItem(i)}}})]):n("span",{staticClass:"list-album"},[t._v(t._s(e.album))])])}),t._t("listBtn")],2)]:n("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},r=[],a=n("3556"),c=(n("7b3e"),n("591a")),s=n("bbd5"),l=n("5af1"),o={name:"music-list",components:{MmNoResult:l["a"]},props:{list:{type:Array,default:function(){return[]}},listType:{type:Number,default:0}},data:function(){return{lockUp:!0}},computed:Object(a["a"])({},Object(c["c"])(["playing","currentMusic"])),watch:{list:function(t,e){2===this.listType&&(t.length!==e.length?this.lockUp=!1:t[t.length-1].id!==e[e.length-1].id&&(this.lockUp=!1))}},activated:function(){this.scrollTop&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:Object(a["a"])({listScroll:function(t){var e=t.target.scrollTop;if(this.scrollTop=e,2===this.listType&&!this.lockUp){var n=t.target,i=n.scrollHeight,r=n.offsetHeight;e+r>=i-50&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,e,n){n&&/list-menu-icon-del/.test(n.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,e))},deleteItem:function(t){this.$emit("del",t)}},Object(c["d"])({setPlaying:"SET_PLAYING"})),filters:{format:s["b"]}},u=o,f=(n("2c7c"),n("17cc")),d=Object(f["a"])(u,i,r,!1,null,"f6755d2e",null);e["a"]=d.exports},"568e":function(t,e,n){"use strict";var i=n("aa3d"),r=n("0eca"),a=n("1f0c"),c=n("30fb"),s=n("d3f1"),l=n("dd68"),o=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n("31eb")("replace",2,function(t,e,n,h){return[function(i,r){var a=t(this),c=void 0==i?void 0:i[e];return void 0!==c?c.call(i,a,r):n.call(String(a),i,r)},function(t,e){var r=h(n,t,this,e);if(r.done)return r.value;var f=i(t),d=String(this),v="function"===typeof e;v||(e=String(e));var m=f.global;if(m){var b=f.unicode;f.lastIndex=0}var x=[];while(1){var y=l(f,d);if(null===y)break;if(x.push(y),!m)break;var C=String(y[0]);""===C&&(f.lastIndex=s(d,a(f.lastIndex),b))}for(var w="",_=0,S=0;S<x.length;S++){y=x[S];for(var k=String(y[0]),E=o(u(c(y.index),d.length),0),I=[],R=1;R<y.length;R++)I.push(p(y[R]));var T=y.groups;if(v){var $=[k].concat(I,E,d);void 0!==T&&$.push(T);var M=String(e.apply(void 0,$))}else M=g(k,d,E,I,T,e);E>=_&&(w+=d.slice(_,E)+M,_=E+k.length)}return w+d.slice(_)}];function g(t,e,i,a,c,s){var l=i+t.length,o=a.length,u=v;return void 0!==c&&(c=r(c),u=d),n.call(s,u,function(n,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(l);case"<":s=c[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>o){var d=f(u/10);return 0===d?n:d<=o?void 0===a[d-1]?r.charAt(1):a[d-1]+r.charAt(1):n}s=a[u-1]}return void 0===s?"":s})}})},"5af1":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mm-no-result"},[n("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},r=[],a={name:"mm-no-result",props:{title:{type:String,default:""}}},c=a,s=(n("9673"),n("17cc")),l=Object(s["a"])(c,i,r,!1,null,null,null);e["a"]=l.exports},"78a6":function(t,e,n){"use strict";var i=n("aa3d");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},9673:function(t,e,n){"use strict";var i=n("4fbc"),r=n.n(i);r.a},ab1c:function(t,e,n){"use strict";var i=n("78a6"),r=RegExp.prototype.exec,a=String.prototype.replace,c=r,s="lastIndex",l=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[s]||0!==e[s]}(),o=void 0!==/()??/.exec("")[1],u=l||o;u&&(c=function(t){var e,n,c,u,f=this;return o&&(n=new RegExp("^"+f.source+"$(?!\\s)",i.call(f))),l&&(e=f[s]),c=r.call(f,t),l&&c&&(f[s]=f.global?c.index+c[0].length:e),o&&c&&c.length>1&&a.call(c[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c}),t.exports=c},bbd5:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return s});n("7b3e"),n("568e"),n("3d42"),n("eb00");function i(t,e){var n=-1,i=t.length;e||(e=new Array(i));while(++n<i)e[n]=t[n];return e}var r=function(t){var e=null==t?0:t.length;if(!e)return[];var n=-1,r=e-1,a=i(t);while(++n<e){var c=n+Math.floor(Math.random()*(r-n+1)),s=a[c];a[c]=a[n],a[n]=s}return a};function a(t){return t<10?"0"+t:t}function c(t){for(var e=t.split("\n"),n=[],i=0;i<e.length;i++){var r=decodeURIComponent(e[i]),a=/\[\d*:\d*((\.|:)\d*)*\]/g,c=r.match(a);if(c)for(var s=r.replace(a,""),l=0,o=c.length;l<o;l++){var u=c[l],f=Number(String(u.match(/\[\d*/i)).slice(1)),d=Number(String(u.match(/:\d*/i)).slice(1)),v=60*f+d;""!==s&&n.push({time:v,text:s})}}return n}function s(t){var e=Math.floor(t/60),n=Math.floor(t%60);return"".concat(a(e),":").concat(a(n))}},d3f1:function(t,e,n){"use strict";var i=n("34c9")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},dd68:function(t,e,n){"use strict";var i=n("49c8"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},eb00:function(t,e,n){"use strict";var i=n("efad"),r=n("aa3d"),a=n("d660"),c=n("d3f1"),s=n("1f0c"),l=n("dd68"),o=n("ab1c"),u=n("09e9"),f=Math.min,d=[].push,v="split",p="length",h="lastIndex",g=4294967295,m=!u(function(){RegExp(g,"y")});n("31eb")("split",2,function(t,e,n,u){var b;return b="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[p]||2!="ab"[v](/(?:ab)*/)[p]||4!="."[v](/(.?)(.?)/)[p]||"."[v](/()()/)[p]>1||""[v](/.?/)[p]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(r,t,e);var a,c,s,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?g:e>>>0,m=new RegExp(t.source,u+"g");while(a=o.call(m,r)){if(c=m[h],c>f&&(l.push(r.slice(f,a.index)),a[p]>1&&a.index<r[p]&&d.apply(l,a.slice(1)),s=a[0][p],f=c,l[p]>=v))break;m[h]===a.index&&m[h]++}return f===r[p]?!s&&m.test("")||l.push(""):l.push(r.slice(f)),l[p]>v?l.slice(0,v):l}:"0"[v](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r,i):b.call(String(r),n,i)},function(t,e){var i=u(b,t,this,e,b!==n);if(i.done)return i.value;var o=r(t),d=String(this),v=a(o,RegExp),p=o.unicode,h=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(m?"y":"g"),x=new v(m?o:"^(?:"+o.source+")",h),y=void 0===e?g:e>>>0;if(0===y)return[];if(0===d.length)return null===l(x,d)?[d]:[];var C=0,w=0,_=[];while(w<d.length){x.lastIndex=m?w:0;var S,k=l(x,m?d:d.slice(w));if(null===k||(S=f(s(x.lastIndex+(m?0:w)),d.length))===C)w=c(d,w,p);else{if(_.push(d.slice(C,w)),_.length===y)return _;for(var E=1;E<=k.length-1;E++)if(_.push(k[E]),_.length===y)return _;w=C=S}}return _.push(d.slice(C)),_}]})},efad:function(t,e,n){var i=n("86db"),r=n("29b3"),a=n("3d19")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}}}]);
//# sourceMappingURL=chunk-1f178ba2.d3b9c5e9.js.map