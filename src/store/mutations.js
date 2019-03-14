/* eslint-disable no-param-reassign */

import { CHECK_STATUSES } from 'constants/constants';
import { deepCopy } from 'helpers/utils';
import { initialState } from 'store/state';

export const MUTATIONS = {
  DROP_ERROR: 'dropError',
  FINISH_GAME: 'finishGame',
  LOAD_SUCCESS: 'loadSuccess',
  REGISTER_ATTEMPT: 'registerAttempt',
  REGISTER_ERROR: 'registerError',
  START_GAME: 'loadStart',
  WORD_VALIDATION_FINISHED: 'wordValidationFinished',
};

export default {
  /**
   * Handle start game case, set loading status while getting configuration
   *
   * @param {Object} state
   */
  [MUTATIONS.START_GAME](state) {
    state.isLoading = true;
  },

  /**
   * Mark game as finished
   *
   * @param {Object} state
   */
  [MUTATIONS.FINISH_GAME](state) {
    state.isFinished = true;
  },

  /**
   * Save received configuration and start a game
   *
   * @param {Object} state
   * @param {Object} p Payload
   * @param {Object} p.configuration Loaded configuration for new game
   * @param {Object} p.startTime Game start time
   */
  [MUTATIONS.LOAD_SUCCESS](state, { configuration, startTime }) {
    Object.assign(
      state,
      deepCopy(initialState),
      {
        configuration,
        startTime,
      },
    );
  },

  /**
   * Add new word to attempts list
   *
   * @param {Object} state
   * @param {Object} p
   * @param {string} p.word Word to add
   * @param {string} p.time Timestamp
   */
  [MUTATIONS.REGISTER_ATTEMPT](state, { word, time }) {
    state.attempts.push({ word, time, status: CHECK_STATUSES.PENDING });
  },

  /**
   * Update word validation status
   *
   * @param {Object} state
   * @param {Object} p
   * @param {string} p.word Validated word
   * @param {string} p.isValid Validation status
   */
  [MUTATIONS.WORD_VALIDATION_FINISHED](state, { word, isValid }) {
    const validatedWord = state.attempts.find(item => item.word === word);
    validatedWord.status = isValid ? CHECK_STATUSES.SUCCESS : CHECK_STATUSES.ERROR;
  },

  /**
   * Register error
   *
   * @param {Object} state
   * @param {string} message Error message to display
   */
  [MUTATIONS.REGISTER_ERROR](state, message) {
    state.error = message;
  },

  /**
   * Clear error value
   *
   * @param {Object} state
   */
  [MUTATIONS.DROP_ERROR](state) {
    state.error = null;
  },
};
