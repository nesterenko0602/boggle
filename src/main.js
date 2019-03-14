import Vue from 'vue';
import VueSVGIcon from 'vue-svgicon';

import App from 'App';
import 'filters';
import store from 'store/index';

Vue.use(VueSVGIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
