<template>
  <div class="w-3/4">
    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="productId">
        product
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="productId"
        type="text"
        placeholder="product id"
        v-model="productId"
      />
    </div>

    <div class="mb-4">
      <label
        class="block mb-2 text-sm font-bold text-gray-700"
        for="status"
      >
        What's the type of the commercial offer ?
      </label>

      <select
        class="w-full border-base-200 select select-bordered"
        v-model="status"
      >
        <option disabled selected>Event type</option>
        <option value="READY_TO_USE">
          Ready to use 🚀
        </option> 
        <option value="UNDER_REPAIR">
          Under repair 🛠️
        </option>
        <option value="OUT">
          Out 💀
        </option>
      </select>
    </div>
  </div>

  <div class="flex justify-center">
    <button class="btn btn-success" @click="save">Save</button>
  </div>

  <div v-if="success === false">
    <ErrorDisplayer :errors="errors" />
  </div>

  <div v-if="success === true">
    <Message :message="message" />
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
      success: "",
      errors: "",
      message: "",
      productId: "",
      status: "Event type",
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
  },
  methods: {
    async save() {
      console.log(this.date);

      await this.axios({
        method: "post",
        url: config.api.path + "products/status/update/",
        data: {
          id: this.productId,
          status: this.status,
        },
      })
        .then((response) => {
          this.success = true;
          this.message = {
            type: "alert-success",
            content: "The product's status has been changed to " + this.status,
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
