const button = document.querySelectorAll(".accordion");

button.forEach((item) => {
  item.addEventListener("click", function () {
    const active = document.querySelector(".accordion.active");
    const activePanel = document.querySelector(".panel.active");
    const panel = this.nextElementSibling;
    if (active) {
      active.classList.remove("active");
      activePanel.classList.remove("active");
    }
    this.classList.add("active");
    panel.classList.add("active");

    //accordionImage.style.transform = "rotate(180deg)";
  });
});
