// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Active Navigation Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if the scroll position is within the section
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 3. Quick Toast Notification for Email Copy
const emailText = "kuelkuol1@gmail.com";
const contactCard = document.querySelector('.contact-info p');

if (contactCard) {
    contactCard.style.cursor = "pointer";
    contactCard.title = "Click to copy email address";
    
    contactCard.addEventListener('click', () => {
        navigator.clipboard.writeText(emailText).then(() => {
            alert('Email address copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
}