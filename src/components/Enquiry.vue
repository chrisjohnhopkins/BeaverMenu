<template>
  <div class="enquiry">
    <h2>Planning an Event?..</h2>
    <p>Get in touch to see how we could help with the catering..</p>
    <div class="panel panel-default">
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addCustomer">
          <div class="form-group">
            <label for="name">Name:</label>
            <input v-validate="{ required: true}" type="text" id="name" name="name" class="form-control" v-model="newCustomer.name">
            <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
          </div>
          <div class="form-group">
            <label for="name">Company:</label>
            <input type="text" v-validate="{ required: true}" id="company" class="form-control" v-model="newCustomer.company" name="company">
            <span v-show="errors.has('company')">{{ errors.first('company') }}</span>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input v-validate="{ required: true, email: true}" type="text" id="email" class="form-control" name="email" v-model="newCustomer.email">
            <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
          </div>
          <div class="form-group">
            <label for="email">Tel:</label>
            <input v-validate="{ required: true}" type="text" id="tel" name="tel" class="form-control" v-model="newCustomer.tel">
            <span v-show="errors.has('tel')">{{ errors.first('tel') }}</span>
          </div>
          <div class="form-group">
            <label for="email">Message:</label>
            <textarea name="message" type="text" v-validate="{ required: true}" id="email" class="form-control" v-model="newCustomer.enquiry"></textarea>
            <span v-show="errors.has('message')">{{ errors.first('message') }}</span>
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
import toastr from 'toastr'
import VeeValidate from 'vee-validate'

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
      this.$validator.validateAll().then((result) => {
        if (result) {
          customersRef.push(this.newCustomer)
            .then((data)=>{
                toastr.success('You have been added to the mailing list');
                this.newCustomer.name = '';
                this.newCustomer.email = '';
                this.newCustomer.company = '';
                this.newCustomer.tel = '';
                this.newCustomer.enquiry = '';
            })
            .catch((error)=>{
              alert(error)
            })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
   display: block;
}

.form-group span {
  display: block;
  color: red;
  font-weight: bold;
  font-size: 15px;
  margin: 10px 0px;
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
  font-size: 15px;
}

textarea {
  min-height: 100px;
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
