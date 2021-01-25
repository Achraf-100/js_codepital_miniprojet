import {marc,docteur, optim, goku, vader, colon} from "../main.js"
import {porteMonnaie} from "../objeet/objet.js"

export class Marcus {
    constructor(nom,maladie,argent,poche,etatSante){
        this.nom = 'Marcus',
        this.maladie = 'Mal indente',
        this.argent = 100,
        this.poche = 'vide',
        this.etatSante = 'malade'

    }
    goTo(lieu3){
        this.lieu3 = lieu3
        lieu3.personnes.push(marc.nom)
        console.log(`${marc.nom} est actuellement entré dans le ${this.lieu3.nom}`)
    }
}
export class Optimus {
    constructor(nom,maladie,argent,poche,etatSante){
        this.nom = 'Optimus',
        this.maladie = 'Unsave',
        this.argent = 200,
        this.poche = 'vide',
        this.etatSante = 'malade'
    }
    goTo(lieu3){
        this.lieu3 = lieu3
        lieu3.personnes.push(optim.nom)
        console.log(`${optim.nom} est actuellement entré dans le ${this.lieu3.nom}`)
    }
}

export class Sangoku {
    constructor(nom,maladie,argent,poche,etatSante){
        this.nom = 'Sangoku',
        this.maladie = '404',
        this.argent = 80,
        this.poche = 'vide',
        this.etatSante = 'malade'
    }
    goTo(lieu3){
        this.lieu3 = lieu3
        lieu3.personnes.push(goku.nom)
        console.log(`${goku.nom} est actuellement entré dans le ${this.lieu3.nom}`)
    }
}

export class DarthVader {
    constructor(nom,maladie,argent,poche,etatSante){
        this.nom = 'DarthVader',
        this.maladie = 'azmatique',
        this.argent = 110,
        this.poche = 'vide',
        this.etatSante = 'malade'
    }
    goTo(lieu3){
        this.lieu3 = lieu3
        lieu3.personnes.push(vader.nom)
        console.log(`${vader.nom} est actuellement entré dans le ${this.lieu3.nom}`)
    }
}

export class Semicolon {
    constructor(nom,maladie,argent,poche,etatSante){
        this.nom = 'Semicolon',
        this.maladie = 'syntaxError',
        this.argent = 60,
        this.poche = 'vide',
        this.etatSante = 'malade'
    }
    goTo(lieu3){
        this.lieu3 = lieu3
        lieu3.personnes.push(colon.nom)
        console.log(`${colon.nom} est actuellement entré dans le ${this.lieu3.nom}`)
    }
}


export class Debugger {
    constructor(nom){
        this.nom = 'Debugger'
    }
}