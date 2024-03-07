
const express = require('express')

// const cors = require('cors')



const path = require('path')

const app  = express()

const router = express.Router()

app.set('view engine','hbs')

app.set('views',path.join(__dirname,"views"))

const publicdirectory = path.join(__dirname,"./views")

app.use(express.static(publicdirectory))


app.use(express.static(path.join( __dirname, './assets')));







app.get('/',(req,res)=>{
    res.render('first')
})

app.get('/2',(req,res)=>{
    res.render('second')
})
app.get('/3',(req,res)=>{
    res.render('third')
})
app.get('/4',(req,res)=>{
    res.render('fourth')
})



// app.use('/',(req,res)=>{
//     res.send('hello world')

// })

app.listen(5000,()=>{
    console.log("server is running");
})