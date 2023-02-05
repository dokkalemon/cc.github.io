const headerRef = document.querySelector("header");
const buttonUpRef = document.querySelector(".back-up-container");
const scrollWindow = () => {
  window.scrollY > 200
    ? headerRef.classList.add("scrolled")
    : headerRef.classList.remove("scrolled");

  window.scrollY > 500
    ? buttonUpRef.classList.add("showed")
    : buttonUpRef.classList.remove("showed");
};

window.addEventListener("scroll", scrollWindow);
