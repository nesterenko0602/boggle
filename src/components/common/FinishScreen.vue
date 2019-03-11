<template>
  <div class="finish-screen__wrapper">
    <div class="finish-screen__text">
      You have found
      <span class="finish-screen__numbers">
        {{ foundWords }} {{ foundWords === 1 ? 'word' : 'words' }}
      </span>
      in
      <b>{{ GAME_DURATION }} seconds</b>.
    </div>
    <Button
      value="Let's play again!"
      @click.native="startGame"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Button from 'components/ui/Button';
import { GAME_DURATION } from 'constants/constants';

export default {
  name: 'FinishScreen',
  components: {
    Button,
  },
  data() {
    return { GAME_DURATION };
  },
  computed: {
    ...mapGetters({
      foundWords: 'getFoundWords',
    }),
  },
  methods: {
    ...mapActions([
      'startGame',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import 'styles/variables.scss';

  .finish-screen__wrapper {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }

  .finish-screen__text {
    margin-bottom: 40px;
    text-align: left;
    width: 100%;
  }

  .finish-screen__numbers {
    color: $primary;
    font-weight: bold;
  }
</style>
