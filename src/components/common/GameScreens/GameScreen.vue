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
          :items="configuration"
        />
      </div>
      <div class="game-screen__aside">
        <div class="game-screen__statistics-line">
          Found words:
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

export default {
  name: 'GameScreen',
  components: {
    Attempts,
    Collection,
    ErrorMessage,
    Input,
  },
  computed: {
    ...mapGetters({
      configuration: 'getConfiguration',
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

<style lang="scss" scoped>
@import 'styles/variables.scss';

.game-screen__main {
  display: flex;
}

.game-screen__aside {
  flex-grow: 1;
  line-height: 24px;
  margin-left: 20px;
}

.game-screen__statistics-line {
  border-bottom: 1px solid $grey-lighter;
  display: flex;
  justify-content: space-between;
}

.game-screen__statistics-value {
  font-weight: bold;
  margin-left: 10px;
}

@media screen and (max-width: $mobile-width) {
  .game-screen__main {
    flex-wrap: wrap;
    justify-content: center;
  }

  .game-screen__aside {
    margin-left: 0;
    margin-top: 20px;
  }

  .game-screen__statistics-line {
    border-bottom: none;
    justify-content: flex-start;
  }
}
</style>
