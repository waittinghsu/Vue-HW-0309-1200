import Vue from "vue";
import App from "./App.vue";
import {
  Button,
  Input,
  Card,
  Row,
  Form,
  FormItem,
  Col,
  Container,
  Image
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Button);
Vue.use(Input);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Container);
Vue.use(Image);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
