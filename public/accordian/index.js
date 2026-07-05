const container = document.getElementById("container");

function handleClick(e) {
  const header = e.target.closest(".header");
  const activeElement = header.nextElementSibling;
  if (activeElement.classList.contains("active")) {
    activeElement.classList.remove("active");
  } else {
    activeElement.classList.add("active");
  }

  console.log("head", header.nextElementSibling);
}

container.addEventListener("click", handleClick);
