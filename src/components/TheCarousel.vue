<template>
  <a-carousel draggable>
    <div class="container" v-for="div in 3">
      <img src="../assets/background.png" alt="Background logo" class="container__logo">
      <div class="container__info">
        <h1 class="container__header">
          IT-инфраструктура для бизнеса
        </h1>
        <p class="container__description">
          Мы предлагаем комплексные решения для всех уровней
          бизнеса: от индивидуальных предпринимателей до
          крупных международных компаний. Более 20 000 клиентов
          по всему миру доверяют Selectel.
        </p>
      </div>
    </div>
  </a-carousel>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "src/style/variables";

.container {
  position: relative;
  background-color: #E8E8E8;

  &__logo {
    width: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 280px;
    }
  }

  &__info {
    position: absolute;
    left: 258px;
    bottom: 100px;

    @media screen and (max-width: 768px) {
      left: 15px;
      bottom: 35px;
      width: 360px;
    }
  }

  &__description {
    width: 453px;
    color: $white-color;
    margin-top: 20px;

    @media (max-width: 768px) {
      width: 360px;
      margin-top: 12px;
      font-size: 14px;
    }
  }

  &__header {
    font-size: 2rem;
    color: $white-color;
    line-height: 43px;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
}
</style>