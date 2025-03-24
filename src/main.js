document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button"); // Select all the tab buttons
  const contents = document.querySelectorAll(".tab-content"); // Select all the tab content sections

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.getAttribute("data-tab"); // Get the tab's target content

      // Remove active styles from all tabs
      tabs.forEach((t) => {
        t.classList.remove("border-b-2", "tab-red");
        t.classList.add("text-gray-700"); // Reset to inactive styles
      });

      // Hide all content sections
      contents.forEach((content) => content.classList.add("hidden"));

      // Add active styles to the clicked tab
      tab.classList.add("border-b-2", "tab-red");
      tab.classList.remove("text-gray-700"); // Remove the inactive style

      // Show the content associated with the clicked tab
      document.getElementById(targetTab).classList.remove("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".faq-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const faqItem = toggle.closest(".faq-item");
      const content = faqItem.querySelector(".faq-content");
      const icon = faqItem.querySelector("svg path");
      const question = faqItem.querySelector(".faq-question");

      const isExpanded = !content.classList.contains("hidden");

      // Close all other FAQ items
      document.querySelectorAll(".faq-content").forEach((item) => {
        item.classList.add("hidden"); // Hide content
      });
      document.querySelectorAll(".faq-question").forEach((q) => {
        q.classList.remove("!text-red-500"); // Reset question text color
      });
      document.querySelectorAll(".faq-item svg path").forEach((path) => {
        path.setAttribute("stroke", "#5267DF"); // Reset stroke color to blue
      });
      document.querySelectorAll(".faq-item svg").forEach((svg) => {
        svg.classList.remove("rotate-180"); // Reset rotation
      });

      // Toggle the clicked FAQ
      if (!isExpanded) {
        content.classList.remove("hidden"); // Show content
        question.classList.add("!text-red-500"); // Turn question text red
        icon.setAttribute("stroke", "red"); // Change stroke color to red
        faqItem.querySelector("svg").classList.add("rotate-180"); // Rotate the arrow
      }
    });
  });
});
