const addTourService = require('../services/addTour.service');
var value ;
exports.createAddTour =  async (req,res,next)=>{
    try {
        const { userId,date, place, price,maxNumber,image } = req.body;
        
        let addTourData = await addTourService.createAddTour(userId,date, place,price,maxNumber,image);
        addTourData.image=req.file.path;
        value= addTourData.image;
       
          addTourData.save();
        
         res.json ({status: true,success: addTourData});
        
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}



exports.getTour =  async (req,res,next)=>{
    try {
        const { userId } = req.body;
        let getData = await addTourService.getTour(userId);
        res.json({status: true,success:getData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.deleteTour =  async (req,res,next)=>{
    try {
        const { id } = req.body;
        let deletedData = await addTourService.deleteTour(id);
        res.json({status: true,success:deletedData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

