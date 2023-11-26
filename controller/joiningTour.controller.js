const joiningTourService = require('../services/joiningTour.service');
exports.createJoiningTour =  async (req,res,next)=>{
    try {
        const { userId,tourId } = req.body;
        
        let joiningTourData = await joiningTourService.createJoiningTour(userId,tourId);
        
         res.json ({status: true,success: joiningTourData});
        
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.getJoiningTour =  async (req,res,next)=>{
    try {
        const { userId } = req.body;
        let getData = await joiningTourService.getJoiningTour(userId);
        res.json({status: true,success:getData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.deleteJoiningTour =  async (req,res,next)=>{
    try {
        const { id } = req.body;
        let deletedData = await joiningTourService.deleteJoiningTour(id);
        res.json({status: true,success:deletedData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}