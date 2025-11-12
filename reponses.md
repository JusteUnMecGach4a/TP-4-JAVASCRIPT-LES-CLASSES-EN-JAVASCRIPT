# TP-4 JAVASCRIPT : LES CLASSES EN JAVASCRIPT

## Réponse aux questions 1 et 2 (Donner la classe Voiture possédant 2 caractéristiques : la marque et l’année. Donner 2 méthodes accesseur nommées getMarque et getAnnee permettant de renvoyer respectivement la marque et l’année de l’objet considéré.)

```
javascript class Voiture { constructor(marque, annee) { this._marque = marque; this._annee = annee; }

getMarque() {
    return this\.\_marque;
}

getAnnee() {
    return this\.\_annee;
}

setMarque(nouvelleMarque) {
    this\.\_marque = nouvelleMarque;
}

setAnnee(nouvelleAnnee) {
    this\.\_annee = nouvelleAnnee;
}
}
```

## Réponse à la question 3 (Donner la création de 2 objets de la classe Voiture : pour une Renault de 2023 et une Peugeot de 2020.)

```
javascript const maRenault = new Voiture("Renault", 2023); 
const maPeugeot = new Voiture("Peugeot", 2020);
```
