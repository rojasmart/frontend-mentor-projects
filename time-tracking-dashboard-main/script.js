const cardFilterItem = [...document.querySelectorAll(".card-filter-item")];
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const cards = document.querySelectorAll(".card");
const cardTitle = document.querySelectorAll(".card-title");
const cardTime = document.querySelectorAll(".card-time span");
const cardPrevTime = document.querySelectorAll(".card-previous-time span");

const fetchData = async () => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    buildData(data);
  } catch (error) {}
};

fetchData();

const buildData = (data) => {
  daily.addEventListener("click", function (event) {
    cardFilterItem.map((item) => {
      return item.classList.remove("active");
    });
    event.target.classList.add("active");
    for (i = 0; i < data.length; i++) {
      cardTitle[i].textContent = data[i].title;
      cardTime[i].textContent = data[i].timeframes.daily.current;
      cardPrevTime[i].textContent = data[i].timeframes.daily.previous;
    }
  });

  weekly.addEventListener("click", function () {
    cardFilterItem.map((item) => {
      return item.classList.remove("active");
    });
    event.target.classList.add("active");
    for (i = 0; i < data.length; i++) {
      cardTitle[i].textContent = data[i].title;
      cardTime[i].textContent = data[i].timeframes.weekly.current;
      cardPrevTime[i].textContent = data[i].timeframes.weekly.previous;
    }
  });
  monthly.addEventListener("click", function () {
    cardFilterItem.map((item) => {
      return item.classList.remove("active");
    });
    event.target.classList.add("active");
    for (i = 0; i < data.length; i++) {
      cardTitle[i].textContent = data[i].title;
      cardTime[i].textContent = data[i].timeframes.monthly.current;
      cardPrevTime[i].textContent = data[i].timeframes.monthly.previous;
    }
  });
};
