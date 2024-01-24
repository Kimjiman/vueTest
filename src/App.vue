<template>
    <Header />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import Header from '@/views/layout/Header.vue';
import Footer from '@/views/layout/Footer.vue';
import { useGlobalStore } from '@/store';

const store = useGlobalStore();
onMounted(() => {
    store.setInitState(true);
    console.log('initState:', store.getInitState);
});
</script>

<style scoped></style>
