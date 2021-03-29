<template>
  <div class="text-filed-container">
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <div class="input-container">
      <input
        class="input"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        @input="updateValue($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "text-filed",
  props: {
    id: {
      type: String,
      required: true,
      default: "text-filed",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
.text-filed-container {
  width: 100%;
}

.input-container {
  height: 50px;
  width: 100%;
  background-color: var(--theme-color);
  padding: 2px;
}

.input-container .input {
  border: none;
  background-color: var(--base-color);
  height: 100%;
  width: 100%;
  outline: none;
  position: relative;
  padding: 10px;
}

.text-filed-container .text-filed::placeholder {
  color: #ccc;
}
</style>