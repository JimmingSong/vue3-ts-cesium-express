<style scoped lang='less'>
    #cesium-box {
        height: 100%;
        position: relative;
        .login-box {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 400px;
            width: 600px;
            padding: 15px;
            background: #88cac6;
            z-index: 10;
            border-radius: 5px;
            .login-title {
                font-size: 40px;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
            }
            .login-form {
                width: 70%;
                margin: 0 auto;
            }
            .login-btn {
                display: flex;
                justify-content: center;
                .custom-btn {
                    width: 240px;
                }
            }
        }
    }
</style>

<template>
    <div id="cesium-box">
        <div class="login-box">
            <div class="login-title">登录页</div>
            <el-form label-width="80px" class="login-form">
                <el-form-item label="姓名">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formData.password"></el-input>
                </el-form-item>
            </el-form>
            <div class="login-btn">
                <el-button type="primary" class="custom-btn" @click="loginHandle">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from 'vue';
import cesium from '@/cesium'
import req from '@/request'
export default defineComponent({
    name: "login",
    setup () {
        const state = reactive({
            formData: {
                name: '',
                password: ''
            }
        });
        const loginHandle = async () => {
            console.log(state.formData.name);
            let res = await req.user.login(state.formData);
            console.log(res);
            if (res.success) {
                console.log(res, 'success');
            }
        }
        // onMounted(() => {
        //     cesium.init();
        // });
        return {...toRefs(state), loginHandle};
    }
});
</script>
