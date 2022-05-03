<template>
  <footer class="footer">
    <div class="row-1">
      <div class="footer__logo">
        <img :src="SelectelLogoFooter" alt="Selectel" class="footer__logo">
      </div>
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
    <div class="row-2">
      <div class="footer__copy">
        <span class="footer__copytext">© ООО «Селектел», 2008—2022</span>
        <p class="footer__copytext">Лицензия на телематические <br/> услуги № 176267</p>
      </div>
      <div class="footer__links">
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
    "row1"
    "row2";
  grid-template-rows: repeat(2, minmax(min-content, 140px));
  background-color: #092433;
  margin-top: 120px;

  .row-1 {
    grid-area: row1;
    display: grid;
    align-items: end;
    grid-template-areas:
    "logo ul1 ul2 ul3 ul4";
    grid-template-columns: minmax(270px, 592px) repeat(4, minmax(max-content, 200px));
    margin: 80px 0 32px 20px;

    .links li:last-child {
      margin-top: 17px;
    }
  }

  .row-2 {
    grid-area: row2;
    display: grid;
    grid-template-areas:
    "copy links . . .";
    grid-template-columns: minmax(270px, 592px) 2fr;
    margin: 0 0 auto 20px;

    .icons {
      li {
        display: inline-block;

        &:not(:first-child) {
          margin-left: 20px;
        }
      }
    }
  }

  &__copytext {
    color: #FFF;
    opacity: 0.2;
  }

  &__links {
    display: flex;
    align-items: flex-end;
  }


}

</style>