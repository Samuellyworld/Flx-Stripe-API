const handlePayment = (req,res, stripe) => {
    const body ={
        source : req.body.token.id,
        amount : req.body.amount,
        currency : 'usd'
    }
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).send({
                error : stripeErr
            })
        } else {
            res.status(200).send({
                success : stripeRes
            })
        }
    })
}

module.exports ={
    handlePayment
}