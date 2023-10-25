const bcrypt = require('bcrypt')


const hashedPasswordMiddleware = async(req,res,next) =>{
    const { password } = req.body

    try {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password , saltRounds)
        req.hashedPassword = hashedPassword
        next()
    } catch (error) {
        return res.status(500).json({message:`password hashing failed ${error}`})
    }
}
const comparePasswordMiddleware = async(req,res,next)=>{
    const { password , user }  = req.body

    try {
        
        const matchedPassword = await bcrypt.compare(password , user.password)
        if(matchedPassword){
            next()
        }else{
            res.status(401).json({message:"Incorrect password"})
        }
    } catch (error) {
        return res.status(500).json({message:`password hashing failed ${error}`})
    }
}

module.exports = {
    hashedPasswordMiddleware,
    comparePasswordMiddleware
}