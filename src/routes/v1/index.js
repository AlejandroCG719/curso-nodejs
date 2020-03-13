const usersroutes = require('./users-route');
const productsroutes = require('./products-route');

module.exports = app =>{
    app.use('/api/v1/users', usersroutes );
    app.use('/api/v1/products', productsroutes );
};