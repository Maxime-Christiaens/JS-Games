$(function () {//permet d'exécuter le code quand toute la page est 100% chargée.
/*     let ListeImgs = ["imgs/anehihan.jpg", "imgs/chatminou.jpg", "imgs/chientoutou.jpg", "imgs/lamacrachat.jpg", "imgs/lapinscrottes.jpg", "imgs/lionnegraou.jpg", "imgs/oursbaby.jpg", "imgs/anehihan.jpg", "imgs/chatminou.jpg", "imgs/chientoutou.jpg", "imgs/lamacrachat.jpg", "imgs/lapinscrottes.jpg", "imgs/lionnegraou.jpg", "imgs/oursbaby.jpg"]; */
let ListeImgs = ["imgs/anehihan.jpg", "imgs/chatminou.jpg","imgs/anehihan.jpg", "imgs/chatminou.jpg","imgs/lionnegraou.jpg"];

    /*     ListeImgs.sort(() => 0.5 - Math.random());
        //randomise la liste
    
        for (let i = 0; i < 14; i++) {
            $("#img" + i).attr("src", ListeImgs[i]);
        } */

    let first = null;
    let second = null;

    $(".arrayImgs").click(function (event) {
        if (second == null && first != null) {
            second = event.target;
            let secondNumber = second.className;
            console.log(second.style);
            $(second).toggleClass("flip");
            //active l'animation au clique
            $(second)
                .delay(200)
                .queue(function (next) {
                    $(second).css("background-image", "url(" + ListeImgs[secondNumber] + ")");
                });
            if(second.style.cssText == first.style.cssText){
                console.log("gggggggggggggggggggggg");
            }
        }
        else {
            first = (event.target);
            let firstNumber = first.className;
            console.log(first.style);
            $(first).toggleClass("flip");
            //active l'animation au clique
            $(first)
                .delay(200)
                .queue(function (next) {
                    $(first).css("background-image", "url(" + ListeImgs[firstNumber] + ")");
                });
        }
    })
});

