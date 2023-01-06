function transformTemp(temp) {
  const isCelsius = temp.toUpperCase().includes('C')
  const isFahrenheit = temp.toUpperCase().includes('F')
  if (isCelsius) {
    const celcius = Number(temp.toUpperCase().replace('C', ''))
    const fahrenheit = celcius * (9 / 5) + 32
    return fahrenheit + 'F'
  } else if (isFahrenheit) {
    const fahrenheit = Number(temp.toUpperCase().replace('F', ''))
    const celcius = (fahrenheit - 32) * (5 / 9)
    return celcius + 'C'
  } else {
    throw new Error(`${temp} não é uma temperatura válida`)
  }
}
try {
  console.log(transformTemp('50f'))
} catch (e) {
  console.log(e.message)
}
