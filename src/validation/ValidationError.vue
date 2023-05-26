<template>
  <div>
    <p :class="(variant === 'Error') ? 'error' : (variant === 'Warning') ? 'warning' : ''">
      <b :class="(variant === 'Error') ? 'error-header' : (variant === 'Warning') ? 'warning-header' : ''">{{variant}}</b> {{message}}</p>
  </div>
</template>

<script>
export default {
  name: "ValidationError",
  props:{
    message:String,
    variant:String
  }
}
</script>

<style scoped>
@import "/src/css/errors.css";
</style>