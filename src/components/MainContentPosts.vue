<template>
  <section class="section">
    <template v-for="[user, posts] in users.entries()">
      <div v-for="post in posts" class="section__col">
        <a-card
            class="section__card"
            :title="post.title"
            bordered>
          <p>{{ post.body }}</p>
          <div class="badges">
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
                        fontSize: '12px'
                      }"
                :count="transformDate(post.date)"
            />
          </div>
        </a-card>
      </div>
    </template>
  </section>
</template>

<script setup>
import {transformDate} from "@/utils/transformDate";

const props = defineProps({
  users: Map
})

</script>

<style scoped lang="scss">
.section {
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  grid-gap: 1em;

  @media (max-width: 976px) {
    display: flex;
    flex-direction: column;
  }

  &__card {
    height: 100%;

    .badges {
      display: flex;

      :nth-child(n+2) {
        margin-left: 10px;
      }

      @media (max-width: 1300px) {
        flex-direction: column;
        gap: 1em;

        :nth-child(n+2) {
          margin-left: 0;
        }
      }
    }

    p {
      font-size: 14px;
      padding-bottom: 1em;
    }
  }
}
</style>