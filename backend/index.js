const express = require("express");
const app = express();
const port = 3000;
const db = require("./db/database");

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log("started...");
});
