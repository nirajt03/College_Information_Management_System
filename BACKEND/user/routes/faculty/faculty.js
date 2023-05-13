const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const mailer = require('../../../mailer')
const fs = require('fs')
const multer = require('multer')
const upload = multer({ dest: 'images/' })

const router = express.Router()


//signup
router.post('/signup', (request, response) => {
    const { name, gender, address, phone, email, password } = request.body

    //const encryptedPassword = crypto.SHA256(password)
    const statement = `insert into faculty (
        name , gender, address , phone , email , password ) values (
      '${name}', '${gender}','${address}','${phone}','${email}','${password}'
    )`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


//signin

router.post('/signin', (request, response) => {
    const { email, password } = request.body
        //const encryptedPassword = crypto.SHA256(password)
    const statement = `select facultyId, name, phone from faculty where email = '${email}' and password = '${password}'`
    db.query(statement, (error, facultys) => {
        if (error) {
            response.send({ status: 'error', error: error })
        } else {
            if (facultys.length == 0) {
                response.send({ status: 'error', error: 'faculty does not exist' })
            } else {
                const faculty = facultys[0]
                const token = jwt.sign({ id: faculty['facultyId'] }, config.secret)
                response.send(utils.createResult(error, {
                    name: faculty['name'],
                    phone: faculty['phone'],
                    token: token
                }))
            }
        }
    })
})


router.get('/faculty', (request, response) => {
    const statement = `
        select * from faculty ;
    `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})



router.get('/forgot-password/:email', (request, response) => {
    const { email } = request.params
    const statement = `select studentId, name, phone from student where email = '${email}'`
    db.query(statement, (error, students) => {
        if (error) {
            response.send(utils.createError(error))
        } else if (students.length == 0) {
            response.send(utils.createError('Student does not exist'))
        } else {
            const student = students[0]
            const otp = utils.generateOTP()
            const body = `Your otp = ${otp}`

            mailer.sendEmail(email, 'Reset your password', body, (error, info) => {
                response.send(
                    utils.createResult(error, {
                        otp: otp,
                        email: email
                    })
                )
            })
        }
    })
})



router.put('/otp-password/:email', (request, response) => {
    const { email } = request.params
    const { userOtp, systemOtp, newPassword } = request.body
    const encryptedNewPassword = crypto.SHA256(newPassword)
    const statement = `update student set 
        password = '${encryptedNewPassword}',
        where email = ${email} and '${userOtp}' = '${systemOtp}' `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/change-password/:id', (request, response) => {
    const { id } = request.params
    const { oldPassword, newPassword } = request.body
    const encryptedOldPassword = crypto.SHA256(oldPassword)
    const encryptedNewPassword = crypto.SHA256(newPassword)
    const statement = `update student set 
        password = '${encryptedNewPassword}',
        where studentId = ${id} and password = '${encryptedOldPassword}' `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.put('/update-profile', (request, response) => {
    const { name, gender, hobbies, address, phone, email } = request.body

    const statement = `update student set 
        name = '${name}',
        gender = '${gender}',
        hobbies = '${hobbies}',
        address = '${address}',
        phone = '${phone}',
        email = '${email}'
    where studentId = ${request.userId}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.get('/image/:filename', (request, response) => {
    const { filename } = request.params
    const file = fs.readFileSync(__dirname + '/../../images/' + filename)
    response.send(file)
})



router.post('/upload-image', upload.single('studentImage'), (request, response) => {
    const fileName = request.file.filename

    const statement = `update student set profilePic = '${fileName}' where id = ${request.userId}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/profile', (request, response) => {
    const statement = `select s.name , s.gender , s.hobbies , s.address , s.phone , s.email ,
    sd.courseName, sd.board, sd.YOP, sd.Aggregate, 
    hd.courseName, hd.board, hd.YOP, hd.Aggregate,
    dd.courseName, dd.university, dd.YOP, dd.Aggregate from student s 
    inner join sscDetails sd on s.studentId = sd.studentId
    inner join hscDetails hd on s.studentId = hd.studentId
    inner join diplomaDetails dd on s.studentId = dd.studentId
    where s.studentId = ${request.userId}
    `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})




module.exports = router