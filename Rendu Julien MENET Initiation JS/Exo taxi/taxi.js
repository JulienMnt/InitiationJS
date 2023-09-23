"use strict";
let i = 0;
let musique;

class Personnage{
    constructor(prenom,santementale){
        this.prenom = prenom;
        this.santementale = santementale;
    }
}
let tabmusique = ["Anissa - Wejdene", "Saiyan - Angele", "Meridian - Dave ft.Tiakola", "Bolide allemand - SDM", "Meuda -Tiakola"]

function numeroaléatoire(){
    return (Math.floor(Math.random() * 5));
}

let joe = new Personnage("Joe",10);

while(i<30 && joe.santementale > 0){
    musique = tabmusique[numeroaléatoire()];
    console.log(musique);
    if(musique == "Anissa - Wejdene"){
        joe.santementale--
    }
    else{}

    if(joe.santementale == 0){
        console.log("Explosion")
    }
    else if(i == 29){
        console.log("Félicitation vous avez complété le parcours");
    }
    else{
        console.log("Vous passez le ", +i+1, "eme feu rouge, la musique est ", musique, ". Il vous reste ",
        +joe.santementale, "Points de santé mentale");
    }
    i++
}