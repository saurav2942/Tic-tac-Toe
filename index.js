"use strict";

function check(arr) {
  let array = [
    [arr[0], arr[1], arr[2]],
    [arr[3], arr[4], arr[5]],
    [arr[6], arr[7], arr[8]],
  ];
  for (let i = 0; i < 3; i++) {
    if (array[i][0] === 0) continue;
    let j = 1;
    while (j < 3) {
      if (array[i][j] !== array[i][j - 1] || array[i][j] === 0) break;
      j++;
    }
    if (j === 3) {
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (array[0][i] === 0) continue;
    let j = 1;
    while (j < 3) {
      if (array[j][i] !== array[j - 1][i] || array[j][i] === 0) break;
      j++;
    }
    if (j === 3) {
      return true;
    }
  }
  let i = 1,
    j = 1;
  if (array[0][0] !== 0) {
    while (i < 3) {
      if (array[i][i] !== array[i - 1][i - 1] || array[i][i] === 0) break;
      i++;
    }
  }
  if (i === 3) {
    return true;
  }
  (i = 1), (j = 1);
  if (array[0][2] !== 0) {
    while (j >= 0) {
      if (array[i][j] !== array[i - 1][j + 1] || array[i][j] === 0) break;
      j--;
      i++;
    }
  }
  if (i === 3) {
    return true;
  }
  return false;
}

let btnNewGame = document.getElementById("btn");
let newSpanTag = document.createElement("span");
let wonByX = 0;
let wonByY = 0;
let lostByX = 0;
let lostByY = 0;
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let completed = 0;
let currentPlayer;
let upperChildPara;
let isStarted = false;
btnNewGame.addEventListener("click", (event) => {
  isStarted = true;
  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  completed = 0;
  upperChildPara = document.querySelector(".upper-child-para");
  upperChildPara.innerText = "Currently Playing Player: ";
  currentPlayer = document.createElement("span");
  currentPlayer.innerText = "X";
  currentPlayer.setAttribute("class", "current-player");
  currentPlayer.style.display = "inline";
  upperChildPara.append(currentPlayer);
  document.querySelectorAll(".grid-item > span").forEach((element) => {
    element.style.display = "block";
  });
  document.querySelectorAll(".value-x").forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(".value-y").forEach((element) => {
    element.style.display = "none";
  });
});

let grid = document.querySelector(".grid-container");

grid.addEventListener("click", (event) => {
  let target = event.target;
  let str = target.className;
  if (target.nodeName == "SPAN") {
    target = target.parentElement;
    str = target.className;
  }
  if (
    typeof target.className === "string" &&
    target.className.includes("grid-item") &&
    arr[str[str.length - 1] - 1] === 0 &&
    isStarted
  ) {
    if (currentPlayer.innerText === "X") {
      arr[str[str.length - 1] - 1]++;
      target.querySelector("span").style.display = "none";
      target.querySelector(".value-x").style.display = "block";
      target.querySelector(".value-y").style.display = "none";
    } else {
      arr[str[str.length - 1] - 1]--;
      target.querySelector("span").style.display = "none";
      target.querySelector(".value-x").style.display = "none";
      target.querySelector(".value-y").style.display = "block";
    }
    completed++;
    if (completed === 9) {
      if (check(arr)) {
        if (currentPlayer.innerText == "X") {
          wonByX++;
          lostByY++;
        } else {
          wonByY++;
          lostByX++;
        }
        let playerX = document.querySelector(".p1");
        let playerY = document.querySelector(".p2");
        let wx = playerX.querySelector(".won-matches > span");
        let lx = playerX.querySelector(".lost-matches > span");
        let wy = playerY.querySelector(".won-matches > span");
        let ly = playerY.querySelector(".lost-matches > span");
        wx.innerText = "" + wonByX;
        lx.innerText = "" + lostByX;
        wy.innerText = "" + wonByY;
        ly.innerText = "" + lostByY;
        upperChildPara.innerText =
          currentPlayer.innerText + " Has Won The Match!";
      } else {
        upperChildPara.innerText = "Match Draw!";
      }
      completed = 0;
      isStarted = false;
    } else {
      if (check(arr)) {
        if (currentPlayer.innerText == "X") {
          wonByX++;
          lostByY++;
        } else {
          wonByY++;
          lostByX++;
        }
        let playerX = document.querySelector(".p1");
        let playerY = document.querySelector(".p2");
        let wx = playerX.querySelector(".won-matches > span");
        let lx = playerX.querySelector(".lost-matches > span");
        let wy = playerY.querySelector(".won-matches > span");
        let ly = playerY.querySelector(".lost-matches > span");
        wx.innerText = "" + wonByX;
        lx.innerText = "" + lostByX;
        wy.innerText = "" + wonByY;
        ly.innerText = "" + lostByY;
        upperChildPara.innerText =
          currentPlayer.innerText + " Has Won The Match!";
        completed = 0;
        isStarted = false;
      } else {
        if (currentPlayer.innerText === "X") {
          currentPlayer.innerText = "Y";
        } else {
          currentPlayer.innerText = "X";
        }
      }
    }
  }
});
