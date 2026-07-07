const input = document.getElementById("input");
const list = document.getElementById("list");

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
let controller;

function showList(data) {

  data.recipes.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;
    list.appendChild(listItem);
  });

}

async function fetchData() {
  list.innerHTML = "";
  if (input.value.length < 3) return;
  if (controller) controller.abort();
  controller = new AbortController();

  const response = await fetch(
    `https://dummyjson.com/recipes/search?q=${input.value}`,
    { signal: controller.signal },
  );
  const data = await response.json();
  showList(data);
}
const debounceFun = debounce(() => {
  fetchData();
}, 500);
input.addEventListener("input", () => {
  const value = input.value;
  debounceFun();
});

// input.addEventListener(
//   "input",
//   debounce(() => {
//     fetchData();
//   }, 500),
// );

// https://dummyjson.com/recipes/search
