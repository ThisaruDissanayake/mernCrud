const express = require('express');
const mongoose= require('mongoose')
const app = express();
const DB_URL ='mongodb+srv://admin:admin@mernapp.yisi2ra.mongodb.net/crudapp?retryWrites=true&w=majority&appName=mernapp'
const PORT = 8000;

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected')
})
.catch((err)=> console.log('DB connection error',err));



app.listen(PORT,()=>{
    console.log('App is running on '+PORT);
});

