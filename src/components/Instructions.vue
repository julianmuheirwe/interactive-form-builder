<template>
  <div class="instructions">
    {{props.text}}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ""
  },
  backgroundColor: {
    type: String,
    default: "#d50303"
  },
  textColor: {
    type: String,
    default: "#fff"
  },
})

</script>

<style scoped>

.instructions{
  padding: 8px;
  border-radius: 6px;
  background: v-bind(backgroundColor);
  color: v-bind(textColor);
}
</style>