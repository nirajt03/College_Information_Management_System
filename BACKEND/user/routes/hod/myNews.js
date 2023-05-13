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



module.exports = router