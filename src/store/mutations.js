import { CHECK_STATUSES } from 'constants/constants';
import { initialState } from 'store/state';

/* eslint-disable no-param-reassign */
export const MUTATIONS = {
  LOAD_START: 'loadStart',
  LOAD_SUCCESS: 'loadSuccess',
  REGISTER_ATTEMPT: 'registerAttempt',
  DROP_ERROR: 'dropError',
  REGISTER_ERROR: 'registerError',
  WORD_VALIDATION_FINISHED: 'wordValidationFinished',
};

export default {
  /**
   * Add passed item to list
   *
   * @param {Object} state
   */
  [MUTATIONS.LOAD_START](state) {
    state.isLoading = true;
  },

  /**
   * Add passed item to list
   *
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
   * Update word status from attempts collection
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
