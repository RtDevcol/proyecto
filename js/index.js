const btnBoton = document.getElementById('btnLogin');
const usuario = document.getElementById('txtUsuario');
const contrasena = document.getElementById('txtcontrasena');

btnBoton.addEventListener('click', Inicio);

function Mensaje(mensaje, icono) {
    Swal.fire({
        position: "center",
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    });
}

async function ValidarCampos() {
    const user = usuario.value;
    const pass = contrasena.value;

    if(user === '' && pass === ''){
        Mensaje('Los Campos de Usuario y Contraseña estan Vacios.', 'info');
        usuario.focus();
    }else if(user === ''){
        Mensaje('El Campo de Usuario esta Vacio.', 'info');
        usuario.focus();
    }else if(pass === ''){
        Mensaje('El Campo de Contraseña esta Vacios.', 'info');
        contrasena.focus();
    }else{
        Mensaje('Los campos tienen informacion', 'success');
       await Login();
    }
}

async function Login() {
    let datos = {};
    let user = usuario.value;
    let pass = contrasena.value;
    let data = new FormData();

    datos = {
        'usuario': user,
        'contrasena': pass,
    };

    data.append('datos', JSON.stringify(datos));
    // formData.append('datos', JSON.stringify(objeto));

    try {
        let response = await fetch('../querys/prueba.php', {
            method: 'POST',
            body: data
        });

        if (response.ok) {
            let resultado = await response.text(); // Recibir respuesta desde el servidor
            console.log('Respuesta desde PHP:', resultado);
        } else {
            console.error('Error en la respuesta del servidor:', response.statusText);
        }
    } catch (error) {
        Mensaje(error, 'error');
    }
}

function Inicio(e) {
    e.preventDefault();
    ValidarCampos();
}