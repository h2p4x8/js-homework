'use strict';

function slider(container) {
  let navButton = Array.from(container.getElementsByClassName('slider-nav')[0].getElementsByTagName('a'));
  const slides = container.querySelector('.slides');
  slides.firstElementChild.classList.add('slide-current');


  const next = navButton.find( el => el.dataset.action === 'next');
  next.addEventListener('click', event => moveSlider(true))
  const prev = navButton.find( el => el.dataset.action === 'prev');
  prev.addEventListener('click', event => moveSlider(false))
  const first = navButton.find( el => el.dataset.action === 'first');
  first.addEventListener('click', event => moveTo(true))
  const last = navButton.find( el => el.dataset.action === 'last');
  last.addEventListener('click', event => moveTo(false))
  navButton.forEach(el => el.addEventListener('click', checkSlide))


  function moveSlider(isForward) {
      const currentSlide = container.querySelector('.slide-current');
      let activatedSlide = undefined;
      if (!currentSlide.nextElementSibling&&isForward) {
        activatedSlide = slides.lastElementChild;
      } else if (!currentSlide.previousElementSibling&&!isForward) {
        activatedSlide = slides.firstElementChild;
      } else {
        activatedSlide = isForward ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
      }
      currentSlide.classList.remove('slide-current');
      activatedSlide.classList.add('slide-current');
    }

  function moveTo(isForward) {
    const currentSlide = container.querySelector('.slide-current');
    const activatedSlide = isForward ? slides.firstElementChild : slides.lastElementChild;

    currentSlide.classList.remove('slide-current');
    activatedSlide.classList.add('slide-current');
  }

  function checkSlide() {
    const currentSlide = container.querySelector('.slide-current');
    if (currentSlide.nextElementSibling&&currentSlide.previousElementSibling) {
      navButton.forEach(el => el.classList.remove('disabled'))
      return;
    } else if (!currentSlide.nextElementSibling) {
      last.classList.add('disabled');
      next.classList.add('disabled');
      first.classList.remove('disabled');
      prev.classList.remove('disabled');
    } else if (!currentSlide.previousElementSibling) {
      first.classList.add('disabled');
      prev.classList.add('disabled');
      last.classList.remove('disabled');
      next.classList.remove('disabled');
    }
  }
}

const sliders = document.querySelectorAll('.slider');
Array.from(sliders).forEach(item => slider(item));
