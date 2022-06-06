function leValor() {
  let altura = prompt("Digite a altura (em metros)");
  let genero = prompt("Digite o gênero (M ou F)");

  if (genero == "M" || "m") {
    var result = 72.7 * altura - 58;
    var result2 = parseFloat(result.toFixed(2));
  } else {
    var result = 62.1 * altura - 44;
    var result2 = parseFloat(result.toFixed(2));
  }

  alert("O seu peso ideal é: " + result2 + " kg");
}
