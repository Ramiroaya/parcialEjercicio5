let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let btnEnviar3 = <HTMLButtonElement>document.getElementById("btnEnviar3");
let btnEnviar4 = <HTMLButtonElement>document.getElementById("btnEnviar4");
let btnEnviar5 = <HTMLButtonElement>document.getElementById("btnEnviar5");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let rotulo3 = <HTMLParagraphElement>document.getElementById("rotulo3");
let rotulo4 = <HTMLParagraphElement>document.getElementById("rotulo4");
let rotulo5 = <HTMLParagraphElement>document.getElementById("rotulo5");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let dato3 = <HTMLInputElement>document.getElementById("dato3");
let primerNumero: number = 0;
let segundoNumero: number = 0;
let tercerNumero: number = 0;

//La siguiente Funcion nos devuelve el mayor de los numeros.
function numeroMayor(
  numero1: number,
  numero2: number,
  numero3: number
): number {
  let mayor: number = 0;
  if (numero1 === numero2 && numero1 === numero3) {
    alert("Los numeros ingresados son iguales, vuelva a cargar los numeros");
  } else {
    if (numero1 > numero2 && numero1 > numero3) {
      mayor = numero1;
    } else {
      if (numero2 > numero1 && numero2 > numero3) {
        mayor = numero2;
      } else {
        mayor = numero3;
      }
    }
  }
  return mayor;
}

//La siguiente funcion nos devuelve el numero menor.
function numeroMenor(
  numero1: number,
  numero2: number,
  numero3: number
): number {
  let menor: number = 0;
  if (numero1 === numero2 && numero1 === numero3) {
    alert("Los numeros ingresados son iguales, vuelva a cargar los numeros");
  } else {
    if (numero1 < numero2 && numero1 < numero3) {
      menor = numero1;
    } else {
      if (numero2 < numero1 && numero2 < numero3) {
        menor = numero2;
      } else {
        menor = numero3;
      }
    }
  }
  return menor;
}

rotulo1.innerHTML = "Ingrese el primer numero";
btnEnviar1.addEventListener("click", () => {
  primerNumero = Number(dato1.value);
});
rotulo2.innerHTML = "Ingrese el segundo numero";

btnEnviar2.addEventListener("click", () => {
  segundoNumero = Number(dato2.value);
});
rotulo3.innerHTML = "Ingrese el tercer numero";
btnEnviar3.addEventListener("click", () => {
  tercerNumero = Number(dato3.value);
});
btnEnviar4.addEventListener("click", () => {
  rotulo4.innerHTML =
    "El numero mayor es:   " +
    numeroMayor(primerNumero, segundoNumero, tercerNumero);
});
btnEnviar5.addEventListener("click", () => {
  rotulo5.innerHTML =
    "El numero menor es :   " +
    numeroMenor(primerNumero, segundoNumero, tercerNumero);
});