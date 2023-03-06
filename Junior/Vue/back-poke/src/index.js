const express = require('express')
const cors = require('cors')
const app = express()
const {tokenValited} = require('./auth')

const noAuthRouter = require ('./noauth_router')
const authRouter = require ('./auth_router')

app.use(express.json())

const UserController = require("./Controllers/UserController");
const PokemonController = require("./Controllers/PokemonController")

app.use(cors({ origin: true, credentials: true }));


app.use(noAuthRouter)
app.use('*', tokenValited)
app.use(authRouter)




app.listen(3333)