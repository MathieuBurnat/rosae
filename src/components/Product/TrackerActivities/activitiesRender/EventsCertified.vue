<template>
  <div class="w-full text-center" v-if="events">
    <ul class="steps">
      <template v-for="event in events" :key="event.id">
        <li class="step step-accent" v-if="event.certified==true">
          {{ event.eventType.slug }}
        </li>
        <li class="step step-error" v-else>
          {{ event.eventType.slug }}
        </li>
      </template>
    </ul>
  </div>
  <div class="w-full" v-else>
    <Loadingbar />
  </div>
</template>

<script>
import Loadingbar from "../../../Loadingbar.vue";
import config from "../../../../config.js";

export default {
  props: ["product"],
  components: {
    Loadingbar,
  },
   data() {
    return {
      events: "",
    };
  },
  async created() {
    await this.axios({
      method: "get",
      url: config.api.path + "blockchains/verify/events/" + this.product.id,
    })
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
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
  },
};
</script>
