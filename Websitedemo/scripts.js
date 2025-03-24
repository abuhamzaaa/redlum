// Lazy Loading for Images
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-load");

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 1, // Trigger when 25% of the image is visible
  };

  // Callback function for the Intersection Observer
  const lazyLoad = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        console.log("Loading image:", img.dataset.src); // Debugging log

        // Load the actual image
        img.src = img.dataset.src;

        // Remove the lazy-load class and change background color (optional)
        img.classList.remove("lazy-load");
        img.style.backgroundColor = "transparent"; // Change to transparent or remove this line

        // Stop observing the image
        observer.unobserve(img);
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(lazyLoad, options);

  // Observe each lazy-loaded image
  lazyImages.forEach((img) => {
    observer.observe(img);
  });
});

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Show 1 slide by default
  spaceBetween: 20, // Space between slides
  loop: true, // Infinite loop
  pagination: {
    el: ".swiper-pagination", // Pagination dots
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next button
    prevEl: ".swiper-button-prev", // Previous button
  },
  breakpoints: {
    // Responsive breakpoints
    768: {
      slidesPerView: 2, // Show 2 slides on tablets
    },
    992: {
      slidesPerView: 3, // Show 3 slides on desktops
    },
  },
});
