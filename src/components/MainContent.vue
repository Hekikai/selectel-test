<template>
  <main class="container">
    <main-content-filters/>
    <main-content-posts/>
  </main>
</template>

<script setup>
import MainContentFilters from '@/components/MainContentFilters';
import MainContentPosts from '@/components/MainContentPosts';
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 257px;

  @media (max-width: 976px) {
    margin: 0;
  }
}
</style>