$(function () {//permet d'exécuter le code quand toute la page est 100% chargée.
    let ListeImgs = ["imgs/anehihan.jpg", "imgs/chatminou.jpg", "imgs/chientoutou.jpg", "imgs/lamacrachat.jpg", "imgs/lapinscrottes.jpg", "imgs/lionnegraou.jpg", "imgs/oursbaby.jpg", "imgs/anehihan.jpg", "imgs/chatminou.jpg", "imgs/chientoutou.jpg", "imgs/lamacrachat.jpg", "imgs/lapinscrottes.jpg", "imgs/lionnegraou.jpg", "imgs/oursbaby.jpg"];

    ListeImgs.sort(() => 0.5 - Math.random());
    //randomise la liste

    for (let i=0; i<14; i++){
        $("#img"+i).attr("src",ListeImgs[i]);
    }    
    //attribution aléatoire des images

    $(".imgsPaireDIV").click(function (event) {
        let CA = event.target;//récupére l'info du click
        $(CA).parent().toggleClass("flip");//donne à la div de l'image la class flip
        let CAID = CA.id;
        console.log(CAID);
        //$(`#${CAID}`).delay(200).fadeIn();//passe l'opacité à 1 (fadeIn()) en 200 ms pour l'objet contenu dans Cécile
        document.getElementById(CAID).style.opacity = "1";
        //$("#img0").delay(200).fadeIn();
    });
})

//document.getElementById(clicked.id)
//test
