function verificar() {
    var nom = document.getElementById("username").value
    var ema = document.querySelector("input#email").value
    var sen = document.getElementById('senha').value

    if (nom == "admin" && ema == "admin" && sen == "19"){
        window.alert(`seja bem vindo ${nom}`)
    } else {
        window.alert("ocorreu um erro por aqui")
    }
}
