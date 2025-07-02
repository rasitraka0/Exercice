let circleOne = document.getElementById("circle-one");

let circleTwo = document.getElementById("circle-two");
console.log(circleOne, circleTwo);

circleOne.addEventListener("click", function () {
  if (circleOne.classList.contains("circle-normal-one")) {
    circleOne.classList.remove("circle-normal-one");
    circleOne.classList.add("circle-reverse-one");
  } else {
    circleOne.classList.remove("circle-reverse-one");
    circleOne.classList.add("circle-normal-one");
  }
});

circleTwo.addEventListener("click", function () {
  if (circleTwo.classList.contains("circle-normal-two")) {
    circleTwo.classList.remove("circle-normal-two");
    circleTwo.classList.add("circle-reverse-two");
  } else {
    circleTwo.classList.remove("circle-reverse-two");
    circleTwo.classList.add("circle-normal-two");
  }
});
