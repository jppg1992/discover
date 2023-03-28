const url = 'http://localhost:5500/api'

function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.log(error))
}

function addUser(newUser) {
  axios
    .post(`${url}`, newUser)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
const newUser = {
  name: 'Zeca',
  avatar: 'https://picsum.photos/200/300',
  city: 'Bagé'
}
const updatedUser = {
  name: 'Zeca Brito',
  avatar: 'https://picsum.photos/200/300',
  city: 'Hulha'
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userID.textContent = response.data.id
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.log(error))
}

function updateUser(id, updatedUser) {
  axios
    .put(`${url}/${id}`, updatedUser)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
//addUser(newUser)

//updateUser(10, updatedUser)

getUsers()
getUser(10)
deleteUser(12)
