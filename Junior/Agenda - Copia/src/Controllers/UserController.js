const { response } = require('express')
const Activity = require('../models/Activity')
const {User} = require('../models')

const store = async (req, res) => {
    try {
        const { name, email, activity_id } = req.body

        const activity = await Activity.findOne({ where: { id: activity_id } })
        if (!activity) {
            return response.status(401).json({ message: "Atividade não encontrada" })
        }

        const search_user = await User.findOne({ where: { email, } })
        if (search_user) {
            res.status(401).json({ message: "Já existe um usario com este email" })
        } else {
            const user = await User.create({
                name,
                email,
                activity_id,
            })

            res.status(200).json({ user })
        }


    } catch (error) {
        res.status(400).json({ error })
    }

}
const index = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                foreignKey: 'activity_id',
                model: Activity,
                as: 'activity'
            }]
        });

        return res.status(200).json(users);
        // if (!users) {
        //    res.status(401).json({ message: 'Não existe usuario cadastro' })
        // }
        res.status(200).json({ Activity })

    } catch (err) {
        //res.status(400).json({ error })
        console.log(err)
    }
}



module.exports = {
    store,
    index,

    async updateUser(req, res) {
        try {
            const { id } = req.params
            const { name, email } = req.body

            const user = await User.findOne({ where: { id } })

            if (!user) {
                res.status(401).json({ message: "Nenhum usuario encontrado" })
            } else {
                const user = await User.update({ name, email }, { where: { id } })

                res.status(200).json({ user })
            }

        } catch (error) {
            res.status(400).json({ error })
        }


    },

    async deleteUser(req, res) {
        const { id } = req.params

        const user = await User.findAll({ where: { id } })
        if (!user) {
            res.status(401).json({ message: 'Usuario não encontrado' })
        } else {
            await User.destroy({ where: { id } })

            res.status(200).json({ ok: true })
        }

    }
}



//include: { model: Activity, as:'activity'}