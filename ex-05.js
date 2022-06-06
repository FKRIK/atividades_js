function leValor() {
  let n1 = prompt("Digite um número");

  if (n1 % 2 == 0) {
    if (n1 % 3 == 0) {
      alert("Este número é divisível por 2 e por 3!");
    } else {
      alert("Infelizmente o número não é divisível por 3!");
    }
  } else {
    alert("Infelizmente o número não é divisível por 2!");
  }
}
