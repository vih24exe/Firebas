<template>
  <div class="container">
      <div class="row">
        <h1>http</h1>
        <div class="form-group">
          <label>Username:</label>
          <input v-model="user.username" class="form-control" type="text">
        </div>
          <div class="form-group">
          <label>Email:</label>
          <input v-model="user.email" class="form-control" type="text">
          </div>
          <button @click="Submit" class="btn btn-primary">Submit</button>
      </div>
      </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data(){
    return{
      user:{
        username:"",
        email:"",
        },
        users:[]
    } 
  },
  methods:{
    Submit(){
      axios.post('https://proyecto-48cc1.firebaseio.com/Usuario.json', 
      this.user).then(Response =>{
        axios.get('https://proyecto-48cc1.firebaseio.com/Usuario.json').then (
          Response => {this.users = Response.data;}
        );
        console.log(Response);
        });
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
