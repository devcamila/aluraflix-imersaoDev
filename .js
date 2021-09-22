function highAndLow(numbers) {
  let inicio = 0;
  let fim = numbers.length;
  let tmp;

  for (vezes = 0; vezes <= fim; vezes++) {
    //quantas vezes vou buscar
    for (pos = inicio; pos < fim - 1 - vezes; pos++) {
      //posição 0 até final-1-vezes
      if (numbers[pos] > numbers[pos + 1]) {
        //se o valor da pos >
        tmp = numbers[pos]; //tmp recebe esse valor maior
        numbers[pos] = numbers[pos + 1]; //trocam de valor
        numbers[pos + 1] = tmp; //tmp recebe esse valor menor
      }
    }
  }

  return `${tmp[0]} ${tmp[tmp.length]}`;
}
let inicio = 0
    let fim = new.length
    let tmp
  let resultado = new.Pop()
    for (vezes = 0; vezes <= fim; vezes++) {
        for (pos = inicio; pos < fim - 1 - vezes; pos++) {
            if (new[pos] > new[pos + 1]) {
                tmp = new[pos]
                new[pos] = new[pos + 1]
                new[pos + 1] = tmp
            }
        }
    }
  
   return resultado