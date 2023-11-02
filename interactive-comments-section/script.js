let currentUser;
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
  console.log("data", data);
  data.comments.forEach((comment) => {
    createComment(comment);
    comment.replies.forEach((reply) => {
      createReply(reply);
    });
  });
};

const createComment = (comment) => {
  let card = `<div class="comments-card ${
    comment.replies.length > 0 ? "has-reply" : ""
  }" id="${comment.id}">
          <div class="comments-user">
            <div class="comments-container">
              <div class="comments-likes">
                <button class="comments-like-add">+</button>
                <div class="comments-like-number">${comment.score}</div>
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
                  <div class="comments-reply"><button>Reply</button></div>
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
    .insertAdjacentHTML("beforeend", card);
};

const createReply = (comment) => {
  let reply = ` <div class="comments-replies" id="${comment.id}">
  
  
    <div class="comments-container">
      <div class="comments-likes">
        <button class="comments-like-add">+</button>
        <div class="comments-like-number">${comment.score}</div>
        <button class="comments-like-remove">-</button>
      </div>
      <div class="comments-main">
        <div class="comments-header">
          <div class="comments-avatar">
            <img src="${comment.user.image.png}" alt={reply-comment-avatar} />
          </div>
          <div class="comments-name"><p>${comment.user.username}</p></div>
          <div class="comments-date"><p>${comment.createdAt}</p></div>
          <div class="comments-reply"><button>Reply</button></div>
        </div>
        <div class="comments-content">
          <p>${comment.content}</p>
        </div>
      </div>
    </div>
  
</div>`;

  document.querySelector(".has-reply").insertAdjacentHTML("beforeend", reply);
};
