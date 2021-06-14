<template>
  <div :style="{ display: loading ? 'block' : 'none' }">
    <img src="../assets/loading.gif" alt="Loading ..." />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      img: '../assets/loading.gif',
    };
  },
  computed: {
    ...mapState('asyncCall', ['loading']),
  },
};
</script>

<style lang="scss" scoped></style>
