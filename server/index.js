const express = require('express')
const cors = require('cors')
const dragonballCtrl = require('./controllers/dragonballController')
const fighterCtrl = require('./controllers/fighterController')

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())

app.get('/api/unknown-fighter', dragonballCtrl.getUnknownFighters)
app.get('/api/new-fighters', dragonballCtrl.getNewFighters)

// ENDPOINTS
app.get('/api/fighter', fighterCtrl.getChosenFighter)
app.post('/api/fighter', fighterCtrl.chooseFighter)
app.put('/api/fighter/:id', fighterCtrl.editFighterName)
app.delete('/api/fighter/:id', fighterCtrl.replaceFighter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))