// const observer= new MutationObserver()

const div = document.createElement("div");

setTimeout(() => {
  document.body.appendChild(div);
}, 3000);

function waitForElement(selector) {
  return new Promise((resolve, reject) => {
    const observer = new MutationObserver((mutations) => {
      console.log("called", mutations);
      const ele = document.querySelector(selector);
      if (ele) {
        observer.disconnect();
        resolve(10);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subTress: true,
    });
  });
}
waitForElement("div").then((data) => {
  console.log(data);
});
