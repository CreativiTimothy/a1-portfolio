"use strict";

/**
 * Portfolio functions
 * ----------------------
 * Insert the current year in the footer.
 * Filter creative work by category.
 * Open artwork upon interaction in a larger Bootstrap modal.
 * Contact form with "mailto" function.
 */

// Display the current year automatically so the footer stays current.
const yearElement = document.querySelector("#year");
yearElement.textContent = new Date().getFullYear();

// ---------------------------------------------------------------------
// Creative-work filtering
// ---------------------------------------------------------------------
const filterButtons = document.querySelectorAll(".filters button");
const portfolioCards = document.querySelectorAll(".work");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    // Visually identify the button for the category currently displayed.
    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });
    button.classList.add("active");

    // The All category displays every card. Other categories display only
    // cards whose data-category value matches the selected filter.
    portfolioCards.forEach((card) => {
      const belongsToCategory = card.dataset.category === selectedCategory;
      card.hidden = selectedCategory !== "all" && !belongsToCategory;
    });
  });
});

// ---------------------------------------------------------------------
// Artwork modal
// ---------------------------------------------------------------------
const artworkModal = new bootstrap.Modal("#artModal");
const largeArtwork = document.querySelector("#largeArt");
const artworkButtons = document.querySelectorAll(".art");

artworkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Each thumbnail stores the full image path in its data-src attribute.
    largeArtwork.src = button.dataset.src;
    artworkModal.show();
  });
});

// ---------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------
const contactForm = document.querySelector("#form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Ask the browser to show its normal validation messages first.
  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);
  const visitorName = formData.get("name");
  const visitorEmail = formData.get("email");
  const subject = encodeURIComponent(formData.get("subject"));
  const message = formData.get("message");

  // Include the visitor's contact information at the bottom of the message.
  const emailBody = encodeURIComponent(
    `${message}\n\nFrom: ${visitorName} (${visitorEmail})`,
  );

  // Recipient of contact form set to me + "mailto" setup.
  const recipient = "CreativiTimothy@gmail.com";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${emailBody}`;
});
