const fetchData = async () => {
  try {
    const res = await fetch("https://api.github.com/users/binarypsilocybin");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchData().then((data) => {
  console.log(data);
});

const userName = document.querySelector(".username");
const nickName = document.querySelector(".nickname");
const joinDate = document.querySelector(".date");
const description = document.querySelector(".description");
