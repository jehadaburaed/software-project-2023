const upload = require("../middleware/upload");
const addTourModel = require("../model/addTour.model");
const addTourData =require("../controller/addTour.controller");
const value =require("../controller/addTour.controller");

class addTourService{
    static async createAddTour(userId,date, place, price,maxNumber,image){
            const createAddTour = new addTourModel({userId,date, place, price,maxNumber,image});

        //    createAddTour.image =  "toString.value";
          return  createAddTour;
    }

    static async getTour(userId){
        const getTour = await addTourModel.find({userId})
        return getTour;
    }

   static async deleteTour(id){
        const deletTour = await addTourModel.findByIdAndDelete({_id:id})
        return deletTour;
   }

   static async updateTour(id){
    const updateTour = await addTourModel.findOneAndUpdate({_id:id})
    return updateTour;
}
}
module.exports = addTourService;