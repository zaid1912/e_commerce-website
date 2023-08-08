// import { Express } from "express";
import mongoose from "mongoose";

import express from 'express';
const connection_url = `mongodb+srv://zaidmuzammil1912002:JX8gz0RoCnORLvC3@cluster0.aomemix.mongodb.net/trendythreadsdb?retryWrites=true&w=majority`

//App config

const app = express();
const port = process.env.PORT || 8001;

//Middlewares



//DB config
mongoose.connect(connection_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

//API endpoints


app.get('/', (req, res) => res.status(200).send('Hello'));

app.get('/women', (req, res) => {
    res.send("helloasd");
})

app.post('/trendythreads/User', (req, res) => {
    
})

//Listener

app.listen(port, () => console.log(`listeing on localhost: ${port}`));