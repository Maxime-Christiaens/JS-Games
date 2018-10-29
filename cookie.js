let score = 0;
let multiplicateur = 1;
let multiPrice = 50;
let autoClick = 0;
let autoClikActivation = false;
let ActivationSeuil = 200;
let BonusAutoSeuil = 300;
//cout du bonus de l'auto click
let AutoClickBonus = 0;
//bonus de base à + 0 logique

const cookie = document.getElementById("cookie");
//stock l'id de l'image du cookie dans la variable cookie
const multi = document.getElementById("multi");
//stock l'id du boutton multi dans la variable 
const autoC = document.getElementById("autoC");
//stock l'id du boutton autoC dans la variable 
const autoBonus = document.getElementById("autoBonus");
//stock l'id du boutton autoC dans la variable

cookie.addEventListener("click", function(){
    //au clique sur l'image 
    score += (1*multiplicateur);
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
    if(autoClikActivation == false && score < BonusAutoSeuil){
        autoBonus.disabled == true; 
        //désactive le bonus de l'autoclick si l'auto click n'est pas actif et si le score n'est pas supérieur ou égale au prix du bonus de l'auto click 
    }
    else if(autoClikActivation && score >= BonusAutoSeuil){
        autoBonus.disabled == false;
    }
    affiche();
});

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
            score += ((1*multiplicateur)+AutoClickBonus);
            //augmente le score de 1*multi
            document.getElementById("score").innerHTML = score;
            //affiche le score sur le p dans le hmtl
            autoClick = 1;
            autoC.disabled = true;
            multi.disabled = true;
            //désactive le bouton multi 
            return score;
        } 
        else if (autoClick == 1 && autoClikActivation){
            //pendant 0.5 s ne fait rien puis switch en autoClick = 0 ce qui relance le click auto pendant 0.5s donc ça fait 1 click par seconde
            autoClick = 0;
        }
        else if (score >= ActivationSeuil && autoClikActivation == false){
            score -= ActivationSeuil;
            autoClikActivation = true;
            multi.disabled = false;
            autoC.innerHTML = "Auto-Clik Activé level 1";
            //active le bouton
        }
        }
    , 500);// 1000 = 1 sec
});
//bonus de l'auto-cliqueur
autoBonus.addEventListener("click", function(){
    if(autoClikActivation && score >= BonusAutoSeuil && AutoClickBonus == 0){
        score -= BonusAutoSeuil;
        AutoClickBonus += 1;
        BonusAutoSeuil *= 2; 
        //augmentation du seuil du bonus * 2 
        //autoBonus.disabled = false;
        //active le bouton
        autoC.innerHTML = ("Auto-Clik Activé level "+(1+AutoClickBonus));
        autoBonus.innerHTML =("Prochain bonus de click pour "+BonusAutoSeuil+" cookies")
    }
    else if(autoClikActivation && score >= BonusAutoSeuil && AutoClickBonus > 0){
        score -= BonusAutoSeuil;
        AutoClickBonus += 1;
        BonusAutoSeuil *= 2; 
        //augmentation du seuil du bonus * 2 
        autoC.innerHTML = ("Auto-Clik Activé level "(1+AutoClickBonus));
        autoBonus.innerHTML =("Prochain bonus de click pour "+BonusAutoSeuil+" cookies")
    }
});