<template>
  <div>
    <!-- LOGIN FORM -->
    <img
      id="game-photo"
      src="../assets/rpslr.png"
      alt="Rock Paper Scissors Lizard Spock"
    />
    <div id="login">
      <p>Username</p>
      <input type="text" v-model="username" />
      <p>Password</p>
      <input type="password" v-model="password" />
      <div></div>
      <button class="button" @click="Login">
        Login
      </button>
      <div></div>
      <h4 v-if="onlogin">{{ status }}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login-component",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      onlogin: false,
      load: false,
      status: ""
    };
  },
  methods: {
    Login() {
      this.onlogin = true;
      this.status = "Loading...";
      axios
        .request({
          url: "https://reqres.in/api/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email: this.username,
            password: this.password
          }
        })
        .then(response => {
          if (response.data !== undefined) {
            this.onlogin = true;
            this.status = "You are logged in!";
            this.$store.commit("onlogin", response.data.token);
            this.$router.push("game");
          }
        })
        .catch(() => {
          this.onlogin = true;
          this.status = "There was an error, please try again";
        });
    }
  },
  computed: {}
};
</script>

<style scoped>
.button {
  margin: 2vw;
  background-color: rgb(240, 69, 69);
  color: white;
  padding: 7px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 7%;
}

#game-photo {
  width: 50%;
  margin: 2vw;
}
</style>
