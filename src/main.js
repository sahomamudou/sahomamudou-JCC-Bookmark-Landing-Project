// TABS
document.querySelectorAll(".tab-button").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((btn) => {
      btn.classList.remove("border-b-2", "border-red-500", "w-12", "mx-auto");
    });

    tab.classList.add("border-b-2", "border-red-500", "w-12", "mx-auto");
  });
});

// FAQS
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".faq-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const faqItem = toggle.closest(".faq-item");
      const content = faqItem.querySelector(".faq-content");
      const icon = faqItem.querySelector("svg path");
      const question = faqItem.querySelector(".faq-question");

      const isExpanded = !content.classList.contains("hidden");

      document.querySelectorAll(".faq-content").forEach((item) => {
        item.classList.add("hidden");
      });
      document.querySelectorAll(".faq-question").forEach((q) => {
        q.classList.remove("!text-red-500");
      });
      document.querySelectorAll(".faq-item svg path").forEach((path) => {
        path.setAttribute("stroke", "#5267DF");
      });
      document.querySelectorAll(".faq-item svg").forEach((svg) => {
        svg.classList.remove("rotate-180");
      });

      if (!isExpanded) {
        content.classList.remove("hidden");
        question.classList.add("!text-red-500");
        icon.setAttribute("stroke", "red");
        faqItem.querySelector("svg").classList.add("rotate-180");
      }
    });
  });
});

// FORMS
document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();
  const errorIcon = document.getElementById("icon-error");
  const errorMessage = document.getElementById("email-error");

  // Simple Email Validation Pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailValue)) {
    // Hide error styles if correct
    errorIcon.classList.add("hidden");
    errorMessage.classList.add("hidden");

    // Show success notification
    alert("✅ Success! Your email is valid.");
  } else {
    // Show error message if incorrect
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
  }
});

// CLOSE ICON
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  function toggleMenu() {
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  }

  menuToggle.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);
});
