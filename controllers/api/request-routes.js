const router = require("express").Router();
const { User } = require("../../models");
const { Employee } = require('../../models')

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


router.put("/availability", async (req, res) => {
    try {
      Employee.update(
        {
          works_sunday: req.body.works_sunday,
          works_monday: req.body.works_monday,
          works_tuesday: req.body.works_tuesday,
          works_wednesday: req.body.works_wednesday,
          works_thursday: req.body.works_thursday,
          works_friday: req.body.works_friday,
          works_saturday: req.body.works_saturday,
        },
        {
          where: {
            id: req.session.userId
          }
        }
      )
      .then((updatedAvail) => {
        res.json(updatedAvail)
      })
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  }
);

      module.exports = router;