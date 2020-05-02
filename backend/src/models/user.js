const mongoose = require('mongoose');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        require: true,
        trim: true,
        validate(value) {
            if (value.includes('password')) {
                throw new Error('password can not includes the word password')
            }
            if (value.length < 7) {
                throw new Error('invalid password, length must be greater than 6 chars')
            }
        }

    },
    tokens: [{
        token:{
            type:String,
            required:true
        }
    }]
})

// userSchema.virtual('tasks',{
//     ref:'Task',
//     localField:'_id',
//     foreignField:'owner'
// })
// userSchema.methods.toJSON = function (){
//     const user = this
//     const userObject = user.toObject()
// delete userObject.password
// delete userObject.tokens
//     return userObject
// }
userSchema.methods.generateAuthToken = async function (){
    const user = this
const token = jwt.sign({_id:user._id.toString()},'eurogameisfun')
user.tokens = user.tokens.concat({token})
await user.save()
return token
}

userSchema.statics.findByCredentials = async (email,password) =>{
    const user = await User.findOne({email})

    if(!user){
        throw new Error ('Unable to login')
    }

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}


//hash the plain text password before saving
userSchema.pre('save', async function(next){
    const user = this

   if(user.isModified('password')){
       user.password = await bcrypt.hash(user.password,8)
   }
    next()
})

// userSchema.pre('remove',async function (next){
//     const user = this
// task.deleteMany({owner:user._id})
//     next()
// })
const User = mongoose.model('User', userSchema)







// createMyUser()
module.exports = User