const commentsName = document.querySelector(
  ".comments-current-user .comments-name"
);

const commentsLike = document.querySelector(
  ".comments-current-user .comments-like-number"
);

const commentsImage = document.querySelector(
  ".comments-current-user .comments-avatar img"
);

const commentsDate = document.querySelector(
  ".comments-current-user .comments-date "
);

const commentsContent = document.querySelector(
  ".comments-current-user .comments-content "
);

const fetchData = async () => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    buildData(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

const buildData = (data) => {
  data.comments.forEach((comment) => {
    console.log(comment);
    commentsName.textContent = data.currentUser.username;
    commentsImage.src = data.currentUser.image.png;
    commentsContent.textContent = data.content;
  });
};
