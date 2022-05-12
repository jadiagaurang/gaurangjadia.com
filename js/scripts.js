window.addEventListener("DOMContentLoaded", event => {
    const arrayJokeOfTheDay = ["1.jpg", "2.jpg", "3.png", "4.png", "5.png", "6.png", "7.png", "8.jpg", "9.jpg"];
    const random = Math.floor(Math.random() * arrayJokeOfTheDay.length);
    document.getElementById("id-thought-of-the-day").src = "assets/img/art-programming/" + arrayJokeOfTheDay[random];

    // Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        const objScrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            offset: 72,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });
});