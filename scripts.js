const skillsWrap = document.querySelectorAll(".skills-box-wrap");
const projectsWrap = document.querySelectorAll(".projects-wrap");

const options = {
    // will fade-in only after scrolling into 50% of the div, but not before.
  threshold: 0.5,
    // rootMargin: "-200px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    // console.log(entry);
    entry.target.classList.toggle("fade-in");
    observer.unobserve(entry.target);
  });
}, options);

skillsWrap.forEach((skill) => {
  observer.observe(skill);
});

projectsWrap.forEach((skill) => {
  observer.observe(skill);
});
