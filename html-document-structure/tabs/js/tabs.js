'use strict';

const tabsNav = document.querySelector('.tabs-nav'),
      tabsContent = document.querySelector('.tabs-content'),
      articles = Array.from(tabsContent.children);

document.addEventListener('DOMContentLoaded', makeTabs);
Array.from(tabsNav.children).forEach(el => el.addEventListener('click', makeActiv));

function makeTabs() {
    const demoTab = tabsNav.firstElementChild;

    for (let article of articles) {
      article.classList.add('hidden')
      demoTab.firstElementChild.innerText = article.dataset.tabTitle;
      demoTab.firstElementChild.classList.add(article.dataset.tabIcon);

      let tab = demoTab.cloneNode(true);
      tabsNav.appendChild(tab)
    }

    tabsNav.removeChild(demoTab);
    tabsNav.firstElementChild.classList.add('ui-tabs-active');
    tabsContent.firstElementChild.classList.remove('hidden')
}

function makeActiv() {
  const navs = Array.from(tabsNav.children);
  if (this.classList.contains('ui-tabs-active')) {
    return;
  }
  navs.forEach( el => el.classList.remove('ui-tabs-active'));
  articles.forEach(el => el.classList.add('hidden'));

  this.classList.add('ui-tabs-active');
  let activatedArticle = articles.find(el => el.dataset.tabTitle.toLowerCase() === this.firstElementChild.innerText.toLowerCase())
  activatedArticle.classList.remove('hidden');
}
