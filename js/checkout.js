// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var finalname = document.querySelector('.name'); //Nom
var inputForm = document.querySelectorAll('.input'); // Todas las entradas del formulario
var lastName = document.querySelector('#lastName'); //Cognom
var email = document.querySelector('#email'); //Correo electrónico

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

// Exercise 9
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    //Inizialitza el Formulari de HTML
   var form = document.querySelector("form"); 

   //Crea un "espia/escoltador" pel que pasi pel formulari. Quant es vagi al submit fes l'event..
   form.addEventListener('submit', (event) => {
    inputForm.forEach(element => { //mira cada element del llistat de inputForm...
        //...Si:
        //- Tots els camps són obligatoris.
        if (element.value == '') { // si algún està incomplet no cumplirà el primer requisit.
            event.preventDefault(); // Event anular envío de fomulario
            element.classList.add("is-invalid"); // añadir una clase
        }
        //- Tots els camps han de tenir almenys 3 caràcters.
        else if (element.value.length < 3) {
            event.preventDefault(); // Event anular envío de fomulario
            element.classList.add("is-invalid"); // añadir una clase
        } 

        /** Información de las cuatro siguentes condiciones:
         * https://lineadecodigo.com/javascript/validar-que-el-texto-introducido-es-un-numero/
         * expresión regular + funcion .test()
         **/
        //- El nom ha de contenir només lletres /^[a-zA-Z]+$.
        if (!(/^[a-zA-Z]+$/.test(finalname.value))) {
            event.preventDefault(); // Event anular envío de fomulario
            finalname.classList.add("is-invalid"); // añadir una clase
        }
        //- El cognom ha de contenir només lletres /^[a-zA-Z]+$.
        if (!(/^[a-zA-Z]+$/.test(lastName.value))) {
            event.preventDefault(); // Event anular envío de fomulario
            lastName.classList.add("is-invalid"); // añadir una clase
       }
        //- El telèfon ha de contenir només números /^([0-9])*$/.
        if (/^([0-9])*$/.test(phone.value)){
            event.preventDefault(); // Event anular envío de fomulario
            phone.classList.add("is-invalid"); // añadir una clase
        }
        //- La contrasenya ha d'incloure números i lletres. ^(?=.?\d)(?=.?[a-zA-Z])[a-zA-Z\d]+$
        if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/.test(password.value))){
            event.preventDefault(); // Event anular envío de fomulario
            password.classList.add("is-invalid"); // añadir una clase
        }
        //- L'email ha de tenir format d'email. 
        //Info: http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=email
        if (!(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/).test(password.value)){
            event.preventDefault(); // Event anular envío de fomulario
            email.classList.add("is-invalid"); // añadir una clase
        }
    });

   });
    
}