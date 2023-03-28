const express = require('express')

const app = express()

app.listen('3000')

let author = 'Jppg1992'

//middleware pra transformar toda requisição em json
app.use(express.json())

//rotas get
app.route('/').get((req, res) => res.send('Hello World!!!'))
app.route('/sobre').get((req, res) => res.send('é Sobre isso "Hello World!!!"'))
app.route('/author').get((req, res) => res.send(author))
app
  .route('/get-route/:param/:name')
  .get((req, res) =>
    res.send({ teste: req.params.name, teste2: req.params.param })
  )
app.route('/get-query').get((req, res) => res.send(req.query.age))

// rotas post
app.route('/post').post((req, res) => res.send(req.body))
app.route('/post-body').post((req, res) => {
  const { name, age } = req.body
  res.send(`Seu nome é ${name} e tem ${age} anos`)
})

//rotas put
app.route('/put').put((req, res) => {
  author = req.body.author
  res.send(author)
})

//rotas delete
app.route('/delete/:id').delete((req, res) => {
  author = ''
  res.send(`ID:${req.params.id} Apagado!!`)
})
