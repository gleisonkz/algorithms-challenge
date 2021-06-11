// Dado um array de inteiros positivos e um inteiro positivo targetNumber,
// calcule o numero de combinações de 2 números existentes no array onde
// o primeiro número é menor que segundo
//  e a soma de ambos seja divisível pelo targetNumber

function divisibleSumPairsV1(targetNumber: number, numbers: number[]) {
  let pairsCount = 0;

  for (let firstNumberIndex = 0; firstNumberIndex < numbers.length; firstNumberIndex++) {
    const firstNumber = numbers[firstNumberIndex];

    for (let index = firstNumberIndex; index < numbers.length - 1; index++) {
      const secondNumber = numbers[index + 1];
      const isValid = firstNumber < secondNumber && (firstNumber + secondNumber) % targetNumber === 0;
      if (isValid) {
        pairsCount++;
      }
    }
  }
  return pairsCount;
}

function divisibleSumPairsV2(targetNumber: number, numbers: number[]) {
  const pairs = numbers.flatMap((firstNumber, index) =>
    numbers
      .filter((_, nextIndex) => nextIndex > index)
      .map((secondNumber) => [firstNumber, secondNumber])
      .filter(([firstNumber, secondNumber]) => (firstNumber + secondNumber) % targetNumber === 0)
  ).length;

  return pairs;
}

// essa chamada deve retornar 3
// pois existe apenas 3 combinações que atendem o critério
// [1,4], [2,3], [4,6]
console.log(divisibleSumPairsV1(5, [1, 2, 3, 4, 5, 6]));
console.log(divisibleSumPairsV2(5, [1, 2, 3, 4, 5, 6]));

// essa chamada deve retornar 20
// pois existem 20 combinações atendem o critério
console.log(divisibleSumPairsV1(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(divisibleSumPairsV2(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
