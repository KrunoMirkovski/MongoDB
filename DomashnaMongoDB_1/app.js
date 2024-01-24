//? ZA DOMASNA DA SE KREIRA DATABAZA BLOGOVI
//? ime na kolekcija blogs
//? na ruta "/blogs" da se povikuva i da se kreira blog
//? i da ima najmalce 10 bloga

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const blogCotroller = require("./controller/blogController");

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://kmirkovski:ndOgAV3oDnsO1jaF@cluster0.306kxh7.mongodb.net/Krunoblogs?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successful connection!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/blogs", blogCotroller.getAllBlogs);
app.post("/blogs", blogCotroller.createBlog);

app.listen(10000, (err) => {
  if (err) console.log(err);
  console.log("Application successfully running.");
});
