<template>
  <div class="divider"></div>
  <div v-if="Array.isArray(errors)">
    <li v-for="error in errors" :key="error.id">
      {{ error }}
    </li>
  </div>
  <div v-else>
    <p> {{ errors }} </p>
  </div>
</template>

<script>
export default {
  props: {
    errors: "",
  },
};
</script>
