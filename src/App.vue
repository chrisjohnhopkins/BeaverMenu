<template>
  <div id="app">
    <div class="container">
      <div class="menu col-50">
        <h1>Beaver Menu.</h1>
        <ul v-if="menu && menu.length">
          <li v-for ="item in menu">
            <MenuItem v-bind:item="item"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from './components/MenuItem'

export default {
  name: 'App',
  components: {
    MenuItem
  },
  data () {
    return {
      loading: true,
      menu: null
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
  flex-wrap: wrap;
  padding: 40px;
}

.col-50 {
  width: 50%;
}

body {
  margin: 0px;
}

h1 {
  margin-top: 0px;
  font-size: 40px;
  text-transform: uppercase;
}

ul {
  margin: 0px;
  list-style-type: none;
  padding: 0px;
}
</style>
