//step 0 
//récupération des src des images 
let ListeImgsRaw = [];
for (let j = 0; j < 14; j++){
    ListeImgsRaw += document.getElementById("img"+j).src + " ";
}
let ListeImgs = ListeImgsRaw.split(' ');
//enlèves les espaces pour récupérer créer un tableau avec chaque URL des imgs

ListeImgs.sort(() => 0.5 - Math.random());
console.log(ListeImgs);

//réattribution des images
for (let k = 0; k < ListeImgs.length; k++){
    document.getElementById("img"+k).src = ListeImgs[k];
}

/////////////////////////////////////////////////////////////
//Créer le jeu en lui-même 
//step 0 
const PairesDiv = document.getElementById("GamePaires");
//stock l'id de la div contenant les 2 div contenants les images

let clicked = null;
let clickedBis = null;

PairesDiv.addEventListener('click', function (event) {
    if (clicked != null && clickedBis == null){
        clickedBis = event.target;
        // The event target is our clicked item
        console.log("bis = "+clickedBis.src);
        // Do not allow the grid section itself to be selected; only select divs inside the grid
        if (clicked.nodeName === 'DIV') { return; }
        if (clicked.src == clickedBis.src && clicked != clickedBis){
            console.log("Mais oui, c'est ça !");
            document.getElementById(clicked.id).style.opacity = "0";
            document.getElementById(clickedBis.id).style.opacity = "0";
            clickedBis = null;
            //vide la variable
            clicked = null;
            //vide la variable et permet de rentrer de nouveau dans la première condition
        }
        else{
            clickedBis = null;
            clicked = null; 
            console.log("pas les mêmes images try again");
        }
    }
    else {
        clicked = event.target;
        // The event target is our clicked item
        console.log(clicked.src);
        // Do not allow the grid section itself to be selected; only select divs inside the grid    
    }
});

//this.style.opacity = "0"; 