<template>
    <h1>Login</h1>
    <div><input type="text" v-model="data.userId" placeholder="아이디" /></div>
    <div><input type="password" v-model="data.password" placeholder="패스워드" /></div>
    <button @click="loginAction()">로그인</button>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '@/axios/user';

const data = ref({
    userId: null,
    password: null,
});

const loginAction = async () => {
    if (!data.value.userId || data.value.userId.trim() === '') {
        return alert('아이디를 입력해주세요.');
    }

    if (!data.value.password || data.value.password.trim() === '') {
        return alert('비밀번호를 입력해주세요.');
    }

    try {
        const res = await login(data.value.userId, data.value.password);
        console.log(res);
    } catch (error) {
        console.error('loginAction Error:', error);
    }
};
</script>
