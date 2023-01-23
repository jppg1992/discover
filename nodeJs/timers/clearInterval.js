// clearInterval irá cancelar um setInterval registrado

const timeOut = 1000
const finished = () => console.log('checking!')

let interval = setInterval(finished, timeOut)

setTimeout(() => clearInterval(interval), 3000)
