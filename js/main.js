const numToArray = (num) => {
  return num.toString().split("");
};

const cambioSqrt = (array) => {
  array[array.indexOf("√(")] = "Math.sqrt(";
};

const operacion = (array) => {
  if(array.includes("√(")){
    cambioSqrt(array);
  }
  let cuenta = array.join("");
  let resultado = numToArray(eval(cuenta));
  return resultado;
};

const displayOperacion = (array) => {
  let operacion = array.join("");
  $("#resultado").html(`${operacion}`);
};

const numeros = (e) => {
  let digito = (e.target).innerText; //digito oprimido
  if (digito === "="){
    arrayDeNumeros = operacion(arrayDeNumeros);
  } else if(digito === "⌫"){
    arrayDeNumeros.pop();
  } else if(digito === "AC"){
    arrayDeNumeros = [];
  } else {
    arrayDeNumeros.push(digito); //ubicar digito en orden
  }
  displayOperacion(arrayDeNumeros);
  console.log(arrayDeNumeros);
};

let arrayDeNumeros = [];

$("span").on("click", numeros);