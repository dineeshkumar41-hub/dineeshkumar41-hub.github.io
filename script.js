/* ==========================================
   PORTFOLIO WEBSITE JAVASCRIPT
   Dinesh Kumar Portfolio
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if(menuBtn && navbar){

        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {
                navbar.classList.remove("active");
            });

        });
    }

    /* ==========================================
       STICKY HEADER
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.08)";

            header.style.background =
                "rgba(255,255,255,0.98)";

        } else {

            header.style.boxShadow =
                "0 2px 20px rgba(0,0,0,0.05)";

            header.style.background =
                "rgba(255,255,255,0.95)";
        }

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const backToTop =
        document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 400){

            backToTop.style.display = "flex";
            backToTop.style.alignItems = "center";
            backToTop.style.justifyContent = "center";

        } else {

            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.clientHeight;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if(
                link.getAttribute("href")
                === `#${current}`
            ){

                link.classList.add("active");
            }

        });

    });

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const statNumbers =
        document.querySelectorAll(".stat-box h3");

    let counterStarted = false;

    function startCounters(){

        if(counterStarted) return;

        const statsSection =
            document.querySelector(".stats-container");

        const sectionTop =
            statsSection.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            counterStarted = true;

            statNumbers.forEach(counter => {

                let target =
                    counter.innerText.replace(/\D/g,'');

                target = Number(target);

                if(target === 0) return;

                let count = 0;

                const speed =
                    target / 100;

                const updateCounter = () => {

                    if(count < target){

                        count += speed;

                        counter.innerText =
                            Math.ceil(count) + "+";

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.innerText =
                            target + "+";
                    }

                };

                updateCounter();

            });

        }

    }

    window.addEventListener(
        "scroll",
        startCounters
    );

    startCounters();

    /* ==========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements =
        document.querySelectorAll(
            ".skill-card, .project-card, .achievement-card, .education-card, .timeline-content, .contact-card"
        );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform =
            "translateY(40px)";
        el.style.transition =
            "all 0.7s ease";

    });

    function revealOnScroll(){

        revealElements.forEach(el => {

            const top =
                el.getBoundingClientRect().top;

            const windowHeight =
                window.innerHeight;

            if(top < windowHeight - 100){

                el.style.opacity = "1";
                el.style.transform =
                    "translateY(0)";
            }

        });

    }

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

    /* ==========================================
       SKILL BAR ANIMATION
    ========================================== */

    const progressBars =
        document.querySelectorAll(".progress-fill");

    let skillAnimated = false;

    function animateSkills(){

        if(skillAnimated) return;

        const skills =
            document.querySelector(".skills");

        const position =
            skills.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            skillAnimated = true;

            progressBars.forEach(bar => {

                const width =
                    bar.classList.contains("fill-95")
                    ? "95%"
                    : bar.classList.contains("fill-92")
                    ? "92%"
                    : bar.classList.contains("fill-90")
                    ? "90%"
                    : bar.classList.contains("fill-85")
                    ? "85%"
                    : "80%";

                bar.style.width = "0";

                setTimeout(() => {

                    bar.style.width = width;

                }, 200);

            });

        }

    }

    window.addEventListener(
        "scroll",
        animateSkills
    );

    animateSkills();

    /* ==========================================
       CONTACT FORM
    ========================================== */

    const contactForm =
        document.querySelector(".contact-form");

    if(contactForm){

        contactForm.addEventListener(
            "submit",
            (e) => {

                e.preventDefault();

                const inputs =
                    contactForm.querySelectorAll(
                        "input, textarea"
                    );

                let valid = true;

                inputs.forEach(input => {

                    if(
                        input.value.trim() === ""
                    ){

                        valid = false;

                        input.style.border =
                            "1px solid red";

                    } else {

                        input.style.border =
                            "1px solid #dbe3f0";
                    }

                });

                if(valid){

                    alert(
                        "Thank you for contacting Dinesh Kumar. Your message has been submitted successfully."
                    );

                    contactForm.reset();
                }

            }
        );
    }

    /* ==========================================
       SMOOTH SCROLLING
    ========================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function(e){

                    e.preventDefault();

                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );

                    if(target){

                        window.scrollTo({
                            top:
                                target.offsetTop - 70,
                            behavior:"smooth"
                        });
                    }
                }
            );

        });

    /* ==========================================
       CURRENT YEAR AUTO UPDATE
    ========================================== */

    const footerYear =
        document.querySelector(
            ".footer-bottom p"
        );

    if(footerYear){

        const year =
            new Date().getFullYear();

        footerYear.innerHTML =
            `© ${year} Dinesh Kumar. All Rights Reserved.`;
    }

    /* ==========================================
       PAGE LOADED EFFECT
    ========================================== */

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 0.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});
