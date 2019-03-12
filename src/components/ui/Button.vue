<template>
  <button
    type="button"
    :disabled="isLoading"
  >
    {{ value }}
  </button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Button',
  props: {
    /**
     * Text on the button
     */
    value: {
      default: '',
      required: true,
      type: String,
    },
  },
  computed: {
    ...mapGetters({
      isLoading: 'getIsLoading',
    }),
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

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
