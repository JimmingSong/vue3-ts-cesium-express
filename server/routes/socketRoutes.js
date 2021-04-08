let {SocketManager} = require('../socketManager')
let socketHand = new SocketManager();
let wsRoutes = [
    {
        route: '/test-socket',
        name: '测试通道',
        handle (ws) {
            socketHand.add(ws);
        }
    },
    {
        route: '/satellitePos',
        name: '卫星实时位置',
        handle(ws) {

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