<template>
  <div>
    <div class="grid h-auto card rounded-box place-items-center">
    <h1> Seller section </h1>
      <div>
        <button class="w-40 m-1 btn" @click="generate_qrcode">Generate qrcode</button>

        <button class="w-40 m-1 btn" @click="update_status">Update a Qrcode's statis</button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="grid card rounded-box place-items-center">
      <Qrcode v-if="displayQrcode" />
      <Status v-if="displayStatus" />
    </div>
  </div>
</template>

<script>
import Qrcode from "../components/Seller/GenerateQrcode.vue";
import Status from "../components/Seller/UpdateProductStatus.vue";

export default {
  components: {
    Qrcode,
    Status,
  },
  data() {
    return {
      displayQrcode: false,
      displayStatus: false,
    };
  },
  methods: {
    generate_qrcode() {
      this.displayStatus = false;
      this.displayQrcode = true;
    },
    update_status() {
      this.displayStatus = true;
      this.displayQrcode = false;
    },
  },
};
</script>
