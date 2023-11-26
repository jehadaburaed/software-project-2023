const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user.routes");
const addTourRoute = require('./routers/addTour.routes');
const joiningTourRoute = require('./routers/joiningTour.routes');
const app = express();

app.use(bodyParser.json())

app.use("/",UserRoute);
app.use("/",addTourRoute);
app.use("/",joiningTourRoute);
app.use('/uploads',express.static('uploads'))

module.exports = app;