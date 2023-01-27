const sayMyName = () => console.log('João')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))
