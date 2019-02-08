
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = peso >= 0 && peso <= 1000;
  var alturaEhValida = altura >= 0 && altura <= 3.00;

  if (!pesoEhValido)
    tdImc.textContent = "Peso inválido";

  if (!alturaEhValida)
    tdImc.textContent = "Altura inválida";

  if(!pesoEhValido || !alturaEhValida)
    paciente.classList.add("paciente-invalido")

  if (pesoEhValido && alturaEhValida)
    tdImc.textContent = calculaImc(peso, altura);
}

function calculaImc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
