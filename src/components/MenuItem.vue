<template>
  <div class="menu-item">
    <h3>{{item.name}}</h3>
    <p>{{item.details}} <span class="price">{{ item.prices.price.price }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-transform: uppercase;
  margin-bottom: 0px;
  font-weight: bolder;
}

p {
  margin-top: 0px;
}

span.price {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
