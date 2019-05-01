<template>
  <div class="home">

    <div style="text-align: left">
      <h1>Global and Namespace</h1>
      Root Foo: {{ rootFoo }} <br/>
      M1 Foo: {{ m1Foo }} <br/>
      Users Foo: {{ usersFoo }} <br/>
      <br/>
      Root Getter Foo: {{ rootGetterFoo }} <br/>
      M1 Getter Foo: {{ m1GetterFoo }} <br/>
    </div>

    <ul>
      <li>
        <router-link :to="{name: 'homenestp1'}">p1</router-link>
      </li>
      <li>
        <router-link :to="{name: 'homenestp2'}">p2</router-link>
      </li>
      <li>
        <router-link :to="{name: 'homenestp3'}">p3</router-link>
      </li>
    </ul>
    <button v-on:click="addCounter">Click Me!</button>
    <h1>Value In Store: {{ counter }}</h1>
    <h1>Value In Store random integer: {{ randomInt }}</h1>
    <pre>{{ parths }}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import  { mapState, mapGetters, mapMutations } from 'vuex';

import HelloWorld from "@/components/HelloWorld.vue";
import getPartsMixin from "@/views/mixin";

export default {
  name: "home",
  mixins: [getPartsMixin],
  computed: {
    // MapState
    ...mapState({
      rootFoo: 'foo', // call variable in root state name 'foo'
      counter: state => state.m1.counter, // call variable in namespace 'm1' name 'foo' at state object
      usersFoo: state => state.users.foo, // can call 'foo' variable when not assign namespace in modules
    }),
    ...mapState('m1', { m1Foo: 'foo' }), // call 'foo' variable in m1 module with assign namespace 'm1'

    // MapGetter
    ...mapGetters({
      rootGetterFoo: 'foo'
    }),
    ...mapGetters('m1', { m1GetterFoo: 'foo' }),
  
    randomInt() {
      return this.$store.getters['m1/randomInt'];
    },
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapMutations('m1', ['addCounterMutation']),
    addCounter() {
      // this.$store.commit('m1/addCounterMutation');
      this.addCounterMutation();
    }
  }
};
</script>
