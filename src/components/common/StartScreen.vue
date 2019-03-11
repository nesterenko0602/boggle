<template>
  <div class="start-screen__wrapper">
    <div class="start-screen__rules">
      Try to find as many words as possible in 1 minute.
    </div>
    <Button
      value="Let's start!"
      @click.native="startGame"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Button from 'components/ui/Button';

export default {
  name: 'StartScreen',
  components: {
    Button,
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
