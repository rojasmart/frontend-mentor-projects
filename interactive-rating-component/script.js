const list = document.querySelectorAll(".item-classification");
const button = document.querySelector(".submit");
const card = document.querySelector(".card");
const success = document.querySelector(".success");
const star = document.querySelector(".star-value");
let value;

list.forEach((item) => {
  item.addEventListener("click", (e) => {
    list.forEach((item) => item.classList.remove("selected"));
    e.target.classList.add("selected");
    value = e.target.textContent;
  });
});

button.addEventListener("click", () => {
  star.textContent = value;
  card.style.display = "none";
  success.style.display = "flex";
});
