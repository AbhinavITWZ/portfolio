$(document).ready(function() {
    // Sticky Navbar on Scroll
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-Up Button Show/Hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    

    // Scroll-Up Button Click
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 }, 800);
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Applying Smooth Scroll on Menu Items Click
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle Menu/Navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing Text Animation
    new Typed(".typing", {
        strings: ["Web Developer", "DSA Enthusiast", "Problem Solver", "Tech Lover", "Lifelong Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Web Developer", "DSA Enthusiast", "Problem Solver", "Tech Lover", "Lifelong Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel Initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Typewriter Effect for the "About Me" Section
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: [
            "I am a web developer.",
            "I am a DSA enthusiast.",
            "I am a problem solver.",
            "I am a tech lover.",
            "I am a lifelong learner."
        ],
        typeSpeed: 100,  // Speed of typing
        backSpeed: 60,   // Speed of backspacing
        backDelay: 1000, // Delay before starting to backspace
        startDelay: 500, // Delay before typing starts
        loop: true,      // Infinite loop
        showCursor: false // Show blinking cursor
    };

    new Typed("#typewriter-text", options);
});

//skills

document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        const progress = card.querySelector('.progress');
        const skillValue = card.getAttribute('data-skill');

        // Simulate loading animation
        setTimeout(() => {
            progress.style.width = `${skillValue}%`;
        }, 100);
    });
});
 ///project section 
 
  document.querySelectorAll('.project-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const imgSrc = this.src;
      const lightbox = document.createElement('div');
      lightbox.style.position = 'fixed';
      lightbox.style.top = '0';
      lightbox.style.left = '0';
      lightbox.style.width = '100%';
      lightbox.style.height = '100%';
      lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      lightbox.style.display = 'flex';
      lightbox.style.alignItems = 'center';
      lightbox.style.justifyContent = 'center';
      lightbox.style.cursor = 'pointer';
      
      const img = document.createElement('img');
      img.src = imgSrc;
      img.style.maxWidth = '90%';
      img.style.maxHeight = '80%';
      lightbox.appendChild(img);
      
      lightbox.addEventListener('click', () => {
        lightbox.remove();
      });
      
      document.body.appendChild(lightbox);
    });
  });

//contact 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResponse').textContent = 'Thank you for reaching out, ' + name + '! I will get back to you shortly.';
        document.getElementById('formResponse').style.color = '#28a745'; // Green for success
        document.getElementById('contactForm').reset(); // Reset the form
    } else {
        document.getElementById('formResponse').textContent = 'Please fill out all fields.';
        document.getElementById('formResponse').style.color = '#dc3545'; // Red for error
    }
});


// JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var contactBtn = document.getElementById('contact-btn');
    var contactInfo = document.getElementById('contact-info');

    contactBtn.addEventListener('click', function() {
        if (contactInfo.classList.contains('hidden')) {
            contactInfo.classList.remove('hidden');
            contactInfo.classList.add('show');
        } else {
            contactInfo.classList.remove('show');
            contactInfo.classList.add('hidden');
        }
    });
});
