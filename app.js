const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('We are on home')
})

//POSTS ROUTE

const postsRoute = require("./routes/posts");
app.use('/posts', postsRoute);

//DB STUFF
 
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, 
    () => {
    console.log("CONNECTED TO DATABASE")
})
app.listen(3000);