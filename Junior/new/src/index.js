const  express = require('express')
const {tokenValited, verifyPermission} = require('../src/auth')
const adminRouter = require('./admin_routers')
const authRouter = require('./auth_router')
const noAuthRouter = require('./noauth_router')

const app = express()

app.use(express.json())

app.use(noAuthRouter)
app.use('*', tokenValited)
app.use(authRouter)
app.use('/admin/*', verifyPermission)
app.use(adminRouter)















app.listen(3333)