const bcryptJs = require('bcryptjs')
const {model} = require('../models/signUpSchema')

const loginCon = async (req, res) => {
   try {
    let {email, password} = req.body

//    Find User Enter Email In the DataBase
  let userSignUp = await model.findOne({email : email})
  console.log('userSignUp..?', userSignUp);

// If Email Not Match Means user Not SignUp Return that
   if(!userSignUp){
    return res.send({serverMsg : 'Email Not matched'})
   }

//    If Email Valid means User SignUP Now Check Password 
//    Match Current Enter Pass In The DataBase

// Camapred Method 2 arguments laite 1 jo pass Match krana 2 Jis se Match Krana
const userPassMatch = await bcryptJs.compare(password, userSignUp.password) // hes Return Bollean Value if Match to True OtherWise 

   if(!userPassMatch){
    return res.send({serverMsg: "Password not Matched!"})
   }

   res.send('Login SucessFully Done')
  
   } 
   catch (error) {
    console.log('login err', error);
   }
}

module.exports = {loginCon}