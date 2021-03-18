const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  const reqTime = +new Date() //正號(+)是強制轉為時間戳記
  res.on('finish', () => {
    const resTime = new Date()
    const doneTime = +new Date() - reqTime
    const [YYYY, MM, DD, hh, mm, ss] = [
      resTime.getFullYear().toString().padStart(2, '0'),
      (resTime.getMonth() + 1).toString().padStart(2, '0'),
      resTime.getDate().toString().padStart(2, '0'),
      resTime.getHours().toString().padStart(2, '0'),
      resTime.getMinutes().toString().padStart(2, '0'),
      resTime.getSeconds().toString().padStart(2, '0')
    ]
    console.log(`${YYYY}/${MM}/${DD} ${hh}:${mm}:${ss} | total time: ${doneTime}ms | ${req.method} from ${req.path}`)
  })
  next()
})

router.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
    <p>列出全部 Todo</p>
    <button type="submit">新增</button>
  </form>
  `)
})

router.get('/new', (req, res) => {
  setTimeout(() => {
    res.send('新增 Todo 頁面')
  }, 2000);
})

router.get('/:id', (req, res) => {
  setTimeout(() => {
    res.send('顯示一筆 Todo')
  }, 1000)
})

router.post('/', (req, res) => {
  res.send('新增一筆 Todo')
})

module.exports = router
