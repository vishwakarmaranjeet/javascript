// API
const API_URL = `https://reqres.in/api/users`;

const getElementById = (el) => {
  if (!el) {
    return;
  }
  return document.getElementById(el);
};
const cardContainer = getElementById("cardContainer");
const showHideUser = getElementById("showHideUser");
const card = getElementById("card");
cardContainer.style.display = "none";

const toogleHandler = () => {
  if (cardContainer.style.display === "none") {
    cardContainer.style.display = "flex";
    showHideUser.innerText = "Hide Users";
  } else {
    cardContainer.style.display = "none";
    showHideUser.innerText = "Show Users";
  }
};

const createHTMLCard = (data) => {
  let elem = "";
  data.forEach((item) => {
    elem = document.createElement("div");
    elem.setAttribute("class", "card");
    elem.innerHTML += `<div class='avatar'><img src=${item.avatar} alt=${item.first_name}></div>`;
    elem.innerHTML += `<div class='fullname'>${item.first_name} ${item.last_name}</div>`;
    elem.innerHTML += `<div class='email'>${item.email}</div>`;
    cardContainer.appendChild(elem);
  });
};

const getUserDetailsResponse = async () => {
  try {
    let response = await fetch(API_URL);
    let data = await response.json();
    if (response.status === 200) {
      createHTMLCard(data.data ? data.data : null);
    }
  } catch (e) {
    console.log("Error Occured", e);
  }
};

getUserDetailsResponse();
showHideUser.addEventListener("click", toogleHandler);
