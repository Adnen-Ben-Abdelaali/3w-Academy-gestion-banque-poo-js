"use strict";


class Compte {

  constructor(numero, solde) {
    this.numero = parseInt(numero);
    this.solde = parseFloat(solde);
  }

  toString() {

    return `le numéro du client est : ${this.numero},
            son solde est : ${this.solde}`;
  }

  afficherCompte() {
    console.log(this.toString());
  }

  deposer(valeur) {
    this.solde += parseFloat(valeur);
  }

  retirer(valeur) {

    if(this.solde >= parseFloat(valeur)) {
      this.solde -= parseFloat(valeur);
    }else {
      console.log(`Désolé : il est impossible de vous attribuer le montant $${valeur} 
                  Votre solde courant est $${this.solde}`);
    }
  }

  transferer(valeur, compteDestinataire) {

    if(this.solde >= parseFloat(valeur)) {
      this.solde -= parseFloat(valeur);
      compteDestinataire.solde += parseFloat(valeur);
    }
  }
}

