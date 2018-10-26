let score = 0;
let multiplicateur = 1;
let multiPrice = 50;
let autoClick = 0;
let autoClikActivation = false;
let ActivationSeuil = 10;
const cookie = document.getElementById("cookie");
//stock l'id de l'image du cookie dans la variable cookie
const multi = document.getElementById("multi");
//stock l'id du boutton multi dans la variable 
const autoC = document.getElementById("autoC");
//stock l'id du boutton autoC dans la variable 

cookie.addEventListener("click", function(){
    //au clique sur l'image 
    score += 1*multiplicateur;
    //augmente le score de 1
    function affiche(){
        return document.getElementById("score").innerHTML = score;
        //affiche le score sur le p dans le hmtl 
    }
    //Activation / désactivation des boutons
    if (score < multiPrice){
        multi.disabled = true;
    }
    else if(score >= multiPrice){
        multi.disabled = false;
        //active le bouton multi
    } 
    if(score > ActivationSeuil && autoClikActivation == false){
        autoC.disabled = false;
    }
    affiche();
});

//multi.disabled = true;
//désactive le bouton

multi.addEventListener("click", function(){
    if (score >= multiPrice){
        multiplicateur += 1;
        score -= multiPrice;
        multiPrice *= 2;
        multi.innerHTML = "Multiplicateur +"+multiplicateur+" Prochaine niveau accessible pour "+multiPrice+" cookies";    
        return  multiplicateur;
    }
    else {
        multi.innerHTML = "Encore "+(multiPrice-score)+" cookies avant le bonus"; 
    }
});
/*
function autoclikeur(){
    setInterval(function(){
        if (autoClick == 0 && autoClikActivation){
            score += 1*multiplicateur;
            //augmente le score de 1*multi
            document.getElementById("score").innerHTML = score;
            //affiche le score sur le p dans le hmtl
            autoClick = 1;
            return score; 
        }
        else if (autoClick == 1 && autoClikActivation){
            autoC.innerHTML = "Auto-Clik Activé";
            autoClick = 0;
        }
        else if (score == ActivationSeuil && autoClikActivation == false){
            score -= ActivationSeuil;
            autoClikActivation = true;
        }
        }
    , 500);// 1000 = 1 sec
}
autoclikeur();
*/
autoC.addEventListener("click", function(){
    setInterval(function(){
        if (autoClick == 0 && autoClikActivation){
            score += 1*multiplicateur;
            //augmente le score de 1*multi
            document.getElementById("score").innerHTML = score;
            //affiche le score sur le p dans le hmtl
            autoClick = 1;
            autoC.disabled = true;
            if(score >= multiPrice){
                multi.disabled = false;
                //active le bouton multi
            } 
            else if(score >= multiPrice){
                multi.disabled = false;
                //active le bouton multi
            } 
            return score; 
        }
        else if (autoClick == 1 && autoClikActivation){
            autoC.innerHTML = "Auto-Clik Activé";
            autoClick = 0;
        }
        else if (score >= ActivationSeuil && autoClikActivation == false){
            score -= ActivationSeuil;
            autoClikActivation = true;
        }
        }
    , 500);// 1000 = 1 sec
});





