let family = {
  incomes: [3500, 588.33],
  expenses: [850, 515, 310, 275, 130, 265, 125, 75, 150]
}

function sum(array) {
  let result = 0
  for (let value of array) {
    result += value
  }
  return result
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const result = calculateIncomes - calculateExpenses

  const itsOk = result >= 0

  let balanceText = 'Negativo'

  if (itsOk) {
    balanceText = 'Positivo'
  }

  console.log(`Seu saldo é ${balanceText}: ${result.toFixed(2)}`)
}

calculateBalance()
