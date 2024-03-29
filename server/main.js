const express = require("express");
const app = express();
const multer = require("multer");
const port = 5001;
const cors = require("cors");
const userModel = require("./index");
const mongoose = require("mongoose");
const productModel = require("./products/index");
const path = require("path");
// const bcrypt = require('bcryptjs')

app.use(express.static("public"));

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/E-Commerce");

app.get("/", (req, res) => {
  userModel.find().then((resp) => res.json(resp));
});

app.post("/createUser", async (req, res) => {
  const { name, email, password } = req.body
  // const bcryptPassword = await bcrypt.hash(password, 10) 

  try {
    const oldUser = await userModel.findOne({ email })
    if (oldUser) {
      return res.send({ error: "User Exist" })
    }
    await userModel.create({
      name, email, password
    })
    res.send({ status: "ok" })
  } catch (error) {
    res.send({ status: 'error' })
  }

});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

app.get("/getProducts", (req, res) => {
  productModel.find({}).then((resp) => res.json(resp));
});

app.post("/upload", upload.single("file"), (req, res) => {
  productModel
    .create({
      title: req.body.title,
      price: req.body.price,
      image: req.file.filename
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put('/update/:id', upload.single("file"), (req, res) => {
  const id = req.params.id
  productModel.findByIdAndUpdate({ _id: id }, {
    $set: {
      title: req.body.title,
      price: req.body.price,
      image: req.file.filename
    }
  }).then(resp => res.json(resp))
})
app.delete('/deleteProduct/:_id', (req, res) => {
  const id = req.params._id
  productModel.findByIdAndDelete(
    { _id: id },
    { $set: { deletedAt: new Date() } },
    { new: true }).then(resp => res.json(resp))


})

app.get('/search/:key', async (req, res) => {
  const key = req.params.key
  const prods = await productModel.find({})
  // const result=await prods.json()
  const searc = await prods.filter(products => products.title.toLowerCase().includes(key.toLowerCase()))
  res.send(searc)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
