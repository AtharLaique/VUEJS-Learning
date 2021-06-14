<template>
  <div id="app">
    <Counter />
  </div>
</template>
<script>
import Counter from './components/Counter.vue';
export default {
  components: {
    Counter,
  },
};
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: darkslateblue;
  height: 100vh;
}
</style>
