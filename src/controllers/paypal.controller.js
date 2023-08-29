const moment = require("moment");
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox',
  'client_id': 'AdQBTU71ImruCh_MPjILLX9FGoqq0aq5kW_qZMb2tgEsxhe4of2ZgaLSs1kbd_OT57ku2Rjj94Q33Mft',
  'client_secret': 'EPa7AmuCioKQ99Cf8UwaToQNhmJ3lBN1rPF02b58aXUkfexl2Xqz1or2L6prDJU71QYuacSC2U9XRlh6'
});

// 게시판 CRUD

exports.pay = async (req, res) => {
    console.log('pay 접속')
    const { name, price } = req.body
    res.redirect('http://localhost:3000/')
    // const create_payment_json = {
    //     "intent": "sale",
    //     "payer": {
    //         "payment_method": "paypal"
    //     },
    //     "redirect_urls": {
    //         "return_url": "http://localhost:3000/success",
    //         "cancel_url": "http://localhost:3000/cancel"
    //     },
    //     "transactions": [{
    //         "item_list": {
    //             "items": [{
    //                 "name": name,
    //                 "sku": "001",
    //                 "price": price,
    //                 "currency": "USD",
    //                 "quantity": 1
    //             }]
    //         },
    //         "amount": {
    //             "currency": "USD",
    //             "total": price
    //         },
    //         "description": "Hat for the best team ever"
    //     }]
    // };

    // paypal.payment.create(create_payment_json, function (error, payment) {
    //     if (error) {
    //         throw error;
    //     } else {
    //         for(let i = 0; i < payment.links.length; i++){
    //                 if(payment.links[i].rel === 'approval_url'){
    //                     res.redirect(payment.links[i].href);
    //             }
    //         }
    //     }
    // });
}
exports.success = async (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
    };
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('Success');
        }
    });
}

exports.cancel = async (req, res) => {
    return res.send('Cancelled')
}
