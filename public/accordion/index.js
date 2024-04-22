const container = document.getElementById("container");
function boxClick(e) {
  for (let i = 0; i < container.children.length; i++) {
    if (container.children[i].contains(e.target)) {
      if (
        container.children[i]
          .getElementsByClassName("content")[0]
          .classList.contains("active")
      ) {
        console.log("if");
        container.children[i]
          .getElementsByClassName("content")[0]
          .classList.remove("active");
      } else {
        console.log("else");
        container.children[i]
          .getElementsByClassName("content")[0]
          .classList.add("active");
      }
    } else {
      console.log("else");
      container.children[i]
        .getElementsByClassName("content")[0]
        .classList.remove("active");
    }
  }
  document.getElementsByClassName("content")[0].classList.contains("active");
}
container.addEventListener("click", boxClick);
// const boxContainer = document.getElementsByClassName("box");
// boxContainer[0].addEventListener("click", boxClick);
