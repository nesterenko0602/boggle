<template>
  <div
    :class="classNames"
  >
    <input
      ref="input"
      v-model="inputValue"
      type="text"
      class="input"
      maxlength="16"
      :placeholder="placeholder"
      @keydown="keyDownHandler"
    >
    <Icon
      name="send"
      size="16"
      @click.native="submit"
    />
  </div>
</template>

<script>
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
  data() {
    return {
      /**
       * Value in input field
       */
      inputValue: '',
    };
  },
  computed: {
    /**
     * Whether input field not empty?
     *
     * @returns {Boolean}
     */
    isFilled() {
      return Boolean(this.inputValue);
    },

    /**
     * List of class names for input field
     *
     * @returns {Array}
     */
    classNames() {
      return [
        'input__wrapper',
        {
          'input__wrapper--filled': this.isFilled,
        },
      ];
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus();
    });
  },
  methods: {
    /**
     * Input keydown event handler
     *
     * @param {Event} event Native keydown event
     */
    keyDownHandler(event) {
      const { keyCode } = event;

      if (keyCode === KEY_CODES.ENTER) {
        this.submit();
      }
    },

    /**
     * Form submit event handler
     */
    submit() {
      if (!this.inputValue) {
        return;
      }

      this.$emit('submit', this.inputValue);
      this.dropInputValue();
    },

    /**
     * Clean up input field
     */
    dropInputValue() {
      this.inputValue = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables';

.input__wrapper {
  margin-bottom: 5px;
  position: relative;

  &.input__wrapper--filled {
    .icon-send {
      cursor: pointer;
      opacity: 1;
      pointer-events: all;
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
