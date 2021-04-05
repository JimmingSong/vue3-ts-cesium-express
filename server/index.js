let express = require('express');
let expressWs = require('express-ws');
let cors = require('cors');
let morgan = require('morgan');
let {json, urlencoded} = require('body-parser');
let {wsRoutes} = require('./routes/socketRoutes');
let router = require('./routes');
let userRoute = require('./routes/userRoute');

let app = express();
expressWs(app);
app.use(cors()).use(morgan('dev')).use(json()).use(urlencoded());
app.use('/', router);
app.use('/user', userRoute);
wsRoutes.forEach(item => {
    app.ws(item.route, (ws, req) => {
        item.handle(ws, req);
    })
})


app.listen(3001, () => {
    console.log('服务启动成功');
})
