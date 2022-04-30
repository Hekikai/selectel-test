<template>
  <header class="header">
    <div class="header__logo">
      <a href="/">
        <img :src="TopSelectel" alt="Selectel logo">
      </a>
    </div>
    <div class="header__info">
      <div class="header__phone">
        <a href="tel:88005550675">8 800 555 06 75</a>
      </div>
      <div class="header__email">
        <a href="mailto:sales@selectel.ru">sales@selectel.ru</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import TopSelectel from '@/assets/top-selectel.svg';
</script>

<style lang="scss" scoped>
@import "./src/style/variables";

.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: $white-color;
  border: 1px solid #E8E8E8;

  &__logo {
    margin-left: 138px;
  }

  &__info {
    display: flex;
    gap: 48px;
    margin-right: 138px;
    padding: 33px 0 33px 0;
  }
}

</style>