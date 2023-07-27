let createBtn = document.getElementById("create-btn");
let loginBtn = document.getElementById("login-btn");
let barBtn = document.getElementById("bar-btn");
let xBtn = document.getElementById("x-btn");
let hiddenUl = document.getElementById("hidden-ul");
let navTop = document.getElementById("top");
let navDown = document.getElementById("down");
let nav = document.getElementById("nav");

barBtn.addEventListener("click", () => {
  barBtn.style.display = "block";
  if ((hiddenUl.style.display = "none")) {
    hiddenUl.style.display = "flex";
    barBtn.style.display = "none";
    xBtn.style.display = "block";
  }
});
xBtn.addEventListener("click", () => {
  if (hiddenUl.style.display == "flex") {
    hiddenUl.style.display = "none";
    barBtn.style.display = "block";
    xBtn.style.display = "none";
  }
});
function removeTop() {
  navTop.style.display = "none";
  if ((navTop.style.display = "block")) {
    navTop.style.display = "none";
  }
}
nav.addEventListener("mouseover", () => {
  navTop.style.display = "block";
});
setInterval(removeTop, 3000);
navTop.addEventListener("click", () => {
  nav.style.display = "none";
  navTop.style.display = "none";
  navDown.style.display = "block";
  navDown.style.top = "0";
});
navDown.addEventListener("click", () => {
  nav.style.display = "flex";
  navTop.style.display = "block";
  navDown.style.display = "none";
});

function reportWindowSize() {
  height = window.innerHeight;
  width = window.innerWidth;

  if (width > 811) {
    barBtn.style.display = "none";
    hiddenUl.style.display = "none";
    xBtn.style.display = "none";
  } else {
    barBtn.style.display = "flex";
  }
}

window.onresize = reportWindowSize;

window.addEventListener("resize", reportWindowSize);

function Feadback() {
  let reciveMassge = document.getElementById("recive");
  let userFeadbackText = document.getElementById("user-Feadback");
  let sendFeadback = document.getElementById("send-f");
  sendFeadback.addEventListener("click", () => {
    reciveMassge.style.display = "block";
    if (userFeadbackText.value == "") {
      reciveMassge.style.color = "red";
      reciveMassge.innerText = "input empty";
      reciveMassge.style.display = "block";
    } else {
      reciveMassge.style.color = "green";
      reciveMassge.innerText = "Recive";
      userFeadbackText.value = "";
    }
  });
}
Feadback();
