<template>
  <main class="container">
    <main-content-filters @selectUser="handleSelectUser" :users="users" :options="options"/>
    <main-content-posts :users="users"/>
  </main>
</template>

<script setup>
import MainContentFilters from '@/components/MainContentFilters';
import MainContentPosts from '@/components/MainContentPosts';
import {useUsersInfo} from "@/hooks/useUsersInfo";
import {onMounted, ref, toRaw, toRefs, watch} from "vue";

const {users, loadUsers, areUsersLoaded, options} = useUsersInfo();

const handleSelectUser = (selectedUsers) => {
  users.value = users.value.filter((usr) => {
    if (selectedUsers.some((userName) => userName === usr.user.name)) return usr;
    return false
  })
}


onMounted(() => {
  Promise.all([loadUsers()]);
})
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