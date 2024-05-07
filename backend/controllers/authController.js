const User = require("../models/userModel")
const bcrypt = require('bcrypt')

const register = async(req,res)=>{
    try{
        const {name, email, password} = req.body;
        try{
            const user = await User.findOne({email:email})
            if(user){
                return res.status(401).json({
                    "status": "error",
                    "code": 401,
                    "message": "User already exists"
                })
            }
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = new User({
                name,
                email,
                password: hashedPassword
            })
            await newUser.save()
            res.status(201).json({
                "status": "success",
                "code": 201,
                "message": "User created successfully",
                "data": newUser
            })
        }catch(error){
            res.status(400).json({
                "status": "error",
                "code": 400,
                "message": error.message
            })
        }
    }catch(error){
        res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}

const login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        try{
            const user = await User.findOne({email:email})
            if(!user){
                return res.status(401).json({
                    "status": "error",
                    "code": 401,
                    "message": "User does not exist"
                })
            }
            const validPassword = await bcrypt.compare(password, user.password)
            if(!validPassword){
                return res.status(401).json({
                    "status": "error",
                    "code": 401,
                    "message": "Invalid password"
                })
            }
            res.status(200).json({
                "status": "success",
                "code": 200,
                "message": "User logged in successfully",
                "data": user
            })

        }catch(error){
            res.status(400).json({
                "status": "error",
                "code": 400,
                "message": error.message
            })
        
        }

    }catch(error){
        res.status(500).json({
            "status": "error",
            "code": 500,
            "message": error.message
        })
    }
}

module.exports = {
    register,
    login
}