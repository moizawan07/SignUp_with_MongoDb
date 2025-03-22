const express = require('express')
const myRouter = express.Router()
// SignUP Middlware & Controler
const signUpMW = require('../middleware/signUpmw')
const signUpContr = require('../controller/signUpCon')
// Product Add Middlware & Controler
const productMW = require('../middleware/productmw')
const productContr = require('../controller/productCon')
const { loginCon } = require('../controller/loginCon')



// 1: SIGNUP USER ADD ROUTE
//                       middlware          controler   
myRouter.post('/signUp', signUpMW.signUp , signUpContr.signUp)

// 2: SIGNUP USERS DATA SHOW ROUTE
myRouter.get('/users', signUpContr.usersShow)

// 3: Login User Route
myRouter.post('/login', loginCon)


// 1: PRODUCT ADD ROUTE 
//                            middlware          controler   
myRouter.post('/addProduct', productMW.productMW, productContr.productCont)


module.exports = {myRouter}