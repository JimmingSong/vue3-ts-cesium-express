<template>
    <div>
        <div>
            <span>格式化</span>
            <el-input v-model="sendMsg"></el-input>
            <el-button @click="sendData">发送</el-button>
        </div>
        <div v-for="(item, dex) in getMsg" :key="dex">{{item}}</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {wsHandle} from "@/componsition";
import {getSocketList} from '@/componsition/getRequestData'
export default defineComponent({
    name: "chat",
    setup () {
        let {sendData, getMsg, sendMsg} = wsHandle('ws://localhost:3001/test-socket');
        let {wsRoute} = getSocketList();
        return {getMsg, sendMsg, sendData, wsRoute}
    }
})
</script>

<style scoped>

</style>