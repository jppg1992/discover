fetch('https://jsonplaceholder.typicode.com/users?_limit=1')
  .then(res => res.json())
  .then(data => {
    console.log(data[0].name, data)
  })
