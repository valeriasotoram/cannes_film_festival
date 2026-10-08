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


