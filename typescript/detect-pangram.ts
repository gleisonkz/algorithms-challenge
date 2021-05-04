/*

Crie uma função que receba uma string como parâmetro e detecte se é ou não um Pangram(pangrama).
Retorne True se for, False se não. Ignore números e pontuação.

Um Pangram(pangrama) é uma frase que contém todas as letras do alfabeto pelo menos uma vez. 
Por exemplo, a frase "A rápida raposa marrom salta sobre o cão preguiçoso" é um pangrama, 
porque usa todas as letras de A-Z pelo menos uma vez (maiúsculas e minúsculas são irrelevantes).
*/

function isPangram(sentence: string) {
  const lowerCaseSentence = [...sentence]
    .map((letter) =>
      letter
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    )
    .join();
  return new Set(lowerCaseSentence.match(/[a-z]/g)).size === 26;
}
const example1 = isPangram("The quick brown fox jumps over the lazy dog");
const example2 = isPangram("Thé quick brówn fíx jumps óver Thé lazy dóg");
const example3 = isPangram("Thé quick brõwn fíx jumps õver Thé lazy dõg");
const example4 = isPangram("Thé quick brõwn fíx jumps õver Thé lãzy dõg");
const example5 = isPangram("Thé quick brõwn jumps õver Thé lãzy dõg");
const example6 = isPangram("A");

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);
