const express = require('express');
const router = express.Router();

const {register,login} = require("../controllers/authController")

router.post('/user/register',register)
router.post('/user/login',login)


const {createProvider,getProviders,getSingleProvider,createService,userServices} = require("../controllers/serviceController")

router.post('/provider/create',createProvider)
router.get('/providers',getProviders)
router.get('/provider/:id',getSingleProvider)
router.post('/user/service/create',createService)
router.get('/user/:id/services',userServices)

const {createOrder,validateOrder} = require("../controllers/transactionController")
router.post('/order/create',createOrder)
router.post('/order/validate',validateOrder)

module.exports = router;