<template>
    <el-header class="header">
        <h1 class="title">Header</h1>
        <span class="link" v-for="it in routes" :key="it.name">
            <router-link :to="it.path">{{ it.name.toUpperCase() }}</router-link>
        </span>
    </el-header>
</template>

<script setup>
import router from '@/router/index';
import { ref } from 'vue';

const routes = ref(router.getRoutes());
</script>

<style scoped></style>
