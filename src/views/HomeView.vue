<template>
    <div>HOME</div>
    <button @click="loginAction()">로그인테스트</button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { login } from '@/axios/user';

const loginAction = () => {
    login('admin', '1234');
};
</script>
