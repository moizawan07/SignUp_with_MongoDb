const {model} = require('../models/signUpSchema')



// Signup The User In MongoDB Function
const signUp = async (req, res) => {
    let {name, email, password, address} = req.body

    try {
       let userAdd = new model({
        name,
        email,
        password,
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