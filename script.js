// icons slider
const iconSlider = {
  container: document.querySelector(".list-icon-container"),
  leftArrow: document.querySelector(".left-arrow"),
  rightArrow: document.querySelector(".right-arrow"),
  scrollAmount: 600,
};

iconSlider.leftArrow.style.visibility = "hidden";

iconSlider.leftArrow.addEventListener("click", () => {
  iconSlider.container.scrollBy({
    left: -iconSlider.scrollAmount,
    behavior: "smooth",
  });
  checkArrows(iconSlider);
});

iconSlider.rightArrow.addEventListener("click", () => {
  iconSlider.container.scrollBy({
    left: iconSlider.scrollAmount,
    behavior: "smooth",
  });
  checkArrows(iconSlider);
});

function checkArrows(slider) {
  const { container, leftArrow, rightArrow } = slider;
  const scrollPosition = container.scrollLeft;
  const containerWidth = container.offsetWidth;
  const scrollWidth = container.scrollWidth;

  if (scrollPosition === 0) {
    leftArrow.style.visibility = "hidden";
    rightArrow.style.visibility = "visible";
  } else if (scrollPosition + containerWidth >= scrollWidth) {
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "hidden";
  } else {
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "visible";
  }
}

// event listener for touch
iconSlider.container.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const scrollPosition = iconSlider.container.scrollLeft;
  const containerWidth = iconSlider.container.offsetWidth;
  const scrollWidth = iconSlider.container.scrollWidth;

  if (touch.clientX < containerWidth / 2) {
    iconSlider.container.scrollBy({
      left: -iconSlider.scrollAmount,
      behavior: "smooth",
    });
  } else {
    iconSlider.container.scrollBy({
      left: iconSlider.scrollAmount,
      behavior: "smooth",
    });
  }

  checkArrows(iconSlider);
});

// Event listeners for desktop arrow
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    iconSlider.container.scrollBy({
      left: -iconSlider.scrollAmount,
      behavior: "smooth",
    });
  } else if (e.key === "ArrowRight") {
    iconSlider.container.scrollBy({
      left: iconSlider.scrollAmount,
      behavior: "smooth",
    });
  }

  checkArrows(iconSlider);
});
