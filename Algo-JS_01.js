function countVoyelle (arr){
    let cpt_Voyelle, cpt_NbMot ,i,j = 0;
    cpt_NbMot = 1;
    cpt_Voyelle = 0;
    i = 0;
    j = 0;
    let tab_Voyelle  = ["a","o","i","u","e","y"];// initialisation tableau voyelle
        if(arr[arr.length -1] != "."){
            console.log("Veuillez corriger la phrase et mettre un point à la fin")
        }else{
          
            for(i = 0; i< arr.length-1;i++){
                if (arr[i] === " ") {
                    cpt_NbMot = cpt_NbMot + 1;
                }
                for (j =0; j< tab_Voyelle.length -1;j++) {
                    if (arr[i] === tab_Voyelle[j]) {
                        cpt_Voyelle += 1;
                    }
                    
                }
            
            }
        }
        console.log(" La phrase : " +  arr + " comporte " + cpt_NbMot + " mots et "+cpt_Voyelle + " voyelles.");
        return cpt_NbMot;
    }
    console.log(countVoyelle("elle court loin."));