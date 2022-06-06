function leValor() {
  let n1 = prompt("Digite o primeiro valor");
  let n2 = prompt("Digite o segundo valor");
  let n3 = prompt("Digite o terceiro valor");

  let maior = n1;

  if (n2 > maior) maior = n2;
  if (n3 > maior) maior = n3;

  alert("O maior número é: " + maior);
}
