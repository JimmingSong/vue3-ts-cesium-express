let express = require('express');
let route = express.Router();
let {getWsRouteList} = require('./socketRoutes');
let {ReturnObj} = require('../utils');

route.get('/getRoute', (req, res) => {
    const result = new ReturnObj(getWsRouteList());
    res.send(result);
})

module.exports = route;