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
   * Get game start time
   *
   * @param {Object} state
   * @returns {Number|null}
   */
  getStartTime: state => state.startTime,

  /**
   * Get game ID
   *
   * @param {Object} state
   * @returns {Number}
   */
  getGameId: state => state.gameId,

  /**
   * Get is game finished
   *
   * @param {Object} state
   * @returns {boolean}
   */
  getIsFinished: state => state.isFinished,

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
