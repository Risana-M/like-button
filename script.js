const likeBtn = document.querySelector(".like-btn i");
const likeCount = document.getElementById("like-count");

let liked = false;
let count = 0;

likeBtn.addEventListener("click", () => {
  liked = !liked;

  if (liked) {
    // when liked red
    likeBtn.classList.remove("far"); // outline heart
    likeBtn.classList.add("fas"); // solid heart
    likeBtn.style.color = "red";
    count++;
  } else {
    // when unliked white
    likeBtn.classList.remove("fas");
    likeBtn.classList.add("far");
    likeBtn.style.color = "black";
    count--;
  }

  likeCount.textContent = `${count} ${count === 1 ? "like" : "likes"}`;
});
