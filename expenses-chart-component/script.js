const ctx = document.getElementById("myChart");

async function fetchData() {
  const url = "./data.json";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData().then((data) => {
  labels = [];
  values = [];
  for (i = 0; i < data.length; i++) {
    labels.push(data[i].day);
    values.push(data[i].amount);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          data: values,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
