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
        // to: [ email ], // list of receivers
        to: [ email ,EMAIL_USER ], // list of receivers
        subject: "Westloke Product Inquiries", // Subject line
        html: `<div style='
                text-align: center;
                width: 800px;
                margin: 30px auto;
                padding: 40px 80px;
                border: 1px solid #EDEDED;
                background: #FFF;
                box-sizing: border-box;
            '>
            <h3 style='font-size : 26px; font-weight : 400; margin-bottom : 30px;'>Westloke</h3> 
            <h2 style='font-size : 26px; font-weight : 800; margin-bottom : 30px;'>Your Order has been Received Succesfully</h2> 
            <p style='font-size : 18px; margin-bottom : 30px'>Order : <span style='font-weight : 600; margin-right: 10px;'>${ email }</span></p>      
            <img style='margin-bottom : 30px;'src="https://wevibebucket.s3.ap-northeast-2.amazonaws.com/Model120.png" alt="Inline Image" />
            <p style='font-size : 16px; font-weight : 600;'>Made in Redmond,WA</p> 
            <p style='font-size : 14px; color : #989898;'>Lifetime Warranty for Amp itself<br>5 Years Warranty for the Tubes</p>
        </div>`,
    })
    .then(response => {
        console.log('Email sent: ' + response.response)
        res.status(200).json({message : 'Success'})
    })
    .catch(error=>console.log(error))

}
exports.postContactEmail = async (req, res) => {
    try {
        const { email, desc } = req.body
        await transporter.sendMail({
            from: EMAIL_USER, // sender address
            to: [ EMAIL_USER ], // list of receivers
            subject: `An Email came from : ${ email }`, // Subject line
            html: `<div>
                    <h2 style='font-size : 26px; font-weight : 800; margin : 30px 0;'>An Email came from : ${ email }</h2> 
                    <p style='font-size : 18px; margin-bottom : 30px'>Desc : <span style='font-weight : 600; margin-right: 10px;'>${ desc }</span></p>      
                </div>`,
        })
        .then(response => {
            console.log('Email sent: ' + response.response)
            res.status(200).json({message : 'Success'})
        })
        .catch(error=>console.log(error))
    }catch (error) {
        console.error('Error during signing:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
