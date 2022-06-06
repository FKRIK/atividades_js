function leValor() {
  let fatorial = prompt("Digite um número:");
  let resultado = fatorial;

  for (contador = 1; contador < fatorial; contador++) {
    resultado *= contador;
  }
  alert("O fatorial de " + fatorial + " é " + resultado);
}
