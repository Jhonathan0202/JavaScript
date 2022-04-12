function carregar() {
    var res = window.document.querySelector("div#res")
    var inicio = window.document.getElementById("ini")
    var passo = window.document.getElementById("pas")
    var fim = window.document.getElementById("fim")
    if (passo.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("Informações faltando!. Por favor verifique!")
    }else if (passo.value <= 0) {
        alert("Passo inválido. DIgite novamente!")
    }else {
        res.innerHTML = "<p>Contando:</p>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){ //crescente
            for(var c = i;c <= f; c += p) {
                res.innerHTML += `${c} 👉`
            }
        } else { //regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}