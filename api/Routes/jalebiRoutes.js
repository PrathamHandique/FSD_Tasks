const express = require("express");
const router = express.Router();
const Jalebi = require("../models/jalebi");
//************************************************************************************************************ */
//Post Route to add a Person
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newJalebi = new Jalebi(data);
    const response = await newJalebi.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});
//****************************************************************************************************************/
//Get Route to fetch a person by work type
router.get("/:nature_of_recipe", async (req, res) => {
  try {
    const nature_of_recipe = req.params.nature_of_recipe;
    if (nature_of_recipe === "sweet" || nature_of_recipe === "spicy") {
      const response = await Jalebi.find({ nature: nature_of_recipe });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ err: "invalid nature type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" });
  }
});

module.exports = router;
