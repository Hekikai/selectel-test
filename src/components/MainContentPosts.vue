<template>
  <section class="section">
    <a-row :gutter="[16,16]">
      <template v-for="[user, posts] in users.entries()">
        <a-col
            class="section__col"
            v-for="post in posts"
            :span="8">
          <a-card
              class="section__card"
              :title="post.title"
              bordered>
            <p>{{ post.body }}</p>
            <a-badge
                :number-style="{
                        backgroundColor: '#092433',
                        fontSize: '12px'
                      }"
                :count="user.name"
            />
            <a-badge
                :number-style="{
                        backgroundColor: '#E8E8E8',
                        color: '#595959',
                        marginLeft: '10px',
                        fontSize: '12px'
                      }"
                :count="post.date"
            />
          </a-card>
        </a-col>
      </template>
    </a-row>
  </section>
</template>

<script setup>
import ARow from "ant-design-vue/es/grid/Row";
import ACol from "ant-design-vue/es/grid/Col";
import {onMounted} from "vue";
import {useUsersInfo} from '@/hooks/useUsersInfo';

const {users, loadUsers} = useUsersInfo();

onMounted(() => Promise.all([loadUsers()]));

</script>

<style scoped lang="scss">
.section {

  &__card {
    height: auto;
    width: auto;
    padding: 0;

    p {
      font-size: 14px;
      padding-bottom: 1em;
    }
  }
}
</style>