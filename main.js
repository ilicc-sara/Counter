"use strict";
import "./style.css";

const incrBtn = document.querySelector(".incr");
const decrBtn = document.querySelector(".decr");

const count1El = document.querySelector(".count-1");
const count2El = document.querySelector(".count-2");
const count3El = document.querySelector(".count-3");

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

const counter2 = counterCreator();
const counter1 = counterCreator();

// counter1.incrCount();
// counter1.incrCount();
// counter1.incrCount();
// counter1.incrCount();
// counter1.incrCount();
// console.log(counter.getCounter());

incrBtn.addEventListener("click", function () {
  counter1.incrCount();
  console.log("counter1:", counter1.getCounter());
  count1El.textContent = counter1.getCounter();
  count2El.textContent = counter1.getCounter();
  count3El.textContent = counter1.getCounter();
});

decrBtn.addEventListener("click", function () {
  counter2.decrCount();
  console.log("counter2:", counter2.getCounter());
  count1El.textContent = counter2.getCounter();
  count2El.textContent = counter2.getCounter();
  count3El.textContent = counter2.getCounter();
});

/*

incrBtn.addEventListener("click", function (e) {
  // incrementCount(count1, count2, count3);
  // count1++;

  // count2++;
  count2El.textContent = count2;

  // count3++;
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
