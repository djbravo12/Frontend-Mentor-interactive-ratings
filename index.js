const form = document.getElementById("RatingForm");
const updateRating = document.getElementById("updateRating");
const thanksBox = document.getElementById("thanksBox");
const ratingBox = document.getElementById("ratingBox");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let button = document.querySelector("input:checked");

  if (button) {
    updateRating.innerHTML = button.value;
    ratingBox.classList.add("display-none");
    thanksBox.classList.remove("display-none");
  } else {
    console.log("error");
  }
});
