const express = require('express');
const bodyParser = require("body-parser");
var morgan = require('morgan');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8081;

const fileUploadRouter = require("./routes/sendEmail");

app.use("/send-email-otp",fileUploadRouter);

app.get("/",(req,res) =>{
    res.status(200).json({
        status:true,
        msg:"Working..."
    })
})

app.listen(PORT,() =>{
    console.log(`Server is running at port ${PORT}`)
})

