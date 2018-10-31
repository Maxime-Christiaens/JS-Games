//step 0 
//récupération des src des images 
let ListeImgsRaw = [];
for (let j = 0; j < 6; j++){
    ListeImgsRaw += document.getElementById("img"+j).src + " ";
}
let ListeImgs = ListeImgsRaw.split(' ');
//enlèves les espaces pour récupérer créer un tableau avec chaque URL des imgs
ListeImgs.sort(() => 0.5 - Math.random());
//radomiser la liste

//step 1 
//Réattribution aléatoire des images au ID
//la boucle incrémente à chaque tour une image aléatoirement distribué
for (let k = 0; k < 6; k++){
    document.getElementById("img"+k).src = ListeImgs[k];
}

//step 1 bis
//idem pour la deuxième liste
ListeImgs.sort(() => 0.5 - Math.random());
//randomisation de nouveau la liste
for (let k = 0; k < 6; k++){
    document.getElementById("imgBis"+k).src = ListeImgs[k];
}
