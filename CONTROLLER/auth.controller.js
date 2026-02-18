import mongoose from "mongoose"
import User from "../MODELS/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession(); 
    session.startTransaction();
try{
    //create a new user
    const {name, email, password} = req.body
 
    //check if a user already exists (first database call)
    const existingUser = await User.findOne({email}) 
    //User refers to user model we created and finds where the email is same coming from request and that model

    if(existingUser){
        const error = new Error ('User already exists');
        error.statusCode = 409;
        throw error
    }

    //if user doesnt exist (hash password)
    const salt = await bcrypt.genSalt(10); //salt is like random value added to password before hashing cause if password same then it will have same hash value so need some random value after password
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUsers = await User.create([{name, email, password: hashedPassword}], {session}) //passing an array of how many user we wanna create 
    const token = jwt.sign({userId: newUsers[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})  //newUsers return an array thats why [0]
    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
        success: true,
        message: 'user created successfully',
        data:{
            token, 
        user: newUsers[0]
        }
    })
}catch(error){
    await session.abortTransaction();
    session.endSession()
    next(error)
}
}

export const signIn = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
  try {
    const { email, password } = req.body;

    // 1️⃣ Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // 3️⃣ Create token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    await session.commitTransaction();
    session.endSession();
    // 4️⃣ Send response
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.name,
      },
    });
   

  } catch (error) {
    res.status(500).json({ error: "Server error" });
    await session.abortTransaction();
    session.endSession()
    next(error)
  }
};

export const signOut = async(req, res, next) =>{

}