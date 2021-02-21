// ts-docs-start helper methods
// ts-docs-start loading method
function loading(element: HTMLElement) {
    element.addEventListener("click", () => {
        element.classList.add("spinner");
        setTimeout(() => {
            element.classList.remove("spinner");
        }, 2000);
    });
}
// ts-docs-end loading method
// ts-docs-end helper methods

function main() {
    // ts-docs-start button ripple effect
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener("click", (e: any) => {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement("span");
            ripples.style.left = x + "px";
            ripples.style.top = y + "px";

            ripples.classList.add("ripple");
            button.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });
    });
    // ts-docs-end button ripple effect

    // ts-docs-start navbar-toggle
    const navbars = document.querySelectorAll(".navbar");

    navbars.forEach((navbar) => {
        const toggler = navbar.querySelector(".navbar-toggler");
        const collapse = navbar.querySelector(".navbar-collapse");

        toggler.addEventListener("click", () => {
            collapse.classList.toggle("show");
        });
    });
    // ts-docs-end navbar-toggle

    // ts-docs-start dropdown-toggle
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        const menu = dropdown.querySelector(".dropdown-menu");

        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        window.addEventListener("click", (e: any) => {
            if (!e.target.matches(".dropdown-toggle")) {
                menu.classList.remove("show");
            }
        });
    });
    // ts-docs-end dropdown-toggle
}

main();
