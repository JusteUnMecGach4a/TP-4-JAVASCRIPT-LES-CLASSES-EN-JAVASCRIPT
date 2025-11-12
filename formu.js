class Voiture {
    /**
     * Constructeur pour initialiser la marque et l'année.
     * @param {string} marque 
     * @param {number} annee 
     */
    constructor(marque, annee) {
        this._marque = marque; // Propriété 1
        this._annee = annee;   // Propriété 2
    }

    // ===================================
    // ACCESSEURS (Getters) - Consigne TP E6-TP4
    // ===================================

    getMarque() {
        return this._marque;
    }

    getAnnee() {
        return this._annee;
    }

    // ===================================
    // MUTATEURS (Setters) - Ajoutés pour la logique
    // ===================================

    setMarque(nouvelleMarque) {
        this._marque = nouvelleMarque;
    }

    setAnnee(nouvelleAnnee) {
        this._annee = nouvelleAnnee;
    }
}
