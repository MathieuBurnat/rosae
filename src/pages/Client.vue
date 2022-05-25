<template>
  <div>
    <div class="grid h-auto card rounded-box place-items-center">
      <h1>Client section {{ count }}</h1>
      <div>
        <button
          class="w-40 m-1 btn"
          @click="openRegister"
        >
          Register
        </button>

        <button
          class="w-40 m-1 btn"
          @click="openRetrieve"
        >
          Retrieve
        </button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="grid h-20 card rounded-box place-items-center">
      {{ content }} 
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      content: "",
    };
  },
  methods: {
    openRegister() {
      this.content = "register";
    },
    openRetrieve() {
      this.content = "retrieve";
    }
  },
};
</script>
