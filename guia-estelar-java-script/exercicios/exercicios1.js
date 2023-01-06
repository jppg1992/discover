// 1. Declare uma variável de nome weight
let weight
// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)
/*
  3. Declare uma variável e atribua para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/

let name = 'João Paulo'
let age = 30
let stars = 4.5
let isSubscribed = true

/*4.  A variável student abaixo é de que tipo de dados?
  4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3
  4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {}
console.log(typeof student)
weight = 60.2
student = {
  name: name,
  age: age,
  stars: stars,
  isSubscribed: isSubscribed,
  weight: weight
}

console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
)

/*
  5. Declare uma variável di tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/*
  6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4.
  (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students.push(student)

/*
  7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/* 
  8. Crie um novo student e coloque na posição 1 do Array students
*/

student = {
  name: `João Godinho`,
  age: 30,
  stars: 4.8,
  isSubscribed: false,
  weight: 58.7
}

students.push(student)

console.log(students[1])

/*
  9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
  Após sua resposta, rode o código e veja se você acertou.

  console.log(a)
  var a = 1

  a resposta é undefined, pq o js eleva a declaração da VAR  se fosse let daria erro de não declarado
  sendo assiim ela é declarada e o console.log chama ela sem valor resultando em undefined
  e loga após atribui o valor 1 para a var a
*/

console.log(a)
var a = 1
