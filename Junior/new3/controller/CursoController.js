const { body, validationResult } = require('express-validator')
const curso = require('../models/curso')
const { Curso, User } = require('../models')

const index = async (req, res) => {
    const cursos = await Curso.findAll({
        where: {
            userId: req.user.id
        },
        include: ['User']
    })
    if (cursos.legth <= 0) {
        return res.status(403).json({
            message: 'Sem curso cadastrados'
        })
    }
    res.json(cursos)
}
const store = async (req, res) => {
    const { name, grade, hours, dias, inicio, fim, } = req.body
    const user_id = req.user.id
    const data = {
        name: name,
        grade: grade,
        hours: hours,
        dias: dias,
        inicio: inicio,
        fim: fim,
        userId: user_id
    }

    const user = await User.findOne({
        where: {
            id: user_id
        }
    })
    if (!user) {
        return res.status(404).json({
            message: 'Usuario não encontrado'
        })
    }
    const curso = await Curso.create(data)
    res.json(curso)
}
const show = async (req, res) => {
    const { id } = req.params
    const user_id = req.user.id
    const curso = await Curso.findOne({
        where: {
            id: id,
            userId: user_id
        },
        include: ['User']
    })
    if (!curso) {
        return res.status(404).json({
            message: "Curso não encontrado"
        })
    }
    return res.json(curso)
}
const update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { id } = req.params
    const { name, hours,} = req.body
    const user_id = req.user.id
    const curso = await Curso.findOne({
        where: {
            id: id,
            userId: user_id
        }
    })

    if (!curso) {
        res.status(401).json({ message: "Nenhum curso encontrado" })
    } else {
        const updated = await Curso.update({
            name, hours,
        }, {
            where: {
                id,
                userId: user_id
            }
        })
        if (updated) {
            res.status(200).json({ message: "Curso atualizado com sucesso" })
        } else {
            res.status(403).json({ message: "Curso não atualizado" })
        }
    }
}
const destroy = async (req, res) => {
    const { id } = req.params
    const user_id = req.user.id
    const curso = await Curso.findOne({
        where: {
            id: id,
            userId: user_id
        }
    })
    if (!curso) {
        res.status(401).json({ message: 'Curso não encontrado' })
    } else {
        await Curso.destroy({
            where: {
                id

            }
        })
    }
    res.status(200).json({ message: 'Curso Deletado com sucesso' })
}




module.exports = {
    destroy,
    index,
    show,
    makeStore: {
        validations: [
            body('name').notEmpty(),
            body('grade').notEmpty(),
            body('inicio').notEmpty(),
            body('fim').notEmpty()
        ],
        handler: store
    },
    processUpdate: {
        validations: [
            body('name').notEmpty(),
            body('hours').notEmpty(),

        ],
        handler: update
    }

}