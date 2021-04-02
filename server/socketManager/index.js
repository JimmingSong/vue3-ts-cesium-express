class SocketManager {
    constructor() {
        this.socketList = [];
    }
    add (ws) {
        if (this.socketList.indexOf(ws) > -1) return;
        this.socketList.push(ws);
        this.eventBind(ws);
    }

    sendMsgForEveryOne (msg) {
        let user = msg.userInfo;
        let message = msg.msg;
        this.socketList.forEach(item => {
            item.send(JSON.stringify({userId: user.id, msg: message}))
        })
    }
    eventBind (ws) {
        this.messageEvent(ws);
        this.closeEvent(ws);
    }
    messageEvent (ws) {
        ws.on('message', msg => {
            this.sendMsgForEveryOne(JSON.parse(msg));
        })
    }
    openEvent (ws) {
        console.log(ws);
        console.log('open');
    }
    closeEvent (ws) {
        ws.on('close', () => {
            if (this.contain(ws)) {
                this.remove(ws);
            }
        })
    }
    contain (ws) {
        return this.socketList.indexOf(ws) > -1
    }
    remove (ws) {
        let dex = this.socketList.indexOf(ws);
        if (dex > -1) {
            this.socketList.splice(dex, 1);
        }
    }
}

module.exports = {
    SocketManager
}