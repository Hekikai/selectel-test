<template>
  <main class="container">
    <main-content-filters/>
    <a-alert
        message="Informational Notes"
        description="Additional description and informations about copywriting."
        type="info"
        show-icon
    />
    <main-content-posts/>
  </main>
</template>

<script setup>
import MainContentFilters from '@/components/MainContentFilters';
import MainContentPosts from '@/components/MainContentPosts';
import {useStore} from 'vuex';
import {onMounted} from "vue";

const store = useStore();

onMounted(() => {
  store.dispatch('loadUsers');
});

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 257px 60px 257px;

  @media (max-width: 976px) {
    margin: 0 16px;
  }
}
</style>