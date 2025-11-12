class Voiture {
    constructor(marque, annee) {
        // Les propriétés sont souvent préfixées d'un underscore (_)
        // lorsqu'elles sont gérées par des Setters/Getters.
        this._marque = marque; 
        this._annee = annee;
    }

    // 1. GETTER (Accesseur) pour la marque
    get marque() {
        return this._marque;
    }

    // 2. SETTER (Mutateur) pour la marque
    set marque(nouvelleMarque) {
        this._marque = nouvelleMarque;
    }

    // 3. GETTER (Accesseur) pour l'année
    get annee() {
        return this._annee;
    }

    // 4. SETTER (Mutateur) pour l'année
    set annee(nouvelleAnnee) {
        this._annee = nouvelleAnnee;
    }
}
