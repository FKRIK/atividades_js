function leValor() {
  var soma = 0;
  for (contador = 0; contador <= 20; contador++){
    if (contador % 2 == 0) {
        soma += contador;
      }
  }
    

  alert("O somatório dos número pares entre 1 e 20 é " + soma);
}
