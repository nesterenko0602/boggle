<template>
  <footer class="footer__wrapper">
    Developed by
    <a
      href="https://nesterenko.page"
      target="_blank"
    >Dmitry Nesterenko</a>
    for
    <a
      href="https://www.saleswhale.com/"
      target="_blank"
    >Saleswhale</a>
    with ❤️
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
  @import 'styles/variables.scss';

  .footer__wrapper {
    background: $dark;
    color: $light;
    flex: 0 0 auto;
    margin: 60px 0 0;
    padding: 20px 30px;
    text-align: center;

    a {
      color: $light;
      transition: color .15s ease;

      &:hover {
        color: $primary;
      }
    }
  }
</style>
