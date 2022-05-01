<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__col">
          <img :src="SelectelLogoFooter" alt="Selectel" class="footer__logo">
        </div>
        <div class="footer__col">
          <ul class="links">
            <li class="links__item"><a href="">Серверы</a></li>
            <li class="links__item"><a href="">Облако</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <ul class="links">
            <li class="links__item"><a href="">Оборудования</a></li>
            <li class="links__item"><a href="">Решения</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <ul class="links">
            <li class="links__item"><a href="">Дата-центры</a></li>
            <li class="links__item"><a href="">О компании</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <ul class="links">
            <li class="links__item"><a href="">Блог</a></li>
            <li class="links__item"><a href="">Офисы</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__row">
        <div class="footer__col">
          <span class="footer__copy">© ООО «Селектел», 2008—2022</span>
          <p class="footer__copy">Лицензия на телематические услуги № 176267</p>
        </div>
        <div class="footer__col">
          <ul class="icons">
            <li>
              <a href="">
                <img :src="Telegramm" alt="Telegramm ref">
              </a>
            </li>
            <li>
              <a href="">
                <img :src="VK" alt="Vkontakte ref">
              </a>
            </li>
            <li>
              <a href="">
                <img :src="Twitter" alt="Twitter ref">
              </a>
            </li>
            <li>
              <a href="">
                <img :src="Habr" alt="Habr ref" class="svg">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SelectelLogoFooter from '@/assets/selectel-logo-footer.svg';
import Habr from '@/assets/links/H.svg';
import Telegramm from '@/assets/links/TG.svg';
import Twitter from '@/assets/links/Twitter.svg';
import VK from '@/assets/links/VK.svg';

</script>

<style scoped lang="scss">

.footer {

  .container {
    height: auto;
    background-color: #092433;
    margin-top: 120px;
  }

  &__row {
    display: grid;
    grid-template-columns: minmax(270px, 500px) repeat(4, minmax(max-content, 200px));
    padding: 80px 0 0 20px;

    @media (max-width: 976px) {

    }

    &:last-child {
      padding-bottom: 80px;
    }
  }

  &__copy {
    font: 14px/20px;
    color: #FFF;
    opacity: 0.5;
  }

  &__col {


    .links__item {
      color: white;
      font: 16px/24px;

      &:last-child {
        margin-top: 18px;
      }
    }


    .icons {
      display: flex;

      :not(:last-child) {
        margin-right: 20px;
      }

      .svg:hover {
        &path {
          color: #EB4247;
        }
      }
    }

  }

  &__logo {
    margin-bottom: 32px;
  }
}

</style>