'use strict';

import netflixResult from 'netflixResult';

function getQuery() {
  let query = parent.querySelector('.search__bar').value;
  if (query === '') {
    query = 'attack on titan';
  }
  return query;
}

function update() {
  const query = getQuery();
  netflixResult(parent, query);
}

export default function (parent) {
  update(parent);

  const searchBtn = parent.querySelector('.search__btn');
  searchBtn.addEventListener('click', update);
}
