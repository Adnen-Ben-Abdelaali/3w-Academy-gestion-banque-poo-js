"use strict";

class Client {

  constructor(nom) {
    this.nom = nom;
    this.nombresDeComptes = [];
  }

  getSolde() {
    let soldeTotal = 0;

    for(let i = 0; i < this.nombresDeComptes.length; i++) {
      soldeTotal += this.nombresDeComptes[i].solde;
    }

    return soldeTotal;
  }

  afficherComptes() {
    
    for(let i = 0; i < this.nombersDeComptes.length; i++) {
      console.log(`le compte numéro ${this.nombersDeComptes[i].numero}
       est crédité de $${this.nombresDeComptes[i].solde}`);
    }
  }

  ajouterCompte(compte) {

    this.nombresDeComptes.push(compte);
  }
}
