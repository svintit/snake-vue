(function(e){function t(t){for(var r,o,u=t[0],l=t[1],i=t[2],f=0,b=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);v&&v(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/snake-vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var v=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"119e":function(e,t,n){"use strict";n("5d6a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){var u=Object(r["m"])("Snake");return Object(r["h"])(),Object(r["c"])(u)}var c=Object(r["p"])("data-v-0cb0302f");Object(r["j"])("data-v-0cb0302f");var o={class:"main"},u=Object(r["f"])("div",{class:"title"},"SNAKE",-1);Object(r["i"])();var l=c((function(e,t,n,a,c,l){var i=Object(r["m"])("Board");return Object(r["h"])(),Object(r["c"])("div",o,[u,Object(r["f"])(i)])})),i=Object(r["p"])("data-v-725e46ac");Object(r["j"])("data-v-725e46ac");var v={class:"stats"},f={key:0,class:"gameOver"},b=Object(r["e"])(" Game Over ");Object(r["i"])();var s=i((function(e,t,n,a,c,o){var u=Object(r["m"])("Cell");return Object(r["h"])(),Object(r["c"])("div",null,[Object(r["f"])("div",v," Stats: { Highscore: "+Object(r["n"])(a.highScore)+", Current Score: "+Object(r["n"])(a.currentScore)+" } ",1),(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(a.grid,(function(e,t){return Object(r["h"])(),Object(r["c"])("div",{key:[e,t],class:"row"},[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(e,(function(e,n){return Object(r["h"])(),Object(r["c"])("div",{key:[e,n]},[Object(r["f"])(u,{cell:e,light:(t+n)%2===0},null,8,["cell","light"])])})),128))])})),128)),a.gameOver?(Object(r["h"])(),Object(r["c"])("div",f,[b,Object(r["f"])("button",{onClick:t[1]||(t[1]=function(){return a.restart&&a.restart.apply(a,arguments)}),class:"restartButton"}," Restart ")])):Object(r["d"])("",!0)])})),d=n("3835"),O=n("2909"),j=(n("d81d"),n("159b"),n("fb6a"),n("99af"),Object(r["p"])("data-v-6a9507eb")),p=j((function(e,t,n,a,c,o){return Object(r["h"])(),Object(r["c"])("div",{class:{cell:!0,emptyCell:"empty"===n.cell,lightCell:n.light,foodCell:"food"===n.cell,snakeCell:"snake"===n.cell}},null,2)})),h={name:"Cell",props:{cell:String,light:Boolean},setup:function(){return{}}};n("dda5");h.render=p,h.__scopeId="data-v-6a9507eb";var g=h,m={name:"Board",components:{Cell:g},setup:function(){var e=34,t=200,n=0,a=Object(r["k"])(!1),c=Object(r["k"])(0),o=Object(r["k"])(0),u=function(e){return Math.floor(Math.random()*Math.floor(e))},l=Object(r["k"])(),i=function(){l.value=Object(O["a"])(Array(e)).map((function(){return Object(O["a"])(Array(e)).map((function(){return"empty"}))}))};i();var v=Object(r["k"])(),f=function(){v.value=[[u(e),u(e)]]};f(),Object(r["o"])(v,(function(){for(var e=0;e<l.value.length;e++)for(var t=0;t<l.value.length;t++)"snake"===l.value[e][t]&&(l.value[e][t]="empty");v.value.forEach((function(e){var t=Object(d["a"])(e,2),n=t[0],r=t[1];l.value[n][r]="snake"}))}));var b=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=0;n<t;n++)l.value[u(e)][u(e)]="food"};b(5);var s=Object(r["k"])(),j=function(){s.value=[0,1]};j();var p=function(){i(),f(),j(),b(5),a.value=!1,o.value=0,h(t)},h=function t(u){setTimeout((function(){var i=Object(d["a"])(v.value[n],2),f=i[0],j=i[1],p=Object(d["a"])(s.value,2),h=p[0],g=p[1],m=[h+f,j+g],k=function(t){return t<0||t>e-1};if(k(m[0])||k(m[1]))a.value=!0;else{var y=Object(r["k"])(!1);"food"===l.value[m[0]][m[1]]&&(y.value=!0,b(),o.value+=1,o.value>c.value&&(c.value+=1));var w=Object(r["k"])(v.value.slice(0,v.value.length-(y.value?0:1)));w.value.some((function(e){return e[0]===m[0]&&e[1]===m[1]}))?a.value=!0:(v.value=[m].concat(Object(O["a"])(w.value)),t(u-(v.value.length+1)))}}),u)};return Object(r["g"])((function(){h(t)})),window.addEventListener("keydown",(function(e){switch(e.key){case"ArrowDown":s.value=[1,0];break;case"ArrowLeft":s.value=[0,-1];break;case"ArrowRight":s.value=[0,1];break;case"ArrowUp":s.value=[-1,0];break}})),{grid:l,restart:p,gameOver:a,highScore:c,currentScore:o}}};n("a89a");m.render=s,m.__scopeId="data-v-725e46ac";var k=m,y={name:"Snake",components:{Board:k}};n("e7f0");y.render=l,y.__scopeId="data-v-0cb0302f";var w=y,S={name:"App",components:{Snake:w}};n("119e");S.render=a;var _=S;Object(r["b"])(_).mount("#app")},"5d6a":function(e,t,n){},"7e9f":function(e,t,n){},"92d6":function(e,t,n){},a89a:function(e,t,n){"use strict";n("bcd5")},bcd5:function(e,t,n){},dda5:function(e,t,n){"use strict";n("7e9f")},e7f0:function(e,t,n){"use strict";n("92d6")}});
//# sourceMappingURL=app.eaa5236e.js.map