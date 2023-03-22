//import axios from 'axios';
const axios = require('axios') // legacy way
axios.get('https://api.github.com/users/jppg1992').then(res => {
  console.log(res.data)
})
