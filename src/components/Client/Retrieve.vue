<template>
  <div class="w-3/4">
    <div class="mb-4">
      <div class="mb-4">
        <div>
          <div class="mt-2 mb-8 tabs">
            <btn
              @click="openScan"
              class="w-2/4 tab tab-bordered"
              :class="{ 'tab-active': showScanner }"
              >Scan the QR Code</btn
            >
            <btn
              @click="openMan"
              class="w-2/4 tab tab-bordered"
              :class="{ 'tab-active': showInput }"
              >Write manually the QR Code</btn
            >
          </div>
          <div>
            <div v-if="showScanner">
              <div class="flex flex-col w-2/4">
                <div
                  class="grid h-20 border-2 border-dashed card bg-base-150 border-base-300 rounded-box place-items-center"
                >
                  <QrDropzone
                    class="w-full h-full text-center"
                    @decode="onDecode"
                  >
                    <p class="mt-6">Drop QR Code here.</p>
                  </QrDropzone>
                </div>
                <div class="divider divider-horizontal" />
                <div
                  class="grid h-20 mt-4 card rounded-box"
                >
                  <QrCapture @decode="onDecode" class="mb"></QrCapture>
                </div>
              </div>
              <div class="result" v-if="qrcode">Value : {{ qrcode }}</div>
            </div>
            <div v-if="showInput">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="qrcode"
              >
                qrcode
              </label>

              <input
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="qrcode"
                type="text"
                placeholder="qrcode"
                v-model="qrcode"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="client">
          client
        </label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="client"
          type="text"
          placeholder="client"
          v-model="ownerId"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <button class="btn btn-success" @click="register">Save</button>
    </div>

    <div v-if="success === false">
      <ErrorDisplayer :errors="errors" />
    </div>

    <div v-if="success === true">
      <Message :message="message" />
    </div>
  </div>
  <ErrorManager ref="errorManager" />
</template>

<script>
import config from "../../config.js";
import ErrorDisplayer from "../ErrorDisplayer.vue";
import Message from "../Message.vue";
import ErrorManager from "../errorManager.vue";
import { QrCapture, QrDropzone } from "vue3-qr-reader";

export default {
  data() {
    return {
      errors: "",
      success: "",
      qrcode: "",
      ownerId: "",
      showScanner: true,
      showInput: false,
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
    QrCapture,
    QrDropzone,
  },
  methods: {
    async register() {
      await this.axios({
        method: "post",
        url: config.api.path + "products/retrieve",
        data: {
          qrcode: this.qrcode,
          ownerId: this.ownerId,
        },
      })
        .then((response) => {
          console.log(response);

          this.success = true;

          this.message = {
            type: "alert-success",
            content: "The product has been retrieved",
          };
        })
        .catch((error) => {
          this.success = false;
          this.errors = this.$refs.errorManager.friendlyMessage(error);
        });
    },
    openScan() {
      this.showScanner = true;
      this.showInput = false;
    },
    openMan() {
      this.showScanner = false;
      this.showInput = true;
    },
    onDecode(qrcode) {
      this.qrcode = qrcode;
    },
  },
};
</script>
