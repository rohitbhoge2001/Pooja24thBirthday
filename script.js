document.getElementById("startButton").addEventListener("click", function () {
  const heartsContainer = document.querySelector(".hearts-container");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "%";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }

  document.body.classList.add("show-bg");

  const song = document.getElementById("birthdaySong");
  song.play();
});
