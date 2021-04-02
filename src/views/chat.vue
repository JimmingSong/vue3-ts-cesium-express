<template>
    <div class="chat-page">
        <chatMessageBox :msg-list="getMsg" :user-info="user" />
        <sendMsgCom :socket="socket" :user-info="user" />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import sendMsgCom from "@/views/chatCom/sendMsgCom.vue";
import chatMessageBox from './chatCom/chatMessageBox.vue';
import {randomCreateUser, wsHandle} from "@/componsition";
import {getSocketList} from '@/componsition/getRequestData'

export default defineComponent({
    name: "chat",
    setup () {
        let {sendData, getMsg, sendMsg, socket} = wsHandle('ws://172.16.1.15:3001/test-socket');
        let {user} = randomCreateUser();
        let {wsRoute} = getSocketList();
        return {getMsg, sendMsg, sendData, wsRoute, socket, user}
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
