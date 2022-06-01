<template>
  <div v-if="isOpen">
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div id="myModal23" class="modal modal-open" v-if="isOpen">
      <div class="w-11/12 max-w-5xl modal-box">
        <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
        <p class="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
        <div class="modal-action">
          <button class="btn btn-success" @click="isOpen = false">Yay!</button>
        </div>
      </div>
    </div>
    <div else>
      <p>nop</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isOpen"],
  return: {
    isOpen: true,
  },
};
</script>
