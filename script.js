// script.js
const videoPlayer = document.getElementById("videoPlayer");
const goToPageButton = document.getElementById("goToPageButton");
const snowContainer = document.getElementById("snowContainer");
const isMobileDevice = window.innerWidth <= 768;

if (!isMobileDevice) {
  videoPlayer.autoplay = true;
  videoPlayer.controls = true;
}

const snowflakeNumber = 20;
const snowflakeDuration = 10000;

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";

  const snowflakeSize = Math.random() * 20 + 5; // Random size between 5 and 25 pixels
  snowflake.style.width = snowflakeSize + "px";
  snowflake.style.height = snowflakeSize + "px";

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowContainer.appendChild(snowflake);

  const fallSpeed = Math.random() * 3 + 2;
  let initialTop = -10; // Start snowflakes just above the viewport
  snowflake.style.top = initialTop + "px";

  function moveSnowflake() {
    initialTop += fallSpeed;
    snowflake.style.top = initialTop + "px";

    if (initialTop >= window.innerHeight) {
      snowContainer.removeChild(snowflake);
      createSnowflake(); // Create a new snowflake when one goes off-screen
    } else {
      requestAnimationFrame(moveSnowflake);
    }
  }

  moveSnowflake();
}

// Start snowfall animation after video ends
videoPlayer.addEventListener("ended", () => {
  goToPageButton.style.display = "block";
  snowContainer.style.background = "rgba(0, 0, 0, 0.3)";

  const snowflakeInterval = snowflakeDuration / snowflakeNumber;
  let snowflakeCount = 0;

  function generateSnowflake() {
    if (snowflakeCount < snowflakeNumber) {
      createSnowflake();
      snowflakeCount++;
      setTimeout(generateSnowflake, snowflakeInterval);
    }
  }

  // Start the snowflake generation
  generateSnowflake();

  // Start the animation after a delay
  setTimeout(() => {
    animateSnowflakes();
  }, snowflakeDuration);
});

// Animation of falling snowflakes
function animateSnowflakes() {
  const snowflakes = document.querySelectorAll(".snowflake");

  function moveSnowflakes() {
    snowflakes.forEach((snowflake) => {
      const fallSpeed = Math.random() * 2 + 1;
      let currentTop = parseFloat(snowflake.style.top);
      currentTop += fallSpeed;
      snowflake.style.top = currentTop + "px";

      if (currentTop >= window.innerHeight) {
        snowContainer.removeChild(snowflake);
        createSnowflake(); // Create a new snowflake when one goes off-screen
      }
    });

    requestAnimationFrame(moveSnowflakes);
  }

  moveSnowflakes();
}

// Navigate to another page when the button is clicked
goToPageButton.addEventListener("click", () => {
  window.location.href = "https://google.com";
});
