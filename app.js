// RANDOM BACKGROUND COLOR CHANGER
const body = document.querySelector("body");
const startBtn = document.getElementById("start_btn");
const stopBtn = document.getElementById("stop_btn");
let interval;

const debounce = (func, timeout = 500) => {
  let timer;
  return (...args) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const bgColorChanger = (isStart) => {
  if (isStart) {
    interval = setInterval(() => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let bgColor = `rgb(${r},${g},${b})`;
      body.style.backgroundColor = bgColor;
    }, 500);
  } else {
    clearInterval(interval);
    body.style.backgroundColor = "#fff";
    console.log("stop clicked");
  }
};

const logMessage = () => {
  console.log("logged");
};
const start = () => {
  debounce(bgColorChanger(true), 500);
};
const stop = () => {
  bgColorChanger(false);
};
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
// RANDOM BACKGROUND COLOR CHANGER

// FORM INPUT VALUE HANDLER
const getElementById = (el) => {
  if (!el) {
    return;
  }
  return document.getElementById(el);
};
const submitBtn = getElementById("submitBtn");
const clearBtn = getElementById("clearBtn");
const formData = getElementById("formData");

const submitHandler = () => {
  const firstName = getElementById("firstName").value;
  const lastName = getElementById("lastName").value;
  const email = getElementById("email").value;
  const phone = getElementById("phone").value;
  if (!(firstName == "" || lastName == "" || email == "" || phone == "")) {
    const userData = {
      firstName,
      lastName,
      email,
      phone,
    };
    console.log(JSON.stringify(userData));
  } else {
    console.error("Form fields can not be empty");
  }
};
const clearHandler = () => {
  getElementById("firstName").value = "";
  getElementById("lastName").value = "";
  getElementById("email").value = "";
  getElementById("phone").value = "";
  console.log("Clear handler");
};

submitBtn.addEventListener("click", submitHandler);
clearBtn.addEventListener("click", clearHandler, { once: true });
// FORM INPUT VALUE HANDLER

const resizedMessage = () => {
  console.log(
    "scrolled worked",
    typeof window !== undefined ? window.innerWidth : null
  );
};
window.addEventListener("DOMContentLoaded", resizedMessage);
window.addEventListener("resize", debounce(resizedMessage, 500));

// EVENT DELEGATION

const eventDelegationID = getElementById("eventdelegation");
const creatUL = document.createElement("ul");
// We are creating an <ul> element, attaching too many <li> elements, and attaching an event listener with a responding function to each paragraph as we create it.
for (let i = 0; i < 10; i++) {
  const createLI = document.createElement("li");
  createLI.textContent = `This is line ${i}`;
  createLI.addEventListener("click", () => {
    console.log("responding");
  });
  creatUL.appendChild(createLI);
}
eventDelegationID.appendChild(creatUL);

// EVENT DELEGATION

// GROUP BY USING REDUCE

const people = [
  { name: "Krunal", age: 25 },
  { name: "Rushikesh", age: 25 },
  { name: "Ankit", age: 24 },
];

const groupBy = (objectArray, property) => {
  return objectArray.reduce((total, obj) => {
    let key = obj[property];
    if (!total[key]) {
      total[key] = [];
    }
    total[key].push(obj);
    return total;
  }, {});
};

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
// GROUP BY USING REDUCE
