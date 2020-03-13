const EXPRESS = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const routesV1 = require('./routes/v1/');

dotenv.config();
const app = EXPRESS();
console.log("Mongo ", process.env.MONGO);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routesV1(app);

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => {
    app.listen(4000, () => {
        console.log(`running on ${ PORT }`);
    });
    console.log("Conecte to mongo");
})
.catch( (err)=>{
    console.log("Mongo Error ", err);
});


