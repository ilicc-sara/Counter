"use strict";
import "./style.css";

const incrBtn = document.querySelector(".incr");
const decrBtn = document.querySelector(".decr");

const count1El = document.querySelector(".count-1");
const count2El = document.querySelector(".count-2");
const count3El = document.querySelector(".count-3");

const btns = document.querySelectorAll(".btn");
const btns1 = document.querySelectorAll(".btn-1");
const btns2 = document.querySelectorAll(".btn-2");

const counterCreator = function () {
  let count = 0;

  const getCounter = () => count;
  const incrCount = () => (count += 1);
  const decrCount = () => (count -= 1);
  // return getCounter;
  return { getCounter, incrCount, decrCount };
};

const counter1 = counterCreator();
const counter2 = counterCreator();
const counter3 = counterCreator();
// const counter2 = counterCreator();

// counter1.incrCount();
console.log("counter1:", counter1.getCounter());

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("incr")) {
      counter1.incrCount();
    } else {
      counter1.decrCount();
    }
    count1El.textContent = counter1.getCounter();
  })
);

btns1.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("incr")) {
      counter2.incrCount();
    } else {
      counter2.decrCount();
    }
    count2El.textContent = counter2.getCounter();
  })
);

btns2.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("incr")) {
      counter3.incrCount();
    } else {
      counter3.decrCount();
    }
    count3El.textContent = counter3.getCounter();
  })
);
