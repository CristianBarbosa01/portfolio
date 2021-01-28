function mudar() {
    var botoes = document.getElementsByClassName('botao');

    for (let botao of botoes) {
        if (botao.style.display == "none") {
            botao.style.display = 'block';
        } else {
            botao.style.display = 'none';
            botao.style.delay = ''
        }
    }
}

function validar() {
    var nameL = document.getElementsByClassName("nameL");

    if (nameL.nameL.value == "") {
        alert('Nome não informado');
        nameL.focus();
        return;
    }
}