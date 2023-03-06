const { response } = require('express')
const { Activity, User } = require('./../../db/models')


const index = async (req, res) => {
    const activity = await Activity.findAll({
        include: ['User']
    })
    if (activity.length <= 0) {
        return res.status(403).json({
            message: 'Sem Atividades cadastradas'
        })
    }
    res.json(activity)
}
const store = async (req, res) => {
    const { title, description, date, hours, user_id } = req.body

    const data = {
        title: title,
        description: description,
        date: date,
        hours: hours,
        UserId: user_id
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

    const activity = await Activity.create({
        title: title,
        description: description,
        date: date,
        hours: hours,
        UserId: user_id
    })

    res.json(activity)
}

const show = async (req, res) => {
    const { id } = req.params
    const activity = await Activity.findOne({
        where: {
            id: id
        },
        include: ['User']
    })
    if (!activity) {
        return res.status(404).json({
            message: "Atividade não encontrada"
        })
    }
    return res.json(activity)

}

const updated = async (req, res) => {
    const { id } = req.params
    const { title, description, date, hours, UserId } = req.body
    const activity = await Activity.findOne({ where: { id } })

    if (!activity) {
        res.status(401).json({ message: "Nenhuma Atividade encontrada" })
    } else {
        const updated = await Activity.update({
            title, description, date, hours, UserId
        }, {
            where: { id }

        })
        if (updated) {
            res.status(200).json({ message: "Atividade atualizada com sucesso" })
        } else {
            res.status(403).json({ message: "Atividade não atualizada " })
        }

    }
}
const destroy = async (req, res) => {
    const { id } = req.params
    const activity = await Activity.findOne({ where: { id } })
    if (!activity) {
        res.status(401).json({ message: 'Atividade não encontrada' })
    } else {
        await Activity.destroy({ where: { id } })
    }
    res.status(200).json({ message: 'Atividade deletada com sucesso' })
}
const transfer = async (req, res) => {
    const { title, newUserId } = req.body

    const activity = await Activity.findOne({ where: { title } })

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

    if (!activity) {
        return res.status(401).json({ message: "Nenhuma atividade encontrada" })
    } else {
        const updated = await Activity.update({
            UserId: newUserId
        }, {
            where: {
                id: activity.id
            }
        })
        if (updated) {
            res.status(200).json({ message: "Atividade atualizada com sucesso" })
        } else {
            res.status(403).json({ message: "Atividade não atualizada" })
        }

    }
}

module.exports = {

    store,
    show,
    updated,
    destroy,
    index,
    transfer
}
