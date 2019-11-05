<template>
  <div id="app">
    <div class="container text-center">
        <img alt="Vue logo" src="./assets/logo.png" style="max-width:100px" />
        <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
