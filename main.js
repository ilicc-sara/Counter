"use strict";
import "./style.css";

const count1El = document.querySelector(".count-1");
const count2El = document.querySelector(".count-2");
const count3El = document.querySelector(".count-3");

const btns = document.querySelectorAll(".btn");

const counterCreator = function () {
  let count = 0;

  const getCounter = () => count;
  const incrCount = () => (count += 1);
  const decrCount = () => (count -= 1);
  return { getCounter, incrCount, decrCount };
};

const counter1 = counterCreator();
const counter2 = counterCreator();
const counter3 = counterCreator();

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("incr")) {
      if (e.target.dataset.id === "1") counter1.incrCount();
      if (e.target.dataset.id === "2") counter2.incrCount();
      if (e.target.dataset.id === "3") counter3.incrCount();
    } else {
      if (e.target.dataset.id === "1") counter1.decrCount();
      if (e.target.dataset.id === "2") counter2.decrCount();
      if (e.target.dataset.id === "3") counter3.decrCount();
    }

    count1El.textContent = counter1.getCounter();
    count2El.textContent = counter2.getCounter();
    count3El.textContent = counter3.getCounter();
  })
);
