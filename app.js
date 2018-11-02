

const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/employee/all', (req, res) => {
    const employees = 
    res.send("employeeler")
})


app.listen(3000, () => {
    console.log('Server listening')
})