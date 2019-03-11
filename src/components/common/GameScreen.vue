<template>
  <div class="game-screen__wrapper">
    <Input
      placeholder="Enter the word"
      @submit="sendWord"
    />
    <ErrorMessage />
    <div class="game-screen__main">
      <div class="game-screen__board">
        <Collection
          :items="items"
        />
      </div>
      <div class="game-screen__aside">
        <div class="game-screen__statistics-line">
          Seconds left
          <div class="game-screen__statistics-value">
            <Timer />
          </div>
        </div>
        <div class="game-screen__statistics-line">
          Found words
          <div class="game-screen__statistics-value">
            {{ foundWords }}
          </div>
        </div>
        <Attempts />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Attempts from 'components/common/Attempts';
import Collection from 'components/ui/Collection/Collection';
import ErrorMessage from 'components/ui/ErrorMessage';
import Input from 'components/ui/Input';
import Timer from 'components/ui/Timer';

export default {
  name: 'StartScreen',
  components: {
    Attempts,
    Collection,
    ErrorMessage,
    Input,
    Timer,
  },
  computed: {
    ...mapGetters({
      items: 'getConfiguration',
      foundWords: 'getFoundWords',
    }),
  },
  methods: {
    ...mapActions([
      'sendWord',
    ]),
  },
};
</script>

<style scoped>
  .game-screen__main {
    display: flex;
  }

  .game-screen__aside {
    flex-grow: 1;
    line-height: 24px;
    margin-left: 20px;
  }

  .game-screen__statistics-line {
    display: flex;
    justify-content: space-between;
  }

  .game-screen__statistics-value {
    font-weight: bold;
    margin-left: 10px;
  }
</style>
