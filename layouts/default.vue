<template>
  <div class="content">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  min-height: 100vh;
}

.container {
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
  max-width: 1140px;
}
</style>
