const inputSearch = document.getElementById("search-input");
const buttonFetch = document.getElementById("btn-search");
const imgUser = document.querySelector(".img-user");
const userName = document.querySelector(".username");
const nickName = document.querySelector(".nickname");
const joinDate = document.querySelector(".date");
const description = document.querySelector(".description");

buttonFetch.addEventListener("click", () => {
  const searchUser = inputSearch.value;
  const fetchData = async (searchUser) => {
    try {
      const res = await fetch(`https://api.github.com/users/${searchUser}`);
      const data = await res.json();
      buildCard(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  fetchData(searchUser);
});

const buildCard = (data) => {
  console.log(data);
  imgUser.src = data.avatar_url;
  userName.textContent = data.name;
  nickName.textContent = data.login;
};
