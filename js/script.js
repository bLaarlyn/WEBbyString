/* =========================================
   ICON
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

});


/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 700);

});


/* =========================================
   NAVBAR
========================================= */

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const navigation =
    document.getElementById("navigation");

mobileMenu.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


document
    .querySelectorAll(".nav-link, .nav-button")
    .forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

        });

    });


/* =========================================
   SCROLL PROGRESS
========================================= */

const progress =
    document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    const top =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (top / height) * 100;

    progress.style.width =
        percent + "%";

});


/* =========================================
   REVEAL
========================================= */

const reveal =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


reveal.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAV
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".nav-link");

const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                links.forEach(link => {

                    link.classList.remove(
                        "active"
                    );

                });

                const current =
                    document.querySelector(
                        `.nav-link[href="#${entry.target.id}"]`
                    );

                if (current) {

                    current.classList.add(
                        "active"
                    );

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================
   HERO IMAGE PARALLAX
========================================= */

const photo =
    document.querySelector(".photo-frame");

if (photo) {

    photo.addEventListener(
        "mousemove",
        event => {

            const rect =
                photo.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                (x / rect.width - .5) * 5;

            const rotateX =
                (y / rect.height - .5) * -5;

            photo.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    photo.addEventListener(
        "mouseleave",
        () => {

            photo.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";

        }
    );

}


/* =========================================
   LIGHTBOX
========================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const closeLightbox =
    document.getElementById("closeLightbox");


document
    .querySelectorAll(".gallery-item")
    .forEach(item => {

        item.addEventListener("click", () => {

            lightboxImage.src =
                item.dataset.image;

            lightboxImage.alt =
                item.dataset.title;

            lightboxTitle.textContent =
                item.dataset.title;

            lightbox.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";

        });

    });


function closeGallery() {

    lightbox.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


closeLightbox.addEventListener(
    "click",
    closeGallery
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            closeGallery();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeGallery();

        }

    }
);


/* =========================================
   YEAR
========================================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();