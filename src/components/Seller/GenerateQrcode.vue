<template>
  <div class="w-3/4">
    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="product">
        product
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="product"
        type="text"
        placeholder="product id"
        v-model="productId"
      />
    </div>

    <div class="flex justify-center">
      <button class="btn btn-success" @click="generate">Save</button>
    </div>

    <div v-if="success === false">
      <ErrorDisplayer :errors="errors" />
    </div>

    <div v-if="success === true">
      <Message :message="message" />
    </div>
  </div>
    <ErrorManager  ref="errorManager" />

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
      message: "",
      productId: "",
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager ,
  },
  methods: {
    async generate() {
      await this.axios({
        method: "post",
        url: config.api.path + "products/qrcode/generate",
        data: {
          productId: this.productId,
        },
      })
        .then((response) => {
          this.success = true;

          this.message = {
            type: "alert-success",
            content: "The product's qrcode has been generated",
          };
        })
        .catch((error) => {
          this.success = false;
          this.errors = this.$refs.errorManager.friendlyMessage(error)
        });
    },
  },
};
</script>