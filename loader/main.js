const loader = document.getElementById("loader");
let initial = 0;
let value = initial;
let intervalID;

const progressLoader = () => {
  intervalID = setInterval(() => {
    if (value === 100) {
      value = initial;
    } else {
      value += 10;
      loader.style.width = `${value}%`;
    }
  }, 1000);
};

progressLoader();
