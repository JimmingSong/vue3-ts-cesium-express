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
            socket: WebSocket
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
                    socket.send(val);
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
        border: 1px solid #ccc;
        outline: none;
    }
    .send-btn {
        display: flex;
        justify-content: flex-end;
        margin: 5px 10px;
        box-sizing: border-box;
    }
}
</style>