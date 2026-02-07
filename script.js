const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const emoji = document.getElementById("emoji");
const title = document.getElementById("title");
const message = document.getElementById("message");
const question = document.getElementById("question");

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();

  const maxX = rect.width - noBtn.offsetWidth;
  const maxY = rect.height - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  emoji.innerText = "😭";
  emoji.style.transform = "scale(1.25)";
}

yesBtn.addEventListener("click", () => {
  title.innerText = "YAY!!! 💕";
  message.innerHTML = `
    You just made my heart do backflips 🥹💖<br><br>
    I promise cute dates, warm hugs, endless laughs,<br>
    and loving you more every single day 🌷
  `;
  emoji.innerText = "💃🕺";
  question.innerText = "Happy Valentine’s Day 💝";

  document.querySelector(".buttons").style.display = "none";
});
