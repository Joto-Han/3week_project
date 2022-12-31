const express = require('express')
const app = express()

const router = require('./routes')

app.use(express.json())
app.use('/api', router)


app.listen(4000, () => {
  console.log(4000, '포트로 서버가 열렸어요!')
})
