<template>
  <div class="players">
  <div>
<h1> Players </h1>
</div>
<li v-for="player in players" :key="player.firstName">

   <b-card
    border-variant="primary"
       :header=player.firstName
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
    
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  </li>
  </div>
</template>

<script>


import {BTable} from 'bootstrap-vue'
import { BCard } from 'bootstrap-vue'


export default {
  name: 'PlayerCards',
  data () {
    return {
      fields: [ 
        { key: 'age', label: 'Age' },
        { key: 'firstName', label: 'First Name' },
        { key: 'lastName', label: 'Last Name' },
         { key: 'edit', label: 'Edit' },


      ],
     players: [
     {id:1, age: 40, firstName: 'Dickerson', lastName: 'Macdonald' },
          { id:2,age: 21, firstName: 'Larsen', lastName: 'Shaw' },
          { id:3,age: 89, firstName: 'Geneva', lastName: 'Wilson' },
          { id:4,age: 38, firstName: 'Jami', lastName: 'Carney' }
     ]
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
