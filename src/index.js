'use strict';

import netflixResult from 'netflixResult';

export default function (parent) {
  // const query = parent.querySelector('search__bar').value;

  const searchBtn = parent.querySelector('.search__btn');

  function update() {
    const query = 'attack on titan';
    netflixResult(parent, query);
  }

  searchBtn.addEventListener('click', update);
}
