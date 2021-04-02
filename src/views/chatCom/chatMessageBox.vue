<template>
    <div class="show-message-box">
        <div v-for="(item, dex) in  msgList" :key="dex" class="message-show-com">
            <div class="message-show-user">
                <el-avatar icon="el-icon-user-solid"></el-avatar>
                <span>名称</span>
            </div>
            <div>{{item.msg}}</div>
        </div>
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

<style scoped lang="less">
.show-message-box {
    flex-grow: 1;
    padding: 10px;
    box-sizing: border-box;
    height: calc(100% - 252px);
    overflow-y: auto;
}
    .message-show-com {
        display: flex;
        .message-show-user {
            display: flex;
            flex-direction: column;
        }
    }
</style>