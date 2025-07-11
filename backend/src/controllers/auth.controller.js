import User from "../models/user.model.js";
import {genrateToken} from "../utils/signup.utils.js"
import bcrypt from "bcryptjs";
export const signup = async (req,res)=>{
    // to acess data user sends
    const  {fullName,email,password}= req.body;
    try {
        //hash the password use bcrypt nad use a token to authenticate
        if(password.length < 6){
            return res.status(400).json({message:"Password must be of at least 6 characters"});
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"Email already exists"});
        }
        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            fullName : fullName,
            email:email,
            password : hashedPassword
        });

        if(newUser){
            //genrate jwt token
            genrateToken(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id : newUser._id,
                email : newUser.email,
                fullName:newUser.fullName,
                profilePic:newUser.profilePic
            });
        }else{
            return res.status(400).json({message:"Invalid user data"})
        }
    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({message : "Internal Server Error"})
    }
};

export const login = (req,res)=>{
    res.send("signup route");
};

export const logout = (req,res)=>{
    res.send("signup route");
};