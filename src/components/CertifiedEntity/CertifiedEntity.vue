<template>
  <div v-if="certifiedEntity">
    <div class="indicator" v-if="isValid">
      <span class="indicator-item text-emerald-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <div
        class="grid w-32 h-10 border-2 border-dashed bg-base-150 border-color place-items-center"
      >
        {{ certifiedEntity.name }}
      </div>
    </div>
    <div class="indicator" v-else>
      <span class="text-red-700 indicator-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <div
        class="grid w-32 h-10 border-2 border-dashed bg-base-150 border-color place-items-center"
      >
        {{ certifiedEntity.name }}
      </div>
    </div>
  </div>
  <div v-else>
    {{ product.certifiedBy }}
  </div>
</template>

<script>
import config from "../../config";

export default {
  props: ["product"],
  components: {},
  data() {
    return {
      certifiedEntity: "",
      isValid: false,
    };
  },
  async created() {
    // Get certified Entity from the product
    await this.axios({
      method: "get",
      url: config.api.path + "products/" + this.product.id,
    })
      .then((response) => {
        this.certifiedEntity = response.data.CertifiedEntity;
      })
      .catch((error) => {
        console.log(error);
      });

    // Found if the certified entity is valid
    await this.axios({
      method: "get",
      url:
        config.api.path +
        "blockchains/certify/public-key/" +
        this.product.certifiedBy,
    })
      .then((response) => {
        console.log(response.data);
        this.isValid = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {},
};
</script>
