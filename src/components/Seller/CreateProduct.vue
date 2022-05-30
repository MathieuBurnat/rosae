<template>
  <div class="w-3/4">
    <div class="mb-4">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="Name">
          Name
        </label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          placeholder="Name"
          v-model="Name"
        />
      </div>

      <label class="block mb-2 text-sm font-bold text-gray-700" for="published">
        Published the product ?
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="published"
        type="text"
        placeholder="published"
        v-model="published"
      />
    </div>

    <div class="mb-4">
      <label
        class="block mb-2 text-sm font-bold text-gray-700"
        for="warrantyExpiresOn"
      >
        When the warranty expires ?
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="warrantyExpiresOn"
        type="text"
        placeholder="warrantyExpiresOn"
        v-model="warrantyExpiresOn"
      />
    </div>

    <div class="mb-4">
      <label
        class="block mb-2 text-sm font-bold text-gray-700"
        for="price"
      >
        Price
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="price"
        type="number"
        placeholder="price"
        v-model="price"
      />
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
      success: "",
      errors: "",
      message: "",
      name: "",
      published: false,
      warrantyExpiresOn: "",
      price: 15,
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
  },
};
</script>