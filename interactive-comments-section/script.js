let currentUser;
const commentsElement = document.querySelector(".comments");

const fetchData = async () => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    currentUser = data.currentUser;
    buildData(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

const buildData = (data) => {
  data.comments.forEach((comment) => {
    createComment(comment);
    comment.replies.forEach((reply) => {
      createReply(reply);
    });
  });
  document.querySelector(".inputUserImage").src = currentUser.image.webp;
};

const createComment = (comment) => {
  let card = `<div class="comments-card ${
    comment.replies.length > 0 ? "has-reply" : ""
  }" id="${comment.id}">
          <div class="comments-user">
            <div class="comments-container">
              <div class="comments-likes">
                <button class="comments-like-add">+</button>
                <span class="comments-like-score">${comment.score}</span>
                <button class="comments-like-remove">-</button>
              </div>
              <div class="comments-main">
                <div class="comments-header">
                  <div class="comments-avatar">
                    <img src="${comment.user.image.png}" alt="comment-avatar" />
                  </div>
                  <div class="comments-name"><p>${
                    comment.user.username
                  }</p></div>
                  <div class="comments-date"><p>${comment.createdAt}</p></div>
                  <div class="comments-reply"><button class="comment-reply reply">Reply</button></div>
                </div>
                <div class="comments-content user">
                  <p>${comment.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
  document
    .getElementById("comments-wrapper")
    .insertAdjacentHTML("beforebegin", card);
};

const createReply = (comment) => {
  let reply = ` <div class="comments-replies" id="${comment.id}">
  
  
    <div class="comments-container">
      <div class="comments-likes">
        <button class="comments-like-add">+</button>
        <span class="comments-like-score">${comment.score}</span>
        <button class="comments-like-remove">-</button>
      </div>
      <div class="comments-main">
        <div class="comments-header">
          <div class="comments-avatar">
            <img src="${comment.user.image.png}" alt={reply-comment-avatar} />
          </div>
          <div class="comments-name"><p>${comment.user.username}</p></div>
          <div class="comments-date"><p>${comment.createdAt}</p></div>
          <div class="comments-reply"><button class="comment-reply reply">Reply</button></div>
        </div>
        <div class="comments-content">
          <p>${comment.content}</p>
        </div>
      </div>
    </div>
  
</div>`;

  document.querySelector(".has-reply").insertAdjacentHTML("beforeend", reply);
};

const upvoteComment = (targetComment) => {
  const scoreElement = targetComment.querySelector(".comments-like-score");
  const newScore = parseInt(scoreElement.textContent) + 1;
  scoreElement.textContent = newScore;
};

const downvoteComment = (targetComment) => {
  const scoreElement = targetComment.querySelector(".comments-like-score");
  const newScore = parseInt(scoreElement.textContent) - 1;
  scoreElement.textContent = newScore;
};

const replyComment = (targetComment) => {};

const commentInputForm = document.querySelector(".main-input-container");
const commentInput = commentInputForm.querySelector(".comment-input");

const addComment = () => {};

commentsElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("reply")) {
    replyComment(event.target.closest(".comments-container"));
  } else if (event.target.classList.contains("comments-like-remove")) {
    downvoteComment(event.target.closest(".comments-container"));
  } else if (event.target.classList.contains("comments-like-add")) {
    upvoteComment(event.target.closest(".comments-container"));
  }
});
