<template>
    <div>

    </div>
</template>

<script lang="ts">
import {reactive, defineComponent} from 'vue';
import {ChatState} from "@/views/typeobj";

export default defineComponent({
    name: "chat",
    setup () {
        const state: ChatState = reactive({
            socket: new WebSocket('ws:localhost:3001/test-socket')
        });

        console.log(state.socket);
        return {state}
    }
})
</script>

<style scoped>

</style>