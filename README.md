# 3w-Academy-gestion-banque-poo-js

On souhaite développer une application permettant de modéliser le fonctionnement d’une banque.
Partie 1 : Classe Compte
Implémenter la classe Compte permettant de représenter le compte d’un client. Un Compte est
caractérisé par un numéro et le solde disponible. De plus, cette classe devra implémenter les
méthodes suivantes :
 constructeur paramétré permettant d’initialiser les deux champs.
 afficherCompte() : permettant d’afficher le numéro du compte et le solde disponible.
 deposer(valeur) : pour faire un dépôt sur le compte.
 retirer(valeur) : pour faire un retrait sur le compte. Attention : le retrait n’est possible que
si le solde disponible est supérieur à la valeur de retrait.
 transferer(valeur, compteDestinataire) : pour faire un virement vers un autre compte.
Attention : le virement est possible seulement si le solde disponible est suffisant pour faire
le virement.
Partie 2 : Classe Client
Écrire la classe Client permettant de représenter un client de la banque. Un client est caractérisé par
son nom et les comptes qu’il possède dans la banque. Les comptes du client seront stockés dans un
tableau. La classe Client devra posséder les méthodes suivantes :
 Constructeur paramétré permettant d’initialiser le nom seulement.
 getSolde() : renvoyant le total des soldes des comptes du client.
 afficherComptes() : permettant d’afficher tous les comptes du client.
 ajouterCompte(compte) : qui ajoute un nouveau compte au client.
Partie 3 : Classe Banque
De même qu’un client peut avoir plusieurs comptes, une banque peut avoir plusieurs clients. Créer
une classe Banque possédant les méthodes :
 ajouterClient(client) : ajoute un client à la banque
 rechercherClient(nomClient) : recherche si le client dont le nom est passé en paramètre est
un client de la banque. La méthode renvoie le client s’il est trouvé sinon la méthode renvoie
null.
N.B : On supposera que les noms n’existent qu’une seule fois.
 bilanClient(nomClient) qui affiche le solde de tous les comptes d’un client ainsi que le
solde général du client.
 bilanGeneral() : affiche le bilan de tous les clients de la banque.
Partie 4 : Programme principal
Écrire un programme principal permettant de :



créer une banque,
ajouter deux clients à la banque. Le 1 er client possède deux comptes et le deuxième possède
un seul compte,
afficher le bilan général de tous les clients.