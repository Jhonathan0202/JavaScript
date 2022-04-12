function clicar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = window.document.getElementById("nas")
    var res = window.document.querySelector("div#res")
    if (fano.value.length != 4 || Number(fano.value) > ano) {
        window.alert("Verifique os dados Novamente!")
    } else {
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gen = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        img.style.paddingTop = "16px"
        if (fsex[0].checked) {
            gen = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "../img/foto-bebe-m.png")
            } else if (idade < 21) {
                img.setAttribute("src", "../img/foto-jovem-m.png")
            } else if (idade < 50) {
                img.setAttribute("src", "../img/foto-adulto-m.png")
            } else {
                img.setAttribute("src", "../img/foto-idoso-m.png")
            }
        } else {
            gen = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "../img/foto-bebe-f.png")
            } else if (idade < 21) {
                img.setAttribute("src", "../img/foto-jovem-f.png")
            } else if (idade < 50) {
                img.setAttribute("src", "../img/foto-adulto-f.png")
            } else {
                img.setAttribute("src", "../img/foto-idoso-f.png")
            }
        }
        res.innerHTML = `<p>Sua idade é ${gen} e tem ${idade} anos.</p>`
        res.appendChild(img)
    }
}