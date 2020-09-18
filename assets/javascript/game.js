let TeamOneShoot = document.querySelector("#teamone-shoot-button");
let TeamOne = document.querySelector("#teamone-numshots");
let TeamOneGoals = document.querySelector("#teamone-numgoals");

TeamOneShoot.addEventListener("click", function () {
  console.log("TeamOneShoot click");
  let TeamOneShoot = Number(TeamOne.innerHTML) + 1;
  TeamOne.innerHTML = TeamOneShoot;
  if (Math.random() * 100 < 30) {
    let goal1 = Number(TeamOneGoals.innerHTML) + 1;
    TeamOneGoals.innerHTML = goal1;
  }
});

let TeamTwoShoot = document.querySelector("#teamtwo-shoot-button");
let TeamTwo = document.querySelector("#teamtwo-numshots");
let TeamTwoGoals = document.querySelector("#teamtwo-numgoals");

TeamTwoShoot.addEventListener("click", function () {
  console.log("TeamTwoShoot click");
  let TeamTwoShoot = Number(TeamTwo.innerHTML) + 1;
  TeamTwo.innerHTML = TeamTwoShoot;
  if (Math.random() * 100 < 45) {
    let goal2 = Number(TeamTwoGoals.innerHTML) + 1;
    TeamTwoGoals.innerHTML = goal2;
  }
});

let resetButton = document.querySelector("#reset-button");
let numberOfReset = document.querySelector("#num-resets");
console.log("resetButton click");
resetButton.addEventListener("click", function () {
  let resetButton = Number(numberOfReset.innerHTML) + 1;
  numberOfReset.innerHTML = resetButton;

  TeamOne.innerHTML = 0;
  TeamTwo.innerHTML = 0;
  TeamOneGoals.innerHTML = 0;
  TeamTwoGoals.innerHTML = 0;
});
let audio = document.querySelector("#my_audio");
window.onload = function () {
  document.getElementById("my_audio").play;
};
