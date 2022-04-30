import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import '@/style/global.scss';
import {Layout, Carousel, Select, DatePicker} from "ant-design-vue";

const app = createApp(App);
app.use(router);
app.use(Layout);
app.use(Select);
app.use(Carousel);
app.use(DatePicker);
app.mount('#app');
