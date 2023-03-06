const express = require('express')
// const {tokenValited, verifyPermission} = require('../src/auth')
const noAuthRouter = require('./noauth_router')

const app = express()

app.use(express.json())

app.use(noAuthRouter)
app.use('*', tokenValited)















app.listen(3333)