import React from 'react'


const validacao = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    message: 'Preencha um email valido'
}

const useForm = () => {

    function onChange({ target }) {
        setValue(target.value)
    }

    const [value, setValue] = React.useState('')
    return {
        value,
        setValue,
        onChange,
    }
}

export default useForm