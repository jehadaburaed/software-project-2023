
const joiningTourModel = require("../model/joiningTour.model");



class joiningTourService{
    static async createJoiningTour(userId,tourId){
            const createJoiningTour = new joiningTourModel({userId,tourId});
          return await createJoiningTour.save();
    }

    static async getJoiningTour(userId){
        const getTour = await joiningTourModel.find({userId})
        return getTour;
    }

    static async deleteJoiningTour(id){
        const deletTour = await joiningTourModel.findByIdAndDelete({_id:id})
        return deletTour;
   }

}
module.exports = joiningTourService;

