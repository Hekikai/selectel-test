<template>
  <header ref="header" class="header">
    <div class="header__logo">
      <a href="/">
        <img :src="TopSelectel" alt="Selectel logo">
      </a>
    </div>
    <div class="header__info">
      <div class="header__phone">
        <a href="tel:88005550675">
          <template v-if="reactiveWidth > 764">
            8 800 555 06 75
          </template>
          <template v-else>
            <v-phone/>
          </template>
        </a>
      </div>
      <div class="header__email">
        <a href="mailto:sales@selectel.ru">
          <template v-if="reactiveWidth > 764">
            sales@selectel.ru
          </template>
          <template v-else>
            <v-email/>
          </template>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref} from "vue";
import TopSelectel from '@/assets/top-selectel.svg';
import VEmail from '@/components/links/VEmail.vue';
import VPhone from '@/components/links/VPhone.vue';

const header = ref(null);
const reactiveWidth = ref(null);

const outputSize = (e) => {
  reactiveWidth.value = e[0].contentRect.width;
}

onMounted(() => {
  const observer = new ResizeObserver(outputSize).observe(header.value);
});
</script>

<style lang="scss" scoped>
@import "./src/style/variables";
@import "./src/style/mixins";

@include color-a($header-link-color);

.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 2;
  top: 0;
  height: $header-height;
  background-color: $white-color;
  border: 1px solid #E8E8E8;

  &__logo {
    margin-left: 138px;

    @media (max-width: 768px) {
      margin-left: 1em;
    }
  }

  &__info {
    display: flex;
    gap: 48px;
    margin-right: 138px;
    padding: 33px 0 33px 0;

    @media (max-width: 768px) {
      margin-right: 1em;
    }
  }
}

</style>