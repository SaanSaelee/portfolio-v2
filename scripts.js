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
