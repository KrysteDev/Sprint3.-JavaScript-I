// Get the input fields
var password = document.querySelector(".password"); // Contrasenya
var phone = document.querySelector('.phone'); // telf
var finalName = document.querySelector('.name'); //Nom
var lastName = document.getElementById('lastName'); //Cognom
var email = document.getElementById('email'); //Correo electrónico
var adress = document.getElementById('adress'); // adreasa

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  
var errorGeneral = document.getElementById('feedbackError');


// Exercise 9
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    //Inizialitza el Formulari de HTML
   var form = document.querySelector("form"); 

   //Crea un "espia/escoltador" pel que pasi pel formulari. Quant es vagi al submit fes l'event..
   form.addEventListener('submit', (event) => {
       //Condicionals:

        /** Información de las expresión regular + funcion .test()
        * https://lineadecodigo.com/javascript/validar-que-el-texto-introducido-es-un-numero/
        **/

    //Validar Nom:
        if (!validarTamano(finalName)) {
            event.preventDefault(); // Event anular envío de fomulario
            var errorVacio = finalName.nextElementSibling;
            errorVacio.innerHTML = 'Campo obligatorio con mínimo 3 caracteres';
            finalName.classList.add("is-invalid");
        } else if (!(/^[a-zA-Z]+$/.test(finalName.value))) {
            event.preventDefault(); // Event anular envío de fomulario
            var errorName = finalName.nextElementSibling;
            errorName.innerHTML = 'Debe contener solo letras';
            finalName.classList.add("is-invalid"); // añadir una clase
       } else {
          finalName.classList.remove("is-invalid");
        }

    //Validar Cognom:
        if (!validarTamano(lastName)) {
            event.preventDefault(); // Event anular envío de fomulario
            var errorVacio = lastName.nextElementSibling;
            errorVacio.innerHTML = 'Campo obligatorio con mínimo 3 caracteres';
            lastName.classList.add("is-invalid");
        //Campo obligatorio
        } else if (!(/^[a-zA-Z]+$/.test(lastName.value))) {
            event.preventDefault(); // Event anular envío de fomulario
            var errorName = lastName.nextElementSibling;
            errorName.innerHTML = 'Debe contener solo letras';
            lastName.classList.add("is-invalid"); // añadir una clase
        } else {
            lastName.classList.remove("is-invalid");
        }

        //Validar telèfon:
        if (!validarTamano(phone)) {
            event.preventDefault(); // Event anular envío de fomulario
            var errorVacio = phone.nextElementSibling;
            errorVacio.innerHTML = 'Campo obligatorio con mínimo 3 caracteres';
            phone.classList.add("is-invalid");
        } else if (!(/^([0-9])*$/.test(phone.value))){
            event.preventDefault(); // Event anular envío de fomulario
            var errorPhone = phone.nextElementSibling;
            errorPhone.innerHTML = 'Debe contener solo números';
            phone.classList.add("is-invalid"); // añadir una clase
        } else {
            phone.classList.remove("is-invalid");
        }

        //Validar Password:
        if (!validarTamano(password)) {
            event.preventDefault(); // Event anular envío de fomulario
            var errorVacio = password.nextElementSibling;
            errorVacio.innerHTML = 'Campo obligatorio con mínimo 3 caracteres';
            password.classList.add("is-invalid");
        } else if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/.test(password.value))){
            event.preventDefault(); // Event anular envío de fomulario
            var errorPassword = password.nextElementSibling;
            errorPassword.innerHTML =  'Debe contener mínimo una letra y un número.';
            password.classList.add("is-invalid"); // añadir una clase
        } else {
            password.classList.remove("is-invalid");
        }

        //Validar Email:
        if (!validarTamano(email)) {
            event.preventDefault(); // Event anular envío de fomulario
            var errorVacio = email.nextElementSibling;
            errorVacio.innerHTML = 'Campo obligatorio con mínimo 3 caracteres';
            email.classList.add("is-invalid");
        } else if (!(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/).test(email.value)){
            event.preventDefault(); // Event anular envío de fomulario
            var errorEmail = email.nextElementSibling;
            errorEmail.innerHTML = 'Debe tener un formato de e-mail válido. algo@algo.dominio';
            email.classList.add("is-invalid"); // añadir una clase
        } else {
            email.classList.remove("is-invalid");
        }

        //Validar adress:
        if (!validarTamano(adress)) {
            event.preventDefault(); // Event anular envío de fomulario
            var errorVacio = adress.nextElementSibling;
            errorVacio.innerHTML = 'Campo obligatorio con mínimo 3 caracteres';
            adress.classList.add("is-invalid");
        } else {
            adress.classList.remove("is-invalid");
        }

   }, {once: true});
    
}

function validarTamano (input) {
    if (input.value.length < 3) {
        return false;
     } else {
         return true
     }
}
