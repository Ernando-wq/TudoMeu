const jsonwebtoken = require('jsonwebtoken')

const PRIVATE_KEY = '1010FFF'
const user = {
    name: 'ernando junior',
    email: 'Jr@hotmail.com'
}

const tokenValited = (request, response, next) => {
    //const [, token] = request.headers.authorization?.split(' ') || [' ', ' '];
    const {authorization} = request.headers
    const token = authorization

    if (!token) return response.status(401).send('Access denied. No token provided.');

    try {
        const payload = jsonwebtoken.verify(token, '112233');
        const userIdFromToken = typeof payload !== 'string' && payload.user;

        if (!user && !userIdFromToken) {
            return response.send(401).json({ message: 'Invalid token' });
        }

        request.headers['user'] = payload.user;

        return next();
    } catch (error) {
        console.log(error);
        return response.status(401).json({ message: 'Invalid token' });
    }
}
module.exports ={
    PRIVATE_KEY,
    user,
    tokenValited
}