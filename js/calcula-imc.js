var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]; //para cada vez q passar o paciente, o pacientes i vai percorrer

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso); // true or false
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }
  if (!validaAltura) {
    console.log("Altura inválida");
    pesoValido = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }
  if (alturaValida && pesoValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if(peso >=0 && peso <= 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 3.0){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
