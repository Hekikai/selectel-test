<template>
  <footer class="footer">
    <div class="footer__logo">
      <img :src="SelectelLogoFooter" alt="Selectel" class="footer__logoimg">
    </div>
    <div class="footer__columns">
      <div class="footer__col-1">
        <ul class="links">
          <li class="links__item"><a href="">Серверы</a></li>
          <li class="links__item"><a href="">Облако</a></li>
        </ul>
      </div>
      <div class="footer__col-2">
        <ul class="links">
          <li class="links__item"><a href="">Оборудования</a></li>
          <li class="links__item"><a href="">Решения</a></li>
        </ul>
      </div>
      <div class="footer__col-3">
        <ul class="links">
          <li class="links__item"><a href="">Дата-центры</a></li>
          <li class="links__item"><a href="">О компании</a></li>
        </ul>
      </div>
      <div class="footer__col-4">
        <ul class="links">
          <li class="links__item"><a href="">Блог</a></li>
          <li class="links__item"><a href="">Офисы</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__copy">
      <span class="footer__copytext">© ООО «Селектел», 2008—2022</span>
      <p class="footer__copytext">Лицензия на телематические <br/> услуги № 176267</p>
    </div>
    <div class="footer__icons">
      <ul class="icons">
        <li>
          <a href="">
            <v-telegram/>
          </a>
        </li>
        <li>
          <a href="">
            <v-vk/>
          </a>
        </li>
        <li>
          <a href="">
            <v-twitter/>
          </a>
        </li>
        <li>
          <a href="">
            <v-habr/>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import SelectelLogoFooter from '@/assets/selectel-logo-footer.svg';
import VTelegram from '@/components/links/VTelegram.vue';
import VVk from '@/components/links/VVk.vue';
import VTwitter from '@/components/links/VTwitter.vue';
import VHabr from '@/components/links/VHabr.vue';

</script>

<style scoped lang="scss">
@import "./src/style/variables";
@import "./src/style/mixins";

@include color-a($white-color);

.footer {
  display: grid;
  grid-template-areas:
    "logo links"
    "copy icons";
  grid-template-rows: repeat(2, minmax(min-content, 140px));
  grid-template-columns: minmax(300px, 592px) minmax(max-content, 180px);
  grid-gap: 1em;
  background-color: #092433;

  @media screen and (max-width: 1024px) {
    grid-template-areas:
      "logo"
      "icons"
      "links"
      "copy";
    grid-template-rows: minmax(100px, 200px) repeat(3, minmax(min-content, 70px));
    margin-top: 4em;
  }

  &__logo {
    grid-area: logo;
    margin: 80px 0 0 20px;
  }

  &__columns {
    grid-area: links;
    display: grid;
    grid-template-columns: repeat(4, 180px);
    grid-template-areas:
      "ul1 ul2 ul3 ul4";

    @media screen and (max-width: 1024px) {
      grid-template-areas:
        "ul1 ul2"
        "ul3 ul4";
      grid-gap: 1em;
      margin-bottom: 48px;
    }
  }

  &__copy {
    grid-area: copy;
    margin: 32px 0 78px 20px;

    @media screen and (max-width: 1024px){
     margin: 0 0 32px 15px;
    }
  }

  &__icons {
    grid-area: icons;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1024px){
      margin-left: 18px;
    }

    .icons {
      display: flex;

      li:not(:first-child) {
        margin-left: 18px;
      }
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    row-gap: 17px;
  }

  &__col-1 {
    grid-area: ul1;
    @include footer-col;
  }

  &__col-2 {
    grid-area: ul2;
    @include footer-col;
  }

  &__col-3 {
    grid-area: ul3;
    @include footer-col;
  }

  &__col-4 {
    grid-area: ul4;
    @include footer-col;
  }

  &__copytext {
    color: $white-color;
    opacity: 0.2;
  }

}

</style>