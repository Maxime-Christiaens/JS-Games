let TheArray = ["Entrée", "Menu", "En-tête", "Les boutons réseaux sociaux", "Section Films", "Section Featured Movies", "Section Shop Movie", "Section Contact Us", "Section Footer"];

TheArray.sort(() => 0.5 - Math.random());
console.log(TheArray);

const max = document.getElementById("max");
const matt = document.getElementById("matt");
const thomas = document.getElementById("thomas");

max.innerHTML ="max :"+TheArray[0];
matt.innerHTML ="matt :"+TheArray[1];
thomas.innerHTML ="Thomas :"+TheArray[2];