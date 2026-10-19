
// Replace this with your real WhatsApp number.
// Use the country code and remove the first zero.
const whatsappNumber = "2348139301024";

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("active");
  
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu when a navigation link is clicked
navbar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Update copyright year automatically
document.getElementById("year").textContent =
  new Date().getFullYear();

// Set the floating WhatsApp button
document.getElementById("whatsappBtn").href =
  `https://wa.me/${whatsappNumber}?text=` +
  encodeURIComponent("Hello! I visited your portfolio.");

// Send contact form details to WhatsApp
document.getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const text =
      `Hello! My name is ${name}.\n` +
      `My email is ${email}.\n\n` +
      `My message: ${message}`;

    const url =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(text);

    window.open(url, "_blank", "noopener,noreferrer");
  });
