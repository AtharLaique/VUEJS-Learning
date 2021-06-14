<template>
  <div class="home">
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
import Input from '@/components/Input.vue';
import CheckBox from '@/components/CheckBox.vue';
import SelectOptions from '@/components/SelectOptions.vue';

export default {
  name: 'Home',
  components: {
    Input,
    CheckBox,
    SelectOptions,
  },
};
</script>
<style scoped>
.heading {
  color: indigo;
}
</style>
