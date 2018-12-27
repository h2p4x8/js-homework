'use strict';

function randName() {
  return Math.random().toString( 36 ).substr(2);
}

function makeContent(data) {
  document.querySelector('[data-wallpaper]').src = data.wallpaper;
  document.querySelector('[data-username]').innerText = data.username;
  document.querySelector('[data-description]').innerText = data.description;
  document.querySelector('[data-pic]').src = data.pic;
  document.querySelector('[data-tweets]').value = data.tweets;
  document.querySelector('[data-followers]').value = data.followers;
  document.querySelector('[data-following]').value = data.following;
}

function loadData(url) {
  const callbackName = randName();
  return new Promise((done, fail) => {
    window[callbackName] = done;

    const script = document.createElement('script');
    script.src = `${url}?callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

loadData('https://neto-api.herokuapp.com/twitter/jsonp')
  .then(makeContent)
  .catch(err => console.log(err));
