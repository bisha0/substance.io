function main() {
    // js-docs-start button ripple effect
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
    // js-docs-end button ripple effect
}

main();
