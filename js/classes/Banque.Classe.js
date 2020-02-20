"use strict";

class Banque {

  constructor() {

    this.nombreDeClients = new Array();
  }

  ajouterClient(client) {
    this.nombreDeClients.push(client);
  }

  rechercherCLient(nomDuClient) {

    for(let i = 0; i < this.nombreDeClients.length; i++) {
      
      if(nomDuClient === this.nombreDeClients[i].nom) {
        return this.nombreDeClients[i];
      } 

    }

    return null;
  }

  bilanClient(nomClient) {

    if(this.rechercherCLient(nomClient) !== null) {
      console.log(this.rechercherCLient(nomClient).getSolde());
    }

  }

  bilanGeneral() {

    for(let i = 0; i < this.nombreDeClients.length; i++) {
      this.bilanClient(this.nombreDeClients[i].nom);
    }
  }

}

