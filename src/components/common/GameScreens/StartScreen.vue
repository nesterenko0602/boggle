<template>
  <div class="start-screen__wrapper">
    <div class="start-screen__rules">
      Try to find as many words as possible in <b>{{ GAME_DURATION }} seconds</b>.
    </div>
    <Button
      value="Let's start!"
      :is-loading="isLoading"
      @click="startGame"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Button from 'components/ui/Button';
import { GAME_DURATION } from 'constants/constants';

export default {
  name: 'StartScreen',
  components: {
    Button,
  },
  data() {
    return { GAME_DURATION };
  },
  computed: {
    ...mapGetters({
      isLoading: 'getIsLoading',
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
.start-screen__wrapper {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
}

.start-screen__rules {
  margin-bottom: 40px;
  text-align: left;
  width: 100%;
}
</style>
