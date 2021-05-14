/*
  Crie uma função que retorne uma string separada por espaços e converta para 
  kebab-case removendo todos os acentos.
*/

function toKebabCase(sentence: string) {
  const lowerCaseSentence = [...sentence]
    .map((letter) =>
      letter
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    )
    .join("")
    .replace(/\s/g, "-");

  return lowerCaseSentence;
}

console.log(toKebabCase("Administração e Negócios"));
