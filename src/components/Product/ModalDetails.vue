<template>
  <div v-if="isOpen">
    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div class="modal modal-open" v-if="isOpen">
      <div class="w-11/12 max-w-full modal-box">
        <div class="text-center">
          <h1 class="text-lg font-bold">{{ product.name }}</h1>
          <div class="text-sm opacity-50">{{ product.id }}</div>
        </div>

        <div class="m-8">
          <div class="font-semibold">Information about the product</div>
          <ul class="w-3/6 p-2 menu bg-base-100 rounded-box">
            <li>
              <div>
                <span class="w-full font-semibold">Status</span>
                <span
                  class="top-0 w-full text-sm text-right opacity-50 align-right"
                  >{{ product.status }}</span
                >
              </div>
            </li>
            <li>
              <div>
                <span class="w-full font-semibold">Warranty expires on</span>
                <span
                  class="top-0 w-full text-sm text-right opacity-50 align-right"
                  >{{ product.warrantyExpiresOn }}</span
                >
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
          </ul>
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
export default {
  props: ["isOpen", "product"],
};
</script>
