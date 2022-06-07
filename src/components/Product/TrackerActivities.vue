<template>
  <div class="mb-4 font-semibold text-center">Tracker activities</div>
  <div class="w-full text-center" v-if="events">
    <ul class="steps">
      <li class="step">Created</li>
      <li class="step">qrcode generated</li>
      <li class="step step-accent">retrieved</li>
      <li class="step step-accent">Under Repair</li>
      <li class="step step-accent">Ready</li>
      <li class="step">Product Dead</li>
    </ul>
  </div>
  <div class="w-full" v-else>
    <Loadingbar />
  </div>

  <div v-if="success === false">
    <ErrorDisplayer :errors="errors" />
  </div>
  <ErrorManager ref="errorManager" />
</template>

<script>
// /products/events/:id
import config from "../../config.js";
import Loadingbar from "../Loadingbar.vue";
import ErrorManager from "../errorManager.vue";
import ErrorDisplayer from "../ErrorDisplayer.vue";

export default {
  props: ["product"],
  data() {
    return {
      success: "",
      events: "",
      errors: "",
    };
  },
  components: {
    Loadingbar,
    ErrorManager,
    ErrorDisplayer
  },
  async created() {
    await this.axios({
      method: "get",
      url: config.api.path + "products/events/" + this.product.id,
    })
      .then((response) => {
        console.log(response);
        this.success = true;
        this.events = response.data;
      })
      .catch((error) => {
        this.success = false;
        this.errors = this.$refs.errorManager.friendlyMessage(error);
      });
  },
};
</script>
