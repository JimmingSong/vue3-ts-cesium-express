<style scoped lang='less'>
    #cesium-box {
        height: 100%;
        position: relative;
        .login-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 500px;
            width: 600px;
            padding: 15px;
            background: #a8a8a8;
            z-index: 10;
        }
    }
</style>

<template>
    <div id="cesium-box">
        <div class="login-box">
            <div>登录页</div>
            <el-form label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formData.password"></el-input>
                </el-form-item>
                <div>
                    <el-button>登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from 'vue';
import cesium from '@/cesium'
export default defineComponent({
    name: "login",
    setup () {
        const state = reactive({
            formData: {
                name: '',
                password: ''
            }
        });
        // onMounted(() => {
        //     cesium.init();
        // });
        return {...toRefs(state)};
    }
});
</script>
