<template>
  <div class="content__wrapper">
    <template v-if="appState === APP_STATES.START">
      <TextHeader>Boggle game</TextHeader>
      <StartScreen />
    </template>
    <template v-if="appState === APP_STATES.GAME">
      <TextHeader>
        <Timer
          :start-time="startTime"
          @finished="finishGame"
        />
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
     * Actual game stage
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
@import 'styles/variables.scss';

.content__wrapper {
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 32px 8px rgba(0,0,0,.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: $mobile-width;
  padding: 12px 32px 32px;
  width: $mobile-width;
}

@media screen and (max-width: $mobile-width) {
  .content__wrapper {
    border-radius: 0;
    width: 100%;
  }
}
</style>
