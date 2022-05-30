<template>
  <div>
    <div class="grid h-auto card rounded-box place-items-center">
    <h1> Provider section </h1>
      <div>
        <button class="w-40 m-1 btn" @click="openProduct">New product</button>

        <button class="w-40 m-1 btn" @click="openOffer">New offer</button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="grid card rounded-box place-items-center">
      <Product v-if="displayProduct" />
      <Offer v-if="displayOffer" />
    </div>
  </div>
</template>

<script>
import Product from "../components/Seller/CreateProduct.vue";
import Offer from "../components/Seller/CreateOffer.vue";

export default {
  components: {
    Product,
    Offer,
  },
  data() {
    return {
      displayProduct: false,
      displayOffer: false,
    };
  },
  methods: {
    openProduct() {
      this.displayOffer = false;
      this.displayProduct = true;
    },
    openOffer() {
      this.displayOffer = true;
      this.displayProduct = false;
    },
  },
};
</script>
