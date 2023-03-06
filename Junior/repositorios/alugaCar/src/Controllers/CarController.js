const { response } = require('express')
const { Car, User } = require('./../../models')

const index = async (req, res) => {
    const cars = await Car.findAll({
        include: ['User']
    })

    if (cars.length <= 0) {
        return res.status(403).json({
            message: 'Sem veiculos cadastrados'
        })
    }

    res.json(cars)
}

//DEFININDO METODO STORE
const store = async (req, res) => {

    //PEGANDO DADOS DO FRONT
    const { type, color, license_plate, user_id } = req.body

    //CRIANDO VARIAVEL COM OS DADOS DO CARRO
    const data = {
        type: type,
        color: color,
        licensePlate: license_plate,
        UserId: user_id
    }

    //CONSULTANDO NO BANCO SE EXISTE O USUÁRIO INFORMADO
    const user = await User.findOne({
        where: {
            id: user_id
        }
    });

    //SE NÃO HOUVER, MANDA MENSAGEM DE ERRO
    if (!user) {
        return res.status(404).json({
            message: 'Usuãrio não encontrado'
        })
    }

    //SE EXISTIR USUÁRIO, CADASTRA O CARRO
    const car = await Car.create({
        type: type,
        color: color,
        licensePlate: license_plate,
        UserId: user_id
    })

    //RETORNO O CARRO CADASTRADO
    res.json(car)
}

const show = async (req, res) => {
    const { id } = req.params
    const car = await Car.findOne({
        where: {
            id: id
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
    const { id } = req.params
    const { type, color, licensePlate, UserId } = req.body
    const car = await Car.findOne({ where: { id } })

    if (!car) {
        res.status(401).json({ message: "Nenhum carro encontrado" })
    } else {
        const updated = await Car.update({
            type, color, licensePlate, UserId
        }, {
            where: { id }
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
    const car = await Car.findOne({ where: { id } })
    if (!car) {
        res.status(401).json({ message: 'Carro não encontrado' })
    } else {
        await Car.destroy({ where: { id } })
    }
    res.status(200).json(car)
}

const transfer = async (req, res) => {
    const { licensePlate, newUserId } = req.body

    const car = await Car.findOne({ where: { licensePlate } })

    //verifica se o novo usuario existe
    const user = await User.findOne({
        where: {
            id: newUserId
        }
    })

    //se nao existir,informe
    if (!user) {
        return res.status(404).json({ message: "Usuario Não existente" })
    }

    if (!car) {
        return res.status(401).json({ message: "Nenhum carro encontrado" })
    } else {
        const updated = await Car.update({
            UserId: newUserId
        }, {
            where: {
                id: car.id
            }
        })
        if (updated) {
            res.status(200).json({ message: "Veiculo atualizado com sucesso" })
        } else {
            res.status(403).json({ message: "Veiculo não atualizado" })
        }

    }
}





module.exports = {
    store,
    index,
    show,
    update,
    destroy,
    transfer
}