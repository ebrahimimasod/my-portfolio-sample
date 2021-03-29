<template>
  <div class="loader-container">
    <pulse-loader color="#ffffff" size="25px"></pulse-loader>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "loading",
  components: { PulseLoader },
};
</script>
<style scoped>
.loader-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-color-75);
}
</style>