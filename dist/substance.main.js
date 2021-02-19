/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
// js-docs-start button ripple effect
var buttons = document.querySelectorAll(".btn");
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        var x = e.clientX - e.target.offsetTop;
        var y = e.clientY - e.target.offsetTop;
        var ripples = document.createElement("span");
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        ripples.classList.add("ripple");
        button.appendChild(ripples);
        setTimeout(function () {
            ripples.remove();
        }, 1000);
    });
});
// js-docs-end button ripple effect

/******/ })()
;
//# sourceMappingURL=substance.main.js.map