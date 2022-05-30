<template>
  <div class="w-3/4">
    <div class="mb-4">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="name">
          name
        </label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="name"
          v-model="name"
        />
      </div>

      <label class="block mb-2 text-sm font-bold text-gray-700" for="published">
        Published the product ?
      </label>
      <div class="form-control">
        <label class="cursor-pointer label">
          <input
            type="checkbox"
            class="toggle toggle-primary"
            checked
            v-model="published"
          />
          <span class="label-text" v-if="published"
            >The product will be created and published
          </span>
          <span class="label-text" v-if="!published"
            >The product will be created but not published
          </span>
        </label>
      </div>
    </div>

    <div class="mb-4">
      <label
        class="block mb-2 text-sm font-bold text-gray-700"
        for="date"
      >
        When the warranty expires ?
      </label>
      <Datepicker v-model="date"></Datepicker>
    </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="price">
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
      <button class="btn btn-success" @click="save">Save</button>
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
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  data() {
    return {
      success: "",
      errors: "",
      message: "",
      name: "",
      published: true,
      price: 15,
      date: null
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
    Datepicker 
  },
  methods: {
    async save() {
      console.log(this.date);
      
      await this.axios({
        method: "post",
        url: config.api.path + "products/create",
        data: {
          name: this.name,
          published: this.published === "true",
          warrantyExpiresOn: this.date,
          price: this.price,
        },
      })
        .then((response) => {
          this.success = true;
          this.message = {
            type: "alert-success",
            content: "The product has been created",
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