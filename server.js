const express = require('express');
const bodyParser = require("body-parser");
const gateway = require('./stripe/gateway');
const cors = require('cors');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: true
 }));
 
 app.use(bodyParser.json());
app.use(cors());


app.get('/', (req,res) => {
    res.json('STRIPE API GATEWAY is working')
})

app.post('/payment', (req,res) => {gateway.handlePayment(req,res,stripe)})

app.listen(port, () => {
    console.log(`Stripe API is listening on port ${port}`)
})