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
   * @returns {Array<String>}
   */
  getConfiguration: state => state.items,

  /**
   * Get all user's attemtps
   *
   * @param {Object} state
   * @returns {Array<Object>}
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
   * Get amount of found words
   *
   * @param {Object} state
   * @returns {Number}
   */
  getFoundWords: (state, globalGetters) => globalGetters
    .getAttempts
    .filter(item => item.status === CHECK_STATUSES.SUCCESS)
    .length,
};
