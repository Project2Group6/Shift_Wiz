const router = require("express").Router();
const { User } = require("../../models");
const { Employee, TimeOff } = require('../../models')

// request for sick call
router.get("/sick-calls", async(req,res)=>{
  try{
    const getSickCalls = await TimeOff.findAll({
      where:{
        type: 'sick'
      }
    });
    res.status(200).json(getSickCalls)
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})



// Post sick call
router.post("/pto", async (req, res) => {
  try {
    const postPto = await TimeOff.create({
      start_date: req.body.ptoStartDate,
      end_date: req.body.ptoEndDate,
      type: req.body.type,
      employee_id: req.session.userId
    })
    res.status(200).json(postPto)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }});


// // request for pto
router.get("/pto", async(req,res)=>{
  try{
    const getPto = await TimeOff.findAll( {
  where:{
    type: 'pto'
  }
});
    res.status(200).json(getPto)
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})

//post pto
router.post("/sick-calls", async (req, res) => {
    try {
      const sickCall = await TimeOff.create({
        start_date: req.body.sickDate,
        type: req.body.type,
        call_in_sick_reason: req.body.sickReason,
        employee_id: req.session.userId
      })
      res.status(200).json(sickCall)
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