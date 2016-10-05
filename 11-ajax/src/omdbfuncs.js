import $ from 'jquery';

export function showResults(results) {
  const items = results.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  debugger;
  for (let i=0; i<items.length; i++) {
    const item = items[i];
    $('#results').append(`<li>${item.Year} - ${item.Title}</li>`);
  }
}

export function searchFilm(name, cb) {
  $.get('http://omdbapi.com/', { s: name }, cb);
}

export function handleSubmit(ev) {
  const name = $(ev.target).find('input').val();
  searchFilm(name, showResults);
  ev.preventDefault();
}

