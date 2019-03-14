<template>
  <button
    type="button"
    :disabled="isLoading"
    @click="handleClick"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    /**
     * Is interface waiting for response
     */
    isLoading: {
      default: false,
      required: true,
      type: Boolean,
    },

    /**
     * Text on the button
     */
    value: {
      default: '',
      required: true,
      type: String,
    },
  },
  methods: {
    /**
     * Button click event handler
     */
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables';

button {
  background-color: $primary;
  border: 1px solid transparent;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  padding: 12px 16px;
  transition: all 0.15s ease-in-out;
  user-select: none;
  white-space: nowrap;
  width: 100%;

  &:hover,
  &:active,
  &:focus {
    background-color: #1575be;
    transform: translateY(-3px);
  }

  &:disabled {
    cursor: progress;
    opacity: .6;
    transform: none;
  }
}
</style>
