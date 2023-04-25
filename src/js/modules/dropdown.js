const dropdown = function(trigger, menuSelector, activeClass, aniClass) {
  const triggers = document.querySelectorAll(trigger),
    menu = document.querySelectorAll(menuSelector),
    header = document.querySelector(".header");

  function closeMenu() {
    menu.forEach(item => item.classList.remove(activeClass));
    triggers.forEach(item => item.classList.remove(aniClass));
  }

  triggers.forEach(item => {
    item.addEventListener("mouseenter", (event) => {
      if(item.nextElementSibling.classList.contains(menuSelector.slice(1))) {
        closeMenu();
        item.nextElementSibling.classList.add(activeClass);
        event.target.classList.add(aniClass);
      }
    });
    item.addEventListener("mouseleave", (event) => {
      triggers.forEach(item => item.classList.remove(aniClass));
      event.target.classList.add(aniClass);
    });
  });

  header.addEventListener("mouseleave", () => {
    closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
};

export default dropdown;
