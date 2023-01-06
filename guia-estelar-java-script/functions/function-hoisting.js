//function hoisting

sayMyName()

helloWorld()

// função declarada desta forma sofre elevação
function sayMyName() {
  console.log('JP')
}

// neste caso não sofre elevação pq helloWorld é uma variável e não uma função
var helloWorld = function () {
  console.log('Hello World')
}
