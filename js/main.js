const operacion = (cuenta) => {
  try {
    let resultado = eval(cuenta).toString();
    if (resultado === "Infinity"){
      return "Indeterminado"
    } else {
      return resultado;
    }
  } catch (error) {
    return "Operacion no valida"
  }
};

const borrar = (numero) => {
  return numero.slice(0,-1) ;
};

const mostrarEnDisplay = (numero, display) => {
  display.innerHTML = `${numero}`;
};

const numeros = (e) => {
  let digito = (e.target).innerText; 
  let display = document.getElementById("resultado");
  if (num0 === "Operacion no valida" || num0 === "Indeterminado"){
    num0 = "";
  }
  switch (digito) {
    case "=":
      num0 = operacion(num0);
      break;
    case "AC":
      num0 = "";
      break;
    case "⌫":
      num0 = borrar(num0);
      break;
    default:
      num0 += digito;
      break;
  }
  mostrarEnDisplay(num0, display);
};

let num0 = "";
$("span").on("click", numeros);