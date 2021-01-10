const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://anyima:Comicrider1!@nwhack-trip.wfdjt.mongodb.net/trip?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db