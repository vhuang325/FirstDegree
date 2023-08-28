// script.js
const videoPlayer = document.getElementById("videoPlayer");
const goToPageButton = document.getElementById("goToPageButton");

// Show the button when the video ends
videoPlayer.addEventListener("ended", () => {
  goToPageButton.style.display = "block";
});

// Navigate to another page when the button is clicked
goToPageButton.addEventListener("click", () => {
  window.location.href = "https://google.com";
});
