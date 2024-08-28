const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

//############################################################################################################
const paneerRoutes = require("./Routes/paneerRoutes");
app.use("/paneer", paneerRoutes);
const jalebiRoutes = require("./Routes/jalebiRoutes");
app.use("/jalebi", jalebiRoutes);

//############################################################################################################
app.listen(4000, () => {
  console.log("server is runnig on port 4000");
});
