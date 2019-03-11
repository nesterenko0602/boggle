import { initialState } from 'store/state';

/* eslint-disable no-param-reassign */
export const MUTATIONS = {
  LOAD_START: 'loadStart',
  LOAD_SUCCESS: 'loadSuccess',
};

export default {
  /**
   * Add passed item to list
   * @param {Object} state
   */
  [MUTATIONS.LOAD_START](state) {
    state.isLoading = true;
  },

  /**
   * Add passed item to list
   * @param {Object} state
   * @param {Object} p Payload
   * @param {Object} p.configuration Loaded configuration for new game
   * @param {Object} p.startTime Game start time
   */
  [MUTATIONS.LOAD_SUCCESS](state, { configuration, startTime }) {
    Object.assign(
      state,
      initialState,
      {
        items: configuration,
        startTime,
      },
    );
  },
};
