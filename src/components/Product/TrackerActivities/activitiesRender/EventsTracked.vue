<template>
  <div class="w-full text-center" v-if="events">
    <ul class="steps">
      <template v-for="event in events" :key="event.id">
        <li class="step step-accent" v-if="shouldDisplayStepPrimary(event)">
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
</template>

<script>
import Loadingbar from "../../../Loadingbar.vue";

export default {
  props: ["events"],
  components: {
    Loadingbar,
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
