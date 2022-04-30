<template>
  <section class="section">
    <a-row :gutter="[16,16]">
      <a-col
          class="section__col"
          v-for="user in users"
          :span="8">
        <a-card
            class="section__card"
            :title="user.id"
            bordered>
          <p>{{ user.name }}</p>
          <a-badge
              :number-style="{
                backgroundColor: '#092433',

              }"
              count="Без разницы"
          />
          <a-badge
              :number-style="{
                backgroundColor: '#E8E8E8',
                color: '#595959',
                marginLeft: '10px',
              }"
              count="24 февраля 2022"
          />
        </a-card>
      </a-col>
    </a-row>
  </section>
</template>

<script setup>
import ARow from "ant-design-vue/es/grid/Row";
import ACol from "ant-design-vue/es/grid/Col";
import {onMounted} from "vue";
import {usePostsInfo} from "@/hooks/usePostsInfo";
import {useUsersInfo} from '@/hooks/useUsersInfo';

const {posts, loadPosts} = usePostsInfo();
const {users, loadUsers} = useUsersInfo();

onMounted(() => Promise.all([loadUsers(), loadPosts()]));

</script>

<style scoped lang="scss">
.section {

  &__card {
    width: 295px;
    padding: 0;

    p {
      padding-bottom: 1em;
    }
  }
}
</style>