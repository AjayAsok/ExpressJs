import express from 'express'
import favicon from 'serve-favicon'
import path from 'path'
import data from './data/data.json'

const app = express()
const PORT = 3000

// Getting public folder
app.use(express.static('public'))

//Getting specific Folder with Path
app.use('/images', express.static('images'))

// url encoded content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Loading Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// app/json post req
app.post('/jsonAcceptor', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.get('/errDem', (req, res) => {
    throw new Error();
    //Then it goes to custom error handler function
})

// Get sample
app.get('/', (req, res) => {
    res.json(data)
})

app.get('/user/:id', (req, res, next) => {
    let userId = Number(req.params.id)
    let user = data.filter(user => {
        if (user.id === userId) {
            res.send(user)
            next()
        }
    });
}, (req, res) => {
    console.log("Next Worked!!")
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

//Custom error handler function

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(`Internal Server Error: ${err.stack}`)
})


//Delete sample
app.listen(PORT, () => {
    console.log(`Server starts and running on ${PORT}`)
})