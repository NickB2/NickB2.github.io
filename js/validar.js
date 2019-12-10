String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}
  
function validarEstilo(id){
    var campo = "#"+id
    var valor = $(campo).val().trim();
    if(valor == ''){
        $(campo).removeClass('is-valid').addClass('is-invalid')
    } else {
        if (valor == '0'){
        $(campo).removeClass('is-valid').addClass('is-invalid')
        } else {
        $(campo).removeClass('is-invalid').addClass('is-valid')
        }
    }
}

function desvalidarEstilo(id){
    var campo = "#"+id
    $(campo).removeClass('is-invalid').removeClass('is-valid')
}

function validarEstiloTelefono(id){
    var campo = "#"+id
    var valor = $(campo).val().trim();
    if(valor == ''){
        $(campo).removeClass('is-valid')
    } else {
        if(!isNaN(valor)){
            $(campo).removeClass('is-invalid').addClass('is-valid')    
        } else {
            $(campo).removeClass('is-valid').addClass('is-invalid')
        }
        
    }
}

function obtenerValor(id){
    var campo = "#"+id
    var valor = $(campo).val().trim()
    return valor
}

function validar(){
    var nombre = obtenerValor('id_inputNombre');
    var apellido = obtenerValor('id_inputApellido');
    var telefono = obtenerValor('id_inputTelefono');
    var email = obtenerValor('id_inputEmail');
    var asunto = obtenerValor('id_inputAsunto');
    var mensaje = obtenerValor('id_inputMensaje');

    validarEstilo('id_inputNombre');
    validarEstilo('id_inputApellido');
    validarEstiloTelefono('id_inputTelefono');
    validarEstilo('id_inputEmail');
    validarEstilo('id_inputAsunto');
    validarEstilo('id_inputMensaje');

    if(nombre && apellido && email && asunto && mensaje){
        var estadoTelefono = 1
        console.log('Todo bien')
        datos = {
            'nombre': nombre,
            'apellido': apellido,
            'email': email,
            'asunto': asunto,
            'mensaje': mensaje
        }

        if (telefono != ''){
            if(!isNaN(telefono)){
                Object.assign(datos,{'telefono': telefono})
            } else  {
                estadoTelefono = 0
            }
        }
        if(estadoTelefono == 1){
            Swal.fire({
                icon: 'success',
                text:   'Tus dudas y consultas son importantes para nostros, '+
                        'nos pondremos en contacto contigo en cuanto podamos'
            }).then(function(){
                $('#id_formConsulta').trigger('reset')
                desvalidarEstilo('id_inputNombre');
                desvalidarEstilo('id_inputApellido');
                desvalidarEstilo('id_inputTelefono');
                desvalidarEstilo('id_inputEmail');
                desvalidarEstilo('id_inputAsunto');
                desvalidarEstilo('id_inputMensaje');
            })
        }
    }
}