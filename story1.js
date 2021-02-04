const fs = require('fs'); // gestionnaire de fichier node (Create / read / Write / Copy / rename)
//const { title } = require('process');
// const { stringify } = require('querystring');
//const { connect } = require('http2');
const jsonFile = require  ('./movies.json'); // acces to movies.json
//const FileOut = require ('./movies.out.json')



const moviesObjToString = JSON.stringify(jsonFile);
//    console.log (typeof moviesObjToString);
//    console.log(moviesObjToString);


const toJsonMovies = JSON.parse(moviesObjToString);
//    console.log(typeof toJsonMovies);
//    console.log(toJsonMovies);
let start = new Date().getTime();
var filmWithDateArray = [];
jsonFile.forEach((film) => {
    var release_date = film.release_date;
//    console.log (release_date);

    const filmReleaseDate = new Date(release_date * 1000);
//   console.log(moonLanding.getFullYear()); 
    film.title = film.title + " " + filmReleaseDate.getFullYear();
    console.log (film);
    filmWithDateArray.push(film);
    }
);

const filmsFormated = JSON.stringify(filmWithDateArray);

fs.writeFileSync('movies.out.json', filmsFormated);
let stop = new Date().getTime();
console.log("time : " + ((stop - start) / 1000) + "s");


   
// writefilessync
