const express = require("express");
const dotenv = require("dotenv");

dotenv.config({path: './config.env'})

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is listening to port: ${port}`)
})