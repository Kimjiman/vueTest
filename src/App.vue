<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/views/layout/Header.vue'
import Footer from '@/views/layout/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup></script>

<style scoped></style>
