'use strict';

function randName() {
  return Math.random().toString( 36 ).substr(2);
}

function makeProfile(data) {
  document.querySelector('[data-name]').innerText = data.name;
  document.querySelector('[data-description]').innerText = data.description;
  document.querySelector('[data-pic]').src = data.pic;
  document.querySelector('[data-position]').innerText = data.position;
  let url = `https://neto-api.herokuapp.com/profile/${data.id}/technologies`;

  loadData(url)
    .then(makeContent)
    .catch(err => console.log(err));

  document.querySelector('.content').style.display = 'initial';
}

function makeContent(data) {
  const badgesCard = document.querySelector('[data-technologies]');
  data.forEach( (el) => {
    badgesCard.innerHTML += `<span class="devicons devicons-${el}"></span>`;
  })
}

function loadData(url) {
  const callbackName = randName();
  return new Promise((done, fail) => {
    window[callbackName] = done;

    const script = document.createElement('script');
    script.src = `${url}?jsonp=${callbackName}`;
    document.body.appendChild(script);
  });
}

loadData('https://neto-api.herokuapp.com/profile/me')
  .then(makeProfile)
  .catch(err => console.log(err));
