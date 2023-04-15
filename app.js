var nombre = ddocument.getElementById('nombre');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log ('enviarFormulario....');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('ingresa tu nombre');
    }

    if(password.value === null || password.value === ''){
        mensajesError.push('ingresa tu password');
    }


    error.innerHTML = mensajesError.join(', ');

    return false;

}