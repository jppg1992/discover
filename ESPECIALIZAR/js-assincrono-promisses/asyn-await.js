const promessa = new Promise(function (resolve, reject) {
  const isReject = false
  if (isReject) return reject('error')
  else return resolve('sucesso')
})

async function start() {
  try {
    const result = await promessa
    console.log(result)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('executar sempre!')
  }
}

start()
