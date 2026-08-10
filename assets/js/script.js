```javascript
document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section[id]");


    /* =========================================================
       SMOOTH SCROLL
    ========================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================================================
       ACTIVE NAVIGATION ON SCROLL
    ========================================================== */

    const updateActiveSection = () => {

        const scrollPosition =
            window.scrollY + window.innerHeight * 0.35;

        let currentSection = sections[0];

        sections.forEach(section => {

            const sectionTop = section.offsetTop;

            if (scrollPosition >= sectionTop) {
                currentSection = section;
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection.id}`
            ) {
                link.classList.add("active");
            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveSection,
        { passive: true }
    );


    updateActiveSection();


    /* =========================================================
       CLOSE MOBILE MENU / UPDATE HASH
    ========================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            const targetId = link.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                history.replaceState(
                    null,
                    "",
                    targetId
                );

            }

        });

    });

});
```
