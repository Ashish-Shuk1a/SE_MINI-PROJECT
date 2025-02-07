require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const projRoute = require("./routes/projRoutes")

const app = express();
app.use(express.json());

app.use(cors());

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})


mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to db")
    })
    .catch((error)=>{
        console.log(error);
    })


    app.get('/',(req,res)=>{
        if(mongoose.connection.readyState === 1){
            res.status(200).json([{
                "status": "success",
                "code": 200,
                "message": 'Welcome To CodeShastra-X',
                "database": "Connected to MongoDb"
            }])
        }
        else{
            res.status(200).json([{
                "status": "success",
                "code": 200,
                "message": 'Welcome To CodeShastra-X',
                "database": "Not connected to MongoDb"
            }])
        }
        
    })

app.use('/api',projRoute)


app.listen(process.env.PORT || 4000,()=>{
    console.log('Listening on port',process.env.PORT || 4000);
})

module.exports = app