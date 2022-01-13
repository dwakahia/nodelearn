const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const users = require('./routes/users')
const path = require('path')

app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(`${__dirname}/index.html`));
})

app.use('/users',users);


app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})