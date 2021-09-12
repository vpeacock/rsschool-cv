(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header-menu");
  const menuClose = document.querySelector(".header-menu-close");
  const menuLinks = document.querySelectorAll(".header-menu-link");
  const menuLinksArr = Array.from(menuLinks);
  burger.addEventListener("click", () => {
    menu.classList.add("header-menu_active");
  });
  menuClose.addEventListener("click", () => {
    menu.classList.remove("header-menu_active");
  });
  if (window.innerWidth <= 767) {
    for (let link of menuLinksArr) {
      link.addEventListener("click", () => {
        menu.classList.remove("header-menu_active");
      });
    }
  }
})();
