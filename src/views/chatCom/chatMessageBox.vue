<template>
    <div class="show-message-box" ref="msgBox">
        <div v-for="(item, dex) in  msgList" :key="dex" class="message-show-com" :class="userInfo.id === item.userId ? 'self-msg' : 'target-msg'">
            <div class="message-show-user">
                <el-avatar icon="el-icon-user-solid" shape="square"></el-avatar>
            </div>
            <div :class="userInfo.id === item.userId ? 'self-text' : 'target-text'">{{item.msg}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType, watch, toRefs, ref} from 'vue'
import {MsgContent, UserInfo} from "@/interfaceObj";
export default defineComponent({
    name: "MessageBox",
    props: {
        msgList: {
            type: Array as PropType<Array<MsgContent>>
        },
        userInfo: {
            type: Object as PropType<UserInfo>
        }
    },
    setup (props) {
        const {msgList} = toRefs(props);
        const msgBox = ref<HTMLElement>()
        watch([msgList], (oldValue, newValue) => {
            console.log('watch', newValue);
            if (msgBox.value) {
                msgBox.value.scrollTop = msgBox.value.scrollHeight;
            }
        }, {
            deep: true
        })
        return {msgBox}
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
    .target-msg {
        display: flex;
        margin: 6px 0;
        .message-show-user {
            display: flex;
            flex-direction: column;
        }
        .target-text {
            position: relative;
            margin-left: 16px;
            background-color: aquamarine;
            padding: 5px 10px;
            border-radius: 5px;
            max-width: 600px;
            word-break: break-word;
            &::before {
                content: '';
                position: absolute;
                top: 3px;
                left: -18px;
                border: 8px solid transparent;
                border-right: 10px solid aquamarine;
            }
        }
    }
    .self-msg {
        display: flex;
        flex-direction: row-reverse;
        margin: 6px 0;
        .self-text {
            position: relative;
            margin-right: 16px;
            background-color: aquamarine;
            padding: 5px 10px;
            border-radius: 5px;
            max-width: 600px;
            word-break: break-word;
            &::before {
                content: '';
                position: absolute;
                top: 3px;
                right: -18px;
                border: 8px solid transparent;
                border-left: 10px solid aquamarine;
            }
        }
    }
</style>