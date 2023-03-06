const {User} = require('./../../models')
const jsonwebtoken = require('jsonwebtoken') 



const login = async(req, res) =>{
    const { name, password } = req.body
    try {
         const user = await User.findOne({
            where:{
                name,
                password
            }
         })
         if(!user){
               return res.json({message: 'Usuario ou senha invalidos'}) 
         }
         const token = jsonwebtoken.sign(
            {user:user},'isael',
            {expiresIn: '60m'} 
         );
         return res.status(200).json({data: { user, token } });   
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
}   

const register = async( req, res) =>{
    const {name,password} = req.body
    
   
    const username = await User.findOne({
        where:{
            name: name
        }
    })   
         if(username){
            return res.status(404).json("Usuario ja existe")
         } else {
            const user = await User.create({
                name, password
            });
            res.status(200).json({user})
         }

    
}

const isAuth = async(req, res) =>{
    return res.json(true)
}




module.exports= {
    login,
    register,
    isAuth
}