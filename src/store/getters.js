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
  getAttemts: state => state.attemts,

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
};
