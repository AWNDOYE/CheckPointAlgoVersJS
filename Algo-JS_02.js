function calculerSommeEnsemble (arr01, arr02){
    let elt_Trouve ,i,j,mon_Elt ,sum= 0;
    i = 0;
    j = 0;
    mon_Elt = [];
    elt_Trouve = false;
    
            for(i = 0; i< arr01.length-1;i++){
                for (j =0; j< arr02.length -1;j++) {
                    if (arr01[i] === arr02[j]) {
                        elt_Trouve = true;
                    }
                    if (elt_Trouve == false) {
                        sum = sum + arr01[i];
                    mon_Elt = mon_Elt + arr01[i] + " , ";
                    }
                }
            
            }
        console.log("Résultat :" + sum + "( " + mon_Elt +" )");
       
        return sum;
    }
    console.log(calculerSommeEnsemble([3, 1, 7, 9],[2, 4, 1, 9, 3]));