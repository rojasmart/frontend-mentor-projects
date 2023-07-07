const unreadMessages = document.querySelectorAll(".unread");
const unreadNumber = document.getElementById("notifications");

const markAll = document.getElementById("mark-all");
unreadNumber.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnreadMessages = document.querySelectorAll(".unread");
    unreadNumber.innerText = newUnreadMessages.length;
  });
});

markAll.addEventListener("click", () => {
  unreadMessages.forEach((message) => message.classList.remove("unread"));
  const newUnreadMessages = document.querySelectorAll(".unread");
  unreadNumber.innerText = newUnreadMessages.length;
});
