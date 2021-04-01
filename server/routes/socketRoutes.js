let {SocketManager} = require('../socketManager')
let socketHand = new SocketManager();
let wsRoutes = [
    {
        route: '/test-socket',
        name: '测试通道',
        handle (ws) {
            socketHand.add(ws);
        }
    }
]
function getWsRouteList () {
    return wsRoutes.map(item => {
        let {route, name} = item;
        return {route, name}
    })
}

module.exports = {
    wsRoutes,
    getWsRouteList
}