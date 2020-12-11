"use strict";

let numberOfFilms;
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function start() {
    numberOfFilms = +prompt(`How much movies have you seen?`, '');

   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt(`How much movies have you seen?`, '');
   }
}

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDb.privat);


function writeYourGenres() {
    for(let i = 1; i <= 3; i++)
    {
        const a = prompt(`Your favourite genres No ${i} ?`,'');
        if( a != null && a != ''){
            personalMovieDb.genres[i-1] = a;
        } else {
            console.log('Error');
        }
    }
}

function rememberMyFilms(){
    for ( let i = 0; i < 2;  i++){
        const a = prompt('One of last seen movies?',''),
                b = prompt('Rate it?','');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }      
    }
}

function showMyDB(hidden) {
    if( !hidden){
        console.log(personalMovieDb);
    }

}

function detectPersonalLevel(){
    if( personalMovieDb.count < 10){
        console.log("Not much film watched");
    } else if ( personalMovieDb >= 10 && personalMovieDb < 30) {
        console.log("You are classical watcher");
    } else if ( personalMovieDb.count >= 30){
        console.log("You've watched to mush movies");
    } else {
        console.log("Error");
    }
}




