<template>
  <a-carousel draggable>
    <div class="info" v-for="div in 3">
      <h1 class="info__header">
        IT-инфраструктура для бизнеса
      </h1>
      <p class="info__description">
        Мы предлагаем комплексные решения для всех уровней бизнеса: от индивидуальных предпринимателей до крупных
        международных компаний. Более 20 000 клиентов по всему миру доверяют Selectel.
      </p>
    </div>
  </a-carousel>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "src/style/variables";

.info {
  position: relative;
  top: 290px;
  left: 255px;
  text-align: left;

  &__header {
    font-size: 2rem;
    color: $white-color;
    line-height: 43px;
    margin-bottom: 1.5rem;
  }

  &__description {
    color: $white-color;
    height: 88px;
    width: 453px;
  }
}

.ant-carousel :deep(.slick-slide) {
  height: 546px;
  background-size: cover;
  background-image: url("../assets/background.png");
}

</style>