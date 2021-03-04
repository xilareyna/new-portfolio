require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const MONGOURI = process.env.MONGODB_URI;

const formController = require("./controllers/formController.js");

//============
//Middleware
//============
app.use(express.json());
app.use(cors());

//=====================
//Database Disconnection
//=====================
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//=====================
//Database Connection
//=====================
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

//============
//Controllers
//============
app.use("/api/form", formController);

//============
//Listen Port
//============
app.listen(PORT, () => {
  console.log(
    "🎉🎊",
    "getting organized with the Ticking Clock on port",
    PORT,
    "🎉🎊"
  );
});

module.exports = app;
