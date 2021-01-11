const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const shifts = require("./routes/api/shifts");

const app = express();

// body parser middleware
app.use(bodyParser.json());

// mongoDB connection
const db = require("./config/keys").mongoURI;

// connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// use routes
app.use("/api/shifts", shifts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Process started on port ${port}`));
