function calculerProduitScalaire(arr01, arr02){
    let produitScalaire,i = 0;
    produitScalaire = 0;
    i=0;
            for(i=0; i< arr01.length-1;i++){
                produitScalaire = produitScalaire + arr01[i]* arr02[i];
            }
            console.log(produitScalaire);
            return produitScalaire;
    }
    const num = prompt("Donner la dimension des deux vecteurs ");
    console.log(num)
    let i = 0;
    let arr01 = [];
    let arr02 = [];
    for (i=0; i< num; i++){
        arr01[i] = prompt("Donner l'élément du vecteur arr01 à la position ",i);
        arr02[i] = prompt("Donner l'élément du vecteur arr02 à la position ",i);
    }
    console.log(arr01,arr02);
    if(calculerProduitScalaire (arr01,arr02) === 0){
        console.log(" Les deux vecteurs sont orthoganaux.");
    }else{
        console.log(" Les deux vecteurs ne sont pas orthoganaux.");
    }
     
    