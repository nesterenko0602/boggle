import Api from 'helpers/Api';

import { MIN_WORD_LENGTH } from 'constants/constants';
import { MUTATIONS } from 'store/mutations';

export default {
  /**
   * Start new game
   *
   * @param {Object} context
   * @param {Function} context.commit
   */
  startGame({ commit }) {
    commit(MUTATIONS.START_GAME);

    return Api
      .get('/getConfiguration')
      .then((configuration) => {
        const startTime = new Date().getTime();

        commit(MUTATIONS.LOAD_SUCCESS, { configuration, startTime });
      });
  },

  /**
   * Finish the game
   *
   * @param {Object} context
   */
  finishGame({ commit }) {
    commit(MUTATIONS.FINISH_GAME);
  },

  /**
   * Handle submitted word
   *
   * @param {Object} context
   * @param {string} word Word to check
   */
  sendWord({ commit, getters }, word) {
    commit(MUTATIONS.DROP_ERROR);

    /**
     * Does the suggested word have enough length?
     */
    if (word.length < MIN_WORD_LENGTH) {
      const errorMessage = `You should suggest at least ${MIN_WORD_LENGTH} letter word`;
      commit(MUTATIONS.REGISTER_ERROR, errorMessage);

      return Promise.resolve();
    }

    /**
     * Does the suggested word contains only legal characters?
     */
    if (!(/^[A-Za-z]+$/.test(word))) {
      const errorMessage = 'Only Latin letters allowed';
      commit(MUTATIONS.REGISTER_ERROR, errorMessage);

      return Promise.resolve();
    }

    /**
     * Was the suggested word added erlier?
     */
    const attempts = getters.getAttempts;
    const wasAddedBefore = attempts
      .findIndex(item => item.word.toLowerCase() === word.toLowerCase()) !== -1;

    if (wasAddedBefore) {
      const errorMessage = `You've already tried the word "${word}"`;
      commit(MUTATIONS.REGISTER_ERROR, errorMessage);

      return Promise.resolve();
    }

    const time = new Date().getTime();

    commit(MUTATIONS.REGISTER_ATTEMPT, { word, time });

    return Api
      .get('/wordValidation', { word })
      .then(({ isValid }) => {
        commit(MUTATIONS.WORD_VALIDATION_FINISHED, { word, isValid });
      });
  },
};
