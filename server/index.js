//db pass = AvtQefSnu8vchxYR
const express = require("express");
const { mongoose } = require("mongoose");
const router = require("../server/Routers/userRouter");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/users", router);

mongoose
  .connect("mongodb+srv://admin:1234@merncrudapp.czz0q.mongodb.net/")
  .then(() => {
    console.log("Connected DB");
    app.listen(port, () => {
      console.log("listening on port 5000");
    });
  })

  .catch((error) => {
    console.log(error.message + " DB connecttion faild");
  });


