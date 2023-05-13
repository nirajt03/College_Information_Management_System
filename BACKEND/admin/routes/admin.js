const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

const router = express.Router()


//signup
router.post('/signup', (request, response) => {
    const { name, phone, email, password } = request.body

    //const encryptedPassword = crypto.SHA256(password)
    const statement = `insert into admin (name, phone, email, password) values (
      '${name}', '${phone}', '${email}', '${password}'
    )`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


//signin

// router.post('/signin', (request, response) => {
//     const { email, password } = request.body
//     const statement = `select id, name, phone from admin where email = '${email}' and password = '${crypto.SHA256(password)}'`
//     db.query(statement, (error, admins) => {
//         if (error) {
//             response.send({ status: 'error', error: error })
//         } else {
//             if (admins.length == 0) {
//                 response.send({ status: 'error', error: 'admin does not exist' })
//             } else {
//                 const admin = admins[0]
//                 const token = jwt.sign({ id: admin['id'] }, config.secret)
//                 response.send(utils.createResult(error, {
//                     name: admin['name'],
//                     phone: admin['phone'],
//                     token: token
//                 }))
//             }
//         }
//     })
// })


router.post('/signin', (request, response) => {
    const { email, password } = request.body
        //const encryptedPassword = crypto.SHA256(password)
    const statement = `select id, Name, phone from admin where email = '${email}' and password = '${password}'`
    db.query(statement, (error, students) => {
        if (error) {
            response.send({ status: 'error', error: error })
        } else {
            if (students.length == 0) {
                response.send({ status: 'error', error: 'admin does not exist' })
            } else {
                const student = students[0]
                const token = jwt.sign({ id: student['id'] }, config.secret)
                response.send(utils.createResult(error, {
                    name: student['name'],
                    phone: student['phone'],
                    token: token
                }))
            }
        }
    })
})

module.exports = router