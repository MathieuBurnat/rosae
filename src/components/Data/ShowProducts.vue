<template>
  <div class="w-3/4">
    <tbody
      v-for="product in products"
      :key="product.id"
      v-on:click="clickableTest(product)"
    >
      <tr class="clickable-row">
        <td>{{ product.id }}</td>
        <td style="text-align: center">{{ product.name }}</td>
        <td style="text-align: center">{{ product.price }}</td>
      </tr>
    </tbody>

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

        this.message = {
          type: "alert-success",
          content: "Here yours products darling",
        };

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
