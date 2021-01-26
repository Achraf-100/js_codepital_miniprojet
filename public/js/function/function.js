import {marc,docteur, optim, goku, vader, colon} from "../main.js";
import {tab} from "../main.js";
import {porteMonnaie} from "../objeet/objet.js";


export let traitement = (a) =>{
    tab.forEach(element => {
        if (a.maladie == 'Mal indente' && a.maladie == element.maladie) {
            console.log(`Le traitement pour ${a.nom} est ctrl+maj+f`);
        }else if (a.maladie == 'Unsave'&& a.maladie == element.maladie) {
            console.log(`Le traitement pour ${a.nom} est saveOnFocusChange`);
        }else if (a.maladie == '404'&& a.maladie == element.maladie) {
            console.log(`Le traitement pour ${a.nom} est CheckLinkRelation`);
        }else if (a.maladie == 'azmatique'&& a.maladie == element.maladie) {
            console.log(`Le traitement pour ${a.nom} est Ventoline`);
        }else if (a.maladie == 'syntaxError'&& a.maladie == element.maladie) {
            console.log(`Le traitement pour ${a.nom} est f12+doc`);
        }
    });
}


export let payement = (a) =>{
    tab.forEach(Element => {
        if (a.nom == Element.nom) {
            let resultat = a.argent - porteMonnaie.tarif
            let resultat1 = a.argent - porteMonnaie.tarif
            a.argent = resultat1
            porteMonnaie.argent = resultat
            console.log(`${a.nom} à payé le ${docteur.nom} ${porteMonnaie.tarif}`)
        }
    });
}


export let payementPharmacie = (a) => {
    tab.forEach(element => {
        if (a.argent < 60 && a.nom == element.nom) {
            console.log(`${a.nom} n'a pas assez pour payer son traitement`);
        }else if (a.argent >= 60 && a.nom == element.nom){
            console.log(`${a.nom} a assez pour payer son traitement`);
        }
    });
}


export let jugement = (a) => {
    tab.forEach(element => {
        if (a.argent < 0 && a.nom == element.nom) {
            a.etatSante = 'mort'
            console.log(`${a.nom} est ${a.etatSante}`);
        }else if (a.argent >= 0 && a.nom == element.nom) {
            a.etatSante = 'vivant'
            console.log(`${a.nom} est ${a.etatSante}`);
        }
    });
}