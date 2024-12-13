onload = function () {
    document.querySelectorAll(".navbar-nav li a:not(.dropdown-toggle)").forEach((link) => {
        link.addEventListener("click", () => {
            const navbarResponsive = document.getElementById(
                "navbarSupportedContent"
            );
            if (navbarResponsive.classList.contains("show")) {
                const navbarToggler = document.querySelector(".navbar-toggler");
                setTimeout(() => {
                    navbarToggler.click();
                }, "000");
            }
        });
    });

    const navItems = document.querySelectorAll('ul.navbar-nav > li');

    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
        });
    });
}



