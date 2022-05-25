<script>
import Home from "./pages/Homepage.vue";
import About from "./pages/About.vue";
import NotFound from "./pages/NotFound.vue";
import Header from "./components/header/Header.vue";

// Implement a basic router
const routes = {
  "/": Home,
  "/about": About,
};

export default {
  components : {
    Header,
  },

  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <Header />
  <component :is="currentView" />
</template>