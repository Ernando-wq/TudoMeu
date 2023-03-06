const Activity = require('../models/Activity')

module.exports = {
    async createAtivity(req, res) {
        try {
            const { title, description, date, hours } = req.body

            const activity = await Activity.findOne({ where: { title, description, date, hours } })
            if (activity) {
                res.status(401).json({ message: "Atividade ja existe" })
            } else {
                const activity = await Activity.create({
                    title,
                    description,
                    date,
                    hours

                })

                res.status(200).json({ activity })
            }



        } catch (error) {
            res.status(400).json({ error })
        }


    },
    async updateAtivity(req, res) {
        try {
            const { id } = req.params
            const { title } = req.body
            const activity = await Activity.findOne({ where: { id } })
            if (!activity) {
                res.status(401).json({ message: "Nenhuma atividade encontrada" })

            } else {
                const activity = await Activity.update({ title, }, { where: { id } })

                res.status(200).json({ activity })
            }

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async listAtivity(req, res) {
        try {
            const activity = await Activity.findAll()

            if (!activity) {
                res.status(401).json({ message: 'Não existe atividade cadastrada' })
            }
            res.status(200).json({ activity })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async deleteAtivity(req, res) {
        const { id } = req.params
        const activity = await Activity.findAll({ where: { id } })
        if(!activity) {
            res.status(401).json({ message: 'Atividade não encontrada' })
        } else{
            await Activity.destroy({ where: { id } })

            res.status(200).json({ ok: true })
        }
    }

}

