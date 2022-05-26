<template>
  <div class="divider"></div>

  <p>The request can't be saved because :</p>
  <li v-for="error in errors" :key="error.id">
    {{ error }}
  </li>
</template>

<script>
export default {
  props: {
    errors: "",
  },
};
</script>
