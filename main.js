"use strict";
import "./style.css";

let count1 = 0;
let count2 = 0;
let count3 = 0;

const incrBtn = document.querySelector(".incr");
const decrBtn = document.querySelector(".decr");

const count1El = document.querySelector(".count-1");
const count2El = document.querySelector(".count-2");
const count3El = document.querySelector(".count-3");

// console.log(incrBtn, decrBtn);
// console.log(count1El, count2El, count3El);

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
