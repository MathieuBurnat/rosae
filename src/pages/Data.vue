<template>
  <div>
    <div class="grid h-auto card rounded-box place-items-center">
      <h1> Dataview section </h1>
      <div>
        <button class="w-40 m-1 btn btn-primary" @click="openShowProducts">Products</button>

        <button class="w-40 m-1 btn btn-primary" @click="openShowEvents">Events</button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="grid card rounded-box place-items-center">
      <ShowProducts v-if="displayShowProducts" />
      <ShowEvents v-if="displayShowEvents" />
    </div>
  </div>
</template>

<script>
import ShowEvents from "../components/Data/ShowEvents.vue";
import ShowProducts from "../components/Data/ShowProducts.vue";

export default {
  components: {
    ShowProducts,
    ShowEvents,
  },
  data() {
    return {
      displayShowProducts: false,
      displayShowEvents: false,
    };
  },
  methods: {
    openShowProducts() {
      this.displayShowEvents = false;
      this.displayShowProducts = true;
    },
    openShowEvents() {
      this.displayShowEvents = true;
      this.displayShowProducts = false;
    },
  },
};
</script>