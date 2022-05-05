import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import '@/style/global.scss';
import {Layout, Carousel, Select, DatePicker, Card, Badge, Alert} from "ant-design-vue";
import store from "@/store";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Layout);
app.use(Select);
app.use(Carousel);
app.use(Card);
app.use(Badge);
app.use(DatePicker);
app.use(Alert);
app.mount('#app');
