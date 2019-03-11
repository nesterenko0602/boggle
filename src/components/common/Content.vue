<template>
  <div class="board__wrapper">
    <TextHeader message="Boggle game" />
    <StartScreen v-if="!startTime" />
    <GameScreen v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import StartScreen from 'components/common/StartScreen';
import GameScreen from 'components/common/GameScreen';
import TextHeader from 'components/ui/TextHeader';

export default {
  name: 'Board',
  components: {
    GameScreen,
    StartScreen,
    TextHeader,
  },
  computed: {
    ...mapGetters({
      startTime: 'getStartTime',
    }),
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
