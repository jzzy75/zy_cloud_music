(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97832110"],{"09e4":function(t,e,n){"use strict";var a=n("d663"),r=n.n(a);r.a},"184f":function(t,e,n){"use strict";var a=n("ab1c");n("2cdf")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},2332:function(t,e,n){"use strict";var a=n("fb96"),r=n.n(a);r.a},"31eb":function(t,e,n){"use strict";n("184f");var a=n("2340"),r=n("160d"),i=n("09e9"),c=n("50fd"),o=n("3d19"),s=n("ab1c"),l=o("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var m=o(t),f=!i(function(){var e={};return e[m]=function(){return 7},7!=""[t](e)}),h=f?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[m](""),!e}):void 0;if(!f||!h||"replace"===t&&!u||"split"===t&&!d){var v=/./[m],p=n(c,m,""[t],function(t,e,n,a,r){return e.exec===s?f&&!r?{done:!0,value:v.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),g=p[0],b=p[1];a(String.prototype,t,g),r(RegExp.prototype,m,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"34c9":function(t,e,n){var a=n("30fb"),r=n("50fd");t.exports=function(t){return function(e,n){var i,c,o=String(r(e)),s=a(n),l=o.length;return s<0||s>=l?t?"":void 0:(i=o.charCodeAt(s),i<55296||i>56319||s+1===l||(c=o.charCodeAt(s+1))<56320||c>57343?t?o.charAt(s):i:t?o.slice(s,s+2):c-56320+(i-55296<<10)+65536)}}},"3d42":function(t,e,n){"use strict";var a=n("aa3d"),r=n("1f0c"),i=n("d3f1"),c=n("dd68");n("31eb")("match",1,function(t,e,n,o){return[function(n){var a=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,a):new RegExp(n)[e](String(a))},function(t){var e=o(n,t,this);if(e.done)return e.value;var s=a(t),l=String(this);if(!s.global)return c(s,l);var u=s.unicode;s.lastIndex=0;var d,m=[],f=0;while(null!==(d=c(s,l))){var h=String(d[0]);m[f]=h,""===h&&(s.lastIndex=i(l,r(s.lastIndex),u)),f++}return 0===f?null:m}]})},"3d93":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("3556"),r=n("591a"),i=(Object(a["a"])({},Object(r["c"])(["playing","currentMusic"])),Object(a["a"])({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},Object(r["d"])({setPlaying:"SET_PLAYING"}),Object(r["b"])(["selectPlay"])),{data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout(function(){e.mmLoadShow=!1},200)}}})},"568e":function(t,e,n){"use strict";var a=n("aa3d"),r=n("0eca"),i=n("1f0c"),c=n("30fb"),o=n("d3f1"),s=n("dd68"),l=Math.max,u=Math.min,d=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("31eb")("replace",2,function(t,e,n,v){return[function(a,r){var i=t(this),c=void 0==a?void 0:a[e];return void 0!==c?c.call(a,i,r):n.call(String(i),a,r)},function(t,e){var r=v(n,t,this,e);if(r.done)return r.value;var d=a(t),m=String(this),f="function"===typeof e;f||(e=String(e));var g=d.global;if(g){var b=d.unicode;d.lastIndex=0}var x=[];while(1){var y=s(d,m);if(null===y)break;if(x.push(y),!g)break;var C=String(y[0]);""===C&&(d.lastIndex=o(m,i(d.lastIndex),b))}for(var _="",w=0,k=0;k<x.length;k++){y=x[k];for(var S=String(y[0]),I=l(u(c(y.index),m.length),0),E=[],j=1;j<y.length;j++)E.push(h(y[j]));var O=y.groups;if(f){var L=[S].concat(E,I,m);void 0!==O&&L.push(O);var R=String(e.apply(void 0,L))}else R=p(S,m,I,E,O,e);I>=w&&(_+=m.slice(w,I)+R,w=I+S.length)}return _+m.slice(w)}];function p(t,e,a,i,c,o){var s=a+t.length,l=i.length,u=f;return void 0!==c&&(c=r(c),u=m),n.call(o,u,function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(s);case"<":o=c[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var m=d(u/10);return 0===m?n:m<=l?void 0===i[m-1]?r.charAt(1):i[m-1]+r.charAt(1):n}o=i[u-1]}return void 0===o?"":o})}})},"78a6":function(t,e,n){"use strict";var a=n("aa3d");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},a3ad:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),t.hotComments.length>0?n("dl",{staticClass:"comment-list",on:{scroll:function(e){return t.listScroll(e)}}},[n("dt",{staticClass:"comment-title"},[t._v("精彩评论")]),t._l(t.hotComments,function(e){return n("dd",{key:e.commentId,staticClass:"comment-item"},[n("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.user.avatarUrl+"?param=50y50",expression:"`${item.user.avatarUrl}?param=50y50`"}],staticClass:"comment-item-pic"}),n("h2",{staticClass:"comment-item-title"},[t._v(t._s(e.user.nickname))])]),n("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),n("div",{staticClass:"comment-item-opt"},[n("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(e.time)))]),n("span",{staticClass:"comment-opt-liked"},[t._v(t._s(e.likedCount))])])])}),n("dt",{staticClass:"comment-title"},[t._v("最新评论（"+t._s(t.total)+"）")]),t._l(t.commentList,function(e){return n("dd",{key:e.commentId,staticClass:"comment-item"},[n("a",{staticClass:"comment-item-pic",attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.user.avatarUrl+"?param=50y50",expression:"`${item.user.avatarUrl}?param=50y50`"}],staticClass:"cover-img"})]),n("h2",{staticClass:"comment-item-title"},[n("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))])]),n("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),t._l(e.beReplied,function(e){return n("div",{key:e.user.userId,staticClass:"comment-item-replied"},[n("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))]),t._v("\n        ："+t._s(e.content)+"\n      ")])}),n("div",{staticClass:"comment-item-opt"},[n("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(e.time)))]),e.likedCount>0?n("span",{staticClass:"comment-opt-liked"},[t._v(t._s(e.likedCount))]):t._e()])],2)})],2):t._e()],1)},r=[],i=n("bb28"),c=n("365c"),o=n("bbd5"),s=n("f904"),l=n("3d93"),u={name:"comment",mixins:[l["a"]],components:{MmLoading:s["a"]},data:function(){return{lockUp:!0,page:0,hotComments:[],commentList:[],total:null}},watch:{commentList:function(t,e){t.length!==e.length&&(this.lockUp=!1)}},created:function(){this.initData()},methods:{initData:function(){var t=this;Object(c["a"])(this.$route.params.id,this.page).then(function(e){200===e.data.code&&(t.hotComments=e.data.hotComments,t.commentList=e.data.comments,t.total=e.data.total,t.lockUp=!0,t._hideLoad())})},listScroll:function(t){if(!this.lockUp){var e=t.target,n=e.scrollTop,a=e.scrollHeight,r=e.offsetHeight;n+r>=a-100&&(this.lockUp=!0,this.page+=1,this.pullUp())}},pullUp:function(){var t=this;Object(c["a"])(this.$route.params.id,this.page).then(function(e){200===e.data.code&&(t.commentList=[].concat(Object(i["a"])(t.commentList),Object(i["a"])(e.data.comments)))})}},filters:{format:function(t){var e,n=new Date(t),a={year:n.getFullYear(),month:n.getMonth(),date:n.getDate(),hours:n.getHours(),minutes:n.getMinutes()},r=new Date,i=r.getTime()-t;return e=r.getDate()===a.date&&i<6e4?"刚刚":r.getDate()===a.date&&i>6e4&&i<36e5?"".concat(Math.floor(i/6e4),"分钟前"):r.getDate()===a.date&&i>36e5&&i<864e5?"".concat(Object(o["a"])(a.hours),":").concat(Object(o["a"])(a.minutes)):r.getDate()!==a.date&&i<864e5?"昨天".concat(Object(o["a"])(a.hours),":").concat(Object(o["a"])(a.minutes)):r.getFullYear()===a.year?"".concat(a.month+1,"月").concat(a.date,"日"):"".concat(a.year,"年").concat(a.month+1,"月").concat(a.date,"日"),e}}},d=u,m=(n("09e4"),n("17cc")),f=Object(m["a"])(d,a,r,!1,null,"67c1a482",null);e["default"]=f.exports},ab1c:function(t,e,n){"use strict";var a=n("78a6"),r=RegExp.prototype.exec,i=String.prototype.replace,c=r,o="lastIndex",s=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(c=function(t){var e,n,c,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),s&&(e=d[o]),c=r.call(d,t),s&&c&&(d[o]=d.global?c.index+c[0].length:e),l&&c&&c.length>1&&i.call(c[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c}),t.exports=c},bbd5:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return o});n("7b3e"),n("568e"),n("3d42"),n("eb00");function a(t,e){var n=-1,a=t.length;e||(e=new Array(a));while(++n<a)e[n]=t[n];return e}var r=function(t){var e=null==t?0:t.length;if(!e)return[];var n=-1,r=e-1,i=a(t);while(++n<e){var c=n+Math.floor(Math.random()*(r-n+1)),o=i[c];i[c]=i[n],i[n]=o}return i};function i(t){return t<10?"0"+t:t}function c(t){for(var e=t.split("\n"),n=[],a=0;a<e.length;a++){var r=decodeURIComponent(e[a]),i=/\[\d*:\d*((\.|:)\d*)*\]/g,c=r.match(i);if(c)for(var o=r.replace(i,""),s=0,l=c.length;s<l;s++){var u=c[s],d=Number(String(u.match(/\[\d*/i)).slice(1)),m=Number(String(u.match(/:\d*/i)).slice(1)),f=60*d+m;""!==o&&n.push({time:f,text:o})}}return n}function o(t){var e=Math.floor(t/60),n=Math.floor(t%60);return"".concat(i(e),":").concat(i(n))}},d3f1:function(t,e,n){"use strict";var a=n("34c9")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},d663:function(t,e,n){},dd68:function(t,e,n){"use strict";var a=n("49c8"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},eb00:function(t,e,n){"use strict";var a=n("efad"),r=n("aa3d"),i=n("d660"),c=n("d3f1"),o=n("1f0c"),s=n("dd68"),l=n("ab1c"),u=n("09e9"),d=Math.min,m=[].push,f="split",h="length",v="lastIndex",p=4294967295,g=!u(function(){RegExp(p,"y")});n("31eb")("split",2,function(t,e,n,u){var b;return b="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!a(t))return n.call(r,t,e);var i,c,o,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=void 0===e?p:e>>>0,g=new RegExp(t.source,u+"g");while(i=l.call(g,r)){if(c=g[v],c>d&&(s.push(r.slice(d,i.index)),i[h]>1&&i.index<r[h]&&m.apply(s,i.slice(1)),o=i[0][h],d=c,s[h]>=f))break;g[v]===i.index&&g[v]++}return d===r[h]?!o&&g.test("")||s.push(""):s.push(r.slice(d)),s[h]>f?s.slice(0,f):s}:"0"[f](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,a){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r,a):b.call(String(r),n,a)},function(t,e){var a=u(b,t,this,e,b!==n);if(a.done)return a.value;var l=r(t),m=String(this),f=i(l,RegExp),h=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),x=new f(g?l:"^(?:"+l.source+")",v),y=void 0===e?p:e>>>0;if(0===y)return[];if(0===m.length)return null===s(x,m)?[m]:[];var C=0,_=0,w=[];while(_<m.length){x.lastIndex=g?_:0;var k,S=s(x,g?m:m.slice(_));if(null===S||(k=d(o(x.lastIndex+(g?0:_)),m.length))===C)_=c(m,_,h);else{if(w.push(m.slice(C,_)),w.length===y)return w;for(var I=1;I<=S.length-1;I++)if(w.push(S[I]),w.length===y)return w;_=C=k}}return w.push(m.slice(C)),w}]})},efad:function(t,e,n){var a=n("86db"),r=n("29b3"),i=n("3d19")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},f904:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[n("div",{staticClass:"mm-loading-content"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},r=[],i={name:"mm-loading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String}}},c=i,o=(n("2332"),n("17cc")),s=Object(o["a"])(c,a,r,!1,null,null,null);e["a"]=s.exports},fb96:function(t,e,n){}}]);
//# sourceMappingURL=chunk-97832110.56862293.js.map