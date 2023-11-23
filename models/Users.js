const mongoose = require('mongoose')
const bcrypt = require ("bcryptjs")
const Schema = mongoose.Schema

const UsersSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlenght: 6,

    },

    name:{
        type:String,
    }
})

UsersSchema.pre("save",function(next){
    const user = this
    console.log("this", this)

    if (!user.token){    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password,salt)

    user.password=hash
    console.log('hash hogya')
}

    next()

})

UsersSchema.methods.comparezPassword=function(password){
    const user=this

    return bcrypt.compareSync(password,user.password)
}

UsersSchema.methods.generateToken = function (){
    const user = this

    const  token = jwt.sign({ _id: user._id}, secret)
    return token
}


const User=mongoose.model('user',UsersSchema)
module.exports = User
