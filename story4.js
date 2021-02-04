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
    let filmWithDateArray = []
    const filmsFormated = JSON.stringify(filmWithDateArray);
    let tryFilm = filmsFormated
    
    function sort(filmsFormated){
        var changed;
        do{
            changed = false;
            for(var i=0; i < filmsFormated.length-1; i++) {
                if(filmsFormated[i] > filmsFormated[i+1]) {
                    var tmp = filmsFormated[i];
                    filmsFormated[i] = filmsFormated[i+1];
                    filmsFormated[i+1] = tmp;
                    changed = true;
                }
            }
        } while(changed);
    }
    
    sort(filmsFormated);
    console.log(filmsFormated);

    yearsChoosen.close();
    });
});


  
