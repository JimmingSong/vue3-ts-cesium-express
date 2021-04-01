<template>
    <div class="show-message-box">
        <div v-for="(item, dex) in  msgList" :key="dex">{{item.msg}}</div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {MsgContent} from "@/interfaceObj";
export default defineComponent({
    name: "MessageBox",
    props: {
        msgList: {
            type: Array as PropType<Array<MsgContent>>
        }
    }
})
</script>

<style scoped>
.show-message-box {
    flex-grow: 1;
}
</style>