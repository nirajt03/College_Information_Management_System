const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/', (request, response) => {
    const statement = `select notice, description from announcement `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.post('/add', (request, response) => {

    const {} = request.body
    const statement = `
            insert into announcement(notice, description) values('${notice}', '${description}')
            `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/', (request, response) => {
    const { id } = request.params
    const { notice, description } = request.body
    const statement = `
            update announcement set
            notice = '${notice}',
                description = '${description}' where id = '${request.userId}'
            `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.delete('/', (request, response) => {
    const statement = `
            delete * from announcement where id = '${request.userId}'
            `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

module.exports = router