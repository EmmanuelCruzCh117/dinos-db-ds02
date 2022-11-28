const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Dino = new Schema({
    nombre: {
        type: String
    },
    tipo: {
        type: String
    },
    genero: {
        type: String
    },
    tamanio: {
        type: Number
    },
    peso: {
        type: Number
    },
    img: {
        type: String
    },
},{
    collection: 'dinosdb'
})

module.exports = mongoose.model('Dino', Dino)