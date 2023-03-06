const { response } = require('express')
const {Pokemon, User} = require( '../../models')


const index = async (req , res) =>{
    const pokemons = await Pokemon.findAll({
        where:{
            userid: req.user.id

        },
        include:['User']
    })

    if(pokemons.length <=0) {
        return res.status(403).json({
            error: 'Sem pokemons cadastrados'
        })

    }
    res.json(pokemons)
}

const store = async (req, res) =>{
    const {name , types , img ,color ,gif , userid } = req.body


    const pokemon = {
        name,
        types,
        img,
        color,
        gif,
        userid: req.user.id
    }
    try {
        const pokemon_db = await Pokemon.create(pokemon)
        return res.json({message: 'Pokemon cadastrado com sucesso'})
    } catch (error) {
        return res.json({error : 'Não foi possivel capturar o pokemon'})
    }


    // const pokemon = await Pokemon.create({
    //     name,
    //     types,
    //     img,
    //     color,
    //     gif,
    //     userid
    // })

    // res.json(pokemon)
    // const user = await User.findOne({
    //     where:{
    //         id:userid
    //     }
    // });

    // if(!user){
    //     return res.status(404).json({
    //         message:"Usuario não existe"
    //     })
    // }




}
const show = async (req, res) =>{
    const {id} = req.params
    const userid = req.user.id
    const pokemon = await Pokemon.findOne({
        where:{
            id,
            userid
        },
        include:['User']
    })
    if(!pokemon){
        return res.status(404).json({
            message: "Pokemon não encontrado"
        })
    }
    return res.json(pokemon)
}
const update = async (req, res) =>{
    const { id } = req.params
    const { name, types } = req.body
    const pokemon = await Pokemon.findOne({where: {id}})

    if(!pokemon) {
        res.status(401).json ({message: "Nenhum usuario encontrado"})
    }else{
        const pokemon = await Pokemon.update({name, types}, {where:{id}})
        res.status(200).json({pokemon})
    }
}
const destroy = async( req, res) =>{
     const { id } = req.params
     const pokemon = await Pokemon.findOne({where:{id}})
     if(!pokemon){
        res.status(401).json({message: 'Pokemon não encontrado'})
     }else{
        await Pokemon.destroy({where:{id}})
     }
     res.status(200).json("Pokemon deletado com sucesso")
}


module.exports= {
    store,
    index,
    show,
    update,
    destroy
    
}