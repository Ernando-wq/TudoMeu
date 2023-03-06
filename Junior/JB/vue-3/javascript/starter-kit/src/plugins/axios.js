import axios from 'axios'
const axios = axios.create({
// You can add your headers here
// ================================
baseURL: 'https://21bc-186-225-36-61.sa.ngrok.io/',
// timeout: 1000,
// headers: {'X-Custom-Header': 'foobar'}
})
export default axios
