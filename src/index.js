const EXPRESS = require("express");

const routes = require('./routes');


const app = EXPRESS();

routes(app);

app.listen(4000, () => {
    console.log("running on 3999");
});
