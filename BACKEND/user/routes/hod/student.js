const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/', (request, response) => {
    const statement = 'select * from classroom;'
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.post('/', (request, response) => {
    const { name, size, facultyId } = request.body
    const statement = `insert into classroom (name,size,facultyId) values ('${name}',${size},${facultyId});`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.put('/', (request, response) => {
    const { id, id1 } = request.body
    const statement = `update classroom set facultyId=${id1} where id=${id};`
    db.query(statement, (error, data) => {
        console.log(data)
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:id', (request, response) => {
    const { id } = request.params
    const statement = `delete from classroom where id=${id};`
    db.query(statement, (error, data) => {
        console.log(data)
        response.send(utils.createResult(error, data))
    })
})


module.exports = router


module.exports = router