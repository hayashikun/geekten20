<template>
  <div id="app">
    <Header/>
    <Introduction/>
    <Outline/>
    <Motivation/>
    <Product/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Motivation from "@/components/Motivation";
import Product from "@/components/Product";
import Outline from "@/components/Outline";
import Footer from "@/components/Footer";


export default {
  name: 'App',
  components: {
    Footer,
    Outline,
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
