<template>
  <div>
    <div class="mb-4">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
          email
        </label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="email"
          v-model="email"
        />
      </div>

      <label class="block mb-2 text-sm font-bold text-gray-700" for="firstname">
        firstname
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="firstname"
        type="text"
        placeholder="firstname"
        v-model="firstname"
      />
    </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="lastname">
        lastname
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="lastname"
        type="text"
        placeholder="lastname"
        v-model="lastname"
      />
    </div>

    <button class="btn btn-success" @click="register">Save</button>

    <div v-if="success === false">
      <ErrorDisplayer :errors="errors" />
    </div>

    <div v-if="success === true">
      <Message :message="message" />
    </div>
  </div>
</template>

<script>
import config from "../../config.js";
import ErrorDisplayer from "../ErrorDisplayer.vue";
import Message from "../Message.vue";

export default {
  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
      errors: "",
      success: "",
      message: "",
    };
  },
  components: {
    ErrorDisplayer,
    Message
  },
  methods: {
    async register() {
      await this.axios({
        method: "post",
        url: config.api.path + "clients/create",
        data: {
          email: this.email,
          firstname: this.firstname,
          lastname: this.lastname,
        },
      })
        .then((response) => {
          this.success = true;

          this.message = {
            type: "alert-success",
            content: "The client has been created",
          };
        })
        .catch((error) => {
          this.success = false;
          console.log(error.response.data.message);
          
          this.errors = error.response.data.message;
        });

      console.log(this.errors);
    },
  },
};
</script>