/*
  Crie uma função que retorne os números primos de um determinado range

  Um número primo é um número natural maior que um, que só é divisível 
  por um e por ele mesmo. Por exemplo, 2, 3, 5, 7 são primos. 
  O número 6 não é primo, pois é divisível por 2 e por 3.
*/

function getPrimesFromRange(range: number) {
  let record = [];
  let primes = [2];
  let max = Math.sqrt(range);

  for (let number = 0; number < range; number++) {
    record.push(1);
  }

  for (let prime = 3; prime <= max; prime += 2) {
    if (record[prime]) {
      for (let multiple = prime * prime; multiple < range; multiple += prime * 2) {
        record[multiple] = 0;
      }
    }
  }

  for (let sievedNumber = 3; sievedNumber < range; sievedNumber += 2) {
    if (record[sievedNumber]) {
      primes.push(sievedNumber);
    }
  }
  return primes.length;
}

console.log(getPrimesFromRange(1));
console.log(getPrimesFromRange(2));
console.log(getPrimesFromRange(3));
console.log(getPrimesFromRange(100));
console.log(getPrimesFromRange(1_000_000));
console.log(getPrimesFromRange(10_000_000));
console.log(getPrimesFromRange(25_000_000));
