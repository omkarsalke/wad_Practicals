document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector("#menu-toggle");
    const wrapper = document.querySelector("#wrapper");
    const icon = menuToggle.querySelector('i');

    menuToggle.addEventListener("click", e => {
        e.preventDefault();
        wrapper.classList.toggle("toggled");
        
        // Toggle the arrow icon direction
        if (wrapper.classList.contains("toggled")) {
            icon.classList.replace("bi-chevron-left", "bi-chevron-right");
        } else {
            icon.classList.replace("bi-chevron-right", "bi-chevron-left");
        }
    });
});