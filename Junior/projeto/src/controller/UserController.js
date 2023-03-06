const { User } = require('./../../models')


const store = async(req, res)=>{
const { email , password } = req.body

const user = await User.create({
    email,password
});
console.log(`Usuario criado: ${user.id}`);

res.json({
    message:"Create sucessofull"
})
}

const index = async (req, res) => {
    const users = await User.findAll({})

    res.json(users)
}

module.exports = {
    store,
    index
}