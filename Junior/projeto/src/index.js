const express = require('express')
const app = express()
const jsonwebtoken = require('jsonwebtoken')
const { user, PRIVATE_KEY, tokenValited } = require('./auth')
const UserController = require('./controller/UserController')
const { User } = require('./../models')


app.use(express.json())



app.post('/user', UserController.store)
app.get('/users', UserController.index)




app.post('/login', async (req, res) => {
    const [, hash] = req.headers.authorization?.split(' ') || [' ', ' '];
    const { email, password } = req.body

    try {
        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        })
        if (!user) {
            return res.json({ erro: 'Usuario ou Senha Invalida ' })
        }

        const token = jsonwebtoken.sign(
            { user: JSON.stringify(user) },
            '112233',
            { expiresIn: '60m' }
        );

        return res.status(200).json({ data: { user, token } });
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

app.use('*', tokenValited);

app.get('/private', (req, res) => {
    const { user } = req.headers
    const currentUser = JSON.parse(user);
    return res.status(200).json({
        message: 'This is a PRIVATE router...',
        data: {
            userLogged: currentUser
        }
    })
});




app.listen(3333)