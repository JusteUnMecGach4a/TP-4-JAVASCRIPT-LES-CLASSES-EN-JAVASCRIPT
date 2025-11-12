```javascript
class Voiture {
constructor$marque, annee$ {
this.marque = marque;
this.annee = annee;
}
}
```

```
javascript class Voiture { constructor(marque, annee) { this._marque = marque; this._annee = annee; }
//Accesseurs demandés
getMarque() {
    return this\.\_marque;
}

getAnnee() {
    return this\.\_annee;
}

// Mutateurs pour la complétude
setMarque(nouvelleMarque) {
    this\.\_marque = nouvelleMarque;
}

setAnnee(nouvelleAnnee) {
    this\.\_annee = nouvelleAnnee;
}
}
```

```
javascript const maRenault = new Voiture("Renault", 2023);
const maPeugeot = new Voiture("Peugeot", 2020);
```
