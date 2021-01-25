import {Marcus,Optimus,Sangoku,DarthVader,Semicolon,Debugger} from "./class/class.js"
import {cimetiere,lieu,lieu2,lieu3,porteMonnaie} from "./objeet/objet.js";
import {traitement,payement,payementPharmacie, jugement,traitement2,
    traitement3,traitement4,traitement5,payement1,payement2,payement3,payement4,
    payementPharmacie1,payementPharmacie2,payementPharmacie3,payementPharmacie4,
    jugement1,jugement2,jugement3,jugement4} from "./function/function.js";

export let marc = new Marcus()
export let optim = new Optimus()
export let goku = new Sangoku()
export let vader = new DarthVader()
export let colon = new Semicolon()
export let docteur = new Debugger()
lieu.deplacement()

// Marcus

console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log('_______________');
marc.goTo(lieu3)
lieu3.welcome(marc)
console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log(`La maladie de ${marc.nom} est ${marc.maladie}`);
traitement(marc)
payement(marc)
console.log(`${marc.nom} a actuellement ${marc.argent}`);
console.log(`${marc.nom} a quitté le ${lieu3.nom}`);
lieu2.goToo(marc)
// console.log(lieu2.personnes);
console.log(`${marc.nom} est allé à la ${lieu2.nom}`);
console.log(`Le traitement de ${marc.nom} à la ${lieu2.nom} coute ${lieu2.traitementMarcus}`);
payementPharmacie(marc)
jugement(marc)
console.log(`${marc.nom} est mort, donc il est au ${cimetiere.nom}`);
cimetiere.dead(marc)
// console.log(cimetiere.personnes);

// Optimus

console.log('________________');
console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log('_______________');
optim.goTo(lieu3)
lieu3.welcome(optim)
console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log(`La maladie de ${optim.nom} est ${optim.maladie}`);
traitement2(optim)
payement1(optim)
console.log(`${optim.nom} a actuellement ${optim.argent}`);
console.log(`${optim.nom} a quitté le ${lieu3.nom}`);
lieu2.goToo(marc)
// console.log(lieu2.personnes);
console.log(`${optim.nom} est allé à la ${lieu2.nom}`);
console.log(`Le traitement de ${optim.nom} à la ${lieu2.nom} coute ${lieu2.traitementMarcus}`);
payementPharmacie1(optim)
jugement1(optim)
console.log(`${optim.nom} est ${optim.etatSante}, donc il est au Iles Canaries`);
// console.log(cimetiere.personnes);

// Goku

console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log('_______________');
goku.goTo(lieu3)
lieu3.welcome(goku)
console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log(`La maladie de ${goku.nom} est ${goku.maladie}`);
traitement3(goku)
payement2(goku)
console.log(`${goku.nom} a actuellement ${goku.argent}`);
console.log(`${goku.nom} a quitté le ${lieu3.nom}`);
lieu2.goToo(goku)
// console.log(lieu2.personnes);
console.log(`${goku.nom} est allé à la ${lieu2.nom}`);
console.log(`Le traitement de ${goku.nom} à la ${lieu2.nom} coute ${lieu2.traitementMarcus}`);
payementPharmacie2(goku)
jugement2(goku)
console.log(`${goku.nom} est mort, donc il est au ${cimetiere.nom}`);
cimetiere.dead(goku)
// console.log(cimetiere.personnes);

// DarthVader

console.log('________________');
console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log('_______________');
vader.goTo(lieu3)
lieu3.welcome(vader)
console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log(`La maladie de ${vader.nom} est ${vader.maladie}`);
traitement4(vader)
payement3(vader)
console.log(`${vader.nom} a actuellement ${vader.argent}`);
console.log(`${vader.nom} a quitté le ${lieu3.nom}`);
lieu2.goToo(marc)
// console.log(lieu2.personnes);
console.log(`${vader.nom} est allé à la ${lieu2.nom}`);
console.log(`Le traitement de ${vader.nom} à la ${lieu2.nom} coute ${lieu2.traitementMarcus}`);
payementPharmacie3(vader)
jugement3(vader)
console.log(`${vader.nom} est ${vader.etatSante}, donc il est au Iles Canaries`);
// console.log(cimetiere.personnes);

// Colon
console.log('________________');
console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log('_______________');
colon.goTo(lieu3)
lieu3.welcome(colon)
console.log(`Dans la salle d'attente il y'a donc ${lieu.personnes.length} personnes`);
console.log(`La maladie de ${colon.nom} est ${colon.maladie}`);
traitement5(colon)
payement4(colon)
console.log(`${colon.nom} a actuellement ${colon.argent}`);
console.log(`${colon.nom} a quitté le ${lieu3.nom}`);
lieu2.goToo(colon)
// console.log(lieu2.personnes);
console.log(`${colon.nom} est allé à la ${lieu2.nom}`);
console.log(`Le traitement de ${colon.nom} à la ${lieu2.nom} coute ${lieu2.traitementMarcus}`);
payementPharmacie4(colon)
jugement4(colon)
console.log(`${colon.nom} est mort, donc il est au ${cimetiere.nom}`);
cimetiere.dead(colon)
// console.log(cimetiere.personnes);