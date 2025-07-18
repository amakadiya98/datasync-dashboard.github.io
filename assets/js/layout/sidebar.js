function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar-section");
    const header = document.querySelector(".header-section");
    const mainContent = document.querySelector(".main-content");
    const isCollapsing = !sidebar.classList.contains("collapsed");

    sidebar.classList.toggle("collapsed");
    header?.classList.toggle("collapsed");
    mainContent?.classList.toggle("collapsed");
    if (isCollapsing) {
        document.querySelectorAll(".hidecontent").forEach(el => {
            el.style.display = "none";
        });

        document.querySelectorAll(".accordion-collapse.show").forEach(el => {
            const collapseInstance = bootstrap.Collapse.getInstance(el) ||
                new bootstrap.Collapse(el, { toggle: false });
            collapseInstance.hide();
        });

        document.querySelectorAll(".accordion-button").forEach(btn => {
            btn.classList.add("collapsed");
            btn.setAttribute("aria-expanded", "false");
        });
    } else {
        setTimeout(() => {
            document.querySelectorAll(".hidecontent").forEach(el => {
                el.style.display = "block";
            });
        }, 100);
    }
}

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function (e) {
        const sidebar = document.querySelector('.sidebar-section');
        const header = document.querySelector('.header-section');
        const mainContent = document.querySelector('.main-content');
        const isCollapsed = sidebar.classList.contains('collapsed');

        if (isCollapsed) {
            e.preventDefault();

            sidebar.classList.remove('collapsed');
            header?.classList.remove('collapsed');
            mainContent?.classList.remove('collapsed');

            setTimeout(() => {
                document.querySelectorAll(".hidecontent").forEach(el => {
                    el.style.display = "block";
                });

                this.click();
            }, 200);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const submenuLinks = document.querySelectorAll(".submenu .link-btn");

    submenuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            if (this.classList.contains("active")) {
                this.classList.remove("active");
            } else {
                submenuLinks.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    document.addEventListener("click", function (e) {
        const isClickInside = e.target.closest(".submenu");
        if (!isClickInside) {
            submenuLinks.forEach(l => l.classList.remove("active"));
        }
    });
});