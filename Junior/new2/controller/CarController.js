const { body, validationResult } = require('express-validator')
const car = require('../models/car')
const { Car, User } = require('./../models')

const index = async (req, res) => {
    const cars = await Car.findAll({
        where: {
            userId: req.user.id
        },
        include: ['User']
    })

    if (cars.length <= 0) {
        return res.status(403).json({
            message: 'Sem veiculos cadastrados'
        })
    }

    res.json(cars)
}

const store = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { category, model, brand, year, km, color, exchange, observation, board } = req.body

    const user_id = req.user.id

    const data = {
        category: category,
        model: model,
        brand: brand,
        year: year,
        km: km,
        color: color,
        exchange: exchange,
        observation: observation,
        board: board,
        userId: user_id
    }
    const user = await User.findOne({
        where: {
            id: user_id
        }
    });

    if (!user) {
        return res.status(404).json({
            message: 'Usuario não encontrado'
        })
    }
    const car = await Car.create(data)
    res.json(car)

}

const show = async (req, res) => {
    const { id } = req.params
    const user_id = req.user.id
    const car = await Car.findOne({
        where: {
            id: id,
            userId: user_id
        },
        include: ['User']
    })
    if (!car) {
        return res.status(404).json({
            message: "Carro não encontrado"
        })
    }
    return res.json(car)
}

const update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { id } = req.params
    const { category, model, color } = req.body
    const user_id = req.user.id
    const car = await Car.findOne({
        where: {
            id: id,
            userId: user_id
        }
    })

    if (!car) {
        res.status(401).json({ message: "Nenhum carro encontrado" })
    } else {
        const updated = await Car.update({
            category, model, color,
        }, {
            where: {
                id,
                userId: user_id
            }
        })
        if (updated) {
            res.status(200).json({ message: "Veiculo atualizado com sucesso" })
        } else {
            res.status(403).json({ message: "Veiculo não atualizado" })
        }
    }
}
const destroy = async (req, res) => {
    const { id } = req.params
    const user_id = req.user.id
    const car = await Car.findOne({
        where: {
            id: id,
            userId: user_id
        }
    })
    if (!car) {
        res.status(401).json({ message: 'Carro não encontrado' })
    } else {
        await Car.destroy({
            where: {
                id

            }
        })
    }
    res.status(200).json({ message: 'Carro Deletado com sucesso' })
}



module.exports = {
    index,
    show,
    destroy,

    makeStore: {
        validations: [
            body('category').notEmpty(),
            body('model').notEmpty(),
            body('brand').notEmpty(),
            body('year').isNumeric({
                min: 1950,
                max: 2025
            }),
            body('km').isNumeric(),
            body('color').notEmpty(),
            body('exchange').isIn([
                'manual',
                'auto'
            ]),
            body('observation').notEmpty(),
            body('board').notEmpty(),
        ],
        handler: store
    },
    processUpdate: {
        validations: [
            body('category').notEmpty(),
            body('model').notEmpty(),
            body('color').notEmpty()

        ],
        handler: update
    }

}
















// module.exports = {

//     store,
//     index,
//     show,
//     update,
//     destroy

// }