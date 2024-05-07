const Transaction = require("../models/transactionModel")
const User = require("../models/userModel")
const ServiceProvider = require("../models/serviceProviderModel")
const Razorpay = require('razorpay')
const crypto = require("crypto");

const createOrder = async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET
        })

        const options = req.body
        try {
            const order = await razorpay.orders.create(options)
            if (!order) {
                return res.status(400).json({
                    "status": "failure",
                    "code": 400,
                    "message": "Order creation failed"
                })
            }
            return res.status(200).json({
                "status": "success",
                "code": 200,
                "message": "Order created successfully",
                "order": order
            })
        } catch (error) {
            return res.status(400).json({
                "status": "failure",
                "code": 400,
                "message": error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            "status": "failure",
            "code": 500,
            "message": error.message
        })
    }
}

const validateOrder = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body
        // const sha = crypto.createHmac("sha256", process.env.KEY_SECRET);
        // //order_id + "|" + razorpay_payment_id
        // sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        // const digest = sha.digest("hex");
        // if (digest !== razorpay_signature) {
        //     return res.status(400).json({ msg: "Transaction is not legit!" });
        // }
        // return res.status(200).json({
        //     "status": "success",
        //     "code": 200,
        //     "message": "Transaction is legit!",
        //     "data": req.body
        // })
        const input = razorpay_order_id + '|' + razorpay_payment_id;

            const hmac = crypto.createHmac('sha256', process.env.KEY_SECRET);
            hmac.update(input);
            const generated_signature = hmac.digest('hex');


            // const isAuthentic = expectedSignature === razorpay_signature;
            if (generated_signature == razorpay_signature) {

                return res.status(200).json([{
                    "status": "success",
                    'code': 200,
                    "message": "Verified payment"
                }])
            } else {
                return res.status(400).json([{
                    "status": "error",
                    "code": 400,
                    "message": "Invalid payment signature"
                }])
            }

    } catch (error) {
        return res.status(500).json({
            "status": "failure",
            "code": 500,
            "message": error.message
        })
    }
}

module.exports = {
    createOrder,
    validateOrder
}