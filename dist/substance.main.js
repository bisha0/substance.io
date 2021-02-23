"use strict";

var buttons = document.querySelectorAll(".btn");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;
    var ripple = document.createElement("span");
    ripple.style.left = "".concat(x, "px");
    ripple.style.top = "".concat(y, "px");
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(function () {
      ripple.remove();
    }, 1000);
  });
});
var dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(function (dropdown) {
  var toggle = dropdown.querySelector('[data-toggle~="dropdown"]');
  var menu = dropdown.querySelector(".dropdown-menu");
  toggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
  window.addEventListener("click", function (e) {
    if (!e.target.matches('[data-toggle~="dropdown"]')) {
      menu.classList.remove("show");
    }
  });
});
var modalToggles = document.querySelectorAll('[data-toggle~="modal"]');
modalToggles.forEach(function (toggle) {
  var modal = document.querySelector(toggle.dataset.target);
  var closeEls = document.querySelectorAll("[data-close]");
  toggle.addEventListener("click", function () {
    modal.classList.toggle("show");
  });
  closeEls.forEach(function (closeEl) {
    closeEl.addEventListener("click", function () {
      modal.classList.remove("show");
    });
  });
});