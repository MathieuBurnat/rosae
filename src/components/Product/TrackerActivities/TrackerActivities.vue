<template>
  <div class="mb-4 font-semibold text-center">
    <div>Tracker activities</div>
  </div>
  <EventsTracked :events="events"/>
  
  <div class="btn btn-xs btn-outline btn-primary" @click="verifyAuthenticity">
    Verify authenticity
  </div>

  <div v-if="success === false">
    <ErrorDisplayer :errors="errors" />
  </div>
  <ErrorManager ref="errorManager" />
</template>

<script>
import config from "../../../config.js";
import Loadingbar from "../../Loadingbar.vue";
import ErrorManager from "../../errorManager.vue";
import ErrorDisplayer from "../../ErrorDisplayer.vue";
import EventsTracked from "./activitiesRender/EventsTracked.vue";

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
    ErrorDisplayer,
    EventsTracked
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
  methods: {
    shouldDisplayStepPrimary(event) {
      switch (event.eventType.content) {
        case "PRODUCT_CREATED":
        case "PRODUCT_QRCODE_GENERATED":
        case "OUT":
          return false;
        default:
          return true;
      }
    },
    verifyAuthenticity() {
      console.log("verifyAuthenticity");
    },
  },
};
</script>
