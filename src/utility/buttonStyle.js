const changeButtonstyle = (e) => {
  const currentButton = e.target;
  const active = document.querySelector(".active");
  if (currentButton.classList.contains("session")) {
    if (active && !currentButton.classList.contains("show")) {
      active.classList.remove("active");
    }
    currentButton.classList.add("active");
  }
};

// for exercise item
const addtolistButtonStyle = (e) => {
  const currentButton = e.target;
  currentButton.style.background = "#bebef7";
  currentButton.setAttribute("disabled", "");
};
export { addtolistButtonStyle, changeButtonstyle };
