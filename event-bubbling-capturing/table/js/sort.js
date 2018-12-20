'use strict';

function handleTableClick(event) {
  if (!event.target.classList.contains('prop__name')){
    return;
  }

  let sortDirection = 1;
  if (event.target.dataset.dir === '1') {
      sortDirection = -1;
  }
  event.target.dataset.dir = sortDirection;
  table.dataset.sortBy = event.target.dataset.propName;
  sortTable(table.dataset.sortBy, sortDirection);
}
