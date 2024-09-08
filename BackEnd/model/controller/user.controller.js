import User from "../user.model.js";
import bcryptjs from 'bcryptjs'

export const signup=async(req,res)=>{
    try {
        const {fullname, email_id, password} = req.body;
        const user=await User.findOne({email_id})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const hashPassword =await bcryptjs.hash(password,10)
        const createdUser = new User({
            fullname: fullname,
            email_id: email_id,
            password: hashPassword
        })
        await createdUser.save()
        res.status(201).json({message:"User create sucessfully",user:{
            _id: createdUser._id,
            fullname:createdUser.fullname,
            email_id:createdUser.email_id
        },})
    } catch (error){
        if(error.res){
            console.log(error);
            res.status(500).json({message:"Internal server error"})
            
        }
        
    }
};
export const login=async (req, res)=>{
    try {
        const {email_id,password} = req.body;
        const user = await User.findOne({email_id});
        const isMatch =await bcryptjs.compare(password, user.password)
        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid username or password"});
        }else{
            res.status(200).json({message:"Login sucessfull",user:{
                _id:user._id,
                fullname:user.fullname,
                email_id:user.email_id
            }})
        }
    } catch (error) {
        console.log("Error: "+ error.message)
        res.status(500).json({message: "Internal Server Error"});
        
    }
}