const express = require('express')
const app = express()
app.use(express.json())
const {myRouter} = require('./routes/router')
const {dbConnection} = require('./config/db') 


dbConnection() // Pehle database connect karo  

app.use('/', myRouter) // Phir routes load karo  




app.listen(3000, () => console.log('server is running on 3000'))