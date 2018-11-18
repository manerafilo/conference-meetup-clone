

const express = require('express')
const EmployeeService= require('./services/employee-service')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.set('view engine', 'pug')//use pug instead of html

app.get('/',async (req, res) => {
    const people = await EmployeeService.findAll()
    res.render("index", {people:people})  
      
   // res.sendFile(_dirname + '/index.html')
  // res.render('index')
})
 
app.get('/employee/all',async(req,res)=>{
    //res.send("Hier you can find all the information about employees")
    const people= await EmployeeService.findAll()
    console.log(people)
    //res.send(await EmployeeService.findAll())
})
 
app.get ('/employee/:id', async (req, res)=>{
     res.send(await EmployeeService.find(req.params.id))
 })


app.post('/employee',async (req,res)=>{
    console.log(req.body)
    const user= await EmployeeService.add(req.body) //axios.post daki req. body is the added person "axios.post('/employee, {name:'eda'}=(req.body) ye esit)"
    res.send(user)
    //res.send(await EmployeeService.find(req.params.id))
})

app.delete('/employee/:id',async (req,res)=>{
    console.log(req.body)
    const user= await EmployeeService.del(req.params.id)
    res.send(user)
})

app.get('/employee/all', (req, res) => {
    const employees = 
    res.send("employee")
    
})

 app.listen(3000, () => {
   console.log('Server listening')
  })
