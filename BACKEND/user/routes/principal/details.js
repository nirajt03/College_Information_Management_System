const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const mailer = require('../../../mailer')
const fs = require('fs')

const router = express.Router()



router.get('/details/:id', (request, response) => {
    const { id } = request.params
    const statement = `
        select p.id, p.title, p.description,
          c.id as categoryId, c.title as categoryTitle,
          b.id as brandId, b.title as brandTitle,
          p.price, p.image, p.isActive from product p
        inner join category c on c.id = p.category
        inner join brand b on b.id = p.brand
        where p.id = ${id}
    `
    db.query(statement, (error, data) => {
        if (error) {
            response.send(utils.createError(error))
        } else {
            // empty products collection
            const products = []

            // iterate over the collection and modify the structure
            for (let index = 0; index < data.length; index++) {
                const tmpProduct = data[index];
                const product = {
                    id: tmpProduct['id'],
                    title: tmpProduct['title'],
                    description: tmpProduct['description'],
                    price: tmpProduct['price'],
                    isActive: tmpProduct['isActive'],
                    brand: {
                        id: tmpProduct['brandId'],
                        title: tmpProduct['brandTitle']
                    },
                    category: {
                        id: tmpProduct['categoryId'],
                        title: tmpProduct['categoryTitle']
                    },
                    image: tmpProduct['image']
                }
                products.push(product)
            }

            response.send(utils.createSuccess(products))
        }

    })
})

router.get('/getNews/:id', (request, response) => {
    const { id } = request.params
    const statement = `
        select id, notice, description from announcements where id = '${id}'`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/getNews', (request, response) => {

    const statement = `
        select id, notice, description from announcements`
    db.query(statement, (error, data) => {
        if (error) {
            response.send(utils.createError(error))
        } else {
            // empty products collection
            const announcements = []

            // iterate over the collection and modify the structure
            for (let index = 0; index < data.length; index++) {
                const tmpAnnouncement = data[index];
                const announcement = {
                    id: tmpAnnouncement['id'],
                    notice: tmpAnnouncement['notice'],
                    description: tmpAnnouncement['description']
                }
                announcements.push(announcement)
            }

            response.send(utils.createSuccess(announcements))
        }

    })
})


router.post('/insertNews', (request, response) => {
    const { notice, description } = request.body
    const statement = `insert into announcements (notice, description ) values (
      '${notice}', '${description}' )`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/updateNews/:id', (request, response) => {
    const { id } = request.params
    const { notice, description } = request.body

    const statement = `update announcements set 
        notice = '${notice}',
        description = '${description}'
        where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.delete('/:id', (request, response) => {
    const { id } = request.params
    const statement = `delete from announcements where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

// router.get('/faculty-details', (request, response) => {
//     const statement = `
//     select f.name, f.address, f.phone, f.email, f.subject from faculty f inner join student s on f.courseName = s.courseName;
//     `
//     db.query(statement, (error, data) => {
//         response.send(utils.createResult(error, data))
//     })
// })

// router.get('/faculty-details', (request, response) => {
//     const statement = `
//     select name, address, phone, email, subjectName from faculty ;
//     `
//     db.query(statement, (error, data) => {
//         response.send(utils.createResult(error, data))
//     })
// })

router.get('/faculty-details', (request, response) => {
    const statement = `select facultyId , name ,  address  , phone , email, subjectName from faculty`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

module.exports = router