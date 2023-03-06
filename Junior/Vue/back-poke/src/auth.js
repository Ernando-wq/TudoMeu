const { request } = require('express')
const jsonwebtoken = require('jsonwebtoken')

const user = {
    name: 'Jr',
    email: 'Jrjhunga@hotmail.com'
}


const tokenValited = (req, res, next) =>{
    const { authorization } = req.headers
    const token = authorization

    if (!token) return res.status(401).send('Acesso negado. Nenhum token enviado.');
    try {
        const payload = jsonwebtoken.verify(token, 'isael');
        const userIdFromToken = typeof payload !== 'string' && payload.user;

        if(!user && userIdFromToken) {
            return res.send(401).json({ message: 'Token invalido' });
        }
        req.user =payload.user;
        
        
        return next();
 

    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Token invalido' });
    }
}



module.exports = {
    tokenValited,
}