const express = require("express");
const router = express.Router();
const Paneer = require("../models/paneer");
//************************************************************************************************************ */
//Post Route to add a Person
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPaneer = new Paneer(data);
    const response = await newPaneer.save();
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
      const response = await Paneer.find({ nature: nature_of_recipe });
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
