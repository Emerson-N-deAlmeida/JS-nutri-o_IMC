var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){
    //posso fazer a função com variáveis

    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;
    // paiDoAlvo.remove();

    // posso fazer em uma única linha
    event.target.parentNode.classList.add('fade-out');

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);
})
