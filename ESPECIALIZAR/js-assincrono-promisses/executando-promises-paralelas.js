//import axios from 'axios';
const axios = require('axios') // legacy way

Promise.all([
  axios.get('https://api.github.com/users/jppg1992'),
  axios.get('https://api.github.com/users/jppg1992/repos')
]).then(responses => {
  console.log(responses[0].data.login)
  console.log(responses[1].data.length)
})
