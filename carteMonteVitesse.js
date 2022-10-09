class CarteMonteVitesse {
    nom;
    vitesse;

    constructor(nom, vitesse) {
        this.nom = nom;
        this.vitesse = vitesse;
    }

    action(joueur) {
        joueur.cartesVitesse.push(this);
        //joueur.cartesVitesse.push(this);
        //joueur.vitesse += this.vitesse;
    }
}