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
import Icon from 'components/ui/Icon';

export default {
  name: 'ErrorMessage',
  components: {
    Icon,
  },
  props: {
    /**
     * Error text to display
     */
    error: {
      required: true,
      validator: prop => typeof prop === 'string' || prop === null,
    },
  },
  computed: {
    /**
     * Whether error exists?
     *
     * @returns {boolean}
     */
    hasError() {
      return Boolean(this.error);
    },

    /**
     * List of class names for input field
     *
     * @returns {Array}
     */
    classNames() {
      return [
        'error-message__wrapper',
        {
          'error-message__wrapper--visible': this.hasError,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables';

.error-message__wrapper {
  align-items: center;
  color: $alert;
  display: flex;
  font-size: 14px;
  margin-bottom: 10px;
  min-height: 20px;
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
