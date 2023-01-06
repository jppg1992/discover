function transformaNotaEmConceito(nota) {
  let resultado
  if (nota >= 90 && nota <= 100) {
    resultado = 'A'
  } else if (nota >= 80 && nota <= 89) {
    resultado = 'B'
  } else if (nota >= 70 && nota <= 79) {
    resultado = 'C'
  } else if (nota >= 60 && nota <= 69) {
    resultado = 'D'
  } else if (nota < 60) {
    resultado = 'F'
  } else {
    resultado = 'Nota inválida'
  }
  return resultado
}

let nota = 55
console.log(`Nota = ${nota} Conceito = ${transformaNotaEmConceito(nota)}`)
nota = 65
console.log(`Nota = ${nota} Conceito = ${transformaNotaEmConceito(nota)}`)

nota = 75
console.log(`Nota = ${nota} Conceito = ${transformaNotaEmConceito(nota)}`)

nota = 85
console.log(`Nota = ${nota} Conceito = ${transformaNotaEmConceito(nota)}`)

nota = 95
console.log(`Nota = ${nota} Conceito = ${transformaNotaEmConceito(nota)}`)
