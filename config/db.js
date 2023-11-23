const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://muhammadsaad:saad1234@cluster0.gutesny.mongodb.net/OlxCloneProject'

mongoose.connect(mongoURI)
module.exports = mongoose