const inputSearch = document.getElementById("search-input");
const buttonFetch = document.getElementById("btn-search");
const imgUser = document.querySelector(".img-user");
const userName = document.querySelector(".username");
const nickName = document.querySelector(".nickname");
const joinDate = document.querySelector(".date");
const description = document.querySelector(".description");
const repos = document.querySelector(".inner-repos h2");
const followers = document.querySelector(".inner-followers h2");
const following = document.querySelector(".inner-following h2");
const localization = document.querySelector(".inner-location p");
const twitter = document.querySelector(".inner-twitter p");
const website = document.querySelector(".inner-website p");
const office = document.querySelector(".inner-office p");

inputSearch.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    buttonFetch.click();
  }
});

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
  const dateData = new Date(data.created_at);
  let options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  imgUser.src = data.avatar_url;
  userName.innerHTML =
    data.name === "" || data.name === null
      ? `<p class="not-available">Not Available</p>`
      : data.name;
  nickName.textContent = `@${data.login}`;

  joinDate.textContent = `Joined ${new Intl.DateTimeFormat(
    "en-GB",
    options
  ).format(dateData)}`;

  description.innerHTML =
    data.bio === "" || data.bio === null
      ? `<p class="not-available">Not Available</p>`
      : data.bio;
  repos.textContent = data.public_repos;
  followers.textContent = data.followers;
  following.textContent = data.following;
  localization.innerHTML =
    data.location === "" || data.location === null
      ? `<p class="not-available">Not Available</p>`
      : data.location;
  twitter.innerHTML =
    data.twitter_username === "" || data.twitter_username === null
      ? `<p class="not-available">Not Available</p>`
      : data.twitter_username;
  website.innerHTML =
    data.blog === "" || data.blog === null
      ? `<p class="not-available">Not Available</p>`
      : data.blog;
  office.innerHTML =
    data.company === "" || data.company === null
      ? `<p class="not-available">Not Available</p>`
      : data.company;
};
