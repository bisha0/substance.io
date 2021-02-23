/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
// ts-docs-start helper methods
// ts-docs-start loading method
function loading(element) {
    element.addEventListener("click", function () {
        element.classList.add("spinner");
        setTimeout(function () {
            element.classList.remove("spinner");
        }, 2000);
    });
}
// ts-docs-end loading method
// ts-docs-end helper methods
function main() {
    // ts-docs-start button ripple effect
    var buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var x = e.clientX - e.target.offsetLeft;
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
    // ts-docs-end button ripple effect
    // ts-docs-start navbar-toggle
    var navbars = document.querySelectorAll(".navbar");
    navbars.forEach(function (navbar) {
        var toggler = navbar.querySelector(".navbar-toggler");
        var collapse = navbar.querySelector(".navbar-collapse");
        toggler.addEventListener("click", function () {
            collapse.classList.toggle("show");
        });
    });
    // ts-docs-end navbar-toggle
    // ts-docs-start dropdown-toggle
    var dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
        var toggle = dropdown.querySelector(".dropdown-toggle");
        var menu = dropdown.querySelector(".dropdown-menu");
        // toggle.classList.add("icon angle-down");
        toggle.classList.add("icon");
        toggle.classList.add("angle-down");
        toggle.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
        window.addEventListener("click", function (e) {
            if (!e.target.matches(".dropdown-toggle")) {
                menu.classList.remove("show");
            }
        });
    });
    // ts-docs-end dropdown-toggle
    // ts-docs-start dialog-toggle
    var dialogToggles = document.querySelectorAll('[data-toggle~="dialog"]');
    dialogToggles.forEach(function (toggle) {
        var dialog = document.querySelector(toggle.dataset.target);
        var close = dialog.querySelectorAll("[data-close]");
        toggle.addEventListener("click", function () {
            dialog.classList.toggle("show");
        });
        close.forEach(function (el) {
            el.addEventListener("click", function () {
                dialog.classList.remove("show");
            });
        });
    });
    // ts-docs-end dialog-toggle
}
main();

/******/ })()
;
//# sourceMappingURL=substance.main.js.map