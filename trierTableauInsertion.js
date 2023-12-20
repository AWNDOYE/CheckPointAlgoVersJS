function trierTableau(monTab){
    let i = 0;
    let j = 0;
    let valEnCours = 0;
    let newTab = [];
    for(i=0; i < monTab.length -1; i++){
        valEnCours = monTab[i];
        j = i-1;
        monTab = swapValeurs (j,monTab,valEnCours);
        monTab[j+1] = valEnCours;
    }
    console.log(monTab);
    return monTab;
}
let j=0;
let monTabEnCours =[];
let valMax = 0;
function swapValeurs (j,monTabEnCours,valMax){
    while((j>=0) && (monTabEnCours[j] > valMax)){
        monTabEnCours[j+1] = monTabEnCours[j];
        j = j-1;  
    }
    return monTabEnCours;
} 
const monTab = prompt("Saisir les éléments du tableau à trier ")
console.log(trierTableau(monTab));
