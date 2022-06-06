function leValor() {
  let n1 = prompt("Digite o número");

  if (n1 > 0) {
    if (n1 % 2 == 0) {
      alert("O número " + n1 + " é par!");
    } else {
      alert("O número " + n1 + " é ímpar!");
    }
  } else {
    alert("Infelizmenter o número não é positivo. Tente novamente");
  }
}
