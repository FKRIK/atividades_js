function leValor() {
  let n1 = prompt("Digite um número entre 1 e 7");

  switch (n1) {
    case '1':
      dia = alert("O dia é Domingo!");
      break;
    case "2":
      dia = alert("O dia é Segunda-feira!");
      break;
    case "3":
      dia = alert("O dia é Terça-feira!");
      break;
    case "4":
      dia = alert("O dia é Quarta-feira!");
      break;
    case "5":
      var dia = alert("O dia é Quinta-feira!");
      break;
    case "6":
      var dia = alert("O dia é Sexta-feira!");
      break;
    case "7":
      var dia = alert("O dia é Sábado!");
      break;
    default:
      alert("O número não corresponde a nenhum dia da semana! Tente novamente");
  }
}
