const axios = require('axios')

let allFightersArray = []
let fighterArray = []

module.exports = {
  getUnknownFighters: async(req, res) => {
    await axios.get(`https://dragon-ball-api.herokuapp.com/api/character/`).then(response => {
      fighterArray.push(response.data)
      res.status(200).send(allFightersArray)
    })
  },

  getRandomFighter: (req, res) => {
    const rand1 = Math.ceil(Math.random() * allFightersArray.length - 1)
    const rand2 = Math.ceil(Math.random() * allFightersArray.length - 1)
    const rand3 = Math.ceil(Math.random() * allFightersArray.length - 1)
    const rand4 = Math.ceil(Math.random() * allFightersArray.length - 1)
    const rand5 = Math.ceil(Math.random() * allFightersArray.length - 1)
    const rand6 = Math.ceil(Math.random() * allFightersArray.length - 1)
    const rand7 = Math.ceil(Math.random() * allFightersArray.length - 1)
  }
}