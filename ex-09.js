function leValor() {
  let n1 = prompt("Digite um número:");

  for (contador = 0; contador <= 10; contador++) {
    let result = n1 * contador;
    alert(n1 + " x " + contador + " = " + result);
  }
}
