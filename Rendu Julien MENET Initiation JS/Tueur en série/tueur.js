"use strict";

let survivantactuel;
let nom;
let caracteristique;
let typeattaque = 2;
let i = 0;

let tueur = ["Jason", 100];
let tabnoms = ["Brandon","Théo","Thomas","Noah","Jules","Rachid","Theodort","Loris","Marco","Marc"];
let tabcaracteristique = ["Nerd","Sportif","Buiznessman","Intello","Enfant","Idiot","Beau gosse"]

class survivants{
    constructor(nom,caracteristique,probmort,probdegats,probmortetdegats){
        this.nom = nom;
        this.caracteristique = caracteristique;
        this.probmort = probmort;
        this.probdegats = probdegats;
        this.probmortetdegats = probmortetdegats;
    }
}

function nouveausurvivant(survivant){
    let mort,deg,mortdeg,tot,mul;
    mort = Math.random();
    deg = Math.random();
    mortdeg = Math.random();
    tot = mort + deg + mortdeg;
    mul = 1/tot;
    survivant.nom = tabnoms[rand(10)];
    survivant.caracteristique = tabcaracteristique[rand(7)];
    survivant.probmort = mort*mul;
    survivant.probdegats = deg*mul;
    survivant.probmortetdegats = mortdeg*mul;
    return survivant;
}
function rand(nbr){
    return Math.floor(Math.random() * nbr);
}
function attaque(mort,deg,mortdeg){
    let x;
    let y;
    x = Math.random();
    if (x < mort){
        y = 1;
    }
    else if (x < mort + deg){
        y = 2;
    }
    else{
        y = 3;
    }
    return y;
}
while(tueur[1]> 0 && i < 5){
    survivantactuel = new survivants;
    survivantactuel = nouveausurvivant(survivantactuel);
    console.log("Le survivant ", survivantactuel.nom, "apparait, c'est un ", survivantactuel.caracteristique);
    while (typeattaque == 2 && tueur[1] > 0){
        typeattaque = attaque(survivantactuel.probmort,survivantactuel.probdegats,survivantactuel.probmortetdegats);
        console.log(survivantactuel.nom, " tente d'attaquer:");
        switch(typeattaque){
            case 1:
                console.log(survivantactuel.nom, " est mort les points de vie de ", tueur[0] , "restent de ", +tueur[1]);
                break;
            case 2:
                tueur[1] = tueur[1] - 10;
                console.log(survivantactuel.nom, " a infligé des degats à ", tueur[0], ", il lui reste alors ", +tueur[1], " points de vie");
                break;
            case 3:
                tueur[1] = tueur[1] - 15;
                console.log(survivantactuel.nom, " est mort mais a infligé des degats à ", tueur[0], ", il lui reste alors ", +tueur[1], " points de vie");
                break;
        }    
    }
    typeattaque = 2;
    i++;
    if(tueur[1] < 1){
        console.log(tueur[0], " est mort, la partie est finie, les survivants ont gagnés");
    }
    else if(i == 5){
        console.log("Les survivants n'ont pas réussi a tuer ", tueur[0], ". Il a gagné");
    }   
}