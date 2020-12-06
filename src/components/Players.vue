<template>
  <div class="players">
    <b-table dark :items="players" :fields="fields">
       <template #cell(age)="rowData">
      {{rowData.item.age}}
      </template>
        <template #cell(firstName)="rowData">
      {{rowData.item.firstName}}
      </template>
      <template #cell(lastName)="rowData">
      {{rowData.item.lastName}}
      </template>
      <template #cell(edit)="data">
      <b-button>Edit</b-button>
      </template>

    </b-table>
  </div>
</template>

<script>


import {BTable} from 'bootstrap-vue'

export default {
  name: 'Players',
  data () {
    return {
      fields: [ 
        { key: 'age', label: 'Age' },
        { key: 'firstName', label: 'First Name' },
        { key: 'lastName', label: 'Last Name' },
         { key: 'edit', label: 'Edit' },


      ],
     players: [
     { age: 40, firstName: 'Dickerson', lastName: 'Macdonald' },
          { age: 21, firstName: 'Larsen', lastName: 'Shaw' },
          { age: 89, firstName: 'Geneva', lastName: 'Wilson' },
          { age: 38, firstName: 'Jami', lastName: 'Carney' }
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
