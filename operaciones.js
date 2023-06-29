// Variables para almacenar los valores y la operación
var valorSuperior = "";
var valorInferior = "";
var operacion = "";

// Función para actualizar los valores en la pantalla de la calculadora
function actualizarPantalla() {
  document.getElementById("valorSuperior").innerText = valorSuperior;
  document.getElementById("valorInferior").innerText = valorInferior;
}

// Función para manejar los botones de números
function Numero(valor) {
  if (valor === "." && valorInferior.includes(".")) {
    return; // No se agrega otro punto decimal si ya existe uno
  }
  valorInferior += valor;
  actualizarPantalla();
}

// Función para manejar los botones de operaciones
function Operacion(op) {
  valorSuperior = valorInferior;
  valorInferior = "";
  operacion = op;
  actualizarPantalla();
}

// Función para borrar los valores y reiniciar la calculadora
function Limpiar() {
  valorSuperior = "";
  valorInferior = "";
  operacion = "";
  actualizarPantalla();
}

// Función para realizar la operación y mostrar el resultado en la pantalla
function Calcular() {
  var resultado = 0;
  var numSuperior = parseFloat(valorSuperior);
  var numInferior = parseFloat(valorInferior);
  
  switch (operacion) {
    case "+":
      resultado = numSuperior + numInferior;
      break;
    case "-":
      resultado = numSuperior - numInferior;
      break;
    case "X":
      resultado = numSuperior * numInferior;
      break;
    case "/":
      resultado = numSuperior / numInferior;
      break;
  }
  
  valorSuperior = "";
  valorInferior = resultado.toString();
  operacion = "";
  actualizarPantalla();
}

// Función para borrar el último dígito ingresado
function Borrar() {
  valorInferior = valorInferior.slice(0, -1);
  actualizarPantalla();
}
