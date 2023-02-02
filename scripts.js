// Dynamic Copyright Year Footer
const copyright = document.querySelector(".copyright-year");
const d = new Date();
const copyrightYear = d.getFullYear();

copyright.innerHTML = copyrightYear;

// Intersection Observer
const intro = document.querySelectorAll(".intro-bio, .intro-bio-text");
const skills = document.querySelectorAll(".skills-title, .skills-box");
const projects = document.querySelectorAll(".projects-title, .project");
const schools = document.querySelectorAll(
    ".education-title, .school, .certs-title, .certs"
);
const contacts = document.querySelectorAll(
    ".profile-pic, .contact-title, .contact-bio, .contact-details"
);

const options = {
    root: null,
    threshold: 0.4,
    rootMargin: "0px",
};  
            
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle("fade-in");
        observer.unobserve(entry.target);
    });
}, options);

intro.forEach((intro) => {
    observer.observe(intro);
})


skills.forEach((skill) => {
    observer.observe(skill);
});

projects.forEach((project) => {
    observer.observe(project);
});

schools.forEach((school) => {
    observer.observe(school);
});

contacts.forEach((contact) => {
    observer.observe(contact);
});

// Parallax scrolling

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let heroTitle = document.getElementById("hero__title");
let mountains_front = document.getElementById("mountains_front");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 0.85 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 3 + "px";
    heroTitle.style.marginRight = value * 4 + "px";
    heroTitle.style.marginTop = value * 0.5 + "px";
    bird1.style.top = value * -1.5 + "px";
    bird1.style.left = value * 2 + "px";
    bird2.style.top = value * -1.5 + "px";
    bird2.style.left = value * -5 + "px";
});

$(window).scroll(function () {
    //if I scroll more than 1000px...
    if ($(window).scrollTop() > 500) {
        //Then change the elements position to fixed:
        $("#mountains_front").css("position", "fixed");
    }
});
