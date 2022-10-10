function create(tag, parent, text, classs=null, id=null) {
	let element = document.createElement(tag)
	if (text)
		element.appendChild(document.createTextNode(text))
	parent.appendChild(element)
	if (classs)
		element.classList.add(classs)
	if (id)
		element.id = id
	return element
}

//deck
let cartes = [
    {
        "nom" : "50kph",
        "type" : "vitesse",
        "vitesse" : 50
    },
    {
        "nom" : "70kph",
        "type" : "vitesse",
        "vitesse" : 70
    },
    {
        "nom" : "feuVert",
        "type" : "feu",
        "fonction" : true
    },
    {
        "nom" : "feuRouge",
        "type" : "feu",
        "fonction" : false
    }
]

let body = document.querySelector("body");
let deck = document.querySelector("#deck");


let J2 = new Joueur("Andouillette", []);

let carte50 = [
    new CarteMonteVitesse("50kph", 50),
    new CarteMonteVitesse("70kph", 70),
    new CarteMonteVitesse("50kph", 50),
    new CarteMonteVitesse("50kph", 50),
];

let J1 = new Joueur("Bob", carte50);

console.log(J1.montreDeck());

//tour de J1
let compteurVitesse = create("p", body);
//let listeCartesVitesse = create("p", body);

for(let carte of J1.deck) {
    let btnCarte = create("button", deck, carte.nom, null, null);

    btnCarte.addEventListener("click", function() {
        carte.action(J1);
        //console.log(J1.montreDeck());
        console.log(J1.calculeVitesse());

        compteurVitesse.remove();
        //listeCartesVitesse.remove();

        compteurVitesse = create("p", body, J1.calculeVitesse());
        //listeCartesVitesse = afficheCartesUneAUne(J1.cartesVitesse);
    })
}

function afficheCartesUneAUne(deck) {
    for(let carte of deck) {
        console.log(carte);
        create("p", body, carte.nom);
    }
}