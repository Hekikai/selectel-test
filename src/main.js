import {createApp} from 'vue';
import App from './App.vue';
import store from "@/store";
import {Layout, Carousel, Select, DatePicker, Card, Badge, Alert} from "ant-design-vue";
import '@/style/global.scss';

const app = createApp(App);
app.use(store);
app.use(Layout);
app.use(Select);
app.use(Carousel);
app.use(Card);
app.use(Badge);
app.use(DatePicker);
app.use(Alert);
app.mount('#app');
