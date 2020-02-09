const chosenFighter = []

let id = 0

module.exports = {
  getChosenFighter: (req, res) => {
    res.status(200).send(chosenFighter)
  },

  chooseFighter: (req, res) => {
    const {fighter} = req.body
    fighter.id = id
    id++
    chosenFighter.push(fighter)
    res.status(200).send(chosenFighter)
  },

  editFighterName: (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const index = chosenFighter.findIndex(element => {
      return element.id === +id
    })

    chosenFighter[index].name = name

    res.status(200).send(chosenFighter)
  },

  replaceFighter: (req, res) => {
    console.log(req.params)
    const {id} = req.params

    const index = chosenFighter.findIndex(element => {
      return element.id === +id
    })

    chosenFighter.splice(index, 1)
    res.status(200).send(chosenFighter)
  }
}