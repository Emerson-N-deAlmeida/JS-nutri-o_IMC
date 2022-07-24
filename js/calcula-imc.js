var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {

    //variável para rodar o loop
    var paciente = pacientes[i];

    //variáveis para calcular o imc
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector('.info-imc');
    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if(!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido.';
        paciente.classList.add('paciente-invalido');
    }

    if(!alturaEhValido) {
        alturaEhValido = false;
        tdImc.textContent = 'Altura inválida'
        paciente.classList.add('paciente-invalido');
    }

    if (pesoEhValido && alturaEhValido) {
        var imc = caculaImc(peso, altura)
        tdImc.textContent = imc;
    }
}

function caculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso >= 0 && peso <=100) {
        return true;
    } else {
        return false;   
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
