<template>
  <div class="mb-4 font-semibold text-center">Tracker activities</div>
  <div class="w-full text-center">
    <ul class="steps">
      <li class="step">Created</li>
      <li class="step">qrcode generated</li>
      <li class="step">retrieved</li>
      <li class="step step-accent">new owner</li>
      <li class="step step-accent">Under Repair</li>
      <li class="step step-accent">Ready</li>
      <li class="step">Product Dead</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>
