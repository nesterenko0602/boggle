import Api from 'helpers/Api.js';

import { MUTATIONS } from 'store/mutations';

export default {
  /**
   * Start new game
   *
   * @param {Object} context
   * @param {Function} context.commit
   */
  startGame({ commit }) {
    commit(MUTATIONS.LOAD_START);

    Api
      .get('/getConfiguration')
      .then((configuration) => {
        const startTime = new Date().getTime();

        commit(MUTATIONS.LOAD_SUCCESS, { configuration, startTime });
      });
  },
};
