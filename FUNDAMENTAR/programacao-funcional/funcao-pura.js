// Função impura

// Exemplo 1: está dependendo de dado externo
// que não foi passado como parâmetro

function calculateCircumference1(radius) {
  return Math.PI * (radiu + radius)
}


// exemplo 2: está alterando um dado externo

let person = {
  name: 'Rafael Camarada',
  age:'jovem'
}

function changeName(name){
  person.name = name
}


// Função pura

//Exemplo 1

const calculateCircunference2 = function (pi,radius){
  return pi * (radius + radius)
}

// com arrow function

const calculateCircumference3 = (pi,radius) => pi * (radiu + radius)

// exemplo 2

const changePersonName = (person,name) => {...person,name}