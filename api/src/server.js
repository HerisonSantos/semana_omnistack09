const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb+srv://airbnb:airbnb@cluster0-ukjy3.mongodb.net/airbnbclone?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors({origin: 'http://localhost:3333'}));
app.use(express.json());
app.use(routes);

app.listen("3333");