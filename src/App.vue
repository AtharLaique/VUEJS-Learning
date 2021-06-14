<template>
  <div id="app">
    <h1 class="heading">Form Basic Components</h1>
    <Input
      :label="'Enter your name'"
      :placeholder="'Enter Valid Name'"
      :type="'text'"
    />
    <SelectOptions />
    <CheckBox />
  </div>
</template>

<script>
import Input from './components/Input.vue';
import CheckBox from './components/CheckBox.vue';
import SelectOptions from './components/SelectOptions.vue';
export default {
  components: {
    Input,
    CheckBox,
    SelectOptions,
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
