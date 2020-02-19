"use strict";

let banque = new Banque();
let premierClient = new Client('Foulen');
let deuxiemeClient = new Client('Jhon');

premierClient.ajouterCompte(new Compte(40, 45785.21));
premierClient.ajouterCompte(new Compte(41, 58426.15));

deuxiemeClient.ajouterCompte(new Compte(60, 8745.54));

banque.ajouterClient(premierClient);
banque.ajouterClient(deuxiemeClient);
banque.bilanGeneral();