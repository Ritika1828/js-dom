import "./styles.css";

const nocross = document.getElementById("btn");
const overlayCloseBtn = document.getElementById("btn1");
const noOverlayCloseBtn = document.getElementById("btn2");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const cross = document.getElementById("cross");
const content = document.getElementById("content");

nocross.addEventListener("click", () => {
  const parent = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "My modal";
  const body = document.createElement("div");
  body.innerHTML = "content";
  const footer = document.createElement("div");
  footer.textContent = "my footer";

  parent.appendChild(header);
  parent.appendChild(body);
  parent.appendChild(footer);

  showModal(true, false, parent);
});
overlayCloseBtn.addEventListener("click", () => {
  const parent = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "My modal with overlay";
  const body = document.createElement("div");
  body.innerHTML = "content";
  const footer = document.createElement("div");
  footer.textContent = "my footer";

  parent.appendChild(header);
  parent.appendChild(body);
  parent.appendChild(footer);

  showModal(true, true, parent);
});
noOverlayCloseBtn.addEventListener("click", () => {
  const parent = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "My modal without overlay";
  const body = document.createElement("div");
  body.innerHTML = "content";
  const footer = document.createElement("div");
  footer.textContent = "my footer";

  parent.appendChild(header);
  parent.appendChild(body);
  parent.appendChild(footer);

  showModal(false, true, parent);
});

function showModal(shouldOverlayClose = true, showCross = true, element) {
  overlay.style.display = "flex";
  overlay.addEventListener("click", handleCrossClick);
  cross.addEventListener("click", handleCrossClick);
  modal.addEventListener("click", handleModalClick);
  content.appendChild(element);
  //   modal.textContent = content;
  if (!showCross) {
    cross.style.display = "none";
    cross.removeEventListener("click", handleCrossClick);
  }
  if (!shouldOverlayClose) {
    overlay.removeEventListener("click", handleCrossClick);
  }
}
function resetModal() {
  cross.style.display = "block";
  content.innerHTML = "";
  //   modal.textContent = "";
}
function handleModalClick(e) {
  e.stopPropagation();
}

function handleCrossClick() {
  overlay.style.display = "none";
  resetModal();
}
