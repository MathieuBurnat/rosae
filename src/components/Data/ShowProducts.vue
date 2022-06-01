<template>
  <div v-if="products" class="w-3/4">
    <ModalProductDetails :isOpen="OpenModal" :product="selectedProduct"/>

    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Owner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody
          v-for="product in products"
          :key="product.id"
          v-on:click="showProductDetails(product)"
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
              <div v-if="product.owner">
                {{ product.owner.lastname }} {{ product.owner.firstname[0] }}
              </div>
              <div v-else></div>
            </td>
            <td>
              <FriendlyStatus :status="product.status" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Loadingbar v-else />

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
import ModalProductDetails from "../Product/ModalProductDetails.vue";
import FriendlyStatus from "../Product/FriendlyStatus.vue";
export default {
  data() {
    return {
      errors: "",
      success: "",
      message: "",
      products: "",
      selectedProduct: "",
      OpenModal: false,
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
    Loadingbar,
    ModalProductDetails,
    FriendlyStatus
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
    showProductDetails(product) {
      console.log(product);
      
      this.selectedProduct = product;
      this.OpenModal = !this.OpenModal;
    },
  },
};
</script>
