<template>
  <div>
    <div v-if="token != undefined">
      <div id="nav">
        <div id="logout-btn" @click="logout">Logout</div>
      </div>
      <div id="title">
        <h2 class="animate__animated animate__fadeIn">
          <u>ROCK PAPER SCISSORS LIZARD SPOCK</u>
        </h2>
      </div>
      <scoreboard-component />
      <div id="choices">
        <button @click="select(0)">Rock</button>
        <button @click="select(1)">Paper</button>
        <button @click="select(2)">Scissors</button>
        <button @click="select(3)">Lizard</button>
        <button @click="select(4)">Spock</button>
      </div>
      <div id="players">
        <player-component />
        <div id="game-rules">
          <h2><u>Rules of the Game:</u></h2>
          <p>Click a button to play!</p>
          <ul>
            <li>Scissors cuts Paper</li>
            <li>Paper covers Rock</li>
            <li>Rock crushes Lizard</li>
            <li>Lizard poisons Spock</li>
            <li>Spock smashes Scissors</li>
            <li>Scissors decapitates Lizard</li>
            <li>Lizard eats Paper</li>
            <li>Paper disproves Spock</li>
            <li>Spock vaporizes Rock</li>
            <li>Rock crushes Scissors</li>
          </ul>
        </div>
        <computer-component />
      </div>
    </div>
    <div v-else>
      <h2>No user logged in. Please return to Login page.</h2>
      <router-link to="/">Return to Login</router-link>
    </div>
  </div>
</template>

<script>
import ScoreboardComponent from "../components/scoreboard-component.vue";
import PlayerComponent from "../components/player-component.vue";
import ComputerComponent from "../components/computer-component.vue";
import cookies from "vue-cookies";

export default {
  components: {
    PlayerComponent,
    ComputerComponent,
    ScoreboardComponent
  },
  data: function() {
    return {
      gameElement: [
        {
          name: "Rock",
          image: "https://www.pngitem.com/pimgs/m/125-1254468_rubble-png-transparent-background-igneous-rock-png-png.png"
        },
        {
          name: "Paper",
          image: "https://www.kindpng.com/picc/m/8-81766_vector-notebook-png-download-paper-notepad-transparent-png.png"
        },
        {
          name: "Scissors",
          image: "http://www.pngmart.com/files/1/Scissors-PNG-File.png"
        },
        {
          name: "Lizard",
          image: "https://www.clipartkey.com/mpngs/m/186-1864264_transparent-background-lizard-png.png"
        },
        {
          name: "Spock",
          image:
            "https://www.pikpng.com/pngl/b/136-1365149_spock-png-spock-greeting-clipart.png"
        }
      ],
      gameRules: {
        Rock: {
          Rock: 0,
          Paper: -1,
          Scissors: 1,
          Lizard: 1,
          Spock: -1
        },
        Paper: {
          Rock: 1,
          Paper: 0,
          Scissors: -1,
          Lizard: -1,
          Spock: 1
        },
        Scissors: {
          Rock: -1,
          Paper: 1,
          Scissors: 0,
          Lizard: 1,
          Spock: -1
        },
        Lizard: {
          Rock: -1,
          Paper: 1,
          Scissors: -1,
          Lizard: 0,
          Spock: 1
        },
        Spock: {
          Rock: 1,
          Paper: -1,
          Scissors: 1,
          Lizard: -1,
          Spock: 0
        }
      },
      token: cookies.get("token")
    };
  },
  methods: {
    select: function(index) {
      let userSelection = this.gameElement[index];
      let computerSelection = this.gameElement[Math.floor(Math.random() * 5)];
      // console.log(this.gameRules[userSelection.name]);
      let results = this.gameRules[userSelection.name][computerSelection.name];
      console.log(results);
      this.$store.commit("updateUser", userSelection);
      this.$store.commit("updateComputer", computerSelection);
      this.$store.commit("updateResults", results);
    },
    logout: function() {
      cookies.remove("token");
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");

#title {
  margin-bottom: 5vw;
  font-family: "Press Start 2P", cursive;
  line-height: 3vh;
}
#logout-btn {
  box-shadow: 2px 0px 5px rgb(56, 56, 56);
  border: 1px solid rgb(114, 27, 27);
  color: rgb(114, 27, 27);
  padding: 5px;
  font-weight: bold;
  border-radius: 7%;
  width: 10%;
  margin-left: 43.5%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
}
#logout-btn:hover {
  transform: scale(0.9);
}
#players {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  justify-items: center;
  object-fit: cover;
  margin-top: 1vw;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-bottom: 7vw;
}
#choices {
  text-align: center;
  align-items: center;
  justify-items: center;
  width: 25%;
  margin: 1vw;
}
button {
  margin: 5px;
  background-color: rgb(114, 27, 27);
  color: white;
  padding: 7px;
  font-size: 14px;
  border-radius: 7%;
  width: 25%;
  cursor: pointer;
  box-shadow: 2px 0px 5px rgb(56, 56, 56);
  font-family: "Bangers", cursive;
  letter-spacing: 3px;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
}
button:hover {
  transform: scale(0.9);
}
#game-rules {
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;
  justify-items: center;
  border: 1px solid black;
  padding: 5px;
  color: rgb(114, 27, 27);
  line-height: 3vh;
  font-family: "Bangers", cursive;
  letter-spacing: 3px;
}
ul {
  text-align: left;
}
</style>
