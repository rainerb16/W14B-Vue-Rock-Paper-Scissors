<template>
  <div class="login">
    <h1 id="title">ROCK PAPER SCISSORS LIZARD SPOCK</h1>
    <form id="login-form" action="javascript:void(0)">
      <img src="../assets/rpslr.png" alt="Rock Paper Scissors Lizard Spock" />
      <h4><u>LOGIN</u></h4>
      <p>Username</p>
      <input type="text" v-model="username" />
      <br />
      <p>Password</p>
      <input type="password" v-model="password" />
      <br />
      <button id="button" @click="login">Login</button>
    </form>
    <h2 v-if="error">There was an error, please log in again</h2>
    <p id="instructions">
      This site uses an API that sends fake login data. Please use the following
      username to login. You can type whatever you'd like for the password
      field.
    </p>
    <p>Username: eve.holt@reqres.in</p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "login-page",
  data: function() {
    return {
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    login: function() {
      axios
        .request({
          url: "https://reqres.in/api/login",
          method: "POST",
          data: {
            username: this.username,
            password: this.password
          },
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          cookies.set("token", response.data.token);
          this.$router.push("/game");
        })
        .catch(error => {
          console.log(error);
          this.error = true;
        });
    }
  }
};
</script>

<style scoped>
#title {
  font-family: "Press Start 2P", cursive;
  font-size: 20px;
}
#button {
  margin: 2vw;
  background-color: rgb(114, 27, 27);
  color: white;
  padding: 7px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 7%;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;
}
#button:hover {
  transform: scale(0.9);
}
input {
  margin: 5px, 0px, 5px, 0px;
}
#instructions {
  width: 40%;
  margin-left: 30%;
}
</style>
