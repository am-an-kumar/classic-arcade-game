!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){var n={},o=[];function r(e){if(n[e])return n[e];var t=new Image;n[e]=!1,t.src=e,t.onload=function(){n[e]=t,i()&&o.forEach(function(e){return e()})}}function i(){var e=!0;for(var t in n)n.hasOwnProperty(t)&&!n[t]&&(e=!1);return e}e.exports={load:function(e){e instanceof Array?e.forEach(function(e){return r(e)}):r(e)},get:function(e){return n[e]},onReady:function(e){o.push(e)},isReady:i}},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=n(0).get,i=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.speed=o}var t,n,i;return t=e,(n=[{key:"render",value:function(){context.drawImage(r(this.sprite),this.x,this.y,50,50)}}])&&o(t.prototype,n),i&&o(t,i),e}();e.exports=i},function(e,t,n){(0,n(3).startEngine)(300,300,6,6,["/images/water-block.png","/images/stone-block.png","/images/stone-block.png","/images/stone-block.png","/images/stone-block.png","/images/grass-block.png"],["/images/water-block.png","/images/stone-block.png","/images/grass-block.png","/images/char-horn-girl.png","/images/enemy-bug.png"])},function(e,t,n){var o,r,c,u,a,s,f,l,p,y,d,h,b=n(0),g=b.load,m=b.onReady,v=b.get,w=n(4),x=n(5),k=document.querySelector("#score"),O=document.querySelector("#health"),S=document.querySelector("#modal"),j=!1,_=!0;function E(){var e=Date.now();!function(e){(function(e){p.forEach(function(t){return t.update(e)})})(e),p.forEach(function(e){l.x>=e.x-45&&l.x<=e.x+45&&l.y==e.y&&(l.resetPlayer(),d=!0,y--)})}((e-o)/1e3),function(){context.clearRect(0,0,f.width,f.height);for(var e=0;e<u;e++)for(var t=0;t<a;t++)context.drawImage(v(s[e]),t*r,e*c,r,c);l.render(),p.forEach(function(e){return e.render()}),k.textContent=score,d&&(O.children[y].classList.toggle("alive"),d=!1,0==y&&(_=!1,cancelAnimationFrame(h),j=!0,S.classList.toggle("modal-show")))}(),o=e,_&&(h=requestAnimationFrame(E))}function P(){o=Date.now(),E()}function L(e){for(g(e),l=new w(100,250,0),p=[new x(0,50,25),new x(100,100,25),new x(0,150,25),new x(150,200,25)],y=3,d=!1,window.score=0,i=0;i<3;i++)O.children[i].classList.add("alive");j?P():m(P)}e.exports={startEngine:function(e,t,n,o,i,y){document.addEventListener("keydown",function(e){var t;switch(e.keyCode){case 37:t="left";break;case 38:t="up";break;case 39:t="right";break;case 40:t="down"}l.handleInput(t,p)}),document.querySelector("#controls").addEventListener("click",function(e){l.handleInput(e.target.getAttribute("data-dir"),p)}),document.querySelector("#refresh").addEventListener("click",function(){j=!0,_=!0,L(y)}),document.querySelector("#no-btn").addEventListener("click",function(){j=!0,S.classList.toggle("modal-show")}),document.querySelector("#yes-btn").addEventListener("click",function(){S.classList.toggle("modal-show"),j=!0,_=!0,L(y)}),f=document.createElement("canvas"),window.context=f.getContext("2d"),f.width=e,f.height=t,r=e/o,c=t/n,u=n,a=o,s=i,y,document.querySelector("#game-board").appendChild(f),L(y)}}},function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=n(1),s=function(e){function t(e,n,o){var r,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"images/char-horn-girl.png";return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=i(this,c(t).call(this,e,n,o))).sprite=u,r}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a),n=t,(o=[{key:"resetPlayer",value:function(){this.x=100,this.y=250}},{key:"handleInput",value:function(e,t){switch(e){case"up":this.y>=0&&(this.y-=50),-50==this.y&&(t.forEach(function(e){e.speedUp(20)}),this.resetPlayer(),score++);break;case"down":this.y<250&&(this.y+=50);break;case"left":this.x>0&&(this.x-=50);break;case"right":this.x<250&&(this.x+=50)}}}])&&r(n.prototype,o),s&&r(n,s),t}();e.exports=s},function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=n(1),s=function(e){function t(e,n,o){var r,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"images/enemy-bug.png";return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=i(this,c(t).call(this,e,n,o))).sprite=u,r}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a),n=t,(o=[{key:"speedUp",value:function(e){this.speed<=500&&(this.speed+=Math.floor(Math.random()*e))}},{key:"update",value:function(e){this.x+=this.speed*e,this.x>300&&(this.x=-50,this.speedUp(10))}}])&&r(n.prototype,o),s&&r(n,s),t}();e.exports=s}]);