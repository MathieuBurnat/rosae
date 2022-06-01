<template>
  <div class="w-3/4">
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody
          v-for="product in products"
          :key="product.id"
          v-on:click="clickableTest(product)"
        >
          <tr class="hover">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.status }}</td>
            <td>{{ product.ownerId }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="success === false">
      <ErrorDisplayer :errors="errors" />
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
      message: "",
      products: "",
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
  },
  async created() {
    await this.axios({
      method: "get",
      url: config.api.path + "products",
    })
      .then((response) => {
        this.success = true;

        this.products = response.data;
      })
      .catch((error) => {
        this.success = false;
        this.errors = this.$refs.errorManager.friendlyMessage(error);
      });
  },
  methods: {
    clickableTest(product) {
      console.log(product);
    },
  },
};
</script>
