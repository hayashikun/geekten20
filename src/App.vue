<template>
  <div id="app">
    <Header/>
    <Introduction/>
    <Motivation/>
    <Product/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Motivation from "@/components/Motivation";
import Product from "@/components/Product";


export default {
  name: 'App',
  components: {
    Product,
    Motivation,
    Introduction,
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
