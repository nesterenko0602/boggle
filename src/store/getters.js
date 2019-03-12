import { CHECK_STATUSES } from 'constants/constants';

export default {
  /**
   * Get error related to last typed word
   *
   * @param {Object} state
   * @returns {string}
   */
  getError: state => state.error,

  /**
   * Get current configuration
   *
   * @param {Object} state
   * @returns {Array.<String>}
   */
  getConfiguration: state => state.items,

  /**
   * Get all user's attemtps
   *
   * @param {Object} state
   * @returns {Array.<Object>}
   */
  getAttempts: state => state.attempts,

  /**
   * Get all user's in DESC chronological order
   *
   * @param {Object} state
   * @param {Object} getters
   * @returns {Array.<Object>}
   */
  getAttemptsSortedByTime: (state, getters) => getters.getAttempts.sort((a, b) => b.time - a.time),

  /**
   * Get game start time
   *
   * @param {Object} state
   * @returns {Number|null}
   */
  getStartTime: state => state.startTime,

  /**
   * Get is game finished
   *
   * @param {Object} state
   * @returns {boolean}
   */
  getIsFinished: state => state.isFinished,

  /**
   * Get is game started
   *
   * @param {Object} state
   * @returns {boolean}
   */
  getIsLoading: state => state.isLoading,

  /**
   * Get amount of found words
   *
   * @param {Object} state
   * @param {Object} getters
   * @returns {Number}
   */
  getFoundWords: (state, getters) => getters
    .getAttempts
    .filter(item => item.status === CHECK_STATUSES.SUCCESS)
    .length,
};
