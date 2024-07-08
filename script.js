document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const backdrop = document.querySelector(".menu-backdrop");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");

    // Display Backdrop
    backdrop.classList.toggle("display-backdrop");
  });

  backdrop.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
    backdrop.classList.remove("display-backdrop");
  });
});

// type effect
let i = 0;
let txt = "web developer";
let txt2 = "software architect";
let txt3 = "graphics designer";
let textArray = [txt, txt2, txt3];
let textIndex = 0;
let speed = 40;
let currentText = textArray[textIndex];

function typeWriter() {
  if (i < currentText.length) {
    document.getElementById("roles").innerHTML += currentText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Check if the end of the array is reached
    if (textIndex < textArray.length - 1) {
      textIndex++;
    } else {
      textIndex = 0; // Reset to the first text
    }
    currentText = textArray[textIndex];
    i = 0;
    setTimeout(() => {
      document.getElementById("roles").innerHTML = "";
      typeWriter();
    }, 2000); // Wait for 2 seconds before clearing the text and starting the next part
  }
}

typeWriter(); // Start the typewriter effect immediately

// skill animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const skillBoxes = document.querySelectorAll('.skill-box');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  skillBoxes.forEach(box => {
    observer.observe(box);
  });
});

// projects
function realWorld() {
  document.getElementById("real-world-space").style.display = "grid";
  document.getElementById("graphics-space").style.display = "none";

  document.getElementById("real-world-projects").classList.add("active");
  document.getElementById("gd-projects").classList.remove("active");
}

function gdProject() {
  document.getElementById("real-world-space").style.display = "none";
  document.getElementById("graphics-space").style.display = "grid";

  document.getElementById("real-world-projects").classList.remove("active");
  document.getElementById("gd-projects").classList.add("active");
}

// web project viewer
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".view-repo-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      const repoUrl = this.getAttribute("data-repo-url");
      if (repoUrl) {
        window.open(repoUrl, "_blank");
      }
    });
  });

  document.querySelectorAll(".live-link-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      const liveUrl = this.getAttribute("data-live-url");
      if (liveUrl) {
        window.open(liveUrl, "_blank");
      }
    });
  });
});

// scroll animation
AOS.init();