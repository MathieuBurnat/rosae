<template>
  <div v-if="products" class="w-3/4">
    <ModalDetails :isOpen="OpenModal" />

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
              <div v-if="product.owner">
                {{ product.owner.lastname }} {{ product.owner.firstname[0] }}
              </div>
              <div v-else></div>
            </td>
            <td>
              <div v-if="product.status == 'READY_TO_USE'">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    color="green"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div v-if="product.status == 'UNDER_REPAIR'">🛠️</div>
              <div v-if="product.status == 'OUT'">💀</div>
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
import ModalDetails from "../Product/ModalDetails.vue";

export default {
  data() {
    return {
      errors: "",
      success: "",
      message: "",
      products: "",
      OpenModal: false,
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
    Loadingbar,
    ModalDetails,
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
      this.OpenModal = !this.OpenModal;
    },
  },
};
</script>
