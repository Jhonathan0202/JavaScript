let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.sort()
/*
    console.log(`O vetor tem ${num.length} posições`)
    console.log(`O primeiro valor do vetor é ${num[0]}`)
    console.log(`Nosso vetor em ordem é ${num}`)

    for(let c = 0; c < num.length; c++) {
        console.log(`Na posição ${c + 1}°: ${num[c]}`)
    }
*/

for(let c in num) {
    console.log(`Na posição ${c}°: ${num[c]}`)
}

let pos = num.indexOf(4)
if (pos == -1) {
    console.log("O valor não foi encontrado!")
}else {
    console.log(`O valor está na posição ${pos + 1}`)
}
