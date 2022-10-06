const intro = document.querySelectorAll(
    ".intro-bio, .intro-sub-bio__left, .intro-sub-bio__right"
);
const skills = document.querySelectorAll(".skills-title, .skills-box");
const projects = document.querySelectorAll(".projects-title, .project");
const schools = document.querySelectorAll(
    ".education-title, .school, .certs-title, .certs"
);
const contacts = document.querySelectorAll(
    ".profile-pic, .contact-title, .contact-details"
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
        console.log(entry);
        entry.target.classList.toggle("fade-in");
        observer.unobserve(entry.target);
    });
}, options);

intro.forEach((item) => {
    observer.observe(item);
});

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

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 0.85 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    heroTitle.style.marginRight = value * 4 + "px";
    heroTitle.style.marginTop = value * .5 + "px";
});
