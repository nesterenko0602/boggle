<template>
  <header class="header__wrapper">
    <img
      class="header__logo"
      src="@/assets/logo.png"
    >
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import 'styles/variables';

.header__wrapper {
  flex: 0 0 auto;
  margin: 60px auto 30px;
}

.header__logo {
  border-radius: 50%;
  width: 200px;
}

@media screen and (max-width: $mobile-width) {
  .header__logo {
    width: 100px;
  }
}
</style>
