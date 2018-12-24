'use strict';

function slider(container) {
  let navButton = Array.from(container.getElementsByClassName('slider-nav')[0].getElementsByTagName('a'));
  const slides = container.querySelector('.slides');
  slides.firstElementChild.classList.add('slide-current');


  const next = document.querySelector(`a[data-action='next']`);
  const prev = document.querySelector(`a[data-action='prev']`);
  const first = document.querySelector(`a[data-action='first']`);
  const last = document.querySelector(`a[data-action='last']`);
  navButton.forEach(el => el.addEventListener('click', () => {
    moveSlider();
    checkSlide();
  }));
  function moveSlider() {
      const currentSlide = container.querySelector('.slide-current');
      let activatedSlide = undefined;
      console.log(event.target)
      if (!currentSlide.nextElementSibling && event.target.dataset.action === 'next'|| event.target.dataset.action === 'last') {
        activatedSlide = slides.lastElementChild;
      } else if (!currentSlide.previousElementSibling && event.target.dataset.action === 'prev' || event.target.dataset.action === 'first') {
        activatedSlide = slides.firstElementChild;
      } else {
        activatedSlide = event.target.dataset.action === 'next' ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
      }
      currentSlide.classList.remove('slide-current');
      activatedSlide.classList.add('slide-current');
  }

  function checkSlide() {
    const currentSlide = container.querySelector('.slide-current');
    next.classList.toggle('disabled', !currentSlide.nextElementSibling);
    last.classList.toggle('disabled', !currentSlide.nextElementSibling);
    prev.classList.toggle('disabled', !currentSlide.previousElementSibling);
    first.classList.toggle('disabled', !currentSlide.previousElementSibling);
  }
}

const sliders = document.querySelectorAll('.slider');
Array.from(sliders).forEach(item => slider(item));
