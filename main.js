"use strict";
const box = document.querySelector(".box");
let prevRatio = 1;
const ratios = [];
for (let i = 1.0; i <= 20; i++) {
  const ratio = i / 20;
  ratios.push(ratio);
}

ratios.push(0);
console.log(ratios);

const changeColor = function (entries) {
  console.log(entries[0].intersectionRatio);
  if (entries[0].intersectionRatio > prevRatio) {
    entries[0].target.style.backgroundColor = `rgb(33, 10, 240, ${entries[0].intersectionRatio})`;
  } else {
    entries[0].target.style.backgroundColor = `rgba(190, 40, 40, ${entries[0].intersectionRatio})`;
  }

  prevRatio = entries[0].intersectionRatio;
};

const observer = new IntersectionObserver(changeColor, {
  root: null,
  threshold: ratios,
});
observer.observe(box);
