const axios = require('axios')

let allFightersArray = []
let fighterArray = []

module.exports = {
  getUnknownFighters: async(req, res) => {
    await axios.get(`https://dragon-ball-api.herokuapp.com/api/character/`).then(response => {
      allFightersArray = response.data

      const rand1 = Math.floor(Math.random() * (allFightersArray.length))
      const rand2 = Math.floor(Math.random() * (allFightersArray.length))
      const rand3 = Math.floor(Math.random() * (allFightersArray.length))
      const rand4 = Math.floor(Math.random() * (allFightersArray.length))
      const rand5 = Math.floor(Math.random() * (allFightersArray.length))
      const rand6 = Math.floor(Math.random() * (allFightersArray.length))
      const rand7 = Math.floor(Math.random() * (allFightersArray.length))

      if (fighterArray.length > 0) {
        fighterArray = []
      }

      fighterArray.push(allFightersArray[rand1], allFightersArray[rand2], allFightersArray[rand3], allFightersArray[rand4], allFightersArray[rand5], allFightersArray[rand6], allFightersArray[rand7])

      res.status(200).send(fighterArray)
    })
  },

  getNewFighters: (req, res) => {
    const rand1 = Math.floor(Math.random() * (allFightersArray.length))
    const rand2 = Math.floor(Math.random() * (allFightersArray.length))
    const rand3 = Math.floor(Math.random() * (allFightersArray.length))
    const rand4 = Math.floor(Math.random() * (allFightersArray.length))
    const rand5 = Math.floor(Math.random() * (allFightersArray.length))
    const rand6 = Math.floor(Math.random() * (allFightersArray.length))
    const rand7 = Math.floor(Math.random() * (allFightersArray.length))

    if (fighterArray.length > 0) {
      fighterArray = []
    }

    fighterArray.push(allFightersArray[rand1], allFightersArray[rand2], allFightersArray[rand3], allFightersArray[rand4], allFightersArray[rand5], allFightersArray[rand6], allFightersArray[rand7])

    res.status(200).send(fighterArray)
  }
}

