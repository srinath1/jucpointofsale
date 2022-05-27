const mongoose = require('mongoose')

const URL ="mongodb+srv://jucpos@graphqlnode.z5vfw.mongodb.net/pointofsale?retryWrites=true&w=majority"

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})
