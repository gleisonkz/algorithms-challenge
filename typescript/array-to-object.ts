/*

Crie uma função que retorne um objeto a partir dos seguintes array abaixo.

['prop1','prop2','prop3'] deve retornar {0:prop1, 1:prop2, 2:prop3}

[
  ["prop1", "value1"],
  ["prop2", "value2"],
  ["prop3", "value3"],
] deve retornar {prop1:'value1', prop2:'value2', prop3:'value3'}


[
  ["prop1", "value1"],
  "value2",
  ["prop3", "value3"],
] deve retornar {prop1:'value1', 1:'value2', prop3:'value3'}

*/

function arrayToObject(data: any[]) {
  return data.reduce((acc, item, index) => {
    const isArray = Array.isArray(item);
    const [key, value] = isArray ? item : [index, item];
    return { ...acc, [key]: value };
  }, {});
}

const example1 = arrayToObject([
  ["prop1", "value1"],
  ["prop2", "value2"],
  ["prop3", "value3"],
]);

const example2 = arrayToObject(["value1", "value2", "value3"]);
const example3 = arrayToObject([["prop1", "value1"], "value2", ["prop3", "value3"]]);

console.log(example1);
console.log(example2);
console.log(example3);

export {};
