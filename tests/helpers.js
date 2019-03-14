import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

import { CHECK_STATUSES, GAME_DURATION } from 'constants/constants';
import initState from 'store/state';

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

/**
 * Imitation of regular in game state
 */
const normalGameState = {
  error: null,
  configuration: ['T', 'A', 'P', '*', 'E', 'A', 'K', 'S', 'O', 'B', 'R', 'S', 'S', '*', 'X', 'D'],
  attempts: [
    { word: 'word1', time: 1552509631343, status: CHECK_STATUSES.PENDING },
    { word: 'word2', time: 1552509631344, status: CHECK_STATUSES.PENDING },
    { word: 'word3', time: 1552509631345, status: CHECK_STATUSES.PENDING },
    { word: 'word4', time: 1552509631349, status: CHECK_STATUSES.SUCCESS },
    { word: 'word5', time: 1552509631347, status: CHECK_STATUSES.SUCCESS },
    { word: 'word6', time: 1552509631348, status: CHECK_STATUSES.ERROR },
  ],
  startTime: new Date().getTime() - 1000 * parseInt(GAME_DURATION / 2, 10),
  isLoading: false,
  isFinished: false,
};

/**
 * Get set of app states for various situation
 *
 * @returns {Object}
 */
export const getVariousStates = () => JSON.parse(
  JSON.stringify({
    start: initState,
    game: normalGameState,
    finish: {
      ...normalGameState,
      startTime: new Date().getTime() - 1000 * GAME_DURATION,
      isFinished: true,
    },
    error: {
      ...normalGameState,
      error: 'Some Error',
    }
  })
);
