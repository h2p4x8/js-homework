'use strict';

const eyes = document.querySelectorAll('.cat_eye').forEach(el => {
  document.addEventListener('mousemove', event => tracking(event, el))
})

function tracking(event, eye) {
  const area = eye.closest('div');
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  let percentX = event.pageX / width;
  let percentY = event.pageY / height;


  // вычисляем центр
  const eyeCenterX = eye.getBoundingClientRect().left + eye.offsetWidth / 2;
  const eyeCenterY = eye.getBoundingClientRect().top + eye.offsetHeight / 2;

  //макс отклонение
  const position = (area.offsetWidth - eye.offsetWidth) / 2 + 1;

  if (event.pageX < eyeCenterX) {
    eye.style.left = percentX * position + 'px';
  } else {
    eye.style.left = percentX * position * 2 + 'px';
  }

  if (event.pageY < eyeCenterY) {
    eye.style.top = percentY * position + 'px';
  } else {
    eye.style.top = percentY * position * 2 + 'px';
  }
}
