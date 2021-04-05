<template>
    <div id="content">
        <div id="nav">
            <div class="title" :class="isCollapse && 'collapse-title'">
                <span v-show="!isCollapse">菜单</span>
                <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="changeCollapse"></i>
            </div>
            <el-menu
                    class="el-menu-vertical-demo"
                    default-active="/"
                    router
                    :collapse="isCollapse"
                    :collapse-transition="false"
            >
                <el-menu-item index="/">
                    <i class="el-icon-s-comment"></i>
                    <template #title>
                        聊天室
                    </template>
                </el-menu-item>
                <el-menu-item index="/cesium">
                    <i class="el-icon-location"></i>
                    <template #title>
                        cesium视图
                    </template>
                </el-menu-item>
                <el-menu-item index="/socket">
                    <i class="el-icon-message"></i>
                    <template #title>
                        socket调试工具
                    </template>
                </el-menu-item>

            </el-menu>
        </div>
        <div class="content-right">
            <HeaderCom />
            <router-view class="content-box" />
        </div>
    </div>
</template>
<script lang="ts">
    import {defineComponent, ref} from 'vue';
    import HeaderCom from "@/components/HeaderCom.vue";
    export default defineComponent({
        setup () {
            const isCollapse = ref(true);
            const changeCollapse = () => {
                isCollapse.value = !isCollapse.value;
            }
            return {isCollapse, changeCollapse}
        },
        components: {HeaderCom}
    })
</script>
<style lang="less">
    @titleHeight: 40px;
    #content {
        display: flex;
        height: 100%;
        #nav {
            .el-menu-vertical-demo {
                height: calc(100% - 40px);
                &:not(.el-menu--collapse) {
                    width: 200px;
                }
            }
            .title {
                height: @titleHeight;
                line-height: @titleHeight;
                text-align: center;
                border-right: solid 1px #e6e6e6;
            }
            .collapse-title {
                width: 65px;
            }
        }
        .content-right {
            flex-grow: 1;
            .content-box {
                height: calc(100% - 40px);
            }
        }
    }
</style>
