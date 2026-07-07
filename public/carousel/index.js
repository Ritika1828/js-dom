let active = 0;
const content = $(".content").length;
const container = $("#container");
const dots = $(".dotsContainer");
const dotBtn = $(".dots");
console.log(content);
$("#left").click(function () {
  console.log("this", container);
  if (content > 0) active -= 1;
  container.css("transform", `translateX(${active * -100}%)`);
});
$("#right").click(function () {
  console.log("this", container);
  if (content - 1 > active) active += 1;
  container.css("transform", `translateX(${active * -100}%)`);
});

dots.click(function (e) {
  console.log(e.currentTarget);
  if (e.target.closest(".dots")) {
    const selected = e.target;
    console.log("okk", selected);
    const current = Number(selected.dataset.id) - 1;

    active = current;
    container.css("transform", `translateX(${active * -100}%)`);

    for (let i = 0; i < dotBtn.length; i++) {
      dotBtn[i].classList.remove("active");
    }
    selected.classList.add("active");
  }
});
