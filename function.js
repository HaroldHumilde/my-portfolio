document.addEventListener("DOMContentLoaded", () => {
    // Typing Effect
    const textElement = document.getElementById("typing-text");
    const texts = ["I'M Harold Humilde", "Web Designer", "Creative Thinker"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenTexts = 1000;

    function typeEffect() {
        const currentText = texts[index];
        textElement.innerHTML = currentText.substring(0, charIndex) + "<span class='cursor'>|</span>";

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            speed = deletingSpeed;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            speed = delayBetweenTexts;
        }

        charIndex += isDeleting ? -1 : 1;
        setTimeout(typeEffect, speed);
    }

    typeEffect();

    // Progress Circle Animation
    // Set progress circle based on data-progress
const circles = document.querySelectorAll(".progress-circle");

circles.forEach(circle => {
    const progress = circle.getAttribute("data-progress");
    circle.style.setProperty("--progress", progress);
});


    // Particles.js Effect
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffb400"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.6,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffb400",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                }
            }
        }
    });

    // Contact Form Submission Handling
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh
            fetch(this.action, {
                method: this.method,
                body: new FormData(this)
            }).then(response => {
                contactForm.reset(); // Clear the form fields
                contactForm.style.display = "none";
                document.getElementById("success-message").style.display = "block";
            });
        });
    }
});

