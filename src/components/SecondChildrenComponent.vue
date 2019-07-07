<template>
  <div class='parent'>
    <h1>{{ msg }}</h1>
    <h2>VueX store counter</h2>
    <div> this counter data stored in store data, have shared methods (commits)
      and ractivate on each commit </div>
    <div class="wrap"> second component STORE counter is {{count}}</div>

    <br />
    <br />
    <br />

    <h2>Private counter</h2>


    <div> this private counter DATA exists in parent component (SecondChildrenComponent.vue)
      and modified by EMITTING METHODS FROM his children component</div>
    <br />

    <div class="wrap"> second component PRIVATE counter is {{privateCounter}}</div>
    <PrivateCounterEmit
      :counter='privateCounter'
      @incrementPrivate='incrementPrivateMethod'
      @decrementPrivate='decrementPrivateMethod'
    />
  </div>
</template>

<script>
import PrivateCounterEmit from './PrivateCounterEmit.vue';

export default {
  name: 'SecondChildrenComponent',
  props: ['msg'],
  components: {
    PrivateCounterEmit,
  },
  data() {
    return {
      privateCounter: 0,
    };
  },
  methods: {
    incrementPrivateMethod() {
      this.privateCounter += 1;
    },
    decrementPrivateMethod() {
      this.privateCounter -= 1;
    },
  },
  computed: {
    count() {
      return this.$store.getters.getCounter;
    },
  },
};
</script>


<style scoped lang="scss">
.parent {
  padding: 2vw;
  display: flex;
  flex-direction: column;
  width: 20%;
  border: 1px solid black;
}
</style>
