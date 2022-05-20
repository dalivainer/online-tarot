// HOME SETTINGS
// Establecimiento previo
//Cambiar titulo
let title = document.getElementById("card-title");
document.body.append(title);
//Cambiar párrafo
let message = document.getElementById("card-description");
document.body.append(message);
//====
//Al apretar el botón "Tirame una Carta"
let cardBack = document.getElementById("cardback");
let cardBtn = document.getElementById("card-btn");
cardBtn.addEventListener("click", respuestaClick);
function respuestaClick() {
    let result = Math.floor(Math.random()* 22);
    console.log(result);
    switch (result) {
        case 0:
            document.getElementById("cardback").src="media/a00.jpg";
            title.innerText = "El Loco";
            message.innerText = "Ponete en movimiento.";
            break;
        case 1:
            document.getElementById("cardback").src="media/a01.jpg";
            title.innerText = "El Mago";
            message.innerText = "Crea una nueva realidad.";
            break;
        case 2:
            document.getElementById("cardback").src="media/a02.jpg";
            title.innerText = "La Papisa";
            message.innerText = "Aprendé a poner límites.";
            break;
        case 3:
            document.getElementById("cardback").src="media/a03.jpg";
            title.innerText = "La Emperatriz";
            message.innerText = "Actuá por instinto.";
            break;
        case 4:
            document.getElementById("cardback").src="media/a04.jpg";
            title.innerText = "El Emperador";
            message.innerText = "Mostrá liderazgo y responsabilidad.";
            break;
        case 5:
            document.getElementById("cardback").src="media/a05.jpg";
            title.innerText = "El Papa";
            message.innerText = "Respetá el conocimiento y la educación.";
            break;
        case 6:
            document.getElementById("cardback").src="media/a06.jpg";
            title.innerText = "El Enamorado";
            message.innerText = "Seguí el camino de tu corazón.";
            break;
        case 7:
            document.getElementById("cardback").src="media/a07.jpg";
            title.innerText = "El Carro";
            message.innerText = "Apostá y ganá.";
            break;
        case 8:
            document.getElementById("cardback").src="media/a08.jpg";
            title.innerText = "La Justicia";
            message.innerText = "Actuá razonando y dentro de las normas.";
            break;
        case 9:
            document.getElementById("cardback").src="media/a09.jpg";
            title.innerText = "El Hermitaneo";
            message.innerText = "Buscá la escencia de las cosas.";
            break;
        case 10:
            document.getElementById("cardback").src="media/a10.jpg";
            title.innerText = "La Rueda de la Fortuna";
            message.innerText = "Aceptá las subidas y bajadas de la vida.";
            break;
        case 11:
            document.getElementById("cardback").src="media/a11.jpg";
            title.innerText = "La Fuerza";
            message.innerText = "Evaluá si controlas tus deseos o tus deseos te controlan a vos.";
            break;
        case 12:
            document.getElementById("cardback").src="media/a12.jpg";
            title.innerText = "El Colgado";
            message.innerText = "Mirá las cosas desde la perspectiva opuesta.";
            break;
        case 13:
            document.getElementById("cardback").src="media/a13.jpg";
            title.innerText = "El Arcano sin Nombre";
            message.innerText = "Dejá ir lo que se terminó.";
            break;
        case 14:
            document.getElementById("cardback").src="media/a14.jpg";
            title.innerText = "La Templanza";
            message.innerText = "Buscá el verdadero sentido.";
            break;
        case 15:
            document.getElementById("cardback").src="media/a15.jpg";
            title.innerText = "El Diablo";
            message.innerText = "Expresá pasioón y deseo.";
            break;
        case 16:
            document.getElementById("cardback").src="media/a16.jpg";
            title.innerText = "La Torre";
            message.innerText = "Volvé a la base sólida de la realidad.";
            break;
        case 17:
            document.getElementById("cardback").src="media/a17.jpg";
            title.innerTextL = "La Estrella";
            message.innerText = "Fluí desde una fuente pura.";
            break;
        case 18:
            document.getElementById("cardback").src="media/a18.jpg";
            title.innerText = "La Luna";
            message.innerText = "No tengas miedo de ir muy profundo.";
            break;
        case 19:
            document.getElementById("cardback").src="media/a19.jpg";
            title.innerText = "El Sol";
            message.innerText = "Encontrá les compañeres adecuades.";
            break;
        case 20:
            document.getElementById("cardback").src="media/a20.jpg";
            title.innerText = "El Juicio";
            message.innerText = "Despertá tu realidad espiritual.";
            break;
        case 21:
            document.getElementById("cardback").src="media/a21.jpg";
            title.innerText = "El Mundo";
            message.innerText = "Todo es perfecto así como es.";
            break;
    }
}

/*class Card {
    constructor(number, name, type) {
        this.number = number;
        this.name = name;
        this.type = type;
    }
}
class Usuario {
    constructor(name) {
        this.name = name;
    }*/
    /* randomCard () {
        this.number = Math.floor(Math.random()* 22);
        console.log("Te ha salido la carta " + this.number);
        // case --> número por número. entonces case --> 0. Console.log (en verdad acá ya iría algo con DOM para mostrarlo en pantalla)
        // sigue: case 0, show "esta imagen" "este título" y "este mensaje"
    } */
/*}
const card1 = new Card (0, "El Loco", "Arc. Mayor");
const usuario1 = new Usuario ("Dalila");
console.log(card1.number);
usuario1.randomCard();*/

//randomCard tiene que ser la función del botón
//Acá tengo que sacarlo de la class usuario, y aplicarle dom
//Cuando hace click, hago que el cambio en css o el evento sea que me saque la imagen back y me ponga la imagen frente
