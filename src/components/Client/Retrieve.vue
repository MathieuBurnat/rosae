<template>
  <div class="w-3/4">
    <div class="mb-4">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="qrcode">
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

export default {
  data() {
    return {
      errors: "",
      success: "",
      qrcode: "",
      ownerId: "",
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
  },
  methods: {
    async register() {
      console.log("Data : ");
      console.log(this.qrcode);
      console.log(this.ownerId);

      await this.axios({
        method: "post",
        url: config.api.path + "products/retrieve",
        data: {
          qrcode: this.qrcode,
          qrcode: this.qrcode,
        },
      })
        .then((response) => {
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
  },
};
</script>