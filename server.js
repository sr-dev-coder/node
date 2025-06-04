require('dotenv').config()
import express from "express"
const app = express()
const port = process.env.PORT

app.get('/', (req, res) =>{
    res.send('Hello there')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})