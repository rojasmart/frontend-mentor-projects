const getAdvice = () => {
  async function fetchData() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  fetchData().then((data) => {
    const adviceId = document.getElementById("advice-id");
    const advice = document.getElementById("advice");
    advice.textContent = data.slip.advice;
    adviceId.innerHTML = `<p id="advice-id">ADVICE ${data.slip.id}</p`;
  });
};

document.getElementById("advice-btn").addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};
