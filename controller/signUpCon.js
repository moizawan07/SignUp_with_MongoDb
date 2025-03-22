const {model} = require('../models/signUpSchema')
const bcryptJs = require('bcryptjs')



// Signup The User In MongoDB Function
const signUp = async (req, res) => {
    let {name, email, password, address} = req.body

    // Plain Pasword Convert To The Hash Password
  const salt = await bcryptJs.genSalt(10)
  const hashPass = await bcryptJs.hash(password, salt)

  console.log('salt',salt);
  console.log('hash',hashPass);
  


    try {
       let userAdd = new model({
        name,
        email,
        password : hashPass,
        address
       }
    )
    
    console.log("UserAddReturn",userAdd);

     await userAdd.save()

     res.status(200).json({serverMsg : "SignUp SucessFull", user : userAdd})
    
    } catch (error) {
        console.log('error', error);
        
    }

}


// Show All The Users Function
const usersShow = async (req, res) => {
    try {
      let allUsers = await model.find()
      
      console.log('all users REturn', allUsers);

      res.json({users : allUsers})
      
    } 
    catch (error) {
        console.log('err', error);
    }
}

module.exports ={signUp, usersShow}