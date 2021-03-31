let express = require('express');
let cors = require('cors');
let {json, urlencoded} = require('body-parser');
let morgan = require('morgan');
// let router = express.Router();

let app = express();
let expressWs = require('express-ws')(app);
app.use(cors()).use(json()).use(urlencoded({extended: false})).use(morgan('dev'));

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});

app.get('/', function(req, res, next){
    console.log('get route', req.testing);
    res.end();
});
let wsList = [];
app.ws('/test-socket', function(ws, req) {
    if (wsList.indexOf(ws) > -1) return;
    wsList.push(ws);
    ws.on('message', function(msg) {
        wsList.forEach(item => {
            item.send(msg);
        })
        console.log(msg);
    });
    ws.on('close', function (ws) {
        console.log(ws);
        wsList.splice(wsList.indexOf(this), 1);
    })
    console.log('socket', req.testing);
});


app.listen(3001, () => {
    console.log('服务启动成功');
})
