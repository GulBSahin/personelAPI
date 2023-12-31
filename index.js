"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require('express')
const app = express()

/* ------------------------------------------------------- */
require('dotenv').config()
const PORT = process.env?.PORT || 8000
// continue from here...

// Middlewares:
require('express-async-errors')

//Configurations:

// Connect to DB:
const { dbConnection } = require( './src/configs/dbConnection' )
dbConnection()

//Middlewares:
app.use(express.json())

//SessionsCookies:
app.use(require('cookie-session')({secret : process.env.SECRET_KEY}))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */
// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PERSONNEL API',
    })
})
// Routes:
// department:
app.use('/departments', require('./src/routes/department.router'))
// personnel:
app.use('/personnel', require('./src/routes/personnel.router'))
// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()