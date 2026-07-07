const form = document.querySelector("form");

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const height = document.getElementById("height").value
//     const weight = document.getElementById("weight").value
//     console.log(height, weight)
// });
console.log($("#height"));
$("#calculate").click((e) => {
  e.preventDefault();
  const height = $("#height").val();
  const weight = $("#weight").val();

  console.log(height, weight);

  if (height === "" || height < 0 || isNaN(height)) {
    $("#results").html(`Please give a valid height ${height}`);
    window.alert("empty value");
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    $("#results").html(`Please give a valid weight ${weight}`);
    window.alert("empty value");
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    $("#results").html(`<span>${bmi}</span>`);
  }
});

$("#reset").click((e) => {
  e.preventDefault();
  $("#height").value = "";
  $("#weight").value = "";

  $("#results").html(0);
});
