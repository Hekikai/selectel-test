<template>
  <main class="container">
    <main-content-filters/>
    <a-alert
        v-if="isContentEmpty"
        message="Постов за данное время нет"
        description="Попробуйте ввести другую дату."
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
import {onMounted, computed} from "vue";

const store = useStore();
const searchedUsers = computed(() => store.getters.searchedUsers);
const isContentEmpty = computed(() => {
  let isEmpty = false;
  for(const values of searchedUsers.value.values()) {
    if(values.length === 0) {
      isEmpty = true;
      break;
    }
  }
  return isEmpty;
})

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