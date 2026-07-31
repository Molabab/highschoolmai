/*==========================================
  +2 HIGH SCHOOL MAI
  script.js
==========================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==========================================
      MOBILE MENU
    ==========================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("nav ul");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    /*==========================================
      HERO SLIDER
    ==========================================*/

    const hero = document.querySelector(".hero");

    const images = [
        "images/slider1.jpg",
        "images/slider2.jpg",
        "images/slider3.jpg"
    ];

    let index = 0;

    function changeBackground() {
        if (!hero) return;

        hero.style.backgroundImage =
            `url('${images[index]}')`;

        hero.style.backgroundSize = "cover";
        hero.style.backgroundPosition = "center";

        index++;

        if (index >= images.length) {
            index = 0;
        }
    }

    changeBackground();

    setInterval(changeBackground, 5000);

    /*==========================================
      BACK TO TOP
    ==========================================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            if (topBtn)
                topBtn.style.display = "block";

        } else {

            if (topBtn)
                topBtn.style.display = "none";
        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*==========================================
      SMOOTH SCROLL
    ==========================================*/

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (href.startsWith("#")) {

                e.preventDefault();

                const target = document.querySelector(href);

                if (target) {

                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }

        });

    });

    /*==========================================
      SCROLL REVEAL
    ==========================================*/

    const revealItems = document.querySelectorAll(
        ".about, .card, .gallery img, .principal, .contact, .counter"
    );

    function revealOnScroll() {

        const trigger = window.innerHeight * 0.85;

        revealItems.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < trigger) {

                item.classList.add("fade-up", "active");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /*==========================================
      COUNTER
    ==========================================*/

    const counters = document.querySelectorAll(".counter h1");

    let counterStarted = false;

    function runCounter() {

        if (counterStarted) return;

        const counterSection = document.querySelector(".counter");

        if (!counterSection) return;

        const top = counterSection.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            counterStarted = true;

            counters.forEach(counter => {

                const text = counter.innerText.replace(/\D/g, "");

                const target = Number(text);

                let count = 0;

                const speed = target / 120;

                function update() {

                    count += speed;

                    if (count < target) {

                        counter.innerHTML = Math.floor(count) + "+";

                        requestAnimationFrame(update);

                    } else {

                        if (counter.innerText.includes("%")) {

                            counter.innerHTML = target + "%";

                        } else {

                            counter.innerHTML = target + "+";

                        }

                    }

                }

                update();

            });

        }

    }

    window.addEventListener("scroll", runCounter);

    runCounter();

    /*==========================================
      ACTIVE MENU
    ==========================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==========================================
      STICKY HEADER SHADOW
    ==========================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 8px 20px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow =
                "0 2px 10px rgba(0,0,0,.08)";

        }

    });

    /*==========================================
      GALLERY HOVER EFFECT
    ==========================================*/

    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.08)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

});

/*==========================================
  END OF SCRIPT
==========================================*/