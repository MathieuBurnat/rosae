<template>
  <div v-if="isOpen">
    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div class="modal modal-open" v-if="isOpen">
      <div class="w-11/12 max-w-full modal-box bg-zinc-100">
        <div class="text-center">
          <h1 class="text-lg font-bold">{{ product.name }}</h1>
          <div class="text-sm opacity-50">{{ product.id }}</div>
        </div>

        <div class="p-4 m-8 bg-zinc-50 rounded-2xl">
          <div class="font-semibold text-center">
            Information about the product
          </div>
          <ul class="w-full p-2 menu rounded-box">
            <li>
              <div>
                <span class="w-full font-semibold">Status</span>
                <FriendlyStatus :status="product.status" />
              </div>
            </li>
            <li>
              <div>
                <span class="w-full font-semibold">Current owner</span>
                <span
                  v-if="product.owner"
                  class="top-0 w-full text-sm text-right opacity-50 align-right"
                  >{{ product.owner.firstname }}
                  {{ product.owner.lastname }}</span
                >
                <span
                  v-else
                  class="top-0 w-full text-sm text-right opacity-50 align-right"
                >
                  Not owned
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="w-full font-semibold">Price</span>
                <span
                  class="top-0 w-full text-sm text-right opacity-50 align-right"
                  >{{ product.price }}</span
                >
              </div>
            </li>
            <li>
              <div>
                <span class="w-full font-semibold">Warranty expires on</span>
                <span
                  class="top-0 w-full text-sm text-right opacity-50 align-right"
                  >{{ date }}</span
                >
              </div>
            </li>
          </ul>
        </div>

        <div class="p-4 m-8 bg-zinc-50 rounded-2xl">
          <div class="mb-4 font-semibold text-center">Tracker activities</div>
          <div class="w-full text-center">
            <ul class="steps">
              <li class="step">Created</li>
              <li class="step">qrcode generated</li>
              <li class="step">retrieved</li>
              <li class="step step-accent">new owner</li>
              <li class="step step-accent">Under Repair</li>
              <li class="step step-accent">Ready</li>
              <li class="step">Product Dead</li>
            </ul>
          </div>
        </div>

        <div class="modal-action">
          <button class="btn btn-success" @click="isOpen = false">
            Go Back
          </button>
        </div>
      </div>
    </div>
    <div else>
      <p>nop</p>
    </div>
  </div>
</template>
<script>
import FriendlyStatus from "./FriendlyStatus.vue";
import datePretty from "../../assets/dateFormater.js";

export default {
  props: ["isOpen", "product"],
  components: {
    FriendlyStatus,
  },
  data() {
    return {
      date: datePretty(this.product.warrantyExpiresOn),
    };
  },
  computed: {},
};
</script>
