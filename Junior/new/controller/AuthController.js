const { body, validationResult } = require('express-validator')
const { User } = require('../models')
const jsonwebtoken = require('jsonwebtoken');

const login = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        })
        if (!user) {
            return res.json({ message: 'Usuario ou senha Invalida' })
        }

        const token = jsonwebtoken.sign(
            { user: user },
            '223344',
            { expiresIn: '60m' }
        );

        return res.status(200).json({ data: { user, token } });

    } catch (error) {
        console.log(error);
        return res.send(error);
    }
}
const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password, type, enabled } = req.body

    const user = await User.findOne({ where: { email } })
    if (user) {
        res.status(401).json({ message: "Já existe um usario com este email" })
    } else {
        const user = await User.create({
            name,
            email,
            password,
            type,
            enabled: true
        })
        res.status(200).json({ user })
    }

}


module.exports = {
    makeLogin: {
        validations: [
            body('email').isEmail().notEmpty(),
            body('password').isLength({
                min: 4,
                max: 8
            }).notEmpty(),
        ],
        handler: login
    },
    registerUser:{
        validations: [
            body('name').isLength({
                min: 4
            }).notEmpty(),
            body('email').isEmail().notEmpty(),
            body('password').isLength({
                min: 4,
                max: 8
            }).notEmpty(),
        ],
        handler: register

    }
}
