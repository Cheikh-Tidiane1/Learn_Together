const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");
const chapterTypeRoutes = require("./routes/chapterType");

mongoose
  .connect(
    "mongodb+srv://Learn_Cwh:QKvY07ebLXBckbPn@clusterlt.hvi44t0.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/wac/chapterType", chapterTypeRoutes);
app.use("/wac/course", courseRoutes);
app.use("/wac/auth", userRoutes);

module.exports = app;
