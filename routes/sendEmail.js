var express = require('express');
var router = express.Router();
const Email = require("../utils/email");


// for single file upload
router.post("/",async(req,res) =>{
    try{

        try{
            // const otp = `${req.protocol}://${req.get('host')}/api/v1/user/emailVerify/${emailToken}`;
            await new Email().sendWelcome("Manjeet",1234,"manjeetkr2017@gmail.com","manztchauhan@gmail.com");
            return res.status(200).json({
                status:true,
                msg:`A email verification otp sent to and otp is 1234.` //Todo : remove otp from response
            });

        }catch(err){
            console.log(err)
            return res.status(500).json({
                status:false,
                msg:"There was an error sending the email. Try again later!"
            })
        }

    }catch(err){
        console.log(err)
        return res.status(500).json({
            status:false,
            msg:err.message
        })
    }
})


module.exports = router;