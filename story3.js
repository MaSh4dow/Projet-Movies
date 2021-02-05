const fs = require('fs')

let jsonFile = require ('./movies.json')

let start = new Date().getTime();
function swap(tab,a,b){
    let swapVar = tab[b];
    tab[b] = tab[a];
    tab[a] = swapVar;
}
function bubbleSort(tab){
    for(let i = tab.length - 1; i > 1; i--){
        for(let j = 0; j < i; j++){
            let case1 = tab[j+1];
            let case2 = tab[j];
            if (case1.release_date < case2.release_date){
                swap(tab,j,j+1);
            }
        }
    }
}

bubbleSort(jsonFile);
jsonFile = JSON.stringify(jsonFile,null,'\t');
fs.writeFileSync('./movies.sort.date.json', jsonFile);
let stop = new Date().getTime();
console.log("time : " + ((stop - start) / 1000) + "s");