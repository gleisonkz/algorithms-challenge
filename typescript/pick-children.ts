/*
Crie uma função que retorne dinamicamente 
um array com todos os filhos do objeto abaixo.
*/

type FamilyTree = {
  name: string;
  children: FamilyTree[];
};

const obj1: FamilyTree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

const obj2: FamilyTree = {
  name: "Paul",
  children: [
    {
      name: "Ricky",
      children: [
        { name: "Richard", children: [] },
        { name: "Madness", children: [] },
      ],
    },
    {
      name: "Lane",
      children: [
        { name: "Storm", children: [] },
        { name: "Seth", children: [] },
      ],
    },
  ],
};

function pickChildren(obj: FamilyTree) {
  const nestedChildNames: string[] = obj.children.flatMap((c) => pickChildren(c));

  const childNames = obj.children.map((c) => c.name);
  return [...childNames, ...nestedChildNames];
}
const childrenObj1 = pickChildren(obj1);
const childrenObj2 = pickChildren(obj2);

console.log(childrenObj1);
console.log(childrenObj2);
export {};
