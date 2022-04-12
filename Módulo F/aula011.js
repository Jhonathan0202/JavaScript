function parimpar(n) {
    if (n%2 == 0) {
        return "par"
    }else {
        return "impar"
    }
}

function soma(n1=0, n2=0) {
    return n1 + n2
}

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
}

let res = fatorial(5)

console.log(`Este resultado é ${res}`)
