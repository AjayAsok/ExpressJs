import express from "express"
import data from './data/data.json'

const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server starts and running on ${PORT}`)
    console.log(data)
})