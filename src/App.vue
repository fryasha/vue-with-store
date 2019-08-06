<template>
  <div id="app">
    <div class="high-order" v-if="test">
      <ChildrenComponent :msg="msg"/>
      <SecondChildrenComponent :msg="msgForSecond"/>
    </div>

    <div class="store-commiters" v-if="test">
      add to STORE counter
      <button @click='addToCounter()'>+</button>
      <br />

      <br />
      remove from STORE counter
      <button @click='removeFromCounter()'>-</button>
    </div>

    <div class="test" v-for="(item, ind) in elements" :key='ind' v-multi-ref='item'>{{item}}</div>
  </div>
</template>

<script>
import ChildrenComponent from './components/ChildrenComponent.vue';
import SecondChildrenComponent from './components/SecondChildrenComponent.vue';

import './font.scss';

export default {
  name: 'app',
  components: {
    ChildrenComponent,
    SecondChildrenComponent,
  },
  data() {
    return {
      test: false,
      msg: 'first Component',
      msgForSecond: 'second Component',
      elements: [
        'foo',
        'foo',
        'bar',
        'baz',
      ],
    };
  },
  methods: {
    addToCounter() {
      this.$store.commit('INCREMENT', 1);
    },
    removeFromCounter() {
      this.$store.commit('DECREMENT', 1);
    },
  },
  mounted() {
    console.log(this.$refs.foo);
  },
};
</script>

<style lang="scss">
#app {
  .high-order {
    display: flex;
    width: 100vw;
    justify-content: space-around;
  }
  .store-commiters {
    display: flex;
    flex-direction: column;
    justify-content: center;
    button {
      width: 5vw;
    }
  }

  .wrap {
    border: 1px solid black;
    padding: 10%;
  }
}
</style>
