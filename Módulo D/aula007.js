var idade = 19
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não pode vota!`)
} else if (idade < 18 || idade > 70) {
    console.log(`Seu voto é opicional!`)
} else {
    console.log(`Seu voto é obrigatório!`)
}