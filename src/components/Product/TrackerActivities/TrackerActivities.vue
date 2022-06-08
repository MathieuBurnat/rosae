<template>
  <div class="mb-4 font-semibold text-center">
    <div>Tracker activities</div>
  </div>
  <EventsTracked v-if="displayEventsTracked" :events="events" />
  <EventsCertified v-if="displayEventsCertified" :product="product" />

  <div v-if="displayEventsTracked" class="w-full my-8 text-center">
    <div
      class="center btn btn-xs btn-outline btn-primary"
      @click="verifyAuthenticity"
    >
      Verify authenticity
    </div>
  </div>

  <div v-else class="btn btn-xs btn-outline" @click="verifyAuthenticity">
    Return
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
import EventsCertified from "./activitiesRender/EventsCertified.vue";

export default {
  props: ["product"],
  data() {
    return {
      success: "",
      events: "",
      errors: "",
      displayEventsTracked: true,
      displayEventsCertified: false,
    };
  },
  components: {
    Loadingbar,
    ErrorManager,
    ErrorDisplayer,
    EventsTracked,
    EventsCertified,
  },
  async created() {
    await this.axios({
      method: "get",
      url: config.api.path + "products/events/" + this.product.id,
    })
      .then((response) => {
        this.success = true;
        this.events = response.data;
      })
      .catch((error) => {
        this.success = false;
        this.errors = this.$refs.errorManager.friendlyMessage(error);
      });
  },
  methods: {
    openEventsTrackeds() {
      this.displayEventsTracked = true;
      this.displayEventsCertified = false;
    },
    openEventsCertified() {
      this.displayEventsTracked = false;
      this.displayEventsCertified = true;
    },
    verifyAuthenticity() {
      this.displayEventsTracked = !this.displayEventsTracked;
      this.displayEventsCertified = !this.displayEventsCertified;
    },
  },
};
</script>
