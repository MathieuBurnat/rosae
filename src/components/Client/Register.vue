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

    <p>{{ error }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import config from "../../config.js";

export default {
  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
      error: "",
    };
  },
  methods: {
    async register() {
      const client = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
      };

      console.log("save the client.. ");
      console.log(client);

      const result = await this.axios({
        method: "post",
        url: config.api.path + "clients/create",
        headers: {},
        data: {
          email: this.email,
          firstname: this.firstname,
          lastname: this.lastname,
        },
      });

      console.log(result);
    },
  },
};
</script>