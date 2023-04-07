const router = require("express").Router();
const { User } = require("../../models");

router.post("/sick-calls", async (req, res) => {
    try {

    
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }});


router.post("/pto", async (req, res) => {
    try {

    
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }});


router.post("/availability", async (req, res) => {
    try {

    
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }});

      module.exports = router;