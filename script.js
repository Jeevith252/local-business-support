// script.js
// Purpose: Handle contact form submission in the browser

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Find the form element on the page
  const form = document.querySelector("form");

  // Attach a "listener" to watch when the form is submitted
  form.addEventListener("submit", (event) => {
    // Stop the page from refreshing
    event.preventDefault();

    // Get values from the form fields
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Show a thank-you message
    alert(`Thank you, ${name}! We received your message:\n"${message}"\nWe will reply to ${email}.`);
  });
});
