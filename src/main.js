import Vue from 'vue';
import VueSVGIcon from 'vue-svgicon';

import App from 'App';
import filters from 'helpers/filters';
import store from 'store/index';

Vue.use(VueSVGIcon);

filters.apply(Vue);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
