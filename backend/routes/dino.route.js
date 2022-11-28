const express = require('express')
const app = express()
const dinoRuta = express.Router()

//Verificacion
let Dino = require('../models/Dino')

//agregar un nuevo dinosaurio
dinoRuta.route('/create').post((req,res,next) => {
    Dino.create(req.body,(error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//obtenemos todos los dinosaurios
dinoRuta.route('/dinos').get((req,res,next) => {
    Dino.find((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//obtener un solo dinosaurio por su id
dinoRuta.route('/dino/:id').get((req,res,next) => {
    Dino.findById(req.params.id,(error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//actualizar al dinosaurio
dinoRuta.route('/update/:id').put((req,res,next) => {
    Dino.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//eliminar dinosaurio
dinoRuta.route('/delete/:id').delete((req,res,next) => {
    Dino.findByIdAndRemove(req.params.id,(error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = dinoRuta;