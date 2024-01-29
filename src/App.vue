<template>
    <Header />
    <main class="contents">
        <RouterView />
    </main>
    <Footer />
</template>

<script setup>
import { onMounted } from 'vue';
import Header from '@/views/layout/Header.vue';
import Footer from '@/views/layout/Footer.vue';
import { useGlobalStore } from '@/store';

const store = useGlobalStore();
onMounted(() => {
    store.setInitState(true);
    console.log('Project Loading Status:', store.getInitState);
});
</script>

<style scoped></style>
