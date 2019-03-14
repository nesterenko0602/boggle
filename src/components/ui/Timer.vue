<template>
  <div :class="classNames">
    {{ timer }}
  </div>
</template>

<script>
import { GAME_DURATION } from 'constants/constants';

export default {
  name: 'Timer',
  props: {
    /**
     * Start timestamp
     */
    startTime: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      timer: GAME_DURATION,
      last10Seconds: false,
    };
  },
  computed: {
    /**
     * Get classes for wrapper element
     *
     * @returns {Array}
     */
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
    /**
     * Timer ticks handler
     */
    timerLoop() {
      const timeDifference = parseInt(
        (new Date().getTime() - this.startTime) / 1000,
        10,
      );

      if (timeDifference >= GAME_DURATION) {
        this.$emit('finished');
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
@import 'styles/variables';

.timer__wrapper {
  display: inline-block;
  transition: color .3s ease;

  &.timer__wrapper--alert {
    color: $alert;
  }
}
</style>
