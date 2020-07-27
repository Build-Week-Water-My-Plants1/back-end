const express = require('express')
const server = express()
//importing middleware
const cors = require('cors')
const helmet = require('helmet')


//middleware
server.use(express.json())
server.use(helmet())
server.use(cors())

server.get('/', (req, res) => {
    res.json({
        message: "Water My Plants App"
    })
})



module.exports = server