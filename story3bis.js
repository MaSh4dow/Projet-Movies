const fs = require('fs');

let jsonFile = require('./movies.json');

let start = new Date().getTime();
function swapBis(tab,a,b){
    let swapVar = tab[b]
    tab[b] = tab[a];
    tab[a] = swapVar;
}
function bubbleSortBis(tab){
    for(let i = tab.length - 1 ; i > 1 ; i--){
        for(let j = 0 ; j < i ; j++){
            let case1 = tab[j+1];
            let case2 = tab[j];
            if(case1.title < case2.title){
                swapBis(tab,j,j+1)
            }
        }
    }
}

bubbleSortBis(jsonFile);
jsonFile = JSON.stringify(jsonFile,null,'\t');
fs.writeFileSync('./movies.sort.titre.json', jsonFile);
let stop = new Date().getTime();
console.log("time : " + ((stop - start) / 1000) + "s")