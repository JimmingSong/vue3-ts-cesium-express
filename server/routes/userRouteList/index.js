let express = require('express');
let userRoute = express.Router();
let {getWsRouteList} = require('../socketRoutes');
let {routeList} = require('./userRoute');

routeList.forEach(item => {
    let {methods, url, callback} = item;
    userRoute[methods](url, callback)
})

module.exports = userRoute;