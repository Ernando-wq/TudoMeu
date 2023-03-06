const {User} = require('../models')


const index = async (req, res) =>{
    const users = await User.findAll({})

    if (users.length <= 0) {
        return res.status(403).json({
            message: 'Sem usuarios cadastrados'
        })
    }

    res.json(users)
}
const show = async (req, res) =>{
const {id} = req.params
const user = await User.findOne({
    where:{
        id
    }
})
if(!user) {
    return res.status(404).json({
        message: 'Usuario não encontrado'
    })
}
return res.json(user)
}
const store = async ( req, res) =>{
    const {name,email,password,type, enabled} = req.body
    const user = await User.create({
        name,
        email,
        password,
        type,
        enabled:true
    })
    console.log(`Usuario criado: ${user.id}`);
    res.json({
        message: "Create Sucessfull"
    })
}
const updated = async (req,res) =>{
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
const destroy = async (req,res) =>{
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






module.exports = {
    index,
    show,
    store,
    updated,
    destroy

}