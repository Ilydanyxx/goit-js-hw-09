!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){timer=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.setAttribute("disabled","")})),e.addEventListener("click",(function(){clearInterval(timer),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.d29894e9.js.map
