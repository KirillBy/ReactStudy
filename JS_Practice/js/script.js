"use strict";

const numberOfFilms = +prompt(`How much movies have you seen?`, '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of last seen movies?',''),
b = prompt('Rate it?',''),
c = prompt('One of last seen movies?',''),
d = prompt('Rate it?','');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);

