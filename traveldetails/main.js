let travelObj = {
  origin: "",
  destination: "",
};

const enableSearchBtn = (data) => {
  if (data.origin !== "" && data.destination !== "") {
    searchBtn.disabled = false;
  } else {
    searchBtn.disabled = true;
  }
};

const travelHandler = (action, data = "") => {
  switch (action) {
    case "origin":
      const origin = { ...travelObj, origin: data };
      travelObj = origin;
      break;
    case "destination":
      const destination = { ...travelObj, destination: data };
      travelObj = destination;
      break;
    case "search":
      console.log(travelObj);
      break;
    case "reset":
      const reset = { ...travelObj, origin: "", destination: "" };
      travelObj = reset;
      break;
    default:
      travelObj = {
        origin: "",
        destination: "",
      };
  }
};

const origin = document.getElementById("origin");
const destination = document.getElementById("destination");
const searchBtn = document.getElementById("search_btn");
const resetBtn = document.getElementById("reset_btn");

origin.addEventListener("click", (e) => {
  travelHandler("origin", e.target.value);
  enableSearchBtn(travelObj);
});

destination.addEventListener("click", (e) => {
  travelHandler("destination", e.target.value);
  enableSearchBtn(travelObj);
});

searchBtn.addEventListener("click", () => {
  travelHandler("search");
});

resetBtn.addEventListener("click", () => {
  travelHandler("reset");
  enableSearchBtn(travelObj);
});
