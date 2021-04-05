let express = require('express');
let userRoute = express.Router();
let {getWsRouteList} = require('./socketRoutes');
let {ReturnObj} = require('../utils');

userRoute.get('/add', (req, res) => {
    const result = new ReturnObj(getWsRouteList());
    res.send(result);
})

module.exports = userRoute;
