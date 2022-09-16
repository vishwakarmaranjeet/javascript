const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rigthBtn = document.getElementById("right");
const img = document.querySelectorAll("#imgs img");

let id = 0;

function changeImage() {
  if (id > img.length - 1) {
    id = 0;
  } else if (id < 0) {
    id = img.length - 1;
  }
  imgs.style.transform = `translateX(${-id * 400}px)`;
}

function run() {
  id++;
  changeImage();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

let interval = setInterval(run, 3000);

rigthBtn.addEventListener("click", () => {
  id++;
  resetInterval();
  changeImage();
});

left.addEventListener("click", () => {
  id--;
  resetInterval();
  changeImage();
});
