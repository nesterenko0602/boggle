<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Main from 'components/common/Main';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Main,
  },
};
</script>

<style lang="scss">
@import 'styles/common';
@import 'styles/variables';

#app {
  color: $dark;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  justify-content: flex-start;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
