<template>
  <div v-if="isOpen">
    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div class="modal modal-open" v-if="isOpen">
      <div class="w-11/12 max-w-full modal-box bg-zinc-100">
        <div class="text-center">
          <h1 class="text-lg font-bold">Print QR Code</h1>
          <div class="text-sm opacity-50">{{ qrcode }}</div>
        </div>

        <div class="p-4 m-8 text-center bg-zinc-50 rounded-2xl">
          <div class="font-semibold">
            <p>QR Code</p>
          </div>
            <VueQrcode class="inline" :value="qrcode"></VueQrcode>
          <div class="font-semibold">
            <p>Value</p>
          </div>
          <p class="text-sm opacity-50">{{ qrcode }}</p>
        </div>

        <div class="modal-action">
          <button class="btn btn-success" @click="isOpen = false">
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";

export default {
  props: ["isOpen", "qrcode"],
  components: {
    VueQrcode,
  },
};
</script>
