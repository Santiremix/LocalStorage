let boton = document.getElementById('btn');
let fname = document.getElementById('nombre');
let mail = document.getElementById('mail');
let mensajes = document.getElementById('msg');
let sacarTexto = JSON.parse(localStorage.getItem("Info"));
let escribir = document.querySelector("#pres");
let write = document.getElementById('write');
myform = [];

    function borrar(){
        localStorage.clear();
    }

    function subir(){
        let user = {
            nombre: fname.value,
            correo: mail.value,
            mensaje: mensajes.value
        }
        myform.push(user);
        localStorage.setItem('Info', JSON.stringify(myform));
        document.getElementById('nombre').value = '';
        document.getElementById('mail').value = '';
        document.getElementById('msg').value = '';
    }
    
    write.addEventListener('click', function(){
        for (let dato of sacarTexto) {
            console.log(dato)
            escribir.innerHTML += `${dato.nombre}, ${dato.correo}, ${dato.mensaje}`;
      }
    })
   

