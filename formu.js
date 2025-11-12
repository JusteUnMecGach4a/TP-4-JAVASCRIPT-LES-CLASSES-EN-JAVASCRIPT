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
