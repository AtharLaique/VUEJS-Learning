<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
html,
body {
  margin: 0 !important;
  font-family: Andale Mono, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  background-color: #42b983;
  height: 100vh;
  padding: 50px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
