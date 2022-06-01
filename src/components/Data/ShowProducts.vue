<template>
  <div v-if="products" class="w-3/4">
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
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-semibold">{{ product.name }}</div>
                  <div class="text-sm opacity-50">{{ product.id }}</div>
                </div>
              </div>
            </td>
            <td>{{ product.price }}</td>
            <td>
              <div>{{ product.status }}</div>
            </td>
            <td>{{ product.ownerId }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Loadingbar v-else/>

  <div v-if="success === false">
    <ErrorDisplayer :errors="errors" />
  </div>
  <ErrorManager ref="errorManager" />
</template>

<script>
import config from "../../config.js";
import ErrorDisplayer from "../ErrorDisplayer.vue";
import Message from "../Message.vue";
import ErrorManager from "../errorManager.vue";
import Loadingbar from "../Loadingbar.vue";

export default {
  data() {
    return {
      errors: "hey",
      success: "",
      message: "",
      products: "",
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
    Loadingbar,
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
