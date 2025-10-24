alert("Hey Students! 🎉 Uttarakhand Foundation Day is here sooner than expected!\n\nTime to get ready, explore the new updates on the site. \nGear up, get excited, and be ready to join the celebrations!");



const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Hamburger menu toggle
menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });
});



// Start quiz function
function startQuiz(category) {
    alert(`🎉 Starting ${category} Quiz!\n\nThis is a demo. In the full version, you would be redirected to the quiz page for ${category}.`);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
