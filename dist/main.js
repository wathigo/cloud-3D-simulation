!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e);var o,a,l,u,i,d,c,f,s=(o=[],a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-256,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;return f(t,e)},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-256,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;return f(t,e)},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-256,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;return f(t,e)},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-180,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180;return f(t,e)},d=function(){return Math.random()},f=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},{generate:function(t,e,n){var o=[];if(t.hasChildNodes())for(;t.childNodes.length>=1;)t.removeChild(t.firstChild);for(var a=0;a<5;a++)o.push(c());var l=document.querySelectorAll(".cloudLayer"),u=Array.from(l);console.log(r(u)),function t(e,n,r){for(var o=0;o<r.length;o+=1){var a=r[o];a.data.a+=a.data.speed;var l="translateX( "+a.data.x+"px )         translateY( "+a.data.y+"px )         translateZ( "+a.data.z+"px )         rotateY( "+-n+"deg )         rotateX( "+-e+"deg )         scale( "+a.data.s+")";a.style.transform=l}requestAnimationFrame(t)}(e,n,u)},createCloud:c=function(){var t=document.createElement("div");t.className="cloudBase";var e="translateX( "+a()+"px )       translateY( "+l()+"px )       translateZ( "+u()+"px )";t.style.transform=e,world.appendChild(t);for(var n=0;n<4+Math.round(10*Math.random());n++){var r=document.createElement("img");r.className="cloudLayer",r.src="../src/images/cloud.png",r.data={x:a(),y:l(),z:u(),a:i(),s:d()},e="translateX( "+a()+"px )       translateY( "+l()+"px )       translateZ( "+u()+"px )       rotateZ( "+i()+"deg )       scale( "+d()+" )",r.style.transform=e,t.appendChild(r),o.push(r)}return t}});!function(){var t=document.getElementById("world"),e=(document.getElementById("viewport"),0),n=0;console.log("tf!"),window.addEventListener("mousemove",(function(t){n=180*-(.5-t.clientX/window.innerWidth),e=180*(.5-t.clientY/window.innerHeight),r()}));var r=function(){t.style.transform="translateZ( 0px )       rotateX( "+e+"deg)       rotateY( "+n+"deg)"};s.generate(t,e,n)}()}]);