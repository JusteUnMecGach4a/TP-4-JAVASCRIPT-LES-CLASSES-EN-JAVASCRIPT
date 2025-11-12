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

// =====================================
// INSTANCIATION (Consigne)
// =====================================

const maRenault = new Voiture("Renault", 2023);
const maPeugeot = new Voiture("Peugeot", 2020);


// =====================================
// FONCTION D'AFFICHAGE (Optionnel, pour voir le résultat dans le HTML)
// =====================================

function afficherVoitures() {
    const conteneur = document.getElementById('resultats-voitures');
    if (!conteneur) return; // Sécurité

    const elements = [maRenault, maPeugeot];

    elements.forEach(voiture => {
        const p = document.createElement('p');
        // Utilisation des méthodes accesseurs (Getters)
        p.textContent = `Marque : ${voiture.getMarque()}, Année : ${voiture.getAnnee()}`;
        conteneur.appendChild(p);
    });

    console.log("Objets instanciés :");
    console.log(maRenault);
    console.log(maPeugeot);
}

// Exécute l'affichage une fois que la page est chargée
document.addEventListener('DOMContentLoaded', afficherVoitures);
