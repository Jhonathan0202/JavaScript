function carregar() {
    var t = window.document.getElementById("t")
    var img = window.document.getElementById("img")
    var agora = new Date()
    var hora = agora.getHours()
    t.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "../img/manhã.jpg"
        window.document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        img.src = "../img/tarde.jpg"
        window.document.body.style.background = "#b9846f"
    } else {
        img.src = "../img/noite.jpg"
        window.document.body.style.background = "#515154"
    }
}
