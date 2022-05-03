<template>
    <a-carousel class="carousel__elem" draggable>
      <div class="container__info" v-for="div in 3">
        <h1 class="container__header">
          IT-инфраструктура для бизнеса
        </h1>
        <p class="container__description">
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

.container {
  background-color: #E8E8E8;
}

.carousel {

  &__elem {
    background-color: #E8E8E8;
    div {
      margin-right: 0;
    }
  }

  .container {
    //top: 290px;
    //left: 255px;
    //text-align: left;

    //@media screen and (max-width: 768px) {
    //  top: 350px;
    //  left: 70px;
    //}

    //&__info {
    //  position: absolute;
    //  bottom: 100px;
    //  left: 255px;
    //}

    &__logo {
      max-width: 100%;
      margin: 0;
      object-fit: contain;
    }

    &__header {
      font-size: 2rem;
      color: $white-color;
      line-height: 43px;
      margin-bottom: 1.5rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    &__description {
      color: $white-color;
      height: 88px;
      width: 453px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
}

//.ant-carousel :deep(.slick-slide) {
//  height: 546px;
//  background-image: url("../assets/background.png");
//}

</style>