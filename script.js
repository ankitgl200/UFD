// alert("Hey Students! 🎉 Uttarakhand Foundation Day is here sooner than expected!\n\nTime to get ready, explore the new updates on the site. \nGear up, get excited, and be ready to join the celebrations!");



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


  // Get current hour
  const now = new Date();
  const hour = now.getHours();

  // Greeting logic
  let greeting = "";
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  // Message content
  const message = `${greeting} Sir, I hope you are doing well. I wanted to ask about the Quiz and Debate (Extempore) competition.`;
  const encodedMessage = encodeURIComponent(message);

  // Add phone numbers (include country code)
  const contacts = {
    sir1: "918295804400",
    sir2: "918958802870",
    sir3: "917455066384"
  };

  // Assign dynamic WhatsApp links
  for (let id in contacts) {
    const link = `https://wa.me/${contacts[id]}?text=${encodedMessage}`;
    document.getElementById(id).href = link;
  }

