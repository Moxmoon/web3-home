(function(e){function t(t){for(var r,a,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o=[];function a(e){return s.p+"js/"+({main:"main"}[e]||e)+"."+{main:"e0910c38"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3c68":function(e,t,n){"use strict";n("817f")},4942:function(e,t){var n=16;function r(){var e=document.documentElement.clientWidth,t=1;e<750?(t=e/750,document.documentElement.style.fontSize=n*Math.min(t,2)+"px"):e<960?(t=e/960,document.documentElement.style.fontSize=n*Math.min(t,2)+"px"):e<1280?(t=e/1280,document.documentElement.style.fontSize=n*Math.min(t,2)+"px"):(t=e/1920,document.documentElement.style.fontSize=n*Math.min(t,2)+"px")}r(),window.onresize=function(){r()}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("7c55"),n("2877")),s={},l=Object(a["a"])(s,i,o,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));n("6511");r["a"].use(u["a"]);var f=[{path:"/",name:"Home",component:function(){return n.e("main").then(n.bind(null,"6511"))}},{path:"/two",name:"Two",component:function(){return n.e("main").then(n.bind(null,"d3a8"))}},{path:"/three",name:"Three",component:function(){return n.e("main").then(n.bind(null,"b610"))}},{path:"/four",name:"Four",component:function(){return n.e("main").then(n.bind(null,"2a6f"))}},{path:"/five",name:"Five",component:function(){return n.e("main").then(n.bind(null,"c531"))}}],d=new u["a"]({mode:"hash",routes:f}),h=d,m=(n("4942"),n("6e0c"),n("fe3c")),p=n.n(m);r["a"].config.productionTip=!1,p.a.attach(document.body),new r["a"]({router:h,render:function(e){return e(c)}}).$mount("#app")},6511:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},e._l(e.typewriter,(function(t,r){return n("p",{key:r},[e._l(t,(function(t,i){return[e.highlight.hasOwnProperty(r)&&e.isIncludesNum(i,e.highlight[r])?n("span",{key:i,class:["notranslate",{highlight:e.highlight.hasOwnProperty(r)&&e.isIncludesNum(i,e.highlight[r])}]},[e._v(e._s(t))]):[e._v(e._s(t))]]})),r+1===e.typewriter.length&&e.show?n("span",{staticClass:"blink"},[e._v("_")]):e._e()],2)})),0)},i=[],o=(n("ac1f"),n("00b4"),n("fb6a"),n("d3b7"),n("159b"),n("ddb0"),n("caad"),n("2532"),n("fa7d")),a={data:function(){return{show:!1,words:["......","Systems initializing...","Loading reliability cores...","Connecting to wallet security...","Generating hashing protocols...","Initializing Ethanim OS 1.0...",""],keys:["Ethanim"],wait:25,row:0,col:0,typewriter:[],highlight:{},timer:null}},mounted:function(){var e=navigator.userAgent.toLowerCase(),t=/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/g;t.test(e)?this.words[this.words.length-1]="Click anywhere to start":this.words[this.words.length-1]="Press any key to start",this.typing()},methods:{isIncludesNum:o["a"],typing:function(){var e=this;if(this.$forceUpdate(),this.row<this.words.length)if(this.col<=this.words[this.row].length){var t=this.words[this.row].slice(0,this.col++);this.typewriter[this.row]=t,this.timer=setTimeout((function(){e.typing()}),this.wait)}else{this.row++,this.col=0;var n=[];this.keys.forEach((function(t,r){if(e.words[e.row]&&e.words[e.row].includes(t)){var i=e.words[e.row].indexOf(t),o=0;-1!==i&&(o=i+t.length-1),n.push([i,o])}})),n.length>0&&(this.highlight[this.row]=n),this.typing()}else clearTimeout(this.timer),setTimeout((function(){e.show=!0,window.addEventListener("keydown",e.jump),window.addEventListener("touchend",e.jump)}),this.wait)},jump:function(){this.$router.push("./two")}},beforeDestroy:function(){window.removeEventListener("keydown",this.jump),window.removeEventListener("touchend",this.jump),this.timer&&clearTimeout(this.timer)}},s=a,l=(n("3c68"),n("2877")),c=Object(l["a"])(s,r,i,!1,null,"a0647ec2",null);t["default"]=c.exports},"6e0c":function(e,t,n){var r=n("8607");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("499e").default;i("1a4066dd",r,!0,{sourceMap:!1,shadowMode:!1})},"7c55":function(e,t,n){"use strict";n("bc9f")},"7d79":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"#app{font-family:Perfect;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;height:100%}#walletconnect-qrcode-modal .walletconnect-modal__base{max-height:calc(100% - 6.25rem);top:calc(50% + 1.375rem)}#walletconnect-qrcode-modal .walletconnect-qrcode__image{max-width:calc(100% - 25rem)}",""]),e.exports=t},"817f":function(e,t,n){var r=n("e0e1");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("499e").default;i("18942d7c",r,!0,{sourceMap:!1,shadowMode:!1})},8607:function(e,t,n){var r=n("24fb"),i=n("1de5"),o=n("b1b0");t=r(!1);var a=i(o);t.push([e.i,".fade-enter-active,.fade-leave-active{transition:opacity 2s}.fade-enter,.fade-leave-to{opacity:0}.flex{display:flex}.flex-column{display:flex;flex-direction:column}.flex-center{align-items:center}.flex-center,.flex-x-center{justify-content:center}.flex-y-center{align-items:center}.flex-between{justify-content:space-between}.flex-start{align-items:flex-start}.flex-end{align-items:flex-end}.flex1{flex:1}.flex-shrink{flex-shrink:0}@font-face{font-family:Perfect;src:url("+a+")}*{margin:0;padding:0}body,html{background-color:#000;color:#fff;font-family:Perfect;letter-spacing:.0625rem;height:100vh;overflow-x:hidden}ul li{list-style:none}.button{cursor:pointer;background-color:transparent;text-align:center;color:#fff;margin-top:1.4rem;margin-bottom:1.4rem;font-size:2rem;display:inline-block;border-radius:.25rem;border:.06rem solid #fff;height:2.63rem;line-height:2.63rem}.button:hover{background:hsla(0,0%,100%,.2)}.highlight{color:#cb5fff}.pointer{cursor:pointer}.wrapper{height:100%;box-sizing:border-box;display:flex;flex-direction:column}h1{font-size:5rem;line-height:5rem}h2{font-size:3.5rem;line-height:3.5rem}h3{font-size:2.88rem;line-height:2.94rem}h4{font-size:2.25rem;line-height:2.25rem}p{font-size:2rem;line-height:2rem;margin-bottom:1rem}@media screen and (max-width:749px){p{line-height:2rem}.btn-group{display:inline-flex;flex-direction:column;align-items:center}.btn-group .button{font-size:2rem;height:4.88rem;width:20.91rem;line-height:4.88rem}}@media screen and (min-width:750px){.btn-group{height:7.25rem;line-height:7.25rem}.btn-group .button{height:4.88rem;line-height:4.88rem;width:20.91rem}.btn-group .button:not(:last-child){margin-right:3.75rem}}",""]),e.exports=t},b1b0:function(e,t,n){e.exports=n.p+"fonts/Perfect.a6b687d5.ttf"},bc9f:function(e,t,n){var r=n("7d79");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("499e").default;i("458f7167",r,!0,{sourceMap:!1,shadowMode:!1})},e0e1:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".wrapper[data-v-a0647ec2]{align-items:flex-start;padding:3.13rem 3.75rem}.blink[data-v-a0647ec2]{animation:blink-data-v-a0647ec2 .75s step-start infinite}@keyframes blink-data-v-a0647ec2{0%{opacity:1;display:block}50%{opacity:0;display:none}to{opacity:1;display:block}}",""]),e.exports=t},fa7d:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));n("4de4"),n("d3b7"),n("ac1f"),n("00b4");function r(e,t){var n=t.filter((function(t,n){return e>=t[0]&&e<=t[1]}));return n.length>0}function i(e){var t=e.substring(0,5),n=e.substring(e.length-6,e.length-1);return t+"..."+n}function o(e,t){var n=sessionStorage.getItem("randomNum"),r="undefined"===n?0:JSON.parse(n);function i(){var n=Math.floor(Math.random()*(t-e+1)+e);return r===n?i():n}var o=i();return sessionStorage.setItem("randomNum",o),o}}});
//# sourceMappingURL=app.c301770b.js.map