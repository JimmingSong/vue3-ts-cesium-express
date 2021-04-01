<template>
    <div class="send-box">
        <div contenteditable="true" class="send-message"></div>
        <el-button type="success" @click="sendFun">发送</el-button>
    </div>
</template>

<script lang="ts">
    import {defineComponent, toRefs, PropType} from 'vue'
    export default defineComponent({
        name: "sendMsgCom",
        props: {
            socket: {
                type: Object as PropType<WebSocket>,
            }
        },
        setup (props) {
            const {socket} = toRefs(props);
            const sendFun = () => {
                if (socket) {
                    // socket.send('msg', true)
                }
            }
            return {sendFun}
        }
    })
</script>

<style scoped lang="less">
.send-box {
    .send-message {
        min-height: 250px;
        border: 1px solid #ccc;
    }
}
</style>