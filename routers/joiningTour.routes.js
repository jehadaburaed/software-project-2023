const router = require("express").Router();
const joiningTourController = require('../controller/joiningTour.controller')
router.post("/JoiningTour",joiningTourController.createJoiningTour);

router.get('/getJoiningTour',joiningTourController.getJoiningTour)

router.post("/deleteJoiningTour",joiningTourController.deleteJoiningTour)


module.exports = router;