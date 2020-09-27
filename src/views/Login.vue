<template>
  <div class="login">
    <login-component />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from "../components/login-component.vue";

export default {
  name: "login-page",
  components: {
    LoginComponent
  }
};
</script>

<style scoped></style>
