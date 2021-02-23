const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add("ripple");
        button.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('[data-toggle~="dropdown"]');
    const menu = dropdown.querySelector(".dropdown-menu");
    toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
    window.addEventListener("click", (e) => {
        if (!e.target.matches('[data-toggle~="dropdown"]')) {
            menu.classList.remove("show");
        }
    });
});

const modalToggles = document.querySelectorAll('[data-toggle~="modal"]');

modalToggles.forEach((toggle) => {
    const modal = document.querySelector(toggle.dataset.target);
    const closeEls = document.querySelectorAll("[data-close]");
    toggle.addEventListener("click", () => {
        modal.classList.toggle("show");
    });
    closeEls.forEach((closeEl) => {
        closeEl.addEventListener("click", () => {
            modal.classList.remove("show");
        });
    });
});
