const express = require('express')
const router = express.Router()

const now = new Date()

router.get('/', (req, res) => {
  console.log(`${now.getFullYear()}/${now.getMonth()}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} | GET from /`)
  res.send('列出全部 Todo')
})

router.get('/new', (req, res) => {
  console.log(`${now.getFullYear()}/${now.getMonth()}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} | GET from /new`)
  res.send('新增 Todo 頁面')
})

router.get('/:id', (req, res) => {
  console.log(`${now.getFullYear()}/${now.getMonth()}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} | GET from /:id`)
  res.send('顯示一筆 Todo')
})

router.post('/', (req, res) => {
  console.log(`${now.getFullYear()}/${now.getMonth()}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} | POST from /`)
  res.send('新增一筆  Todo')
})

module.exports = router
