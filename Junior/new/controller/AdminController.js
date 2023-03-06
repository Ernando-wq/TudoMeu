const { User } = require('../models')
const { Car } = require('../models')

//ADMIN /USER
const index = async (req, res) => {
    const users = await User.findAll({})

    if (users.length <= 0) {
        return res.status(403).json({
            message: 'Sem usuarios cadastrados'
        })
    }

    res.json(users)
}
const show = async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({
        where: {
            id
        }
    })

    if (!user) {
        return res.status(404).json({
            message: 'Usuario não encontrado'
        })
    }
    return res.json(user)
}
const store = async (req, res) => {
    const { name, email, password, type, enabled } = req.body
    const user = await User.create({
        name,
        email,
        password,
        type,
        enabled: true
    })

    console.log(`Usuario criado: ${user.id}`);
    res.json({
        message: "Create Sucessfull"
    })

}
const updated = async (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body
    const user = await User.findOne({
        where: {
            id
        }
    })
    if (!user) {
        res.status(401).json({ message: "Usuario não encontrado" })
    } else {
        const updated = await User.update({
            name,
            email,
            password
        }, {
            where: {
                id
            }
        })
        if (updated) {
            res.status(200).json({ message: "Usuario Atualizado" })
        } else {
            res.status(403).json({ message: "Veiculo não atualizado" })
        }
    }

}
const destroy = async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({
        where: {
            id
        }
    })
    if (!user) {
        res.status(401).json({ message: 'Usuario não encontrado' })
    } else {
        await User.destroy({
            where: {
                id
            }
        })
    }
    res.status(200).json({ message: 'Usuario Deletado com sucesso' })

}


//ADMIN  CAR
const carIndex = async (req, res) => {
    const cars = await Car.findAll({})

    if (cars.length <= 0) {
        return res.status(403).json({
            message: 'Sem usuarios cadastrados'
        })
    }

    res.json(cars)
}
const carShow = async (req, res) => {
    const { id } = req.params
    const car = await Car.findOne({
        where: {
            id
        }
    })

    if (!car) {
        return res.status(404).json({
            message: 'Usuario não encontrado'
        })
    }
    return res.json(car)
}
const carStore = async (req, res) => {
    const { category, model, brand, year, km, color, exchange, observation, board } = req.body
    const user_id = req.user.id
    if (!['manual', 'auto'].includes(exchange)) {

        return res.status(403).json({ error: 'Cambio invalido' })

    }

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
            id:user_id
            
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
const carUpdate = async (req, res) => {
    const { id } = req.params
    const { category, model, color } = req.body
    const car = await Car.findOne({
        where: {
            id: id,
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
            }
        })
        if (updated) {
            res.status(200).json({ message: "Veiculo atualizado com sucesso" })
        } else {
            res.status(403).json({ message: "Veiculo não atualizado" })
        }
    }
}
const carDestroy = async (req, res) =>{
    const { id } = req.params
    const car = await Car.findOne({
        where: {
            id: id
        }
    })
    if (!car) {
        res.status(401).json({ message: 'Carro não encontrado' })
    } else {
        await Car.destroy({ where: { 
            id
         
        } })
    }
    res.status(200).json({message:'Carro Deletado com sucesso'})
}


module.exports = {
    index,
    show,
    store,
    updated,
    destroy,
    //carros
    carIndex,
    carShow,
    carStore,
    carUpdate,
    carDestroy

}