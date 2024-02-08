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

onMounted(async () => {
    store.setInitState(true);
});
</script>

<style scoped></style>
