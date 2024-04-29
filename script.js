function verificar() {
    var nom = document.getElementById("username").value
    var ema = document.querySelector("input#email").value
    var sen = document.getElementById('senha').value

    if (nom == "lua" && ema == "agosto" && sen == "19"){
        window.location.href = "filme/index.html";
        window.alert(`Bom filminho minha garota<3`)
    } else {
        window.alert("Digitou algo errado hein toquinho -_-")
    }
}
