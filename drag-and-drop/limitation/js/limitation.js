'use script';

const message = document.querySelector('.message');
const text = document.querySelector('.textarea');
const eyes = document.querySelector('.block');
let isFocus = false;

function throttle(callback) {
  let isWaiting = false;
  return function () {
    if (!isWaiting) {
      callback.apply(this, arguments);
      isWaiting = true;
      requestAnimationFrame(() => {
        isWaiting = false;
      });
    }
  }
}

function debounce(callback, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      callback();
    }, delay);
  };
};



text.addEventListener('focus', throttle(()=>{
    eyes.classList.add('active');
    isFocus = true;
}))

text.addEventListener('blur', throttle(()=>{
    eyes.classList.remove('active');
    message.classList.remove('view');
    isFocus = false;
}))

text.addEventListener('keyup', debounce(()=>{
  if (isFocus) {
    message.classList.add('view');
  }
  eyes.classList.remove('active');
}, 2000))

text.addEventListener('keydown', throttle(()=> {
  message.classList.remove('view');
  eyes.classList.add('active');
}))
