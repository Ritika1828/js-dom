let page = 1;
let loading = true;
const last = document.getElementById("last");

function renderList(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    h5.textContent = item.title;
    const p = document.createElement("p");
    p.textContent = item.body;
    div.classList.add("list");

    div.appendChild(h5);
    div.appendChild(p);
    list.appendChild(div);
  });
}

async function fetchData() {
  loading = true;
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`,
    );
    const data = await res.json();

    renderList(data);
  } catch (err) {
    console.log(err);
  } finally {
    loading = false;
  }
}
const observer = new IntersectionObserver(
  (e) => {
    console.log(e);
    if (e[0].isIntersecting && !loading) {
      console.log(e, "iss");
      page++;
      fetchData();
    }
  },
  {
    root: null,
    rootMargin: "300px",
  },
);

(() => fetchData())();

observer.observe(last);
