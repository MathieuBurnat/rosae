<template>
  <div class="mb-4 font-semibold text-center">Tracker activities</div>
  <div class="w-full text-center" v-if="events">
    <ul class="steps">
      <template
        v-for="event in events"
        :key="event.id"
      >
        <li class="step step-primary" v-if="shouldDisplayStepPrimary(event)">
          {{ event.eventType.slug }}
        </li>
        <li class="step" v-else>
          {{ event.eventType.slug }}
        </li>
      </template>
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
      displayClientSteps: false,
    };
  },
  components: {
    Loadingbar,
    ErrorManager,
    ErrorDisplayer,
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
  },methods : {
    shouldDisplayStepPrimary(event) {
      switch (event.eventType.content){
        case "PRODUCT_CREATED":
        case "PRODUCT_QRCODE_GENERATED":
        case "OUT":
          return false;
        default:
          return true;
      }
    },
  },
};
</script>
