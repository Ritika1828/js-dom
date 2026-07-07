const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function addTask() {
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  span.setAttribute("data-id", "edit");
  span.textContent = input.value;
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("data-id", "edit");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("data-id", "delete");

  listItem.appendChild(span);
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);
}

addBtn.addEventListener("click", addTask);

function createElementByName(element) {
  return document.createElement(element);
}

list.addEventListener("click", (e) => {
  console.log(e.target, e.currentTarget);
  if (e.target.tagName === "BUTTON") {
    if (e.target.dataset.id === "delete") {
      e.target.closest("li").remove();
    } else if (e.target.dataset.id === "edit") {
      const span = e.target.previousSibling;
      const input = createElementByName("input");
      input.value = span.textContent;
      e.target.closest("li").replaceChild(input, span);
      e.target.textContent = "update";
      e.target.setAttribute("data-id", "update");
    } else if (e.target.dataset.id === "update") {
      const input = e.target.previousSibling;
      const span = createElementByName("span");
      span.textContent = input.value;
      e.target.closest("li").replaceChild(span, input);
      e.target.textContent = "Edit";
      e.target.setAttribute("data-id", "edit");
    }
  }
});
// (() => {

//   let value;
//   let count = 0;
//   input.addEventListener("input", (e) => {
//     value = e.target.value;
//   });
//   addBtn.addEventListener("click", addTask);
//   function addTask() {
//     count++;
//     let x = count;
//     input.value = "";
//     const listItem = document.createElement("li");
//     const span = document.createElement("span");
//     span.setAttribute("id", `span-${count}`);
//     span.innerHTML = value;

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.setAttribute("data-id", "edit");

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     console.log("add", this);
//     editBtn.addEventListener("click", function () {
//       console.log("text", this.dataset.id);
//       if (this.getAttribute("data-id") === "edit") {
//         const span = document.getElementById(`span-${x}`);
//         const input = document.createElement("input");
//         input.setAttribute("id", `editInput-${count}`);
//         input.value = span.textContent;
//         editBtn.textContent = "update";
//         span.remove();
//         editBtn.setAttribute("data-id", "update");
//         listItem.prepend(input);
//       } else {
//         const editInput = document.getElementById(`editInput-${count}`);
//         const span = document.createElement("span");
//         span.setAttribute("id", `span-${x}`);
//         console.log("edit", editInput.value);
//         span.textContent = editInput.value;
//         editInput.remove();
//         listItem.prepend(span);
//         editBtn.setAttribute("data-id", "edit");
//         // input.value = value;
//         editBtn.textContent = "Edit";
//       }
//     });

//     deleteBtn.addEventListener("click", () => {
//       listItem.remove();
//     });

//     listItem.appendChild(span);
//     listItem.appendChild(editBtn);
//     listItem.appendChild(deleteBtn);

//     list.appendChild(listItem);
//   }
// })();
