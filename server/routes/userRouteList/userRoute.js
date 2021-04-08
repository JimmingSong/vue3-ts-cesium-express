let {ReturnObj} = require('../../utils');
let {HandleUser} = require('../../mysql/mysqlCon');
let routeList = [
    {
        methods: 'post',
        url: '/add',
        async callback (req, res) {
            let reqData = req.body;
            let userHandle = new HandleUser();
            let result = await userHandle.insert(reqData);
            if (result.success) {
                const returnObj = new ReturnObj();
                res.send(returnObj);
            }
        }
    }
];
module.exports = {
    routeList
}
