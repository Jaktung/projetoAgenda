const form = document.getElementById("form");

form.addEventListener(function(e){
    e.preventDefault();

    const inputNome = document.getElementById("nome")
    const inputNumeroCell = document.getElementById("numero")

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNumeroCell.value}</td>`
    linha += '</tr>'


    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linha

})