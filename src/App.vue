<template>
  <div class="container">
    <Clock />
  </div>
</template>

<script setup lang="ts">
import Clock from '@/components/Clock.vue';
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #091921;
}
</style>
