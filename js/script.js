// Highlight nav item when in view
const sections = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".Navigation-Bar a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      document
        .querySelector(`.Navigation-Bar a[href="#${entry.target.id}"]`)
        .classList.add("active");
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

// Smooth scroll
document.querySelectorAll(".Navigation-Bar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple form feedback (non-functional demo)
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Message sent successfully!");
});
