'use strict';

export default function (parent, query) {
  const movieFetch = fetch(`http://netflixroulette.net/api/api.php?title=${query}`);
  const movieJson = movieFetch.then((res) => res.json());
  movieJson.then((data) => {
    console.log(data);
  });
}
