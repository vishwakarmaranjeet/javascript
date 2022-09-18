let limit = 10;
let pageCount = 1;
let todoCount = 1;

const getTodos = async () => {
  console.log(`[Page Count] ${pageCount}`);
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageCount}$_limit=${limit}`
    );
    const data = await response.json();
    if (response.status === 200) {
      data.forEach((todo) => {
        const htmlItem = `<div class="item"><p><b>${todo.id}</b>. ${todo.title}</p></div>`;
        document
          .querySelector("#todo-container")
          .insertAdjacentHTML("beforeend", htmlItem);
      });
      observedItem();
    }
  } catch (e) {
    console.log("Error has occured", e);
  }
};

getTodos();

// Scroll animation and lazy loading
const observedItem = function () {
  const items = document.querySelectorAll(".item");
  const observer = new IntersectionObserver(
    (records) => {
      records.forEach((record) => {
        record.target.classList.toggle("show", record.isIntersecting);
        if (record.isIntersecting) {
          observer.unobserve(record.target);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  items.forEach((item) => {
    observer.observe(item);
  });

  const lastItem = document.querySelector(".item:last-child");
  const lastItemObserver = new IntersectionObserver((record) => {
    const lastItem = record[0];
    console.log("last", lastItem);
    if (!lastItem?.isIntersecting) return;
    loadNewItems();
    lastItemObserver.unobserve(lastItem.target);
  });
  lastItemObserver.observe(lastItem);

  const loadNewItems = function () {
    pageCount++;
    getTodos();
  };
  console.log(observer);
};

// Lazy loading
