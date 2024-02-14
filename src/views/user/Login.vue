<template>
    <h1>Login</h1>
    <div><input type="text" v-model="data.loginId" placeholder="아이디" /></div>
    <div><input type="password" v-model="data.password" placeholder="패스워드" /></div>
    <el-button @click="login()">로그인</el-button>
</template>

<script setup>
import { reactive } from 'vue';
import userApi from '@/axios/user';
import { useGlobalStore } from '@/store';
import stringUtils from '@/utils/stringUtils';
import { ElButton } from 'element-plus';

const store = useGlobalStore();

const data = reactive({
    loginId: null,
    password: null,
});

const login = async () => {
    if (stringUtils.isEmpty(data.loginId)) {
        return alert('아이디를 입력해주세요.');
    }

    if (stringUtils.isEmpty(data.password)) {
        return alert('비밀번호를 입력해주세요.');
    }

    try {
        const res = await userApi.login(data.loginId, data.password);
        console.log(res);
        // store.setUser(res);
    } catch (error) {
        console.error('login Error:', error);
    }
};
</script>
