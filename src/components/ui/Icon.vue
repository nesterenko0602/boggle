<template>
  <svgicon
    :width="size"
    :height="size"
    :icon="name"
    :class="className"
  />
</template>

<script>

export default {
  name: 'Icon',
  props: {
    /**
     * Icon name of appropriate SVG-icon from /assets
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Max icon size in px.
     */
    size: {
      type: String,
      default: '24',
    },
  },
  computed: {
    /**
     * Get name-specific class for icon
     *
     * @returns {string}
     */
    className: function className() {
      return `icon-${this.name}`;
    },
  },
  mounted: function mounted() {
    import(`svg/${this.name}`)
      .catch(() => {
        console.error(`Can't load icon "${this.name}"`);
      });
  },
};
</script>
