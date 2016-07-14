'use strict';

export default function (parent, query) {
  const title = parent.querySelector('.metrics__title');
  const genre = parent.querySelector('.metrics__genre');
  const rating = parent.querySelector('.metrics__rating--number');
  const image = parent.querySelector('.image-box__img');
  const summary = parent.querySelector('.summary__content');
  const actors = parent.querySelector('.actors__content');

  fetch(`http://netflixroulette.net/api/api.php?title=${query}`)
    .then((res) => res.json())
    .then((data) => {
      title.innerText = data.show_title;
      genre.innerText = data.category;
      rating.innerText = data.rating;
      image.src = data.poster;
      summary.innerText = data.summary;
      actors.innerText = data.show_cast;
    });
}
