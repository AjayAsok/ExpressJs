import express from "express"
import data from './data/data.json'

const app = express()
const PORT = 3000
// Get sample
app.get('/', (req, res) => {
    res.send(`Get request Served at ${PORT}`)
})

// Post sample
app.post('/', (req, res) => {
    res.send(`Post request Served at ${PORT}`)
})

// Put sample
app.put('/', (req, res) => {
    res.send(`Put request Served at ${PORT}`)
})

// Delete Sample
app.delete('/', (req, res) => {
    res.send(`Delete request Served at ${PORT}`)
})

//Delete sample
app.listen(PORT, () => {
    console.log(`Server starts and running on ${PORT}`)
    console.log(data)
})