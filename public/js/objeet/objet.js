import {marc,optim,goku,vader,colon,docteur} from "../main.js"

export let cimetiere = {
    nom : 'Cimetiere des legendes',
    personnes : [],

    dead(a){
        this.personnes.push(a)
        lieu2.personnes.splice(lieu2.personnes.indexOf(a))
    }
}

export let lieu = {
    nom: 'Salle d attente',
    personnes : [],

    deplacement(){
        this.personnes.push(marc)
        this.personnes.push(optim)
        this.personnes.push(goku)
        this.personnes.push(vader)
        this.personnes.push(colon)
    }
}

export let lieu2 = {
    nom: 'Pharmacie',
    personnes : [],
    traitementMarcus : 60,

    goToo(a){
        this.personnes.push(a)
        lieu3.personnes.splice(lieu3.personnes.indexOf(a),1)
    }
}

export let lieu3 = {
    nom : 'Cabinet',
    personnes : [],
    welcome(a){
        this.personnes.push(a)
        lieu.personnes.splice(lieu.personnes.indexOf(a),1)
    }
}

export let porteMonnaie = {
    nom: 'Porte Monnaie du Doc',
    argent : 0,
    tarif : 50
}
