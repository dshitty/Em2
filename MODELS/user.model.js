import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'username is required'],
        trim: true,
        minLength: 5,
        maxLength: 50,
    },
    email:{
        type: String,
        required: [true, 'user email is required'],
        trim: true,
        lowercase: true,
        unique:true,
        match:[/\S+@\S+\.\S+/, 'please fill a valid email address']
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    }
}, {Timestamp: true})

const User = mongoose.model('User', userSchema)
export default User