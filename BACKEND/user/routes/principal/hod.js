const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')

const router = express.Router()

// router.get('/', (request, response) => {
//     const statement = `select hodId , name , gender , address  , phone , email , isActive  from hod`
//     db.query(statement, (error, data) => {
//         response.send(utils.createResult(error, data))
//     })
// })

router.get('/', (request, response) => {
    const statement = `select hodId , name , gender , address  , phone , email from hod`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/update-state/:id/:isActive', (request, response) => {
    const { id, isActive } = request.params
    const statement = `update hod set 
        isActive = ${isActive}
      where hodId = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


module.exports = router