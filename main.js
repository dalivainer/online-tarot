class Card {
    constructor(number, name, type) {
        this.number = number;
        this.name = name;
        this.type = type;
    }
}
class Usuario {
    constructor(name) {
        this.name = name;
    }
    /* randomCard () {
        this.number = Math.floor(Math.random()* 22);
        console.log("Te ha salido la carta " + this.number);
        // case --> número por número. entonces case --> 0. Console.log (en verdad acá ya iría algo con DOM para mostrarlo en pantalla)
        // sigue: case 0, show "esta imagen" "este título" y "este mensaje"
    } */
}
const card1 = new Card (0, "El Loco", "Arc. Mayor");
const usuario1 = new Usuario ("Dalila");
console.log(card1.number);
usuario1.randomCard();

//randomCard tiene que ser la función del botón
//Acá tengo que sacarlo de la class usuario, y aplicarle dom
//Cuando hace click, hago que el cambio en css o el evento sea que me saque la imagen back y me ponga la imagen frente