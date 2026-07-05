const container = document.getElementById("container");
const content = document.getElementsByClassName("content");
console.log("head---", content);

function handleClick(e) {
  const header = e.target.closest(".header");
  const activeElement = header.nextElementSibling;
  const opened = activeElement.classList.contains("active");
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
  }
  // content.forEach((el) => {
  //   el.classList.remove("active");
  // });
  if (!opened) {
    activeElement.classList.add("active");
  }

  console.log("head", header.nextElementSibling);
}

container.addEventListener("click", handleClick);
