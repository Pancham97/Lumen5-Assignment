!function a(r,i,o){function s(t,e){if(!i[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},r[t][0].call(n.exports,function(e){return s(r[t][1][e]||e)},n,n.exports,a,r,i,o)}return i[t].exports}for(var c="function"==typeof require&&require,e=0;e<o.length;e++)s(o[e]);return s}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AnimationFrame=void 0;var a=(r.prototype.requestAnimationFrame=function(e,t){var n=!1;return 0<(t=void 0===t?0:t)&&!n?(setTimeout(e,1e3*t),n=!0,0):window.setTimeout(function(){return e(performance.now())},this.frameInterval)},r.prototype.cancelAnimationFrame=function(e){clearTimeout(e)},r);function r(){this.frameRate=60,this.frameInterval=Math.ceil(1e3/this.frameRate),this.callbackTracker={id:0,callback:function(){return console.log("hello")}}}n.AnimationFrame=a},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.init=void 0;var a=new(e("./AnimationFrame").AnimationFrame),r=new Image,i=new Image,o=new Image;function s(){var e=document.querySelector("#canvas").getContext("2d");e.globalCompositeOperation="destination-over",e.clearRect(0,0,300,300),e.fillStyle="rgba(0, 0, 0, 0.4)",e.strokeStyle="rgba(0, 153, 255, 0.4)",e.save(),e.translate(150,150);var t=new Date;e.rotate(2*Math.PI/60*t.getSeconds()+2*Math.PI/6e4*t.getMilliseconds()),e.translate(105,0),e.fillRect(0,-12,40,24),e.drawImage(o,-12,-12),e.save(),e.rotate(2*Math.PI/6*t.getSeconds()+2*Math.PI/6e3*t.getMilliseconds()),e.translate(0,28.5),e.drawImage(i,-3.5,-3.5),e.restore(),e.restore(),e.beginPath(),e.arc(150,150,105,0,2*Math.PI,!1),e.stroke(),e.drawImage(r,0,0,300,300),a.requestAnimationFrame(s)}n.init=function(){var e=document.querySelector("figure");e.classList.contains("hidden")&&(e.classList.remove("hidden"),e.classList.add("visible")),r.src="https://mdn.mozillademos.org/files/1456/Canvas_sun.png",i.src="https://mdn.mozillademos.org/files/1443/Canvas_moon.png",o.src="https://mdn.mozillademos.org/files/1429/Canvas_earth.png",a.requestAnimationFrame(s)}},{"./AnimationFrame":1}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});function a(){m&&(m.style.transform="translateY("+u.translateY+"px)",m.style.opacity=""+u.opacity),u.translateY+=.25,u.opacity+=.1,u.opacity<=1&&o.requestAnimationFrame(a)}function r(){l.style.transform="translateY("+u.translateY+"px)",l.style.opacity=""+u.opacity,u.translateY+=.25,u.opacity+=.05,u.opacity<=1&&o.requestAnimationFrame(r),1<u.opacity&&(u.opacity=0,i.init(),o.requestAnimationFrame(a,2))}var n=e("./AnimationFrame"),i=e("./SolarSystem"),o=new n.AnimationFrame,s=document.querySelector("#progress-bar"),c=document.querySelector("#progress-bar-container"),l=document.querySelector(".heading"),m=document.querySelector(".subheading"),u={width:0,fontSize:24,opacity:0,translateY:40},n=function e(){s&&(s.style.width=u.width+"%"),u.width+=1,u.width<=100&&o.requestAnimationFrame(e),100<u.width&&(null!=c&&c.classList.add("hidden"),r())};o.requestAnimationFrame(n)},{"./AnimationFrame":1,"./SolarSystem":2}]},{},[3]);