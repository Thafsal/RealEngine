const User = require('../model/userModel')


//Landing page get route

const landingPage = async(req,res)=>{
    try {
        if(!req.session){
            res.render('index')
        }else{
            res.render('home')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}