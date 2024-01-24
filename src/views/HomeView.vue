<template>
    <div>HOME</div>
    <button @click="loginAction()">로그인테스트</button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { login } from '@/axios/user';

const loginAction = async () => {
    try {
        const res = await login('admin', '1111');
    } catch (error) {
        console.error('Error during login:', error);
    }
};
</script>
