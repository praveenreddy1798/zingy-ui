const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger-close");
const sidebar = document.querySelector(".sidebar");

// functions
const mobileMenuClick = () => {
  sidebar.classList.contains("sidebar-mobile")
    ? sidebar.classList.remove("sidebar-mobile")
    : sidebar.classList.add("sidebar-mobile");
  hamburger.classList.contains("display-none-mobile")
    ? hamburger.classList.remove("display-none-mobile")
    : hamburger.classList.add("display-none-mobile");
  hamburgerClose.classList.contains("display-item-mobile")
    ? hamburgerClose.classList.remove("display-item-mobile")
    : hamburgerClose.classList.add("display-item-mobile");
};

//   event listener
hamburger.addEventListener("click", mobileMenuClick);
hamburgerClose.addEventListener("click", mobileMenuClick);
