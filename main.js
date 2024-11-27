"use strict";
import "./style.css";

const incrBtn = document.querySelector(".incr");
const decrBtn = document.querySelector(".decr");

const count1El = document.querySelector(".count-1");
const count2El = document.querySelector(".count-2");
const count3El = document.querySelector(".count-3");

const btns = document.querySelectorAll(".btn");

// console.log(incrBtn, decrBtn);
// console.log(count1El, count2El, count3El);

const counterCreator = function () {
  let count = 0;

  const getCounter = () => count;
  const incrCount = () => (count += 1);
  const decrCount = () => (count -= 1);
  // return getCounter;
  return { getCounter, incrCount, decrCount };
};

const counter1 = counterCreator();
// const counter2 = counterCreator();

// counter1.incrCount();
console.log("counter1:", counter1.getCounter());
// console.log("counter2:", counter2.getCounter());

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("incr")) {
      counter1.incrCount();
      count1El.textContent = counter1.getCounter();
      count2El.textContent = counter1.getCounter();
      count3El.textContent = counter1.getCounter();
    } else {
      counter1.decrCount();
      count1El.textContent = counter1.getCounter();
      count2El.textContent = counter1.getCounter();
      count3El.textContent = counter1.getCounter();
    }
  })
);

/*
let count1 = 0;
let count2 = 0;
let count3 = 0;

incrBtn.addEventListener("click", function (e) {
  count1++;
  count1El.textContent = count1;

  count2++;
  count2El.textContent = count2;

  count3++;
  count3El.textContent = count3;
});

decrBtn.addEventListener("click", function (e) {
  count1--;
  count1El.textContent = count1;

  count2--;
  count2El.textContent = count2;

  count3--;
  count3El.textContent = count3;
});
*/
