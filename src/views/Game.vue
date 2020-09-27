<template>
  <div>
    <div class="game">
      <div v-if="token" id="login">
        <scoreboard-page />
        <h2>GAME TIME</h2>
        <!-- insert battle here -->
        <!-- insert user -->
        <!-- insert computer -->
      </div>
      <div v-else>
        <h3>No user logged in. Please log in.</h3>
        <router-link to="/">Return to Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoginToken from "vue-cookies";
import ScoreboardPage from "../components/scoreboard-component.vue";

export default {
  components: {
    ScoreboardPage
  },
  methods: {
    checkLogin: function() {
      if (this.token != undefined) {
        this.login = true;
      }
    }
  },
  computed: {
    token() {
      return LoginToken.get("token");
    }
  }
  // mounted: function() {
  //   this.checkLogin(), this.$store.commit("");
  // }
};
</script>
