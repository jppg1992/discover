const axios = require('axios') // legacy way

async function start() {
  try {
    const user = await axios.get('https://api.github.com/users/jppg1992')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos)
  } catch (e) {
    console.log(e)
  }
}

start()
