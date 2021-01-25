import {marc,docteur, optim, goku, vader, colon} from "../main.js";
import {porteMonnaie} from "../objeet/objet.js";

export let traitement = () =>{
    if (marc.maladie == 'Mal indente') {
        console.log(`Le traitement pour ${marc.nom} est ctrl+maj+f`);
    }
}
export let traitement2 = () =>{
    if (optim.maladie == 'Unsave') {
        console.log(`Le traitement pour ${optim.nom} est saveOnFocusChange`);
    }
}
export let traitement3 = () =>{
    if (goku.maladie == '404') {
        console.log(`Le traitement pour ${goku.nom} est CheckLinkRelation`);
    }
}
export let traitement4 = () =>{
    if (vader.maladie == 'azmatique') {
        console.log(`Le traitement pour ${vader.nom} est Ventoline`);
    }
}
export let traitement5 = () =>{
    if (colon.maladie == 'syntaxError') {
        console.log(`Le traitement pour ${colon.nom} est f12+doc`);
    }
}



export let payement = () => {
    if (marc.maladie == 'Mal indente') {
        let resultat = marc.argent - porteMonnaie.tarif
        let resultat1 = marc.argent - porteMonnaie.tarif
        marc.argent = resultat1
        porteMonnaie.argent = resultat
        console.log(`${marc.nom} à payé le ${docteur.nom} ${porteMonnaie.tarif}`)
    }
}
export let payement1 = () => {
    if (optim.maladie == 'Unsave') {
        let resultat = optim.argent - porteMonnaie.tarif
        let resultat1 = optim.argent - porteMonnaie.tarif
        optim.argent = resultat1
        porteMonnaie.argent = resultat
        console.log(`${optim.nom} à payé le ${docteur.nom} ${porteMonnaie.tarif}`)
    }
}
export let payement2 = () => {
    if (goku.maladie == '404') {
        let resultat = goku.argent - porteMonnaie.tarif
        let resultat1 = goku.argent - porteMonnaie.tarif
        goku.argent = resultat1
        porteMonnaie.argent = resultat
        console.log(`${goku.nom} à payé le ${docteur.nom} ${porteMonnaie.tarif}`)
    }
}
export let payement3 = () => {
    if (vader.maladie == 'azmatique') {
        let resultat = vader.argent - porteMonnaie.tarif
        let resultat1 = vader.argent - porteMonnaie.tarif
        vader.argent = resultat1
        porteMonnaie.argent = resultat
        console.log(`${vader.nom} à payé le ${docteur.nom} ${porteMonnaie.tarif}`)
    }
}
export let payement4 = () => {
    if (colon.maladie == 'syntaxError') {
        let resultat = colon.argent - porteMonnaie.tarif
        let resultat1 = colon.argent - porteMonnaie.tarif
        colon.argent = resultat1
        porteMonnaie.argent = resultat
        console.log(`${colon.nom} à payé le ${docteur.nom} ${porteMonnaie.tarif}`)
    }
}




export let payementPharmacie = () => {
    if (marc.argent < 60) {
        console.log(`${marc.nom} n'a pas assez pour payer son traitement`);
    }
}
export let payementPharmacie1 = () => {
    if (optim.argent > 60) {
        console.log(`${optim.nom} a assez pour payer son traitement`);
    }
}
export let payementPharmacie2 = () => {
    if (goku.argent < 60) {
        console.log(`${goku.nom} n'a pas assez pour payer son traitement`);
    }
}
export let payementPharmacie3 = () => {
    if (vader.argent >= 60) {
        console.log(`${vader.nom} a assez pour payer son traitement`);
    }
}
export let payementPharmacie4 = () => {
    if (colon.argent < 60) {
        console.log(`${colon.nom} n'a pas assez pour payer son traitement`);
    }
}




export let jugement = () => {
    if (marc.etatSante == 'malade') {
        marc.etatSante = 'mort'
        console.log(`${marc.nom} est ${marc.etatSante}`);
    }
}
export let jugement1 = () => {
    if (optim.etatSante == 'malade') {
        optim.etatSante = 'Vivant'
        console.log(`${optim.nom} est ${optim.etatSante}`);
    }
}
export let jugement2 = () => {
    if (goku.etatSante == 'malade') {
        goku.etatSante = 'mort'
        console.log(`${goku.nom} est ${goku.etatSante}`);
    }
}
export let jugement3 = () => {
    if (vader.etatSante == 'malade') {
        vader.etatSante = 'vivant'
        console.log(`${vader.nom} est ${vader.etatSante}`);
    }
}
export let jugement4 = () => {
    if (colon.etatSante == 'malade') {
        colon.etatSante = 'mort'
        console.log(`${colon.nom} est ${colon.etatSante}`);
    }
}

