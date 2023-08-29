const moment = require("moment");
const db = require("../models");
const nodemailer = require('nodemailer');
const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD } = require('../common')

const transporter = nodemailer.createTransport({
    service: EMAIL_SERVICE,   // 메일 보내는 곳
    prot: 465,
    host: 'smtp.naver.com',  
    secure: false,  
    requireTLS: true ,
    auth: {
      user: EMAIL_USER,  // 보내는 메일의 주소
      pass: EMAIL_PASSWORD   // 보내는 메일의 비밀번호
    }
});

exports.postEmail = async (req, res) => {

    const { email, title, Model, Price } = req.body
    await transporter.sendMail({
        from: EMAIL_USER, // sender address
        to: [ email ,EMAIL_USER ], // list of receivers
        subject: "Westloke Product Inquiries", // Subject line
        html: `<div style='
                text-align: center;
                width: 50%;
                margin: 30px auto;
                padding: 80px 50px;
                border: 1px solid #777;
                border-radius: 10px;
                background: #EDEDED;
                box-sizing: border-box;
            '>
            <h2 style='font-size : 24px; font-weight : 600;'>Westloke Product Inquiries</h2> 
            <br/>
            <p style='font-size : 18px;'>Email : <span style='font-weight : 600; margin-right: 10px;'>${ email }</span></p>
            <p style='font-size : 18px;'>Item : <span style='font-weight : 600; margin-right: 10px;'>${ title }</span></p> 
            <p style='font-size : 18px;'>Model : <span style='font-weight : 600; margin-right: 10px;'>${ Model }</span></p> 
            <p style='font-size : 18px;'>Price : <span style='font-weight : 600; margin-right: 10px;'>$ ${ Price }</span></p> 
        </div>`,
    })
    .then(response => {
        console.log('Email sent: ' + response.response)
        res.status(200).json({message : 'Success'})
    })
    .catch(error=>console.log(error))

}
