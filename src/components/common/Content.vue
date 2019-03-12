<template>
  <div class="board__wrapper">
    <template v-if="appState === APP_STATES.START">
      <TextHeader>Boggle game</TextHeader>
      <StartScreen />
    </template>
    <template v-if="appState === APP_STATES.GAME">
      <TextHeader>
        <Timer @finished="finishGame" />
        seconds left...
      </TextHeader>
      <GameScreen />
    </template>
    <template v-if="appState === APP_STATES.FINISH">
      <TextHeader>Congrats!</TextHeader>
      <FinishScreen />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import FinishScreen from 'components/common/GameScreens/FinishScreen';
import GameScreen from 'components/common/GameScreens/GameScreen';
import StartScreen from 'components/common/GameScreens/StartScreen';
import TextHeader from 'components/ui/TextHeader';
import Timer from 'components/ui/Timer';
import { APP_STATES } from 'constants/constants';

export default {
  name: 'Content',
  components: {
    FinishScreen,
    GameScreen,
    StartScreen,
    TextHeader,
    Timer,
  },
  data() {
    return { APP_STATES };
  },
  computed: {
    ...mapGetters({
      startTime: 'getStartTime',
      isFinished: 'getIsFinished',
    }),

    /**
     * Get time difference between now and game start time
     *
     * @returns {number}
     */
    timeDifference() {
      return parseInt(
        (new Date().getTime() - this.startTime) / 1000,
        10,
      );
    },

    /**
     * Actual game's flow stage
     *
     * @returns {string}
     */
    appState() {
      if (!this.startTime) {
        return APP_STATES.START;
      }

      if (this.isFinished) {
        return APP_STATES.FINISH;
      }

      return APP_STATES.GAME;
    },
  },
  methods: {
    ...mapActions([
      'finishGame',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.board__wrapper {
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 32px 8px rgba(0,0,0,.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 12px 56px 32px;
  width: 500px;
}
</style>
