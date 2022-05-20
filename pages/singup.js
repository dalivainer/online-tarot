/*//Objeto usuario
class Users {
    constructor(name) {
        this.name = name;
    }
}*/

// Estableciendo parametros local Storage desde el formulario
const save = document.getElementById("save");
save.addEventListener("click", storeUser);
    // Functions involved
    function storeUser () {
        let userName = document.getElementById("user-name").value;
    
        localStorage.setItem("userName", JSON.stringify(userName));
        
        function message () {
            let removeForm = document.getElementById("form");
            removeForm.remove();
            let message = document.createElement("div");
            document.body.append(message);
            message.innerHTML = `<p>Listo! Bienvenido ${userName}. Ya has creado tu usuario. Cuando vuelvas a consultar el Tarot, tendrás registro de tu última tirada.<p/>`
        }
        message();
    };

//Verifico si ya está registrado
/* function verification (userName) {
    const verify = users.map(userName);
    if (verify === userName) {
        alert("Ese nombre de usuario ya existe estás registrado");
    }
} */