let currentUser;
let comments = new Map();

const commentsElement = document.querySelector(".container");

const modalContainer = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const btnCancel = document.querySelector(".no-cancel");
const btnApprove = document.querySelector(".yes-delete");

btnCancel.addEventListener("click", () => {
  modalContainer.classList.remove("active");
});
overlay.addEventListener("click", () => {
  modalContainer.classList.remove("active");
});
btnApprove.addEventListener("click", (evt) => {
  modalContainer.classList.remove("active");
  deleteComment(evt.currentTarget.comment);
});

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
  const localComments = localStorage.getItem("comments");
  if (localComments === null) {
    data.comments.forEach((commentGroup) => {
      comments.set(`${commentGroup.id}`, commentGroup);
      createComment(commentGroup);
      commentGroup.replies.forEach((reply) => {
        createReply(reply);
      });
    });
    localStorage.setItem(
      "comments",
      JSON.stringify(Array.from(comments.entries()))
    );
  } else {
    comments = new Map(JSON.parse(localComments));

    for (let commentGroup of comments.values()) {
      createComment(commentGroup);
      commentGroup.replies.forEach((reply) => {
        createReply(reply);
      });
    }
  }

  document.querySelector(".inputUserImage").src = currentUser.image.webp;
};

const createComment = (comment) => {
  let card = `<div class="comments-card ${
    comment.replies && comment.replies.length > 0 ? "has-reply" : ""
  }" id="${comment.id}">
       
            <div class="comments-container" id="${comment.id}">
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
                  ${
                    currentUser.username === comment.user.username
                      ? `<span class="comments-tag">you</span>`
                      : ""
                  }
                  <div class="comments-date"><p>${comment.createdAt}</p></div>
                  <div class="comments-tools">
                  ${
                    currentUser.username === comment.user.username
                      ? `<button class="comment-delete">delete</button>`
                      : ""
                  }
                  <button class="comment-reply reply">reply</button>
                  </div>
                </div>
                <div class="comments-content user">
                  <p>${comment.content}</p>
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
    <div class="comments-container" id="${comment.id}">
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
          ${
            currentUser.username === comment.user.username
              ? `<span class="comments-tag">you</span>`
              : ""
          }
          <div class="comments-date"><p>${comment.createdAt}</p></div>
          <div class="comments-tools">
          ${
            currentUser.username === comment.user.username
              ? `<button class="comment-delete">delete</button>`
              : ""
          }
          <button class="comment-reply reply">reply</button>
          
          </div>
        </div>
        <div class="comments-content">
          <p>${comment.content}</p>
        </div>
      </div>
    </div>
  
</div>`;

  document.querySelector(".has-reply").insertAdjacentHTML("beforeend", reply);
};

const generateCommentId = () => {
  return Date.now();
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

let replyFormComment = null;
let replyForm = null;

const replyComment = (targetComment) => {
  const editBtnText = targetComment.querySelector(".comments-tools .reply");

  if (replyForm) {
    const nextElement = targetComment.nextElementSibling;
    if (replyFormComment === targetComment) {
      editBtnText.textContent = "Reply";
      replyForm.remove();
      replyFormComment = null;
      replyForm = null;
      return;
    }
    replyFormComment.querySelector(".comments-tools .reply").textContent =
      "Reply";
    replyForm.remove();
  }

  replyForm = createReplyForm(targetComment);
  replyFormComment = targetComment;

  /* to reply */
  if (targetComment.parentElement.classList.contains("comments-replies")) {
    targetComment.insertAdjacentElement("afterend", replyForm);
    /* to main comment */
  } else {
    targetComment.nextElementSibling
      .querySelector(".comments-replies")
      .insertAdjacentElement("beforeend", replyForm);
  }

  editBtnText.textContent = "Cancel";
};

const createReplyForm = (targetComment) => {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form", "send-reply-form");

  const formInput = document.createElement("textarea");
  formInput.classList.add("input", "reply-input");
  formInput.placeholder = "Add a comment...";

  const image = document.createElement("img");
  image.classList.add("inputUserImage");
  image.src = currentUser.image.webp;
  image.alt = "user image";

  const btnSend = document.createElement("button");
  btnSend.classList.add("btn-send");
  btnSend.textContent = "send";

  formContainer.appendChild(formInput);
  formContainer.appendChild(image);
  formContainer.appendChild(btnSend);

  btnSend.addEventListener("click", () => {
    targetComment.querySelector(".comments-tools .reply").textContent = "Reply";
    if (formInput.value === "") {
      formContainer.remove();
      return;
    }
    addReplyComment(targetComment, formContainer, formInput.value);
  });

  return formContainer;
};

const addReplyComment = (targetComment, form, content) => {
  const replyingTo = targetComment.querySelector(`.comments-name`).textContent;
  const commentId = generateCommentId();

  const commentObject = {
    id: commentId,
    content: content,
    createdAt: "now",
    score: 0,
    replyingTo: replyingTo,
    user: currentUser,
  };

  form.append(createReply(commentObject));
  form.remove();

  const groupOgj = comments.get(targetComment.closest(".comments-card").id);

  groupOgj.replies.push(commentObject);

  localStorage.setItem(
    "comments",
    JSON.stringify(Array.from(comments.entries()))
  );
};

const commentInputForm = document.querySelector(".main-input-container");
const commentInput = commentInputForm.querySelector(".comment-input");

const addComment = () => {
  if (commentInput.value === "") {
    e.preventDefault();
  }

  const commentId = generateCommentId();

  const commentObject = {
    id: commentId,
    content: commentInput.value,
    createdAt: "now",
    score: 0,
    user: currentUser,
    replies: [],
  };

  createComment(commentObject);
  commentInput.value = "";

  comments.set(`${commentId}`, commentObject);

  localStorage.setItem(
    "comments",
    JSON.stringify(Array.from(comments.entries()))
  );
};

const deleteComment = (targetComment) => {
  const targetCommentGroup = targetComment.closest(".comments-card");
  const commentGroupObj = comments.get(targetCommentGroup.id);
  const targetId = parseInt(targetComment.id.substring(8));
  console.log("targetComment", targetComment.id);
  console.log("targetComment", targetCommentGroup);

  if (commentGroupObj.id === targetId) {
    comments.delete(targetCommentGroup.id);
  } else {
    const targetIndex = commentGroupObj.replies.findIndex(
      (obj) => obj.id === targetId
    );
    commentGroupObj.replies.splice(targetIndex, 1);
  }
  localStorage.setItem(
    "comments",
    JSON.stringify(Array.from(comments.entries()))
  );

  targetComment.remove();
};

const showDeleteModal = (targetComment) => {
  btnApprove.comment = targetComment;
  modalContainer.classList.add("active");
};

commentInputForm.querySelector(".btn-send").addEventListener("click", () => {
  addComment();
});

commentsElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("reply")) {
    replyComment(event.target.closest(".comments-container"));
  } else if (event.target.classList.contains("comment-delete")) {
    showDeleteModal(event.target.closest(".comments-container"));
  } else if (event.target.classList.contains("comments-like-remove")) {
    downvoteComment(event.target.closest(".comments-container"));
  } else if (event.target.classList.contains("comments-like-add")) {
    upvoteComment(event.target.closest(".comments-container"));
  }
});
