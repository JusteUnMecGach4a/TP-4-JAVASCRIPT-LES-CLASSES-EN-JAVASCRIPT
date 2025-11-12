class Voiture {
    constructor(marque, annee) {
        this._marque = marque; 
        this._annee = annee;   
    }

    getMarque() {
        return this._marque;
    }

    getAnnee() {
        return this._annee;
    }

    setMarque(nouvelleMarque) {
        this._marque = nouvelleMarque;
    }

    setAnnee(nouvelleAnnee) {
        this._annee = nouvelleAnnee;
    }
}

function creationObjetsClasse() {
    const maRenault = new Voiture("Renault", 2023);
    const maPeugeot = new Voiture("Peugeot", 2020);

    const conteneur = document.getElementById('resultats-voitures');
    conteneur.innerHTML = ''; 

    // Affichage Console
    console.log("--- Instanciation et Affichage Console ---");
    console.log(`Objet 1 : ${maRenault.getMarque()} (${maRenault.getAnnee()})`);
    console.log(`Objet 2 : ${maPeugeot.getMarque()} (${maPeugeot.getAnnee()})`);
    console.log("----------------------------------------");
    
    // Affichage HTML
    const pRenault = document.createElement('p');
    pRenault.textContent = `Voiture 1 : Marque = ${maRenault.getMarque()}, Année = ${maRenault.getAnnee()}.`;
    conteneur.appendChild(pRenault);
    
    const pPeugeot = document.createElement('p');
    pPeugeot.textContent = `Voiture 2 : Marque = ${maPeugeot.getMarque()}, Année = ${maPeugeot.getAnnee()}.`;
    conteneur.appendChild(pPeugeot);
}
