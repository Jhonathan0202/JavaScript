var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 1 && hora < 18) {
    console.log("Bom dia!")
} else if (hora <= 18 && hora < 00) {
    console.log("Boa tarde!")
} else {
    console.log("Boa Madrugada!")
}