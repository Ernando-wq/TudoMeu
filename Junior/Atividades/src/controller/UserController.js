const { User } = require('./../../db/models')



const index = async (req, res) => {
    const users = await User.findAll({})

    res.json(users)

}

const show = async (req, res) => {
    const { id } = req.params

    const user = await User.findOne({
        where: {
            id: id
        },
        include: ['Activities']
    })

    if (!user) {
        return res.status(404).json({
            message: "Usuario não encontrado"
        })
    }
    return res.json(user)

}

const store = async (req, res) => {
    const { name, cpf } = req.body

    const user = await User.create({
        name, cpf

    });
    console.log(`Usuario criado: ${user.id}`);

    res.json({
        message: "Create Sucessfull"
    })

}

const update = async (req, res) => {
    const { id } = req.params
    const { name, cpf } = req.body
    const user = await User.findOne({ where: { id } })

    if (!user) {
        res.status(401).json({ message: "Nenhum usuario encontrado" })
    } else {
        const user = await User.update({ name, cpf }, { where: { id } })
        res.status(200).json({ user })
    }
}

const destroy = async (req, res) => {
    const { id } = req.params

    const user = await User.findOne({ where: { id } })
    if (!user) {
        res.status(401).json({ message: 'Usuario não encontrado' })
    } else {
        await User.destroy({ where: { id } })
        res.status(200).json({ ok: true })
    }
}




module.exports = {
    store,
    index,
    show,
    update,
    destroy
}