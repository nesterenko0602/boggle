<template>
  <div :class="classNames">
    <Icon
      name="error"
      size="14"
    />
    {{ error }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Icon from 'components/ui/Icon';

export default {
  name: 'Label',
  components: {
    Icon,
  },
  computed: {
    /**
     * @inheritdoc
     */
    ...mapGetters({
      error: 'getError',
    }),

    /**
     * List of class names for input field
     *
     * @returns {Array}
     */
    classNames: function classNames() {
      return [
        'error-message__wrapper',
        {
          'error-message__wrapper--visible': this.isFilled,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.error-message__wrapper {
  align-items: center;
  color: $alert;
  display: flex;
  font-size: 14px;
  height: 20px;
  margin-bottom: 15px;
  opacity: 0;
  transition: opacity .3s ease;

  .icon-error {
    margin-right: 5px;
  }

  &.error-message__wrapper--visible {
    opacity: 1;
  }
}
</style>
