<template>
  <div class="w-3/4">
    <div class="mb-8">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="productId">
        About
      </label>

      <div
        tabindex="0"
        class="max-w-xs border collapse collapse-plus border-base-300 bg-base-100 rounded-box"
      >
        <div class="text-xl font-medium collapse-title">
          What's a commercial offer ?
        </div>
        <div class="collapse-content">
          <p> Create a commercial offer will inform every client connected to a product. It will also be saved on the blockchain. </p>
          <p> If you change the event type, you could see that the action changes, it's because the value could sometimes be an pourcentage or a price like a discount coupon </p>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="content">
        content
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="content"
        type="text"
        placeholder="content"
        v-model="content"
      />
    </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="productId">
        productId
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="productId"
        type="text"
        placeholder="productId"
        v-model="productId"
      />
    </div>

    <div class="mb-4">
      <label
        class="block mb-2 text-sm font-bold text-gray-700"
        for="eventTypeContent"
      >
        What's the type of the commercial offer ?
      </label>

      <select
        class="w-full border-base-200 select select-bordered"
        v-model="eventTypeContent"
      >
        <option disabled selected>Event type</option>
        <option value="COMMERCIAL_WARRANTY_EXTENDED">
          Extend the warranty
        </option>
        <option value="COMMERCIAL_DISCOUNT_COUPON">
          Give a discount coupon
        </option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="date">
        When the offer should expires ?
      </label>
      <Datepicker v-model="date"></Datepicker>
    </div>

    <div class="mb-4">
      <div class="form-control">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="action">
          action
        </label>
        <label class="input-group">
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
            id="action"
            type="number"
            placeholder="action"
            v-model="action"
          />
          <span v-if="eventTypeContent == 'COMMERCIAL_WARRANTY_EXTENDED'"
            >%</span
          >
          <span v-else>CHF</span>
        </label>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <button class="btn btn-success" @click="save">Save</button>
  </div>

  <div v-if="success === false">
    <ErrorDisplayer :errors="errors" />
  </div>

  <div v-if="success === true">
    <Message :message="message" />
  </div>

  <ErrorManager ref="errorManager" />
</template>

<script>
import config from "../../config.js";
import ErrorDisplayer from "../ErrorDisplayer.vue";
import Message from "../Message.vue";
import ErrorManager from "../errorManager.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  data() {
    return {
      success: "",
      errors: "",
      message: "",
      content: "",
      productId: "",
      eventTypeContent: "Event type",
      action: "",
      date: "",
    };
  },
  components: {
    ErrorDisplayer,
    Message,
    ErrorManager,
    Datepicker,
  },
  methods: {
    async save() {
      console.log(this.date);

      await this.axios({
        method: "post",
        url: config.api.path + "events/commercials/create",
        data: {
          content: this.content,
          shall_expire_on: this.date,
          productId: this.productId,
          eventTypeContent: this.eventTypeContent,
          action: this.action,
        },
      })
        .then((response) => {
          this.success = true;
          this.message = {
            type: "alert-success",
            content: "The commercial event has been created",
          };
        })
        .catch((error) => {
          this.success = false;
          this.errors = this.$refs.errorManager.friendlyMessage(error);
        });
    },
  },
};
</script>
