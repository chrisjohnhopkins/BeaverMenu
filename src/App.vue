<template>
  <div id="app">
    <div class="container">
    <h1>Beaver Menu.</h1>
      <div class="menu col-50">
        <ul v-if="menu && menu.length">
          <li v-for ="item in menu">
            <MenuItem v-bind:item="item"/>
          </li>
        </ul>
      </div>
      <div class="sign-up col-50">
        <Enquiry/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from './components/MenuItem'
import Enquiry from './components/Enquiry'

export default {
  name: 'App',
  components: {
    MenuItem,
    Enquiry
  },
  data () {
    return {
      loading: true,
      menu: null,
      newCustomer: {
        name: '',
        email: ''
      }
    }
  },
  created () {
    this.getMenu();
  },
  methods: {
    getMenu: function () {
      fetch('https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1')
        .then((data)=>{
          console.log('hellooo');
          return data.json()
        })
        .then((data)=>{
          this.menu = data.menu.items;
          this.loading = false;
          console.log(this.menu);
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(168, 225, 226);
  margin: 0px;
  min-height: 800px;
}

.container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 40px;
  max-width: 1100px;
  margin: auto;
}

p{
  margin-top: 0px;
}

.col-50 {
  width: 50%;
  padding: 26px;
  box-sizing: border-box;
}

body {
  margin: 0px;
}

h1 {
  margin-top: 0px;
  font-size: 40px;
  text-transform: uppercase;
  flex: 0 1 100%;
  margin-bottom: 0px;
}

ul {
  margin: 0px;
  list-style-type: none;
  padding: 0px;
}
</style>
