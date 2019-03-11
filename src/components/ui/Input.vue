<template>
  <div
    :class="classNames"
  >
    <input
      v-model="message"
      type="text"
      class="input"
      :placeholder="placeholder"
      :disabled="isLoading"
      @keydown="keyDownHandler"
    >
    <Icon
      name="loader"
      size="16"
    />
    <Icon
      name="send"
      size="16"
      @click.native="submit"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Icon from 'components/ui/Icon';
import { KEY_CODES } from 'constants/constants';

export default {
  name: 'Input',
  components: {
    Icon,
  },
  props: {
    /**
     * Placeholder text for input tag
     */
    placeholder: {
      type: String,
      default: '',
    },
  },
  data: function data() {
    return { message: '' };
  },
  computed: {
    /**
     * @inheritdoc
     */
    ...mapGetters({
      isLoading: 'getIsLoading',
    }),

    /**
     * Whether input field not empty?
     *
     * @returns {Boolean}
     */
    isFilled: function isFilled() {
      return Boolean(this.message);
    },

    /**
     * List of class names for input field
     *
     * @returns {Array}
     */
    classNames: function classNames() {
      return [
        'input__wrapper',
        {
          'input__wrapper--loading': this.isLoading,
          'input__wrapper--filled': this.isFilled && !this.isLoading,
        },
      ];
    },
  },
  methods: {
    /**
     * Input keydown event handler
     *
     * @param {Event} event Native keydown event
     */
    keyDownHandler: function keyDownHandler(event) {
      const { keyCode } = event;

      if (keyCode === KEY_CODES.ENTER) {
        this.submit();
      }
    },

    /**
     * Form submit event handler
     */
    submit: function submit() {
      if (!this.message) {
        return;
      }

      this.$emit('submit', this.message);
      this.dropMessage();
    },

    /**
     * Clean up input field
     */
    dropMessage: function dropMessage() {
      this.message = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/helpers.scss';
@import 'styles/variables.scss';

.input__wrapper {
  margin-bottom: 20px;
  position: relative;

  &.input__wrapper--filled {
    .icon-send {
      cursor: pointer;
      opacity: 1;
      pointer-events: all;
    }
  }

  &.input__wrapper--loading {
    .icon-loader {
      animation: spin 1s infinite linear;
      opacity: 1;
      padding: 13px 12px;
      transition-delay: .3s;
    }
  }
}

.svg-icon {
  color: $grey;
  opacity: 0;
  padding: 14px 12px 12px;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0px;
  transition: all .3s ease;

  &:hover {
    color: $grey-dark;
  }
}

.input {
  background-color: $grey-lighter;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  padding: 12px 40px 12px 12px;
  transition: all .3s ease;
  width: 100%;

  &::placeholder {
    color: $grey;
    font-size: 13px;
    transition: color .3s ease;
  }

  &:disabled {
    opacity: .5;
  }
}
</style>