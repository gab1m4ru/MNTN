var hiddenElement = document.getElementById("block__desc-body");
var btn = document.querySelector(".header__btn");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "start", behavior: "smooth" });
}

btn.addEventListener("click", handleButtonClick);