function main() {
    var valor = document.getElementById("valor")
    var dias = document.getElementById("dias")
    var div = document.getElementById("div")

    var num = Number(valor.value)
    var d = Number(dias.value)

    for (let i = 1; i < d; i++) {
        num += num
    }

    div.innerHTML += `<p>Você terá ${num} reais em ${d} dias.</p>`
}