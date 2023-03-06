const express = require('express')
const {tokenValited,verifyPermission} = require('../src/routes/auth')
const adminRouter = require('./routes/admin_routers')
const noAuthRouter = require('./routes/noauth_router')
const authRouter = require('./routes/auth_router')


const app = express()

app.use(express.json())

app.use(noAuthRouter)
app.use('*', tokenValited)
app.use(authRouter)
app.use('/admin/*', verifyPermission)
app.use(adminRouter)





app.listen(3333)