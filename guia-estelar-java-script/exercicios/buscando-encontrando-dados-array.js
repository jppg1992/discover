/*   Buscando e contando dados em Arrays

Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios

      . Contar o número de categorias e o número de livros em cada categoria
      . Contar o número de autores
      . Mostrar livros do autor Augusto Cury
      . Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros do autor

*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O Homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

console.log(`Nro de categorias: ${booksByCategory.length}`)

for (let category of booksByCategory) {
  console.log(
    `Contém ${category.books.length} livros na categoria ${category.category}`
  )
}

countAuthors()
BooksOfAuthor('Augusto Cury')

function countAuthors() {
  let authors = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) === -1) {
        authors.push(book.author)
      }
    }
  }
  console.log(`Total de autores: ${authors.length}`)
}

function BooksOfAuthor(author) {
  let books = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(', ')}`)
}
