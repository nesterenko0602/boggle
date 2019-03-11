<template>
  <h2
    v-text="message"
  />
</template>

<script>
export default {
  name: 'TextHeader',
  props: {
    /**
     * Header text
     */
    message: {
      type: String,
      default: '',
      required: true,
    },
  },

};
</script>
