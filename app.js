"use strict";

let popUp = document.querySelector('.popUp');
let popupImg = document.querySelector('.popupImg');
let cross = document.querySelector('.cross');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
let allImage = Array.from(document.querySelectorAll('.img img'));
let preveiw = popupImg.querySelector("img");
let position = 0;

function arrowRight() {
  if (position == allImage.length - 1) {
    position = 0;
  } else {
    position++;
  }
  preveiw.src = allImage[position].src;
}

function arrowLeft() {
  if (position == 0) {
    position = allImage.length - 1;
  } else {
    position--;
  }
  preveiw.src = allImage[position].src;
}

function remove() {
    popUp.classList.remove("active");
    popupImg.classList.remove("active");
  }


right.addEventListener("click", arrowRight);
left.addEventListener("click", arrowLeft);
cross.addEventListener("click", remove);

window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') {
    arrowRight();
  } else if (e.key === 'ArrowLeft') {
    arrowLeft();
}
});

popUp.addEventListener("click", (e) => {
  if (e.target.classList.contains('active')) {
    remove();
  }
});

allImage.map((e, index) => {
  e.addEventListener("click", () => {
    position = index;
    popUp.classList.add("active");
    popupImg.classList.add("active");
    preveiw.src = allImage[index].src;
  });
});