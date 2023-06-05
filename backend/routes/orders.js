const router = require("express").Router();
const Order = require("../models/Order");
const {verifyToken, verifyTokenAuth, verifyTokenAndAdmin } = require('./verifyToken');



router.post('/', verifyToken, async (req, res) => {
    console.log(req.body)
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', verifyTokenAndAdmin ,async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', verifyTokenAndAdmin ,async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("order deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/find/:userId', verifyTokenAuth ,async (req, res) => {
    try {
        const Orders = await Order.findOne({userId: req.params.id});
        res.status(200).json(Orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', verifyTokenAndAdmin ,async (req, res) => {
    try {
        const Orders = await Order.find();
        res.status(200).json(Orders);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;