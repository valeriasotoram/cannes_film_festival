var botonMenu = document.getElementById("botonMenu");
var menuMobile = document.querySelector(".nav-mobile");

botonMenu.addEventListener("click", function (){
    menuMobile.classList.toggle("abierto");
    botonMenu.classList.toggle("abierto");
});


// PASO 1: Seleccionar elementos

var senior = document.getElementById("cant-senior");
var adult = document.getElementById("cant-adult");
var student = document.getElementById("cant-student");

var precioSenior = document.getElementById("precio-senior");
var precioAdult = document.getElementById("precio-adult");
var precioStudent = document.getElementById("precio-student");

var total = document.getElementById("total");


// PASO 2: Calcular Senior

senior.addEventListener("input", function () {
    
    var resultadoSenior = senior.value * senior.dataset.precio;
    
    precioSenior.textContent = "$" + resultadoSenior + ".00";
    
    calcularTotal();
});


// PASO 3: Calcular Adult

adult.addEventListener("input", function () {
    
    var resultadoAdult = adult.value * adult.dataset.precio;
    
    precioAdult.textContent = "$" + resultadoAdult + ".00";
    
    calcularTotal();
});


// PASO 4: Calcular Student

student.addEventListener("input", function () {
    
    var resultadoStudent = student.value * student.dataset.precio;
    
    precioStudent.textContent = "$" + resultadoStudent + ".00";
    
    calcularTotal();
});


// PASO 5: Calcular total

function calcularTotal() {
    
    var resultadoSenior = senior.value * senior.dataset.precio;
    var resultadoAdult = adult.value * adult.dataset.precio;
    var resultadoStudent = student.value * student.dataset.precio;
    
    var resultadoTotal = resultadoSenior + resultadoAdult + resultadoStudent;
    
    total.textContent = "$" + resultadoTotal + ".00";
}


// PASO 6: Seleccionar elementos de la compra

var modalBuy = document.getElementById("modalBuy");

var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");

var purchaseMessage = document.getElementById("purchaseMessage");

var ticketModal = document.getElementById("ticketModal");
var modalClose = document.getElementById("modalClose");

var confirmationEmail = document.getElementById("confirmationEmail");


// PASO 7: Comprobar los datos al comprar

modalBuy.addEventListener("click", function () {

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();

    // Si los campos están vacíos

    if (name === "" || email === "") {

        purchaseMessage.textContent = "PLEASE FILL IN YOUR DETAILS.";
        purchaseMessage.style.color = "#f05a3c";

        return;
    }

    // Si los campos están rellenados

    purchaseMessage.textContent = "";

    confirmationEmail.textContent = email;

    ticketModal.classList.add("active");

});


// PASO 8: Cerrar la ventana de confirmación

modalClose.addEventListener("click", function () {

    ticketModal.classList.remove("active");

});