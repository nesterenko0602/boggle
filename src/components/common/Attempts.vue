<template>
  <div class="attempts__wrapper">
    <li
      v-for="attempt in attempts"
      :id="attempt.word"
      :key="attempt.word"
      class="attempts__item"
    >
      <span :class="'attempts__item--' + attempt.status">
        {{ attempt.word }}
      </span>
    </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Attempts',
  computed: {
    ...mapGetters({
      attempts: 'getAttemptsSortedByTime',
    }),
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

$line-height: 24;

.attempts__wrapper {
  color: $grey-dark;
  line-height: unquote($line-height + 'px');
  margin-top: 5px;
  max-height: unquote($line-height * 7.5 + 'px');
  overflow: scroll;
  position: relative;
}

.attempts__item {
  list-style-type: square;
}

.attempts__item--success {
  color: $success;
}

.attempts__item--error {
  color: $alert;
}

@media screen and (max-width: $mobile-width) {
  .attempts__wrapper {
    max-height: initial;
    overflow: visible;
  }

  .attempts__item {
    list-style-type: none;
    display: inline-block;
    margin-right: 20px;
  }
}
</style>
