<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from "./view/Login";

export default {
  name: "App",
  components: {
    Login
  }
};
</script>

<style lang="scss">
@import './assets/style/custom.scss';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  $--font-path: "~element-ui/lib/theme-chalk/fonts";
  @import "~element-ui/packages/theme-chalk/src/index";
}
</style>
