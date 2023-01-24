// function expression
// function anonymous

// parâmetros (parameters)
const sum = function (n1, n2) {
  console.log(n1 + n2)
  return n1 + n2
}

sum(2, 3) //arguments - argumentos

// function scope
let subject = `create video`

function createThink(subject) {
  return subject
}

console.log(createThink(subject))
