<template>
  <div class="section">
    <a-select
        class="section__multiselect"
        mode="multiple"
        placeholder="Выберите автора"
        size="large"
        suffix-icon=""
        clear-icon
        :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
    >
      <template #suffixIcon>
        <user-outlined/>
      </template>
    </a-select>
    <a-range-picker
        class="section__date-filter"
        size="large"
        v-model:value="value2"
        show-time
        separator="~"
        suffix-icon=""
    >
    </a-range-picker>
  </div>

</template>

<script setup>
import {UserOutlined} from '@ant-design/icons';
import {ref} from "vue";

const value2 = ref(2);

</script>

<style scoped lang="scss">
@import './src/style/mixins';
@import './src/style/variables';

.section {
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  height: 4.5rem;
  padding: 1em 0;
  margin-top: 60px;
  position: sticky;
  top: $header-height + 10px;
  z-index: 1;

  @media (max-width: 976px) {
    flex-direction: column;
    justify-content: center;
    top: $header-height + 20px;
  }

  &__multiselect {
   @include filter;
  }

  &__date-filter {
    @include filter;
  }
}
</style>