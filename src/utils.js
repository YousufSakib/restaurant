export const scrollAnimation = () => {
  const elements = document.querySelectorAll(".scroll-animate");

  const observerOptions = {
    root: null,  // Defaults to the viewport
    rootMargin: '0px 0px -20px 0px',  // Trigger when the element is 20px from the bottom of the viewport
    threshold: 0.1  // 10% of the element must be visible
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.visibility = "visible";  // Or use opacity for smoother animations
        entry.target.classList.add("animate__active");
        observer.unobserve(entry.target);  // Stop observing after it becomes visible
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, observerOptions);

  elements.forEach(element => {
    observer.observe(element);
  });
};


// Sticky nav
export const stickyNav = () => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".kf-header");
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (stick) {
        if (offset > 10) {
          stick.classList.add("fixed");
        } else {
          stick.classList.remove("fixed");
        }
      }
    }
  });
};
