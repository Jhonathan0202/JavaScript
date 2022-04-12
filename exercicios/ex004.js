function clicar() {
    var num = window.document.querySelector("input#num")
    var tab = window.document.querySelector("select#seltab")
    if (num.value.length == 0) {
        window.alert("[ERROR]. Digite um número!")
    } else {
        var n = Number(num.value)
        tab.innerHTML = ""
        for(var c = 1; c <= 10; c++) {
            var item = window.document.createElement("option")
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}