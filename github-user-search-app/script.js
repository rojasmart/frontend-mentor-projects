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
  userName.textContent =
    data.name === "" || data.name === null ? "Not Available" : data.name;
  nickName.textContent = `@${data.login}`;

  joinDate.textContent = `Joined ${new Intl.DateTimeFormat(
    "en-GB",
    options
  ).format(dateData)}`;

  description.textContent =
    data.bio === "" || data.bio === null ? "Not Available" : data.bio;
  repos.textContent = data.public_repos;
  followers.textContent = data.followers;
  following.textContent = data.following;
  localization.textContent =
    data.location === "" || data.location === null
      ? "Not Available"
      : data.location;
  twitter.textContent =
    data.twitter_username === "" || data.twitter_username === null
      ? "Not Available"
      : data.twitter_username;
  website.textContent =
    data.blog === "" || data.blog === null ? "Not Available" : data.blog;
  office.textContent =
    data.company === "" || data.company === null
      ? "Not Availale"
      : data.company;
};
