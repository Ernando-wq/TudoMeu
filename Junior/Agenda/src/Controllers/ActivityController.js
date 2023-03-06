const { request } = require("express")


const activities = []

const index = (request, response) => {

    return response.status(201).json(activities)
}

const store = (request, response) => {
    const { title, description, date, hours } = request.body

    console.log('Chegou');

    activities.push({
        title,
        description,
        date,
        hours,
    })
    return response.status(201).json('atividade inserida com sucesso')
}

const show = (request, response) => {

    const { id } = request.params

    if (!activities[id]) {
        return response.status(404).json({
            error: 'atividade nao encontrada'
        })
    }

    const Activity = activities[id]


    return response.json(Activity)
}

const update = (request, response) => {
    const { id } = request.params
    const { title, description, date, hours } = request.body

    if (!activities[id]) {
        return response.status(404).json({
            error: 'ID nao encontrado'
        })

    }
    var tmp_activities = [...activities]

    tmp_activities[id] = {
        title,
        description,
        date,
        hours,
    }

    activities.length = 0
    //activities = [...tmp_activities]

    tmp_activities.map(item => {
        activities.push(item)
    })

    return response.json('dados atualizados com sucesso')



}

const destroy = (request, response) => {
    const { id } = request.params
    if (!activities[id]) {
        return response.status(404).json({
            error: 'Não encontrado'
        })
    }
    const filtered = activities.filter((Activity, index) => {
        return index != id

    })
    activities.length = 0

    filtered.map(item => {
        activities.push(item)
    })
    return response.json('Deletado com sucesso')

}

module.exports = {
    index,
    store,
    show,
    update,
    destroy,


}

