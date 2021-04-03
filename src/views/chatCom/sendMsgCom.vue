<template>
    <div class="send-box">
        <div contenteditable="true" class="send-message" ref="msgCom" @keydown.enter.prevent="sendFun"></div>
        <div class="send-btn">
            <el-button type="success" @click="sendFun">发送</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue';
    import {ElMessage} from 'element-plus';
    export default defineComponent({
        name: "sendMsgCom",
        props: {
            socket: WebSocket,
            userInfo: Object
        },
        setup (props) {
            const msgCom = ref<HTMLElement>();
            const sendInterval = ref()
            const sendFun = () => {
                const socket = props.socket;
                if (socket) {
                    let val = msgCom.value?.textContent;
                    if (!val) {
                        clearTimeout(sendInterval.value);
                        sendInterval.value = setTimeout(() => {
                            ElMessage.warning('发送内容不能为空');
                        }, 500)
                        return;
                    }
                    const user = props.userInfo;
                    const sendData = {userInfo: user, msg: val};
                    socket.send(JSON.stringify(sendData));
                    if (msgCom.value) {
                        msgCom.value.innerText = ''
                    }
                }
            }
            return {sendFun, msgCom}
        }
    })
</script>

<style scoped lang="less">
.send-box {
    height: 252px;
    .send-message {
        height: 200px;
        width: 100%;
        border: 1px solid #ccc;
        outline: none;
        word-break: break-word;
        box-sizing: border-box;
        padding: 5px;
    }
    .send-btn {
        display: flex;
        justify-content: flex-end;
        margin: 5px 10px;
        box-sizing: border-box;
    }
}
</style>