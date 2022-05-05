<template>
  <div class="section">
    <a-select
        v-model:value="names"
        class="section__multiselect"
        mode="multiple"
        placeholder="Выберите автора"
        size="large"
        :options="options"
        @deselect="handeDeselect"
        @select="handleSelect"
    >
      <template #suffixIcon>
        <icon>
          <template #component>
            <author-filter/>
          </template>
        </icon>
      </template>
    </a-select>
    <a-range-picker
        v-model:value="dates"
        class="section__date-filter"
        :placeholder="['От', 'До']"
        size="large"
        separator="~"
        suffix-icon=""
        @calendarChange="handleChange"
    >
    </a-range-picker>
  </div>

</template>

<script setup>
import {useStore} from "vuex";
import AuthorFilter from '@/assets/author-filter.svg';
import Icon from "@ant-design/icons-vue";

const store = useStore();
const usersModule = store.state.usersModule;

const options = usersModule.options;
const names = usersModule.searchNames;
const dates = usersModule.dateFilter;

const handleChange = (datesArray) => {
  if (datesArray == null) {
    store.dispatch('deleteDateFilter');
    return;
  }
  datesArray.forEach((date, index) => {
    if (!date) return false;
    store.dispatch('addDateFilter', {date, index});
  })
}

const handleSelect = (userName) => store.dispatch('addSearchName', userName);

const handeDeselect = (userName) => store.dispatch('deleteSearchName', userName);
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