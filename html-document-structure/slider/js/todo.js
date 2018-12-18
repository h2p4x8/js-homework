'use strict';

const doneList = document.querySelector('.done'),
      undoneList = document.querySelector('.undone'),
      labels = Array.from(document.getElementsByTagName('label'));

labels.forEach((el) => {
  el.addEventListener('click', isChecked);
});

function isChecked() {
  const checkbox = this.querySelector('input');
  if (checkbox.checked) {
    doneList.appendChild(this);
    return;
  } else {
    undoneList.appendChild(this);
  }
}
