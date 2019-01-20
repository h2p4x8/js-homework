'use strict';

let movedPiece = null;
//let minY, minX, maxX, maxY;
let startPositionX = 0,
    startPositionY = 0;
let shiftX = 0,
    shiftY = 0;

document.addEventListener('mousedown', event => {
  if (event.target.classList.contains('logo')) {
    movedPiece = event.target;
    startPositionX = event.target.style.left;
    startPositionY = event.target.style.top;
  }
});

document.addEventListener('mousemove', event => {
  if (movedPiece) {
    // Предотвращаем выделение текста
    event.preventDefault();
    shiftX = event.pageX - (movedPiece.offsetWidth	 / 2);
    shiftY = event.pageY - (movedPiece.offsetHeight / 2);
    movedPiece.classList.add('moving');
    movedPiece.style.left = shiftX + 'px';
    movedPiece.style.top = shiftY + 'px';
  }
});

document.addEventListener('mouseup'
  , event => {
    if (movedPiece) {
      movedPiece.style.visibility = 'hidden';
      const trashBin = document
      .elementFromPoint(event.clientX, event.clientY)
      .closest('#trash_bin');
      movedPiece.style.visibility = 'visible';
    if (trashBin) {
      movedPiece.classList.remove('moving');
      movedPiece.style.display = 'none';
      movedPiece = null;
    } else {
      movedPiece.classList.remove('moving');
      movedPiece.style.left = startPositionX;
      movedPiece.style.top = startPositionY;
      movedPiece = null;
    }
  }
});
