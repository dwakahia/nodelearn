const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const users = require('./routes/users')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('its running');
})

app.use('/users',users);


app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})