const express = require("express");
const homeSchema = require("../models/homeSchema");
const Router = express.Router();
const userSchema = require("../models/homeSchema");

Router.get("/", async (req, res) => {
  try {
    return res.status(200).send("Welcome to Home Screen");
  } catch (error) {
    return res.status(400).send(err.message);
  }
});

Router.post("/contactus", async (req, res) => {
  try {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const message = req.body.message;

    const userData = new homeSchema({
      firstname,
      lastname,
      email,
      phonenumber,
      message,
    });
    const useremail = await homeSchema.findOne({ email: email });
    if (!useremail) {
      userData.save((err) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            success: true,
            msg: "Message Sent !",
          });
        }
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "Message repeated",
      });
    }

    // const useremail = await homeSchema.findOne({email:email});
    // if(email === useremail.email){
    //     res.status(400).json({
    //         success: false,
    //         msg: "User already exists !",
    //       });
    // }else{
    //     console.log('err');
    // }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

// //login

// Router.post('/login', (req,res)=>{
//     const{
//         email,
//         password
//     } = req.body;

//     homeSchema.findOne({email:email},(err,result)=>{
//       if(email === result.email){
//         res.render('mainpage')
//       }else{
//         console.log(err);
//       }

//     } )
// })

module.exports = Router;
