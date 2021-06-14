<template>
  <div id="app">
    <h1 class="heading">Vue Form Handling</h1>
    <Input
      :label="'Enter your name'"
      :placeholder="'Enter Valid Name'"
      :type="'text'"
    />
    <CheckBox />
  </div>
</template>

<script>
import Input from './components/Input.vue';
import CheckBox from './components/CheckBox.vue';
export default {
  components: {
    Input,
    CheckBox,
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
.heading {
  color: indigo;
}
</style>
