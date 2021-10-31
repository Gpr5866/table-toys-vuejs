<template>
    <div class="Group">
        <b-container>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col sm="6">
                            Groups
                        </b-col>
                        <b-col sm="6">
                            <div>
                                <b-button pill variant="outline-light" id="tambahGrup" v-on:click="addNewGroup"> Tambahkan Grup </b-button>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="groupcard">
                        <b-card-group deck>
                            <b-card bg-variant="dark" v-for="(itemgrup, index) in listgroup" :value="itemgrup.id" :key="itemgrup.id" :title="itemgrup.grup" class="text-center">
                                <b-card-text class="groupcard">{{itemgrup.grup}} - ID: {{itemgrup.id}} - Jumlah Player : {{itemgrup.jumlahplayer}}</b-card-text>
                                <p>List Pemain</p>
                                <p v-for="playername in listplayer" :value="playername.id" :key="playername.id">
                                {{playername.playeruser}}
                                </p>
                                <b-row>
                                    <b-col>
                                        <div>
                                            <b-button pill variant="outline-light" class="btn-choice" @click="$bvModal.show('modalPlayer')">Tambah Player</b-button>
                                            <b-modal id="modalPlayer" title="List Player" ok-only busy modal-class="modalbubble" content-class="modalcontent" hide-header-close>
                                                 <div class="modalcontent">
                                                    <h1 class="span-default">List Player</h1>
                                                        <select class="form-control" @change="changePlayer($event)">
                                                            <option value="" selected disabled>Choose</option>
                                                            <option v-for="player in playername" :value="player.id" :key="player.id">{{ player.user }}</option>
                                                        </select>
                                                    <p><span class="span-default">Selected Player : {{ selectedPlayer  }}</span></p>
                                                    <b-button pill variant="outline-light" class="btn-submit" @click="submit">Submit</b-button>
                                                </div>                               
                                            </b-modal>
                                        </div>
                                    </b-col>
                                    <b-col>
                                        <b-button pill variant="outline-light" @click="removegroup(index)" class="btn-choice">Hapus Grup</b-button>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-card-group>
                    </b-row>
                </b-col>
                <b-col sm="3" class="">
                List of Connected Player
                    <ul id="itemlist" class="list">
                        
                            <b-list-group-item class="listitem" button v-for="item in playername"  :value="item.id" :key="item.user">
                                {{item.user}}
                            </b-list-group-item>
                        
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import ModalCustomComponent from '../components/Modal.vue'
export default {
        data() {
            return {
                playername: [
                    {user: 'player 1', id:1},
                    {user: 'player 2', id:2},
                    {user: 'player 3', id:3},
                    {user: 'player 4', id:4}   
                ],
                listgroup: [
                    {grup: 'grup 1', id:1 , jumlahplayer: 2, player: []},
                    {grup: 'grup 2', id:2 , jumlahplayer: 3, player: []},
                ],
                listplayer: [
                    {playeruser: 'player 1'},
                    {playeruser: 'player 2'}
                ],
                grup:'',
                nextId: 3,
                jumlahPlayer:0,
                player:[],
                selectedPlayer: null
            }
        },
        methods:{
            showDynamicComponentModal() {
                this.$modal.show(ModalCustomComponent, {
                   
                })
            },
            addNewGroup: function () {
                this.listgroup.push({
                    grup: 'grup'+ ' ' + this.nextId + '',
                    id: this.nextId++,
                    jumlahPlayer: 0,
                    player: [],

                })
            },
            removegroup: function (index) {
                this.listgroup.splice(index, 1);
            },
            changePlayer(event) {
                this.selectedPlayer = event.target.options[event.target.options.selectedIndex].text
            },
            submit() {
                this.listplayer.push({
                    playeruser: this.selectedPlayer
                });
            }
        }
    }
</script>

<style scoped>
.Group {
    display: flex;
    margin: 1em 1em 1em 1.25em;
    justify-content: left;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    color: rgb(167, 167, 167);
}
.groupcard{
    margin : 1em;
    padding: 10px;
    background-color: transparent;
}

.tambahgrup{
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid #FFFFFF;
    margin: 0em 0em 0em 2em;
    box-sizing: border-box;
    border-radius: 2em;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background-color: #212121;
    color: #FFFFFF;
    text-align: center;
    transition: all 0.2s;
}
.list{
    justify-content: center;
    align-items: center;
}
.listitem{
    background-color: transparent;
    color: white;
}
.listitem.active{
    background-color: #69DADB;
}
.btn-choice{
    margin: 10px;
}
.form-control{ 
    display: flex;
    margin: 1em; 
    width: 75%;
    background-color: #082032;
    color: lightcyan; 
}
.btn-submit {
    margin: 1em;
    padding: 10px;
}
.span-default{
    margin:10px;
    color: #99A799;
}
/deep/ .modalcontent{
    background-color: #082032;
}
 /deep/ .modalbubble > .modal-dialog > .modal-content > .modal-header {
    background-color: #082032;
    color: lightcyan;
}
</style>