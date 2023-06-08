const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Salad = require('../models/Salad');
const { verifyTokenAndAdmin } = require('./verifyToken');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post('/', verifyTokenAndAdmin, upload.single('image'), async (req, res) => {
  const { name, description, price, category } = req.body;
  const image = req.file.filename;

  try {
    const newSalad = new Salad({ name, description, price, image, category });
    const savedSalad = await newSalad.save();
    res.status(200).json(savedSalad);
  } catch (err) {
    fs.unlink(req.file.path, (unlinkErr) => {
      if (unlinkErr) {
        console.error('Failed to delete image file:', unlinkErr);
      }
    });
    res.status(500).json(err);
  }
});

router.put('/:id', verifyTokenAndAdmin, upload.single('image'), async (req, res) => {
  const { name, description, price, category } = req.body;
  let image = '';

  if (req.file) {
    image = req.file.filename;
  }

  try {
    let updatedSalad;
    if (image !== '') {
      updatedSalad = await Salad.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            name: name,
            description: description,
            price: price,
            category: category,
            image: image,
          },
        },
        { new: true }
      );
    } else {
      updatedSalad = await Salad.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            name: name,
            description: description,
            price: price,
            category: category,
          },
        },
        { new: true }
      );
    }
    res.status(200).json(updatedSalad);
  } catch (err) {
    fs.unlink(req.file.path, (unlinkErr) => {
      if (unlinkErr) {
        console.error('Failed to delete image file:', unlinkErr);
      }
    });
    res.status(500).json(err);
  }
});

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Salad.findByIdAndDelete(req.params.id);
    res.status(200).json('salad deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/find/:id', async (req, res) => {
  try {
    const salad = await Salad.findById(req.params.id);
    res.status(200).json(salad);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  const category = req.query.category;
  try {
    let salads;

    if (category) {
      salads = await Salad.find({
        category: {
          $in: [category],
        },
      });
    } else {
      salads = await Salad.find();
    }
    const salad = await Salad.findById(req.params.id);
    res.status(200).json(salads);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
