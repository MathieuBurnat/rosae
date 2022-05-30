<template>
  <div class="w-3/4">
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
        <label
          class="block mb-2 text-sm font-bold text-gray-700"
          for="productId"
        >
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
          eventTypeContent
        </label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="eventTypeContent"
          type="text"
          placeholder="eventTypeContent"
          v-model="eventTypeContent"
        />
      </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="date">
        When the offer should expires ?
      </label>
      <Datepicker v-model="date"></Datepicker>
    </div>

    <div class="mb-4">
      <label class="block mb-2 text-sm font-bold text-gray-700" for="action">
        action
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="action"
        type="text"
        placeholder="action"
        v-model="action"
      />
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
      eventTypeContent: "",
      action: "",
      shall_expire_on: "",
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
