const form = document.getElementById("form");
let linhas = " "

form.addEventListener("submit", function(e){
    e.preventDefault();

    const inputNome = document.getElementById("nome")
    const inputNumeroCell = document.getElementById("numero")

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNumeroCell.value}</td>`
    linha += '</tr>'

    linhas += linha


    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

})