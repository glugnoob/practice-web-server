const express = require('express')
const app = express()
const cors = require('cors')
const crypto = require('crypto')
const dayjs = require('dayjs')




app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {

  res.send('Test')
  console.log('Get Recieved')
})


app.post('/', createOrder, (req, res) => {

})

function createOrder(req, res, next) {
  const body = req.body

  const order = {
    id: crypto.randomUUID(),
    date: dayjs().format('MMMM D'),
    priceCents: 1000, //Placeholder
    items: body
  }

  res.json(JSON.stringify(order))

  console.log('json order sent')

  next()
}



app.listen(4000)
