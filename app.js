const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const mongoDBURI =
  "mongodb+srv://testuser:testuser123@testcluster.uutbq.mongodb.net/testdb?retryWrites=true&w=majority";
mongoose
  .connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("Connected to the mongodb successfully");
    app.listen(port, () => {
      console.log(`Server running at localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Something went wrong when connecting to mongodb");
    console.log(err);
  });

app.use(cors());
app.use(express.json());

// Importing Routes
const userRoute = require("./routes/users");

app.use(userRoute);

// app.get("/", (req, res) => {
//   res.status(200).send("HOLA!!");
// });
