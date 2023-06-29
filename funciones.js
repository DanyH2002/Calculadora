const botonNum = document.querySelectorAll('[num]');
const botonSig = document.querySelectorAll('[signo]');
const botonIgual = document.querySelector('#igual');
const botonBorarT = document.querySelector('#BorarT');
const botonBorrar = document.querySelector("#borrar");
const resultado_valorA = document.querySelector('valorA');
const resultado_valorB = document.querySelector('valorB');

class calculadora {
    constructor(resultado_valorA, resultado_valorB) {
        this.resultado_valorA = resultado_valorA;
        this.resultado_valorB = resultado_valorB;
        this.valorA = '';
        this.valorB = '';
        this.signo = undefined;
    }
    agregarNumero(numero) {
        if (numero === '.' && this.valorB.includes('.')) return
        this.valorB = this.valorB + numero;
    }
    borrar() {
        this.valorB = this.valorB.slice(0, -1);
    }
    imprimirPantalla() {
        this.resultado_valorB.innerText = this.valorB;
        this.resultado_valorA.innerText = this.valorA;
    }
    limpiarPantalla() {
        this.valorA = '';
        this.valorB = '';
        this.signo = undefined;
    }
    operacion(signo) {
        if (this.valorB == '') { return; }//si no hay numero seleccionado, salir porque falta informacion
        if (this.valorA != '') {     //es que ya existe un valor, se pude ejecutar la operacion, es deicr, activar el signo de la opracion
            this.calculoslculo();
        }
        this.signo = signo;
        this.valorA = this.valorB;
        this.valorB = '';
    }
    calculos() {
        let resultado;
        let conversionValorA = parseFloat(this.valorA);
        let conversionValorB = parseFloat(this.valorB);
        if (isNaN(conversionValorA) || isNaN(conversionValorB)) return //si alguno de los 2 es un numero 
        switch (this.signo) {           //el switch v a tomar el signo en forma de string para realizar las operaciones
            case '+':
                resultado = conversionValorA + conversionValorB;
                console.log(resultado);
                break
            case '-':
                resultado = conversionValorA - conversionValorB;
                console.log(resultado);
                break
            case '*':
                resultado = conversionValorA * conversionValorB;
                console.log(resultado);
                break
            case '÷':
                resultado = conversionValorA / conversionValorB;
                console.log(resultado);
                break
            default: return;
        }

        this.valorB = resultado
        this.signo = undefined
        this.valorA = ''
    }
}
const calculadoraFun = new calculadora(resultado_valorB, resultado_valorA);

function BotonAcc(value) {
    //document.querySelector("#screen").value = value;
    calculadoraFun.agregarNumero(value); //innertext estrae el dato para poder usarlo
    calculadoraFun.imprimirPantalla();
}

botonNum.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log(boton.innerText);
        calculadoraFun.agregarNumero(boton.innerText); //innertext estrae el dato para poder usarlo
        calculadoraFun.imprimirPantalla();
    })
})


botonSig.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadoraFun.operacion(boton.innerText);
        calculadoraFun.imprimirPantalla();
    })
})


botonIgual.addEventListener('click', () => {
    calculadoraFun.calculos();
    calculadoraFun.imprimirDisplay();
})


botonBorarT.addEventListener('click', () => {
    calculadoraFun.limpiarPantalla();
    calculadoraFun.imprimirPantalla();
})


botonBorrar.addEventListener('click', () => {
    calculadoraFun.borrar();
    calculadoraFun.imprimirPantalla();
})
