'use strict';

function randName() {
  return Math.random().toString( 36 ).substr(2);
}

function loadData(url, fun) {
  const callbackName = randName();
  return new Promise((done, fail) => {
    window[callbackName] = fun;

    const script = document.createElement('script');
    script.src = `${url}?jsonp=${callbackName}`;
    document.body.appendChild(script);
  });
}

function makeCart(data) {
  document.querySelector('[data-pic]').style = `background-image: url(${data.pic})`;
  document.querySelector('[data-title]').innerText = data.title;
  document.querySelector('[data-ingredients]').innerText = data.ingredients.join(', ');
}

function makeRating(data) {
  document.querySelector('[data-rating]').innerHTML = data.rating.toFixed(2);
  document.querySelector('[data-star]').style = `width: ${data.rating / 10 * 100}%`;
  document.querySelector('[data-votes]').innerHTML = data.votes;
}

function makeConsumers(data) {
  let container = document.querySelector('[data-consumers]');
  data.consumers.forEach( (el) => {
    container.innerHTML += `<img src=${el.pic} title="${el.name}">`;
  })
  container += `<span>(${data.total})</span>`;
}

loadData('https://neto-api.herokuapp.com/food/42', makeCart );
loadData('https://neto-api.herokuapp.com/food/42/rating', makeRating);
loadData('https://neto-api.herokuapp.com/food/42/consumers', makeConsumers)
