'use strict';

import netflixResult from 'netflixResult';

export default function (parent) {
  const searchBtn = parent.querySelector('.search__btn');

  function update() {
    const query = parent.querySelector('.search__bar').value;
    console.log(query);
    netflixResult(parent, query);
  }

  searchBtn.addEventListener('click', update);
}
