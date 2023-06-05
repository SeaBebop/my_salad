const router = require("express").Router();
const Cart = require("../models/Cart");
const {verifyToken, verifyTokenAuth } = require('./verifyToken');



router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', verifyTokenAuth ,async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', verifyTokenAuth ,async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("cart deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/find/:userId', verifyTokenAuth ,async (req, res) => {
    try {
        console.log(req.params.id)
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;


