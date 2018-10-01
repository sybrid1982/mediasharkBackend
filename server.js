'use strict';

const express = require("express");
const app = express();

app.use(express.static('./public'));
app.use(express.json());

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});