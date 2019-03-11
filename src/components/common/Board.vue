<template>
  <div class="board__wrapper">
    <TextHeader message="Boggle game" />
    <StartScreen v-if="!startTime" />
    <template v-else>
      <Input
        placeholder="Enter the word"
        @submit="sendWord"
      />
      <ErrorMessage />
      <div class="board__main">
        <Collection
          :items="items"
        />
      </div>
      <div class="board__aside">
        <Timer />
        <Attempts />
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import StartScreen from 'components/common/StartScreen';
import Collection from 'components/ui/Collection/Collection';
import ErrorMessage from 'components/ui/ErrorMessage';
import Input from 'components/ui/Input';
import Timer from 'components/ui/Timer';
import TextHeader from 'components/ui/TextHeader';

export default {
  name: 'Board',
  components: {
    Collection,
    ErrorMessage,
    Input,
    StartScreen,
    TextHeader,
    Timer,
  },
  computed: {
    ...mapGetters({
      items: 'getConfiguration',
      startTime: 'getStartTime',
    }),
  },
  methods: {
    ...mapActions([
      'sendWord',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .board__wrapper {
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 32px 8px rgba(0,0,0,.1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 12px 56px 32px;
    width: 500px;
  }
</style>
