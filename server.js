const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
} 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req,res) => {
    res.json('STRIPE API GATEWAY is working')
})

app.post('/payment', (req,res) => {gateway.handlePayment(req,res,stripe)})

app.listen(port, () => {
    console.log(`Stripe Api is listening on port ${port}`)
})