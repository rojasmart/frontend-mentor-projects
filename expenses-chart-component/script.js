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
          borderRadius: 5,
          borderSkipped: false,
          backgroundColor: [
            "#ec755d",
            "#ec755d",
            "#76B5BC",
            "#ec755d",
            "#ec755d",
            "#ec755d",
            "#ec755d",
          ],
          hoverBackgroundColor: [
            "#FF9B86",
            "#FF9B86",
            "#B4E0E5",
            "#FF9B86",
            "#FF9B86",
            "#FF9B86",
            "#FF9B86",
          ],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: () => null,
            label: ({ formattedValue }) => `$${formattedValue}`,
          },
          displayColors: false,
          backgroundColor: "#382314",
          bodyFont: {
            size: 18,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          display: false,
        },
        x: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
      },
    },
  });
});
