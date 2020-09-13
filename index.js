'use strict';

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use((req,res,next)=>{
console.log(req.url)
next()
});

app.use("/js",express.static("public/js"));
app.use("/models",express.static("models"));
app.use("/labeled_images",express.static("labeled_images"));



app.get('/index', function (req, res) {
    res.sendFile(__dirname + "/index.html");
    // console.log(req)
});


const port = 5000
try {
    app.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}/index`);
    });
}
catch (error) {
    console.log("Error Occured", error.message);
}