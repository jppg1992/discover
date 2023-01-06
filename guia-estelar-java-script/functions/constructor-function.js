/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando'
  }
}

const jp = new Person('Joao Paulo')
const mayke = new Person('Mayke')

console.log(jp.walk())
console.log(mayke.walk())
