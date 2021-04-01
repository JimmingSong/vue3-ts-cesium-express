<template>
    <div class="chat-page">
        <chatMessageBox :msg-list="getMsg" />
        <sendMsgCom :socket="socket" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import sendMsgCom from "@/views/chatCom/sendMsgCom.vue";
import chatMessageBox from './chatCom/chatMessageBox.vue';
import {wsHandle} from "@/componsition";
import {getSocketList} from '@/componsition/getRequestData'
export default defineComponent({
    name: "chat",
    setup () {
        let {sendData, getMsg, sendMsg, socket} = wsHandle('ws://localhost:3001/test-socket');
        let {wsRoute} = getSocketList();
        return {getMsg, sendMsg, sendData, wsRoute, socket}
    },
    components: {sendMsgCom, chatMessageBox}
})
</script>

<style scoped>
.chat-page {
    display: flex;
    flex-direction: column;
}
</style>