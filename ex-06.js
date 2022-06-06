function leValor() {
  let n1 = prompt("Digite um número");

  if (n1 % 2 == 0 || n1 % 7 == 0) {
    alert("Este número é divisível por 2 ou divisível por 7!");
  } else {
    alert("Infelizmente o número não é divisível por 2 ou divisível por 7!");
  }
}
