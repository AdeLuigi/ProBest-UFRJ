import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000
let number = 0;
app.use(express.json());

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello ade!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})