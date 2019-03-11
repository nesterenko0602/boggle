<template>
  <div :class="classNames">
    {{ timer }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { GAME_DURATION } from 'constants/constants';

export default {
  name: 'Timer',
  data() {
    return {
      timer: GAME_DURATION,
      last10Seconds: false,
    };
  },
  computed: {
    ...mapGetters({
      startTime: 'getStartTime',
    }),
    classNames() {
      return [
        'timer__wrapper',
        {
          'timer__wrapper--alert': this.last10Seconds,
        },
      ];
    },
  },
  mounted() {
    this.timerLoop();
  },
  methods: {
    ...mapActions([
      'finishGame',
    ]),
    timerLoop() {
      const timeDifference = parseInt(
        (new Date().getTime() - this.startTime) / 1000,
        10,
      );

      if (timeDifference > GAME_DURATION) {
        this.finishGame();
        return;
      }

      this.timer = GAME_DURATION - timeDifference;
      this.last10Seconds = this.timer < 10;

      setTimeout(this.timerLoop, 1000);
    },
  },
};
</script>


<style lang="scss" scoped>
@import 'styles/variables.scss';

.timer__wrapper {
  display: inline-block;
  transition: color .3s ease;

  &.timer__wrapper--alert {
    color: $alert;
  }
}
</style>
