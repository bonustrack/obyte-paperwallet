(function(e){function t(t){for(var r,i,l=t[0],s=t[1],u=t[2],c=0,v=[];c<l.length;c++)i=l[c],o[i]&&v.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("04f5"),o=n.n(r);o.a},"04f5":function(e,t,n){},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("\n    Obyte paper wallet\n  ")]),n("div",{staticClass:"content"},[n("b",[e._v("Env")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.env,expression:"env"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.env=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"livenet"}},[e._v("Livenet")]),n("option",{attrs:{value:"testnet"}},[e._v("Testnet")])]),n("button",{on:{click:e.generateRandomWallet}},[e._v("\n      Generate new random wallet\n    ")]),e._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.seed,expression:"seed"}]},[n("b",[e._v("Seed")]),n("p",[e._v(e._s(e.seed))]),n("b",[e._v("Path")]),n("p",[e._v(e._s(e.path))]),n("b",[e._v("WIF")]),n("p",[e._v(e._s(e.wif))]),n("b",[e._v("Public key")]),n("p",[e._v(e._s(e.pubkey))]),n("b",[e._v("Address")]),n("p",[e._v(e._s(e.address))])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n      If you want to run the script locally you can download the files\n      "),n("a",{attrs:{href:"https://github.com/bonuschain/obyte-paperwallet/tree/master/docs",target:"_blank"}},[e._v("here")]),e._v(".\n      This script will work even without internet.\n    ")])}];const i=n("4f27"),l=n("bd4a");var s={name:"app",data(){return{env:"livenet",seed:null,path:null,wif:null,pubkey:null,address:null}},methods:{generateRandomWallet(){let e=new l;while(!l.isValid(e.toString()))e=new l;this.seed=e.phrase,this.path="m/44'/0'/0'/0/0";const t=e.toHDPrivateKey(),{privateKey:n}=t.derive(this.path),r=n.bn.toBuffer({size:32}),o="testnet"===this.env;this.wif=i.toWif(r,o),this.pubkey=n.publicKey.toBuffer().toString("base64");const a=["sig",{pubkey:this.pubkey}];this.address=i.getChash160(a)}}},u=s,p=(n("034f"),n("2877")),c=Object(p["a"])(u,o,a,!1,null,null,null);c.options.__file="App.vue";var v=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:e=>e(v)}).$mount("#app")}});
//# sourceMappingURL=app.f2891543.js.map