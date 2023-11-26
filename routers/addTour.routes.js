const router = require("express").Router();
const addTourController = require('../controller/addTour.controller')
const upload = require('../middleware/upload')
router.post("/AddTour",upload.single('image'),addTourController.createAddTour);

router.get('/getTour',addTourController.getTour)

router.post("/deleteTour",addTourController.deleteTour)

//router.post("/updateTour",addTourController.updateTour)

module.exports = router;