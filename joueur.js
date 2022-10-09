class Joueur {
    static count = 0;
    nom;
    deck;
    cartesVitesse = [];
    roule;


    constructor(nom, deck) {
        this.id = ++this.constructor.count;
        this.nom = nom;
        this.deck = deck;
        this.cartesVitesse = [];
        this.roule = false;
    }

    ditPrenom() {
        console.log("eh oh je m'appelle " + this.nom);
    }

    montreDeck() {
        let res = `---------------------------------------------\n${this.nom}'s deck :`;
        for(let carte of this.deck) {
            res += `\n${carte.nom}`;
        }
        res += `\n---------------------------------------------`;
        return res;
    }

    calculeVitesse() {
        let vitesseActuelle = 0;
        for(let carte of this.cartesVitesse) {
            vitesseActuelle += carte.vitesse;
        }
        return vitesseActuelle;
    }

    utilise(carte) {
        //check si la carte est bien dans son deck sinon annule

        //effectue l'action liée à la carte

        //retire la carte de son deck
    }
}