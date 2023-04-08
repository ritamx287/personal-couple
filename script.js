const storyItems = document.querySelectorAll(".story-item");

storyItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("story-item-active");
  });
  
  item.addEventListener("mouseleave", () => {
    item.classList.remove("story-item-active");
  });
});
