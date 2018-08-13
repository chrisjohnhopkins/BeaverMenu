<template>
  <div class="enquiry">
    <h2>Planning an Event?..</h2>
    <p>Get in touch to see how we could help with the catering..</p>
    <div class="panel panel-default">
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addCustomer">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" class="form-control" v-model="newCustomer.name">
          </div>
          <div class="form-group">
            <label for="name">Company:</label>
            <input type="text" id="company" class="form-control" v-model="newCustomer.company">
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" class="form-control" v-model="newCustomer.email">
          </div>
          <div class="form-group">
            <label for="email">Tel:</label>
            <input type="text" id="tel" class="form-control" v-model="newCustomer.tel">
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <textarea type="text" id="email" class="form-control" v-model="newCustomer.enquiry"></textarea>
          </div>
          <input type="submit" class="btn btn-primary" value="Sign up">
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import Firebase from 'firebase'
import config from '../config'

let app = Firebase.initializeApp(config)
let db = app.database()
let customersRef = db.ref('customers')

export default {
  name: 'enquiry',
  props: ['customersRefPush'],
  data () {
    return {
      newCustomer: {
        name: '',
        email: '',
        company: '',
        tel: '',
        enquiry: ''
      }
    }
  },
  methods: {
    addCustomer: function () {
      customersRef.push(this.newCustomer)
        .then((data)=>{
          alert('You have been added to the mailing list');
        })
        .catch((error)=>{
          alert(error)
        })
      this.newCustomer.name = '';
      this.newCustomer.email = '';
      this.newCustomer.company = '';
      this.newCustomer.tel = '';
      this.newCustomer.enquiry = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
   display: block;
}

h2 {
  margin-top: 0px;
  font-size: 30px;
  text-transform: uppercase;
  flex: 0 1 100%;
  margin-bottom: 0px;
}

input, textarea {
  width: 280px;
  padding: 8px 13px;
}
input.btn.btn-primary {
  background-color: #2c3e50;
  display: inline-block;
  width: auto;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
