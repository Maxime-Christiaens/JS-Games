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
let Bonus30 = 0;
//0 car le bonus va être à 1 et donc doubler la valeur de base qui est 1
let Bonus30Price = 500; 
//Prix de base pour l'achat du bonus
let BonusTimer = 0; 
let DoIt = false;

const cookie = document.getElementById("cookie");
//stock l'id de l'image du cookie dans la variable cookie
const multi = document.getElementById("multi");
//stock l'id du boutton multi dans la variable 
const autoC = document.getElementById("autoC");
//stock l'id du boutton autoC dans la variable 
const autoBonus = document.getElementById("autoBonus");
//stock l'id du boutton autoC dans la variable
const bonus = document.getElementById("Bonus");

cookie.addEventListener("click", function(){
    //au clique sur l'image 
    score += ((1+Bonus30)*multiplicateur);
    //augmente le score de 1
    function affiche(){
        return document.getElementById("score").innerHTML = score;
        //affiche le score sur le p dans le hmtl 
    }
    //Activation / désactivation des boutons
    /*
    if (score < multiPrice){
        multi.disabled = true;
    }
    else if(score >= multiPrice){
        multi.disabled = false;
        //active le bouton multi
    } 
    */
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
//bonus x 2 pendant 30 sec 
bonus.addEventListener("click", function(){
    if (score >= Bonus30Price && BonusTimer <= 30){
        score -=  Bonus30Price;
        Bonus30 = 1;
        DoIt = true;
        if (DoIt){
            setInterval(function(){
                if (BonusTimer < 30 && DoIt){
                    BonusTimer += 1;           
                    bonus.innerHTML = BonusTimer;
                    bonus.innerHTML = "Bonus * 2 activé "+BonusTimer;
                }
                else if (BonusTimer >= 30){
                    Bonus30 = 0; 
                    BonusTimer = 0;
                    Bonus30Price *= 2;
                    bonus.innerHTML = Bonus30Price+" cookies pour obtenir cookies *2 sur 30 sec !";
                    DoIt = false;
                }
            }, 1000);
        }
    }
});
//multiplicateur de base
multi.addEventListener("click", function(){
    if (score >= multiPrice){
        multiplicateur += 1;
        score -= multiPrice;
        multiPrice *= 2;
        multi.innerHTML = "Multiplicateur +"+multiplicateur+" Prochaine niveau accessible pour "+multiPrice+" cookies";    
    }
});
//autoCliqueur
autoC.addEventListener("click", function(){
    setInterval(function(){
        if (autoClick == 0 && autoClikActivation){
            score += ((1*multiplicateur)+AutoClickBonus);
            //augmente le score de 1*multi
            document.getElementById("score").innerHTML = score;
            //affiche le score sur le p dans le hmtl
            autoClick = 1;
            autoC.disabled = true;
            //multi.disabled = true;
            //désactive le bouton multi 
        } 
        else if (autoClick == 1 && autoClikActivation){
            //pendant 0.5 s ne fait rien puis switch en autoClick = 0 ce qui relance le click auto pendant 0.5s donc ça fait 1 click par seconde
            autoClick = 0;
        }
        else if (score >= ActivationSeuil && autoClikActivation == false){
            score -= ActivationSeuil;
            autoClikActivation = true;
            //multi.disabled = false;
            autoC.innerHTML = "Auto-Clik Activé level 1";
            //active le bouton
        }
    }
    , 500);// 1000 = 1 sec
});
//bonus de l'auto-cliqueur
autoBonus.addEventListener("click", function(){
    if(autoClikActivation && score >= BonusAutoSeuil && AutoClickBonus >= 0){
        score -= BonusAutoSeuil;
        AutoClickBonus += 1;
        BonusAutoSeuil *= 2; 
        //augmentation du seuil du bonus * 2 
        //autoBonus.disabled = false;
        //active le bouton
        autoC.innerHTML = ("Auto-Clik Activé level "+(1+AutoClickBonus));
        autoBonus.innerHTML =("Prochain bonus de click pour "+BonusAutoSeuil+" cookies");
    }
});