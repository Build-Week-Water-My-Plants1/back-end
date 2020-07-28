const express = require('express')
const server = express()
//importing middleware
const cors = require('cors')
const helmet = require('helmet')
const authenticate = require('../middleware/auth-middleware')

//ENV
const dotenv = require("dotenv")
dotenv.config()


//middleware
server.use(express.json())
server.use(helmet())
server.use(cors())

//import server routes
const authRouter = require("../auth/auth-router")
const userRouter = require("../users/users-router")

server.use("/api/auth", authRouter)
server.use("/api/profile", authenticate, userRouter)


server.get('/', (req, res) => {
    res.json({
        message: "Water My Plants App"
    })
})



module.exports = server