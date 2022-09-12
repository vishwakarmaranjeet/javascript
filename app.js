// // RANDOM BACKGROUND COLOR CHANGER
// const body = document.querySelector("body");
// const startBtn = document.getElementById("start_btn");
// const stopBtn = document.getElementById("stop_btn");
// let interval;

// const debounce = (func, timeout = 500) => {
//   let timer;
//   return (...args) => {
//     clearInterval(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, timeout);
//   };
// };
// startBtn.addEventListener("click", start);
// stopBtn.addEventListener("click", stop);
// // RANDOM BACKGROUND COLOR CHANGER

// // FORM INPUT VALUE HANDLER
// const getElementById = (el) => {
//   if (!el) {
//     return;
//   }
//   return document.getElementById(el);
// };
// const submitBtn = getElementById("submitBtn");
// const clearBtn = getElementById("clearBtn");
// const formData = getElementById("formData");

// const submitHandler = () => {
//   const firstName = getElementById("firstName").value;
//   const lastName = getElementById("lastName").value;
//   const email = getElementById("email").value;
//   const phone = getElementById("phone").value;
//   if (!(firstName == "" || lastName == "" || email == "" || phone == "")) {
//     const userData = {
//       firstName,
//       lastName,
//       email,
//       phone,
//     };
//     console.log(JSON.stringify(userData));
//   } else {
//     console.error("Form fields can not be empty");
//   }
// };
// const clearHandler = () => {
//   getElementById("firstName").value = "";
//   getElementById("lastName").value = "";
//   getElementById("email").value = "";
//   getElementById("phone").value = "";
//   console.log("Clear handler");
// };

// submitBtn.addEventListener("click", submitHandler);
// clearBtn.addEventListener("click", clearHandler, { once: true });
// // FORM INPUT VALUE HANDLER

// const resizedMessage = () => {
//   console.log(
//     "scrolled worked",
//     typeof window !== undefined ? window.innerWidth : null
//   );
// };
// window.addEventListener("DOMContentLoaded", resizedMessage);
// window.addEventListener("resize", debounce(resizedMessage, 500));

// // EVENT DELEGATION

// const eventDelegationID = getElementById("eventdelegation");
// const creatUL = document.createElement("ul");
// // We are creating an <ul> element, attaching too many <li> elements, and attaching an event listener with a responding function to each paragraph as we create it.
// for (let i = 0; i < 10; i++) {
//   const createLI = document.createElement("li");
//   createLI.textContent = `This is line ${i}`;
//   createLI.addEventListener("click", () => {
//     console.log("responding");
//   });
//   creatUL.appendChild(createLI);
// }
// eventDelegationID.appendChild(creatUL);

// // EVENT DELEGATION

// Add script dynamically
const tailwindURL = `https://cdn.tailwindcss.com`;
const addScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.setAttribute("src", src);
    script.addEventListener("load", resolve);
    script.addEventListener("error", reject);
    document.body.appendChild(script);
  });
};
(async () => {
  try {
    await addScript(`${tailwindURL}`);
  } catch (e) {
    console.log(e);
  }
})();

// tailwind.config = {
//   theme: {
//     extend: {
//       colors: {
//         clifford: "#da373d",
//       },
//     },
//   },
// };
// Add script dynamically
