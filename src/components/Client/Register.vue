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
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
    };
  },
  methods: {
    register() {
      console.log("- Register the clien -");
      console.log(this.email);
      console.log(this.firstname);
      console.log(this.lastname);
    },
  },
};
</script>