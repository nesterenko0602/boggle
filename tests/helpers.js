import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

/**
 * Create mounting factory function with fixed component
 * and set of required props, options, getters
 *
 * @param {Object} component Fixed Vue Component
 * @param {Object} [p]
 * @param {Object} [p.props] Component's required props
 * @param {Object} [p.options] shallowMount native options
 * @param {Object} [p.getters] Dict with getters for computed props
 * @returns {function}
 */
export const shallowWithRequiredProps = (
  component,
  {
    props: requiredProps = {},
    getters: defaultGetters = {},
    options = {},
  } = {},
) => (
  props = {},
  {
    actions = {},
    getters = {},
  } = {},
) => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const store = new Vuex.Store({
    actions,
    getters: { ...defaultGetters, ...getters },
  });

  return shallowMount(
    component,
    {
      store,
      localVue,
      ...options,
      propsData: {
        ...requiredProps,
        ...props,
      },
    },
  );
};
