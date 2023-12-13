const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.status(200).send({
        name : 'Aman',
        Status : 'Passed',
        Roll : 25
    })
}).listen(5555,()=>{
    console.log('Server is running on port number 5555')
})