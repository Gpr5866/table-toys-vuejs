<template>
  <div class="example-modal-content">
    <div class="modalcontent">
        <h1 class="span-default">List Player</h1>
            <select class="form-control" @change="changePlayer($event)">
                <option value="" selected disabled>Choose</option>
                <option v-for="player in playerList" :value="player.id" :key="player.id">{{ player.user }}</option>
            </select>
        <p><span class="span-default">Selected Player: {{ selectedPlayer  }}</span></p>
        <b-button pill variant="outline-dark" class="btn-submit" @click="submit">Submit</b-button>
    </div>
    
  </div>
</template>

<script>
export default {
  
  data() {
      return {
        playerList: [
            {user: 'player 1', id:1},
            {user: 'player 2', id:2},
            {user: 'player 3', id:3},
            {user: 'player 4', id:4}
        ],
        nextId: 5,
        selectedPlayer: null,
      }
  },
  methods: {
    changePlayer(event) {
        this.selectedPlayer = event.target.options[event.target.options.selectedIndex].text
    },
    submit() {
        this.playerList.push({
          user: 'player'+ ' ' + this.nextId +'',
          id: this.nextId++
        })
    }
  }
}
</script>

<style scoped>
.form-control{ 
    display: flex;
    margin: 1em; 
    width: 75%;
}
.btn-submit {
    margin: 1em;
    padding: 10px;
}
.span-default{
    margin:1em;
    color: #99A799
}

</style>