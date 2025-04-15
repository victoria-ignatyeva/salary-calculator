const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
const menuIcon = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menuIcon.src = "src/images/menu-close.svg";
  } else {
    menuIcon.src = "src/images/menu-icon.svg";
  }
});

// Закрытие меню при клике вне его
document.body.addEventListener("click", (event) => {
  // Проверяем, был ли клик вне меню и кнопки меню
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    // Закрываем меню, если клик был вне
    menu.classList.remove("active");
    menuIcon.src = "src/images/menu-icon.svg";
  }
});
