$(function () {//permet d'exécuter le code quand toute la page est 100% chargée.
    let ListeImgs = ["imgs/anehihan.jpg", "imgs/chatminou.jpg", "imgs/chientoutou.jpg", "imgs/lamacrachat.jpg", "imgs/lapinscrottes.jpg", "imgs/lionnegraou.jpg", "imgs/oursbaby.jpg", "imgs/anehihan.jpg", "imgs/chatminou.jpg", "imgs/chientoutou.jpg", "imgs/lamacrachat.jpg", "imgs/lapinscrottes.jpg", "imgs/lionnegraou.jpg", "imgs/oursbaby.jpg"];

    ListeImgs.sort(() => 0.5 - Math.random());
    //randomise la liste

    for (let i=0; i<14; i++){
        $("#img"+i).attr("src",ListeImgs[i]);
    }    
    //attribution aléatoire des images

    $(".imgsPaireDIV").click(function (event) {
        let clicked = event.target;

        
        //pour la rotation stylé LOL

        document.getElementById(clicked.id).style.opacity = "1";
    });
})

//document.getElementById(clicked.id)
//