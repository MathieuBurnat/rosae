<template>
  <div>
    <div class="grid h-auto card rounded-box place-items-center">
      <h1>Client section {{ count }}</h1>
      <div>
        <button class="w-40 m-1 btn" @click="openRegister">Register</button>

        <button class="w-40 m-1 btn" @click="openRetrieve">Retrieve</button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="grid h-20 card rounded-box place-items-center">
      <Register v-if="displayRegister" />
      <Retrieve v-if="displayRetrieve" />
    </div>
  </div>
</template>

<script>
import Retrieve from "../components/client/Retrieve.vue";
import Register from "../components/client/Register.vue";

export default {
  components: {
    Register,
    Retrieve,
  },
  data() {
    return {
      displayRegister: false,
      displayRetrieve: false,
    };
  },
  methods: {
    openRegister() {
      this.displayRetrieve = false;
      this.displayRegister = true;
    },
    openRetrieve() {
      this.displayRetrieve = true;
      this.displayRegister = false;
    },
  },
};
</script>
