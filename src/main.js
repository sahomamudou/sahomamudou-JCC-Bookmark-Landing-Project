// TABS
document.querySelectorAll(".tab-button").forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetTab = tab.getAttribute("data-tab");

    // Remove active styles from all tabs
    document.querySelectorAll(".tab-button").forEach((btn) => {
      btn.classList.remove("border-b-2", "tab-red");
    });

    // Add active style to clicked tab
    tab.classList.add("border-b-2", "tab-red");

    // Hide all tab content
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.add("hidden");
    });

    // Show the corresponding tab content
    document.getElementById(targetTab).classList.remove("hidden");
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
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact");
  const emailInput = document.getElementById("email");
  const errorIcon = document.getElementById("icon-error");
  const errorMessage = document.getElementById("email-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      errorIcon.classList.remove("hidden");
      errorMessage.classList.remove("hidden");

      emailInput.classList.add(
        "tab-red",
        "bg-red",
        "text-white",
        "placeholder-white",
        "pt-6",
        "pb-2"
      );
    } else {
      errorIcon.classList.add("hidden");
      errorMessage.classList.add("hidden");

      emailInput.classList.remove(
        "tab-red",
        "bg-red",
        "text-white",
        "placeholder-white",
        "pt-6",
        "pb-2"
      );
    }
  });
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
