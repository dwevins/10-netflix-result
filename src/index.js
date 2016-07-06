'use strict';

import netflixResult from 'netflixResult';

export default function (parent) {
  // const query = parent.querySelector('search__bar').value;
  const query = 'attack on titan';
  netflixResult(parent, query);
}
