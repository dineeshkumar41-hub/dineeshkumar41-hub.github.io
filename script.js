
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 1200);

});



const texts = [

    "Data Analyst",
    "Power BI Developer",
    "SQL Specialist",
    "Python Developer",
    "Business Intelligence Analyst",
    "Machine Learning Enthusiast"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {

        count = 0;

    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1800);

    } else {

        setTimeout(type, 100);

    }

})();



const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        const updateCount = () => {

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(updateCount, 10);

            } else {

                if (target >= 1000) {

                    counter.innerText =
                        target.toLocaleString() + "+";

                } else {

                    counter.innerText = target + "+";

                }

            }

        };

        updateCount();

    });

};



const statsSection = document.querySelector(".stats-section");

let statsStarted = false;

const statsObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !statsStarted) {

            startCounter();

            statsStarted = true;

        }

    });

});

if (statsSection) {

    statsObserver.observe(statsSection);

}



const revealElements = document.querySelectorAll(

    ".section-title, .skill-card, .project-card, .cert-card, .domain-card, .timeline-item, .stat-card, .why-grid div"

);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 80) {

        nav.style.padding = "15px 8%";

        nav.style.background =
            "rgba(2,6,23,0.97)";

        nav.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

    } else {

        nav.style.padding = "20px 8%";

        nav.style.background =
            "rgba(2,6,23,.9)";

        nav.style.boxShadow = "none";

    }

});



const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

    });

}



document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove(
                "mobile-active"
            );

        });

    });



const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (

            link.getAttribute("href") ===
            "#" + current

        ) {

            link.classList.add("active-link");

        }

    });

});



const heroImage =
    document.querySelector(".hero-right img");

window.addEventListener("mousemove", e => {

    if (!heroImage) return;

    let x =
        (window.innerWidth / 2 - e.pageX) / 40;

    let y =
        (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});



const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});



const footerText =
    document.querySelector("footer p");

if (footerText) {

    const year =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${year} Shalini Jakkam | Data Analyst Portfolio`;

}

console.log(
    "%cPortfolio Loaded Successfully ",
    "color:#38bdf8;font-size:16px;font-weight:bold;"
);