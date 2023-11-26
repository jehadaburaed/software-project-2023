const app = require("./app");
const db = require('./config/db')
const UserModel=require('./model/user.model')
const addTourModel=require('./model/addTour.model')
const port = 3000;
app.get(`/`,(req,res)=>{
    res.send("hello heve")
}
)
app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
})