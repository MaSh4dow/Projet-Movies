const fs = require('fs'); // gestionnaire de fichier node (Create / read / Write / Copy / rename)
const jsonFile = require  ('./movies2.json'); // acces to movies.json


const yearsChoosen = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
yearsChoosen.question('Quelle année de film souhaitez vous ? ', years => {
    years = parseInt(years)
      
    jsonFile.forEach((film) => {
    var release_date = film.release_date;
    const filmReleaseDate = new Date(release_date * 1000);
//    console.log (release_date);

    if (years === filmReleaseDate.getFullYear()){
          console.log(film);
    }else{
          //console.log('cette année est pas valide');
    }

    if (film.release_date)

    yearsChoosen.close();
    });
});

let filmWithDateArray = []
const filmsFormated = JSON.stringify(filmWithDateArray);
  
