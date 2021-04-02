import {reactive, toRefs} from 'vue';
// import {UserInfo} from "@/interfaceObj";
interface WsState {
    socket: WebSocket | null,
    getMsg: string[],
    sendMsg: string
}

function messageBind(ws: WebSocket, state: WsState) {
    ws.onopen = () => {
        console.log('连接成功');
    }
    ws.onmessage = (wsMsg: { data: any; }) => {
        state.getMsg.push(JSON.parse(wsMsg.data));
    }
    ws.onclose = () => {
        state.socket = null;
    }
}
export function wsHandle(url: string) {
    const state = reactive<WsState>({
        socket: null,
        getMsg: [],
        sendMsg: ''
    });
    if (!state.socket) {
        state.socket = new WebSocket(url);
        messageBind(state.socket, state)
    }
    const sendData = () => {
        state.socket?.send(state.sendMsg);
    }
    return {...toRefs(state), sendData}
}

const count:number = new Date().getTime();

export function randomCreateUser() {
    const user = reactive({
        id: count
    });
    return {user}
}
